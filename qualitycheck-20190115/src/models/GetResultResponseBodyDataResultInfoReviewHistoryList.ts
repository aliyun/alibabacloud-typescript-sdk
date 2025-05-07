// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory } from "./GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory";


export class GetResultResponseBodyDataResultInfoReviewHistoryList extends $dara.Model {
  reviewHistory?: GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory[];
  static names(): { [key: string]: string } {
    return {
      reviewHistory: 'ReviewHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewHistory: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory },
    };
  }

  validate() {
    if(Array.isArray(this.reviewHistory)) {
      $dara.Model.validateArray(this.reviewHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

