// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertInfo extends $dara.Model {
  /**
   * @example
   * xxx
   */
  certBody?: string;
  /**
   * @example
   * xxx
   */
  certName?: string;
  /**
   * @example
   * xxx
   */
  certPrivatekey?: string;
  static names(): { [key: string]: string } {
    return {
      certBody: 'cert_body',
      certName: 'cert_name',
      certPrivatekey: 'cert_privatekey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBody: 'string',
      certName: 'string',
      certPrivatekey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

