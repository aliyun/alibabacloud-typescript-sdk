// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelParameters } from "./ModelParameters";
import { PromptTemplateItem } from "./PromptTemplateItem";


export class ExperimentConfig extends $dara.Model {
  label?: string;
  modelName?: string;
  modelParameters?: ModelParameters;
  modelProvider?: string;
  name?: string;
  promptTemplate?: PromptTemplateItem[];
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      modelName: 'modelName',
      modelParameters: 'modelParameters',
      modelProvider: 'modelProvider',
      name: 'name',
      promptTemplate: 'promptTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      modelName: 'string',
      modelParameters: ModelParameters,
      modelProvider: 'string',
      name: 'string',
      promptTemplate: { 'type': 'array', 'itemType': PromptTemplateItem },
    };
  }

  validate() {
    if(this.modelParameters && typeof (this.modelParameters as any).validate === 'function') {
      (this.modelParameters as any).validate();
    }
    if(Array.isArray(this.promptTemplate)) {
      $dara.Model.validateArray(this.promptTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

