// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines } from "./DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines";


export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy extends $dara.Model {
  /**
   * @remarks
   * The access policy. Valid values:
   * 
   * *   **AUTO**: Automatic switch
   * *   **DEFAULT**: Default address pool
   * *   **FAILOVER**: Failover address pool
   * 
   * @example
   * DEFAULT
   */
  accessMode?: string;
  /**
   * @remarks
   * The access status. Valid values:
   * 
   * *   **DEFAULT**: The default address pool is currently accessed.
   * *   **FAILOVER**: The failover address pool is currently accessed.
   * 
   * @example
   * DEFAULT
   */
  accessStatus?: string;
  /**
   * @remarks
   * The time when the access policy was created.
   * 
   * @example
   * 2018-08-09T00:10Z
   */
  createTime?: string;
  /**
   * @example
   * 1533773400000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the default address pool.
   * 
   * @example
   * hra0i1
   */
  defaultAddrPoolId?: string;
  /**
   * @remarks
   * Indicates whether health check was enabled for the default address pool. Valid values:
   * 
   * *   **OPEN**: Enabled
   * *   **CLOSE**: Disabled
   * *   **UNCONFIGURED**: Not configured
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
   * The availability status of the default address pool. Valid values:
   * 
   * *   **AVAILABLE**: Available
   * *   **NOT_AVAILABLE**: Unavailable
   * 
   * @example
   * AVAILABLE
   */
  defaultAddrPoolStatus?: string;
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
   * Indicates whether health check was enabled for the failover address pool.
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
   * The ID of the GTM instance whose access policies you want to query.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The returned lines of access regions.
   */
  lines?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * @example
   * hra0hs
   */
  strategyId?: string;
  /**
   * @remarks
   * The mode of the access policy. **SELF_DEFINED** indicates that the access policy is user-defined.
   * 
   * @example
   * SELF_DEFINED
   */
  strategyMode?: string;
  /**
   * @remarks
   * The name of the access policy.
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessStatus: 'AccessStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      instanceId: 'InstanceId',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      defaultAddrPoolId: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      defaultAddrPoolStatus: 'string',
      failoverAddrPoolId: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      failoverAddrPoolName: 'string',
      failoverAddrPoolStatus: 'string',
      instanceId: 'string',
      lines: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
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

