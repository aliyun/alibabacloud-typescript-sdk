// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshTaskByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task that you want to query.
   * 
   * You can call the [RefreshObjectCaches](https://help.aliyun.com/document_detail/91164.html) operation to query task IDs. Then, you can use the task IDs to query task status.
   * 
   * You can specify up to 10 task IDs. Separate task IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
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

