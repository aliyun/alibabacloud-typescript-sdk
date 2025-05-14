// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition } from "./SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition";


export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData extends $dara.Model {
  /**
   * @remarks
   * The coordinates of the face.
   */
  boxPosition?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition;
  /**
   * @remarks
   * The timestamp when the face appears in the clip. Unit: seconds. The value is of the Float type.
   * 
   * @example
   * 62.03302
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      boxPosition: 'BoxPosition',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxPosition: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition,
      timestamp: 'number',
    };
  }

  validate() {
    if(this.boxPosition && typeof (this.boxPosition as any).validate === 'function') {
      (this.boxPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

