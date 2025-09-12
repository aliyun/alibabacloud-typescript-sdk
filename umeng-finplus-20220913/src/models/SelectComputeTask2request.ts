// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectComputeTask2Request extends $dara.Model {
  bcConfirm?: boolean;
  bcId?: number;
  clientId?: number;
  static names(): { [key: string]: string } {
    return {
      bcConfirm: 'bcConfirm',
      bcId: 'bcId',
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bcConfirm: 'boolean',
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

