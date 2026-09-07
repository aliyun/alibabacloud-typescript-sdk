// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
  /**
   * @remarks
   * The ID of the operator for the approval progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The username of the operator for the approval progress node.
   * 
   * @example
   * user***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApprovalApprovalProgresses extends $dara.Model {
  /**
   * @remarks
   * The action performed on the approval progress node. Valid values:
   * - **Approve**: Approved.
   * - **Reject**: Rejected.
   * - **Revoke**: Revoked.
   * - **Comment**: Commented.
   * 
   * @example
   * Approve
   */
  action?: string;
  /**
   * @remarks
   * The comment on the approval progress node.
   * 
   * @example
   * Approved
   */
  comment?: string;
  /**
   * @remarks
   * The executor ID of the approval progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  /**
   * @remarks
   * The list of operators for the approval progress node.
   */
  operators?: GetApprovalResponseBodyApprovalApprovalProgressesOperators[];
  /**
   * @remarks
   * The status of the approval progress node. Valid values:
   * - **Pending**: Pending approval.
   * - **Approved**: Approved.
   * - **Rejected**: Rejected.
   * - **Revoked**: Revoked.
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * The execution time of the approval progress node. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1736752000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      comment: 'Comment',
      executor: 'Executor',
      operators: 'Operators',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      executor: 'string',
      operators: { 'type': 'array', 'itemType': GetApprovalResponseBodyApprovalApprovalProgressesOperators },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApprovalBackendReportDetailTargetUser extends $dara.Model {
  /**
   * @remarks
   * The SASE user ID of the actual effective user.
   * 
   * @example
   * su_70a1ed06a900d337527984de27568352fdfed1b19442a886d2a697c0327f****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the actual effective user.
   * 
   * @example
   * user***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApprovalBackendReportDetail extends $dara.Model {
  /**
   * @remarks
   * The associated policy name.
   * 
   * @example
   * Private access***
   */
  associatedPolicyName?: string;
  /**
   * @remarks
   * The associated policy type, which is the same as PolicyType.
   * 
   * @example
   * PrivateAccessBlock
   */
  associatedPolicyType?: string;
  /**
   * @remarks
   * The remark for the backend report, which is the same as the report reason.
   * 
   * @example
   * Temporary access for a project
   */
  remark?: string;
  /**
   * @remarks
   * The report object. The fields vary based on PolicyType. Fields within the object use camelCase naming.
   * 
   * @example
   * {"applicationId":"pa-application-eb75f0c80c28****","applicationName":"App***"}
   */
  reportObject?: any;
  /**
   * @remarks
   * The actual effective user of the backend report.
   */
  targetUser?: GetApprovalResponseBodyApprovalBackendReportDetailTargetUser;
  static names(): { [key: string]: string } {
    return {
      associatedPolicyName: 'AssociatedPolicyName',
      associatedPolicyType: 'AssociatedPolicyType',
      remark: 'Remark',
      reportObject: 'ReportObject',
      targetUser: 'TargetUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPolicyName: 'string',
      associatedPolicyType: 'string',
      remark: 'string',
      reportObject: 'any',
      targetUser: GetApprovalResponseBodyApprovalBackendReportDetailTargetUser,
    };
  }

  validate() {
    if(this.targetUser && typeof (this.targetUser as any).validate === 'function') {
      (this.targetUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBodyApproval extends $dara.Model {
  /**
   * @remarks
   * The details of the approval instance.
   * 
   * @example
   * {"applicationId":"pa-application-eb75f0c80c28****","applicationName":"App***","associatedPolicyName":"Private access***"}
   */
  approvalDetail?: string;
  /**
   * @remarks
   * The approval instance ID.
   * 
   * @example
   * approval-3564b140642f****
   */
  approvalId?: string;
  /**
   * @remarks
   * The approval progress list. For backend reports without approval nodes, an empty array is returned.
   */
  approvalProgresses?: GetApprovalResponseBodyApprovalApprovalProgresses[];
  /**
   * @remarks
   * The approval type. Valid values:
   * * 0: built-in approval.
   * * 1: DingTalk approval.
   * * 2: WeCom approval.
   * * 3: Lark approval.
   * 
   * @example
   * 0
   */
  approvalType?: number;
  /**
   * @remarks
   * The backend report details. This value is returned only when ReportType is set to BackendReport.
   */
  backendReportDetail?: GetApprovalResponseBodyApprovalBackendReportDetail;
  /**
   * @remarks
   * The creation time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-08-18 17:48:44
   */
  createTime?: string;
  /**
   * @remarks
   * The creation time as a UNIX timestamp in seconds.
   * 
   * @example
   * 1787046524
   */
  createTimeUnix?: number;
  /**
   * @remarks
   * The department path of the report initiator.
   * 
   * @example
   * CN=cn***,OU=ou***
   */
  creatorDepartment?: string;
  /**
   * @remarks
   * The device ID of the terminal that created the approval instance.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @remarks
   * The ID of the user who created the approval instance. For backend reports, this is the actual effective user, not the administrator.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  /**
   * @remarks
   * The username of the user who created the approval instance.
   * 
   * @example
   * user***
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The effective status of the report. This value is an empty string when the approval status is not Approved. Valid values:
   * * Enabled: valid.
   * * Expired: expired.
   * 
   * @example
   * Enabled
   */
  effectStatus?: string;
  /**
   * @remarks
   * The expiration time of the approval instance. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The policy type associated with the approval instance. Valid values:
   * - **DomainBlacklist**: Domain name blacklist.
   * - **DomainWhitelist**: Domain name whitelist.
   * - **SoftwareBlock**: Software blocking.
   * - **DeviceRegistration**: Excess registration.
   * - **AppUninstall**: Client uninstallation.
   * - **DlpSend**: File outbound transfer.
   * - **PeripheralBlock**: Peripheral control.
   * - **EndpointHardening**: Endpoint hardening.
   * - **oftwareHardening**: Software hardening.
   * - **AiAgentBlock**: AI Agent control.
   * - **PrivateAccessBlock**: Private access.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the process associated with the approval instance.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the process associated with the approval instance.
   * 
   * @example
   * Approval***
   */
  processName?: string;
  /**
   * @remarks
   * The reason for creating the approval instance.
   * 
   * @example
   * Temporary access for a project
   */
  reason?: string;
  /**
   * @remarks
   * The report type. Valid values:
   * * ApprovalReport: approval report.
   * * BackendReport: backend report.
   * 
   * @example
   * BackendReport
   */
  reportType?: string;
  /**
   * @remarks
   * The content of the template associated with the approval instance.
   * 
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @remarks
   * The ID of the template associated with the approval instance.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The name of the template associated with the approval instance.
   * 
   * @example
   * Template***
   */
  schemaName?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **Pending**: Pending approval.
   * - **Approved**: Approved.
   * - **Rejected**: Denied.
   * - **Revoked**: Revoked.
   * - **Expired**: Expired.
   * - **Deleted**: Deleted.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The validity duration type. Valid values:
   * - **FixedTime**: Expires at a specified time.
   * - **Permanent**: Permanently valid.
   * 
   * @example
   * Permanent
   */
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      approvalId: 'ApprovalId',
      approvalProgresses: 'ApprovalProgresses',
      approvalType: 'ApprovalType',
      backendReportDetail: 'BackendReportDetail',
      createTime: 'CreateTime',
      createTimeUnix: 'CreateTimeUnix',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
      effectStatus: 'EffectStatus',
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reason: 'Reason',
      reportType: 'ReportType',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      status: 'Status',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: 'string',
      approvalId: 'string',
      approvalProgresses: { 'type': 'array', 'itemType': GetApprovalResponseBodyApprovalApprovalProgresses },
      approvalType: 'number',
      backendReportDetail: GetApprovalResponseBodyApprovalBackendReportDetail,
      createTime: 'string',
      createTimeUnix: 'number',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
      effectStatus: 'string',
      endTimestamp: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reason: 'string',
      reportType: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      status: 'string',
      validityType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvalProgresses)) {
      $dara.Model.validateArray(this.approvalProgresses);
    }
    if(this.backendReportDetail && typeof (this.backendReportDetail as any).validate === 'function') {
      (this.backendReportDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval details list, which typically contains one record.
   */
  approval?: GetApprovalResponseBodyApproval[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approval: 'Approval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approval: { 'type': 'array', 'itemType': GetApprovalResponseBodyApproval },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approval)) {
      $dara.Model.validateArray(this.approval);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

