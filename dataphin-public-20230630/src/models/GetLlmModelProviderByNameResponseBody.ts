// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmModelProviderByNameResponseBodyDataLlmModels extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the model.
   * 
   * @example
   * 通义千问-Max
   */
  cnName?: string;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * General text generation model
   */
  description?: string;
  /**
   * @remarks
   * The list of available dimension values for the embedding model. Only embedding models have this value.
   */
  embeddingDimensions?: number[];
  /**
   * @remarks
   * The enabling status.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The model invocation method. Valid values:
   * - OPEN_AI
   * - DASH_SCOPE
   * 
   * @example
   * DASH_SCOPE
   */
  invokeType?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * 1001
   */
  modelId?: number;
  /**
   * @remarks
   * The list of model modality types. Valid values:
   * - TEXT: text
   * - IMAGE: image
   * - AUDIO: audio
   * - VIDEO: video
   * - EMBEDDING: embedding
   */
  modelTypes?: string[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  name?: string;
  /**
   * @remarks
   * The service provider.
   * 
   * @example
   * bailian
   */
  serviceProvider?: string;
  /**
   * @remarks
   * The list of model task capabilities. Valid values:
   * - ASR: speech recognition
   * - TTS: speech synthesis
   * - TRANSLATION: speech translation
   */
  tasks?: string[];
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      description: 'Description',
      embeddingDimensions: 'EmbeddingDimensions',
      enabled: 'Enabled',
      invokeType: 'InvokeType',
      modelId: 'ModelId',
      modelTypes: 'ModelTypes',
      name: 'Name',
      serviceProvider: 'ServiceProvider',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      description: 'string',
      embeddingDimensions: { 'type': 'array', 'itemType': 'number' },
      enabled: 'boolean',
      invokeType: 'string',
      modelId: 'number',
      modelTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      serviceProvider: 'string',
      tasks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.embeddingDimensions)) {
      $dara.Model.validateArray(this.embeddingDimensions);
    }
    if(Array.isArray(this.modelTypes)) {
      $dara.Model.validateArray(this.modelTypes);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLlmModelProviderByNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The base URL of the model.
   * 
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The enabling status.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the model service provider.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The list of models provided by the model service provider.
   */
  llmModels?: GetLlmModelProviderByNameResponseBodyDataLlmModels[];
  /**
   * @remarks
   * The source of the model service provider. Valid values:
   * - BUILTIN_MODEL: built-in
   * - BYOM: user-provided
   * 
   * @example
   * BUILTIN_MODEL
   */
  providerSource?: string;
  /**
   * @remarks
   * The service provider type. Valid values:
   * - BAILIAN
   * - DEEPSEEK
   * - AI_STACK
   * - VLLM
   * - AGENT_ONE
   * - DATAPHIN
   * 
   * @example
   * BAILIAN
   */
  providerType?: string;
  /**
   * @remarks
   * The name of the model service provider.
   * 
   * @example
   * bailian
   */
  serviceProvider?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      enabled: 'Enabled',
      id: 'Id',
      llmModels: 'LlmModels',
      providerSource: 'ProviderSource',
      providerType: 'ProviderType',
      serviceProvider: 'ServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      enabled: 'boolean',
      id: 'number',
      llmModels: { 'type': 'array', 'itemType': GetLlmModelProviderByNameResponseBodyDataLlmModels },
      providerSource: 'string',
      providerType: 'string',
      serviceProvider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.llmModels)) {
      $dara.Model.validateArray(this.llmModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLlmModelProviderByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The large language model service provider and available models.
   */
  data?: GetLlmModelProviderByNameResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLlmModelProviderByNameResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

