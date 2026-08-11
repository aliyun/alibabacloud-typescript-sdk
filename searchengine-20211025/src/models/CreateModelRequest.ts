// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelRequestContentRequestHeader extends $dara.Model {
  /**
   * @remarks
   * The authentication information. Format: Bearer access_token
   * 
   * @example
   * Bearer OS-v0********6vvs
   */
  authorization?: string;
  /**
   * @remarks
   * The content type of the HTTP request.
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

export class CreateModelRequestContentRequestParametersBuild extends $dara.Model {
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

export class CreateModelRequestContentRequestParametersSearch extends $dara.Model {
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

export class CreateModelRequestContentRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters for the index building phase.
   */
  build?: CreateModelRequestContentRequestParametersBuild;
  /**
   * @remarks
   * The parameters for the query phase.
   */
  search?: CreateModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: CreateModelRequestContentRequestParametersBuild,
      search: CreateModelRequestContentRequestParametersSearch,
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

export class CreateModelRequestContentRequestUrlParams extends $dara.Model {
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
   * The parameters passed during a query.
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

export class CreateModelRequestContentRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP header for accessing the model service.
   */
  header?: CreateModelRequestContentRequestHeader;
  /**
   * @remarks
   * If the parameters in the request body are different for the build and search phases, define them in this parameter.
   */
  parameters?: CreateModelRequestContentRequestParameters;
  /**
   * @remarks
   * The template string for the request body.
   * 
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  /**
   * @remarks
   * The parameters in the URL. Some model services require that parameters are passed in the URL.
   */
  urlParams?: CreateModelRequestContentRequestUrlParams;
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
      header: CreateModelRequestContentRequestHeader,
      parameters: CreateModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: CreateModelRequestContentRequestUrlParams,
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

export class CreateModelRequestContentResponse extends $dara.Model {
  /**
   * @remarks
   * The JSONPath expression to extract embeddings from the response.
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

export class CreateModelRequestContent extends $dara.Model {
  /**
   * @remarks
   * The dimension of the model. This parameter is required if \\`modelType\\` is \\`text_embedding\\` or \\`image_embedding\\`.
   * 
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @remarks
   * The HTTP method to access the model service. Supported methods: PUT and POST.
   * 
   * @example
   * POST
   */
  method?: string;
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
   * The model request body.
   */
  request?: CreateModelRequestContentRequest;
  /**
   * @remarks
   * The configuration for parsing the response. Use JSONPath format.
   */
  response?: CreateModelRequestContentResponse;
  /**
   * @remarks
   * The endpoint of the model service.
   * 
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      method: 'method',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      method: 'string',
      modelType: 'string',
      request: CreateModelRequestContentRequest,
      response: CreateModelRequestContentResponse,
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

export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The model details.
   */
  content?: CreateModelRequestContent;
  /**
   * @remarks
   * The model name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. The default value is false.
   * 
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: CreateModelRequestContent,
      name: 'string',
      dryRun: 'string',
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

