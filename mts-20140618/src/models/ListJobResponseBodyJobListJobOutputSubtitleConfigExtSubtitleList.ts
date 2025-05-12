// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle } from "./ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle";


export class ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': ListJobResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
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

