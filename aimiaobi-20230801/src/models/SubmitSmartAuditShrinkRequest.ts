// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Parameters for image audit
   */
  imageUrlListShrink?: string;
  /**
   * @remarks
   * Rule library ID for rule-based auditing (default: Default)
   * 
   * @example
   * note_1_486
   */
  noteId?: string;
  /**
   * @remarks
   * List of sub-audit codes
   */
  subCodesShrink?: string;
  /**
   * @remarks
   * Word library name for dictionary-based auditing (default: Default)
   * 
   * @example
   * Default
   */
  termsName?: string;
  /**
   * @remarks
   * Content to be audited
   * 
   * @example
   * “你好呀”
   */
  text?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  /**
   * @remarks
   * Parameters for image audit (deprecated; use ImageUrlList instead)
   */
  imageUrlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlListShrink: 'ImageUrlList',
      noteId: 'NoteId',
      subCodesShrink: 'SubCodes',
      termsName: 'TermsName',
      text: 'Text',
      workspaceId: 'WorkspaceId',
      imageUrlsShrink: 'imageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlListShrink: 'string',
      noteId: 'string',
      subCodesShrink: 'string',
      termsName: 'string',
      text: 'string',
      workspaceId: 'string',
      imageUrlsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

