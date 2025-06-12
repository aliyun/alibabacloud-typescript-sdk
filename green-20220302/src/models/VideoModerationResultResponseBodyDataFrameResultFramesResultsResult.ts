// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 50
   */
  confidence?: number;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * The label returned after a frame is moderated. Multiple risk labels and the corresponding scores of confidence levels may be returned for a frame.
   * 
   * @example
   * bloody
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

