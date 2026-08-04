// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access tag. You can obtain the value from the following operations:
   * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): Lists internal access tags.
   * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): Creates an internal access tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-d3f64e8bdd4a****
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

