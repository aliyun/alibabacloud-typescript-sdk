// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListNewResponseBodyList extends $dara.Model {
  auditStatus?: number;
  domain?: string;
  gmtCreate?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      domain: 'Domain',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      domain: 'string',
      gmtCreate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

