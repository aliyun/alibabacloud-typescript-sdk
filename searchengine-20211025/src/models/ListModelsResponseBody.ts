// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsResponseBodyResultContentRequestHeader extends $dara.Model {
  /**
   * @remarks
   * The authentication information. Format: Bearer access_token.
   * 
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @remarks
   * The HTTP request content type.
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

export class ListModelsResponseBodyResultContentRequestParametersBuild extends $dara.Model {
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

export class ListModelsResponseBodyResultContentRequestParametersSearch extends $dara.Model {
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

export class ListModelsResponseBodyResultContentRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters for the index building phase.
   */
  build?: ListModelsResponseBodyResultContentRequestParametersBuild;
  /**
   * @remarks
   * The parameters for the query phase.
   */
  search?: ListModelsResponseBodyResultContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ListModelsResponseBodyResultContentRequestParametersBuild,
      search: ListModelsResponseBodyResultContentRequestParametersSearch,
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

export class ListModelsResponseBodyResultContentRequestUrlParams extends $dara.Model {
  /**
   * @remarks
   * The parameters passed during index building.
   * 
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @remarks
   * The parameters passed during queries.
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

export class ListModelsResponseBodyResultContentRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP header for accessing the model service.
   */
  header?: ListModelsResponseBodyResultContentRequestHeader;
  /**
   * @remarks
   * The parameters that need to be differentiated between the build and search phases in the body. Define them in this parameter.
   */
  parameters?: ListModelsResponseBodyResultContentRequestParameters;
  /**
   * @remarks
   * The template string of the request body.
   * 
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  /**
   * @remarks
   * The parameters in the URL. Some model services require parameters to be passed through the URL.
   */
  urlParams?: ListModelsResponseBodyResultContentRequestUrlParams;
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
      header: ListModelsResponseBodyResultContentRequestHeader,
      parameters: ListModelsResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: ListModelsResponseBodyResultContentRequestUrlParams,
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

export class ListModelsResponseBodyResultContentResponse extends $dara.Model {
  /**
   * @remarks
   * Specifies how to parse the result information, described in JSON path format.
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

export class ListModelsResponseBodyResultContent extends $dara.Model {
  /**
   * @remarks
   * The HTTP method for accessing the model service. PUT and POST are supported.
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
   * - b. Text sparse embedding: text_sparse_embedding
   * - c. Image embedding: image_embedding
   * - d. Image content analysis: image_analyze.
   * 
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
   * @remarks
   * The request configuration information.
   */
  request?: ListModelsResponseBodyResultContentRequest;
  /**
   * @remarks
   * Specifies how to parse the result information, described in JSON path format.
   */
  response?: ListModelsResponseBodyResultContentResponse;
  /**
   * @remarks
   * The access URL of the model service.
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
      request: ListModelsResponseBodyResultContentRequest,
      response: ListModelsResponseBodyResultContentResponse,
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

export class ListModelsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content information of the model.
   */
  content?: ListModelsResponseBodyResultContent;
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
   * The dimension of the model.
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
   * The model status. Valid values:
   *  * ok: The model is available.
   *  * forbidden: The model is unavailable.
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
   * - b. Text sparse embedding: text_sparse_embedding
   * - c. Image embedding: image_embedding
   * - d. Image content analysis: image_analyze.
   * 
   * @example
   * text_embedding
   */
  type?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @remarks
   * The access URL of the model service.
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
      content: ListModelsResponseBodyResultContent,
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

export class ListModelsResponseBody extends $dara.Model {
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
   * The model list. For more information, see Model.
   */
  result?: ListModelsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 14
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListModelsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

