// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch } from "./QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch";


export class QueryContentResponseBodyWindowMatchesWindowMatches extends $dara.Model {
  /**
   * @remarks
   * List of individual top windowed matches.
   */
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch;
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'WindowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch,
    };
  }

  validate() {
    if(this.windowMatch && typeof (this.windowMatch as any).validate === 'function') {
      (this.windowMatch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

