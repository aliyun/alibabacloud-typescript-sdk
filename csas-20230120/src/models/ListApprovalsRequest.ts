// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalsRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of approval instance IDs.
   */
  approvalIds?: string[];
  /**
   * @remarks
   * End time when the approval instance was created, in seconds since the Unix epoch.
   * 
   * @example
   * 1736750500
   */
  createEndTime?: number;
  /**
   * @remarks
   * Start time when the approval instance was created, in seconds since the Unix epoch.
   * 
   * @example
   * 1730000000
   */
  createStartTime?: number;
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
   * Page number for the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * ID of the user who performed an operation on the approval instance.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  operatorUserId?: string;
  /**
   * @remarks
   * Username of the user who performed an operation on the approval instance.
   * 
   * @example
   * 李小姐
   */
  operatorUsername?: string;
  /**
   * @remarks
   * Number of entries per page in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Policy type. Valid values:
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
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * Collection of approval instance statuses.
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

