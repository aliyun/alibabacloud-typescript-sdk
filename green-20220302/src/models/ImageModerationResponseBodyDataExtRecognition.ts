// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtRecognition extends $dara.Model {
  /**
   * @remarks
   * The category of image recognition.
   * 
   * @example
   * xx
   */
  classification?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      confidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

