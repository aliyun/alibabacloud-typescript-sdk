// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApigLLMModelInput extends $dara.Model {
  address?: string;
  apiKey?: string;
  desc?: string;
  models?: string[];
  name?: string;
  provider?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      apiKey: 'apiKey',
      desc: 'desc',
      models: 'models',
      name: 'name',
      provider: 'provider',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKey: 'string',
      desc: 'string',
      models: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      provider: 'string',
      type: 'string',
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

