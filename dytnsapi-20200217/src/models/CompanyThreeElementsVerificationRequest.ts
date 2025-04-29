// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyThreeElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  epCertName?: string;
  /**
   * @remarks
   * The business license number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
  epCertNo?: string;
  /**
   * @remarks
   * The name of the legal representative.
   * 
   * >  If an enterprise has multiple legal representatives, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  legalPersonCertName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      epCertName: 'EpCertName',
      epCertNo: 'EpCertNo',
      legalPersonCertName: 'LegalPersonCertName',
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
      legalPersonCertName: 'string',
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

