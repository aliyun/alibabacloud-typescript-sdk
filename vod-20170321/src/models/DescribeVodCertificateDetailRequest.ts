// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

