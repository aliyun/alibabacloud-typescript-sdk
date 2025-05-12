// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJob } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJob";


export class QueryFpShotJobListResponseBodyFpShotJobList extends $dara.Model {
  fpShotJob?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJob[];
  static names(): { [key: string]: string } {
    return {
      fpShotJob: 'FpShotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotJob: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJob },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotJob)) {
      $dara.Model.validateArray(this.fpShotJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

