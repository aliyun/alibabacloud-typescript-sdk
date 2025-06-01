// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsRequest extends $dara.Model {
  approvalIds?: string[];
  /**
   * @example
   * 1736750500
   */
  createEndTime?: number;
  /**
   * @example
   * 1730000000
   */
  createStartTime?: number;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  operatorUserId?: string;
  operatorUsername?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  /**
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @example
   * test
   */
  schemaName?: string;
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      approvalIds: 'ApprovalIds',
      createEndTime: 'CreateEndTime',
      createStartTime: 'CreateStartTime',
      creatorDepartment: 'CreatorDepartment',
      creatorDevTag: 'CreatorDevTag',
      creatorUserId: 'CreatorUserId',
      creatorUsername: 'CreatorUsername',
      currentPage: 'CurrentPage',
      operatorUserId: 'OperatorUserId',
      operatorUsername: 'OperatorUsername',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      schemaId: 'SchemaId',
      schemaName: 'SchemaName',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalIds: { 'type': 'array', 'itemType': 'string' },
      createEndTime: 'number',
      createStartTime: 'number',
      creatorDepartment: 'string',
      creatorDevTag: 'string',
      creatorUserId: 'string',
      creatorUsername: 'string',
      currentPage: 'number',
      operatorUserId: 'string',
      operatorUsername: 'string',
      pageSize: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      schemaId: 'string',
      schemaName: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.approvalIds)) {
      $dara.Model.validateArray(this.approvalIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

