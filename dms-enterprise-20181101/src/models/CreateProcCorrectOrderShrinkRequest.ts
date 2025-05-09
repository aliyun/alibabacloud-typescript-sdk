// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcCorrectOrderShrinkRequest extends $dara.Model {
  /**
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paramShrink?: string;
  relatedUserListShrink?: string;
  /**
   * @example
   * 4***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      paramShrink: 'Param',
      relatedUserListShrink: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      paramShrink: 'string',
      relatedUserListShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

