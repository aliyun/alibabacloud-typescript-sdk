// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTask2Request extends $dara.Model {
  bcId?: number;
  clientId?: number;
  static names(): { [key: string]: string } {
    return {
      bcId: 'bcId',
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcId: 'number',
      clientId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

