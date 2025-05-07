// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryCertificateConfig extends $dara.Model {
  /**
   * @example
   * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCmZha2VDZXJ0aWZpY2F0ZQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t
   */
  certBase64?: string;
  /**
   * @example
   * true
   */
  insecure?: boolean;
  static names(): { [key: string]: string } {
    return {
      certBase64: 'CertBase64',
      insecure: 'Insecure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBase64: 'string',
      insecure: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

