// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWebSearchResponseBodyUsageFilterModel } from "./GetWebSearchResponseBodyUsageFilterModel";
import { GetWebSearchResponseBodyUsageRewriteModel } from "./GetWebSearchResponseBodyUsageRewriteModel";


export class GetWebSearchResponseBodyUsage extends $dara.Model {
  filterModel?: GetWebSearchResponseBodyUsageFilterModel;
  rewriteModel?: GetWebSearchResponseBodyUsageRewriteModel;
  searchCount?: number;
  static names(): { [key: string]: string } {
    return {
      filterModel: 'filter_model',
      rewriteModel: 'rewrite_model',
      searchCount: 'search_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterModel: GetWebSearchResponseBodyUsageFilterModel,
      rewriteModel: GetWebSearchResponseBodyUsageRewriteModel,
      searchCount: 'number',
    };
  }

  validate() {
    if(this.filterModel && typeof (this.filterModel as any).validate === 'function') {
      (this.filterModel as any).validate();
    }
    if(this.rewriteModel && typeof (this.rewriteModel as any).validate === 'function') {
      (this.rewriteModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

