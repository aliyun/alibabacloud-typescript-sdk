// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntiBruteForceRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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

export class DescribeAntiBruteForceRulesResponseBodyRulesProtocolType extends $dara.Model {
  /**
   * @remarks
   * RDP interception method, values: 
   * - **on**: enable 
   * - **off**: disable
   * 
   * @example
   * on
   */
  rdp?: string;
  /**
   * @remarks
   * SqlServer interception mode, with values: 
   * - **on**: enable 
   * - **off**: disable
   * 
   * @example
   * off
   */
  sqlServer?: string;
  /**
   * @remarks
   * SSH interception method, with values: 
   * - **on**: enabled 
   * - **off**: disabled
   * 
   * @example
   * on
   */
  ssh?: string;
  static names(): { [key: string]: string } {
    return {
      rdp: 'Rdp',
      sqlServer: 'SqlServer',
      ssh: 'Ssh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdp: 'string',
      sqlServer: 'string',
      ssh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * 防暴力破解规则创建时间戳。单位：毫秒。
   * 
   * @example
   * 1669800181000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the defense rule is the default rule. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  The default rule takes effect on all servers that are not protected by defense rules against brute-force attacks.
   * 
   * @example
   * true
   */
  defaultRule?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * false
   */
  enableSmartRule?: boolean;
  /**
   * @remarks
   * The threshold of logon failures that you specify.
   * 
   * @example
   * 15
   */
  failCount?: number;
  /**
   * @remarks
   * The period of time during which logons from an account are not allowed. Unit: minutes.
   * 
   * @example
   * 360
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The ID of the defense rule.
   * 
   * @example
   * 1629
   */
  id?: number;
  /**
   * @remarks
   * The number of servers to which the defense rule is applied.
   * 
   * @example
   * 3
   */
  machineCount?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * @example
   * AntiBruteForceRule01
   */
  name?: string;
  /**
   * @remarks
   * The types of protocols that the brute force cracking rule supports to intercept.
   */
  protocolType?: DescribeAntiBruteForceRulesResponseBodyRulesProtocolType;
  /**
   * @remarks
   * The period of time during which logon failures from an account are measured. Unit: minutes. If **Span** is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.
   * 
   * @example
   * 10
   */
  span?: number;
  /**
   * @remarks
   * An array consisting of the UUIDs of servers to which the defense rule is applied.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      defaultRule: 'DefaultRule',
      enableSmartRule: 'EnableSmartRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      id: 'Id',
      machineCount: 'MachineCount',
      name: 'Name',
      protocolType: 'ProtocolType',
      span: 'Span',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      defaultRule: 'boolean',
      enableSmartRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      id: 'number',
      machineCount: 'number',
      name: 'string',
      protocolType: DescribeAntiBruteForceRulesResponseBodyRulesProtocolType,
      span: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.protocolType && typeof (this.protocolType as any).validate === 'function') {
      (this.protocolType as any).validate();
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAntiBruteForceRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the defense rules returned.
   */
  rules?: DescribeAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAntiBruteForceRulesResponseBodyPageInfo,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeAntiBruteForceRulesResponseBodyRules },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

