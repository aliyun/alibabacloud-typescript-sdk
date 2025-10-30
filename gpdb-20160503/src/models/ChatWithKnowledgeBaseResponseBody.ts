// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction extends $dara.Model {
  /**
   * @example
   * {"city":"hangzhou"}
   */
  arguments?: string;
  /**
   * @example
   * "get_weather"
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCalls extends $dara.Model {
  function?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction;
  /**
   * @remarks
   * ID
   * 
   * @example
   * "chatcmpl-c1bebafa-cc48-44e2-88c6-1a3572952f8e"
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      id: 'Id',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction,
      id: 'string',
      index: 'number',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * 逻辑推理过程
   */
  reasoningContent?: string;
  /**
   * @example
   * user
   */
  role?: string;
  toolCalls?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      reasoningContent: 'ReasoningContent',
      role: 'Role',
      toolCalls: 'ToolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      reasoningContent: 'string',
      role: 'string',
      toolCalls: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoices extends $dara.Model {
  /**
   * @example
   * finish
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'FinishReason',
      index: 'Index',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletionUsagePromptTokensDetails extends $dara.Model {
  /**
   * @example
   * 24
   */
  cachedTokens?: number;
  static names(): { [key: string]: string } {
    return {
      cachedTokens: 'CachedTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletionUsage extends $dara.Model {
  /**
   * @example
   * 42
   */
  completionTokens?: number;
  /**
   * @example
   * 42
   */
  promptTokens?: number;
  promptTokensDetails?: ChatWithKnowledgeBaseResponseBodyChatCompletionUsagePromptTokensDetails;
  /**
   * @example
   * 42
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      completionTokens: 'CompletionTokens',
      promptTokens: 'PromptTokens',
      promptTokensDetails: 'PromptTokensDetails',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTokens: 'number',
      promptTokens: 'number',
      promptTokensDetails: ChatWithKnowledgeBaseResponseBodyChatCompletionUsagePromptTokensDetails,
      totalTokens: 'number',
    };
  }

  validate() {
    if(this.promptTokensDetails && typeof (this.promptTokensDetails as any).validate === 'function') {
      (this.promptTokensDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyChatCompletion extends $dara.Model {
  choices?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoices[];
  /**
   * @example
   * 1758529748
   */
  created?: number;
  /**
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  usage?: ChatWithKnowledgeBaseResponseBodyChatCompletionUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'Choices',
      created: 'Created',
      id: 'Id',
      model: 'Model',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseResponseBodyChatCompletionChoices },
      created: 'number',
      id: 'string',
      model: 'string',
      usage: ChatWithKnowledgeBaseResponseBodyChatCompletionUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
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

export class ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatchesMetadata extends $dara.Model {
  /**
   * @example
   * 1
   */
  source?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches extends $dara.Model {
  content?: string;
  /**
   * @example
   * process_info_19b9df4dc9ad4bf2b30eb2faa4a9a987.txt
   */
  fileName?: string;
  /**
   * @example
   * http://viapi-customer-pop.oss-cn-shanghai.aliyuncs.com/b4d8_207196811002111319_570c0e199f03428f812ab21fcc00dd6a
   */
  fileURL?: string;
  /**
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @example
   * {"page":1}
   */
  loaderMetadata?: any;
  metadata?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatchesMetadata;
  /**
   * @example
   * 0.1
   */
  rerankScore?: number;
  /**
   * @example
   * 3
   */
  retrievalSource?: number;
  /**
   * @example
   * 12
   */
  score?: number;
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      fileURL: 'FileURL',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
      rerankScore: 'RerankScore',
      retrievalSource: 'RetrievalSource',
      score: 'Score',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileURL: 'string',
      id: 'string',
      loaderMetadata: 'any',
      metadata: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatchesMetadata,
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.vector)) {
      $dara.Model.validateArray(this.vector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultUsage extends $dara.Model {
  /**
   * @example
   * 21
   */
  embeddingTokens?: number;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResult extends $dara.Model {
  entities?: string[];
  matches?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches[];
  relations?: string[];
  /**
   * @example
   * 6B9E3255-4543-5B3B-9E00-6490CA64742B
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 42
   */
  tokens?: number;
  usage?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultUsage;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      matches: 'Matches',
      relations: 'Relations',
      requestId: 'RequestId',
      status: 'Status',
      tokens: 'Tokens',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': 'string' },
      matches: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches },
      relations: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      tokens: 'number',
      usage: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultUsage,
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    if(Array.isArray(this.matches)) {
      $dara.Model.validateArray(this.matches);
    }
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
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

export class ChatWithKnowledgeBaseResponseBody extends $dara.Model {
  chatCompletion?: ChatWithKnowledgeBaseResponseBodyChatCompletion;
  /**
   * @example
   * Successful
   */
  message?: string;
  multiCollectionRecallResult?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResult;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chatCompletion: 'ChatCompletion',
      message: 'Message',
      multiCollectionRecallResult: 'MultiCollectionRecallResult',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatCompletion: ChatWithKnowledgeBaseResponseBodyChatCompletion,
      message: 'string',
      multiCollectionRecallResult: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResult,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.chatCompletion && typeof (this.chatCompletion as any).validate === 'function') {
      (this.chatCompletion as any).validate();
    }
    if(this.multiCollectionRecallResult && typeof (this.multiCollectionRecallResult as any).validate === 'function') {
      (this.multiCollectionRecallResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

