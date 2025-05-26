// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrackListResponseBodyDataStat } from "./GetTrackListResponseBodyDataStat";


export class GetTrackListResponseBodyData extends $dara.Model {
  stat?: GetTrackListResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListResponseBodyDataStat },
    };
  }

  validate() {
    if(Array.isArray(this.stat)) {
      $dara.Model.validateArray(this.stat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

