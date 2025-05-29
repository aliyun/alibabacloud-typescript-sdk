// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RerankResponseBodyResultsResults } from "./RerankResponseBodyResultsResults";


export class RerankResponseBodyResults extends $dara.Model {
  results?: RerankResponseBodyResultsResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': RerankResponseBodyResultsResults },
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

