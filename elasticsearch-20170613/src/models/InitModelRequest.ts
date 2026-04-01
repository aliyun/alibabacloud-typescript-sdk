// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitModelRequestModels extends $dara.Model {
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * os-xfdddf*
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****.platform-cn-hangzhou-vpc.opensearch.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https
   */
  httpSchema?: string;
  models?: InitModelRequestModels[];
  /**
   * @remarks
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

