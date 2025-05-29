// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextEmbeddingResponseBodyResultsResults } from "./TextEmbeddingResponseBodyResultsResults";


export class TextEmbeddingResponseBodyResults extends $dara.Model {
  results?: TextEmbeddingResponseBodyResultsResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': TextEmbeddingResponseBodyResultsResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

