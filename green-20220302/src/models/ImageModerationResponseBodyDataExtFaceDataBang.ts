// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtFaceDataBang extends $dara.Model {
  /**
   * @remarks
   * The confidence level of the bang recognition result. Valid values: 0 to 100. A higher value indicates a more credible result.
   * 
   * @example
   * 81.88
   */
  confidence?: number;
  /**
   * @remarks
   * Indicates whether the recognition result of bangs is available.
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

