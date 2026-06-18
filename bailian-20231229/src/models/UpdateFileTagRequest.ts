// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileTagRequest extends $dara.Model {
  /**
   * @remarks
   * - The list of tags to associate with the file. You can specify a maximum of 100 tags. The combined length of all tag values cannot exceed 700 characters.
   * 
   * This parameter is required.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

