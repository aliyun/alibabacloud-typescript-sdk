// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseInfoResponseBodyData extends $dara.Model {
  auditDesc?: string;
  enterpriseId?: number;
  enterpriseName?: string;
  managerContactNumber?: string;
  managerName?: string;
  organizationCode?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      auditDesc: 'AuditDesc',
      enterpriseId: 'EnterpriseId',
      enterpriseName: 'EnterpriseName',
      managerContactNumber: 'ManagerContactNumber',
      managerName: 'ManagerName',
      organizationCode: 'OrganizationCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDesc: 'string',
      enterpriseId: 'number',
      enterpriseName: 'string',
      managerContactNumber: 'string',
      managerName: 'string',
      organizationCode: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseInfoResponseBody extends $dara.Model {
  code?: string;
  data?: ListEnterpriseInfoResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListEnterpriseInfoResponseBodyData },
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

