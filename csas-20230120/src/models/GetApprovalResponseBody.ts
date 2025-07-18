// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalResponseBodyApprovalApprovalProgressesOperators extends $dara.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
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
   * @example
   * Approve
   */
  action?: string;
  comment?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  executor?: string;
  operators?: GetApprovalResponseBodyApprovalApprovalProgressesOperators[];
  /**
   * @example
   * Approved
   */
  status?: string;
  /**
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
  approvalDetail?: string;
  /**
   * @example
   * approval-3564b140642f****
   */
  approvalId?: string;
  approvalProgresses?: GetApprovalResponseBodyApprovalApprovalProgresses[];
  /**
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
  creatorDepartment?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  creatorDevTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  creatorUserId?: string;
  creatorUsername?: string;
  /**
   * @example
   * 1757952000
   */
  endTimestamp?: number;
  /**
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  processName?: string;
  reason?: string;
  /**
   * @example
   * {"form": {"labelCol": 6,"wrapperCol": 12}}
   */
  schemaContent?: string;
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  schemaName?: string;
  /**
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
  approval?: GetApprovalResponseBodyApproval[];
  /**
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

