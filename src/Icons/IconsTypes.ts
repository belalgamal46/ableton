export interface IconsType {
  size?: string;
  width?: string;
  height?: string;
}

export interface IconsTypeWithOnlyStroke extends IconsType {
  stroke?: string;
}

export interface IconsTypeWithOnlyFill extends IconsType {
  fill?: string;
}

export interface IconsTypeWithOnlyFillAndStroke extends IconsType {
  fill?: string;
  stroke?: string;
}
