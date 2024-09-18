import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  PositionButtonEnum,
  TextColorEnum,
} from '../../interfaces'
import Footer from './components/Footer'
import LangHelp from './components/LangHelp'
import Navbar from './components/Navbar'
import SocialMediaList from './components/SocialMediaList'

function Home() {
  return (
    <ScreenLayout image="home_background.png">
      <div className="relative z-10 flex flex-auto items-center flex-col w-full pt-8 justify-center bg-transparent h-screen">
        <Navbar />
        <img className="w-[500px] fixed top-44" src="/images/aeco.png" alt="AECO Logo" />
        <img
          className="w-11/12 fixed top-1/4"
          src="/images/reciclaygana.png"
          alt="AECO Logo"
        />
        <LangHelp />
        <Button
          label="iniciar"
          bgColor={BackgroundButtonEnum.pink}
          borderColor={null}
          textColor={TextColorEnum.white}
          url="/conditions"
          borderRadius={BorderRadiusEnum.full}
          fontSize={FontSizeEnum.xl8}
          positionButton={PositionButtonEnum.fixed}
        />
        <SocialMediaList />
        <Footer />
      </div>
    </ScreenLayout>
  )
}

export default Home
