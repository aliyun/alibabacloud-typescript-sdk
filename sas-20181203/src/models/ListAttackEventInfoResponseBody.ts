// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackEventInfoResponseBodyList extends $dara.Model {
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
   * - other: Other
   * 
   * @example
   * 9
   */
  attackType?: string;
  /**
   * @remarks
   * The mapped name of the attack type. Valid values:
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
   * - other: Other
   * 
   * @example
   * SQL Server brute-force attacks
   */
  attackTypeName?: string;
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The Attack Target Ports of the Attack Target.
   * 
   * @example
   * 8000
   */
  dstPort?: string;
  /**
   * @remarks
   * The time when the attack event first occurred, in timestamp format.
   * 
   * @example
   * 1752731615000
   */
  firstTime?: number;
  /**
   * @remarks
   * The time when the attack event first occurred, in string format.
   * 
   * @example
   * 2025-07-17 13:53:35
   */
  firstTimeStr?: string;
  /**
   * @remarks
   * The ID of the attack event.
   * 
   * @example
   * 18825544674********
   */
  id?: string;
  /**
   * @remarks
   * The instance name of the attacked asset.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the attacked asset.
   * 
   * @example
   * 101.37.86.**
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the attacked asset.
   * 
   * @example
   * 10.1.0.**
   */
  intranetIp?: string;
  /**
   * @remarks
   * The time when the attack event most recently occurred.
   * 
   * This field is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1752731618000
   */
  latestTime?: number;
  /**
   * @remarks
   * The time when the attack event most recently occurred, in string format.
   * 
   * @example
   * 2025-07-17 13:53:38
   */
  latestTimeStr?: string;
  /**
   * @remarks
   * The MD5 hash of the attack payload.
   * 
   * @example
   * a57b0d657369e4201eed8d47a4dc****
   */
  payloadMd5?: string;
  /**
   * @remarks
   * The Attack Source IP Addresses.
   * 
   * @example
   * 140.205.11.**
   */
  srcIp?: string;
  /**
   * @remarks
   * The attack status. Valid values:
   * - block: Blocked (defended).
   * 
   * @example
   * block
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the attacked asset instance.
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
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of attack events.
   */
  list?: ListAttackEventInfoResponseBodyList[];
  /**
   * @remarks
   * The returned message of the request result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAttackEventInfoResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: The call is successful.
   * - **false**: The call failed.
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

