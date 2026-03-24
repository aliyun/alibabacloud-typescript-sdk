// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class CreateMemoryStoreRequest extends $dara.Model {
  /**
   * @remarks
   * A list of custom extraction strategies.
   */
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @remarks
   * The description of the Memory Store.
   * 
   * @example
   * Test memory store for demonstration.
   */
  description?: string;
  /**
   * @remarks
   * The extraction strategies to use. Valid values: `Episodic`, `Summary`, and `Fact`.
   */
  extractionStrategies?: string[];
  /**
   * @remarks
   * The name of the Memory Store.
   * 
   * This parameter is required.
   * 
   * @example
   * test-memory-store
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The time-to-live (TTL) for short-term memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  shortTermTtl?: number;
  static names(): { [key: string]: string } {
    return {
      customExtractionStrategies: 'customExtractionStrategies',
      description: 'description',
      extractionStrategies: 'extractionStrategies',
      memoryStoreName: 'memoryStoreName',
      shortTermTtl: 'shortTermTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionStrategies: { 'type': 'array', 'itemType': CustomExtractionStrategy },
      description: 'string',
      extractionStrategies: { 'type': 'array', 'itemType': 'string' },
      memoryStoreName: 'string',
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

