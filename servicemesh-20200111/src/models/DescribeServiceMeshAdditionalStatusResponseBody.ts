// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CLB instance is locked. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  locked?: boolean;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   `PrePay`: subscription
   * *   `PayOnDemand`: pay-as-you-go
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * Indicates whether the CLB instance is reused. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  reused?: boolean;
  /**
   * @remarks
   * The check results of the number of backend servers of the CLB instance created for exposing Istio Pilot. Valid values:
   * 
   * *   `too_much`: An excessive number of backend servers are created.
   * *   `num_exact`: A proper number of backend servers are created.
   * *   `too_little`: The number of backend servers falls short.
   * 
   * @example
   * num_exact
   */
  SLBBackEndServerNumStatus?: string;
  /**
   * @remarks
   * The check results of the CLB instance. Valid values:
   * 
   * *   `exist`: The CLB instance exists.
   * *   `not_exist`: The CLB instance does not exist.
   * *   `conflict`: Conflicts are detected.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * exist
   */
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CLB instance is locked due to overdue payments. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  locked?: boolean;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   `PrePay`: subscription
   * *   `PayOnDemand` (default): pay-as-you-go
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * Indicates whether the CLB instance is reused. Valid values:
   * 
   * *   `true`: The CLB instance is reused. Non-ASM listener configuration is detected in the listener configurations of the CLB instance.
   * *   `false`: The CLB instance is not reused.
   * 
   * @example
   * false
   */
  reused?: boolean;
  /**
   * @remarks
   * The check result of the number of backend servers of the CLB instance created for exposing Istio Pilot. Valid values:
   * 
   * *   `num_exact`: A proper number of backend servers are created.
   * *   `too_much`: An excessive number of backend servers are created.
   * *   `too_little`: The number of backend servers falls short.
   * 
   * @example
   * num_exact
   */
  SLBBackEndServerNumStatus?: string;
  /**
   * @remarks
   * The check result of the CLB instance. Valid values:
   * 
   * *   `exist`: The CLB instance exists.
   * *   `not_exist`: The CLB instance does not exist.
   * *   `time_out`: The check times out.
   * *   `failed`: The CLB instance has expired.
   * 
   * @example
   * exist
   */
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CLB instance is locked. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  locked?: boolean;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * *   `PrePay`: subscription
   * *   `PayOnDemand`: pay-as-you-go
   * 
   * @example
   * PayOnDemand
   */
  payType?: string;
  /**
   * @remarks
   * Indicates whether the CLB instance is reused. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  reused?: boolean;
  /**
   * @remarks
   * The check results of the number of backend servers of the CLB instance created for exposing Istio Pilot. Valid values:
   * 
   * *   `too_much`: An excessive number of backend servers are created.
   * *   `num_exact`: A proper number of backend servers are created.
   * *   `too_little`: The number of backend servers falls short.
   * 
   * @example
   * num_exact
   */
  SLBBackEndServerNumStatus?: string;
  /**
   * @remarks
   * The check results of the CLB instance. Valid values:
   * 
   * *   `exist`: The CLB instance exists.
   * *   `not_exist`: The CLB instance does not exist.
   * *   `conflict`: Conflicts are detected.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * exist
   */
  SLBExistStatus?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      payType: 'PayType',
      reused: 'Reused',
      SLBBackEndServerNumStatus: 'SLBBackEndServerNumStatus',
      SLBExistStatus: 'SLBExistStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'boolean',
      payType: 'string',
      reused: 'boolean',
      SLBBackEndServerNumStatus: 'string',
      SLBExistStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether access logs exist. Valid values:
   * 
   * *   `exist`: Access logs exist.
   * *   `not_exist`: Access logs do not exist.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * exist
   */
  accessLogProjectStatus?: string;
  /**
   * @remarks
   * The check result of the EIP associated with the API server. Valid values:
   * 
   * *   `exist`: The EIP exists.
   * *   `not_exist`: The EIP does not exist.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * *   `not_in_use`: The EIP is not associated with the API Server.
   * *   `locked`: The EIP is locked.
   * 
   * @example
   * exist
   */
  apiServerEIPStatus?: string;
  /**
   * @remarks
   * The check results of the CLB instance created for exposing the API server.
   */
  apiServerLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus;
  /**
   * @remarks
   * Indicates whether audit logs exist. Valid values:
   * 
   * *   `exist`
   * *   `not exist`
   * 
   * @example
   * exist
   */
  auditProjectStatus?: string;
  canaryPilotEIPStatus?: string;
  /**
   * @remarks
   * The check results of the CLB instance that is created for exposing Istio Pilot and used during canary release.
   */
  canaryPilotLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus;
  /**
   * @remarks
   * Indicates whether control plane logs exist. Valid values:
   * 
   * *   `exist`: Control plane logs exist.
   * *   `not_exist`: Control plane logs do not exist.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * exist
   */
  controlPlaneProjectStatus?: string;
  /**
   * @remarks
   * Indicates whether Logtail is installed in clusters on the data plane.
   */
  logtailStatusRecord?: { [key: string]: any };
  /**
   * @remarks
   * The check result of whether the EIP is associated with the API server. Valid values:
   * 
   * *   `exist`: The EIP exists.
   * *   `not_exist`: The EIP does not exist.
   * *   `failed`: The check fails.
   * *   `time_out`: The check is timed out.
   * *   `not_in_use`: The EIP is not associated with the API server.
   * *   `locked`: The EIP is locked.
   * 
   * @example
   * exist
   */
  pilotEIPStatus?: string;
  /**
   * @remarks
   * The check results of the CLB instance created for exposing Istio Pilot.
   */
  pilotLoadBalancerStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus;
  /**
   * @remarks
   * The status of the RAM OAuth application that is integrated with Mesh Topology. Valid values:
   * 
   * *   `exist`: The RAM OAuth application exists.
   * *   `reused`: The RAM OAuth application is reused.
   * *   `not_exist`: The RAM OAuth application does not exist.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * reused
   */
  RAMApplicationStatus?: string;
  /**
   * @remarks
   * Indicates whether the security group is reused. Valid values:
   * 
   * *   `reused`: The security group is reused.
   * *   `not_reused`: The security group is not reused.
   * *   `failed`: The check fails.
   * *   `time_out`: The check times out.
   * 
   * @example
   * reused
   */
  sgStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogProjectStatus: 'AccessLogProjectStatus',
      apiServerEIPStatus: 'ApiServerEIPStatus',
      apiServerLoadBalancerStatus: 'ApiServerLoadBalancerStatus',
      auditProjectStatus: 'AuditProjectStatus',
      canaryPilotEIPStatus: 'CanaryPilotEIPStatus',
      canaryPilotLoadBalancerStatus: 'CanaryPilotLoadBalancerStatus',
      controlPlaneProjectStatus: 'ControlPlaneProjectStatus',
      logtailStatusRecord: 'LogtailStatusRecord',
      pilotEIPStatus: 'PilotEIPStatus',
      pilotLoadBalancerStatus: 'PilotLoadBalancerStatus',
      RAMApplicationStatus: 'RAMApplicationStatus',
      sgStatus: 'SgStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogProjectStatus: 'string',
      apiServerEIPStatus: 'string',
      apiServerLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusApiServerLoadBalancerStatus,
      auditProjectStatus: 'string',
      canaryPilotEIPStatus: 'string',
      canaryPilotLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusCanaryPilotLoadBalancerStatus,
      controlPlaneProjectStatus: 'string',
      logtailStatusRecord: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pilotEIPStatus: 'string',
      pilotLoadBalancerStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatusPilotLoadBalancerStatus,
      RAMApplicationStatus: 'string',
      sgStatus: 'string',
    };
  }

  validate() {
    if(this.apiServerLoadBalancerStatus && typeof (this.apiServerLoadBalancerStatus as any).validate === 'function') {
      (this.apiServerLoadBalancerStatus as any).validate();
    }
    if(this.canaryPilotLoadBalancerStatus && typeof (this.canaryPilotLoadBalancerStatus as any).validate === 'function') {
      (this.canaryPilotLoadBalancerStatus as any).validate();
    }
    if(this.logtailStatusRecord) {
      $dara.Model.validateMap(this.logtailStatusRecord);
    }
    if(this.pilotLoadBalancerStatus && typeof (this.pilotLoadBalancerStatus as any).validate === 'function') {
      (this.pilotLoadBalancerStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshAdditionalStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster status.
   */
  clusterStatus?: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStatus: 'ClusterStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatus: DescribeServiceMeshAdditionalStatusResponseBodyClusterStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterStatus && typeof (this.clusterStatus as any).validate === 'function') {
      (this.clusterStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

