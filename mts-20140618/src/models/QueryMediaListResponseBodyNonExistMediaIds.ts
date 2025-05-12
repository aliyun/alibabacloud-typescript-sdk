// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListResponseBodyNonExistMediaIds extends $dara.Model {
  mediaId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaId)) {
      $dara.Model.validateArray(this.mediaId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

