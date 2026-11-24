// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs of the approval instances.
   */
  approvalIds?: string[];
  /**
   * @remarks
   * The end time when the approval instance was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1736750500
   */
  createEndTime?: number;
  /**
   * @remarks
   * The start time when the approval instance was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1730000000
   */
  createStartTime?: number;
  /**
   * @remarks
   * The department of the user who created the approval instance.
   * 
   * @example
   * Testing Department
   */
  creatorDepartment?: string;
  /**
   * @remarks
   * The ID of the endpoint device on which the approval instance was created.
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
   * Mr. Wang
   */
  creatorUsername?: string;
  /**
   * @remarks
   * The page number of the current page for paging in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of effect statuses for the report. The list uses the flat serialization format and cannot contain duplicate values. Only records with the Approved approval status are matched. Valid values:
   * * Enabled: Valid.
   * * Expired: Invalid or expired.
   * 
   * @example
   * ["Enabled"]
   */
  effectStatuses?: string[];
  /**
   * @remarks
   * The ID of the user who operated the approval instance.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The username of the user who operated the approval instance.
   * 
   * @example
   * Ms. Li
   */
  operatorUsername?: string;
  /**
   * @remarks
   * The Settings for the number of entries to return on each page for paging in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the adapted policy. Valid values:
   * - **DomainBlacklist**: Domain name blacklist.
   * - **DomainWhitelist**: Domain name whitelist.
   * - **SoftwareBlock**: Software blocking.
   * - **AppUninstall**: Endpoint uninstallation.
   * - **DlpSend**: Outbound file transfer.
   * - **PeripheralBlock**: Peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the associated approval process.
   * 
   * @example
   * approval-process-fcc351b8a95b****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the associated approval process.
   * 
   * @example
   * Test
   */
  processName?: string;
  /**
   * @remarks
   * The list of report types. The list uses the flat serialization format and cannot contain duplicate values. Valid values:
   * * ApprovalReport: Approval report.
   * * BackendReport: Backend report.
   * If you do not specify this parameter, only ApprovalReport is queried by default.
   * 
   * @example
   * ["BackendReport"]
   */
  reportTypes?: string[];
  /**
   * @remarks
   * The ID of the associated approval template.
   * 
   * @example
   * approval-schema-090134f1ebff****
   */
  schemaId?: string;
  /**
   * @remarks
   * The name of the associated approval template.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The instance statuses of the approval instances.
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

