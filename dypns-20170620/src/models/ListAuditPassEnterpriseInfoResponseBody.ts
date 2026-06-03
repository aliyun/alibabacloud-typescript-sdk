// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditPassEnterpriseInfoResponseBodyData extends $dara.Model {
  enterpriseId?: number;
  enterpriseName?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      enterpriseName: 'EnterpriseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      enterpriseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditPassEnterpriseInfoResponseBody extends $dara.Model {
  code?: string;
  data?: ListAuditPassEnterpriseInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAuditPassEnterpriseInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
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

