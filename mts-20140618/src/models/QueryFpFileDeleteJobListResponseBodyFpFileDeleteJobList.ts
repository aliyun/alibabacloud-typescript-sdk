// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob } from "./QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob";


export class QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobList extends $dara.Model {
  fpFileDeleteJob?: QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpFileDeleteJob: 'FpFileDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpFileDeleteJob: { 'type': 'array', 'itemType': QueryFpFileDeleteJobListResponseBodyFpFileDeleteJobListFpFileDeleteJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpFileDeleteJob)) {
      $dara.Model.validateArray(this.fpFileDeleteJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

