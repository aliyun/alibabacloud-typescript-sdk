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
   * John Smith
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
   * The time when the action was performed on the approval progress node. The value is a UNIX timestamp in seconds.
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
  userId?: string;
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
  associatedPolicyName?: string;
  associatedPolicyType?: string;
  remark?: string;
  reportObject?: any;
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
   * {"initiatorName":"John Smith","initiatorDept":"QA Department","devType":"windows","deviceType":"usbStorage","deviceId":"FC216E9E3****","approvalEndTimestamp":1736524799,"approvalReason":"This is a test"}
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
   * The list of approval progress nodes.
   */
  approvalProgresses?: GetApprovalResponseBodyApprovalApprovalProgresses[];
  approvalType?: number;
  /**
   * @remarks
   * The backend report details. This parameter is returned only when ReportType is set to BackendReport.
   */
  backendReportDetail?: GetApprovalResponseBodyApprovalBackendReportDetail;
  /**
   * @remarks
   * The time when the approval instance was created.
   * 
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  createTimeUnix?: number;
  /**
   * @remarks
   * The department of the user who created the approval instance.
   * 
   * @example
   * QA Department
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
   * The ID of the user who created the approval instance.
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
   * John Smith
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The effective status of the report. Enabled indicates that the report is active, and Expired indicates that the report has expired.
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
   * - **AppUninstall**: Agent uninstallation.
   * - **DlpSend**: File outbound transfer.
   * - **PeripheralBlock**: Peripheral device control.
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
   * Test
   */
  processName?: string;
  /**
   * @remarks
   * The reason for creating the approval instance.
   * 
   * @example
   * This is a test
   */
  reason?: string;
  /**
   * @remarks
   * The report type. ApprovalReport indicates an approval report, and BackendReport indicates a backend report.
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
   * Test
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
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The validity duration type. When the value is Permanent, EndTimestamp returns 0.
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
   * The approval instance.
   */
  approval?: GetApprovalResponseBodyApproval[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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

