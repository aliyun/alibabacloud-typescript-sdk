// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  certId?: string;
  /**
   * @remarks
   * The region of the certificate. Valid values:
   * 
   * *   **ap-southeast-1**: Singapore
   * *   **cn-hangzhou**: China (Hangzhou)
   * 
   * Default value: **cn-hangzhou**
   * 
   * @example
   * cn-hangzhou
   */
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

