// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAssetTaskLogDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number from which to start displaying query results. Default value: 1, which indicates that query results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp of the end time.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to display on each page when you perform a paginated query. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > We recommend that you do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the IDC scan task that you want to query. You can call the [DescribeSyncAssetTaskList](https://help.aliyun.com/document_detail/141932.html) operation to obtain the ID of an abnormal task.
   * 
   * @example
   * 7e9565f537146fdf6bfb4e01f6f08818
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The timestamp of the start time.
   * 
   * @example
   * 1644027670
   */
  startTime?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * IDC_PROBE_SCAN-TEST_001
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      rootTaskId: 'RootTaskId',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      rootTaskId: 'string',
      startTime: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

