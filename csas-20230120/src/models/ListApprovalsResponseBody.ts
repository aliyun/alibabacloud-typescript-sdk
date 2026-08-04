// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsResponseBodyApprovalsApprovalProgressesOperators extends $dara.Model {
  /**
   * @remarks
   * ID of the operator for the approval progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Username of the operator for the approval progress node.
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

export class ListApprovalsResponseBodyApprovalsApprovalProgresses extends $dara.Model {
  /**
   * @remarks
   * Action performed at the approval progress node. Valid values:
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
   * Comment added at the approval progress node.
   * 
   * @example
   * 审核通过
   */
  comment?: string;
  /**
   * @remarks
   * ID of the executor for the approval progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  /**
   * @remarks
   * List of operators for the approval progress node.
   */
  operators?: ListApprovalsResponseBodyApprovalsApprovalProgressesOperators[];
  /**
   * @remarks
   * Status of the approval progress node. Valid values:
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
   * Time when the action was performed at the approval progress node, in seconds since the Unix epoch.
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
   * Details of the approval instance.
   * 
   * @example
   * {"initiatorName":"王先生","initiatorDept":"测试部","devType":"windows","deviceType":"usbStorage","deviceId":"FC216E9E3****","approvalEndTimestamp":1736524799,"approvalReason":"这是一个测试"}
   */
  approvalDetail?: string;
  /**
   * @remarks
   * Approval instance ID.
   * 
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  /**
   * @remarks
   * List of approval progress nodes.
   */
  approvalProgresses?: ListApprovalsResponseBodyApprovalsApprovalProgresses[];
  approvalType?: number;
  /**
   * @remarks
   * Time when the approval instance was created.
   * 
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  /**
   * @remarks
   * Department of the user who created the approval instance.
   * 
   * @example
   * 测试部
   */
  creatorDepartment?: string;
  /**
   * @remarks
   * ID of the device used to create the approval instance.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @remarks
   * ID of the user who created the approval instance.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  /**
   * @remarks
   * Username of the user who created the approval instance.
   * 
   * @example
   * 王先生
   */
  creatorUsername?: string;
  /**
   * @remarks
   * Expiration time of the approval instance, in seconds since the Unix epoch.
   * 
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Policy type associated with the approval instance. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist.
   * 
   * - **DomainWhitelist**: Domain whitelist.
   * 
   * - **SoftwareBlock**: Software blocking.
   * 
   * - **AppUninstall**: App uninstallation.
   * 
   * - **DlpSend**: File outbound transfer.
   * 
   * - **PeripheralBlock**: Peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * ID of the associated approval process.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  /**
   * @remarks
   * Name of the associated approval process.
   * 
   * @example
   * 测试
   */
  processName?: string;
  /**
   * @remarks
   * Reason for creating the approval instance.
   * 
   * @example
   * 这是一个测试
   */
  reason?: string;
  /**
   * @remarks
   * Content of the associated approval template.
   * 
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @remarks
   * ID of the associated approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * Name of the associated approval template.
   * 
   * @example
   * 测试
   */
  schemaName?: string;
  /**
   * @remarks
   * Status of the approval instance. Valid values:
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
      approvalType: 'ApprovalType',
      createTime: 'CreateTime',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
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
      approvalProgresses: { 'type': 'array', 'itemType': ListApprovalsResponseBodyApprovalsApprovalProgresses },
      approvalType: 'number',
      createTime: 'string',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
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

export class ListApprovalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of approval instances.
   */
  approvals?: ListApprovalsResponseBodyApprovals[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 6965F5BA-53B6-5650-A708-51F090F843BB
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of approval instances.
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

