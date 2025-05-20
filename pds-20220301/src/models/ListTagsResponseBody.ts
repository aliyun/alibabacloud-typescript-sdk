// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageTag } from "./ImageTag";


export class ListTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: ImageTag[];
  static names(): { [key: string]: string } {
    return {
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ImageTag },
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

