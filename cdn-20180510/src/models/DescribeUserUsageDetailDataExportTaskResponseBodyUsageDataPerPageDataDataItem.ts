// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig } from "./DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig";


export class DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItem extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2018-10-09T06:33:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL.
   * 
   * @example
   * https://test.oss-cn-beijing.aliyuncs.com/billing_data/xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The configurations of the task.
   */
  taskConfig?: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 11
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
   * 2018-10-09T06:35:46Z
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
      taskConfig: DescribeUserUsageDetailDataExportTaskResponseBodyUsageDataPerPageDataDataItemTaskConfig,
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

