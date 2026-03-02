// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LibraryReview } from "./LibraryReview";


export class LibraryReviewListResult extends $dara.Model {
  libraryReviews?: LibraryReview[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryReviews: 'libraryReviews',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryReviews: { 'type': 'array', 'itemType': LibraryReview },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.libraryReviews)) {
      $dara.Model.validateArray(this.libraryReviews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

