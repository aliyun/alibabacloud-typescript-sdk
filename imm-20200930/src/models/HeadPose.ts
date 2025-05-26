// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HeadPose extends $dara.Model {
  pitch?: number;
  roll?: number;
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

