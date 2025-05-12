// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle } from "./QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle";


export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleList extends $dara.Model {
  subtitle?: QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.subtitle)) {
      $dara.Model.validateArray(this.subtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

