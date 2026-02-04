// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBroadcastAudiosByIdRequest extends $dara.Model {
  audioIds?: string[];
  static names(): { [key: string]: string } {
    return {
      audioIds: 'audioIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.audioIds)) {
      $dara.Model.validateArray(this.audioIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

