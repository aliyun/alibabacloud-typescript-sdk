// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyTwoElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization code.
   * 
   * >Log on to the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC), and obtain the authorization ID (i.e., authorization code) on the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * Enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * 某企业
   */
  epCertName?: string;
  /**
   * @remarks
   * Enterprise certificate number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
  epCertNo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      epCertName: 'EpCertName',
      epCertNo: 'EpCertNo',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      epCertName: 'string',
      epCertNo: 'string',
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

