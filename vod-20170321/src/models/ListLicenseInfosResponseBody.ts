// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLicenseInfosResponseBodyLicenseList extends $dara.Model {
  accountId?: number;
  beginTime?: string;
  businessType?: string;
  contractNo?: string;
  createTime?: string;
  expiredOn?: string;
  extraInfo?: string;
  licenseId?: string;
  modifyTime?: string;
  status?: string;
  type?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      beginTime: 'BeginTime',
      businessType: 'BusinessType',
      contractNo: 'ContractNo',
      createTime: 'CreateTime',
      expiredOn: 'ExpiredOn',
      extraInfo: 'ExtraInfo',
      licenseId: 'LicenseId',
      modifyTime: 'ModifyTime',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      beginTime: 'string',
      businessType: 'string',
      contractNo: 'string',
      createTime: 'string',
      expiredOn: 'string',
      extraInfo: 'string',
      licenseId: 'string',
      modifyTime: 'string',
      status: 'string',
      type: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicenseInfosResponseBody extends $dara.Model {
  licenseList?: ListLicenseInfosResponseBodyLicenseList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      licenseList: 'LicenseList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseList: { 'type': 'array', 'itemType': ListLicenseInfosResponseBodyLicenseList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseList)) {
      $dara.Model.validateArray(this.licenseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

