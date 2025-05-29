// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyMatchesMatchList } from "./QueryContentResponseBodyMatchesMatchList";


export class QueryContentResponseBodyMatches extends $dara.Model {
  matchList?: QueryContentResponseBodyMatchesMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': QueryContentResponseBodyMatchesMatchList },
    };
  }

  validate() {
    if(Array.isArray(this.matchList)) {
      $dara.Model.validateArray(this.matchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

