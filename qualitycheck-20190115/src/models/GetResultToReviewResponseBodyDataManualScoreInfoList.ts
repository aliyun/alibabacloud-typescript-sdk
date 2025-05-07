// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo } from "./GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo";


export class GetResultToReviewResponseBodyDataManualScoreInfoList extends $dara.Model {
  manualScoreInfo?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo[];
  static names(): { [key: string]: string } {
    return {
      manualScoreInfo: 'ManualScoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo },
    };
  }

  validate() {
    if(Array.isArray(this.manualScoreInfo)) {
      $dara.Model.validateArray(this.manualScoreInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

