// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordTemplateRequestBackgrounds extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the image. Valid values:
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
   * The height of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image.
   * 
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @remarks
   * The width of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above 0, and so on.
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

export class UpdateRecordTemplateRequestClockWidgets extends $dara.Model {
  /**
   * @remarks
   * The text color of the clock in RGB format.
   * 
   * The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
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
   * The X-coordinate of the clock, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate of the clock, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order of the clock. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above 0, and so on.
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

export class UpdateRecordTemplateRequestWatermarks extends $dara.Model {
  /**
   * @remarks
   * The transparency. A value of 0.0 indicates fully transparent, and a value of 1.0 indicates fully opaque.
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
   * The height of the pane, as a normalized percentage.
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
   * The width of the pane, as a normalized percentage.
   * 
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, as a normalized percentage.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above 0, and so on.
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

export class UpdateRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The background color in RGB format. Default value: **0** (black). The formula is `R + G × 256 + B × 65536`. Valid values for R (red), G (green), and B (blue): **0** to **255**.
   * 
   * @example
   * 0
   */
  backgroundColor?: number;
  /**
   * @remarks
   * The background image information.
   */
  backgrounds?: UpdateRecordTemplateRequestBackgrounds[];
  /**
   * @remarks
   * The clock information.
   */
  clockWidgets?: UpdateRecordTemplateRequestClockWidgets[];
  /**
   * @remarks
   * The delay before stopping the recording. Unit: seconds. Default value: **180**.
   * 
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * Specifies whether to add the timestamp of TS files to the recorded M3U8 file.
   * 
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @remarks
   * The interval at which recording files are split. The value must be greater than or equal to 1800. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * The recording file formats.
   * 
   * This parameter is required.
   * 
   * @example
   * mp4
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
   * The layout IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @remarks
   * The encoding options.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @remarks
   * The MSMQ for recording event callbacks.
   * 
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  /**
   * @remarks
   * The name of the recording configuration template.
   * 
   * This parameter is required.
   * 
   * @example
   * Recording template
   */
  name?: string;
  /**
   * @remarks
   * The OSS bucket where the recording files are stored.
   * 
   * This parameter is required.
   * 
   * @example
   * rtc-record-pre
   */
  ossBucket?: string;
  /**
   * @remarks
   * The OSS endpoint of the region where the recording files are stored.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The naming rule for recording files.
   * 
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing configuration of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * The configuration template ID. To obtain the template ID, call [AddRecordTemplate](https://help.aliyun.com/document_detail/193625.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  /**
   * @remarks
   * The watermark information.
   */
  watermarks?: UpdateRecordTemplateRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
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
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestClockWidgets },
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
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      taskProfile: 'string',
      templateId: 'string',
      watermarks: { 'type': 'array', 'itemType': UpdateRecordTemplateRequestWatermarks },
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

