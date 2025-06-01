// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApprovalStatusResponseBodyApprovalApprovalProgresses } from "./UpdateApprovalStatusResponseBodyApprovalApprovalProgresses";


export class UpdateApprovalStatusResponseBodyApproval extends $dara.Model {
  approvalDetail?: string;
  /**
   * @example
   * approval-165e6738ad9d****
   */
  approvalId?: string;
  approvalProgresses?: UpdateApprovalStatusResponseBodyApprovalApprovalProgresses[];
  /**
   * @example
   * 2022-11-15 22:11:55
   */
  createTime?: string;
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

