// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConfig extends $dara.Model {
  bucket?: string;
  framework?: string;
  model?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  path?: string;
  prefix?: string;
  region?: string;
  reversion?: string;
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * modelscope
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      framework: 'framework',
      model: 'model',
      multiModelConfig: 'multiModelConfig',
      path: 'path',
      prefix: 'prefix',
      region: 'region',
      reversion: 'reversion',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      framework: 'string',
      model: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      path: 'string',
      prefix: 'string',
      region: 'string',
      reversion: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiModelConfig)) {
      $dara.Model.validateArray(this.multiModelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

