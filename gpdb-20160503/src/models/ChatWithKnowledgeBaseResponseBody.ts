// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * Arguments of the called function.
   * 
   * @example
   * {"city":"hangzhou"}
   */
  arguments?: string;
  /**
   * @remarks
   * The name of the called function.
   * 
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
  /**
   * @remarks
   * Function call information.
   */
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
   * @remarks
   * The position of this tool in the \\"input\\" request parameter.
   * 
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
  /**
   * @remarks
   * The content of the document.
   */
  content?: string;
  /**
   * @remarks
   * 模型思维内容
   * 
   * @example
   * 逻辑推理过程
   */
  reasoningContent?: string;
  /**
   * @remarks
   * Message role:
   * 
   * *   system
   * *   user
   * *   assistant
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * Tool call response.
   */
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
   * @remarks
   * Finish reason.
   * 
   * @example
   * finish
   */
  finishReason?: string;
  /**
   * @remarks
   * The sequence number of the reply.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * LLM response.
   */
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
   * @remarks
   * The number of tokens from cache hits.
   * 
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
   * @remarks
   * The number of tokens consumed by the generated content.
   * 
   * @example
   * 42
   */
  completionTokens?: number;
  /**
   * @remarks
   * The number of tokens consumed by the prompt.
   * 
   * @example
   * 42
   */
  promptTokens?: number;
  /**
   * @remarks
   * The details about the prompt token.
   */
  promptTokensDetails?: ChatWithKnowledgeBaseResponseBodyChatCompletionUsagePromptTokensDetails;
  /**
   * @remarks
   * The total number of tokens.
   * 
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
  /**
   * @remarks
   * Text content generated in real time.
   */
  choices?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoices[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1758529748
   */
  created?: number;
  /**
   * @remarks
   * The ID of the response.
   * 
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The number of tokens used in LLM output.
   */
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

export class ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches extends $dara.Model {
  /**
   * @remarks
   * The content of the document.
   */
  content?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * process_info_19b9df4dc9ad4bf2b30eb2faa4a9a987.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the image result. By default, the URL is valid for 2 hours.
   * 
   * You can use the UrlExpiration parameter to specify a validity period.
   * 
   * @example
   * http://viapi-customer-pop.oss-cn-shanghai.aliyuncs.com/b4d8_207196811002111319_570c0e199f03428f812ab21fcc00dd6a
   */
  fileURL?: string;
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @remarks
   * Document loader metadata.
   * 
   * @example
   * {"page":1}
   */
  loaderMetadata?: any;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The rerank score.
   * 
   * @example
   * 0.1
   */
  rerankScore?: number;
  /**
   * @remarks
   * The source of the retrieved results. 1 indicates vector retrieval, 2 indicates full-text retrieval, and 3 indicates dual-path retrieval.
   * 
   * @example
   * 3
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of the data. It is related to the `l2, ip, or cosine` algorithm that is specified when you create an index.
   * 
   * @example
   * 12
   */
  score?: number;
  /**
   * @remarks
   * The vector data.
   */
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
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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
   * @remarks
   * The number of tokens that are used during vectorization.
   * 
   * >  A token is the minimum unit for splitting text. A token can be a word, phrase, punctuation, or character.
   * 
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
  /**
   * @remarks
   * The details of the entity.
   */
  entities?: string[];
  /**
   * @remarks
   * The retrieved items.
   */
  matches?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches[];
  /**
   * @remarks
   * The name of the file.
   */
  relations?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 6B9E3255-4543-5B3B-9E00-6490CA64742B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens that are consumed.
   * 
   * @example
   * 42
   */
  tokens?: number;
  /**
   * @remarks
   * The number of tokens that are consumed during document understanding or embedding.
   */
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
  /**
   * @remarks
   * model response.
   */
  chatCompletion?: ChatWithKnowledgeBaseResponseBodyChatCompletion;
  /**
   * @remarks
   * The returned information.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Retrieve information from multiple knowledge bases.
   */
  multiCollectionRecallResult?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResult;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
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

