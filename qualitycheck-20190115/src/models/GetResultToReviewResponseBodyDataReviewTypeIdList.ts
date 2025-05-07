// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList } from "./GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList";


export class GetResultToReviewResponseBodyDataReviewTypeIdList extends $dara.Model {
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList[];
  static names(): { [key: string]: string } {
    return {
      reviewTypeIdList: 'ReviewTypeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTypeIdList: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList },
    };
  }

  validate() {
    if(Array.isArray(this.reviewTypeIdList)) {
      $dara.Model.validateArray(this.reviewTypeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

