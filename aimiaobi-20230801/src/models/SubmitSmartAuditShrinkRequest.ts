// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartAuditShrinkRequest extends $dara.Model {
  imageUrlListShrink?: string;
  subCodesShrink?: string;
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
      subCodesShrink: 'SubCodes',
      text: 'Text',
      workspaceId: 'WorkspaceId',
      imageUrlsShrink: 'imageUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlListShrink: 'string',
      subCodesShrink: 'string',
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

