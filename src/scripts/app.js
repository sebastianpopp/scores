import Alpine from 'alpinejs';
import i18n from './i18n';

i18n.addLocale('de', require('../lang/de.json'));
const __ = (key, replace = [], locale = null) => i18n.__(key, replace, locale);

Alpine.data('scores', () => ({
  players: Array.from({ length: 8 }, () => ''),
  round: -1,
  rounds: [],

  init() {
    const players = window.localStorage.getItem('scores_players');
    if (players) {
      this.players = JSON.parse(players);
    }

    const round = window.localStorage.getItem('scores_round');
    if (round) {
      this.round = parseInt(round);
    }

    const rounds = window.localStorage.getItem('scores_rounds');
    if (rounds) {
      this.rounds = JSON.parse(rounds);
    }

    Alpine.effect(() => {
      window.localStorage.setItem('scores_players', JSON.stringify(this.players));
      window.localStorage.setItem('scores_round', this.round);
      window.localStorage.setItem('scores_rounds', JSON.stringify(this.rounds));
    });
  },

  activePlayers() {
    return this.players.filter(player => player !== '');
  },

  activePlayersShort() {
    return this.activePlayers().map(player => player.substr(0, 3).toUpperCase());
  },

  nextRound() {
    if (this.round === -1 && this.activePlayers().length < 2) {
      alert(__("At least two players must be specified."));
      return;
    }

    if (this.round >= 0) {
      if (this.rounds[this.round].points.some(points => points === '')) {
        alert(__("All points must be specified."));
        return;
      }

      if (this.rounds[this.round].points.some(points => isNaN(parseInt(points, 10)))) {
        alert(__("All points must be numbers."));
        return;
      }
    }

    if (this.round === this.rounds.length - 1) {
      this.rounds.push({
        points: Array.from({ length: this.activePlayers().length }, () => ''),
      });
    }

    this.round = this.round + 1;
  },

  prevRound() {
    this.round = this.round - 1;
  },

  roundsPoints() {
    return this.rounds
      .slice(0, this.rounds.length - 1)
      .map(round => {
        return round.points.map(points => parseInt(points, 10));
      });
  },

  totalPoints() {
    return this.roundsPoints().reduce(
      (points, roundPoints) => points.map((p, i) => p + roundPoints[i]),
      Array.from({ length: this.activePlayers().length }, () => 0)
    );
  },

  reset() {
    if (!confirm(__("Really reset?"))) {
      return;
    }

    this.round = -1;
    this.rounds = [];
  },

  __(key, replace = [], locale = null) {
    return __(key, replace, locale);
  },
}));

Alpine.start();
