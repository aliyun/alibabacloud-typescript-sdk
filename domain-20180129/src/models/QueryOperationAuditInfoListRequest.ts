// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      auditType: 'AuditType',
      domainName: 'DomainName',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      auditType: 'number',
      domainName: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

