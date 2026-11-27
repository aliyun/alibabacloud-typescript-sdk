// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordTemplatesResponseBodyTemplatesBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the background image. Valid values:
   * 
   * - **0** (None): Not displayed.
   * - **1** (Always): Always displayed.
   * 
   * @example
   * 0
   */
  display?: number;
  /**
   * @remarks
   * The height of the background image pane. The value is a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the background image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width of the background image pane. The value is a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate of the background image. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate of the background image. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The stacking order of the background image. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above the bottom layer, and so on.
   * 
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesClockWidgets extends $dara.Model {
  /**
   * @remarks
   * The text color of the clock (RGB).
   * 
   * The calculation formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @remarks
   * The font size of the clock. Valid values: **(0, 72]**.
   * 
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @remarks
   * The font type of the clock. Valid values:
   * 
   * - **0** (default): NOTO_SERIF_CJKSC_REGULAR
   * - **1**: ALIBABA_PUHUITI_REGULAR
   * - **2**: ALIBABA_PUHUITI_BOLD
   * - **3**: ALIBABA_PUHUITI_Heavy
   * - **4**: ALIBABA_PUHUITI_LIGHT
   * - **5**: ALIBABA_PUHUITI_MEDIUM
   * 
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @remarks
   * The X-coordinate of the clock. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate of the clock. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The stacking order of the clock. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above the bottom layer, and so on.
   * 
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplatesWatermarks extends $dara.Model {
  /**
   * @remarks
   * The transparency of the watermark. The value is a normalized percentage. A value of 0 indicates transparent, and a value of 1 indicates completely opaque.
   * 
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @remarks
   * Specifies whether to display the watermark. Valid values:
   * 
   * - **0** (None): Not displayed.
   * - **1** (Always): Always displayed.
   * 
   * @example
   * 0
   */
  display?: number;
  /**
   * @remarks
   * The height of the watermark pane. The value is a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the watermark.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width of the watermark pane. The value is a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate of the watermark. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate of the watermark. The value is a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The stacking order of the watermark. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above the bottom layer, and so on.
   * 
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      display: 'Display',
      height: 'Height',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      display: 'number',
      height: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The RGB value of the background color. Default value: **0** (black). The calculation formula is R + G × 256 + B × 65536. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  backgroundColor?: number;
  /**
   * @remarks
   * The list of background image information.
   */
  backgrounds?: DescribeRecordTemplatesResponseBodyTemplatesBackgrounds[];
  /**
   * @remarks
   * The list of clock widgets.
   */
  clockWidgets?: DescribeRecordTemplatesResponseBodyTemplatesClockWidgets[];
  /**
   * @remarks
   * The creation time. The time is displayed in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC time).
   * 
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The delay before stopping the recording. Unit: seconds.
   * 
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * Specifies whether to add the timestamp of the TS file to the recorded M3U8 file.
   * 
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @remarks
   * The file splitting duration.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * The list of recording file formats. Valid formats include M3U8, FLV, and MP4.
   */
  formats?: string[];
  /**
   * @remarks
   * The HTTP callback URL for recording events.
   * 
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  /**
   * @remarks
   * The list of mixed-stream layout IDs used by the recording template.
   */
  layoutIds?: number[];
  /**
   * @remarks
   * The encoding options.
   * 
   * @example
   * 50
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The name of the Message Service (MNS) queue for recording event callbacks.
   * 
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  /**
   * @remarks
   * The name of the recording configuration template.
   * 
   * @example
   * Template-demo
   */
  name?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket where recording files are stored.
   * 
   * @example
   * rtc-record-oss
   */
  ossBucket?: string;
  /**
   * @remarks
   * The naming rule for recording files.
   * 
   * @example
   * record/pre/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  /**
   * @remarks
   * The task specifications.
   * 
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * The ID of the recording configuration template.
   * 
   * @example
   * 1ca698e2-57fa-4314-8e11-00d950d4****
   */
  templateId?: string;
  /**
   * @remarks
   * The list of watermark information.
   */
  watermarks?: DescribeRecordTemplatesResponseBodyTemplatesWatermarks[];
  static names(): { [key: string]: string } {
    return {
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      createTime: 'CreateTime',
      delayStopTime: 'DelayStopTime',
      enableM3u8DateTime: 'EnableM3u8DateTime',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      httpCallbackUrl: 'HttpCallbackUrl',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mnsQueue: 'MnsQueue',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossFilePrefix: 'OssFilePrefix',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesClockWidgets },
      createTime: 'string',
      delayStopTime: 'number',
      enableM3u8DateTime: 'boolean',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      httpCallbackUrl: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mnsQueue: 'string',
      name: 'string',
      ossBucket: 'string',
      ossFilePrefix: 'string',
      taskProfile: 'string',
      templateId: 'string',
      watermarks: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplatesWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C292B80E-5175-4BA4-8CC292B80E-5175-4BA4-8C1E-2ABEC4D7C2FE1E-2ABEC4D7****
   */
  requestId?: string;
  /**
   * @remarks
   * The recording configuration templates.
   */
  templates?: DescribeRecordTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeRecordTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

