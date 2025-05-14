// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData } from "./SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData";


export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos extends $dara.Model {
  /**
   * @remarks
   * The end time of the clip. Unit: seconds. The value is of the Float type.
   * 
   * @example
   * 69.06635
   */
  endTime?: number;
  expression?: string;
  /**
   * @remarks
   * The start time of the clip. Unit: seconds. The value is of the Float type.
   * 
   * @example
   * 61.066353
   */
  startTime?: number;
  /**
   * @remarks
   * The information about the face in the clip.
   */
  trackData?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      expression: 'Expression',
      startTime: 'StartTime',
      trackData: 'TrackData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      expression: 'string',
      startTime: 'number',
      trackData: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData },
    };
  }

  validate() {
    if(Array.isArray(this.trackData)) {
      $dara.Model.validateArray(this.trackData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

