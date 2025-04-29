// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationWritingRequest extends $dara.Model {
  apiKey?: string;
  customLimitation?: string;
  customPrompt?: string;
  inputExample?: string;
  /**
   * @example
   * qwen-max
   * qwen-plus
   */
  modelId?: string;
  outputExample?: string;
  sourceMaterial?: string;
  writingType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      customLimitation: 'customLimitation',
      customPrompt: 'customPrompt',
      inputExample: 'inputExample',
      modelId: 'modelId',
      outputExample: 'outputExample',
      sourceMaterial: 'sourceMaterial',
      writingType: 'writingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      customLimitation: 'string',
      customPrompt: 'string',
      inputExample: 'string',
      modelId: 'string',
      outputExample: 'string',
      sourceMaterial: 'string',
      writingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

