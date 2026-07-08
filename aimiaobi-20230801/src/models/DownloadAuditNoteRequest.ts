// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadAuditNoteRequest extends $dara.Model {
  /**
   * @remarks
   * Rule library ID. If left blank, the default is Default.
   */
  noteId?: string;
  /**
   * @remarks
   * The task ID obtained by calling the SubmitAuditNote API. This is the unique identifier for the custom rule library task index. Store it securely when using it. When using this API, if the input parameters include \\`taskId\\`, you can retrieve the structured rule library that you successfully uploaded via the SubmitAuditNote API but has not undergone post-processing by ConfirmAndProcessAuditNote. If the input parameters do not include \\`taskId\\`, you can retrieve the structured rule library that has undergone post-processing and is available for auditing.
   * 
   * @example
   * xxx_Default_1241541251241
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. Get the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      noteId: 'NoteId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noteId: 'string',
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

