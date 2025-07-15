// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAISubtitleRequest extends $dara.Model {
  /**
   * @remarks
   * The background color of the subtitles. Color format: RGBA.
   * 
   * @example
   * 0xFF0000
   */
  bgColor?: string;
  /**
   * @remarks
   * The size of the background box. Valid values: [0,1].
   * 
   * @example
   * 0.09
   */
  bgWidthNormalized?: number;
  /**
   * @remarks
   * The font weight. Valid values: [0,1].
   * 
   * @example
   * 0.05
   */
  borderWidthNormalized?: number;
  /**
   * @remarks
   * The description of the subtitle template. The description can be up to 128 characters in length and can contain letters, digits, and special characters.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The target language. Valid values:
   * 
   * *   en-US: English
   * *   zh-CN: Chinese
   * *   es-ES: Spanish
   * *   ru-RU: Russian
   * 
   * @example
   * zh-CN
   */
  dstLanguage?: string;
  /**
   * @remarks
   * The font color. Color format: RGBA.
   * 
   * @example
   * 0xFFFFFF
   */
  fontColor?: string;
  /**
   * @remarks
   * The font. Valid values:
   * 
   * *   KaiTi (default)
   * *   AlibabaPuHuiTi-Regular
   * *   AlibabaPuHuiTi-Bold
   * *   AlibabaPuHuiTi-Light
   * *   NotoSansHans-Regular
   * *   NotoSansHans-Bold
   * *   NotoSansHans-Light
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The font size. Valid values: [0,1].
   * 
   * @example
   * 0.037
   */
  fontSizeNormalized?: number;
  /**
   * @remarks
   * The height of the preview. Unit: pixels.
   * 
   * The following preview specifications (width x height) are supported:
   * 
   * *   360p (640 x 360)
   * *   360p (360 x 640)
   * *   480p (854 x 480)
   * *   480p (480 x 854)
   * *   720p (1280 x 720)
   * *   720p (720 x 1280)
   * *   1080p (1920 x 1080)
   * *   1080p (1080 x 1920)
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The number of displayed lines.
   * 
   * @example
   * 2
   */
  maxLines?: number;
  ownerId?: number;
  /**
   * @remarks
   * The position of the subtitles relative to the lower-left corner of the screen. The value is a pair of coordinates.
   */
  positionNormalized?: number[];
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to display the source language. Valid values: true and false. Default value: false.
   * 
   * @example
   * true
   */
  showSourceLan?: boolean;
  /**
   * @remarks
   * The source language. Valid values:
   * 
   * *   en-US: English
   * *   zh-CN: Chinese
   * *   ru-RU: Russian
   * 
   * @example
   * zh-CN
   */
  srcLanguage?: string;
  /**
   * @remarks
   * The ID of the subtitle template.
   * 
   * This parameter is required.
   * 
   * @example
   * 597991f3-6ef9-4100-9238-82951de1****
   */
  subtitleId?: string;
  /**
   * @remarks
   * The name of the subtitle template. The name can contain digits, letters, and hyphens (-) but cannot start with a hyphen (-).
   * 
   * @example
   * live AI subtitle template
   */
  subtitleName?: string;
  /**
   * @remarks
   * The width of the preview. Unit: pixels.
   * 
   * @example
   * 1280
   */
  width?: string;
  /**
   * @remarks
   * The number of characters per line. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  wordPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      bgColor: 'BgColor',
      bgWidthNormalized: 'BgWidthNormalized',
      borderWidthNormalized: 'BorderWidthNormalized',
      description: 'Description',
      dstLanguage: 'DstLanguage',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSizeNormalized: 'FontSizeNormalized',
      height: 'Height',
      maxLines: 'MaxLines',
      ownerId: 'OwnerId',
      positionNormalized: 'PositionNormalized',
      regionId: 'RegionId',
      showSourceLan: 'ShowSourceLan',
      srcLanguage: 'SrcLanguage',
      subtitleId: 'SubtitleId',
      subtitleName: 'SubtitleName',
      width: 'Width',
      wordPerLine: 'WordPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgColor: 'string',
      bgWidthNormalized: 'number',
      borderWidthNormalized: 'number',
      description: 'string',
      dstLanguage: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSizeNormalized: 'number',
      height: 'string',
      maxLines: 'number',
      ownerId: 'number',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      showSourceLan: 'boolean',
      srcLanguage: 'string',
      subtitleId: 'string',
      subtitleName: 'string',
      width: 'string',
      wordPerLine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.positionNormalized)) {
      $dara.Model.validateArray(this.positionNormalized);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

