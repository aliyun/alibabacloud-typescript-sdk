// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * The arguments of the called function.
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCalls extends $dara.Model {
  /**
   * @remarks
   * The information about the called function.
   */
  function?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoicesMessageToolCallsFunction;
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
   * The index of this tool in the Input request parameter, starting from 0.
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
   * The chain-of-thought content of the model.
   * 
   * @example
   * Logical reasoning process
   */
  reasoningContent?: string;
  /**
   * @remarks
   * The role of the message. Valid values:
   * 
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
   * The tool invocation response.
   */
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
   * @remarks
   * The stop reason.
   * 
   * @example
   * finish
   */
  finishReason?: string;
  /**
   * @remarks
   * The index of the reply.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The response message from the large language model.
   */
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
   * @remarks
   * The number of cache hit tokens.
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

export class ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens consumed to generate the content.
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
   * The details of the prompt tokens.
   */
  promptTokensDetails?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionUsagePromptTokensDetails;
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
  /**
   * @remarks
   * The text content generated in real time.
   */
  choices?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletionChoices[];
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
   * The name of the model used.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The number of tokens used for the large language model output.
   */
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatches extends $dara.Model {
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
   * a14b0221-e3f2-4cf2-96cd-b3c293510770.jpg
   */
  fileName?: string;
  /**
   * @remarks
   * The public URL of the image in the query result. The default validity period is 2 hours. You can specify the validity period by using the UrlExpiration request parameter.
   * 
   * @example
   * http://dailyshort-sh.oss-cn-shanghai.aliyuncs.com/vod-8efba5/f06147795c6c71f080605420848d0302/0ca34d5743a84bf7c68f489a60715dac-ld.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * > If this parameter is empty, the ID is automatically generated by the database uuidgen. If this parameter is not empty and conflicts with an existing ID in the database, the value in the database is updated with the data from the API.
   * 
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @remarks
   * The metadata generated during document loading.
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
   * 0.12
   */
  rerankScore?: number;
  /**
   * @remarks
   * The source of the retrieval result. Valid values:
   * - 1: AISearch.
   * - 2: Full-text index.
   * - 3: Dual-channel recall.
   * 
   * @example
   * 0.12
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of the data. The scoring algorithm depends on the algorithm specified when the index is created, such as l2, ip, or cosine.
   * 
   * @example
   * 10
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

export class ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which the input text is split. A token can be a word, a phrase, a punctuation mark, or a character.
   * 
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
  /**
   * @remarks
   * The entity details.
   */
  entities?: string[];
  /**
   * @remarks
   * The recalled items.
   */
  matches?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResultMatches[];
  /**
   * @remarks
   * The relationship name.
   */
  relations?: string[];
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
   * The API execution status. Valid values:
   * - **success**: The execution is successful.
   * - **fail**: The execution fails.
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
   * The number of tokens or items consumed for document understanding or embedding.
   */
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
  /**
   * @remarks
   * The model response.
   */
  chatCompletion?: ChatWithKnowledgeBaseStreamResponseBodyChatCompletion;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The recall information from multiple knowledge bases.
   */
  multiCollectionRecallResult?: ChatWithKnowledgeBaseStreamResponseBodyMultiCollectionRecallResult;
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
   * - **success**: Successful.
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

