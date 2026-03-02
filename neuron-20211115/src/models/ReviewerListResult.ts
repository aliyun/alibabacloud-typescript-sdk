// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Reviewer } from "./Reviewer";


export class ReviewerListResult extends $dara.Model {
  requestId?: string;
  reviewers?: Reviewer[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      reviewers: 'reviewers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reviewers: { 'type': 'array', 'itemType': Reviewer },
    };
  }

  validate() {
    if(Array.isArray(this.reviewers)) {
      $dara.Model.validateArray(this.reviewers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

