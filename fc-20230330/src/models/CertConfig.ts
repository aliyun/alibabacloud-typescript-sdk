// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-cert
   */
  certName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PEM format
   */
  certificate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PEM format
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'certName',
      certificate: 'certificate',
      privateKey: 'privateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

