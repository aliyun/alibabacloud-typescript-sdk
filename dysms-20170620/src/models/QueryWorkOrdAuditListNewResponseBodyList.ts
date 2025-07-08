// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorkOrdAuditListNewResponseBodyListParam } from "./QueryWorkOrdAuditListNewResponseBodyListParam";


export class QueryWorkOrdAuditListNewResponseBodyList extends $dara.Model {
  auditRemark?: string;
  auditResult?: string;
  bizType?: string;
  createDate?: string;
  ordId?: string;
  ordStatus?: string;
  param?: QueryWorkOrdAuditListNewResponseBodyListParam;
  static names(): { [key: string]: string } {
    return {
      auditRemark: 'AuditRemark',
      auditResult: 'AuditResult',
      bizType: 'BizType',
      createDate: 'CreateDate',
      ordId: 'OrdId',
      ordStatus: 'OrdStatus',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRemark: 'string',
      auditResult: 'string',
      bizType: 'string',
      createDate: 'string',
      ordId: 'string',
      ordStatus: 'string',
      param: QueryWorkOrdAuditListNewResponseBodyListParam,
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

