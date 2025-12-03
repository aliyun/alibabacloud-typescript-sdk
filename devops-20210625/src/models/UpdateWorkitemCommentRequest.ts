// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkitemCommentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1964584
   */
  commentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MARKDOWN/RICHTEXT
   */
  formatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      commentId: 'commentId',
      content: 'content',
      formatType: 'formatType',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentId: 'number',
      content: 'string',
      formatType: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

