// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot } from "./QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot";


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShots extends $dara.Model {
  textFpShot?: QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot[];
  static names(): { [key: string]: string } {
    return {
      textFpShot: 'TextFpShot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFpShot: { 'type': 'array', 'itemType': QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotResultTextFpShotsTextFpShot },
    };
  }

  validate() {
    if(Array.isArray(this.textFpShot)) {
      $dara.Model.validateArray(this.textFpShot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

