// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditNoteProcessingStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Task ID returned by the SubmitAuditNote operation. Save this ID securely. It uniquely identifies your custom rule library task.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx_Default_129873419274
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier of your Model Studio workspace. To get this ID, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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

