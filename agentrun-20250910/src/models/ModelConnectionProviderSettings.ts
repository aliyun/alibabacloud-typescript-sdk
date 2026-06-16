// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConnectionProviderSettings extends $dara.Model {
  /**
   * @remarks
   * The default API base URL for the model provider.
   * 
   * @example
   * https://api.openai.com/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The list of model names supported by this connection.
   */
  modelNames?: string[];
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      modelNames: 'modelNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      modelNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

