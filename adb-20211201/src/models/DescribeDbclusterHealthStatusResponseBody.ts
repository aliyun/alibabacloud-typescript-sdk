// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterHealthStatusResponseBodyCS extends $dara.Model {
  /**
   * @remarks
   * The number of healthy access nodes.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of access nodes.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of access nodes. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable access nodes.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyExecutor extends $dara.Model {
  /**
   * @remarks
   * The number of healthy access nodes.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of compute nodes.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of compute node groups. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable access nodes.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyWorker extends $dara.Model {
  /**
   * @remarks
   * The number of healthy storage node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of storage node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky storage node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of storage node groups. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable storage node groups.
   * 
   * @example
   * 0
   */
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The access nodes of the queried cluster.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * The compute node groups of the queried cluster.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health state of the cluster. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * >  When the states of the access nodes, compute node groups, and storage node groups of a cluster are all **NORMAL** and a connection to the cluster is established, the state of the cluster is **NORMAL**. When the state of the access nodes, compute node groups, or storage node groups of the cluster is **RISK**, the state of the cluster is **RISK**. When the state of the access nodes, compute node groups, or storage node groups of the cluster is **UNAVAILABLE**, the state of the cluster is **UNAVAILABLE**.
   * 
   * @example
   * NORMAL
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEA
   */
  requestId?: string;
  /**
   * @remarks
   * The storage node groups of the queried cluster.
   */
  worker?: DescribeDBClusterHealthStatusResponseBodyWorker;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      CS: 'CS',
      executor: 'Executor',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      CS: DescribeDBClusterHealthStatusResponseBodyCS,
      executor: DescribeDBClusterHealthStatusResponseBodyExecutor,
      instanceStatus: 'string',
      requestId: 'string',
      worker: DescribeDBClusterHealthStatusResponseBodyWorker,
    };
  }

  validate() {
    if(this.CS && typeof (this.CS as any).validate === 'function') {
      (this.CS as any).validate();
    }
    if(this.executor && typeof (this.executor as any).validate === 'function') {
      (this.executor as any).validate();
    }
    if(this.worker && typeof (this.worker as any).validate === 'function') {
      (this.worker as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

