// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class UpdateMemoryStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Custom extraction strategies.
   */
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @remarks
   * Description.
   * 
   * @example
   * memoryStore test
   */
  description?: string;
  /**
   * @remarks
   * Extraction strategies. Supports "Episodic", "Summary", and "Fact".
   */
  extractionStrategies?: string[];
  /**
   * @remarks
   * Short-term memory retention time.
   * 
   * @example
   * 7
   */
  shortTermTtl?: number;
  static names(): { [key: string]: string } {
    return {
      customExtractionStrategies: 'customExtractionStrategies',
      description: 'description',
      extractionStrategies: 'extractionStrategies',
      shortTermTtl: 'shortTermTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionStrategies: { 'type': 'array', 'itemType': CustomExtractionStrategy },
      description: 'string',
      extractionStrategies: { 'type': 'array', 'itemType': 'string' },
      shortTermTtl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customExtractionStrategies)) {
      $dara.Model.validateArray(this.customExtractionStrategies);
    }
    if(Array.isArray(this.extractionStrategies)) {
      $dara.Model.validateArray(this.extractionStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

