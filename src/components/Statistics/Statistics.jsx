//import PropTypes from 'prop-types';
import Stats from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={Stats.statistics}>
      {title && <h2 className={Stats.title}>{title.toUpperCase()}</h2>}
      <ul className={Stats.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={Stats.item}
            key={id}
            style={{ backgroundColor: colorScale(percentage) }}
          >
            <span className={Stats.label}>{label}</span>
            <span className={Stats.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const colorScale = percentage => {
  if (percentage <= 90 && percentage >= 31) return 'red';
  else if (percentage <= 30 && percentage >= 21) return 'orange';
  else if (percentage <= 20 && percentage >= 11) return 'green';
  else if (percentage <= 10 && percentage >= 0) return 'yellowgreen';
};
