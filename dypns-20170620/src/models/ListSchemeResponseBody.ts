// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemeResponseBodyData extends $dara.Model {
  applyTime?: number;
  auditDesc?: string;
  businessTypeList?: number[];
  companyName?: string;
  schemeId?: number;
  schemeName?: string;
  schemeType?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      auditDesc: 'AuditDesc',
      businessTypeList: 'BusinessTypeList',
      companyName: 'CompanyName',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      schemeType: 'SchemeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      auditDesc: 'string',
      businessTypeList: { 'type': 'array', 'itemType': 'number' },
      companyName: 'string',
      schemeId: 'number',
      schemeName: 'string',
      schemeType: 'number',
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

export class ListSchemeResponseBody extends $dara.Model {
  code?: string;
  data?: ListSchemeResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListSchemeResponseBodyData },
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

