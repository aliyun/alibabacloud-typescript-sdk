// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelTemplate } from "./ModelTemplate";


export class ModelConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the output model. The output model of a joint training job is registered in the Models section of AI Asset Management under this name.
   * 
   * @example
   * model_a
   */
  modelName?: string;
  /**
   * @remarks
   * The model template configuration. This configuration is required if you want to deploy the output model to Elastic Algorithm Service (EAS) with one click.
   */
  modelTemplate?: ModelTemplate;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      modelTemplate: 'ModelTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelTemplate: ModelTemplate,
    };
  }

  validate() {
    if(this.modelTemplate && typeof (this.modelTemplate as any).validate === 'function') {
      (this.modelTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

