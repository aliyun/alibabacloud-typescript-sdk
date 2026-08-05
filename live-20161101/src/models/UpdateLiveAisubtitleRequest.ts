// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAISubtitleRequest extends $dara.Model {
  /**
   * @remarks
   * The background color of the subtitle. The value is in RGBA format.
   * 
   * @example
   * 0xFF0000
   */
  bgColor?: string;
  /**
   * @remarks
   * The background size of the subtitle. Valid values: [0, 1].
   * 
   * @example
   * 0.09
   */
  bgWidthNormalized?: number;
  /**
   * @remarks
   * The font weight. Valid values: [0, 1].
   * 
   * @example
   * 0.05
   */
  borderWidthNormalized?: number;
  /**
   * @remarks
   * The custom description of the subtitle. The description can contain Chinese characters, letters, digits, and special characters, and cannot exceed 128 characters in length.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The target language for translation. Valid values:
   * - en-US: English
   * - zh-CN: Chinese
   * - es-ES: Spanish
   * - ru-RU: Russian.
   * 
   * @example
   * zh-CN
   */
  dstLanguage?: string;
  /**
   * @remarks
   * The font color. The value is in RGBA format.
   * 
   * @example
   * 0xFFFFFF
   */
  fontColor?: string;
  /**
   * @remarks
   * The font. Valid values:
   * - KaiTi: KaiTi (default)
   * - AlibabaPuHuiTi-Regular: Alibaba PuHuiTi Regular
   * - AlibabaPuHuiTi-Bold: Alibaba PuHuiTi Bold
   * - AlibabaPuHuiTi-Light: Alibaba PuHuiTi Light
   * - NotoSansHans-Regular: Noto Sans Hans Regular
   * - NotoSansHans-Bold: Noto Sans Hans Bold
   * - NotoSansHans-Light: Noto Sans Hans Light.
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The font size. Valid values: [0, 1].
   * 
   * @example
   * 0.037
   */
  fontSizeNormalized?: number;
  /**
   * @remarks
   * The height of the preview screen. Unit: px.
   * 
   * The width × height of the preview screen supports only the following specifications:
   * - Landscape low definition 360P: 640×360
   * - Portrait low definition 360P: 360×640
   * - Landscape standard definition 480P: 854×480
   * - Portrait standard definition 480P: 480×854
   * - Landscape high definition 720P: 1280×720
   * - Portrait high definition 720P: 720×1280
   * - Landscape ultra-high definition 1080P: 1920×1080
   * - Portrait ultra-high definition 1080P: 1080×1920.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The number of lines to display.
   * 
   * @example
   * 2
   */
  maxLines?: number;
  ownerId?: number;
  /**
   * @remarks
   * The position of the subtitle, specified as x and y coordinates with the bottom-left corner of the screen as the origin.
   * 
   * @example
   * [0.32,0.27]
   */
  positionNormalized?: number[];
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
   * Specifies whether to display the source language. Default value: false.
   * 
   * @example
   * true
   */
  showSourceLan?: boolean;
  /**
   * @remarks
   * The source language. Valid values:
   * - en-US: English
   * - zh-CN: Chinese
   * - ru-RU: Russian.
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
   * The name of the subtitle template. The name can contain only digits, letters, and hyphens (-). The name cannot start with a hyphen.
   * 
   * @example
   * live AI subtitle template
   */
  subtitleName?: string;
  /**
   * @remarks
   * The width of the preview screen. Unit: px.
   * 
   * @example
   * 1280
   */
  width?: string;
  /**
   * @remarks
   * The number of characters per line. Valid values: integers in the range of [1, 500].
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

