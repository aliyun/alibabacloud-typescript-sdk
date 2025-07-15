// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAISubtitleRequest extends $dara.Model {
  /**
   * @remarks
   * The background color of the subtitles, which is an RGBA value.
   * 
   * @example
   * 0xFF0000
   */
  bgColor?: string;
  /**
   * @remarks
   * The background size of the subtitles. Valid values: [0,1].
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
   * The subtitle template that you copy. Set the value to the name of the subtitle template.
   * 
   * @example
   * sub01
   */
  copyFrom?: string;
  /**
   * @remarks
   * The custom description of the subtitle template. The description can be up to 128 characters in length and can contain letters, digits, and special characters.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The target language. Valid values:
   *  - en-US: English 
   * - zh-CN: Chinese 
   * - es-ES: Spanish 
   * - ru-RU: Russian
   * 
   * @example
   * zh-CN
   */
  dstLanguage?: string;
  /**
   * @remarks
   * The font color, which is an RGBA value.
   * 
   * @example
   * 0xFFFFFF
   */
  fontColor?: string;
  /**
   * @remarks
   * The font. Valid values:
   * - KaiTi (default)
   * - AlibabaPuHuiTi-Regular
   * - AlibabaPuHuiTi-Bold
   * - AlibabaPuHuiTi-Light
   * - NotoSansHans-Regular
   * - NotoSansHans-Bold
   * - NotoSansHans-Light
   * 
   * @example
   * KaiTi
   */
  fontName?: string;
  /**
   * @remarks
   * The font size. Valid values: [0,1].
   * 
   * This parameter is required.
   * 
   * @example
   * 0.037
   */
  fontSizeNormalized?: number;
  /**
   * @remarks
   * The preview height. Unit: pixels.
   * The following specifications of preview width × preview height are supported: 
   * - Landscape low definition 360p (640×360) 
   * - Portrait low definition 360p (360×640)
   * - Landscape standard definition 480p (854×480)
   * - Portrait standard definition 480p (480×854)
   * - Landscape high definition 720p (1280×720)
   * - Portrait high definition 720p (720×1280)
   * - Landscape ultra-high definition 1080p (1920×1080)
   * - Portrait ultra-high definition 1080p (1080×1920)
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
   * The position of the subtitles. The value is a pair of coordinates for which the origin of the x and y axes is the lower-left corner of the screen.
   * 
   * This parameter is required.
   */
  positionNormalized?: number[];
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
   *  - en-US: English 
   * - zh-CN: Chinese 
   * - ru-RU: Russian
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
   * The preview width. Unit: pixels.
   * 
   * @example
   * 1280
   */
  width?: string;
  /**
   * @remarks
   * The number of words displayed per line. Valid values: integers from 1 to 500.
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
      positionNormalized: 'PositionNormalized',
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
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
      showSourceLan: 'boolean',
      srcLanguage: 'string',
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

