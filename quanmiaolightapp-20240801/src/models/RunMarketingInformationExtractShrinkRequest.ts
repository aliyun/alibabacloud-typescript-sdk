// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationExtractShrinkRequest extends $dara.Model {
  customPrompt?: string;
  extractType?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  sourceMaterialsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      extractType: 'extractType',
      modelId: 'modelId',
      sourceMaterialsShrink: 'sourceMaterials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      extractType: 'string',
      modelId: 'string',
      sourceMaterialsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

