// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleList extends $dara.Model {
  outSubtitle?: SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle[];
  static names(): { [key: string]: string } {
    return {
      outSubtitle: 'OutSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outSubtitle: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputOutSubtitleListOutSubtitle },
    };
  }

  validate() {
    if(Array.isArray(this.outSubtitle)) {
      $dara.Model.validateArray(this.outSubtitle);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

