// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiSearchResponseBodyHeaderQueryContextOriginalQuery } from "./AiSearchResponseBodyHeaderQueryContextOriginalQuery";
import { AiSearchResponseBodyHeaderQueryContextRewrite } from "./AiSearchResponseBodyHeaderQueryContextRewrite";


export class AiSearchResponseBodyHeaderQueryContext extends $dara.Model {
  originalQuery?: AiSearchResponseBodyHeaderQueryContextOriginalQuery;
  rewrite?: AiSearchResponseBodyHeaderQueryContextRewrite;
  static names(): { [key: string]: string } {
    return {
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalQuery: AiSearchResponseBodyHeaderQueryContextOriginalQuery,
      rewrite: AiSearchResponseBodyHeaderQueryContextRewrite,
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

