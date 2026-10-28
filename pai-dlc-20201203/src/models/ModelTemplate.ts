// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTemplate extends $dara.Model {
  /**
   * @remarks
   * The collection where the model template resides. Default value: QuickStartTemplate.
   * 
   * @example
   * QuickStartTemplate
   */
  collections?: string;
  /**
   * @remarks
   * The name of the model template.
   * 
   * @example
   * Qwen3-VL-32B-Instruct-PAI_template
   */
  modelName?: string;
  /**
   * @remarks
   * The provider of the model template. Default value: pai, which indicates that the model template is officially provided by PAI.
   * 
   * @example
   * pai
   */
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

