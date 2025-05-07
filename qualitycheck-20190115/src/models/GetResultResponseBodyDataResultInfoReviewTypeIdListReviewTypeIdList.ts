// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList } from "./GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList";


export class GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList extends $dara.Model {
  reviewKeyIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList;
  reviewTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
      reviewTypeId: 'ReviewTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList,
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

