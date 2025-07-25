// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $dara.Model {
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

export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $dara.Model {
  line?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
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

export class DescribeGtmAccessStrategiesResponseBodyStrategies extends $dara.Model {
  strategy?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The ID of the request.
   * 
   * @example
   * 0CCC9971-CEC9-4132-824B-4AE611C07623
   */
  requestId?: string;
  /**
   * @remarks
   * The returned list of access policies of the GTM instance.
   */
  strategies?: DescribeGtmAccessStrategiesResponseBodyStrategies;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeGtmAccessStrategiesResponseBodyStrategies,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.strategies && typeof (this.strategies as any).validate === 'function') {
      (this.strategies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

