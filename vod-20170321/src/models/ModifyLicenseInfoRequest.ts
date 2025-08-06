// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLicenseInfoRequest extends $dara.Model {
  accountId?: number;
  beginTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  contractNo?: string;
  customerId?: number;
  expiredOn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  licenseId?: string;
  operator?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      beginTime: 'BeginTime',
      businessType: 'BusinessType',
      contractNo: 'ContractNo',
      customerId: 'CustomerId',
      expiredOn: 'ExpiredOn',
      extraInfo: 'ExtraInfo',
      licenseId: 'LicenseId',
      operator: 'Operator',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      beginTime: 'string',
      businessType: 'string',
      contractNo: 'string',
      customerId: 'number',
      expiredOn: 'string',
      extraInfo: 'string',
      licenseId: 'string',
      operator: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

