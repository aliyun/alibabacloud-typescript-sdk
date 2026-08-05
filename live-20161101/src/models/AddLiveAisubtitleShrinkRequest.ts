// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAISubtitleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The background color of the subtitle. Specify the value in RGBA format.
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
   * The subtitle template to copy from. Set this parameter to the value of SubtitleName.
   * 
   * @example
   * sub01
   */
  copyFrom?: string;
  /**
   * @remarks
   * The custom description of the subtitle. The description can contain Chinese characters, letters, digits, and special characters, and can be up to 128 characters in length.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The target language for translation. Valid values:
   * - English: en-US
   * - Chinese: zh-CN
   * - Spanish: es-ES
   * - Russian: ru-RU.
   * 
   * @example
   * zh-CN
   */
  dstLanguage?: string;
  /**
   * @remarks
   * The font color. Specify the value in RGBA format.
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
   * - NotoSansHans-Regular: Noto Sans SC Regular
   * - NotoSansHans-Bold: Noto Sans SC Bold
   * - NotoSansHans-Light: Noto Sans SC Light.
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The font size. Valid values: [0, 1].
   * 
   * This parameter is required.
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
   * - Landscape low definition 360P: 640 × 360 
   * - Portrait low definition 360P: 360 × 640
   * - Landscape standard definition 480P: 854 × 480
   * - Portrait standard definition 480P: 480 × 854
   * - Landscape high definition 720P: 1280 × 720
   * - Portrait high definition 720P: 720 × 1280
   * - Landscape ultra-high definition 1080P: 1920 × 1080
   * - Portrait ultra-high definition 1080P: 1080 × 1920.
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
   * The position of the subtitle. The value is the x,y coordinates with the bottom-left corner of the screen as the origin.
   * 
   * > The x and y values must be normalized. The actual values are multiplied by the video height. For example, if the video height is 720p and PositionNormalized is set to [0.1, 0.5], the actual position of the subtitle is x = 72 and y = 360.
   * 
   * This parameter is required.
   * 
   * @example
   * [0.32,0.27]
   */
  positionNormalizedShrink?: string;
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
   * - English: en-US
   * - Chinese: zh-CN
   * - Russian: ru-RU.
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  srcLanguage?: string;
  /**
   * @remarks
   * The name of the subtitle template. The name can contain only digits, letters, and hyphens (-). The name cannot start with a hyphen.
   * 
   * This parameter is required.
   * 
   * @example
   * sub01
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
   * This parameter is required.
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
      copyFrom: 'CopyFrom',
      description: 'Description',
      dstLanguage: 'DstLanguage',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSizeNormalized: 'FontSizeNormalized',
      height: 'Height',
      maxLines: 'MaxLines',
      ownerId: 'OwnerId',
      positionNormalizedShrink: 'PositionNormalized',
      regionId: 'RegionId',
      showSourceLan: 'ShowSourceLan',
      srcLanguage: 'SrcLanguage',
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
      copyFrom: 'string',
      description: 'string',
      dstLanguage: 'string',
      fontColor: 'string',
      fontName: 'string',
      fontSizeNormalized: 'number',
      height: 'string',
      maxLines: 'number',
      ownerId: 'number',
      positionNormalizedShrink: 'string',
      regionId: 'string',
      showSourceLan: 'boolean',
      srcLanguage: 'string',
      subtitleName: 'string',
      width: 'string',
      wordPerLine: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

