// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTaskResponseBodyOperationTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 3
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * checkShowName
   */
  checkShowName?: string;
  /**
   * @remarks
   * The processing time of the task.
   * 
   * @example
   * 1723173101010
   */
  dealTime?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * BackUpScriptError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * backUp script error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Whether the instance is released:
   * - true: Released
   * - false: Not released
   * 
   * @example
   * true
   */
  instanceFreed?: boolean;
  /**
   * @remarks
   * The ID of the server instance.
   * 
   * @example
   * i-wz9abo6wgjmh4yep****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp of the latest check, in milliseconds.
   * 
   * @example
   * 1723173101000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The ID of the region where the server is located.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The type of repair supported by the check item:
   * 
   * - **1**：Supports repair and rollback operations
   * - **2**：Supports repair but not rollback
   * - **3**：Redirect to a third-party platform for operation
   * 
   * @example
   * 1
   */
  repairSupportType?: number;
  /**
   * @remarks
   * The risk level of the detected alert. Values:
   * - **high**: High risk.
   *  - **medium**: Medium risk. 
   * - **low**: Low risk.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The ID of the main task.
   * 
   * @example
   * 01db51b0e5307bb703a22611c86f****
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The status of the task. Possible values:
   * 
   * - **INIT**：Initialization
   * - **FAIL**：Processing failed
   * - **THROTTLING**：Repairing concurrently
   * - **IN_BACKUP**：Backing up
   * - **BACKED_UP**：Backed up
   * - **BACKUP_FAIL**：Backup failed
   * - **REPAIRING**：Repairing
   * - **REPAIR_SUCCESS**：Repair succeeded
   * - **REPAIR_FAIL**：Repair failed
   * - **REPAIR_SUCCESS_VERIFYING**：Verifying repair success
   * - **REPAIR_SUCCESS_UNVERIFIED**：Verification of repair success failed
   * - **REPAIR_SUCCESS_VERIFIED**：Verification of repair success succeeded
   * - **REPAIR_RE_EXECUTE**：Re-executing repair
   * - **ROLL_BACKING**：Rolling back
   * - **ROLL_BACKED**：Rolled back
   * - **ROLL_BACK_FAIL**：Rollback failed
   * - **ROLL_BACK_INIT**：Initiating rollback
   * - **ROLL_BACK_VERIFYING**：Verifying rollback success
   * - **ROLL_BACK_UNVERIFIED**：Verification of rollback success failed
   * - **ROLL_BACK_VERIFIED**：Verification of rollback success succeeded
   * 
   * @example
   * REPAIRING
   */
  status?: string;
  /**
   * @remarks
   * The display status of the repair task.
   * 
   * @example
   * Verified After Repair Success
   */
  statusShowName?: string;
  /**
   * @remarks
   * Whether rollback is supported:
   * - true: Supported
   * - false: Not supported
   * 
   * @example
   * true
   */
  supportRollBack?: boolean;
  /**
   * @remarks
   * The ID of the operation task.
   * 
   * @example
   * 5bb1a313f9924b728b3c12e007c1****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the operation task being queried:
   * - REPAIR: Repair
   * - ROLLBACK: Rollback
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkShowName: 'CheckShowName',
      dealTime: 'DealTime',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      instanceFreed: 'InstanceFreed',
      instanceId: 'InstanceId',
      lastCheckTime: 'LastCheckTime',
      regionId: 'RegionId',
      repairSupportType: 'RepairSupportType',
      riskLevel: 'RiskLevel',
      rootTaskId: 'RootTaskId',
      status: 'Status',
      statusShowName: 'StatusShowName',
      supportRollBack: 'SupportRollBack',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkShowName: 'string',
      dealTime: 'number',
      errorCode: 'string',
      errorMsg: 'string',
      instanceFreed: 'boolean',
      instanceId: 'string',
      lastCheckTime: 'number',
      regionId: 'string',
      repairSupportType: 'number',
      riskLevel: 'string',
      rootTaskId: 'string',
      status: 'string',
      statusShowName: 'string',
      supportRollBack: 'boolean',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTaskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of items to display per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed instance information list of operation tasks.
   */
  operationTasks?: ListOperationTaskResponseBodyOperationTasks[];
  /**
   * @remarks
   * Page information when performing a paginated query.
   */
  pageInfo?: ListOperationTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the current request, which is a unique identifier generated by Alibaba Cloud for this request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB48****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationTasks: 'OperationTasks',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTasks: { 'type': 'array', 'itemType': ListOperationTaskResponseBodyOperationTasks },
      pageInfo: ListOperationTaskResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTasks)) {
      $dara.Model.validateArray(this.operationTasks);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

