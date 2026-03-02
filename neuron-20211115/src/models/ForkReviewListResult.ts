// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ForkReview } from "./ForkReview";


export class ForkReviewListResult extends $dara.Model {
  forkReviews?: ForkReview[];
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      forkReviews: 'forkReviews',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forkReviews: { 'type': 'array', 'itemType': ForkReview },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.forkReviews)) {
      $dara.Model.validateArray(this.forkReviews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

