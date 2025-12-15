// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebSearchResponseBodyResultSearchResult extends $dara.Model {
  content?: string;
  link?: string;
  position?: number;
  snippet?: string;
  tilte?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      link: 'link',
      position: 'position',
      snippet: 'snippet',
      tilte: 'tilte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      link: 'string',
      position: 'number',
      snippet: 'string',
      tilte: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyResult extends $dara.Model {
  searchResult?: GetWebSearchResponseBodyResultSearchResult[];
  static names(): { [key: string]: string } {
    return {
      searchResult: 'search_result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResult: { 'type': 'array', 'itemType': GetWebSearchResponseBodyResultSearchResult },
    };
  }

  validate() {
    if(Array.isArray(this.searchResult)) {
      $dara.Model.validateArray(this.searchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyUsageFilterModel extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebSearchResponseBodyUsageRewriteModel extends $dara.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'input_tokens',
      outputTokens: 'output_tokens',
      totalTokens: 'total_tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetWebSearchResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetWebSearchResponseBodyResult;
  usage?: GetWebSearchResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      latency: 'latency',
      requestId: 'request_id',
      result: 'result',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latency: 'number',
      requestId: 'string',
      result: GetWebSearchResponseBodyResult,
      usage: GetWebSearchResponseBodyUsage,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

