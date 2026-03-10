// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomExtractionStrategy extends $dara.Model {
  description?: string;
  extractionPrompt?: string;
  strategyName?: string;
  strategyType?: string;
  updatePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      extractionPrompt: 'extractionPrompt',
      strategyName: 'strategyName',
      strategyType: 'strategyType',
      updatePrompt: 'updatePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extractionPrompt: 'string',
      strategyName: 'string',
      strategyType: 'string',
      updatePrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

