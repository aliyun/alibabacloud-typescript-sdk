// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeList extends $dara.Model {
  merge?: SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge[];
  static names(): { [key: string]: string } {
    return {
      merge: 'Merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'array', 'itemType': SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge },
    };
  }

  validate() {
    if(Array.isArray(this.merge)) {
      $dara.Model.validateArray(this.merge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

