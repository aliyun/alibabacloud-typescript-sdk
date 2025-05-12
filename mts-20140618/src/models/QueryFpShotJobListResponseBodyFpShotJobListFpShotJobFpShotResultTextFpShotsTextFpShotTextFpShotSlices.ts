// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlices extends $dara.Model {
  textFpShotSlice?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice[];
  static names(): { [key: string]: string } {
    return {
      textFpShotSlice: 'TextFpShotSlice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShotSlice: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShotTextFpShotSlicesTextFpShotSlice },
    };
  }

  validate() {
    if(Array.isArray(this.textFpShotSlice)) {
      $dara.Model.validateArray(this.textFpShotSlice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

