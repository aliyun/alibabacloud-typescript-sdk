// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficControlTaskTrafficInfoTargetTrafficsDataValue extends $dara.Model {
  /**
   * @remarks
   * The reported traffic for this target within the experiment.
   * 
   * @example
   * 80
   */
  traffic?: number;
  /**
   * @remarks
   * The timestamp indicating when the data was reported.
   * 
   * @example
   * 1760319273
   */
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

