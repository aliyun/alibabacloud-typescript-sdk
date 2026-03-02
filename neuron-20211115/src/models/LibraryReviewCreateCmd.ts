// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LibraryReviewCreateCmd extends $dara.Model {
  libraryId?: number;
  libraryUrl?: string;
  marketId?: number;
  reviewerId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
      libraryUrl: 'libraryUrl',
      marketId: 'marketId',
      reviewerId: 'reviewerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'number',
      libraryUrl: 'string',
      marketId: 'number',
      reviewerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

