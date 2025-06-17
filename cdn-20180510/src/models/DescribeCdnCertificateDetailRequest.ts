// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate. You can query only one certificate at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * cert-15480655xxxx
   */
  certName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

