// Convierte las horas a minutos y segundos
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convierte un número a formato de moneda
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};
// SessionStorage para almacenar el estado de la página de inicio
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionStorage && JSON.parse(sessionState);
};
