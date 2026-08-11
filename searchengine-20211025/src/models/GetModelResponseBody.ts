// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelResponseBodyResultContentRequestHeader extends $dara.Model {
  /**
   * @remarks
   * Authentication information. The format is Bearer access_token.
   * 
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @remarks
   * The HTTP request\\"s content type.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      contentType: 'Content-Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParametersBuild extends $dara.Model {
  /**
   * @remarks
   * The input type.
   * 
   * @example
   * query
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParametersSearch extends $dara.Model {
  /**
   * @remarks
   * The input type.
   * 
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestParameters extends $dara.Model {
  /**
   * @remarks
   * Parameters for the index building phase.
   */
  build?: GetModelResponseBodyResultContentRequestParametersBuild;
  /**
   * @remarks
   * Parameters for the query phase.
   */
  search?: GetModelResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: GetModelResponseBodyResultContentRequestParametersBuild,
      search: GetModelResponseBodyResultContentRequestParametersSearch,
    };
  }

  validate() {
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.search && typeof (this.search as any).validate === 'function') {
      (this.search as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequestUrlParams extends $dara.Model {
  /**
   * @remarks
   * Parameters passed during index building.
   * 
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @remarks
   * Parameters passed during a query.
   * 
   * @example
   * key: value
   */
  search?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      search: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.build) {
      $dara.Model.validateMap(this.build);
    }
    if(this.search) {
      $dara.Model.validateMap(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP request header.
   */
  header?: GetModelResponseBodyResultContentRequestHeader;
  /**
   * @remarks
   * Define parameters here if they differ between the build and search phases.
   */
  parameters?: GetModelResponseBodyResultContentRequestParameters;
  /**
   * @remarks
   * The request body\\"s template string.
   * 
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  /**
   * @remarks
   * URL parameters. Some model services require you to pass parameters in the URL.
   */
  urlParams?: GetModelResponseBodyResultContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: GetModelResponseBodyResultContentRequestHeader,
      parameters: GetModelResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: GetModelResponseBodyResultContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContentResponse extends $dara.Model {
  /**
   * @remarks
   * The method to parse the result. This is described in JSONPath format.
   * 
   * @example
   * $.result.embeddings[*].embedding
   */
  embeddings?: string;
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResultContent extends $dara.Model {
  /**
   * @remarks
   * The HTTP method to access the model service. PUT and POST are supported.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * test
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * - a. Text embedding: text_embedding
   * 
   * - b. Text sparse embedding: text_sparse_embedding
   * 
   * - c. Image embedding: image_embedding
   * 
   * - d. Image content analysis: image_analyze
   * 
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
   * @remarks
   * The request configuration.
   */
  request?: GetModelResponseBodyResultContentRequest;
  /**
   * @remarks
   * The method to parse the result. This is described in JSONPath format.
   */
  response?: GetModelResponseBodyResultContentResponse;
  /**
   * @remarks
   * The model service endpoint.
   * 
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      modelName: 'modelName',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      modelName: 'string',
      modelType: 'string',
      request: GetModelResponseBodyResultContentRequest,
      response: GetModelResponseBodyResultContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The model configuration.
   */
  content?: GetModelResponseBodyResultContent;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * The model dimension.
   * 
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The model status.
   * 
   * - ok: Normal
   * 
   * - error: Abnormal
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The model type.
   * 
   * - a. Text embedding: text_embedding
   * 
   * - b. Text sparse embedding: text_sparse_embedding
   * 
   * - c. Image embedding: image_embedding
   * 
   * - d. Image content analysis: image_analyze
   * 
   * @example
   * text_embedding
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @remarks
   * The model\\"s access URL.
   * 
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dimension: 'dimension',
      name: 'name',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetModelResponseBodyResultContent,
      createTime: 'string',
      dimension: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 38b079f1-7846-4226-8c90-3e2644b5c52b
   */
  requestId?: string;
  /**
   * @remarks
   * The model configuration.
   */
  result?: GetModelResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetModelResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

