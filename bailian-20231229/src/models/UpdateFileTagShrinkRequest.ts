// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileTagShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * - The list of tags to associate with the file. You can specify a maximum of 100 tags. The combined length of all tag values cannot exceed 700 characters.
   * 
   * This parameter is required.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

