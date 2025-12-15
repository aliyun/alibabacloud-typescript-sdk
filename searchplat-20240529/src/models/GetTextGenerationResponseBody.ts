// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextGenerationResponseBodyResultSearchResults extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyResult extends $dara.Model {
  searchResults?: GetTextGenerationResponseBodyResultSearchResults[];
  text?: string;
  static names(): { [key: string]: string } {
    return {
      searchResults: 'search_results',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchResults: { 'type': 'array', 'itemType': GetTextGenerationResponseBodyResultSearchResults },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextGenerationResponseBodyUsage extends $dara.Model {
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

export class GetTextGenerationResponseBody extends $dara.Model {
  latency?: number;
  requestId?: string;
  result?: GetTextGenerationResponseBodyResult;
  usage?: GetTextGenerationResponseBodyUsage;
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
      result: GetTextGenerationResponseBodyResult,
      usage: GetTextGenerationResponseBodyUsage,
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

