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
   * The number of risky access nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of access nodes. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
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
   * The number of healthy compute node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of compute node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky compute node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of compute node groups. Valid values:
   * 
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable compute node groups.
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
   * *   **RISK**: risky
   * *   **NORMAL**: healthy
   * *   **UNAVAILABLE**: unavailable
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
  /**
   * @remarks
   * Health state details of access nodes.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * Health state details of compute node groups.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health state of the cluster. Valid values:
   * 
   * *   **RISK**: risky
   * 
   * *   **NORMAL**: healthy
   * 
   * *   **UNAVAILABLE**: unavailable
   * 
   * > If the health states of access nodes, compute node groups, and storage node groups are all **healthy** and the cluster is detected to be alive, the health state of the cluster is **healthy**. If the preceding three health states include **risky**, the health state of the cluster is **risky**. If the preceding three health states include **unavailable**, the health state of the cluster is **unavailable**.
   * 
   * @example
   * NORMAL
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEA
   */
  requestId?: string;
  /**
   * @remarks
   * Health state details of storage node groups.
   */
  worker?: DescribeDBClusterHealthStatusResponseBodyWorker;
  static names(): { [key: string]: string } {
    return {
      CS: 'CS',
      executor: 'Executor',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

