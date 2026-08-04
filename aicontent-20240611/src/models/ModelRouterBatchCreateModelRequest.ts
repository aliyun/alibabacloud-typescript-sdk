// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateModelItemDTO } from "./BatchCreateModelItemDto";


export class ModelRouterBatchCreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The API key. This parameter is required. The key is shared by the same provider and reused by all models.
   * 
   * This parameter is required.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The base URL. This parameter is optional. Specify this parameter when you use a custom gateway address. If you do not specify this parameter, the default address of the provider is used.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The list of models to create in batches. This parameter is required. At least one item must be specified.
   * 
   * This parameter is required.
   */
  models?: BatchCreateModelItemDTO[];
  /**
   * @remarks
   * The provider symbol. This parameter is required. All models items share the same provider.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen
   */
  symbol?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      baseUrl: 'baseUrl',
      models: 'models',
      symbol: 'symbol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      models: { 'type': 'array', 'itemType': BatchCreateModelItemDTO },
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

