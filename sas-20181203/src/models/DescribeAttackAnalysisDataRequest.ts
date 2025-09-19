// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackAnalysisDataRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to encode the value of the **client_url** field in the query results by using the Base64 algorithm. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  base64?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**.
   * 
   * >  If the Type parameter is set to **DETAILS**, you must specify the CurrentPage parameter.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The condition that is used to filter attack events.
   * 
   * >  The following list describes the valid values of crack_type:
   * 
   * *   3: brute-force attack on MySQL
   * 
   * *   4: FTP brute-force attack
   * 
   * *   5: SSH brute-force attack
   * 
   * *   6: RDP brute-force attack
   * 
   * *   9: brute-force attack on Microsoft SQL Server
   * 
   * *   101: intercepted attack on Java Struts 2
   * 
   * *   102: intercepted attack on Redis
   * 
   * *   103: communication with AntSword Webshell
   * 
   * *   104: communication with China Chopper Webshell
   * 
   * *   133: communication with XISE Webshell
   * 
   * *   sqli: SQL injection
   * 
   * *   codei: code execution
   * 
   * *   xss: cross-site scripting (XSS)
   * 
   * *   lfi: local file inclusion
   * 
   * *   rfi: remote file inclusion
   * 
   * *   webshell: trojan script
   * 
   * *   upload: vulnerability upload
   * 
   * *   path: directory traversal
   * 
   * *   bypass: unauthorized access
   * 
   * *   csrf: cross-site request forgery (CSRF)
   * 
   * *   crlf: carriage return line feed (CRLF)
   * 
   * *   other: others
   * 
   * @example
   * {"crack_type":"9"}
   */
  data?: string;
  /**
   * @remarks
   * The timestamp when the attack stops. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1649040221
   */
  endTime?: number;
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
   * The number of entries to return on each page.
   * 
   * >  If the Type parameter is set to **DETAILS**, you must specify the PageSize parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The timestamp at which the attack starts. By default, the statistics of the previous seven days are queried. Unit: seconds.
   * 
   * >  The start time that you specify must be within the previous 40 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1644027670
   */
  startTime?: number;
  /**
   * @remarks
   * The details of attack analysis. Valid values:
   * 
   * *   **TOTAL**: number of attacks
   * *   **TREND**: attack trend
   * *   **PIE_CHART**: distribution of attacks by type
   * *   **SOURCE_TOP**: top 5 attack sources
   * *   **CLIENT_TOP**: top 5 attacked assets
   * *   **DETAILS**: attack details
   * 
   * >  If the Type parameter is set to **DETAILS**, you must specify the CurrentPage and PageSize parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * DETAILS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      currentPage: 'CurrentPage',
      data: 'Data',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'string',
      currentPage: 'number',
      data: 'string',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

