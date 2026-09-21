// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The attacked asset. You can specify the instance name, public IP address, or private IP address.
   * 
   * @example
   * instance_**
   */
  attackInstance?: string;
  /**
   * @remarks
   * The attack type. Valid values:
   * - 9: SQL Server brute-force attacks
   * - 5: SSH brute-force attacks
   * - 6: RDP brute-force attacks
   * - 101: Java Struts2 attack blocked
   * - 102: Redis attack blocked
   * - 103: China Chopper (AntSword) WebShell communication
   * - 104: China Chopper WebShell communication
   * - 133: XISE WebShell communication
   * - 161: WebShell upload
   * - 209: PHP WebShell upload
   * - 210: JSP WebShell upload
   * - 211: ASP WebShell upload
   * - 215: Special extension WebShell upload
   * - ai_webshell: WebShell upload intelligent defense
   * - java_common_rce: Java common RCE vulnerability blocked
   * - alinet_webrce: Adaptive web attack defense
   * 
   * @example
   * 9
   */
  attackType?: string;
  /**
   * @remarks
   * The number of the page to return in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The Attack Target Ports of the Attack Target.
   * 
   * @example
   * 9085
   */
  dstPort?: string;
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * This parameter is required. If this parameter is not specified, the API returns HTTP 400.
   * 
   * @example
   * 1753152532550
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The Attack Source IP Addresses.
   * 
   * @example
   * 185.237.96.***
   */
  srcIp?: string;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * This parameter is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required. If this parameter is not specified, the API returns HTTP 400.
   * 
   * @example
   * 1752547732549
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      attackInstance: 'AttackInstance',
      attackType: 'AttackType',
      currentPage: 'CurrentPage',
      dstPort: 'DstPort',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      srcIp: 'SrcIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackInstance: 'string',
      attackType: 'string',
      currentPage: 'number',
      dstPort: 'string',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      srcIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

