// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficControlTaskTrafficInfoTargetTrafficsDataValue extends $dara.Model {
  traffic?: number;
  recordTime?: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
      recordTime: 'RecordTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
      recordTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

