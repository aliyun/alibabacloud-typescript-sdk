// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyResponseBodyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The code of the access region group.
   * 
   * @example
   * DEFAULT
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the access region group.
   * 
   * @example
   * Global
   */
  groupName?: string;
  /**
   * @remarks
   * The code for the line of the access region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The name for the line of the access region.
   * 
   * @example
   * Global
   */
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
   * The access policy.
   * 
   * @example
   * AUTO
   */
  accessMode?: string;
  /**
   * @remarks
   * The access status. Valid values:
   * 
   * *   **DEFAULT**: Indicates normal when the default address pool is accessed.
   * *   **FAILOVER**: Indicates an exception when a failover address pool is accessed.
   * 
   * @example
   * DEFAULT
   */
  accessStatus?: string;
  /**
   * @remarks
   * Indicates whether health check is enabled for the default address pool.
   * 
   * @example
   * OPEN
   */
  defaultAddrPoolMonitorStatus?: string;
  /**
   * @remarks
   * The name of the default address pool.
   */
  defaultAddrPoolName?: string;
  /**
   * @remarks
   * The availability status of the default address pool.
   * 
   * @example
   * AVAILABLE
   */
  defaultAddrPoolStatus?: string;
  /**
   * @remarks
   * The ID of the default address pool.
   * 
   * @example
   * hra0i1
   */
  defultAddrPoolId?: string;
  /**
   * @remarks
   * The ID of the failover address pool.
   * 
   * @example
   * hra0i2
   */
  failoverAddrPoolId?: string;
  /**
   * @remarks
   * Indicates whether health check is enabled for the failover address pool.
   * 
   * @example
   * OPEN
   */
  failoverAddrPoolMonitorStatus?: string;
  /**
   * @remarks
   * The name of the failover address pool.
   */
  failoverAddrPoolName?: string;
  /**
   * @remarks
   * The availability status of the failover address pool.
   * 
   * @example
   * AVAILABLE
   */
  failoverAddrPoolStatus?: string;
  /**
   * @remarks
   * The ID of the GTM instance whose access policy details you want to query.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The returned lines of access regions.
   */
  lines?: DescribeGtmAccessStrategyResponseBodyLines;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA1608CA-834C-4E63-8682-8AF0B11ED72D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the access policy queried.
   * 
   * @example
   * hra0hs
   */
  strategyId?: string;
  /**
   * @remarks
   * The mode of traffic scheduling.
   * 
   * @example
   * SELF_DEFINED
   */
  strategyMode?: string;
  /**
   * @remarks
   * The name of the access policy queried.
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

