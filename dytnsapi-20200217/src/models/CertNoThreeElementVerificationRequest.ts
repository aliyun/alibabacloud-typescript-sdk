// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertNoThreeElementVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  certName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3***************0
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iVBOFMKODOFNDFP123DFSMOO...
   */
  certPicture?: string;
  /**
   * @example
   * 示例值示例值
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certName: 'CertName',
      certNo: 'CertNo',
      certPicture: 'CertPicture',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      certName: 'string',
      certNo: 'string',
      certPicture: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

