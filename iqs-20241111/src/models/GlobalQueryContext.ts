// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GlobalQueryContextOriginalQuery } from "./GlobalQueryContextOriginalQuery";


export class GlobalQueryContext extends $dara.Model {
  originalQuery?: GlobalQueryContextOriginalQuery;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: GlobalQueryContextOriginalQuery,
    };
  }

  validate() {
    if(this.originalQuery && typeof (this.originalQuery as any).validate === 'function') {
      (this.originalQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

