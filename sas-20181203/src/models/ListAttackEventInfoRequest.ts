// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackEventInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Attacked asset. You can fill in the machine instance name, public IP, or private IP.
   * 
   * @example
   * instance_**
   */
  attackInstance?: string;
  /**
   * @remarks
   * Attack type. Values:
   * - 9: SQL Server brute force attack
   * - 5: SSH brute force attack
   * - 6: RDP brute force attack
   * - 101: Java Struts2 attack interception
   * - 102: Redis attack interception
   * - 103: Chinese AntSword WebShell communication
   * - 104: Chinese Chopper WebShell communication
   * - 133: XISE WebShell communication
   * - 161: WebShell upload
   * - 209: PHP WebShell upload
   * - 210: JSP WebShell upload
   * - 211: ASP WebShell upload
   * - 215: Special suffix WebShell upload
   * - ai_webshell: Intelligent defense for WebShell upload
   * - java_common_rce: Java common RCE vulnerability interception
   * - alinet_webrce: Adaptive web attack defense
   * 
   * @example
   * 9
   */
  attackType?: string;
  /**
   * @remarks
   * Page number to display in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Target port of the attack.
   * 
   * @example
   * 9085
   */
  dstPort?: string;
  /**
   * @remarks
   * Timestamp of the end time.
   * 
   * @example
   * 1753152532550
   */
  endTime?: number;
  /**
   * @remarks
   * Set the language type for request and response messages. Default is **zh**. Values:
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
   * Maximum number of records per page in a paginated query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Source IP of the attack.
   * 
   * @example
   * 185.237.96.***
   */
  srcIp?: string;
  /**
   * @remarks
   * Timestamp of the start time.
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

