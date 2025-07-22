// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordTemplatesResponseBodyTemplatesBackgrounds extends $dara.Model {
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

export class DescribeRecordTemplatesResponseBodyTemplatesClockWidgets extends $dara.Model {
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

export class DescribeRecordTemplatesResponseBodyTemplatesWatermarks extends $dara.Model {
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

export class DescribeRecordTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * 0
   */
  backgroundColor?: number;
  backgrounds?: DescribeRecordTemplatesResponseBodyTemplatesBackgrounds[];
  clockWidgets?: DescribeRecordTemplatesResponseBodyTemplatesClockWidgets[];
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
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
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  formats?: string[];
  /**
   * @example
   * http://example.com/callback
   */
  httpCallbackUrl?: string;
  layoutIds?: number[];
  /**
   * @example
   * 50
   */
  mediaEncode?: number;
  /**
   * @example
   * record-callback-queue
   */
  mnsQueue?: string;
  name?: string;
  /**
   * @example
   * rtc-record-oss
   */
  ossBucket?: string;
  /**
   * @example
   * record/pre/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  ossFilePrefix?: string;
  /**
   * @example
   * 4IN_1080P
   */
  taskProfile?: string;
  /**
   * @example
   * 1ca698e2-57fa-4314-8e11-00d950d4****
   */
  templateId?: string;
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
   * @example
   * C292B80E-5175-4BA4-8CC292B80E-5175-4BA4-8C1E-2ABEC4D7C2FE1E-2ABEC4D7****
   */
  requestId?: string;
  templates?: DescribeRecordTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  /**
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

