// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuditNoteRequest extends $dara.Model {
  /**
   * @remarks
   * Rule library ID. If left blank, the default is used.
   */
  noteId?: string;
  /**
   * @remarks
   * The unique identifier for an Alibaba Cloud Model Studio workspace: Get the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
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
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noteId: 'string',
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

