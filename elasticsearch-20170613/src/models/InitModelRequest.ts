// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitModelRequestModels extends $dara.Model {
  /**
   * @remarks
   * Model category  
   * - a. Text embedding: text_embedding  
   * - b. Reranking: rerank  
   * - c. Document segmentation: doc_split  
   * - d. Large Language Model (LLM) service: completion  
   * - e. Query analysis: query_analyze  
   * - f. Document content parsing: doc_analyze  
   * - g. Image content parsing: img_analyze
   * 
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
   * @remarks
   * Service ID of the Search Open Platform
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
   * API key for the AI Search Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * os-xfdddf*
   */
  apiKey?: string;
  /**
   * @remarks
   * Service registration endpoint of the AI Search Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * ****.platform-cn-hangzhou-vpc.opensearch.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * HTTP protocol type
   * 
   * This parameter is required.
   * 
   * @example
   * https
   */
  httpSchema?: string;
  /**
   * @remarks
   * Specify the models to initialize. If empty, all built-in models will be initialized.
   */
  models?: InitModelRequestModels[];
  /**
   * @remarks
   * Workspace.
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

