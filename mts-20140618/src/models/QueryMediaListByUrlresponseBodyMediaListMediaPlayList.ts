// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay } from "./QueryMediaListByUrlresponseBodyMediaListMediaPlayListPlay";


export class QueryMediaListByURLResponseBodyMediaListMediaPlayList extends $dara.Model {
  play?: QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay[];
  static names(): { [key: string]: string } {
    return {
      play: 'Play',
    };
  }

  static types(): { [key: string]: any } {
    return {
      play: { 'type': 'array', 'itemType': QueryMediaListByURLResponseBodyMediaListMediaPlayListPlay },
    };
  }

  validate() {
    if(Array.isArray(this.play)) {
      $dara.Model.validateArray(this.play);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

