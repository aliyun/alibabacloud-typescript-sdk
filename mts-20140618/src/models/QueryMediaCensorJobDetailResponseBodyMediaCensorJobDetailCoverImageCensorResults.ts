// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults extends $dara.Model {
  coverImageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult[];
  static names(): { [key: string]: string } {
    return {
      coverImageCensorResult: 'CoverImageCensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageCensorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult },
    };
  }

  validate() {
    if(Array.isArray(this.coverImageCensorResult)) {
      $dara.Model.validateArray(this.coverImageCensorResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

