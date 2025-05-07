// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo } from "./GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo";


export class GetResultToReviewResponseBodyDataHitRuleReviewInfoList extends $dara.Model {
  hitRuleReviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  validate() {
    if(Array.isArray(this.hitRuleReviewInfo)) {
      $dara.Model.validateArray(this.hitRuleReviewInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

