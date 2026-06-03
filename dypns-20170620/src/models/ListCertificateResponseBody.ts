// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificateResponseBodyData extends $dara.Model {
  authorizationTime?: number;
  blockchainNo?: string;
  businessTypeList?: number[];
  cancelTime?: number;
  companyName?: string;
  endDate?: string;
  phoneNo?: string;
  schemeType?: number;
  startDate?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationTime: 'AuthorizationTime',
      blockchainNo: 'BlockchainNo',
      businessTypeList: 'BusinessTypeList',
      cancelTime: 'CancelTime',
      companyName: 'CompanyName',
      endDate: 'EndDate',
      phoneNo: 'PhoneNo',
      schemeType: 'SchemeType',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationTime: 'number',
      blockchainNo: 'string',
      businessTypeList: { 'type': 'array', 'itemType': 'number' },
      cancelTime: 'number',
      companyName: 'string',
      endDate: 'string',
      phoneNo: 'string',
      schemeType: 'number',
      startDate: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessTypeList)) {
      $dara.Model.validateArray(this.businessTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificateResponseBody extends $dara.Model {
  code?: string;
  data?: ListCertificateResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCertificateResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

