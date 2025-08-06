// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodCertificateDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certId?: string;
  certRegion?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certRegion: 'CertRegion',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certRegion: 'string',
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

