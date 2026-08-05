// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * A custom description for the watermark.
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
   * The height of the watermark image, in pixels. This value is relative to `RefHeight` and will be scaled proportionally with the actual video resolution.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The name of the watermark template.
   * 
   * This parameter is required.
   * 
   * @example
   * livewatermark****
   */
  name?: string;
  /**
   * @remarks
   * The anchor point for the watermark\\"s position. Valid values:
   * 
   * - TopLeft
   * 
   * - TopRight
   * 
   * - BottomLeft
   * 
   * - BottomRight
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
   * The reference height of the video background, in pixels.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  refHeight?: number;
  /**
   * @remarks
   * The reference width of the video background, in pixels.
   * 
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  refWidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The opacity of the watermark. Value range: `0` (fully transparent) to `255` (fully opaque).
   * 
   * This parameter is required.
   * 
   * @example
   * 255
   */
  transparency?: number;
  /**
   * @remarks
   * The type of the watermark. Valid value:
   * 
   * - **0**: image.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The X-axis offset of the watermark, in pixels.
   * 
   * > Relative to RefWidth. If OffsetCorner is TopLeft, XOffset is the horizontal distance between the top‑left corner of the watermark and the top‑left corner of the background video. Positive X points to the right.
   * 
   * This parameter is required.
   * 
   * @example
   * 50.0
   */
  XOffset?: number;
  /**
   * @remarks
   * The Y-axis offset of the watermark, in pixels.
   * 
   * > Relative to RefHeight. If OffsetCorner is TopLeft, YOffset is the vertical distance between the top‑left corner of the watermark and the top‑left corner of the background video. Positive Y points downward.
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

