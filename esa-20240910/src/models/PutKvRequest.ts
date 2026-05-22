// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvRequest extends $dara.Model {
  base64?: boolean;
  expiration?: number;
  expirationTtl?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      namespace: 'Namespace',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      namespace: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

