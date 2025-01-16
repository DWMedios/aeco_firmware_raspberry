import BackButton from '../../components/backButton'
import ScreenLayout from '../../components/layout/screenLayout'
import ListDonatives from './components/listDonatives'

const Donatives = () => {
  return (
    <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
      <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
        <BackButton url="/rewards" />
        <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
          ELIGE TU DONATIVO
        </h1>
        <ListDonatives />
      </div>
    </ScreenLayout>
  )
}

export default Donatives
