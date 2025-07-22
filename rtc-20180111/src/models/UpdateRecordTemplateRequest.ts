// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordTemplateRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
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
   * @example
   * 0
   */
  fontColor?: number;
  /**
   * @example
   * 1
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  fontType?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
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
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  display?: number;
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * https://www.example.com/image.jpg
   */
  url?: string;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
   */
  y?: number;
  /**
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
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: UpdateRecordTemplateRequestBackgrounds[];
  clockWidgets?: UpdateRecordTemplateRequestClockWidgets[];
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @example
   * false
   */
  enableM3u8DateTime?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mp4
   */
  formats?: string[];
  /**
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc-record-pre
   */
  ossBucket?: string;
  ossEndpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
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

