// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateList extends $dara.Model {
  tailSlate?: SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate[];
  static names(): { [key: string]: string } {
    return {
      tailSlate: 'TailSlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tailSlate: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputTailSlateListTailSlate },
    };
  }

  validate() {
    if(Array.isArray(this.tailSlate)) {
      $dara.Model.validateArray(this.tailSlate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

