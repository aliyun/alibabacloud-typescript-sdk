// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShots extends $dara.Model {
  fpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot[];
  static names(): { [key: string]: string } {
    return {
      fpShot: 'FpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShot },
    };
  }

  validate() {
    if(Array.isArray(this.fpShot)) {
      $dara.Model.validateArray(this.fpShot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

