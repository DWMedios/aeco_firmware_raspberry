import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";
import { BackgroundButtonEnum, TextColorEnum } from '../../interfaces';

const Unidentified = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-[1255px]">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center">
            ENVASE NO IDENTIFICADO
          </span>
        </div>
        <img
          src="/images/unidentified.png"
          alt=""
          className="m-10 mb-20 w-auto h-96"
        />

        <Button 
        label='¡INTENTAR DE NUEVO!' 
        url="/insert" 
        bgColor={BackgroundButtonEnum.green}
        borderColor={null}
        textColor={TextColorEnum.white}/>

        <Button 
        label='FINALIZAR' 
        url="/rewards" 
        borderColor="border-4 border-[#FE5A8F]"
        textColor={TextColorEnum.pink}/>
      </div>
    </ScreenLayout>
  );
};

export default Unidentified;