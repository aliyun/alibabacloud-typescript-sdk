// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob } from "./QueryFpDbdeleteJobListResponseBodyFpDbdeleteJobListFpDbdeleteJob";


export class QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobList extends $dara.Model {
  fpDBDeleteJob?: QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob[];
  static names(): { [key: string]: string } {
    return {
      fpDBDeleteJob: 'FpDBDeleteJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBDeleteJob: { 'type': 'array', 'itemType': QueryFpDBDeleteJobListResponseBodyFpDBDeleteJobListFpDBDeleteJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpDBDeleteJob)) {
      $dara.Model.validateArray(this.fpDBDeleteJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

