// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationExtractRequest extends $dara.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterials?: string[];
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterials: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterials: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceMaterials)) {
      $dara.Model.validateArray(this.sourceMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

