// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlices extends $dara.Model {
  fpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      fpShotSlice: 'FpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultAudioFpShotsFpShotFpShotSlicesFpShotSlice },
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

