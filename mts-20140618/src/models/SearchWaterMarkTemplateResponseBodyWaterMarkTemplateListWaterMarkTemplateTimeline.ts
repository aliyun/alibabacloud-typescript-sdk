// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchWaterMarkTemplateResponseBodyWaterMarkTemplateListWaterMarkTemplateTimeline extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset.
   * 
   * The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the horizontal offset to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * ToEND
   */
  duration?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

