// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external subtitles. The value is a JSON array that contains up to **four** objects.
   */
  extSubtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The subtitles.
   */
  subtitleList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList,
    };
  }

  validate() {
    if(this.extSubtitleList && typeof (this.extSubtitleList as any).validate === 'function') {
      (this.extSubtitleList as any).validate();
    }
    if(this.subtitleList && typeof (this.subtitleList as any).validate === 'function') {
      (this.subtitleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

