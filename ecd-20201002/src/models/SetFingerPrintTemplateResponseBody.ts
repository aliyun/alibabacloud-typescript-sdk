// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFingerPrintTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 0711abb9-4cf8-41b2-9d0e-b51209468631;da4VFPNxwY3CZegFjOrCNw==;iHp2l9/qGcfD4tWx7jZIZQ==
   */
  encryptedPassword?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * CDE666EA-4FCD-5024-895C-8698E3D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      index: 'Index',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      index: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

