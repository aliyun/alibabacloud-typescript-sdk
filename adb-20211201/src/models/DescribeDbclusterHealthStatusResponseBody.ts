// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterHealthStatusResponseBodyCS extends $dara.Model {
  /**
   * @remarks
   * The number of healthy instance access nodes.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of instance access nodes.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of instance access nodes at risk.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health status of the instance access nodes. Valid values:
   * 
   * - **RISK**: The instance access nodes are at risk.
   * 
   * - **NORMAL**: The instance access nodes are healthy.
   * 
   * - **UNAVAILABLE**: The instance access nodes are unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable instance access nodes.
   * 
   * @example
   * 1
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
   * The number of healthy executor nodes.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of executor nodes.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of executor nodes at risk.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health status of the executor groups. Valid values:
   * 
   * - **RISK**: The executor groups are at risk.
   * 
   * - **NORMAL**: The executor groups are healthy.
   * 
   * - **UNAVAILABLE**: The executor groups are unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable executor nodes.
   * 
   * @example
   * 1
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
   * The number of healthy worker node groups.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of worker node groups.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of worker node groups at risk.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The health status of the worker node groups. Valid values:
   * 
   * - **RISK**: The worker node groups are at risk.
   * 
   * - **NORMAL**: The worker node groups are healthy.
   * 
   * - **UNAVAILABLE**: The worker node groups are unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable worker node groups.
   * 
   * @example
   * 1
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
  /**
   * @remarks
   * Details of the authentication failure.
   * 
   * @example
   * Authentication failed.
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The health status of the instance access nodes.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * The health status of the executor groups.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health status of the cluster. Valid values:
   * 
   * - **RISK**: The cluster is at risk.
   * 
   * - **NORMAL**: The cluster is healthy.
   * 
   * - **UNAVAILABLE**: The cluster is unavailable.
   * 
   * > The cluster health status is considered **NORMAL** only if the instance access nodes, executor groups, and worker node groups are all **NORMAL**, and the instance is responsive. If any of these components has a **RISK** status, the cluster status is **RISK**. If any component has an **UNAVAILABLE** status, the cluster status is **UNAVAILABLE**.
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
   * 1AD222E9-E606-4A42-BF6D-8A4442913CAV
   */
  requestId?: string;
  /**
   * @remarks
   * The health status of the worker node groups.
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

