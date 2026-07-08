// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CertNoTwoElementVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > In **Cell Phone Number Service** -> [**Tag Marketplace**](https://dytns.console.aliyun.com/analysis/square), select a tag and submit an application for use. After the application is approved, you will obtain the authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * QASDW@#**
   */
  authCode?: string;
  /**
   * @remarks
   * The name to be verified.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  certName?: string;
  /**
   * @remarks
   * The ID card number to be verified.
   * 
   * This parameter is required.
   * 
   * @example
   * 3***************0
   */
  certNo?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      certName: 'CertName',
      certNo: 'CertNo',
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

