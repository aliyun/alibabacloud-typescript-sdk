// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAuditNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The FileKey of your rule library file stored in Alibaba Cloud OSS. For how to generate a FileKey, see [Common APIs: GenerateUploadConfig for File Upload and Download](https://next.api.aliyun.com/document/AiMiaoBi/2023-08-01/GenerateUploadConfig?spm=openapi-amp.newDocPublishment.0.0.18fc281fOiiBil). Your rule library file must be in DOCX, XLSX, or PDF format. If you use XLSX, it must have exactly two columns. The table header must be "Proofreading Basis" and "Source". XLSX files give the best parsing results. DOCX and PDF files are also parsed automatically.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://default/your/file/key
   */
  fileKey?: string;
  /**
   * @remarks
   * ID of the rule library. If you omit this parameter, the system uses Default.
   * 
   * @example
   * note_id_unique
   */
  noteId?: string;
  /**
   * @remarks
   * Unique identifier of your Model Studio workspace. To get this ID, see [Get the Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      noteId: 'NoteId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
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

