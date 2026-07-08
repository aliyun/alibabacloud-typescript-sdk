// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAuditContentResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * [The ID of the workspace.](https://help.aliyun.com/document_detail/2782167.html)
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

