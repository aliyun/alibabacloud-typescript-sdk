// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlices extends $dara.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultFpShotsFpShotFpShotSlicesFpShotSlice },
    };
  }

  validate() {
    if(Array.isArray(this.fpShotSlice)) {
      $dara.Model.validateArray(this.fpShotSlice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

