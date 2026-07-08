// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableAuditNotesRequest extends $dara.Model {
  /**
   * @remarks
   * The rule library ID. If not specified, defaults to Default.
   */
  noteId?: string;
  /**
   * @remarks
   * The unique identifier of your Alibaba Cloud Model Studio workspace. Get your [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
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

