// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList";
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList";


export class QueryJobListResponseBodyJobListJobOutputSubtitleConfig extends $dara.Model {
  /**
   * @remarks
   * The external captions.
   */
  extSubtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList;
  /**
   * @remarks
   * The captions.
   */
  subtitleList?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList;
  static names(): { [key: string]: string } {
    return {
      extSubtitleList: 'ExtSubtitleList',
      subtitleList: 'SubtitleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList,
      subtitleList: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList,
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

