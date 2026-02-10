// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyUserDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of fingerprint information of account assets displayed on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page during pagination.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned using the NextToken method.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of account asset fingerprint information items to display per page during pagination. The default value is **10**, indicating that 10 items of account asset fingerprint information are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of account asset fingerprint information items queried.
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
   * The expiration date of the account.
   * 
   * @example
   * never
   */
  accountsExpirationDate?: string;
  /**
   * @remarks
   * The timestamp of the latest scan of the asset fingerprint. The unit is milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Detailed information about the user groups of the queried account.
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
   * Whether it is an interactive login account. Values:
   * - **0**: No
   *  - **1**: Yes
   * 
   * @example
   * 0
   */
  isCouldLogin?: number;
  /**
   * @remarks
   * Whether the password has expired. The values are:
   * 
   * - **0**: Expired
   * - **1**: Not expired
   * 
   * @example
   * 1
   */
  isPasswdExpired?: number;
  /**
   * @remarks
   * Whether the password is locked. Values:
   * - **0**: Locked 
   * - **1**: Not locked
   * 
   * @example
   * 1
   */
  isPasswdLocked?: number;
  /**
   * @remarks
   * Whether the account has ROOT permissions. The values include:
   * 
   * - **0**: No
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isRoot?: string;
  /**
   * @remarks
   * Whether it is a sudo account. Values:
   * - **0**: No 
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isSudoer?: number;
  /**
   * @remarks
   * Whether the user has expired. Values:
   * - **0**: Expired
   *  - **1**: Not expired
   * 
   * @example
   * 1
   */
  isUserExpired?: number;
  /**
   * @remarks
   * The source IP from which the account last logged in.
   * 
   * @example
   * 192.168.XX.XX
   */
  lastLoginIp?: string;
  /**
   * @remarks
   * The last login time of the account.
   * 
   * @example
   * 2022-04-04 18:07:06
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * The timestamp of the last login of the account. The unit is milliseconds.
   * 
   * @example
   * 1649066826000
   */
  lastLoginTimeDt?: number;
  /**
   * @remarks
   * The timestamp of the last login of the account. The unit is milliseconds.
   * 
   * @example
   * 1649066826000
   */
  lastLoginTimestamp?: number;
  /**
   * @remarks
   * The expiration date of the account password.
   * 
   * @example
   * never
   */
  passwordExpirationDate?: string;
  /**
   * @remarks
   * This parameter is deprecated and should be ignored.
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
   * Information displayed on the query result page.
   */
  pageInfo?: DescribePropertyUserDetailResponseBodyPageInfo;
  /**
   * @remarks
   * Details list of the queried account asset fingerprint information.
   */
  propertys?: DescribePropertyUserDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the current request, which is a unique identifier generated by Alibaba Cloud for the request, and can be used for troubleshooting and problem localization.
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

