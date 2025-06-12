// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, retained to two decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * No risk detected
   */
  description?: string;
  /**
   * @remarks
   * The labels returned after image content detection. A single image may be associated with multiple labels and corresponding scores.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

