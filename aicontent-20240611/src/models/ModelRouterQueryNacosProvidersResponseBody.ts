// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryNacosProvidersResponseBodyDataModelsExtensions extends $dara.Model {
  /**
   * @remarks
   * The asynchronous call identifier.
   */
  async?: boolean;
  static names(): { [key: string]: string } {
    return {
      async: 'async',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryNacosProvidersResponseBodyDataModels extends $dara.Model {
  /**
   * @remarks
   * The extension configuration parameters of the model, stored as key-value pairs for additional model behavior configuration.
   */
  extensions?: ModelRouterQueryNacosProvidersResponseBodyDataModelsExtensions;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * ca90f359956e94367470c38676
   */
  identifier?: string;
  /**
   * @remarks
   * The input type and output type.
   * 
   * @example
   * text
   */
  inOut?: string;
  /**
   * @remarks
   * The input token limit.
   * 
   * @example
   * 32K
   */
  inputToken?: string;
  /**
   * @remarks
   * The output token limit.
   * 
   * @example
   * 8K
   */
  outputToken?: string;
  /**
   * @remarks
   * The feature type or capability category of the model.
   * 
   * @example
   * Chat
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extensions: 'extensions',
      identifier: 'identifier',
      inOut: 'inOut',
      inputToken: 'inputToken',
      outputToken: 'outputToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: ModelRouterQueryNacosProvidersResponseBodyDataModelsExtensions,
      identifier: 'string',
      inOut: 'string',
      inputToken: 'string',
      outputToken: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.extensions && typeof (this.extensions as any).validate === 'function') {
      (this.extensions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryNacosProvidersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The base URL.
   * 
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The list of models.
   */
  models?: ModelRouterQueryNacosProvidersResponseBodyDataModels[];
  /**
   * @remarks
   * The provider name.
   * 
   * @example
   * 通义千问
   */
  name?: string;
  /**
   * @remarks
   * The provider identifier.
   * 
   * @example
   * qwen
   */
  symbol?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      models: 'models',
      name: 'name',
      symbol: 'symbol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      models: { 'type': 'array', 'itemType': ModelRouterQueryNacosProvidersResponseBodyDataModels },
      name: 'string',
      symbol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryNacosProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * []
   */
  data?: ModelRouterQueryNacosProvidersResponseBodyData[];
  /**
   * @remarks
   * The fault message code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ModelRouterQueryNacosProvidersResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

