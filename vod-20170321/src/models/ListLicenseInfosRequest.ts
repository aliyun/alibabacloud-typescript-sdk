// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLicenseInfosRequest extends $dara.Model {
  accountId?: number;
  businessType?: string;
  contractNo?: string;
  customerId?: number;
  endBeginTime?: string;
  endExpiredOn?: string;
  extraInfo?: string;
  licenseId?: string;
  pageNo?: number;
  pageSize?: number;
  sortBy?: string;
  startBeginTime?: string;
  startExpiredOn?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      businessType: 'BusinessType',
      contractNo: 'ContractNo',
      customerId: 'CustomerId',
      endBeginTime: 'EndBeginTime',
      endExpiredOn: 'EndExpiredOn',
      extraInfo: 'ExtraInfo',
      licenseId: 'LicenseId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startBeginTime: 'StartBeginTime',
      startExpiredOn: 'StartExpiredOn',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      businessType: 'string',
      contractNo: 'string',
      customerId: 'number',
      endBeginTime: 'string',
      endExpiredOn: 'string',
      extraInfo: 'string',
      licenseId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startBeginTime: 'string',
      startExpiredOn: 'string',
      status: 'string',
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

