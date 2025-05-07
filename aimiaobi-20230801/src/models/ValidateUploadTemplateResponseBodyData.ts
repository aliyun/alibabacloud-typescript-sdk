// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateUploadTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 50
   */
  commentCount?: number;
  /**
   * @example
   * 50
   */
  dialogueCount?: number;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commentCount: 'CommentCount',
      dialogueCount: 'DialogueCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentCount: 'number',
      dialogueCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

