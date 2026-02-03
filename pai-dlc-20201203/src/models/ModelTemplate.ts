// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTemplate extends $dara.Model {
  collections?: string;
  modelName?: string;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      modelName: 'ModelName',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      modelName: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

