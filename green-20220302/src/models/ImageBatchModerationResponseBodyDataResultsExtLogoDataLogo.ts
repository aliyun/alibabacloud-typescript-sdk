// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResultsExtLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * Confidence score, from 0 to 100, rounded to two decimal places.
   * 
   * @example
   * 99.1
   */
  confidence?: number;
  /**
   * @remarks
   * Identify the category.
   * 
   * @example
   * logo_sns
   */
  label?: string;
  /**
   * @remarks
   * identifier  name.
   * 
   * @example
   * Alibaba Cloud
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

