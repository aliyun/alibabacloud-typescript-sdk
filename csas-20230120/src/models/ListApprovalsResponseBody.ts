// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsResponseBodyApprovalsApprovalProgressesOperators extends $dara.Model {
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
   * Mr. Wang
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

export class ListApprovalsResponseBodyApprovalsApprovalProgresses extends $dara.Model {
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
   * The ID of the executor for the approval progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  /**
   * @remarks
   * The list of operators for the approval progress node.
   */
  operators?: ListApprovalsResponseBodyApprovalsApprovalProgressesOperators[];
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
   * The time when the approval progress node was executed. The value is a UNIX timestamp in seconds.
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
      operators: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgressesOperators },
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

export class ListApprovalsResponseBodyApprovals extends $dara.Model {
  /**
   * @remarks
   * The details of the approval instance.
   * 
   * @example
   * {"initiatorName":"Mr. Wang","initiatorDept":"Testing Department","devType":"windows","deviceType":"usbStorage","deviceId":"FC216E9E3****","approvalEndTimestamp":1736524799,"approvalReason":"This is a test"}
   */
  approvalDetail?: string;
  /**
   * @remarks
   * The instance ID of the approval.
   * 
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  /**
   * @remarks
   * The list of approval progress nodes.
   */
  approvalProgresses?: ListApprovalsResponseBodyApprovalsApprovalProgresses[];
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
   * The time when the approval instance was created.
   * 
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  /**
   * @remarks
   * The department of the approval instance creator.
   * 
   * @example
   * CN=cn***,OU=h***
   */
  creatorDepartment?: string;
  /**
   * @remarks
   * The terminal device ID of the approval instance creator.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @remarks
   * The ID of the approval instance creator.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  /**
   * @remarks
   * The username of the approval instance creator.
   * 
   * @example
   * Wang***
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The filing effective status. An empty string is returned when the approval status is not Approved. Valid values:
   * * Enabled: effective.
   * * Expired: expired or reached the expiration date.
   * 
   * @example
   * Enabled
   */
  effectStatus?: string;
  /**
   * @remarks
   * The filing deadline. The value is a UNIX timestamp in seconds. The value 0 is returned when ValidityType is set to Permanent.
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
   * - **AppUninstall**: Endpoint uninstallation.
   * - **DlpSend**: File outbound transfer.
   * - **PeripheralBlock**: Peripheral control.
   * - **EndpointHardening**: Endpoint hardening.
   * - **oftwareHardening**: Software hardening.
   * - **AiAgentBlock**: AI Agent control.
   * - **PrivateAccessBlock**: Internal network access.
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
   * Test***
   */
  processName?: string;
  /**
   * @remarks
   * The reason for creating the approval instance.
   * 
   * @example
   * Temporary access for the project
   */
  reason?: string;
  /**
   * @remarks
   * The filing type. Valid values:
   * * ApprovalReport: approval filing.
   * * BackendReport: backend filing.
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
   * The instance status of the approval. Valid values:
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
   * The validity duration type. Valid values: FixedTime, Permanent.
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
      createTime: 'CreateTime',
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
      approvalProgresses: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgresses },
      approvalType: 'number',
      createTime: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApprovalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of approval instances.
   */
  approvals?: ListApprovalsResponseBodyApprovals[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6965F5BA-53B6-5650-A708-51F090F843BB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of approval instances.
   * 
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      approvals: 'Approvals',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvals: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovals },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approvals)) {
      $dara.Model.validateArray(this.approvals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

