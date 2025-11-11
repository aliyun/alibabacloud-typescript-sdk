// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditShrinkRequest extends $dara.Model {
  imageUrlListShrink?: string;
  noteId?: string;
  subCodesShrink?: string;
  termsName?: string;
  text?: string;
  /**
   * @example
   * xxxx
   */
  workspaceId?: string;
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

