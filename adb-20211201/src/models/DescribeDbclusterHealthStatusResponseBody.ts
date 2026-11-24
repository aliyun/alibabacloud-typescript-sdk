// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterHealthStatusResponseBodyCS extends $dara.Model {
  /**
   * @remarks
   * The number of healthy nodes.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of access nodes.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of nodes at risk.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The status of instance access nodes. Valid values:
   * - **RISK**: At risk.
   * - **NORMAL**: Healthy.
   * - **UNAVAILABLE**: Unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable nodes.
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
   * The number of healthy nodes.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of compute nodes.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of nodes at risk.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health status of compute node groups. Valid values:
   * - **RISK**: At risk.
   * - **NORMAL**: Healthy.
   * - **UNAVAILABLE**: Unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable nodes.
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
   * The number of healthy storage node groups.
   * 
   * @example
   * 0
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of storage node groups.
   * 
   * @example
   * 1
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of storage node groups at risk.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The health status of storage node groups. Valid values:
   * - **RISK**: At risk.
   * - **NORMAL**: Healthy.
   * - **UNAVAILABLE**: Unavailable.
   * 
   * @example
   * UNAVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable storage node groups.
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
   * The details of the authentication failure.
   * 
   * @example
   * Authentication failed.
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The list of instance access node statuses.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * The list of health statuses for compute node groups.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health status of the cluster. Valid values:
   * - **RISK**: At risk.
   * - **NORMAL**: Healthy.
   * - **UNAVAILABLE**: Unavailable.
   * > If the instance access node status, compute node group health status, and storage node group health status are all **Healthy** and the instance health check succeeds, the cluster health status is **Healthy**. If any of the three statuses is **At risk**, the cluster health status is **At risk**. If any of the three statuses is **Unavailable**, the cluster health status is **Unavailable**.
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
   * The list of health statuses for storage node groups.
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

