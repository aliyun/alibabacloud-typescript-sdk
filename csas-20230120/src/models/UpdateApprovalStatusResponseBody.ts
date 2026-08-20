// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
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
   * John
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

export class UpdateApprovalStatusResponseBodyApprovalApprovalProgresses extends $dara.Model {
  /**
   * @remarks
   * The action performed on the approval progress node. Valid values:
   * - **Approve**: Approve.
   * - **Reject**: Reject.
   * - **Revoke**: Revoke.
   * - **Comment**: Comment.
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
  operators?: UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators[];
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
      operators: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApprovalApprovalProgressesOperators },
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

export class UpdateApprovalStatusResponseBodyApproval extends $dara.Model {
  /**
   * @remarks
   * The details of the approval instance.
   * 
   * @example
   * {"initiatorName":"John","initiatorDept":"QA Department","devType":"windows","deviceType":"usbStorage","deviceId":"FC216E9E3****","approvalEndTimestamp":1736524799,"approvalReason":"This is a test"}
   */
  approvalDetail?: string;
  /**
   * @remarks
   * The approval instance ID.
   * 
   * @example
   * approval-165e6738ad9d****
   */
  approvalId?: string;
  /**
   * @remarks
   * The list of approval progress nodes.
   */
  approvalProgresses?: UpdateApprovalStatusResponseBodyApprovalApprovalProgresses[];
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
   * The ID of the terminal device from which the approval instance was created.
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
   * - **AppUninstall**: Terminal uninstallation.
   * - **DlpSend**: File outbound transfer.
   * - **PeripheralBlock**: Peripheral control.
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
   * The instance status of the approval. Valid values:
   * - **Pending**: Pending approval.
   * - **Approved**: Approved.
   * - **Rejected**: Deny.
   * - **Revoked**: Revoked.
   * - **Expired**: Expired.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      approvalId: 'ApprovalId',
      approvalProgresses: 'ApprovalProgresses',
      createTime: 'CreateTime',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      endTimestamp: 'EndTimestamp',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reason: 'Reason',
      schemaContent: 'SchemaContent',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: 'string',
      approvalId: 'string',
      approvalProgresses: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApprovalApprovalProgresses },
      createTime: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      endTimestamp: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reason: 'string',
      schemaContent: 'string',
      schemaId: 'string',
      schemaName: 'string',
      status: 'string',
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

export class UpdateApprovalStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval instance.
   */
  approval?: UpdateApprovalStatusResponseBodyApproval[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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
      approval: { 'type': 'array', 'itemType': UpdateApprovalStatusResponseBodyApproval },
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

