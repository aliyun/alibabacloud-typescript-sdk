// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackEventInfoResponseBodyList extends $dara.Model {
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
   * - other: Other
   * 
   * @example
   * 9
   */
  attackType?: string;
  /**
   * @remarks
   * Mapped name of the attack type. Values:
   * - 9: SQL Server brute force
   * - 5: SSH brute force
   * - 6: RDP brute force
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
   * - other: Other
   * 
   * @example
   * SQL Server暴力破解
   */
  attackTypeName?: string;
  /**
   * @remarks
   * Number of attacks.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * Target port of the attack.
   * 
   * @example
   * 8000
   */
  dstPort?: string;
  /**
   * @remarks
   * First occurrence time of the attack event, in timestamp format.
   * 
   * @example
   * 1752731615000
   */
  firstTime?: number;
  /**
   * @remarks
   * String representation of the first occurrence time of the attack event.
   * 
   * @example
   * 2025-07-17 13:53:35
   */
  firstTimeStr?: string;
  /**
   * @remarks
   * ID of the attack event.
   * 
   * @example
   * 18825544674********
   */
  id?: string;
  /**
   * @remarks
   * Instance name of the attacked asset.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * Public IP of the attacked asset.
   * 
   * @example
   * 101.37.86.**
   */
  internetIp?: string;
  /**
   * @remarks
   * Private IP of the attacked asset.
   * 
   * @example
   * 10.1.0.**
   */
  intranetIp?: string;
  /**
   * @remarks
   * Timestamp of the most recent occurrence of the attack event.
   * 
   * @example
   * 1752731618000
   */
  latestTime?: number;
  /**
   * @remarks
   * String representation of the most recent occurrence time of the attack event.
   * 
   * @example
   * 2025-07-17 13:53:38
   */
  latestTimeStr?: string;
  /**
   * @remarks
   * MD5 string of the attack payload.
   * 
   * @example
   * a57b0d657369e4201eed8d47a4dc****
   */
  payloadMd5?: string;
  /**
   * @remarks
   * Source IP of the attack.
   * 
   * @example
   * 140.205.11.**
   */
  srcIp?: string;
  /**
   * @remarks
   * Attack status. Values:
   * - block: Blocked (defended)
   * 
   * @example
   * block
   */
  status?: string;
  /**
   * @remarks
   * UUID of the attacked asset instance.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      attackTypeName: 'AttackTypeName',
      count: 'Count',
      dstPort: 'DstPort',
      firstTime: 'FirstTime',
      firstTimeStr: 'FirstTimeStr',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      latestTime: 'LatestTime',
      latestTimeStr: 'LatestTimeStr',
      payloadMd5: 'PayloadMd5',
      srcIp: 'SrcIp',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'string',
      attackTypeName: 'string',
      count: 'number',
      dstPort: 'string',
      firstTime: 'number',
      firstTimeStr: 'string',
      id: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      latestTime: 'number',
      latestTimeStr: 'string',
      payloadMd5: 'string',
      srcIp: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttackEventInfoResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * Number of items displayed on the current page in pagination queries.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * Page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Maximum number of items per page in pagination queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 253
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttackEventInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code, **200** indicates success, any other value indicates failure. The caller can use this field to determine the reason for the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code, 200 indicates a successful request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * List of attack events.
   */
  list?: ListAttackEventInfoResponseBodyList[];
  /**
   * @remarks
   * Return message of the request result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: ListAttackEventInfoResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this call request, a unique identifier generated by Alibaba Cloud for the request, which can be used to troubleshoot and pinpoint issues.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - **true**: Success
   * - **false**: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListAttackEventInfoResponseBodyList },
      message: 'string',
      pageInfo: ListAttackEventInfoResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

