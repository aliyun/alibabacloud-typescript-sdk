// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the watermark.
   * 
   * @example
   * my watermark
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The height of the watermark. Unit: pixels. The height of the watermark is scaled in proportion to the height of the background video.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The name of the watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * livewatermark****
   */
  name?: string;
  /**
   * @remarks
   * The location of the watermark. Valid values:
   * 
   * *   TopLeft: the upper-left corner.
   * *   TopRight: the upper-right corner.
   * *   BottomLeft: the lower-left corner.
   * *   BottomRight: the lower-right corner.
   * 
   * This parameter is required.
   * 
   * @example
   * TopRight
   */
  offsetCorner?: string;
  ownerId?: number;
  /**
   * @remarks
   * The URL of the watermark image.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com
   */
  pictureUrl?: string;
  /**
   * @remarks
   * The height of the background video. Unit: pixels.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  refHeight?: number;
  /**
   * @remarks
   * The width of the background video. Unit: pixels.
   * 
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  refWidth?: number;
  regionId?: string;
  /**
   * @remarks
   * The transparency of the watermark. A smaller value indicates a more transparent watermark. Valid values: 0 to 255.
   * 
   * This parameter is required.
   * 
   * @example
   * 255
   */
  transparency?: number;
  /**
   * @remarks
   * The type of the watermark. Valid values:
   * 
   * *   **0**: image.
   * *   **1**: text. Only image watermarks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The offset of the watermark along the x-axis. Unit: pixels.
   * 
   * >  In this case, the value of the RefWidth parameter is used as the reference. If the OffsetCorner parameter is set to TopLeft, the value of the XOffset parameter indicates the x-axis offset of the upper-left corner of the watermark relative to that of the background video. The directions from the coordinate axes to the center of the background video are positive. In other words, the x-axis is positive toward the right.
   * 
   * This parameter is required.
   * 
   * @example
   * 50.0
   */
  XOffset?: number;
  /**
   * @remarks
   * The offset of the watermark along the y-axis. Unit: pixels.
   * 
   * >  In this case, the value of the RefHeight parameter is used as the reference. If the OffsetCorner parameter is set to TopLeft, the value of the YOffset parameter indicates the y-axis offset of the upper-left corner of the watermark relative to that of the background video. The directions from the coordinate axes to the center of the background video are positive. In other words, the y-axis is positive downward.
   * 
   * This parameter is required.
   * 
   * @example
   * 100.0
   */
  YOffset?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      domain: 'Domain',
      height: 'Height',
      name: 'Name',
      offsetCorner: 'OffsetCorner',
      ownerId: 'OwnerId',
      pictureUrl: 'PictureUrl',
      refHeight: 'RefHeight',
      refWidth: 'RefWidth',
      regionId: 'RegionId',
      transparency: 'Transparency',
      type: 'Type',
      XOffset: 'XOffset',
      YOffset: 'YOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      domain: 'string',
      height: 'number',
      name: 'string',
      offsetCorner: 'string',
      ownerId: 'number',
      pictureUrl: 'string',
      refHeight: 'number',
      refWidth: 'number',
      regionId: 'string',
      transparency: 'number',
      type: 'number',
      XOffset: 'number',
      YOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

