// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemCommentRequest extends $dara.Model {
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
   * RICHTEXT/MARKDOWN
   */
  formatType?: string;
  /**
   * @example
   * 26842
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1e9903d8b3f12xxxxxf9286ef5
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      formatType: 'formatType',
      parentId: 'parentId',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      formatType: 'string',
      parentId: 'string',
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

