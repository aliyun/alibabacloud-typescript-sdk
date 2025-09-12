// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptInvokeRequest extends $dara.Model {
  clientId?: number;
  data?: string;
  encryptKey?: string;
  methodName?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      data: 'data',
      encryptKey: 'encryptKey',
      methodName: 'methodName',
      sign: 'sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      data: 'string',
      encryptKey: 'string',
      methodName: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

