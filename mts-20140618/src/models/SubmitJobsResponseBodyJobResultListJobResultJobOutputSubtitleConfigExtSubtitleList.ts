// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleList extends $dara.Model {
  extSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle[];
  static names(): { [key: string]: string } {
    return {
      extSubtitle: 'ExtSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigExtSubtitleListExtSubtitle },
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

