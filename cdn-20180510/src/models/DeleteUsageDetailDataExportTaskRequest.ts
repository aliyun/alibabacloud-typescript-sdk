// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUsageDetailDataExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task. You can call the [DescribeUserUsageDataExportTask](https://help.aliyun.com/document_detail/91062.html) operation to query tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

