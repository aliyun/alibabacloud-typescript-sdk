// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCallsFunction extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCalls extends $dara.Model {
  function?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCallsFunction;
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
      function: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCallsFunction,
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * 逻辑推导过程
   */
  reasoningContent?: string;
  /**
   * @example
   * user
   */
  role?: string;
  toolCalls?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCalls[];
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
      toolCalls: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCalls },
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoices extends $dara.Model {
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
  message?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessage;
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
      message: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessage,
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsagePromptTokensDetails extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsage extends $dara.Model {
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
  promptTokensDetails?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsagePromptTokensDetails;
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
      promptTokensDetails: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsagePromptTokensDetails,
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletion extends $dara.Model {
  choices?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoices[];
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
  usage?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsage;
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
      choices: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoices },
      created: 'number',
      id: 'string',
      model: 'string',
      usage: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsage,
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatchesMetadata extends $dara.Model {
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatches extends $dara.Model {
  content?: string;
  /**
   * @example
   * a14b0221-e3f2-4cf2-96cd-b3c293510770.jpg
   */
  fileName?: string;
  /**
   * @example
   * http://dailyshort-sh.oss-cn-shanghai.aliyuncs.com/vod-8efba5/f06147795c6c71f080605420848d0302/0ca34d5743a84bf7c68f489a60715dac-ld.mp4
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
  metadata?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatchesMetadata;
  /**
   * @example
   * 0.12
   */
  rerankScore?: number;
  /**
   * @example
   * 0.12
   */
  retrievalSource?: number;
  /**
   * @example
   * 10
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
      metadata: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatchesMetadata,
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultUsage extends $dara.Model {
  /**
   * @example
   * 158
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResult extends $dara.Model {
  entities?: string[];
  matches?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatches[];
  relations?: string[];
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
  /**
   * @example
   * 42
   */
  tokens?: number;
  usage?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultUsage;
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
      matches: { 'type': 'array', 'itemType': ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatches },
      relations: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      tokens: 'number',
      usage: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultUsage,
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

export class ChatWithKnowledgeBaseStreamResponseBody extends $dara.Model {
  chatCompletion?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletion;
  /**
   * @example
   * Successful
   */
  message?: string;
  multiCollectionRecallResult?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResult;
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
      chatCompletion: ChatWithKnowledgeBaseStreamResponseBodyChatCompletion,
      message: 'string',
      multiCollectionRecallResult: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResult,
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

