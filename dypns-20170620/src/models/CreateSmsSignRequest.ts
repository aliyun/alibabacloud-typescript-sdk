// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessLicenseCert?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certType?: string;
  extendMessage?: string;
  oldSmsSignName?: string;
  orderId?: string;
  organizationCodeCert?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  smsSignName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  smsSignRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  smsSignSource?: string;
  taxRegistrationCert?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      businessLicenseCert: 'BusinessLicenseCert',
      certType: 'CertType',
      extendMessage: 'ExtendMessage',
      oldSmsSignName: 'OldSmsSignName',
      orderId: 'OrderId',
      organizationCodeCert: 'OrganizationCodeCert',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsSignName: 'SmsSignName',
      smsSignRemark: 'SmsSignRemark',
      smsSignSource: 'SmsSignSource',
      taxRegistrationCert: 'TaxRegistrationCert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      businessLicenseCert: 'string',
      certType: 'string',
      extendMessage: 'string',
      oldSmsSignName: 'string',
      orderId: 'string',
      organizationCodeCert: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsSignName: 'string',
      smsSignRemark: 'string',
      smsSignSource: 'string',
      taxRegistrationCert: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

