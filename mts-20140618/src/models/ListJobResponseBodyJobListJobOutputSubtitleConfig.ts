// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList } from "./ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList";
import { ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList } from "./ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList";


export class ListJobResponseBodyJobListJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external subtitles. The value is a JSON array.
   */
  extSubtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The subtitles.
   */
  subtitleList?: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
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

