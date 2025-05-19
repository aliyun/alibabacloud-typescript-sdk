// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSampleConsistencyJobsResponseBodySampleConsistencyJobs } from "./ListSampleConsistencyJobsResponseBodySampleConsistencyJobs";


export class ListSampleConsistencyJobsResponseBody extends $dara.Model {
  requestId?: string;
  sampleConsistencyJobs?: ListSampleConsistencyJobsResponseBodySampleConsistencyJobs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sampleConsistencyJobs: 'SampleConsistencyJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sampleConsistencyJobs: { 'type': 'array', 'itemType': ListSampleConsistencyJobsResponseBodySampleConsistencyJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sampleConsistencyJobs)) {
      $dara.Model.validateArray(this.sampleConsistencyJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

