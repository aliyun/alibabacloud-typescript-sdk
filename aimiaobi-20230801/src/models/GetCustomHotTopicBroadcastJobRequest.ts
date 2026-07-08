// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHotTopicBroadcastJobRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * > Tasks that use the same TaskId belong to the same conversation group.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e27abb32cb64f80a0c6e829b6c87a09
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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

