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
   * The summary of severity levels.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of violations.
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
   * The summary of block records.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny[];
  /**
   * @remarks
   * The summary of alert records.
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
   * The policy description.
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
   * The policy description.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level.
   */
  severity?: string;
  /**
   * @remarks
   * The number of violations.
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
   * The summary of block records.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationViolationsDeny[];
  /**
   * @remarks
   * The summary of alert information.
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
   * The summary information.
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
   * The cluster ID.
   * 
   * @example
   * hash code
   */
  clusterId?: string;
  /**
   * @remarks
   * The action taken by the policy, including alert (warn) and block (deny). Valid values:
   * - warn: Only alerts on behaviors that violate the policy without actually blocking the request.
   * - deny: Blocks requests that violate the policy.
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
   * The policy type.
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
   * The policy name in policy management.
   * 
   * @example
   * ACKNamespacesDeleteProtection
   */
  constraintKind?: string;
  /**
   * @remarks
   * The policy instance name.
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
   * The type of event triggered by the policy, such as violation.
   * 
   * @example
   * violation
   */
  eventType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * hash code
   */
  requestUid?: string;
  /**
   * @remarks
   * The information about the user whose request violated the policy.
   * 
   * @example
   * account id
   */
  requestUserinfo?: string;
  /**
   * @remarks
   * The name of the user whose request violated the policy.
   * 
   * @example
   * account user name
   */
  requestUsername?: string;
  /**
   * @remarks
   * The type of resource that violated the policy. For example, if a request to operate on a Namespace is rejected, this field is set to Namespace.
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
   * The time when the policy violation occurred.
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
   * The total number of logs returned by the current query.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The log project that stores policy action information.
   * 
   * @example
   * k8s-log-clusterid
   */
  logProject?: string;
  /**
   * @remarks
   * The Logstore that stores policy action information.
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
   * * `Complete`: The query is complete and the returned result is the complete result.
   * * `Incomplete`: The query is complete but the returned result is incomplete. Repeat the request to obtain the complete result.
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
   * The policy governance severity level.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of policy types at this severity level.
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
   * The policy governance audit logs of the current cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  /**
   * @remarks
   * The count of enabled policies at different severity levels in the current cluster.
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

