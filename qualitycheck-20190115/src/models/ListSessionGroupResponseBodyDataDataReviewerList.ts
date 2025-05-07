// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataReviewerList extends $dara.Model {
  reviewerList?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewerList: 'ReviewerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reviewerList)) {
      $dara.Model.validateArray(this.reviewerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

