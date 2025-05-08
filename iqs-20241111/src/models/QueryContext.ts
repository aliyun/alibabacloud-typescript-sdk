// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryContextOriginalQuery } from "./QueryContextOriginalQuery";
import { QueryContextRewrite } from "./QueryContextRewrite";


export class QueryContext extends $dara.Model {
  originalQuery?: QueryContextOriginalQuery;
  rewrite?: QueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: QueryContextOriginalQuery,
      rewrite: QueryContextRewrite,
    };
  }

  validate() {
    if(this.originalQuery && typeof (this.originalQuery as any).validate === 'function') {
      (this.originalQuery as any).validate();
    }
    if(this.rewrite && typeof (this.rewrite as any).validate === 'function') {
      (this.rewrite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

