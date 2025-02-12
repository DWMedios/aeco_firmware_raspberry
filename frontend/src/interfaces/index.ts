export * from './Pages'

type method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type WebSocketHook = {
  command: MessageWebSocket
  sendCommand: (message: string) => void
  socketOn: boolean
}

export type MessageWebSocket = {
  success?: boolean
  message?: string
}

export interface ApiParams {
  url: string
  method?: method
  headers?: Record<string, string>
  body?: object
}

export interface Icon {
  icon?: 'offline' | 'loading'
}

export interface Url {
  url: string
}

export interface Layout {
  children: React.ReactNode
  image: string
}

export type BorderRadiusType =
  | 'full'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'

export enum BorderRadiusEnum {
  full = 'full',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xl2 = '2xl',
  xl3 = '3xl',
}

export enum BorderColorEnum {
  red = 'border-[#FF0000]',
  green = 'border-[#00804F]',
}

export enum FontSizeEnum {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  xl2 = '2xl',
  xl3 = '3xl',
  xl4 = '4xl',
  xl5 = '5xl',
  xl6 = '6xl',
  xl7 = '7xl',
  xl8 = '8xl',
  xl9 = '9xl',
}

export enum TextColorEnum {
  black = 'text-black',
  white = 'text-white',
  pink = 'text-[#FE5A8F]',
  green = 'text-[#6FAF46]',
}

export enum BackgroundButtonEnum {
  white = 'bg-white',
  pink = 'bg-[#FE5A8F]',
  green = 'bg-[#6FAF46]',
}

export enum PositionButtonEnum {
  static = 'static',
  fixed = 'fixed',
  absolute = 'absolute',
  relative = 'relative',
  sticky = 'sticky',
}

export interface ButtonInterface {
  action?: () => void | Promise<void> | null
  bgColor?: BackgroundButtonEnum | null
  borderRadius?: BorderRadiusEnum
  label: string
  borderColor?: BorderColorEnum | null
  textColor?: TextColorEnum | null
  url?: string
  fontSize?: FontSizeEnum
  positionButton?: PositionButtonEnum | null
}

export interface BackButtoninterface {
  bgColor?: string | null
  url: string
  imageSrc?: string
}

export interface CardRewardinterface {
  bgColor?: string | null
  url: string
  imageSrc?: string
  label: string
}

export interface SocialMedia {
  name: string
  icon: JSX.Element
}

export interface MediasProps {
  socialMedias: SocialMedia[]
}

export interface Container {
  name: string
  icon: string
}

export interface ContainersConditions {
  container: Container
  conditions: string[]
}

export interface ArrayContainersConditions {
  containers: ContainersConditions[]
}

export interface PaginationButtonsInterface {
  onPrevious: () => void
  onNext: () => void
  isPreviousDisabled: boolean
  isNextDisabled: boolean
  previousImageSrc: string
  nextImageSrc: string
}

export interface TicketButtonInterface {
  imageSrc: string
  altText: string
  buttonText: string
  buttonClass?: string
  imgClass?: string
  textClass?: string
  url: string
  disabled?: boolean
}

export interface QRCodeInterface {
  value: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  includeMargin?: boolean
  marginSize?: number
  fgColor?: string
  title?: string
  bgColor?: string
}

export interface ConditionsCardProps {
  icon: string
  items: string[]
  title: string
}
export interface Packaging {
  name: string
  packaging: string
}
export interface Packagings {
  can: number
  bottle: number
  packagings: Packaging[]
}

export interface Movement {
  can_number: number
  bottle_number: number
  folio: string
  synchronized: boolean
}

export interface TimerProps {
  initialTime: number
  className?: string
  onEnd?: () => void
}

export interface ScreenLayoutProps extends Layout {
  showTimer?: boolean
  timerInitialTime?: number
}

export interface PaperStatusResponse {
  status: boolean;
  message: string; 
}

