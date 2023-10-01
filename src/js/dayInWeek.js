import format from 'date-fns/format';
import { pl } from 'date-fns/locale';

const today = new Date();

let dayOfWeek = format(today, 'EEEE', { locale: pl });

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

dayOfWeek = capitalizeFirstLetter(dayOfWeek);

export {dayOfWeek};