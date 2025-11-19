// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelFeatures } from "./ModelFeatures";
import { ModelParameterRule } from "./ModelParameterRule";
import { ModelProperties } from "./ModelProperties";


export class ModelInfoConfig extends $dara.Model {
  modelFeatures?: ModelFeatures;
  modelName?: string;
  modelParameterRules?: ModelParameterRule[];
  modelProperties?: ModelProperties;
  static names(): { [key: string]: string } {
    return {
      modelFeatures: 'modelFeatures',
      modelName: 'modelName',
      modelParameterRules: 'modelParameterRules',
      modelProperties: 'modelProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatures: ModelFeatures,
      modelName: 'string',
      modelParameterRules: { 'type': 'array', 'itemType': ModelParameterRule },
      modelProperties: ModelProperties,
    };
  }

  validate() {
    if(this.modelFeatures && typeof (this.modelFeatures as any).validate === 'function') {
      (this.modelFeatures as any).validate();
    }
    if(Array.isArray(this.modelParameterRules)) {
      $dara.Model.validateArray(this.modelParameterRules);
    }
    if(this.modelProperties && typeof (this.modelProperties as any).validate === 'function') {
      (this.modelProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

