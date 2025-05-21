// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectTaskRequestFramesSubtitle extends $dara.Model {
  /**
   * @example
   * BottomLeft
   */
  alignment?: string;
  /**
   * @example
   * #ffffff
   */
  backgroundColor?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 32
   */
  fontSize?: number;
  /**
   * @example
   * 11
   */
  maxCharLength?: number;
  /**
   * @example
   * 2
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * 22
   */
  textHeight?: number;
  /**
   * @example
   * 11
   */
  textWidth?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      backgroundColor: 'backgroundColor',
      font: 'font',
      fontColor: 'fontColor',
      fontSize: 'fontSize',
      maxCharLength: 'maxCharLength',
      positionX: 'positionX',
      positionY: 'positionY',
      textHeight: 'textHeight',
      textWidth: 'textWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      backgroundColor: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'number',
      maxCharLength: 'number',
      positionX: 'number',
      positionY: 'number',
      textHeight: 'number',
      textWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

