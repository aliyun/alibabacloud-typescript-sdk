// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryNacosProvidersResponseBodyDataModelsExtensions extends $dara.Model {
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
  extensions?: ModelRouterQueryNacosProvidersResponseBodyDataModelsExtensions;
  identifier?: string;
  /**
   * @example
   * text
   */
  inOut?: string;
  inputToken?: string;
  outputToken?: string;
  /**
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
  baseUrl?: string;
  models?: ModelRouterQueryNacosProvidersResponseBodyDataModels[];
  name?: string;
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
   * @example
   * []
   */
  data?: ModelRouterQueryNacosProvidersResponseBodyData[];
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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

