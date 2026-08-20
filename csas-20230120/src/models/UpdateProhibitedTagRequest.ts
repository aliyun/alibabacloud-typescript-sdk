// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedTagRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the prohibited software tag. The description can contain letters, digits, Chinese characters, spaces, periods (.), underscores (_), and hyphens (-), and cannot exceed 128 characters in length.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The name of the prohibited software tag. The name must be 1 to 128 characters in length and can contain letters, digits, Chinese characters, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * Edge
   */
  name?: string;
  /**
   * @remarks
   * The ID of the custom prohibited software tag. Only custom tags under the current Alibaba Cloud account can be modified. Built-in system tags cannot be modified. You can obtain the value from the following operations:
   * - [ListProhibitedTags](~~ListProhibitedTags~~): Lists prohibited software tags.
   * - [CreateProhibitedTag](~~CreateProhibitedTag~~): Creates a custom prohibited software tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-996078937c00****
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

