// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageRequestImageControlLogoVisibleControl extends $dara.Model {
  angle?: number;
  logoBase64?: string;
  mode?: string;
  opacity?: number;
  posAx?: number;
  posAy?: number;
  posX?: number;
  posY?: number;
  spaceX?: number;
  spaceY?: number;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      logoBase64: 'LogoBase64',
      mode: 'Mode',
      opacity: 'Opacity',
      posAx: 'PosAx',
      posAy: 'PosAy',
      posX: 'PosX',
      posY: 'PosY',
      spaceX: 'SpaceX',
      spaceY: 'SpaceY',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      logoBase64: 'string',
      mode: 'string',
      opacity: 'number',
      posAx: 'number',
      posAy: 'number',
      posX: 'number',
      posY: 'number',
      spaceX: 'number',
      spaceY: 'number',
      visible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

