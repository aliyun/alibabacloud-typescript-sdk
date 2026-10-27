// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny extends $dara.Model {
  /**
   * @remarks
   * The severity level. Valid values: low, medium, and high.
   * 
   * @example
   * medium
   */
  severity?: string;
  /**
   * @remarks
   * The number of violations.
   * 
   * @example
   * 2
   */
  violations?: string;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsWarn extends $dara.Model {
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The number of violations.
   * 
   * @example
   * 0
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'string',
      violations: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolations extends $dara.Model {
  /**
   * @remarks
   * The aggregated interception records.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny[];
  /**
   * @remarks
   * The aggregated alert records.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsWarn[];
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny },
      warn: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsWarn },
    };
  }

  validate() {
    if(Array.isArray(this.deny)) {
      $dara.Model.validateArray(this.deny);
    }
    if(Array.isArray(this.warn)) {
      $dara.Model.validateArray(this.warn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationViolationsDeny extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Prevent specific namespaces from being deleted.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * ACKNamespacesDeleteProtection
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * medium
   */
  severity?: string;
  /**
   * @remarks
   * The number of violations.
   * 
   * @example
   * 1
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'policyDescription',
      policyName: 'policyName',
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      severity: 'string',
      violations: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationViolationsWarn extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Restricts the creation of Application Load Balancer (ALB) instances.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * ACKRestrictALBCreation
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * low
   */
  severity?: string;
  /**
   * @remarks
   * The number of violations.
   * 
   * @example
   * 0
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'policyDescription',
      policyName: 'policyName',
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      severity: 'string',
      violations: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolationViolations extends $dara.Model {
  /**
   * @remarks
   * The aggregated interception records.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationViolationsDeny[];
  /**
   * @remarks
   * The aggregated alert information.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyViolationViolationsWarn[];
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyViolationViolationsDeny },
      warn: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyViolationViolationsWarn },
    };
  }

  validate() {
    if(Array.isArray(this.deny)) {
      $dara.Model.validateArray(this.deny);
    }
    if(Array.isArray(this.warn)) {
      $dara.Model.validateArray(this.warn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyViolation extends $dara.Model {
  /**
   * @remarks
   * The aggregated information.
   */
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolations;
  /**
   * @remarks
   * The violation records aggregated by policy name.
   */
  violations?: DescribePolicyGovernanceInClusterResponseBodyViolationViolations;
  static names(): { [key: string]: string } {
    return {
      totalViolations: 'totalViolations',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalViolations: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolations,
      violations: DescribePolicyGovernanceInClusterResponseBodyViolationViolations,
    };
  }

  validate() {
    if(this.totalViolations && typeof (this.totalViolations as any).validate === 'function') {
      (this.totalViolations as any).validate();
    }
    if(this.violations && typeof (this.violations as any).validate === 'function') {
      (this.violations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyAdmitLogLogs extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * hash code
   */
  clusterId?: string;
  /**
   * @remarks
   * The action taken by the policy. Valid values:
   * - warn: Alerts on policy violations but does not intercept the requests.
   * - deny: Intercepts requests that violate the policy.
   * 
   * @example
   * deny
   */
  constraintAction?: string;
  /**
   * @remarks
   * The API version of the policy.
   * 
   * @example
   * v1beta1
   */
  constraintApiVersion?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * cis-k8s
   */
  constraintCategory?: string;
  /**
   * @remarks
   * The API group of the policy.
   * 
   * @example
   * constraints.gatekeeper.sh
   */
  constraintGroup?: string;
  /**
   * @remarks
   * The policy kind that corresponds to the policy name in policy management.
   * 
   * @example
   * ACKNamespacesDeleteProtection
   */
  constraintKind?: string;
  /**
   * @remarks
   * The name of the policy instance.
   * 
   * @example
   * namespace-delete-protection-jpjwv
   */
  constraintName?: string;
  /**
   * @remarks
   * The detailed information about the policy action.
   * 
   * @example
   * Admission webhook \\"validation.gatekeeper.sh\\" denied request, Resource Namespace: , Constraint: namespace-delete-protection-jpjwv, Message: not allow to delete protection namespace test.
   */
  eventMsg?: string;
  /**
   * @remarks
   * The type of the event triggered by the policy, such as violation.
   * 
   * @example
   * violation
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * hash code
   */
  requestUid?: string;
  /**
   * @remarks
   * The user information of the request that violated the policy.
   * 
   * @example
   * account id
   */
  requestUserinfo?: string;
  /**
   * @remarks
   * The username of the request that violated the policy.
   * 
   * @example
   * account user name
   */
  requestUsername?: string;
  /**
   * @remarks
   * The type of the resource that violated the policy. For example, if a request to operate on a namespace is rejected, the value is Namespace.
   * 
   * @example
   * Namespace
   */
  resourceKind?: string;
  /**
   * @remarks
   * The name of the resource that violated the policy.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The time when the policy violation occurred. The time is in ISO 8601 format and includes time zone information.
   * 
   * @example
   * 2025-10-27T11:31:40Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      constraintAction: 'constraint_action',
      constraintApiVersion: 'constraint_api_version',
      constraintCategory: 'constraint_category',
      constraintGroup: 'constraint_group',
      constraintKind: 'constraint_kind',
      constraintName: 'constraint_name',
      eventMsg: 'event_msg',
      eventType: 'event_type',
      requestUid: 'request_uid',
      requestUserinfo: 'request_userinfo',
      requestUsername: 'request_username',
      resourceKind: 'resource_kind',
      resourceName: 'resource_name',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraintAction: 'string',
      constraintApiVersion: 'string',
      constraintCategory: 'string',
      constraintGroup: 'string',
      constraintKind: 'string',
      constraintName: 'string',
      eventMsg: 'string',
      eventType: 'string',
      requestUid: 'string',
      requestUserinfo: 'string',
      requestUsername: 'string',
      resourceKind: 'string',
      resourceName: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyAdmitLog extends $dara.Model {
  /**
   * @remarks
   * The total number of logs queried.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The Log Service project that stores the policy action information.
   * 
   * @example
   * k8s-log-clusterid
   */
  logProject?: string;
  /**
   * @remarks
   * The Log Service Logstore that stores the policy action information.
   * 
   * @example
   * policyadmit-clusterid
   */
  logStore?: string;
  /**
   * @remarks
   * The log entries for policy violations.
   */
  logs?: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLogs[];
  /**
   * @remarks
   * The status of the query result. Valid values:
   * * `Complete`: The query is complete and the returned result is complete.
   * * `Incomplete`: The query is complete but the returned result is incomplete. You must repeat the request to obtain the complete result.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      logProject: 'log_project',
      logStore: 'log_store',
      logs: 'logs',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logProject: 'string',
      logStore: 'string',
      logs: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyAdmitLogLogs },
      progress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBodyOnState extends $dara.Model {
  /**
   * @remarks
   * The number of enabled policy types.
   * 
   * @example
   * 3
   */
  enabledCount?: number;
  /**
   * @remarks
   * The severity level of the policy governance.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of policy types at the severity level.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      enabledCount: 'enabled_count',
      severity: 'severity',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledCount: 'number',
      severity: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGovernanceInClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy violation information aggregated by severity level.
   */
  violation?: DescribePolicyGovernanceInClusterResponseBodyViolation;
  /**
   * @remarks
   * The policy governance audit logs of the cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  /**
   * @remarks
   * The counts of enabled policies at different severity levels in the current cluster.
   */
  onState?: DescribePolicyGovernanceInClusterResponseBodyOnState[];
  static names(): { [key: string]: string } {
    return {
      violation: 'Violation',
      admitLog: 'admit_log',
      onState: 'on_state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      violation: DescribePolicyGovernanceInClusterResponseBodyViolation,
      admitLog: DescribePolicyGovernanceInClusterResponseBodyAdmitLog,
      onState: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyOnState },
    };
  }

  validate() {
    if(this.violation && typeof (this.violation as any).validate === 'function') {
      (this.violation as any).validate();
    }
    if(this.admitLog && typeof (this.admitLog as any).validate === 'function') {
      (this.admitLog as any).validate();
    }
    if(Array.isArray(this.onState)) {
      $dara.Model.validateArray(this.onState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

