// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PbcInvokeReview } from "./PbcInvokeReview";


export class PbcInvokeReviewListResult extends $dara.Model {
  pbcInvokeReviews?: PbcInvokeReview[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pbcInvokeReviews: 'pbcInvokeReviews',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pbcInvokeReviews: { 'type': 'array', 'itemType': PbcInvokeReview },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pbcInvokeReviews)) {
      $dara.Model.validateArray(this.pbcInvokeReviews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

