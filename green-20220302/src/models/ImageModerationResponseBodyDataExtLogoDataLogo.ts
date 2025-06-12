// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places. Some labels do not have scores of confidence levels.
   * 
   * @example
   * 99.01
   */
  confidence?: number;
  /**
   * @remarks
   * Logo category.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

