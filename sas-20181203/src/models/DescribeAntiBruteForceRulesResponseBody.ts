// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAntiBruteForceRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data entries displayed on the current page during a paginated query.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page during a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of data entries displayed per page during a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of created anti-brute force rules.
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
   * RDP interception method, with values:
   *   - **on**: Enabled
   *   - **off**: Disabled
   * 
   * @example
   * on
   */
  rdp?: string;
  /**
   * @remarks
   * SQL Server interception method, with values:
   *   - **on**: Enabled
   *   - **off**: Disabled
   * 
   * @example
   * off
   */
  sqlServer?: string;
  /**
   * @remarks
   * SSH interception method, with values:
   *   - **on**: Enabled
   *   - **off**: Disabled
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
   * The timestamp when the anti-brute force rule was created. Unit: milliseconds.
   * 
   * @example
   * 1669800181000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Whether the current rule is the default rule. Values:
   * - **true**: It is the default rule.
   * - **false**: It is not the default rule.
   * 
   * > A default anti-brute force rule will apply to all servers that do not have a defense rule added.
   * 
   * @example
   * true
   */
  defaultRule?: boolean;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be considered.
   * 
   * @example
   * false
   */
  enableSmartRule?: boolean;
  /**
   * @remarks
   * The threshold for the number of failed login attempts before the brute force defense rule takes effect.
   * 
   * @example
   * 15
   */
  failCount?: number;
  /**
   * @remarks
   * The duration (in minutes) for which the attacker\\"s IP is disabled after the brute force defense rule takes effect.
   * 
   * @example
   * 360
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The ID of the anti-brute force rule.
   * 
   * @example
   * 1629
   */
  id?: number;
  /**
   * @remarks
   * The number of servers configured with this brute force defense rule.
   * 
   * @example
   * 3
   */
  machineCount?: number;
  /**
   * @remarks
   * Name of the brute force attack defense rule.
   * 
   * @example
   * AntiBruteForceRule01
   */
  name?: string;
  /**
   * @remarks
   * The types of protocols supported by the anti-brute force rule for interception.
   */
  protocolType?: DescribeAntiBruteForceRulesResponseBodyRulesProtocolType;
  /**
   * @remarks
   * The time threshold (in minutes) for the brute force defense rule to take effect. For example, if **span** is 10, it means that if the number of failed login attempts exceeds the set threshold within 10 minutes, the anti-brute force rule will take effect and block logins for a specified period.
   * 
   * @example
   * 10
   */
  span?: number;
  /**
   * @remarks
   * A list of UUIDs for the servers that have this anti-brute force rule configured.
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
   * Pagination information of the query result.
   */
  pageInfo?: DescribeAntiBruteForceRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for this request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D
   */
  requestId?: string;
  /**
   * @remarks
   * List of details of the anti-brute force rules.
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

