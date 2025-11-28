// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBroadcastVideosByIdRequest extends $dara.Model {
  videoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      videoIds: 'videoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.videoIds)) {
      $dara.Model.validateArray(this.videoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

