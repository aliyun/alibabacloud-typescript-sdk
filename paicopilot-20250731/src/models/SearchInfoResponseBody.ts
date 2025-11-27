// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInfoResponseBodyKnowledgeBaseSearchResults extends $dara.Model {
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * DSW is ****** in pai.
   */
  resultContent?: string;
  /**
   * @example
   * 0.6215165367
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      resultContent: 'ResultContent',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      resultContent: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInfoResponseBodyWebSearchResults extends $dara.Model {
  /**
   * @example
   * 2
   */
  index?: string;
  /**
   * @example
   * Qwen3-Coder*****is good
   */
  resultContent?: string;
  /**
   * @example
   * 0.5215170567
   */
  score?: number;
  /**
   * @example
   * https://help.aliyun.com/zh/pai/use-cases/dsw-use-qwen3-coder-to-assist-in-code-development
   */
  sourceLink?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      resultContent: 'ResultContent',
      score: 'Score',
      sourceLink: 'SourceLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      resultContent: 'string',
      score: 'number',
      sourceLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInfoResponseBody extends $dara.Model {
  knowledgeBaseSearchResults?: SearchInfoResponseBodyKnowledgeBaseSearchResults[];
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  webSearchResults?: SearchInfoResponseBodyWebSearchResults[];
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseSearchResults: 'KnowledgeBaseSearchResults',
      requestId: 'RequestId',
      webSearchResults: 'WebSearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseSearchResults: { 'type': 'array', 'itemType': SearchInfoResponseBodyKnowledgeBaseSearchResults },
      requestId: 'string',
      webSearchResults: { 'type': 'array', 'itemType': SearchInfoResponseBodyWebSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseSearchResults)) {
      $dara.Model.validateArray(this.knowledgeBaseSearchResults);
    }
    if(Array.isArray(this.webSearchResults)) {
      $dara.Model.validateArray(this.webSearchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

