// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomExtractionStrategy extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Extraction prompt
   * 
   * @example
   * test
   */
  extractionPrompt?: string;
  /**
   * @remarks
   * Policy Name
   * 
   * @example
   * test1
   */
  strategyName?: string;
  /**
   * @remarks
   * Policy type. Supports "Episodic", "Summary", and "Fact".
   * 
   * @example
   * Fact
   */
  strategyType?: string;
  /**
   * @remarks
   * Update prompt
   * 
   * @example
   * test
   */
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

