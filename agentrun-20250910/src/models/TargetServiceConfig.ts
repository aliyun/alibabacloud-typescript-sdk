// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetServiceConfig extends $dara.Model {
  modelId?: string;
  modelName?: string;
  modelNamePattern?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'modelId',
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      modelName: 'string',
      modelNamePattern: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

