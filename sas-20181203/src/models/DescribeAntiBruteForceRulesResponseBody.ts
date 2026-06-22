// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntiBruteForceRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of brute-force attacks prevention rules that have been created.
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
   * The RDP interception mode. Valid values:
   *   - **on**: enabled
   *   - **off**: disabled.
   * 
   * @example
   * on
   */
  rdp?: string;
  /**
   * @remarks
   * The SqlServer interception mode. Valid values:
   *   - **on**: enabled
   *   - **off**: disabled.
   * 
   * @example
   * off
   */
  sqlServer?: string;
  /**
   * @remarks
   * The SSH interception mode. Valid values:
   *   - **on**: enabled
   *   - **off**: disabled.
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
   * The UNIX timestamp when the brute-force attacks prevention rule was created. Unit: milliseconds.
   * 
   * @example
   * 1669800181000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the current rule is the default rule. Valid values:
   * - **true**: The rule is the default rule.
   * - **false**: The rule is not the default rule.
   * 
   * > A brute-force attacks prevention rule that is configured as the default rule takes effect on all servers that do not have a prevention rule configured. See Settings for more information.
   * 
   * @example
   * true
   */
  defaultRule?: boolean;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * false
   */
  enableSmartRule?: boolean;
  /**
   * @remarks
   * The threshold for the number of failed logon attempts that triggers the brute-force attacks prevention rule.
   * 
   * @example
   * 15
   */
  failCount?: number;
  /**
   * @remarks
   * The duration for which the attacker IP address is disabled after the brute-force attacks prevention rule is triggered. Unit: minutes.
   * 
   * @example
   * 360
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The ID of the brute-force attacks prevention rule.
   * 
   * @example
   * 1629
   */
  id?: number;
  /**
   * @remarks
   * The number of servers to which the brute-force attacks prevention rule is applied.
   * 
   * @example
   * 3
   */
  machineCount?: number;
  /**
   * @remarks
   * The name of the brute-force attacks prevention rule.
   * 
   * @example
   * AntiBruteForceRule01
   */
  name?: string;
  /**
   * @remarks
   * The protocol types that the brute-force attacks prevention rule supports for interception.
   */
  protocolType?: DescribeAntiBruteForceRulesResponseBodyRulesProtocolType;
  /**
   * @remarks
   * The time threshold within which the brute-force attacks prevention rule takes effect. Unit: minutes. For example, if **Span** is set to 10, the brute-force attacks prevention rule is triggered and blocks logon attempts for the specified duration when the number of failed logon attempts within 10 minutes exceeds the settings threshold.
   * 
   * @example
   * 10
   */
  span?: number;
  /**
   * @remarks
   * The list of UUIDs of the servers to which the brute-force attacks prevention rule is applied.
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
   * The pagination information of the query result.
   */
  pageInfo?: DescribeAntiBruteForceRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * The details of brute-force attacks prevention rules.
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

