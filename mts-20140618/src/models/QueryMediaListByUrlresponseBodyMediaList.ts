// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMedia } from "./QueryMediaListByUrlresponseBodyMediaListMedia";


export class QueryMediaListByURLResponseBodyMediaList extends $dara.Model {
  media?: QueryMediaListByURLResponseBodyMediaListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMedia },
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

