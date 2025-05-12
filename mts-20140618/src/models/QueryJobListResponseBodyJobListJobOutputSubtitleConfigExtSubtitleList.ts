// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle";


export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.extSubtitle)) {
      $dara.Model.validateArray(this.extSubtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

