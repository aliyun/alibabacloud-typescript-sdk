// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of account asset fingerprint entries on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of account asset fingerprint entries per page in a paging query. Default value: **10**, which indicates 10 account asset fingerprint entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of account asset fingerprint entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      nextToken: 'string',
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

export class DescribePropertyUserDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the account.
   * 
   * @example
   * never
   */
  accountsExpirationDate?: string;
  /**
   * @remarks
   * The timestamp of the latest Asset Fingerprints scan. Unit: milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The details of the user groups to which the account belongs.
   */
  groupNames?: string[];
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-hp35tftuh52wbp1g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * hc-host-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 100.104.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The list of IP addresses of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * Indicates whether the account is an interactive logon account. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isCouldLogin?: number;
  /**
   * @remarks
   * Indicates whether the password has expired. Valid values:
   * 
   * - **0**: Expired.
   * - **1**: Not expired.
   * 
   * @example
   * 1
   */
  isPasswdExpired?: number;
  /**
   * @remarks
   * Indicates whether the password is locked. Valid values:
   * 
   * - **0**: Locked.
   * - **1**: Not locked.
   * 
   * @example
   * 1
   */
  isPasswdLocked?: number;
  /**
   * @remarks
   * Indicates whether the account has ROOT permissions. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isRoot?: string;
  /**
   * @remarks
   * Indicates whether the account is a sudo account. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isSudoer?: number;
  /**
   * @remarks
   * Indicates whether the user has expired. Valid values:
   * 
   * - **0**: Expired.
   * - **1**: Not expired.
   * 
   * @example
   * 1
   */
  isUserExpired?: number;
  /**
   * @remarks
   * The source IP address of the last logon of the account.
   * 
   * @example
   * 192.168.XX.XX
   */
  lastLoginIp?: string;
  /**
   * @remarks
   * The time of the last logon of the account.
   * 
   * @example
   * 2022-04-04 18:07:06
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * The timestamp of the last logon of the account. Unit: milliseconds.
   * 
   * @example
   * 1649066826000
   */
  lastLoginTimeDt?: number;
  /**
   * @remarks
   * The timestamp of the last logon of the account. Unit: milliseconds.
   * 
   * @example
   * 1649066826000
   */
  lastLoginTimestamp?: number;
  /**
   * @remarks
   * The expiration time of the account password.
   * 
   * @example
   * never
   */
  passwordExpirationDate?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * **
   */
  status?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * bin
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 162eb349-c2d9-4f8b-805c-75b43d4c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountsExpirationDate: 'AccountsExpirationDate',
      createTimestamp: 'CreateTimestamp',
      groupNames: 'GroupNames',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      isCouldLogin: 'IsCouldLogin',
      isPasswdExpired: 'IsPasswdExpired',
      isPasswdLocked: 'IsPasswdLocked',
      isRoot: 'IsRoot',
      isSudoer: 'IsSudoer',
      isUserExpired: 'IsUserExpired',
      lastLoginIp: 'LastLoginIp',
      lastLoginTime: 'LastLoginTime',
      lastLoginTimeDt: 'LastLoginTimeDt',
      lastLoginTimestamp: 'LastLoginTimestamp',
      passwordExpirationDate: 'PasswordExpirationDate',
      status: 'Status',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountsExpirationDate: 'string',
      createTimestamp: 'number',
      groupNames: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      isCouldLogin: 'number',
      isPasswdExpired: 'number',
      isPasswdLocked: 'number',
      isRoot: 'string',
      isSudoer: 'number',
      isUserExpired: 'number',
      lastLoginIp: 'string',
      lastLoginTime: 'string',
      lastLoginTimeDt: 'number',
      lastLoginTimestamp: 'number',
      passwordExpirationDate: 'string',
      status: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupNames)) {
      $dara.Model.validateArray(this.groupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: DescribePropertyUserDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the account asset fingerprint entries returned.
   */
  propertys?: DescribePropertyUserDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 33A71BE3-2CC2-14CB-B460-33A1DD82953A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyUserDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyUserDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertys)) {
      $dara.Model.validateArray(this.propertys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

