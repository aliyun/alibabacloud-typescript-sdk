// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCollectionDataResponseBodyMatchesMatch } from "./QueryCollectionDataResponseBodyMatchesMatch";


export class QueryCollectionDataResponseBodyMatches extends $dara.Model {
  match?: QueryCollectionDataResponseBodyMatchesMatch[];
  static names(): { [key: string]: string } {
    return {
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: { 'type': 'array', 'itemType': QueryCollectionDataResponseBodyMatchesMatch },
    };
  }

  validate() {
    if(Array.isArray(this.match)) {
      $dara.Model.validateArray(this.match);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

