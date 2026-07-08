// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNotePostProcessingStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID returned by the SubmitAuditNote operation. This is the unique identifier for the task index of the custom rule library. Save this ID for future use.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx_Default_12847192741412
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
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

