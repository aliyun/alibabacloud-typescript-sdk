// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * The called function parameters.
   * 
   * @example
   * {"city":"hangzhou"}
   */
  arguments?: string;
  /**
   * @remarks
   * The called function name.
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
   * The called function information.
   */
  function?: ChatWithKnowledgeBaseResponseBodyChatCompletionChoicesMessageToolCallsFunction;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * "chatcmpl-c1bebafa-cc48-44e2-88c6-1a3572952f8e"
   */
  id?: string;
  /**
   * @remarks
   * The tool call sequence number.
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
   * The document content.
   * 
   * @example
   * The weather in Hangzhou is sunny.
   */
  content?: string;
  /**
   * @remarks
   * The model reasoning content.
   * 
   * @example
   * Logical reasoning process
   */
  reasoningContent?: string;
  /**
   * @remarks
   * The message role:
   * - system
   * - user
   * - assistant
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The tool call response list.
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
   * The stop reason.
   * 
   * @example
   * finish
   */
  finishReason?: string;
  /**
   * @remarks
   * The reply sequence number.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The large model reply response.
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
   * The number of tokens that hit the cache.
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
   * The number of tokens consumed for generating content.
   * 
   * @example
   * 42
   */
  completionTokens?: number;
  /**
   * @remarks
   * The number of tokens consumed by the input prompt.
   * 
   * @example
   * 42
   */
  promptTokens?: number;
  /**
   * @remarks
   * The prompt token details.
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
   * The real-time generated text content.
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
   * The response ID.
   * 
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @remarks
   * The model name used.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The token usage of the large model output.
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
   * The document content.
   * 
   * @example
   * AnalyticDB PostgreSQL vector database.
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
   * The public URL of the query result image, valid for 2 hours by default.
   * 
   * You can specify the validity period using the UrlExpiration input parameter.
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
   * The metadata information loaded by the document loader.
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
   * The reranking score.
   * 
   * @example
   * 0.1
   */
  rerankScore?: number;
  /**
   * @remarks
   * The source of the retrieval result. 1 indicates vector retrieval, 2 indicates full-text retrieval, and 3 indicates dual-path recall.
   * 
   * @example
   * 3
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of this data entry. The scoring algorithm is related to the algorithm specified when creating the index (l2/ip/cosine).
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
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which input text is divided. A token can be a word, a phrase, a punctuation mark, a character, etc.
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
   * The entity details.
   */
  entities?: string[];
  /**
   * @remarks
   * The recall items.
   */
  matches?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResultMatches[];
  /**
   * @remarks
   * The relationship edge details.
   */
  relations?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B9E3255-4543-5B3B-9E00-6490CA64742B
   */
  requestId?: string;
  /**
   * @remarks
   * The API execution status. Valid values:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The number of tokens consumed.
   * 
   * @example
   * 42
   */
  tokens?: number;
  /**
   * @remarks
   * The tokens or items consumed by document understanding or embedding.
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
   * The model response.
   */
  chatCompletion?: ChatWithKnowledgeBaseResponseBodyChatCompletion;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The multi-knowledge base recall information.
   */
  multiCollectionRecallResult?: ChatWithKnowledgeBaseResponseBodyMultiCollectionRecallResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * - **success**: Succeeded.
   * - **fail**: Failed.
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

