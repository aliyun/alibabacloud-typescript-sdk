// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * Review status. Valid values:
   * 
   * - **0**: Information pending completion.
   * - **1**, **2**, **3**, **4**: Under review.
   * - **5**: Review failed.
   * - **6**: Review succeeded.
   * - **7**: Review canceled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Review type. Valid value:
   * 
   * **1**: Offline domain name transfer.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * Domain name to query.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
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

