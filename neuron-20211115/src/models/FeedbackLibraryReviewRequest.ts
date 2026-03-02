// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackLibraryReviewRequest extends $dara.Model {
  approve?: string;
  feedback?: string;
  reviewId?: number;
  static names(): { [key: string]: string } {
    return {
      approve: 'approve',
      feedback: 'feedback',
      reviewId: 'reviewId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approve: 'string',
      feedback: 'string',
      reviewId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

