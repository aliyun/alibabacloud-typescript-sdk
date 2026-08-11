// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelRequestContentRequestHeader extends $dara.Model {
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

export class ModifyModelRequestContentRequestParametersBuild extends $dara.Model {
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

export class ModifyModelRequestContentRequestParametersSearch extends $dara.Model {
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

export class ModifyModelRequestContentRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The parameters for the index building phase.
   */
  build?: ModifyModelRequestContentRequestParametersBuild;
  /**
   * @remarks
   * The parameters for the query phase.
   */
  search?: ModifyModelRequestContentRequestParametersSearch;
  static names(): { [key: string]: string } {
    return {
      build: 'build',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      build: ModifyModelRequestContentRequestParametersBuild,
      search: ModifyModelRequestContentRequestParametersSearch,
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

export class ModifyModelRequestContentRequestUrlParams extends $dara.Model {
  /**
   * @remarks
   * The parameters for the index building phase.
   * 
   * @example
   * key: value
   */
  build?: { [key: string]: any };
  /**
   * @remarks
   * The parameters for the query phase.
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

export class ModifyModelRequestContentRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP header to access the model service.
   */
  header?: ModifyModelRequestContentRequestHeader;
  /**
   * @remarks
   * Specifies parameters that are different for the build and search phases.
   */
  parameters?: ModifyModelRequestContentRequestParameters;
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
   * The parameters in the URL. Some model services require parameters to be passed in the URL.
   */
  urlParams?: ModifyModelRequestContentRequestUrlParams;
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
      header: ModifyModelRequestContentRequestHeader,
      parameters: ModifyModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: ModifyModelRequestContentRequestUrlParams,
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

export class ModifyModelRequestContentResponse extends $dara.Model {
  /**
   * @remarks
   * The JSONPath expression used to parse the embeddings from the result.
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

export class ModifyModelRequestContent extends $dara.Model {
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
   * The HTTP method to access the model service. Valid values are PUT and POST.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The model type.
   * 
   * - Text embedding: text_embedding
   * 
   * - Text sparse embedding: text_sparse_embedding
   * 
   * - Image embedding: image_embedding
   * 
   * - Image content parsing: image_analyze
   * 
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
   * @remarks
   * The model request body.
   */
  request?: ModifyModelRequestContentRequest;
  /**
   * @remarks
   * The JSONPath expression used to parse the result.
   */
  response?: ModifyModelRequestContentResponse;
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
      request: ModifyModelRequestContentRequest,
      response: ModifyModelRequestContentResponse,
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

export class ModifyModelRequest extends $dara.Model {
  /**
   * @remarks
   * The model details.
   */
  content?: ModifyModelRequestContent;
  /**
   * @remarks
   * The model status.
   * 
   * - ok: The model is active.
   * 
   * - forbidden: The model is unavailable.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to perform only a check. The default value is false.
   * 
   * @example
   * true
   */
  dryRun?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      status: 'status',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyModelRequestContent,
      status: 'string',
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

