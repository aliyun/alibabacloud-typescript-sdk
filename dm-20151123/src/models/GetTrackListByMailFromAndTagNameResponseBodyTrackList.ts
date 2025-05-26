// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrackListByMailFromAndTagNameResponseBodyTrackListStat } from "./GetTrackListByMailFromAndTagNameResponseBodyTrackListStat";


export class GetTrackListByMailFromAndTagNameResponseBodyTrackList extends $dara.Model {
  stat?: GetTrackListByMailFromAndTagNameResponseBodyTrackListStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'Stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListByMailFromAndTagNameResponseBodyTrackListStat },
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

