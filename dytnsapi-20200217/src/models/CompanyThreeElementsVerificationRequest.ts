// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompanyThreeElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >Log on to the [Cell Phone Number Service console](https://dytns.console.aliyun.com/overview?spm=a2c4g.608385.0.0.79847f8b3awqUC) and go to the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page to obtain the authorization ID, which is the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The company name.
   * 
   * This parameter is required.
   * 
   * @example
   * 某企业
   */
  epCertName?: string;
  /**
   * @remarks
   * The company certificate number.
   * 
   * This parameter is required.
   * 
   * @example
   * 9242032*******J627
   */
  epCertNo?: string;
  /**
   * @remarks
   * The name of the company\\"s legal representative.
   * >If the company has multiple legal representatives, separate the names with the Chinese enumeration comma ("、").
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
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

