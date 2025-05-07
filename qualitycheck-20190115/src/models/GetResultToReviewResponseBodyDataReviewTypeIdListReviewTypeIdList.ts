// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList } from "./GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList";


export class GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList extends $dara.Model {
  reviewKeyIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList;
  reviewTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
      reviewTypeId: 'ReviewTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList,
      reviewTypeId: 'number',
    };
  }

  validate() {
    if(this.reviewKeyIdList && typeof (this.reviewKeyIdList as any).validate === 'function') {
      (this.reviewKeyIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

