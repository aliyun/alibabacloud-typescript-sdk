// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmAndPostProcessAuditNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The TaskId obtained from the SubmitAuditNote interface. This is the unique identifier for the custom rule library task index. Store it securely when using it.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx_Default_1241541251241
   */
  taskId?: string;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace unique identifier: Get [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
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

