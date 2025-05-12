// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile } from "./ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile";


export class ListJobResponseBodyJobListJobOutputWaterMarkListWaterMark extends $dara.Model {
  /**
   * @remarks
   * The horizontal offset of the watermark image relative to the output video. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. Default value: 0. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the horizontal offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal number indicates the ratio of the horizontal offset to the width in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 100
   */
  dx?: string;
  /**
   * @remarks
   * The vertical offset of the watermark image relative to the output video. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the vertical offset.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the vertical offset to the height in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 100
   */
  dy?: string;
  /**
   * @remarks
   * The height of the watermark. If this parameter is specified in the request, the corresponding parameter in the specified watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark height.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the watermark height to the height in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 50
   */
  height?: string;
  /**
   * @remarks
   * The watermark input file.
   */
  inputFile?: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile;
  /**
   * @remarks
   * The position of the watermark.
   * 
   * *   **TopRight**
   * *   **TopLeft**
   * *   **BottomRight**
   * *   **BottomLeft**
   * 
   * @example
   * TopRight
   */
  referPos?: string;
  /**
   * @remarks
   * The type of the watermark. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html). Valid values:
   * 
   * *   **Image**
   * *   **Text**
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  waterMarkTemplateId?: string;
  /**
   * @remarks
   * The width of the watermark image. If this parameter is specified in the request, the corresponding parameter in the watermark template is overwritten. The value can be an integer or a decimal number.
   * 
   * *   An integer indicates the pixel value of the watermark width.
   * 
   *     *   Valid values: [8,4096].
   *     *   Unit: pixel.
   * 
   * *   A decimal indicates the ratio of the watermark width to the width in the output video resolution.
   * 
   *     *   Valid values: (0,1).
   *     *   The decimal number can be accurate to four decimal places, such as 0.9999. Excess digits are automatically deleted.
   * 
   * @example
   * 50
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      inputFile: 'InputFile',
      referPos: 'ReferPos',
      type: 'Type',
      waterMarkTemplateId: 'WaterMarkTemplateId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dx: 'string',
      dy: 'string',
      height: 'string',
      inputFile: ListJobResponseBodyJobListJobOutputWaterMarkListWaterMarkInputFile,
      referPos: 'string',
      type: 'string',
      waterMarkTemplateId: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.inputFile && typeof (this.inputFile as any).validate === 'function') {
      (this.inputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

