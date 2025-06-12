// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtFaceDataMustache extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the result of the beard. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 99.99
   */
  confidence?: number;
  /**
   * @remarks
   * The identification result of whether there is a beard.Valid values:
   * 
   * - Has:have a beard.
   * 
   * - None:No beard.
   * 
   * @example
   * Has
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

