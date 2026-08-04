// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
  /**
   * @remarks
   * The ID of the operator for the progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The username of the operator for the progress node.
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

export class GetApprovalResponseBodyApprovalApprovalProgresses extends $dara.Model {
  /**
   * @remarks
   * The action performed on the progress node. Valid values:
   * 
   * - **Approve**: Approve
   * 
   * - **Reject**: Reject
   * 
   * - **Revoke**: Revoke
   * 
   * - **Comment**: Comment
   * 
   * @example
   * Approve
   */
  action?: string;
  /**
   * @remarks
   * The comment for the action on the progress node.
   * 
   * @example
   * 审核通过
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the executor for the progress node.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  /**
   * @remarks
   * A list of operators for the progress node.
   */
  operators?: GetApprovalResponseBodyApprovalApprovalProgressesOperators[];
  /**
   * @remarks
   * The status of the progress node. Valid values:
   * 
   * - **Pending**: Pending
   * 
   * - **Approved**: Approved
   * 
   * - **Rejected**: Rejected
   * 
   * - **Revoked**: Revoked
   * 
   * @example
   * Approved
   */
  status?: string;
  /**
   * @remarks
   * The time when the action was performed on the progress node. This is a UNIX timestamp. Unit: seconds.
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

export class GetApprovalResponseBodyApproval extends $dara.Model {
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
   * approval-3564b140642f****
   */
  approvalId?: string;
  /**
   * @remarks
   * A list of progress nodes for the approval instance.
   */
  approvalProgresses?: GetApprovalResponseBodyApprovalApprovalProgresses[];
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
   * The department of the user who created the approval instance.
   * 
   * @example
   * 测试部
   */
  creatorDepartment?: string;
  /**
   * @remarks
   * The ID of the client device from which the approval instance was created.
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
   * 王先生
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The expiration time of the approval instance. This is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The type of the associated policy. Valid values:
   * 
   * - **DomainBlacklist**: Domain blacklist
   * 
   * - **DomainWhitelist**: Domain whitelist
   * 
   * - **SoftwareBlock**: Software block
   * 
   * - **AppUninstall**: Client uninstall
   * 
   * - **DlpSend**: Outbound file transfer
   * 
   * - **PeripheralBlock**: Peripheral control
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the associated approval flow.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the associated approval flow.
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
   * The content of the associated template.
   * 
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @remarks
   * The ID of the associated template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The name of the associated template.
   * 
   * @example
   * 测试
   */
  schemaName?: string;
  /**
   * @remarks
   * The status of the approval instance. Valid values:
   * 
   * - **Pending**: Pending
   * 
   * - **Approved**: Approved
   * 
   * - **Rejected**: Rejected
   * 
   * - **Revoked**: Revoked
   * 
   * - **Expired**: Expired
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
      approvalProgresses: { 'type': 'array', 'itemType': GetApprovalResponseBodyApprovalApprovalProgresses },
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

export class GetApprovalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval instance.
   */
  approval?: GetApprovalResponseBodyApproval[];
  /**
   * @remarks
   * The ID of the request.
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

