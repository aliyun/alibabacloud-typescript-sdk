// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTaskRequestOperationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * am-bp1vy2yaj1nvx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Cloud asset vendor.
   * 
   * @example
   * ALIYUN
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckResult](~~ListCheckResult~~) API to obtain the check item ID.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The page number to display in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Set the language type for the request and response messages. The default value is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance information of the operation tasks to be queried.
   */
  operationTaskInstances?: ListOperationTaskRequestOperationTaskInstances[];
  /**
   * @remarks
   * The maximum number of items to display per page in a paginated query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of task statuses. Multiple statuses should be separated by commas (,). Values:
   * 
   * - **INIT**: Initialization
   * - **FAIL**: Processing failed
   * - **THROTTLING**: Repairing concurrently
   * - **IN_BACKUP**: Backing up
   * - **BACKED_UP**: Backed up
   * - **BACKUP_FAIL**: Backup failed
   * - **REPAIRING**: Repairing
   * - **REPAIR_SUCCESS**: Repair succeeded
   * - **REPAIR_FAIL**: Repair failed
   * - **REPAIR_SUCCESS_VERIFYING**: Verifying repair success
   * - **REPAIR_SUCCESS_UNVERIFIED**: Repair success verification failed
   * - **REPAIR_SUCCESS_VERIFIED**: Repair success verified
   * - **REPAIR_RE_EXECUTE**: Re-executing repair
   * - **ROLL_BACKING**: Rolling back
   * - **ROLL_BACKED**: Rolled back
   * - **ROLL_BACK_FAIL**: Rollback failed
   * - **ROLL_BACK_INIT**: Rollback initiated
   * - **ROLL_BACK_VERIFYING**: Verifying rollback success
   * - **ROLL_BACK_UNVERIFIED**: Rollback success verification failed
   * - **ROLL_BACK_VERIFIED**: Rollback success verified
   */
  statuses?: string[];
  /**
   * @remarks
   * The ID of the task to be queried.
   * 
   * @example
   * d7b2acf8d362742123e4a84e1bf8****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of operation task to be queried:
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
      currentPage: 'CurrentPage',
      lang: 'Lang',
      operationTaskInstances: 'OperationTaskInstances',
      pageSize: 'PageSize',
      statuses: 'Statuses',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      currentPage: 'number',
      lang: 'string',
      operationTaskInstances: { 'type': 'array', 'itemType': ListOperationTaskRequestOperationTaskInstances },
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTaskInstances)) {
      $dara.Model.validateArray(this.operationTaskInstances);
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

