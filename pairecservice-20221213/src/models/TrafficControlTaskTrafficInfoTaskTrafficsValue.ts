// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficControlTaskTrafficInfoTaskTrafficsValue extends $dara.Model {
  /**
   * @remarks
   * The reported traffic for this experiment.
   * 
   * @example
   * 100
   */
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

