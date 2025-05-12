// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList } from "./SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList";


export class SearchWaterMarkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The width of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the width of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the width of the watermark image to the width of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The values of the Height, Width, Dx, and Dy parameters relative to the reference edges. If the values of the Height, Width, Dx, and Dy parameters are decimals between 0 and 1, the values are calculated by referring to the following edges in sequence:
   * 
   * *   **Width**: the width edge.
   * *   **Height**: the height edge.
   * *   **Long**: the long edge.
   * *   **Short**: the short edge.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC029D04-8F47-57FF-A759-23383C15617D
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the watermark. Valid values:
   * 
   * *   Image: an image watermark.
   * *   Text: a text watermark.
   * 
   * >  Only watermarks of the **Image** types are supported.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The height of the watermark image in the output video. The value can be an integer or a decimal.
   * 
   * *   **Integer**: the height of the watermark image. This indicates the absolute position. Unit: pixel.
   * *   **Decimal**: the ratio of the height of the watermark image to the height of the output video. The ratio varies based on the size of the video. Four decimal places are supported, such as 0.9999. More decimal places are discarded.
   */
  waterMarkTemplateList?: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      waterMarkTemplateList: 'WaterMarkTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      waterMarkTemplateList: SearchWaterMarkTemplateResponseBodyWaterMarkTemplateList,
    };
  }

  validate() {
    if(this.waterMarkTemplateList && typeof (this.waterMarkTemplateList as any).validate === 'function') {
      (this.waterMarkTemplateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

