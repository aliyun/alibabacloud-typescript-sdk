// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList } from "./ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList";


export class ListCustomizedVoiceJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried human voice cloning jobs.
   */
  customizedVoiceJobList?: ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 271
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceJobList: 'CustomizedVoiceJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceJobList: { 'type': 'array', 'itemType': ListCustomizedVoiceJobsResponseBodyDataCustomizedVoiceJobList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customizedVoiceJobList)) {
      $dara.Model.validateArray(this.customizedVoiceJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

