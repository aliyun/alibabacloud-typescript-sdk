// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtFaceDataQuality extends $dara.Model {
  /**
   * @remarks
   * The blur of the face image. Valid values: 0 to 100. The higher the score, the more fuzzy it is.
   * Recommended values: 0 to 25.
   * 
   * @example
   * 5.88
   */
  blur?: number;
  /**
   * @remarks
   * The integrity of the human face. Recommended values:80 to 100.
   * 
   * @example
   * 100.0
   */
  integrity?: number;
  /**
   * @remarks
   * The head-up or head-down angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.88
   */
  pitch?: number;
  /**
   * @remarks
   * The plane rotation angle of the face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  roll?: number;
  /**
   * @remarks
   * The left and right shaking angle of the human face.
   * Recommended values:-30 to 30.
   * 
   * @example
   * 5.18
   */
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      integrity: 'Integrity',
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      integrity: 'number',
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

