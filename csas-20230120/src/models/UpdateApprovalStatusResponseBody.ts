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
   * 王先生
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
   * The operation performed on the approval progress node. Valid values:
   * 
   * - **Approve**: Approve.
   * 
   * - **Reject**: Reject.
   * 
   * - **Revoke**: Revoke.
   * 
   * - **Comment**: Comment.
   * 
   * @example
   * Approve
   */
  action?: string;
  /**
   * @remarks
   * The comment for the approval progress node operation.
   * 
   * @example
   * 审核通过
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
   * 
   * - **Pending**: Pending approval.
   * 
   * - **Approved**: Approved.
   * 
   * - **Rejected**: Rejected.
   * 
   * - **Revoked**: Revoked.
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * The execution time of the approval progress node, in seconds as a UNIX timestamp.
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
   * {"initiatorName":"王先生","initiatorDept":"测试部","devType":"windows","deviceType":"usbStorage","deviceId":"FC216E9E3****","approvalEndTimestamp":1736524799,"approvalReason":"这是一个测试"}
   */
  approvalDetail?: string;
  /**
   * @remarks
   * The ID of the approval instance.
   * 
   * @example
   * approval-165e6738ad9d****
   */
  approvalId?: string;
  /**
   * @remarks
   * The list of approval progress nodes for the approval instance.
   */
  approvalProgresses?: UpdateApprovalStatusResponseBodyApprovalApprovalProgresses[];
  /**
   * @remarks
   * The creation time of the approval instance.
   * 
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the terminal device that created the approval instance.
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
   * The expiration time of the approval instance, in seconds as a UNIX timestamp.
   * 
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The policy type associated with the approval instance. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist.
   * 
   * - **DomainWhitelist**: Domain whitelist.
   * 
   * - **SoftwareBlock**: Software disablement.
   * 
   * - **AppUninstall**: Terminal uninstall.
   * 
   * - **DlpSend**: File outbound.
   * 
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
   * 测试
   */
  processName?: string;
  /**
   * @remarks
   * The reason for creating the approval instance.
   * 
   * @example
   * 这是一个测试
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
   * 测试
   */
  schemaName?: string;
  /**
   * @remarks
   * The status of the approval instance. Valid values:
   * 
   * - **Pending**: Pending approval.
   * 
   * - **Approved**: Approved.
   * 
   * - **Rejected**: Rejected.
   * 
   * - **Revoked**: Revoked.
   * 
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
   * The ID of this request.
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

