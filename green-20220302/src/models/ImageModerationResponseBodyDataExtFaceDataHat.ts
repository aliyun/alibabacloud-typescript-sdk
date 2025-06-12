// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtFaceDataHat extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of wearing the hat. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 88.88
   */
  confidence?: number;
  /**
   * @remarks
   * The recognition result of whether to wear the hat. Valid values:
   * 
   * - Wear: Wear a hat.
   * 
   * - None: No hat.
   * 
   * @example
   * Wear
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

