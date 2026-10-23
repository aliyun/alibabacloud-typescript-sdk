// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitModelRequestModels extends $dara.Model {
  /**
   * @remarks
   * The model type. Valid values:
   * - text_embedding: Text embedding.
   * - rerank: Reranking.
   * - doc_split: Document splitting.
   * - completion: Large language model service.
   * - query_analyze: Query analysis. 
   * - doc_analyze: Document content parsing.
   * - img_analyze: Image content parsing.
   * 
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
   * @remarks
   * The service ID for the Search Open Platform.
   * 
   * @example
   * ops-text-embedding-**
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModelRequest extends $dara.Model {
  /**
   * @remarks
   * The API key for the AI Search Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * os-xfdddf*
   */
  apiKey?: string;
  /**
   * @remarks
   * The service registration address for the AI Search Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * ****.platform-cn-hangzhou-vpc.opensearch.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP protocol type.
   * 
   * This parameter is required.
   * 
   * @example
   * https
   */
  httpSchema?: string;
  /**
   * @remarks
   * Specifies the models to initialize. If this parameter is left empty, all built-in models are initialized.
   */
  models?: InitModelRequestModels[];
  /**
   * @remarks
   * The workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'api_key',
      host: 'host',
      httpSchema: 'http_schema',
      models: 'models',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      host: 'string',
      httpSchema: 'string',
      models: { 'type': 'array', 'itemType': InitModelRequestModels },
      workspace: 'string',
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

