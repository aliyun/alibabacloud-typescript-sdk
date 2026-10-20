// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileTagRequest extends $dara.Model {
  /**
   * @remarks
   * - The list of tags associated with the file. You can specify up to 100 tags, and the total character length of all tags cannot exceed 700.
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

