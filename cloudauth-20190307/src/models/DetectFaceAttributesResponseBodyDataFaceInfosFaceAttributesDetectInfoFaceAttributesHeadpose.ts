// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $dara.Model {
  /**
   * @example
   * -1.5683923959732056
   */
  pitchAngle?: number;
  /**
   * @example
   * 7.163370132446289
   */
  rollAngle?: number;
  /**
   * @example
   * -6.925303936004639
   */
  yawAngle?: number;
  static names(): { [key: string]: string } {
    return {
      pitchAngle: 'PitchAngle',
      rollAngle: 'RollAngle',
      yawAngle: 'YawAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchAngle: 'number',
      rollAngle: 'number',
      yawAngle: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

