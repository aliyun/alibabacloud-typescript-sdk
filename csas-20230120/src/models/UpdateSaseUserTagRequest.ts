// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSaseUserTagRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the user tag.
   * 
   * @example
   * These are the company\\"s employees
   */
  description?: string;
  /**
   * @remarks
   * The name of the user tag.
   * 
   * @example
   * boss
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user tag. You can obtain the tag ID from the following operations:
   * - [ListSaseUserTags](~~ListSaseUserTags~~): Lists user tags.
   * - [CreateSaseUserTag](~~CreateSaseUserTag~~): Creates a user tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

