// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of approval instance IDs.
   */
  approvalIds?: string[];
  /**
   * @remarks
   * The end time for approval instance creation, in seconds-level timestamp.
   * 
   * @example
   * 1736750500
   */
  createEndTime?: number;
  /**
   * @remarks
   * The start time for approval instance creation, in seconds-level timestamp.
   * 
   * @example
   * 1730000000
   */
  createStartTime?: number;
  /**
   * @remarks
   * The department of the approval instance creator.
   * 
   * @example
   * QA Department
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
   * Mr. Wang
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of report effective statuses. Valid values: Enabled, Expired.
   */
  effectStatuses?: string[];
  /**
   * @remarks
   * The ID of the approval instance operator.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The username of the approval instance operator.
   * 
   * @example
   * Ms. Li
   */
  operatorUsername?: string;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The adaptation policy type. Valid values:
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The associated approval process ID.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  /**
   * @remarks
   * The associated approval process name.
   * 
   * @example
   * Test
   */
  processName?: string;
  /**
   * @remarks
   * The list of report types. If not specified, only ApprovalReport is queried.
   */
  reportTypes?: string[];
  /**
   * @remarks
   * The associated approval template ID.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The associated approval template name.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The collection of approval instance statuses.
   */
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
      effectStatuses: 'EffectStatuses',
      operatorUserId: 'OperatorUserId',
      operatorUsername: 'OperatorUsername',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      processId: 'ProcessId',
      processName: 'ProcessName',
      reportTypes: 'ReportTypes',
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
      effectStatuses: { 'type': 'array', 'itemType': 'string' },
      operatorUserId: 'string',
      operatorUsername: 'string',
      pageSize: 'number',
      policyType: 'string',
      processId: 'string',
      processName: 'string',
      reportTypes: { 'type': 'array', 'itemType': 'string' },
      schemaId: 'string',
      schemaName: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.approvalIds)) {
      $dara.Model.validateArray(this.approvalIds);
    }
    if(Array.isArray(this.effectStatuses)) {
      $dara.Model.validateArray(this.effectStatuses);
    }
    if(Array.isArray(this.reportTypes)) {
      $dara.Model.validateArray(this.reportTypes);
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

