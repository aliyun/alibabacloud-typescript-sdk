// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeLibraryReviewCmd extends $dara.Model {
  libraryId?: number;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

