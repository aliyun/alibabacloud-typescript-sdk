// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnifiedOriginalQuery } from "./UnifiedOriginalQuery";
import { UnifiedRewrite } from "./UnifiedRewrite";


export class UnifiedQueryContext extends $dara.Model {
  /**
   * @remarks
   * The search engine used.
   * 
   * @example
   * Generic
   */
  engineType?: string;
  /**
   * @remarks
   * The initial request.
   */
  originalQuery?: UnifiedOriginalQuery;
  /**
   * @remarks
   * The rewritten result.
   */
  rewrite?: UnifiedRewrite;
  static names(): { [key: string]: string } {
    return {
      engineType: 'engineType',
      originalQuery: 'originalQuery',
      rewrite: 'rewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      originalQuery: UnifiedOriginalQuery,
      rewrite: UnifiedRewrite,
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

