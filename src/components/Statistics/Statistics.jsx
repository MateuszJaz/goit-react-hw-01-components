import style from '../Statistics/statistics.module.css';
import propTypes from 'prop-types';
import { colorScale } from 'utils';

export const Statistics = ({ title, stats }) => (
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

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
