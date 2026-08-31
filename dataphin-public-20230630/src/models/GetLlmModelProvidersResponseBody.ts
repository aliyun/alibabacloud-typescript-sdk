// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLlmModelProvidersResponseBodyDataLlmModels extends $dara.Model {
  /**
   * @example
   * 通义千问-Max
   */
  cnName?: string;
  /**
   * @example
   * 通用文本生成模型
   */
  description?: string;
  embeddingDimensions?: number[];
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * DASH_SCOPE
   */
  invokeType?: string;
  /**
   * @example
   * 1001
   */
  modelId?: number;
  modelTypes?: string[];
  /**
   * @example
   * qwen-max
   */
  name?: string;
  /**
   * @example
   * bailian
   */
  serviceProvider?: string;
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

export class GetLlmModelProvidersResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  llmModels?: GetLlmModelProvidersResponseBodyDataLlmModels[];
  /**
   * @example
   * BUILTIN_MODEL
   */
  providerSource?: string;
  /**
   * @example
   * BAILIAN
   */
  providerType?: string;
  /**
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
      llmModels: { 'type': 'array', 'itemType': GetLlmModelProvidersResponseBodyDataLlmModels },
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

export class GetLlmModelProvidersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetLlmModelProvidersResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetLlmModelProvidersResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

