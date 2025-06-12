// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo extends $dara.Model {
  /**
   * @remarks
   * Confidence score, ranging from 0 to 100, with two decimal places.
   * 
   * @example
   * 99.10
   */
  confidence?: number;
  /**
   * @remarks
   * label
   * 
   * @example
   * pt_logotoSocialNetwork
   */
  label?: string;
  /**
   * @remarks
   * Logo name.
   * 
   * @example
   * **logo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      label: 'label',
      name: 'name',
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

