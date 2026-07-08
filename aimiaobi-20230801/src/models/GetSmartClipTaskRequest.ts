// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartClipTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the task.
   * 
   * > You do not need to specify TaskId. The system generates it automatically. If you use the same TaskId for multiple tasks, those tasks belong to the same conversation group.
   * 
   * This parameter is required.
   * 
   * @example
   * task-03d46184ee7d8749
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier of your Alibaba Cloud Model Studio workspace. To get the workspace ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

