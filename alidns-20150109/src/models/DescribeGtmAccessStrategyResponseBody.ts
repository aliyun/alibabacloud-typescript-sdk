// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyResponseBodyLinesLine extends $dara.Model {
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBodyLines extends $dara.Model {
  line?: DescribeGtmAccessStrategyResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyResponseBodyLinesLine },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The switchover policy for the address pool groups:
   * 
   * - **AUTO**: Automatic switchover
   * 
   * - **DEFAULT**: Primary address pool group
   * 
   * - **FAILOVER**: Secondary address pool group
   * 
   * @example
   * AUTO
   */
  accessMode?: string;
  /**
   * @remarks
   * The access status. Valid values:
   * 
   * - **DEFAULT**: Normal. Access requests are routed to the primary address pool group.
   * 
   * - **FAILOVER**: Abnormal. Access requests are routed to the secondary address pool group.
   * 
   * @example
   * DEFAULT
   */
  accessStatus?: string;
  /**
   * @remarks
   * The health check status of the primary address pool group. Valid values:
   * 
   * - **OPEN**: Enabled
   * 
   * - **CLOSE**: Disabled
   * 
   * - **UNCONFIGURED**: Not configured
   * 
   * @example
   * OPEN
   */
  defaultAddrPoolMonitorStatus?: string;
  /**
   * @remarks
   * The name of the primary address pool group.
   * 
   * @example
   * 地址池1
   */
  defaultAddrPoolName?: string;
  /**
   * @remarks
   * The availability status of the primary address pool group. Valid values:
   * 
   * - **AVAILABLE**: The address pool group is available.
   * 
   * - **NOT_AVAILABLE**: The address pool group is unavailable.
   * 
   * @example
   * AVAILABLE
   */
  defaultAddrPoolStatus?: string;
  /**
   * @remarks
   * The ID of the primary address pool group.
   * 
   * @example
   * hra0i1
   */
  defultAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the secondary address pool group. If no secondary address pool group is configured, **EMPTY** is returned.
   * 
   * @example
   * hra0i2
   */
  failoverAddrPoolId?: string;
  /**
   * @remarks
   * The health check status of the secondary address pool group. Valid values:
   * 
   * - **OPEN**: Enabled
   * 
   * - **CLOSE**: Disabled
   * 
   * - **UNCONFIGURED**: Not configured
   * 
   * @example
   * OPEN
   */
  failoverAddrPoolMonitorStatus?: string;
  /**
   * @remarks
   * The name of the secondary address pool group.
   * 
   * @example
   * 地址池2
   */
  failoverAddrPoolName?: string;
  /**
   * @remarks
   * The availability status of the secondary address pool group. Valid values:
   * 
   * - **AVAILABLE**: The address pool group is available.
   * 
   * - **NOT_AVAILABLE**: The address pool group is unavailable.
   * 
   * @example
   * AVAILABLE
   */
  failoverAddrPoolStatus?: string;
  /**
   * @remarks
   * The ID of the associated Global Traffic Manager (GTM) instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  lines?: DescribeGtmAccessStrategyResponseBodyLines;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * BA1608CA-834C-4E63-8682-8AF0B11ED72D
   */
  requestId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * hra0hs
   */
  strategyId?: string;
  /**
   * @remarks
   * The policy mode. SELF_DEFINED indicates a custom policy.
   * 
   * @example
   * SELF_DEFINED
   */
  strategyMode?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * @example
   * 全局
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessStatus: 'AccessStatus',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      defultAddrPoolId: 'DefultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      instanceId: 'InstanceId',
      lines: 'Lines',
      requestId: 'RequestId',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessStatus: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      defaultAddrPoolStatus: 'string',
      defultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      failoverAddrPoolName: 'string',
      failoverAddrPoolStatus: 'string',
      instanceId: 'string',
      lines: DescribeGtmAccessStrategyResponseBodyLines,
      requestId: 'string',
      strategyId: 'string',
      strategyMode: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    if(this.lines && typeof (this.lines as any).validate === 'function') {
      (this.lines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

