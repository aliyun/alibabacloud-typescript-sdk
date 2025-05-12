// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMedia } from "./QueryMediaListResponseBodyMediaListMedia";


export class QueryMediaListResponseBodyMediaList extends $dara.Model {
  media?: QueryMediaListResponseBodyMediaListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMedia },
    };
  }

  validate() {
    if(Array.isArray(this.media)) {
      $dara.Model.validateArray(this.media);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

