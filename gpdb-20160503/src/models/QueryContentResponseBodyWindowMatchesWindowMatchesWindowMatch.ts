// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch } from "./QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch";


export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch extends $dara.Model {
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch[];
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'windowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch },
    };
  }

  validate() {
    if(Array.isArray(this.windowMatch)) {
      $dara.Model.validateArray(this.windowMatch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

