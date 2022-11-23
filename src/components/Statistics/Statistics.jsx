import style from '../Statistics/statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  function colorScale(percentage) {
    if (percentage <= 90 && percentage >= 31) return 'red';
    else if (percentage <= 30 && percentage >= 21) return 'orange';
    else if (percentage <= 20 && percentage >= 11) return 'green';
    else if (percentage <= 10 && percentage >= 0) return 'yellowgreen';
  }

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title.toUpperCase()}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ backgroundColor: colorScale(percentage) }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
