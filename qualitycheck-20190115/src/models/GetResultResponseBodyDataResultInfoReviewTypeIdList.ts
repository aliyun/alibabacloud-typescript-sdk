// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList } from "./GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList";


export class GetResultResponseBodyDataResultInfoReviewTypeIdList extends $dara.Model {
  reviewTypeIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList[];
  static names(): { [key: string]: string } {
    return {
      reviewTypeIdList: 'ReviewTypeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTypeIdList: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList },
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

