// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficControlTaskTrafficInfoTargetTrafficsDataValue extends $dara.Model {
  /**
   * @example
   * 80
   */
  traffic?: number;
  recorfTime?: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
      recorfTime: 'RecorfTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
      recorfTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

