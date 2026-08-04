// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessTagRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of private network access tag IDs. Enter a maximum of 100 private network access tag IDs.
   * 
   * This parameter is required.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

