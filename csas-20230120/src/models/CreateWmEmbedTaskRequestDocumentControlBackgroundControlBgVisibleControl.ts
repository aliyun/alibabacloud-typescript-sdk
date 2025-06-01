// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl extends $dara.Model {
  /**
   * @example
   * 30
   */
  angle?: number;
  /**
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @example
   * pos
   */
  mode?: string;
  /**
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @example
   * hello ****
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      horizontalNumber: 'HorizontalNumber',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      verticalNumber: 'VerticalNumber',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      horizontalNumber: 'number',
      mode: 'string',
      opacity: 'number',
      posX: 'string',
      posY: 'string',
      verticalNumber: 'number',
      visibleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

