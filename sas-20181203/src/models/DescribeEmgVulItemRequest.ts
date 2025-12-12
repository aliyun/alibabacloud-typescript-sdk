// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmgVulItemRequest extends $dara.Model {
  /**
   * @remarks
   * The check method. Valid values:
   * *   **0**: proof of concept (POC) verification
   * *   **1**: version comparison
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability poses risks.\\
   * If you do not specify this parameter, all vulnerabilities are queried regardless of whether the vulnerabilities pose risks. Valid values:
   * 
   * *   **y**: yes
   * *   **n**: no
   * 
   * @example
   * y
   */
  riskStatus?: string;
  /**
   * @remarks
   * The method that is used to detect the vulnerability.\\
   * If you do not specify this parameter, all vulnerabilities are queried regardless of which method is used. Valid values:
   * 
   * *   **python**: The Version method is used. Security Center checks the software versions of your server to check whether disclosed vulnerabilities exist on your server.
   * *   **scan**: The Network Scan method is used. Security Center analyzes the access traffic to your server over the Internet to check whether vulnerabilities exist on your server.
   * 
   * @example
   * python
   */
  scanType?: string;
  /**
   * @remarks
   * The name of the urgent vulnerability.
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

