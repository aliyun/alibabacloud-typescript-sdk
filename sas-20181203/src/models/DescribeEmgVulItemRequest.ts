// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmgVulItemRequest extends $dara.Model {
  /**
   * @remarks
   * The check type. Valid values:
   * 
   * - **0**: POC verification
   * - **1**: version comparison.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The page number of the first page to return. Default value: **1**, which indicates that query results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates that 10 emergency vulnerability entries are displayed per page. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory (Alibaba Cloud account).
   * > Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The risk status of the vulnerabilities to query. If this parameter is not specified, vulnerabilities of all risk statuses are returned, including those with risks and those without risks. Valid values:
   * - **y**: at risk
   * - **n**: not at risk.
   * 
   * @example
   * y
   */
  riskStatus?: string;
  /**
   * @remarks
   * The detection method of the vulnerabilities to query. If this parameter is not specified, vulnerabilities detected by all methods are returned by default, including version detection and network scanning. Valid values:
   * - **python**: version detection (server software version detection). Detects whether your server has disclosed software vulnerabilities.
   * - **scan**: network scanning (network traffic detection). Detects whether your public assets (Internet-accessible servers) have vulnerabilities.
   * 
   * @example
   * python
   */
  scanType?: string;
  /**
   * @remarks
   * The name of the emergency vulnerability to query.
   * 
   * @example
   * Changjietong T + SetupAccount/Upload.aspx file Upload vulnerability (CNVD-2022-60632)
   */
  vulName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskStatus: 'RiskStatus',
      scanType: 'ScanType',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
      riskStatus: 'string',
      scanType: 'string',
      vulName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

