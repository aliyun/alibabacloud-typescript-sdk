// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny extends $dara.Model {
  severity?: string;
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
  severity?: string;
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
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolationsDeny[];
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
  policyDescription?: string;
  policyName?: string;
  severity?: string;
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
  policyDescription?: string;
  policyName?: string;
  severity?: string;
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
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationViolationsDeny[];
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
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyViolationTotalViolations;
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
  clusterId?: string;
  constraintAction?: string;
  constraintApiVersion?: string;
  constraintCategory?: string;
  constraintGroup?: string;
  constraintKind?: string;
  constraintName?: string;
  eventMsg?: string;
  eventType?: string;
  requestUid?: string;
  requestUserinfo?: string;
  requestUsername?: string;
  resourceKind?: string;
  resourceName?: string;
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
   * The number of audit log entries.
   * 
   * @example
   * 100
   */
  count?: number;
  logProject?: string;
  logStore?: string;
  logs?: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLogs[];
  /**
   * @remarks
   * The status of the query. Valid values:
   * 
   * *   `Complete`: The query succeeded and the complete query result is returned.
   * *   `Incomplete`: The query succeeded but the query result is incomplete. To obtain the complete query result, you must repeat the request.
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
   * The number of policies that are enabled.
   * 
   * @example
   * 3
   */
  enabledCount?: number;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of policies of the severity level.
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
  violation?: DescribePolicyGovernanceInClusterResponseBodyViolation;
  /**
   * @remarks
   * The audit logs of the policies in the cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  /**
   * @remarks
   * Details about the policies of different severity levels that are enabled for the cluster.
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

