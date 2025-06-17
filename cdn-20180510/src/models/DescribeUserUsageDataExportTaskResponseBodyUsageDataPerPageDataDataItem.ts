// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig } from "./DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig";


export class DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2019-12-31T08:43:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://cdn-polaris.xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * *   created: The task is being created.
   * *   success: The task is successful.
   * *   failed: The task failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the task.
   */
  taskConfig?: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * A91BE91F-0B34-4CBF-8E0F-A2977
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * Refresh
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 2019-12-31T08:45:02Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      taskConfig: 'TaskConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      status: 'string',
      taskConfig: DescribeUserUsageDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.taskConfig && typeof (this.taskConfig as any).validate === 'function') {
      (this.taskConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

