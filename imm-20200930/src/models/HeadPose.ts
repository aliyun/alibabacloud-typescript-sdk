// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HeadPose extends $dara.Model {
  /**
   * @remarks
   * The angel of elevation or depression of the head. Unit: degree. Valid values: -180 to 180. A recommended range for reliable results is from -30 to 30.
   * 
   * @example
   * 18.385589599609375
   */
  pitch?: number;
  /**
   * @remarks
   * The angle of the tilt to the side. Unit: degree. Valid values: -180 to 180. A recommended range for reliable results is from -45 to 45.
   * 
   * @example
   * 4.204030513763428
   */
  roll?: number;
  /**
   * @remarks
   * The angle of leftward or rightward rotation of the head. Unit: degree. Valid values: -180 to 180. A recommended range for reliable results is from -80 to 80.
   * 
   * @example
   * 2.4945924282073975
   */
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

