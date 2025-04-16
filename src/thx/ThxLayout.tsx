import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import sparkles from '../assets/sparkles.png';
import { useTimeout } from '../hooks/useTimeout';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={sparkles} width={80} height={80} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="small" style={{ margin: '24px 0 12px' }} weight="bold">
          Не получилось добавить Доход на остаток в подписку
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Уже знаем в чём дело и чиним. Попробуйте ещё раз позже
        </Typography.Text>
      </div>
      <Gap size={96} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile href="https://alfa.me/ght" block view="secondary">
          К Альфа-Смарт
        </ButtonMobile>
      </div>
    </>
  );
};
export const ThxSpinner = () => {
  useTimeout(() => {
    window.location.replace('https://alfa.me/ght');
  }, 3500);
  return (
    <>
      <div className={thxSt.container} style={{ height: '100vh' }}>
        <div className={thxSt.loader} />
      </div>
    </>
  );
};
