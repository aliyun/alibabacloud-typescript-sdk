// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadAuditNoteRequest extends $dara.Model {
  noteId?: string;
  /**
   * @example
   * xxx_Default_1241541251241
   */
  taskId?: string;
  /**
   * @remarks
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

