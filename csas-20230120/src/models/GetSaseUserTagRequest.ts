// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaseUserTagRequest extends $dara.Model {
  /**
   * @remarks
   * The user tag ID. You can obtain this value from the following operations:
   * - [ListSaseUserTags](~~ListSaseUserTags~~): Lists user tags.
   * - [CreateSaseUserTag](~~CreateSaseUserTag~~): Creates a user tag.
   * 
   * @example
   * su-tag-1ae52f66039fa0d4****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

