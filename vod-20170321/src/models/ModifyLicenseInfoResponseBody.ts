// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLicenseInfoResponseBodyLicenseInfo extends $dara.Model {
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

export class ModifyLicenseInfoResponseBody extends $dara.Model {
  licenseInfo?: ModifyLicenseInfoResponseBodyLicenseInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      licenseInfo: 'LicenseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseInfo: ModifyLicenseInfoResponseBodyLicenseInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.licenseInfo && typeof (this.licenseInfo as any).validate === 'function') {
      (this.licenseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

