// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProviderSettings extends $dara.Model {
  apiKey?: string;
  baseUrl?: string;
  modelNames?: string[];
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      baseUrl: 'baseUrl',
      modelNames: 'modelNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
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

