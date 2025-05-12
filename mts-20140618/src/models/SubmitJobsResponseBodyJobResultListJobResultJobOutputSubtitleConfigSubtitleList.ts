// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleList extends $dara.Model {
  subtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle[];
  static names(): { [key: string]: string } {
    return {
      subtitle: 'Subtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputSubtitleConfigSubtitleListSubtitle },
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

