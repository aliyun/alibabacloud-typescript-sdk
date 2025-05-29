// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyWindowMatchesWindowMatches } from "./QueryContentResponseBodyWindowMatchesWindowMatches";


export class QueryContentResponseBodyWindowMatches extends $dara.Model {
  windowMatches?: QueryContentResponseBodyWindowMatchesWindowMatches[];
  static names(): { [key: string]: string } {
    return {
      windowMatches: 'windowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatches: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatches },
    };
  }

  validate() {
    if(Array.isArray(this.windowMatches)) {
      $dara.Model.validateArray(this.windowMatches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

