// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficControlTaskTrafficInfoTaskTrafficsValue extends $dara.Model {
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

