export const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const colorScale = (percentage) => {
  if (percentage <= 90 && percentage >= 31) return 'red';
  if (percentage <= 30 && percentage >= 21) return 'orange';
  if (percentage <= 20 && percentage >= 11) return 'green';
  if (percentage <= 10 && percentage >= 0) return 'yellowgreen';
}