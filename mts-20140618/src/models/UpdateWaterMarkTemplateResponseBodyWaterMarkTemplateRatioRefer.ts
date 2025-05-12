// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaterMarkTemplateResponseBodyWaterMarkTemplateRatioRefer extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the horizontal offset to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.51
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark relative to the output video image. Default value: **0**. The default value indicates no offset. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the vertical offset. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the vertical offset to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.28
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the height of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the height of the watermark image to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.33
   */
  height?: string;
  /**
   * @remarks
   * The width of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the width of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the width of the watermark image to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 0.36
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

