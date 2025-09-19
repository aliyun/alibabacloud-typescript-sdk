// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAssetTaskLogDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
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

export class DescribeSyncAssetTaskLogDetailResponseBodyTaskRecordDetails extends $dara.Model {
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 5
   */
  assetCount?: number;
  /**
   * @remarks
   * The region of the server in the data center.
   * 
   * @example
   * cn-shanghai
   */
  idcRegion?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 6c4e4c36ffc3e5919120b405c2b3****
   */
  leafTaskId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **START**: The task is started.
   * *   **MESSAGE_SEND**: The command is sent.
   * *   **SUCCESS**: The task is complete.
   * *   **FAIL**: The task failed.
   * *   **TIMEOUT**: The task timed out.
   * 
   * @example
   * INIT
   */
  leafTaskStatus?: string;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * unknown reason
   */
  taskMsg?: string;
  /**
   * @remarks
   * The timestamp when the task results were reported.
   * 
   * @example
   * 1671614217000
   */
  taskReportTime?: number;
  /**
   * @remarks
   * The number of unprotected assets.
   * 
   * @example
   * 0
   */
  unprotectedAssetCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetCount: 'AssetCount',
      idcRegion: 'IdcRegion',
      leafTaskId: 'LeafTaskId',
      leafTaskStatus: 'LeafTaskStatus',
      taskMsg: 'TaskMsg',
      taskReportTime: 'TaskReportTime',
      unprotectedAssetCount: 'UnprotectedAssetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCount: 'number',
      idcRegion: 'string',
      leafTaskId: 'string',
      leafTaskStatus: 'string',
      taskMsg: 'string',
      taskReportTime: 'number',
      unprotectedAssetCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncAssetTaskLogDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSyncAssetTaskLogDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the tasks.
   */
  taskRecordDetails?: DescribeSyncAssetTaskLogDetailResponseBodyTaskRecordDetails[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      taskRecordDetails: 'TaskRecordDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSyncAssetTaskLogDetailResponseBodyPageInfo,
      requestId: 'string',
      taskRecordDetails: { 'type': 'array', 'itemType': DescribeSyncAssetTaskLogDetailResponseBodyTaskRecordDetails },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.taskRecordDetails)) {
      $dara.Model.validateArray(this.taskRecordDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

