// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UdpConfig extends $dara.Model {
  hashKey?: string;
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      hashKey: 'HashKey',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKey: 'string',
      scheduler: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

