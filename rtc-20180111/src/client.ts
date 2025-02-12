// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddRecordTemplateRequestBackgrounds extends $dara.Model {
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

export class AddRecordTemplateRequestClockWidgets extends $dara.Model {
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

export class AddRecordTemplateRequestWatermarks extends $dara.Model {
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

export class CreateAppLayoutRequestLayoutPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      paneId: 'number',
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

export class CreateAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 布局
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  panes?: CreateAppLayoutRequestLayoutPanes[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      panes: { 'type': 'array', 'itemType': CreateAppLayoutRequestLayoutPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateRequestRecordTemplate extends $dara.Model {
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
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
   */
  formats?: string[];
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutRequestPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 1
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
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

export class DeleteAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xd4c****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponseBodyCallbacksSubEvent extends $dara.Model {
  /**
   * @example
   * 2000
   */
  event?: number;
  /**
   * @example
   * 录制开始
   */
  eventName?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventName: 'EventName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'number',
      eventName: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponseBodyCallbacks extends $dara.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 录制回调
   */
  name?: string;
  subEvent?: DescribeAllCallbackResponseBodyCallbacksSubEvent[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      name: 'Name',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      name: 'string',
      subEvent: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacksSubEvent },
    };
  }

  validate() {
    if(Array.isArray(this.subEvent)) {
      $dara.Model.validateArray(this.subEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsRequestCondition extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsResponseBodyLayoutsPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      paneId: 'number',
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

export class DescribeAppLayoutsResponseBodyLayouts extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  panes?: DescribeAppLayoutsResponseBodyLayoutsPanes[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
      panes: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayoutsPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesRequestCondition extends $dara.Model {
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesResponseBodyTemplates extends $dara.Model {
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
   * record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
  /**
   * @example
   * 1800
   */
  fileSplitInterval?: number;
  formats?: string[];
  layoutIds?: string[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * wv7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * rtc-bucket
   */
  bucket?: string;
  /**
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @example
   * 1712376032000
   */
  fileCreateTs?: number;
  /**
   * @example
   * 200
   */
  fileDuration?: number;
  /**
   * @example
   * record/appid/12_task_local1/1712279809158_1712279844691/playlist.mp4
   */
  filePath?: string;
  /**
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * 1712376012000
   */
  startTs?: number;
  /**
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      channelId: 'ChannelId',
      fileCreateTs: 'FileCreateTs',
      fileDuration: 'FileDuration',
      filePath: 'FilePath',
      fileSize: 'FileSize',
      region: 'Region',
      startTs: 'StartTs',
      taskId: 'TaskId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      channelId: 'string',
      fileCreateTs: 'number',
      fileDuration: 'number',
      filePath: 'string',
      fileSize: 'number',
      region: 'number',
      startTs: 'number',
      taskId: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequestCondition extends $dara.Model {
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * Bj6D****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  layoutIds?: string[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 模版名称
   */
  name?: string;
  /**
   * @example
   * Bj6D****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppListAppServiceAreas extends $dara.Model {
  serviceArea?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceArea: 'ServiceArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceArea)) {
      $dara.Model.validateArray(this.serviceArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppListApp extends $dara.Model {
  /**
   * @example
   * rgf1****"
   */
  appId?: string;
  /**
   * @example
   * Default AppName
   */
  appName?: string;
  /**
   * @example
   * universal
   */
  appType?: string;
  /**
   * @example
   * paybyduration
   */
  billType?: string;
  /**
   * @example
   * 2020-01-09T02:02:29Z
   */
  createTime?: string;
  serviceAreas?: DescribeAppsResponseBodyAppListAppServiceAreas;
  /**
   * @example
   * 1
   */
  status?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      billType: 'BillType',
      createTime: 'CreateTime',
      serviceAreas: 'ServiceAreas',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      billType: 'string',
      createTime: 'string',
      serviceAreas: DescribeAppsResponseBodyAppListAppServiceAreas,
      status: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.serviceAreas && typeof (this.serviceAreas as any).validate === 'function') {
      (this.serviceAreas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBodyAppList extends $dara.Model {
  app?: DescribeAppsResponseBodyAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': DescribeAppsResponseBodyAppListApp },
    };
  }

  validate() {
    if(Array.isArray(this.app)) {
      $dara.Model.validateArray(this.app);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponseBodyRules extends $dara.Model {
  /**
   * @example
   * http://example.com/callBack
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 2021-08-19T02:53:07Z
   */
  createTime?: string;
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @example
   * testRule
   */
  ruleName?: string;
  /**
   * @example
   * disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      mediaEncode: 'MediaEncode',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      mediaEncode: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIdPrefixes)) {
      $dara.Model.validateArray(this.channelIdPrefixes);
    }
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * xxxxxxxx
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $dara.Model {
  /**
   * @example
   * 0
   */
  pubAudio?: number;
  /**
   * @example
   * 0
   */
  pubVideo1080?: number;
  /**
   * @example
   * 0
   */
  pubVideo360?: number;
  /**
   * @example
   * 0
   */
  pubVideo720?: number;
  /**
   * @example
   * 0
   */
  pubVideoScreenShare?: number;
  /**
   * @example
   * 0
   */
  subAudio?: number;
  /**
   * @example
   * 0
   */
  subVideo1080?: number;
  /**
   * @example
   * 0
   */
  subVideo360?: number;
  /**
   * @example
   * 0
   */
  subVideo720?: number;
  /**
   * @example
   * 0
   */
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailList extends $dara.Model {
  /**
   * @example
   * GOOD
   */
  callExp?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      durMetricStatData: 'DurMetricStatData',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      durMetricStatData: DescribeCallResponseBodyUserDetailListDurMetricStatData,
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(this.durMetricStatData && typeof (this.durMetricStatData as any).validate === 'function') {
      (this.durMetricStatData as any).validate();
    }
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    if(Array.isArray(this.osList)) {
      $dara.Model.validateArray(this.osList);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.sdkVersionList)) {
      $dara.Model.validateArray(this.sdkVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBodyCallList extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  badExpUserCnt?: number;
  /**
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 5
   */
  userCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      badExpUserCnt: 'BadExpUserCnt',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      badExpUserCnt: 'number',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponseBodyCallbacks extends $dara.Model {
  /**
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @example
   * 1
   */
  checkStatus?: string;
  /**
   * @example
   * RESPONSE_INVALID
   */
  code?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      checkStatus: 'CheckStatus',
      code: 'Code',
      conf: 'Conf',
      msg: 'Msg',
      status: 'Status',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkStatus: 'string',
      code: 'string',
      conf: 'string',
      msg: 'string',
      status: 'number',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subEvent)) {
      $dara.Model.validateArray(this.subEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponseBodyChannel extends $dara.Model {
  /**
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @example
   * 1557909133
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $dara.Model {
  /**
   * @example
   * 浙江省
   */
  areaName?: string;
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 0.9999
   */
  highQualityTransmissionRate?: string;
  /**
   * @example
   * 1
   */
  pubUserCount?: number;
  /**
   * @example
   * 1
   */
  subUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      callUserCount: 'CallUserCount',
      highQualityTransmissionRate: 'HighQualityTransmissionRate',
      pubUserCount: 'PubUserCount',
      subUserCount: 'SubUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      callUserCount: 'number',
      highQualityTransmissionRate: 'string',
      pubUserCount: 'number',
      subUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBodyStatList extends $dara.Model {
  /**
   * @example
   * 1
   */
  callUserCount?: number;
  /**
   * @example
   * 1.0000
   */
  callUserRatio?: string;
  /**
   * @example
   * OS
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callUserCount: 'number',
      callUserRatio: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyCallInfo extends $dara.Model {
  /**
   * @example
   * rjdhtnqy
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatasNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatas extends $dara.Model {
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  /**
   * @example
   * CALL_QUALITY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  connAvgTime?: number;
  /**
   * @example
   * 0.91
   */
  fiveSecJoinRate?: number;
  /**
   * @example
   * 0.02
   */
  totalAudioStuckRate?: number;
  /**
   * @example
   * 0.02
   */
  totalVideoStuckRate?: number;
  /**
   * @example
   * 0.02
   */
  totalVideoVagueRate?: number;
  static names(): { [key: string]: string } {
    return {
      connAvgTime: 'ConnAvgTime',
      fiveSecJoinRate: 'FiveSecJoinRate',
      totalAudioStuckRate: 'TotalAudioStuckRate',
      totalVideoStuckRate: 'TotalVideoStuckRate',
      totalVideoVagueRate: 'TotalVideoVagueRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAvgTime: 'number',
      fiveSecJoinRate: 'number',
      totalAudioStuckRate: 'number',
      totalVideoStuckRate: 'number',
      totalVideoVagueRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponseBodyUserList extends $dara.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1615893327
   */
  joinTs?: number;
  /**
   * @example
   * 1615893442
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList extends $dara.Model {
  /**
   * @example
   * 1615893327
   */
  createdTs?: number;
  /**
   * @example
   * 1615893442
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponseBodySessions extends $dara.Model {
  /**
   * @example
   * 1557909133
   */
  joined?: number;
  /**
   * @example
   * xa744sxx8rtobgj****
   */
  sessionId?: string;
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      joined: 'Joined',
      sessionId: 'SessionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joined: 'number',
      sessionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $dara.Model {
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  /**
   * @example
   * ALL_NUM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 0
   */
  totalBadExpNum?: number;
  /**
   * @example
   * 0
   */
  totalJoinFailNum?: number;
  /**
   * @example
   * 1
   */
  totalPubUserNum?: number;
  /**
   * @example
   * 3
   */
  totalSubUserNum?: number;
  /**
   * @example
   * 5
   */
  totalUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalBadExpNum: 'TotalBadExpNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalUserNum: 'TotalUserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBadExpNum: 'number',
      totalJoinFailNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalUserNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudNotesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/autoChapters_1724914365173.json
   */
  autoChaptersFilePath?: string;
  /**
   * @example
   * sample-bucket
   */
  bucket?: string;
  /**
   * @example
   * testchannelId
   */
  channelId?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/customPrompt_1724914365173.json
   */
  customPromptFilePath?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/meetingAssistance_1724914365173.json
   */
  meetingAssistanceFilePath?: string;
  /**
   * @example
   * 1
   */
  region?: number;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/serviceInspection_1724914365173.json
   */
  serviceInspectionFilePath?: string;
  /**
   * @example
   * 1731939816837
   */
  startTs?: number;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/summarization_1724914365173.json
   */
  summarizationFilePath?: string;
  /**
   * @example
   * test001
   */
  taskId?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/textPolish_1724914365173.json
   */
  textPolishFilePath?: string;
  /**
   * @example
   * cloudNote/ksvxxppi/88_12/transcription_1724914365173.json
   */
  transcriptionFilePath?: string;
  /**
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      autoChaptersFilePath: 'AutoChaptersFilePath',
      bucket: 'Bucket',
      channelId: 'ChannelId',
      customPromptFilePath: 'CustomPromptFilePath',
      meetingAssistanceFilePath: 'MeetingAssistanceFilePath',
      region: 'Region',
      serviceInspectionFilePath: 'ServiceInspectionFilePath',
      startTs: 'StartTs',
      summarizationFilePath: 'SummarizationFilePath',
      taskId: 'TaskId',
      textPolishFilePath: 'TextPolishFilePath',
      transcriptionFilePath: 'TranscriptionFilePath',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoChaptersFilePath: 'string',
      bucket: 'string',
      channelId: 'string',
      customPromptFilePath: 'string',
      meetingAssistanceFilePath: 'string',
      region: 'number',
      serviceInspectionFilePath: 'string',
      startTs: 'number',
      summarizationFilePath: 'string',
      taskId: 'string',
      textPolishFilePath: 'string',
      transcriptionFilePath: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $dara.Model {
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  /**
   * @example
   * 1614936817123
   */
  tsInMs?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
      tsInMs: 'TsInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
      tsInMs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $dara.Model {
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodes extends $dara.Model {
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDataItems)) {
      $dara.Model.validateArray(this.eventDataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetricsNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @example
   * 230100
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetrics extends $dara.Model {
  nodes?: DescribeEndPointMetricDataResponseBodyPubMetricsNodes[];
  /**
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetricsNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @example
   * 230100
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetrics extends $dara.Model {
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  /**
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList extends $dara.Model {
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * 100
   */
  userCount?: number;
  /**
   * @example
   * 0.9239
   */
  userRatio?: number;
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      userCount: 'UserCount',
      userRatio: 'UserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      userCount: 'number',
      userRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @example
   * 1
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricData extends $dara.Model {
  nodes?: DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 20
   */
  faultUserCount?: number;
  /**
   * @example
   * 0.1
   */
  faultUserRatio?: number;
  /**
   * @example
   * 40
   */
  totalUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      faultUserCount: 'FaultUserCount',
      faultUserRatio: 'FaultUserRatio',
      totalUserCount: 'TotalUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultUserCount: 'number',
      faultUserRatio: 'number',
      totalUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1620957905
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList extends $dara.Model {
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems extends $dara.Model {
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList },
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas extends $dara.Model {
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems },
      role: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDataItems)) {
      $dara.Model.validateArray(this.eventDataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1615892596
   */
  x?: string;
  /**
   * @example
   * 20
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $dara.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  /**
   * @example
   * SENDER
   */
  role?: string;
  /**
   * @example
   * AUDIO_STUCK
   */
  type?: string;
  /**
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      role: 'Role',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
      role: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $dara.Model {
  /**
   * @example
   * 1
   */
  factorId?: string;
  /**
   * @example
   * LOCAL
   */
  faultSource?: string;
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedEventDatas: 'RelatedEventDatas',
      relatedMetricDatas: 'RelatedMetricDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
    };
  }

  validate() {
    if(Array.isArray(this.relatedEventDatas)) {
      $dara.Model.validateArray(this.relatedEventDatas);
    }
    if(Array.isArray(this.relatedMetricDatas)) {
      $dara.Model.validateArray(this.relatedMetricDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes extends $dara.Model {
  /**
   * @example
   * 1620957900
   */
  x?: string;
  /**
   * @example
   * 0.4540
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData extends $dara.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1620957919
   */
  joinTs?: number;
  /**
   * @example
   * 1620958150
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetail extends $dara.Model {
  /**
   * @example
   * 1620957919
   */
  createdTs?: number;
  /**
   * @example
   * 1620958150
   */
  destroyedTs?: number;
  /**
   * @example
   * 231
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  /**
   * @example
   * 231
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @example
   * 0a497933****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods },
      os: 'string',
      sdkVersion: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserListFaultList extends $dara.Model {
  /**
   * @example
   * JOIN_SLOW
   */
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserList extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  channelCreatedTs?: number;
  /**
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  /**
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCreatedTs: 'ChannelCreatedTs',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      faultList: 'FaultList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCreatedTs: 'number',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      faultList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserListFaultList },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.faultList)) {
      $dara.Model.validateArray(this.faultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @example
   * 0.5
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
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

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes extends $dara.Model {
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayoutsLayout extends $dara.Model {
  /**
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  panes?: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes;
  static names(): { [key: string]: string } {
    return {
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      panes: DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanes,
    };
  }

  validate() {
    if(this.panes && typeof (this.panes as any).validate === 'function') {
      (this.panes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBodyLayouts extends $dara.Model {
  layout?: DescribeMPULayoutInfoListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeMPULayoutInfoListResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailList extends $dara.Model {
  callIdList?: string[];
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callIdList: 'CallIdList',
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callIdList)) {
      $dara.Model.validateArray(this.callIdList);
    }
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    if(Array.isArray(this.osList)) {
      $dara.Model.validateArray(this.osList);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.sdkVersionList)) {
      $dara.Model.validateArray(this.sdkVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetail extends $dara.Model {
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    if(Array.isArray(this.osList)) {
      $dara.Model.validateArray(this.osList);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.sdkVersionList)) {
      $dara.Model.validateArray(this.sdkVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $dara.Model {
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioData extends $dara.Model {
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  /**
   * @example
   * AUDIO
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoDataNodes extends $dara.Model {
  /**
   * @example
   * 1548670256
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoData extends $dara.Model {
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  /**
   * @example
   * VIDEO_CAMERA
   */
  type?: string;
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @example
   * 347
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9933
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0021
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.6654
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9338
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9356
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 中国_浙江省
   */
  name?: string;
  /**
   * @example
   * 291
   */
  videoDelay?: number;
  /**
   * @example
   * 1363
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9967
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0058
   */
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $dara.Model {
  /**
   * @example
   * 554
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9953
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0014
   */
  audioStuckRate?: string;
  /**
   * @example
   * 1.0000
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.9560
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.9575
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 517
   */
  videoDelay?: number;
  /**
   * @example
   * 1299
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9981
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0264
   */
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $dara.Model {
  /**
   * @example
   * 248
   */
  audioDelay?: number;
  /**
   * @example
   * 0.9987
   */
  audioHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0011
   */
  audioStuckRate?: string;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucFiveSecRate?: string;
  /**
   * @example
   * 0.8276
   */
  joinChannelSucRate?: string;
  /**
   * @example
   * 2.1.0.210316.dev--release/rtcsdk_v2.1
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 333
   */
  videoDelay?: number;
  /**
   * @example
   * 5643
   */
  videoFirstPicDuration?: number;
  /**
   * @example
   * 0.9997
   */
  videoHighQualityTransmissionRate?: string;
  /**
   * @example
   * 0.0054
   */
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      os: 'Os',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      os: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallDataNodes extends $dara.Model {
  /**
   * @example
   * 1615831200
   */
  x?: string;
  /**
   * @example
   * 1.0000
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallData extends $dara.Model {
  /**
   * @example
   * 0.9376
   */
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  /**
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponseBodyRecordFiles extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 2020-10-02T17:36:00Z
   */
  createTime?: string;
  /**
   * @example
   * 1800
   */
  duration?: number;
  /**
   * @example
   * 2020-11-01T17:36:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2020-11-02T17:36:00Z
   */
  stopTime?: string;
  /**
   * @example
   * yourTaskId
   */
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      duration: 'Duration',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createTime: 'string',
      duration: 'number',
      startTime: 'string',
      stopTime: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeRtcChannelListResponseBodyChannelListChannelListCallArea extends $dara.Model {
  callArea?: string[];
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callArea)) {
      $dara.Model.validateArray(this.callArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelListChannelList extends $dara.Model {
  callArea?: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea;
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  /**
   * @example
   * 2018-01-29T02:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2018-01-29T01:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2
   */
  totalUserCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      totalUserCnt: 'TotalUserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea,
      channelId: 'string',
      endTime: 'string',
      startTime: 'string',
      totalUserCnt: 'number',
    };
  }

  validate() {
    if(this.callArea && typeof (this.callArea as any).validate === 'function') {
      (this.callArea as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelList extends $dara.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelListChannelList[];
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: { 'type': 'array', 'itemType': DescribeRtcChannelListResponseBodyChannelListChannelList },
    };
  }

  validate() {
    if(Array.isArray(this.channelList)) {
      $dara.Model.validateArray(this.channelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric extends $dara.Model {
  /**
   * @example
   * example_channel
   */
  channelId?: string;
  /**
   * @example
   * 2019-06-06T18:57:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  pubUserCount?: number;
  /**
   * @example
   * 2019-06-06T17:57:00Z
   */
  startTime?: string;
  /**
   * @example
   * 25
   */
  subUserCount?: number;
  /**
   * @example
   * 30
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pubUserCount: 'PubUserCount',
      startTime: 'StartTime',
      subUserCount: 'SubUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      endTime: 'string',
      pubUserCount: 'number',
      startTime: 'string',
      subUserCount: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration extends $dara.Model {
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration extends $dara.Model {
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration extends $dara.Model {
  pubDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration;
  subDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration;
  static names(): { [key: string]: string } {
    return {
      pubDuration: 'PubDuration',
      subDuration: 'SubDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration,
      subDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration,
    };
  }

  validate() {
    if(this.pubDuration && typeof (this.pubDuration as any).validate === 'function') {
      (this.pubDuration as any).validate();
    }
    if(this.subDuration && typeof (this.subDuration as any).validate === 'function') {
      (this.subDuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfo extends $dara.Model {
  channelMetric?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric;
  duration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration;
  static names(): { [key: string]: string } {
    return {
      channelMetric: 'ChannelMetric',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetric: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric,
      duration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration,
    };
  }

  validate() {
    if(this.channelMetric && typeof (this.channelMetric as any).validate === 'function') {
      (this.channelMetric as any).validate();
    }
    if(this.duration && typeof (this.duration as any).validate === 'function') {
      (this.duration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule extends $dara.Model {
  /**
   * @example
   * 200
   */
  audioDuration?: number;
  /**
   * @example
   * 200
   */
  contentDuration?: number;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 1000
   */
  totalDuration?: number;
  /**
   * @example
   * 300
   */
  v1080Duration?: number;
  /**
   * @example
   * 300
   */
  v360Duration?: number;
  /**
   * @example
   * 200
   */
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      contentDuration: 'ContentDuration',
      timeStamp: 'TimeStamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v360Duration: 'V360Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      contentDuration: 'number',
      timeStamp: 'string',
      totalDuration: 'number',
      v1080Duration: 'number',
      v360Duration: 'number',
      v720Duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerInterval extends $dara.Model {
  durationModule?: DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule[];
  static names(): { [key: string]: string } {
    return {
      durationModule: 'DurationModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationModule: { 'type': 'array', 'itemType': DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule },
    };
  }

  validate() {
    if(Array.isArray(this.durationModule)) {
      $dara.Model.validateArray(this.durationModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeChannelPeak?: number;
  /**
   * @example
   * 2018-01-29T00:01:00Z
   */
  activeChannelPeakTime?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeChannelPeak: 'ActiveChannelPeak',
      activeChannelPeakTime: 'ActiveChannelPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelPeak: 'number',
      activeChannelPeakTime: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval extends $dara.Model {
  peakChannelCntModule?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule[];
  static names(): { [key: string]: string } {
    return {
      peakChannelCntModule: 'PeakChannelCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntModule: { 'type': 'array', 'itemType': DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule },
    };
  }

  validate() {
    if(Array.isArray(this.peakChannelCntModule)) {
      $dara.Model.validateArray(this.peakChannelCntModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeUserCnt?: number;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeUserCnt: 'ActiveUserCnt',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCnt: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval extends $dara.Model {
  userCntModule?: DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule[];
  static names(): { [key: string]: string } {
    return {
      userCntModule: 'UserCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCntModule: { 'type': 'array', 'itemType': DescribeRtcUserCntDataResponseBodyUserCntDataPerIntervalUserCntModule },
    };
  }

  validate() {
    if(Array.isArray(this.userCntModule)) {
      $dara.Model.validateArray(this.userCntModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * MajorPane。
   * 
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
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

export class DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes extends $dara.Model {
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes[];
  static names(): { [key: string]: string } {
    return {
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      panes: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayoutPanesPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayoutsLayout extends $dara.Model {
  /**
   * @remarks
   * AudioMixCount。
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * 22
   */
  layoutId?: number;
  name?: string;
  panes?: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes;
  static names(): { [key: string]: string } {
    return {
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      panes: DescribeSystemLayoutListResponseBodyLayoutsLayoutPanes,
    };
  }

  validate() {
    if(this.panes && typeof (this.panes as any).validate === 'function') {
      (this.panes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBodyLayouts extends $dara.Model {
  layout?: DescribeSystemLayoutListResponseBodyLayoutsLayout[];
  static names(): { [key: string]: string } {
    return {
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layout: { 'type': 'array', 'itemType': DescribeSystemLayoutListResponseBodyLayoutsLayout },
    };
  }

  validate() {
    if(Array.isArray(this.layout)) {
      $dara.Model.validateArray(this.layout);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $dara.Model {
  /**
   * @example
   * 45
   */
  audioCallDuration?: number;
  /**
   * @example
   * 中国
   */
  name?: string;
  /**
   * @example
   * 4821
   */
  totalCallDuration?: number;
  /**
   * @example
   * 4776
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $dara.Model {
  /**
   * @example
   * 51
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.9782
   */
  callDurationRatio?: string;
  /**
   * @example
   * ONE_TO_FIVE
   */
  name?: string;
  /**
   * @example
   * 10636
   */
  totalCallDuration?: number;
  /**
   * @example
   * 10585
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $dara.Model {
  /**
   * @example
   * 3
   */
  audioCallDuration?: number;
  /**
   * @example
   * 0.0984
   */
  callDurationRatio?: string;
  /**
   * @example
   * 1.0.0
   */
  name?: string;
  /**
   * @example
   * macOS
   */
  os?: string;
  /**
   * @example
   * 476
   */
  totalCallDuration?: number;
  /**
   * @example
   * 473
   */
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      os: 'Os',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      os: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallDataNodes extends $dara.Model {
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @example
   * 1
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallData extends $dara.Model {
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  /**
   * @example
   * ONLINE_USER_PEAK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBodyProperty extends $dara.Model {
  /**
   * @example
   * 1557909133
   */
  join?: number;
  /**
   * @example
   * 1
   */
  role?: number;
  /**
   * @example
   * xa744sxx8rtobgj****
   */
  session?: string;
  static names(): { [key: string]: string } {
    return {
      join: 'Join',
      role: 'Role',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      join: 'number',
      role: 'number',
      session: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLayoutRequestLayoutPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      paneId: 'number',
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

export class ModifyAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123121231313
   */
  layoutId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  name?: string;
  panes?: ModifyAppLayoutRequestLayoutPanes[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
      panes: { 'type': 'array', 'itemType': ModifyAppLayoutRequestLayoutPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateRequestRecordTemplate extends $dara.Model {
  /**
   * @example
   * 180
   */
  delayStopTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record/{AppId}/{ChannelId}_{TaskId}/{EscapedStartTime}_{EscapedEndTime}
   */
  filePrefix?: string;
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
   */
  formats?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2xh6****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      delayStopTime: 'DelayStopTime',
      filePrefix: 'FilePrefix',
      fileSplitInterval: 'FileSplitInterval',
      formats: 'Formats',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStopTime: 'number',
      filePrefix: 'string',
      fileSplitInterval: 'number',
      formats: { 'type': 'array', 'itemType': 'string' },
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateRequestStreamingOutTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 模版
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaRequestCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      conf: 'Conf',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      conf: 'string',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subEvent)) {
      $dara.Model.validateArray(this.subEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequestPanes extends $dara.Model {
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
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
      height: 'Height',
      majorPane: 'MajorPane',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      majorPane: 'number',
      paneId: 'number',
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

export class RemoveTerminalsResponseBodyTerminalsTerminal extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 1811****
   */
  id?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBodyTerminals extends $dara.Model {
  terminal?: RemoveTerminalsResponseBodyTerminalsTerminal[];
  static names(): { [key: string]: string } {
    return {
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terminal: { 'type': 'array', 'itemType': RemoveTerminalsResponseBodyTerminalsTerminal },
    };
  }

  validate() {
    if(Array.isArray(this.terminal)) {
      $dara.Model.validateArray(this.terminal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackRequestCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestAutoChapters extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestCustomPromptCustomPromptContents extends $dara.Model {
  /**
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * split-summary-demo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请帮我将下面的对话进行总结，根据发言人来总结:\n {Transcription}
   */
  prompt?: string;
  /**
   * @example
   * chat
   */
  transType?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      transType: 'TransType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
      prompt: 'string',
      transType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestCustomPrompt extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customPromptContents?: StartCloudNoteRequestCustomPromptCustomPromptContents[];
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      customPromptContents: 'CustomPromptContents',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPromptContents: { 'type': 'array', 'itemType': StartCloudNoteRequestCustomPromptCustomPromptContents },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.customPromptContents)) {
      $dara.Model.validateArray(this.customPromptContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestMeetingAssistance extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  meetingAssistanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      meetingAssistanceType: 'MeetingAssistanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      meetingAssistanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.meetingAssistanceType)) {
      $dara.Model.validateArray(this.meetingAssistanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestServiceInspectionInspectionContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 销售在开场白的时候主动向客户打招呼进行欢迎
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 到店欢迎-欢迎语
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestServiceInspection extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: StartCloudNoteRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请监测对话中销售人员表现是否接待热情、态度良好
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 汽车门店线下销售场景
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inspectionContents: { 'type': 'array', 'itemType': StartCloudNoteRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * accessKey。
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey。
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestSummarization extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      type: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.type)) {
      $dara.Model.validateArray(this.type);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequestTextPolish extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteShrinkRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * accessKey。
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey。
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestPanes extends $dara.Model {
  images?: StartCloudRecordRequestPanesImages[];
  /**
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * paneId
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * source
   */
  source?: string;
  /**
   * @remarks
   * sourceType
   * 
   * @example
   * video
   */
  sourceType?: string;
  texts?: StartCloudRecordRequestPanesTexts[];
  whiteboard?: StartCloudRecordRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestPanesTexts },
      whiteboard: StartCloudRecordRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestRegionColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * accessKey
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * bucket
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * region
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * vendor
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordShrinkRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordShrinkRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordShrinkRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordShrinkRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordShrinkRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestPanes extends $dara.Model {
  images?: StartCloudRecordShrinkRequestPanesImages[];
  /**
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * paneId
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * source
   */
  source?: string;
  /**
   * @remarks
   * sourceType
   * 
   * @example
   * video
   */
  sourceType?: string;
  texts?: StartCloudRecordShrinkRequestPanesTexts[];
  whiteboard?: StartCloudRecordShrinkRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesTexts },
      whiteboard: StartCloudRecordShrinkRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestRegionColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestStorageConfig extends $dara.Model {
  /**
   * @remarks
   * accessKey
   * 
   * This parameter is required.
   * 
   * @example
   * LTAX***
   */
  accessKey?: string;
  /**
   * @remarks
   * bucket
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket-for-recording
   */
  bucket?: string;
  /**
   * @remarks
   * region
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  region?: number;
  /**
   * @remarks
   * secretKey
   * 
   * This parameter is required.
   * 
   * @example
   * APb6qWYEzKtYxE***
   */
  secretKey?: string;
  /**
   * @remarks
   * vendor
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      region: 'Region',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      region: 'number',
      secretKey: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartCloudRecordShrinkRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartCloudRecordShrinkRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartCloudRecordShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: StartCloudRecordShrinkRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 1
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

export class StartMPUTaskRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
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
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
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
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
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

export class StartMPUTaskRequestEnhancedParam extends $dara.Model {
  /**
   * @example
   * false
   */
  enablePortraitSegmentation?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePortraitSegmentation: 'EnablePortraitSegmentation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePortraitSegmentation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @example
   * 1
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

export class StartMPUTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
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
   * text
   */
  text?: string;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.2456
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
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
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

export class StartMPUTaskRequestUserPanes extends $dara.Model {
  images?: StartMPUTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequestWatermarks extends $dara.Model {
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

export class StartRecordTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @example
   * 1
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

export class StartRecordTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @example
   * 1
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
   * text
   */
  text?: string;
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
      text: 'Text',
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
      text: 'string',
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

export class StartRecordTaskRequestUserPanes extends $dara.Model {
  images?: StartRecordTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestPanes extends $dara.Model {
  images?: StartStreamingOutRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: string;
  /**
   * @example
   * 1811****
   */
  source?: string;
  /**
   * @example
   * Video
   */
  sourceType?: string;
  texts?: StartStreamingOutRequestPanesTexts[];
  whiteboard?: StartStreamingOutRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesTexts },
      whiteboard: StartStreamingOutRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestRegionColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutShrinkRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutShrinkRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutShrinkRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutShrinkRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutShrinkRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestPanes extends $dara.Model {
  images?: StartStreamingOutShrinkRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: string;
  /**
   * @example
   * 1811****
   */
  source?: string;
  /**
   * @example
   * Video
   */
  sourceType?: string;
  texts?: StartStreamingOutShrinkRequestPanesTexts[];
  whiteboard?: StartStreamingOutShrinkRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanesTexts },
      whiteboard: StartStreamingOutShrinkRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestRegionColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: StartStreamingOutShrinkRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: StartStreamingOutShrinkRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: StartStreamingOutShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: StartStreamingOutShrinkRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackRequestCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestPanes extends $dara.Model {
  images?: UpdateCloudRecordRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateCloudRecordRequestPanesTexts[];
  whiteboard?: UpdateCloudRecordRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanesTexts },
      whiteboard: UpdateCloudRecordRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordShrinkRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordShrinkRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordShrinkRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123xxx.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordShrinkRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordShrinkRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordShrinkRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordShrinkRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestPanes extends $dara.Model {
  images?: UpdateCloudRecordShrinkRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateCloudRecordShrinkRequestPanesTexts[];
  whiteboard?: UpdateCloudRecordShrinkRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanesTexts },
      whiteboard: UpdateCloudRecordShrinkRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateCloudRecordShrinkRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateCloudRecordShrinkRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateCloudRecordShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateCloudRecordShrinkRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 1
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

export class UpdateMPUTaskRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
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
      alpha: 'Alpha',
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
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
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
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

export class UpdateMPUTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @example
   * 1
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

export class UpdateMPUTaskRequestUserPanesTexts extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 0
   */
  borderColor?: number;
  /**
   * @example
   * 1
   */
  borderWidth?: number;
  /**
   * @example
   * false
   */
  box?: boolean;
  /**
   * @example
   * 0
   */
  boxBorderWidth?: number;
  /**
   * @example
   * 0
   */
  boxColor?: number;
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
   * text
   */
  text?: string;
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
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      box: 'Box',
      boxBorderWidth: 'BoxBorderWidth',
      boxColor: 'BoxColor',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      fontType: 'FontType',
      text: 'Text',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      borderColor: 'number',
      borderWidth: 'number',
      box: 'boolean',
      boxBorderWidth: 'number',
      boxColor: 'number',
      fontColor: 'number',
      fontSize: 'number',
      fontType: 'number',
      text: 'string',
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

export class UpdateMPUTaskRequestUserPanes extends $dara.Model {
  images?: UpdateMPUTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestUserID
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequestWatermarks extends $dara.Model {
  /**
   * @example
   * 0
   */
  alpha?: number;
  /**
   * @example
   * 1
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

export class UpdateRecordTaskRequestUserPanesImages extends $dara.Model {
  /**
   * @example
   * 1
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

export class UpdateRecordTaskRequestUserPanesTexts extends $dara.Model {
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
   * text
   */
  text?: string;
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
      text: 'Text',
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
      text: 'string',
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

export class UpdateRecordTaskRequestUserPanes extends $dara.Model {
  images?: UpdateRecordTaskRequestUserPanesImages[];
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class UpdateStreamingOutRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestPanes extends $dara.Model {
  images?: UpdateStreamingOutRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateStreamingOutRequestPanesTexts[];
  whiteboard?: UpdateStreamingOutRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesTexts },
      whiteboard: UpdateStreamingOutRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestBackgrounds extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 2
   */
  backgroundCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      backgroundCropMode: 'BackgroundCropMode',
      height: 'Height',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      backgroundCropMode: 'number',
      height: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestClockWidgetsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestClockWidgetsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestClockWidgets extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutShrinkRequestClockWidgetsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutShrinkRequestClockWidgetsFontColor;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  /**
   * @example
   * 8
   */
  zone?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      x: 'X',
      y: 'Y',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutShrinkRequestClockWidgetsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutShrinkRequestClockWidgetsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      x: 'number',
      y: 'number',
      zone: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 2
   */
  imageCropMode?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      imageCropMode: 'ImageCropMode',
      layer: 'Layer',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      imageCropMode: 'number',
      layer: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanesImages extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  height?: number;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @example
   * 2
   */
  paneImageCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/123.jpg
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      height: 'Height',
      layer: 'Layer',
      paneImageCropMode: 'PaneImageCropMode',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      height: 'number',
      layer: 'number',
      paneImageCropMode: 'number',
      url: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanesTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanesTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanesTexts extends $dara.Model {
  /**
   * @example
   * 0.9
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutShrinkRequestPanesTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutShrinkRequestPanesTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutShrinkRequestPanesTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutShrinkRequestPanesTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanesWhiteboard extends $dara.Model {
  /**
   * @example
   * default
   */
  whiteboardId?: string;
  static names(): { [key: string]: string } {
    return {
      whiteboardId: 'WhiteboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestPanes extends $dara.Model {
  images?: UpdateStreamingOutShrinkRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateStreamingOutShrinkRequestPanesTexts[];
  whiteboard?: UpdateStreamingOutShrinkRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanesTexts },
      whiteboard: UpdateStreamingOutShrinkRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestTextsBoxColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestTextsFontColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequestTexts extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  alpha?: number;
  /**
   * @example
   * 0.6
   */
  boxAlpha?: number;
  /**
   * @example
   * 5
   */
  boxBorderw?: number;
  boxColor?: UpdateStreamingOutShrinkRequestTextsBoxColor;
  /**
   * @example
   * 0
   */
  font?: number;
  fontColor?: UpdateStreamingOutShrinkRequestTextsFontColor;
  /**
   * @example
   * 36
   */
  fontSize?: number;
  hasBox?: boolean;
  /**
   * @example
   * 0
   */
  layer?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 文字水印
   */
  texture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alpha: 'Alpha',
      boxAlpha: 'BoxAlpha',
      boxBorderw: 'BoxBorderw',
      boxColor: 'BoxColor',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      hasBox: 'HasBox',
      layer: 'Layer',
      texture: 'Texture',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpha: 'number',
      boxAlpha: 'number',
      boxBorderw: 'number',
      boxColor: UpdateStreamingOutShrinkRequestTextsBoxColor,
      font: 'number',
      fontColor: UpdateStreamingOutShrinkRequestTextsFontColor,
      fontSize: 'number',
      hasBox: 'boolean',
      layer: 'number',
      texture: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.boxColor && typeof (this.boxColor as any).validate === 'function') {
      (this.boxColor as any).validate();
    }
    if(this.fontColor && typeof (this.fontColor as any).validate === 'function') {
      (this.fontColor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateRequest extends $dara.Model {
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
  backgrounds?: AddRecordTemplateRequestBackgrounds[];
  clockWidgets?: AddRecordTemplateRequestClockWidgets[];
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
   * 2
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
   * rtc-record-oss
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
  watermarks?: AddRecordTemplateRequestWatermarks[];
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
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': AddRecordTemplateRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': AddRecordTemplateRequestClockWidgets },
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
      watermarks: { 'type': 'array', 'itemType': AddRecordTemplateRequestWatermarks },
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

export class AddRecordTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 76dasgb****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  layout?: CreateAppLayoutRequestLayout;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layout: CreateAppLayoutRequestLayout,
    };
  }

  validate() {
    if(this.layout && typeof (this.layout as any).validate === 'function') {
      (this.layout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppLayoutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  layoutShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layoutShrink: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layoutShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppLayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20A6D1E3-1F5F-5440-A4F1-EC7831646FE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppLayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppLayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplate?: CreateAppRecordTemplateRequestRecordTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplate: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplate: CreateAppRecordTemplateRequestRecordTemplate,
    };
  }

  validate() {
    if(this.recordTemplate && typeof (this.recordTemplate as any).validate === 'function') {
      (this.recordTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplateShrink: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * lD7muaxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplate?: CreateAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: CreateAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  validate() {
    if(this.streamingOutTemplate && typeof (this.streamingOutTemplate as any).validate === 'function') {
      (this.streamingOutTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  /**
   * @example
   * bc5v****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppStreamingOutTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppStreamingOutTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @example
   * testRule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      ownerId: 'number',
      playDomain: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIdPrefixes)) {
      $dara.Model.validateArray(this.channelIdPrefixes);
    }
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ChannelEvent
   */
  events?: string[];
  /**
   * @example
   * false
   */
  needCallbackAuth?: boolean;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  role?: number;
  /**
   * @example
   * user1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      events: 'Events',
      needCallbackAuth: 'NeedCallbackAuth',
      ownerId: 'OwnerId',
      role: 'Role',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelId: 'string',
      clientToken: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      needCallbackAuth: 'boolean',
      ownerId: 'number',
      role: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscribeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSubscribeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEventSubscribeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  panes?: CreateMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      name: 'string',
      ownerId: 'number',
      panes: { 'type': 'array', 'itemType': CreateMPULayoutRequestPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMPULayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMPULayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  layout?: DeleteAppLayoutRequestLayout;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layout: DeleteAppLayoutRequestLayout,
    };
  }

  validate() {
    if(this.layout && typeof (this.layout as any).validate === 'function') {
      (this.layout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppLayoutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  layoutShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layoutShrink: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layoutShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppLayoutResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DCE8D7E-BE3B-54AB-8DAC-32F34BED0763
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppLayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppLayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  template?: DeleteAppRecordTemplateRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      template: DeleteAppRecordTemplateRequestTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      templateShrink: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      templateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplate?: DeleteAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: DeleteAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  validate() {
    if(this.streamingOutTemplate && typeof (this.streamingOutTemplate as any).validate === 'function') {
      (this.streamingOutTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD825C17
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppStreamingOutTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppStreamingOutTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChannelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      subscribeId: 'SubscribeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      subscribeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSubscribeResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSubscribeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEventSubscribeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPULayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  layoutId?: number;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPULayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMPULayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMPULayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * 1
   */
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponseBody extends $dara.Model {
  callbacks?: DescribeAllCallbackResponseBodyCallbacks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbacks: 'Callbacks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbacks: { 'type': 'array', 'itemType': DescribeAllCallbackResponseBodyCallbacks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callbacks)) {
      $dara.Model.validateArray(this.callbacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllCallbackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20A6D1E3-1F5F-5440-A4F1-EC7831646FE4
   */
  requestId?: string;
  /**
   * @example
   * enable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppCallStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppCallStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyResponseBody extends $dara.Model {
  /**
   * @example
   * a656b296a30xxxxxxxxxx1cd4
   */
  callbackSecretKey?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSecretKey: 'CallbackSecretKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSecretKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppCallbackSecretKeyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppCallbackSecretKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppCallbackSecretKeyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0cho****
   */
  appId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * AppKey。
   * 
   * @example
   * ba133b2cee4ab9be424674892c33****
   */
  appKey?: string;
  /**
   * @example
   * 154EF5DE-3D08-1F2C-A482-281F78D74B7C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppKeyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppKeyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  condition?: DescribeAppLayoutsRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: DescribeAppLayoutsRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conditionShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsResponseBody extends $dara.Model {
  layouts?: DescribeAppLayoutsResponseBodyLayouts[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: { 'type': 'array', 'itemType': DescribeAppLayoutsResponseBodyLayouts },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layouts)) {
      $dara.Model.validateArray(this.layouts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLayoutsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppLayoutsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppLayoutsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * disable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppLiveStreamStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppLiveStreamStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppLiveStreamStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * disable
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  condition?: DescribeAppRecordTemplatesRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      condition: DescribeAppRecordTemplatesRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      conditionShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A7497D0-BEAE-58E7-B13A-751BD8EAE4C6
   */
  requestId?: string;
  templates?: DescribeAppRecordTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
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
      templates: { 'type': 'array', 'itemType': DescribeAppRecordTemplatesResponseBodyTemplates },
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

export class DescribeAppRecordTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponseBody extends $dara.Model {
  items?: DescribeAppRecordingFilesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAppRecordingFilesResponseBodyItems },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppRecordingFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppRecordingFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppRecordingFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  condition?: DescribeAppStreamingOutTemplatesRequestCondition;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      condition: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: DescribeAppStreamingOutTemplatesRequestCondition,
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  conditionShrink?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      conditionShrink: 'Condition',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      conditionShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppStreamingOutTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B0A2FCBC-43A4-428F-BC1D-3F4F85837F76
   */
  requestId?: string;
  templates?: DescribeAppStreamingOutTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
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
      templates: { 'type': 'array', 'itemType': DescribeAppStreamingOutTemplatesResponseBodyTemplates },
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

export class DescribeAppStreamingOutTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppStreamingOutTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppStreamingOutTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsRequest extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 3.0
   */
  appVersion?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $dara.Model {
  appList?: DescribeAppsResponseBodyAppList;
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
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
      appList: 'AppList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: DescribeAppsResponseBodyAppList,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.appList && typeof (this.appList as any).validate === 'function') {
      (this.appList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAppsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 069BCB66-CD80-11E8-A82B-A70F78BBDC00
   */
  requestId?: string;
  rules?: DescribeAutoLiveStreamRuleResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeAutoLiveStreamRuleResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * USER_DURATION_STAT
   */
  extDataType?: string;
  /**
   * @example
   * false
   */
  queryExpInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      extDataType: 'ExtDataType',
      queryExpInfo: 'QueryExpInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      extDataType: 'string',
      queryExpInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBody extends $dara.Model {
  callInfo?: DescribeCallResponseBodyCallInfo;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      requestId: 'string',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.userDetailList)) {
      $dara.Model.validateArray(this.userDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @example
   * BAD_EXP_USER_COUNT_DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ALL
   */
  queryMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      endTs: 'number',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryMode: 'string',
      startTs: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBody extends $dara.Model {
  callList?: DescribeCallListResponseBodyCallList[];
  /**
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callList: 'CallList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callList: { 'type': 'array', 'itemType': DescribeCallListResponseBodyCallList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callList)) {
      $dara.Model.validateArray(this.callList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponseBody extends $dara.Model {
  callbacks?: DescribeCallbacksResponseBodyCallbacks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callbacks: 'Callbacks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbacks: { 'type': 'array', 'itemType': DescribeCallbacksResponseBodyCallbacks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callbacks)) {
      $dara.Model.validateArray(this.callbacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallbacksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCallbacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCallbacksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * channel
   */
  channel?: DescribeChannelResponseBodyChannel;
  channelExist?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: DescribeChannelResponseBodyChannel,
      channelExist: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.channel && typeof (this.channel as any).validate === 'function') {
      (this.channel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponseBody extends $dara.Model {
  channelExist?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: DescribeChannelAllUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeChannelAllUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelAllUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelAllUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  parentArea?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      parentArea: 'ParentArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      parentArea: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBody extends $dara.Model {
  areaStatList?: DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaStatList: 'AreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaStatList: { 'type': 'array', 'itemType': DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areaStatList)) {
      $dara.Model.validateArray(this.areaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelAreaDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OS
   */
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      statDim: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  statList?: DescribeChannelDistributionStatDataResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeChannelDistributionStatDataResponseBodyStatList },
    };
  }

  validate() {
    if(Array.isArray(this.statList)) {
      $dara.Model.validateArray(this.statList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615893133
   */
  createdTs?: number;
  /**
   * @example
   * 1615893757
   */
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBody extends $dara.Model {
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.metricDatas)) {
      $dara.Model.validateArray(this.metricDatas);
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelOverallDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aec****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponseBody extends $dara.Model {
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  /**
   * @example
   * 3
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  userList?: DescribeChannelParticipantsResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timestamp: 'number',
      totalNum: 'number',
      totalPage: 'number',
      userList: DescribeChannelParticipantsResponseBodyUserList,
    };
  }

  validate() {
    if(this.userList && typeof (this.userList as any).validate === 'function') {
      (this.userList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelParticipantsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelParticipantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelParticipantsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615893133
   */
  createdTs?: number;
  /**
   * @example
   * 1615893757
   */
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  topPubUserDetailList?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topPubUserDetailList: 'TopPubUserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topPubUserDetailList: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.topPubUserDetailList)) {
      $dara.Model.validateArray(this.topPubUserDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelTopPubUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelTopPubUserListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponseBody extends $dara.Model {
  channelExist?: boolean;
  inChannel?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  sessions?: DescribeChannelUserResponseBodySessions[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      inChannel: 'InChannel',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      inChannel: 'boolean',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeChannelUserResponseBodySessions },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBody extends $dara.Model {
  metricDatas?: DescribeChannelUserMetricsResponseBodyMetricDatas[];
  overallData?: DescribeChannelUserMetricsResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatas },
      overallData: DescribeChannelUserMetricsResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricDatas)) {
      $dara.Model.validateArray(this.metricDatas);
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUserMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUserMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a2hz****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelProfile?: number;
  /**
   * @example
   * 100
   */
  commTotalNum?: number;
  interactiveUserList?: string[];
  /**
   * @example
   * 0
   */
  interactiveUserNum?: number;
  /**
   * @example
   * true
   */
  isChannelExist?: boolean;
  liveUserList?: string[];
  /**
   * @example
   * 0
   */
  liveUserNum?: number;
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      channelProfile: 'ChannelProfile',
      commTotalNum: 'CommTotalNum',
      interactiveUserList: 'InteractiveUserList',
      interactiveUserNum: 'InteractiveUserNum',
      isChannelExist: 'IsChannelExist',
      liveUserList: 'LiveUserList',
      liveUserNum: 'LiveUserNum',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelProfile: 'number',
      commTotalNum: 'number',
      interactiveUserList: { 'type': 'array', 'itemType': 'string' },
      interactiveUserNum: 'number',
      isChannelExist: 'boolean',
      liveUserList: { 'type': 'array', 'itemType': 'string' },
      liveUserNum: 'number',
      requestId: 'string',
      timestamp: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.interactiveUserList)) {
      $dara.Model.validateArray(this.interactiveUserList);
    }
    if(Array.isArray(this.liveUserList)) {
      $dara.Model.validateArray(this.liveUserList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: string[];
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeChannelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudNotesRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudNotesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @example
   * 1712376532000
   */
  endTs?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1712376032000
   */
  startTs?: number;
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      taskIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudNotesResponseBody extends $dara.Model {
  items?: DescribeCloudNotesResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 154EF5DE-3D08-1F2C-A482-281F78D74B7C
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudNotesResponseBodyItems },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudNotesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudNotesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudNotesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid1,testuserid2
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBody extends $dara.Model {
  nodes?: DescribeEndPointEventListResponseBodyNodes[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndPointEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndPointEventListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VIDEO_STUCK_CAMERA
   */
  metrics?: string;
  /**
   * @example
   * testcall1,testcall2
   */
  pubCallIdList?: string;
  /**
   * @example
   * testuserid
   */
  pubUserId?: string;
  /**
   * @example
   * testuserid
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      metrics: 'Metrics',
      pubCallIdList: 'PubCallIdList',
      pubUserId: 'PubUserId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      metrics: 'string',
      pubCallIdList: 'string',
      pubUserId: 'string',
      subUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBody extends $dara.Model {
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  static names(): { [key: string]: string } {
    return {
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
      subMetrics: 'SubMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.pubMetrics)) {
      $dara.Model.validateArray(this.pubMetrics);
    }
    if(Array.isArray(this.subMetrics)) {
      $dara.Model.validateArray(this.subMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEndPointMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEndPointMetricDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596****
   */
  endTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  statList?: DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList },
    };
  }

  validate() {
    if(Array.isArray(this.statList)) {
      $dara.Model.validateArray(this.statList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisFactorDistributionStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisFactorDistributionStatResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW_USER
   */
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
      statDim: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBody extends $dara.Model {
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisOverallDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  createdTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW
   */
  faultType?: string;
  /**
   * @example
   * true
   */
  queryCallUserInfo?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      faultType: 'FaultType',
      queryCallUserInfo: 'QueryCallUserInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      faultType: 'string',
      queryCallUserInfo: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBody extends $dara.Model {
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  networkOperators?: string[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      factorList: 'FactorList',
      faultMetricData: 'FaultMetricData',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
      userDetail: 'UserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.factorList)) {
      $dara.Model.validateArray(this.factorList);
    }
    if(this.faultMetricData && typeof (this.faultMetricData as any).validate === 'function') {
      (this.faultMetricData as any).validate();
    }
    if(Array.isArray(this.networkOperators)) {
      $dara.Model.validateArray(this.networkOperators);
    }
    if(this.userDetail && typeof (this.userDetail as any).validate === 'function') {
      (this.userDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisUserDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisUserDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @example
   * JOIN_SLOW,AUDIO_STUCK
   */
  faultTypes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      faultTypes: 'FaultTypes',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      faultTypes: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCnt?: number;
  userList?: DescribeFaultDiagnosisUserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaultDiagnosisUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFaultDiagnosisUserListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListRequest extends $dara.Model {
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
   * 2
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponseBody extends $dara.Model {
  layouts?: DescribeMPULayoutInfoListResponseBodyLayouts;
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
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
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: DescribeMPULayoutInfoListResponseBodyLayouts,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.layouts && typeof (this.layouts as any).validate === 'function') {
      (this.layouts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMPULayoutInfoListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMPULayoutInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMPULayoutInfoListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      subUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBody extends $dara.Model {
  /**
   * @example
   * IN
   */
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'CallStatus',
      pubUserDetailList: 'PubUserDetailList',
      requestId: 'RequestId',
      subUserDetail: 'SubUserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      requestId: 'string',
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
    };
  }

  validate() {
    if(Array.isArray(this.pubUserDetailList)) {
      $dara.Model.validateArray(this.pubUserDetailList);
    }
    if(this.subUserDetail && typeof (this.subUserDetail as any).validate === 'function') {
      (this.subUserDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePubUserListBySubUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePubUserListBySubUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBody extends $dara.Model {
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  videoData?: DescribeQoeMetricDataResponseBodyVideoData[];
  static names(): { [key: string]: string } {
    return {
      audioData: 'AudioData',
      requestId: 'RequestId',
      videoData: 'VideoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioData },
      requestId: 'string',
      videoData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoData },
    };
  }

  validate() {
    if(Array.isArray(this.audioData)) {
      $dara.Model.validateArray(this.audioData);
    }
    if(Array.isArray(this.videoData)) {
      $dara.Model.validateArray(this.videoData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQoeMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQoeMetricDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @example
   * 中国
   */
  parentArea?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      parentArea: 'string',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBody extends $dara.Model {
  qualityStatDataList?: DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityStatDataList)) {
      $dara.Model.validateArray(this.qualityStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityAreaDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CHANNEL_ONLINE
   */
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBody extends $dara.Model {
  qualityStatDataList?: DescribeQualityDistributionStatDataResponseBodyQualityStatDataList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityStatDataList)) {
      $dara.Model.validateArray(this.qualityStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBody extends $dara.Model {
  qualityOsSdkVersionStatDataList?: DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOsSdkVersionStatDataList: 'QualityOsSdkVersionStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOsSdkVersionStatDataList: { 'type': 'array', 'itemType': DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityOsSdkVersionStatDataList)) {
      $dara.Model.validateArray(this.qualityOsSdkVersionStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBody extends $dara.Model {
  qualityOverallData?: DescribeQualityOverallDataResponseBodyQualityOverallData[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOverallData: 'QualityOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOverallData: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityOverallData)) {
      $dara.Model.validateArray(this.qualityOverallData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeQualityOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeQualityOverallDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesRequest extends $dara.Model {
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
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 2020-11-02T17:36:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2020-11-01T17:36:00Z
   */
  startTime?: string;
  /**
   * @example
   * yourTaskId
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponseBody extends $dara.Model {
  recordFiles?: DescribeRecordFilesResponseBodyRecordFiles[];
  /**
   * @example
   * 760bad53276431c499e30dc36f6b****
   */
  requestId?: string;
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
      recordFiles: 'RecordFiles',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordFiles: { 'type': 'array', 'itemType': DescribeRecordFilesResponseBodyRecordFiles },
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordFiles)) {
      $dara.Model.validateArray(this.recordFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecordFilesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * 1
   */
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 76dasgb****
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
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

export class DescribeRecordTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecordTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListRequest extends $dara.Model {
  /**
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  serviceArea?: string;
  /**
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  /**
   * @example
   * testUser
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      serviceArea: 'ServiceArea',
      sortType: 'SortType',
      timePoint: 'TimePoint',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      serviceArea: 'string',
      sortType: 'string',
      timePoint: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBody extends $dara.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelList;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: DescribeRtcChannelListResponseBodyChannelList,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(this.channelList && typeof (this.channelList as any).validate === 'function') {
      (this.channelList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcChannelListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcChannelListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBody extends $dara.Model {
  channelMetricInfo?: DescribeRtcChannelMetricResponseBodyChannelMetricInfo;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelMetricInfo: 'ChannelMetricInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetricInfo: DescribeRtcChannelMetricResponseBodyChannelMetricInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.channelMetricInfo && typeof (this.channelMetricInfo as any).validate === 'function') {
      (this.channelMetricInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcChannelMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcChannelMetricResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataRequest extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2020-02-04T07:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2020-02-04T05:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBody extends $dara.Model {
  durationDataPerInterval?: DescribeRtcDurationDataResponseBodyDurationDataPerInterval;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      durationDataPerInterval: 'DurationDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationDataPerInterval: DescribeRtcDurationDataResponseBodyDurationDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.durationDataPerInterval && typeof (this.durationDataPerInterval as any).validate === 'function') {
      (this.durationDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcDurationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcDurationDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataRequest extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBody extends $dara.Model {
  peakChannelCntDataPerInterval?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      peakChannelCntDataPerInterval: 'PeakChannelCntDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntDataPerInterval: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.peakChannelCntDataPerInterval && typeof (this.peakChannelCntDataPerInterval as any).validate === 'function') {
      (this.peakChannelCntDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcPeakChannelCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcPeakChannelCntDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataRequest extends $dara.Model {
  /**
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 2018-01-29T01:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  userCntDataPerInterval?: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userCntDataPerInterval: 'UserCntDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userCntDataPerInterval: DescribeRtcUserCntDataResponseBodyUserCntDataPerInterval,
    };
  }

  validate() {
    if(this.userCntDataPerInterval && typeof (this.userCntDataPerInterval as any).validate === 'function') {
      (this.userCntDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserCntDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRtcUserCntDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRtcUserCntDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamingOutStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1qaz***x
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testChannel
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * taskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamingOutStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamingOutStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamingOutStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStreamingOutStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponseBody extends $dara.Model {
  layouts?: DescribeSystemLayoutListResponseBodyLayouts;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalNum?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      layouts: 'Layouts',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layouts: DescribeSystemLayoutListResponseBodyLayouts,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.layouts && typeof (this.layouts as any).validate === 'function') {
      (this.layouts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemLayoutListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemLayoutListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSystemLayoutListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: string;
  parentArea?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'string',
      parentArea: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageAreaStatList: 'UsageAreaStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageAreaStatList)) {
      $dara.Model.validateArray(this.usageAreaStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageAreaDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CHANNEL_ONLINE
   */
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageStatList: 'UsageStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageStatList)) {
      $dara.Model.validateArray(this.usageStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
    };
  }

  validate() {
    if(Array.isArray(this.usageOsSdkVersionStatList)) {
      $dara.Model.validateArray(this.usageOsSdkVersionStatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * a2hz****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ONLINE_USER_PEAK
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageOverallData?: DescribeUsageOverallDataResponseBodyUsageOverallData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOverallData: 'UsageOverallData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOverallData: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallData },
    };
  }

  validate() {
    if(Array.isArray(this.usageOverallData)) {
      $dara.Model.validateArray(this.usageOverallData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUsageOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsageOverallDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  isChannelExist?: boolean;
  /**
   * @example
   * true
   */
  isInChannel?: boolean;
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      isChannelExist: 'IsChannelExist',
      isInChannel: 'IsInChannel',
      property: 'Property',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isChannelExist: 'boolean',
      isInChannel: 'boolean',
      property: { 'type': 'array', 'itemType': DescribeUserInfoInChannelResponseBodyProperty },
      requestId: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserInfoInChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserInfoInChannelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMPUTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMPUTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMPUTaskStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * defaultName
   */
  appName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppCallbackStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppCallbackStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F80AAC02-87BD-5D9C-B925-8AB40171BA1A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppCallbackStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppCallbackStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppCallbackStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  layout?: ModifyAppLayoutRequestLayout;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layout: ModifyAppLayoutRequestLayout,
    };
  }

  validate() {
    if(this.layout && typeof (this.layout as any).validate === 'function') {
      (this.layout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLayoutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  layoutShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layoutShrink: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layoutShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppLayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppLayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLiveStreamStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726xxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLiveStreamStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppLiveStreamStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppLiveStreamStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppLiveStreamStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726xxxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D53303DB-AA68-5D09-90C2-A345072DCC5A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppRecordStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplate?: ModifyAppRecordTemplateRequestRecordTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplate: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplate: ModifyAppRecordTemplateRequestRecordTemplate,
    };
  }

  validate() {
    if(this.recordTemplate && typeof (this.recordTemplate as any).validate === 'function') {
      (this.recordTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      recordTemplateShrink: 'RecordTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      recordTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplate?: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplate: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplate: ModifyAppStreamingOutTemplateRequestStreamingOutTemplate,
    };
  }

  validate() {
    if(this.streamingOutTemplate && typeof (this.streamingOutTemplate as any).validate === 'function') {
      (this.streamingOutTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wv7N****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  streamingOutTemplateShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      streamingOutTemplateShrink: 'StreamingOutTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      streamingOutTemplateShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  /**
   * @example
   * ac7N****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppStreamingOutTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAppStreamingOutTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAppStreamingOutTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: ModifyCallbackMetaRequestCallback;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: ModifyCallbackMetaRequestCallback,
      ownerId: 'number',
    };
  }

  validate() {
    if(this.callback && typeof (this.callback as any).validate === 'function') {
      (this.callback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * httpStatusCode
   * 
   * @example
   * 0
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCallbackMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyCallbackMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyCallbackMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutRequest extends $dara.Model {
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
   * 3
   */
  audioMixCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10117
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  panes?: ModifyMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
      panes: { 'type': 'array', 'itemType': ModifyMPULayoutRequestPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMPULayoutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMPULayoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyMPULayoutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1811xxxx
   */
  terminalIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      terminalIds: 'TerminalIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      terminalIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.terminalIds)) {
      $dara.Model.validateArray(this.terminalIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  terminals?: RemoveTerminalsResponseBodyTerminals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      terminals: 'Terminals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      terminals: RemoveTerminalsResponseBodyTerminals,
    };
  }

  validate() {
    if(this.terminals && typeof (this.terminals as any).validate === 'function') {
      (this.terminals as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTerminalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveTerminalsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  users?: RemoveUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: RemoveUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': RemoveUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: StartCategoryCallbackRequestCallback;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: StartCategoryCallbackRequestCallback,
    };
  }

  validate() {
    if(this.callback && typeof (this.callback as any).validate === 'function') {
      (this.callback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCategoryCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCategoryCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCategoryCallbackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2ws***z3
   */
  appId?: string;
  autoChapters?: StartCloudNoteRequestAutoChapters;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  customPrompt?: StartCloudNoteRequestCustomPrompt;
  languageHints?: string[];
  meetingAssistance?: StartCloudNoteRequestMeetingAssistance;
  serviceInspection?: StartCloudNoteRequestServiceInspection;
  /**
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageConfig?: StartCloudNoteRequestStorageConfig;
  summarization?: StartCloudNoteRequestSummarization;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  textPolish?: StartCloudNoteRequestTextPolish;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoChapters: 'AutoChapters',
      channelId: 'ChannelId',
      customPrompt: 'CustomPrompt',
      languageHints: 'LanguageHints',
      meetingAssistance: 'MeetingAssistance',
      serviceInspection: 'ServiceInspection',
      sourceLanguage: 'SourceLanguage',
      storageConfig: 'StorageConfig',
      summarization: 'Summarization',
      taskId: 'TaskId',
      textPolish: 'TextPolish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoChapters: StartCloudNoteRequestAutoChapters,
      channelId: 'string',
      customPrompt: StartCloudNoteRequestCustomPrompt,
      languageHints: { 'type': 'array', 'itemType': 'string' },
      meetingAssistance: StartCloudNoteRequestMeetingAssistance,
      serviceInspection: StartCloudNoteRequestServiceInspection,
      sourceLanguage: 'string',
      storageConfig: StartCloudNoteRequestStorageConfig,
      summarization: StartCloudNoteRequestSummarization,
      taskId: 'string',
      textPolish: StartCloudNoteRequestTextPolish,
    };
  }

  validate() {
    if(this.autoChapters && typeof (this.autoChapters as any).validate === 'function') {
      (this.autoChapters as any).validate();
    }
    if(this.customPrompt && typeof (this.customPrompt as any).validate === 'function') {
      (this.customPrompt as any).validate();
    }
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    if(this.meetingAssistance && typeof (this.meetingAssistance as any).validate === 'function') {
      (this.meetingAssistance as any).validate();
    }
    if(this.serviceInspection && typeof (this.serviceInspection as any).validate === 'function') {
      (this.serviceInspection as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    if(this.summarization && typeof (this.summarization as any).validate === 'function') {
      (this.summarization as any).validate();
    }
    if(this.textPolish && typeof (this.textPolish as any).validate === 'function') {
      (this.textPolish as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2ws***z3
   */
  appId?: string;
  autoChaptersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  customPromptShrink?: string;
  languageHints?: string[];
  meetingAssistanceShrink?: string;
  serviceInspectionShrink?: string;
  /**
   * @example
   * cn
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageConfig?: StartCloudNoteShrinkRequestStorageConfig;
  summarizationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  textPolishShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoChaptersShrink: 'AutoChapters',
      channelId: 'ChannelId',
      customPromptShrink: 'CustomPrompt',
      languageHints: 'LanguageHints',
      meetingAssistanceShrink: 'MeetingAssistance',
      serviceInspectionShrink: 'ServiceInspection',
      sourceLanguage: 'SourceLanguage',
      storageConfig: 'StorageConfig',
      summarizationShrink: 'Summarization',
      taskId: 'TaskId',
      textPolishShrink: 'TextPolish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoChaptersShrink: 'string',
      channelId: 'string',
      customPromptShrink: 'string',
      languageHints: { 'type': 'array', 'itemType': 'string' },
      meetingAssistanceShrink: 'string',
      serviceInspectionShrink: 'string',
      sourceLanguage: 'string',
      storageConfig: StartCloudNoteShrinkRequestStorageConfig,
      summarizationShrink: 'string',
      taskId: 'string',
      textPolishShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudNoteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCloudNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCloudNoteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartCloudRecordRequestBackgrounds[];
  /**
   * @remarks
   * channelName
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartCloudRecordRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordRequestImages[];
  layoutSpecifiedUsers?: StartCloudRecordRequestLayoutSpecifiedUsers;
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordRequestPanes[];
  regionColor?: StartCloudRecordRequestRegionColor;
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordRequestStorageConfig;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * templateId
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      storageConfig: 'StorageConfig',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestImages },
      layoutSpecifiedUsers: StartCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartCloudRecordRequestPanes },
      regionColor: StartCloudRecordRequestRegionColor,
      storageConfig: StartCloudRecordRequestStorageConfig,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartCloudRecordShrinkRequestBackgrounds[];
  /**
   * @remarks
   * channelName
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartCloudRecordShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordShrinkRequestPanes[];
  regionColor?: StartCloudRecordShrinkRequestRegionColor;
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordShrinkRequestStorageConfig;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * templateId
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartCloudRecordShrinkRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      storageConfig: 'StorageConfig',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanes },
      regionColor: StartCloudRecordShrinkRequestRegionColor,
      storageConfig: StartCloudRecordShrinkRequestStorageConfig,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCloudRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartCloudRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskRequest extends $dara.Model {
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
  backgrounds?: StartMPUTaskRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  clockWidgets?: StartMPUTaskRequestClockWidgets[];
  /**
   * @example
   * 1
   */
  cropMode?: number;
  enhancedParam?: StartMPUTaskRequestEnhancedParam;
  /**
   * @example
   * 1
   */
  layoutIds?: number[];
  /**
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  payloadType?: number;
  /**
   * @example
   * 0
   */
  reportVad?: number;
  /**
   * @example
   * 0
   */
  rtpExtInfo?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @example
   * audioUserID
   */
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @example
   * 0
   */
  taskType?: number;
  /**
   * @example
   * 15273582735
   */
  timeStampRef?: number;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartMPUTaskRequestUserPanes[];
  /**
   * @example
   * 86400
   */
  vadInterval?: number;
  watermarks?: StartMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      enhancedParam: 'EnhancedParam',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      payloadType: 'PayloadType',
      reportVad: 'ReportVad',
      rtpExtInfo: 'RtpExtInfo',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      streamURL: 'StreamURL',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskType: 'TaskType',
      timeStampRef: 'TimeStampRef',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      vadInterval: 'VadInterval',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': StartMPUTaskRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartMPUTaskRequestClockWidgets },
      cropMode: 'number',
      enhancedParam: StartMPUTaskRequestEnhancedParam,
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      payloadType: 'number',
      reportVad: 'number',
      rtpExtInfo: 'number',
      sourceType: 'string',
      streamType: 'number',
      streamURL: 'string',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskType: 'number',
      timeStampRef: 'number',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanes },
      vadInterval: 'number',
      watermarks: { 'type': 'array', 'itemType': StartMPUTaskRequestWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(this.enhancedParam && typeof (this.enhancedParam as any).validate === 'function') {
      (this.enhancedParam as any).validate();
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.subSpecAudioUsers)) {
      $dara.Model.validateArray(this.subSpecAudioUsers);
    }
    if(Array.isArray(this.subSpecCameraUsers)) {
      $dara.Model.validateArray(this.subSpecCameraUsers);
    }
    if(Array.isArray(this.subSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.subSpecShareScreenUsers);
    }
    if(Array.isArray(this.subSpecUsers)) {
      $dara.Model.validateArray(this.subSpecUsers);
    }
    if(Array.isArray(this.unsubSpecAudioUsers)) {
      $dara.Model.validateArray(this.unsubSpecAudioUsers);
    }
    if(Array.isArray(this.unsubSpecCameraUsers)) {
      $dara.Model.validateArray(this.unsubSpecCameraUsers);
    }
    if(Array.isArray(this.unsubSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.unsubSpecShareScreenUsers);
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
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

export class StartMPUTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartMPUTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartMPUTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @example
   * 1
   */
  cropMode?: number;
  /**
   * @example
   * 1111
   */
  layoutIds?: number[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  /**
   * @example
   * 1
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @example
   * 1
   */
  subSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  subSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
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
  /**
   * @example
   * 1
   */
  unsubSpecAudioUsers?: string[];
  /**
   * @example
   * 1
   */
  unsubSpecCameraUsers?: string[];
  /**
   * @example
   * 1
   */
  unsubSpecShareScreenUsers?: string[];
  userPanes?: StartRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      sourceType: 'string',
      streamType: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskProfile: 'string',
      templateId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanes },
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.subSpecAudioUsers)) {
      $dara.Model.validateArray(this.subSpecAudioUsers);
    }
    if(Array.isArray(this.subSpecCameraUsers)) {
      $dara.Model.validateArray(this.subSpecCameraUsers);
    }
    if(Array.isArray(this.subSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.subSpecShareScreenUsers);
    }
    if(Array.isArray(this.subSpecUsers)) {
      $dara.Model.validateArray(this.subSpecUsers);
    }
    if(Array.isArray(this.unsubSpecAudioUsers)) {
      $dara.Model.validateArray(this.unsubSpecAudioUsers);
    }
    if(Array.isArray(this.unsubSpecCameraUsers)) {
      $dara.Model.validateArray(this.unsubSpecCameraUsers);
    }
    if(Array.isArray(this.unsubSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.unsubSpecShareScreenUsers);
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRecordTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartStreamingOutRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutRequestImages[];
  layoutSpecifiedUsers?: StartStreamingOutRequestLayoutSpecifiedUsers;
  panes?: StartStreamingOutRequestPanes[];
  regionColor?: StartStreamingOutRequestRegionColor;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartStreamingOutRequestTexts[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestImages },
      layoutSpecifiedUsers: StartStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartStreamingOutRequestPanes },
      regionColor: StartStreamingOutRequestRegionColor,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestTexts },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartStreamingOutShrinkRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: StartStreamingOutShrinkRequestPanes[];
  regionColor?: StartStreamingOutShrinkRequestRegionColor;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartStreamingOutShrinkRequestTexts[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanes },
      regionColor: StartStreamingOutShrinkRequestRegionColor,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestTexts },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamingOutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartStreamingOutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: StopCategoryCallbackRequestCallback;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: StopCategoryCallbackRequestCallback,
    };
  }

  validate() {
    if(this.callback && typeof (this.callback as any).validate === 'function') {
      (this.callback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callbackShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2DCE8D7E-BE3B-54AB-8DAC-32F34BED0763
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCategoryCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCategoryCallbackResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopChannelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopChannelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudNoteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwsz1234
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  channelId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clientToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudNoteResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudNoteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCloudNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCloudNoteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCloudRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopCloudRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMPUTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopMPUTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopRecordTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamingOutResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamingOutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopStreamingOutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  channelIdPrefixes?: string[];
  channelIds?: string[];
  /**
   * @example
   * 20
   */
  mediaEncode?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://${domain}/${app}/${stream}
   */
  playDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  /**
   * @example
   * testRule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callBack: 'CallBack',
      channelIdPrefixes: 'ChannelIdPrefixes',
      channelIds: 'ChannelIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callBack: 'string',
      channelIdPrefixes: { 'type': 'array', 'itemType': 'string' },
      channelIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      ownerId: 'number',
      playDomain: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIdPrefixes)) {
      $dara.Model.validateArray(this.channelIdPrefixes);
    }
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoLiveStreamRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoLiveStreamRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAutoLiveStreamRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAutoLiveStreamRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateCloudRecordRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateCloudRecordRequestClockWidgets[];
  images?: UpdateCloudRecordRequestImages[];
  layoutSpecifiedUsers?: UpdateCloudRecordRequestLayoutSpecifiedUsers;
  panes?: UpdateCloudRecordRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestImages },
      layoutSpecifiedUsers: UpdateCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateCloudRecordShrinkRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateCloudRecordShrinkRequestClockWidgets[];
  images?: UpdateCloudRecordShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: UpdateCloudRecordShrinkRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateCloudRecordShrinkRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCloudRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCloudRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskRequest extends $dara.Model {
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
  backgrounds?: UpdateMPUTaskRequestBackgrounds[];
  clockWidgets?: UpdateMPUTaskRequestClockWidgets[];
  /**
   * @example
   * 1
   */
  cropMode?: number;
  layoutIds?: number[];
  /**
   * @example
   * 2
   */
  mediaEncode?: number;
  /**
   * @example
   * 0
   */
  mixMode?: number;
  ownerId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  /**
   * @example
   * 0
   */
  streamType?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testId
   */
  taskId?: string;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: UpdateMPUTaskRequestUserPanes[];
  watermarks?: UpdateMPUTaskRequestWatermarks[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgroundColor: 'BackgroundColor',
      backgrounds: 'Backgrounds',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      mixMode: 'MixMode',
      ownerId: 'OwnerId',
      sourceType: 'SourceType',
      streamType: 'StreamType',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgroundColor: 'number',
      backgrounds: { 'type': 'array', 'itemType': UpdateMPUTaskRequestBackgrounds },
      clockWidgets: { 'type': 'array', 'itemType': UpdateMPUTaskRequestClockWidgets },
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      mixMode: 'number',
      ownerId: 'number',
      sourceType: 'string',
      streamType: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanes },
      watermarks: { 'type': 'array', 'itemType': UpdateMPUTaskRequestWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.subSpecAudioUsers)) {
      $dara.Model.validateArray(this.subSpecAudioUsers);
    }
    if(Array.isArray(this.subSpecCameraUsers)) {
      $dara.Model.validateArray(this.subSpecCameraUsers);
    }
    if(Array.isArray(this.subSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.subSpecShareScreenUsers);
    }
    if(Array.isArray(this.subSpecUsers)) {
      $dara.Model.validateArray(this.subSpecUsers);
    }
    if(Array.isArray(this.unsubSpecAudioUsers)) {
      $dara.Model.validateArray(this.unsubSpecAudioUsers);
    }
    if(Array.isArray(this.unsubSpecCameraUsers)) {
      $dara.Model.validateArray(this.unsubSpecCameraUsers);
    }
    if(Array.isArray(this.unsubSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.unsubSpecShareScreenUsers);
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
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

export class UpdateMPUTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMPUTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMPUTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMPUTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  cropMode?: number;
  layoutIds?: number[];
  mediaEncode?: number;
  ownerId?: number;
  subSpecAudioUsers?: string[];
  subSpecCameraUsers?: string[];
  subSpecShareScreenUsers?: string[];
  /**
   * @example
   * userID
   */
  subSpecUsers?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  taskProfile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  unsubSpecAudioUsers?: string[];
  unsubSpecCameraUsers?: string[];
  unsubSpecShareScreenUsers?: string[];
  userPanes?: UpdateRecordTaskRequestUserPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      cropMode: 'CropMode',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      ownerId: 'OwnerId',
      subSpecAudioUsers: 'SubSpecAudioUsers',
      subSpecCameraUsers: 'SubSpecCameraUsers',
      subSpecShareScreenUsers: 'SubSpecShareScreenUsers',
      subSpecUsers: 'SubSpecUsers',
      taskId: 'TaskId',
      taskProfile: 'TaskProfile',
      templateId: 'TemplateId',
      unsubSpecAudioUsers: 'UnsubSpecAudioUsers',
      unsubSpecCameraUsers: 'UnsubSpecCameraUsers',
      unsubSpecShareScreenUsers: 'UnsubSpecShareScreenUsers',
      userPanes: 'UserPanes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      cropMode: 'number',
      layoutIds: { 'type': 'array', 'itemType': 'number' },
      mediaEncode: 'number',
      ownerId: 'number',
      subSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      subSpecUsers: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskProfile: 'string',
      templateId: 'string',
      unsubSpecAudioUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecCameraUsers: { 'type': 'array', 'itemType': 'string' },
      unsubSpecShareScreenUsers: { 'type': 'array', 'itemType': 'string' },
      userPanes: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanes },
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    if(Array.isArray(this.subSpecAudioUsers)) {
      $dara.Model.validateArray(this.subSpecAudioUsers);
    }
    if(Array.isArray(this.subSpecCameraUsers)) {
      $dara.Model.validateArray(this.subSpecCameraUsers);
    }
    if(Array.isArray(this.subSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.subSpecShareScreenUsers);
    }
    if(Array.isArray(this.subSpecUsers)) {
      $dara.Model.validateArray(this.subSpecUsers);
    }
    if(Array.isArray(this.unsubSpecAudioUsers)) {
      $dara.Model.validateArray(this.unsubSpecAudioUsers);
    }
    if(Array.isArray(this.unsubSpecCameraUsers)) {
      $dara.Model.validateArray(this.unsubSpecCameraUsers);
    }
    if(Array.isArray(this.unsubSpecShareScreenUsers)) {
      $dara.Model.validateArray(this.unsubSpecShareScreenUsers);
    }
    if(Array.isArray(this.userPanes)) {
      $dara.Model.validateArray(this.userPanes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRecordTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
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

export class UpdateRecordTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @example
   * 76dasgb****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRecordTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRecordTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateStreamingOutRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateStreamingOutRequestClockWidgets[];
  images?: UpdateStreamingOutRequestImages[];
  layoutSpecifiedUsers?: UpdateStreamingOutRequestLayoutSpecifiedUsers;
  panes?: UpdateStreamingOutRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateStreamingOutRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestImages },
      layoutSpecifiedUsers: UpdateStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateStreamingOutShrinkRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateStreamingOutShrinkRequestClockWidgets[];
  images?: UpdateStreamingOutShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: UpdateStreamingOutShrinkRequestPanes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: UpdateStreamingOutShrinkRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutResponseBody extends $dara.Model {
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStreamingOutResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStreamingOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStreamingOutResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rtc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - AddRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordTemplateResponse
   */
  async addRecordTemplateWithOptions(request: AddRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<AddRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!$dara.isNull(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!$dara.isNull(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddRecordTemplateResponse>(await this.callApi(params, req, runtime), new AddRecordTemplateResponse({}));
    } else {
      return $dara.cast<AddRecordTemplateResponse>(await this.execute(params, req, runtime), new AddRecordTemplateResponse({}));
    }

  }

  /**
   * @param request - AddRecordTemplateRequest
   * @returns AddRecordTemplateResponse
   */
  async addRecordTemplate(request: AddRecordTemplateRequest): Promise<AddRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 新增app自定义布局
   * 
   * @param tmpReq - CreateAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppLayoutResponse
   */
  async createAppLayoutWithOptions(tmpReq: CreateAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppLayoutResponse> {
    tmpReq.validate();
    let request = new CreateAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppLayoutResponse>(await this.callApi(params, req, runtime), new CreateAppLayoutResponse({}));
    } else {
      return $dara.cast<CreateAppLayoutResponse>(await this.execute(params, req, runtime), new CreateAppLayoutResponse({}));
    }

  }

  /**
   * 新增app自定义布局
   * 
   * @param request - CreateAppLayoutRequest
   * @returns CreateAppLayoutResponse
   */
  async createAppLayout(request: CreateAppLayoutRequest): Promise<CreateAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppLayoutWithOptions(request, runtime);
  }

  /**
   * 增加应用录制模版
   * 
   * @param tmpReq - CreateAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplateWithOptions(tmpReq: CreateAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new CreateAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppRecordTemplateResponse({}));
    } else {
      return $dara.cast<CreateAppRecordTemplateResponse>(await this.execute(params, req, runtime), new CreateAppRecordTemplateResponse({}));
    }

  }

  /**
   * 增加应用录制模版
   * 
   * @param request - CreateAppRecordTemplateRequest
   * @returns CreateAppRecordTemplateResponse
   */
  async createAppRecordTemplate(request: CreateAppRecordTemplateRequest): Promise<CreateAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 创建应用推流模版
   * 
   * @param tmpReq - CreateAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppStreamingOutTemplateResponse
   */
  async createAppStreamingOutTemplateWithOptions(tmpReq: CreateAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new CreateAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppStreamingOutTemplateResponse({}));
    } else {
      return $dara.cast<CreateAppStreamingOutTemplateResponse>(await this.execute(params, req, runtime), new CreateAppStreamingOutTemplateResponse({}));
    }

  }

  /**
   * 创建应用推流模版
   * 
   * @param request - CreateAppStreamingOutTemplateRequest
   * @returns CreateAppStreamingOutTemplateResponse
   */
  async createAppStreamingOutTemplate(request: CreateAppStreamingOutTemplateRequest): Promise<CreateAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoLiveStreamRuleResponse
   */
  async createAutoLiveStreamRuleWithOptions(request: CreateAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!$dara.isNull(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new CreateAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<CreateAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new CreateAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - CreateAutoLiveStreamRuleRequest
   * @returns CreateAutoLiveStreamRuleResponse
   */
  async createAutoLiveStreamRule(request: CreateAutoLiveStreamRuleRequest): Promise<CreateAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventSubscribeResponse
   */
  async createEventSubscribeWithOptions(request: CreateEventSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<CreateEventSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.events)) {
      query["Events"] = request.events;
    }

    if (!$dara.isNull(request.needCallbackAuth)) {
      query["NeedCallbackAuth"] = request.needCallbackAuth;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEventSubscribeResponse>(await this.callApi(params, req, runtime), new CreateEventSubscribeResponse({}));
    } else {
      return $dara.cast<CreateEventSubscribeResponse>(await this.execute(params, req, runtime), new CreateEventSubscribeResponse({}));
    }

  }

  /**
   * @param request - CreateEventSubscribeRequest
   * @returns CreateEventSubscribeResponse
   */
  async createEventSubscribe(request: CreateEventSubscribeRequest): Promise<CreateEventSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMPULayoutResponse
   */
  async createMPULayoutWithOptions(request: CreateMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<CreateMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMPULayoutResponse>(await this.callApi(params, req, runtime), new CreateMPULayoutResponse({}));
    } else {
      return $dara.cast<CreateMPULayoutResponse>(await this.execute(params, req, runtime), new CreateMPULayoutResponse({}));
    }

  }

  /**
   * @param request - CreateMPULayoutRequest
   * @returns CreateMPULayoutResponse
   */
  async createMPULayout(request: CreateMPULayoutRequest): Promise<CreateMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMPULayoutWithOptions(request, runtime);
  }

  /**
   * 删除app自定义布局
   * 
   * @param tmpReq - DeleteAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppLayoutResponse
   */
  async deleteAppLayoutWithOptions(tmpReq: DeleteAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAppLayoutResponse> {
    tmpReq.validate();
    let request = new DeleteAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppLayoutResponse>(await this.callApi(params, req, runtime), new DeleteAppLayoutResponse({}));
    } else {
      return $dara.cast<DeleteAppLayoutResponse>(await this.execute(params, req, runtime), new DeleteAppLayoutResponse({}));
    }

  }

  /**
   * 删除app自定义布局
   * 
   * @param request - DeleteAppLayoutRequest
   * @returns DeleteAppLayoutResponse
   */
  async deleteAppLayout(request: DeleteAppLayoutRequest): Promise<DeleteAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppLayoutWithOptions(request, runtime);
  }

  /**
   * 删除应用录制模版
   * 
   * @param tmpReq - DeleteAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplateWithOptions(tmpReq: DeleteAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new DeleteAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.template)) {
      request.templateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.template, "Template", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.templateShrink)) {
      query["Template"] = request.templateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAppRecordTemplateResponse({}));
    } else {
      return $dara.cast<DeleteAppRecordTemplateResponse>(await this.execute(params, req, runtime), new DeleteAppRecordTemplateResponse({}));
    }

  }

  /**
   * 删除应用录制模版
   * 
   * @param request - DeleteAppRecordTemplateRequest
   * @returns DeleteAppRecordTemplateResponse
   */
  async deleteAppRecordTemplate(request: DeleteAppRecordTemplateRequest): Promise<DeleteAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 删除应用推流模版
   * 
   * @param tmpReq - DeleteAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppStreamingOutTemplateResponse
   */
  async deleteAppStreamingOutTemplateWithOptions(tmpReq: DeleteAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new DeleteAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new DeleteAppStreamingOutTemplateResponse({}));
    } else {
      return $dara.cast<DeleteAppStreamingOutTemplateResponse>(await this.execute(params, req, runtime), new DeleteAppStreamingOutTemplateResponse({}));
    }

  }

  /**
   * 删除应用推流模版
   * 
   * @param request - DeleteAppStreamingOutTemplateRequest
   * @returns DeleteAppStreamingOutTemplateResponse
   */
  async deleteAppStreamingOutTemplate(request: DeleteAppStreamingOutTemplateRequest): Promise<DeleteAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoLiveStreamRuleResponse
   */
  async deleteAutoLiveStreamRuleWithOptions(request: DeleteAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DeleteAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<DeleteAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new DeleteAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - DeleteAutoLiveStreamRuleRequest
   * @returns DeleteAutoLiveStreamRuleResponse
   */
  async deleteAutoLiveStreamRule(request: DeleteAutoLiveStreamRuleRequest): Promise<DeleteAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChannelResponse
   */
  async deleteChannelWithOptions(request: DeleteChannelRequest, runtime: $dara.RuntimeOptions): Promise<DeleteChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteChannelResponse>(await this.callApi(params, req, runtime), new DeleteChannelResponse({}));
    } else {
      return $dara.cast<DeleteChannelResponse>(await this.execute(params, req, runtime), new DeleteChannelResponse({}));
    }

  }

  /**
   * @param request - DeleteChannelRequest
   * @returns DeleteChannelResponse
   */
  async deleteChannel(request: DeleteChannelRequest): Promise<DeleteChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteEventSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventSubscribeResponse
   */
  async deleteEventSubscribeWithOptions(request: DeleteEventSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEventSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.subscribeId)) {
      query["SubscribeId"] = request.subscribeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventSubscribe",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEventSubscribeResponse>(await this.callApi(params, req, runtime), new DeleteEventSubscribeResponse({}));
    } else {
      return $dara.cast<DeleteEventSubscribeResponse>(await this.execute(params, req, runtime), new DeleteEventSubscribeResponse({}));
    }

  }

  /**
   * @param request - DeleteEventSubscribeRequest
   * @returns DeleteEventSubscribeResponse
   */
  async deleteEventSubscribe(request: DeleteEventSubscribeRequest): Promise<DeleteEventSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventSubscribeWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMPULayoutResponse
   */
  async deleteMPULayoutWithOptions(request: DeleteMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<DeleteMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMPULayoutResponse>(await this.callApi(params, req, runtime), new DeleteMPULayoutResponse({}));
    } else {
      return $dara.cast<DeleteMPULayoutResponse>(await this.execute(params, req, runtime), new DeleteMPULayoutResponse({}));
    }

  }

  /**
   * @param request - DeleteMPULayoutRequest
   * @returns DeleteMPULayoutResponse
   */
  async deleteMPULayout(request: DeleteMPULayoutRequest): Promise<DeleteMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMPULayoutWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordTemplateResponse
   */
  async deleteRecordTemplateWithOptions(request: DeleteRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRecordTemplateResponse>(await this.callApi(params, req, runtime), new DeleteRecordTemplateResponse({}));
    } else {
      return $dara.cast<DeleteRecordTemplateResponse>(await this.execute(params, req, runtime), new DeleteRecordTemplateResponse({}));
    }

  }

  /**
   * @param request - DeleteRecordTemplateRequest
   * @returns DeleteRecordTemplateResponse
   */
  async deleteRecordTemplate(request: DeleteRecordTemplateRequest): Promise<DeleteRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 列出系统支持的事件回调
   * 
   * @param request - DescribeAllCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallbackWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeAllCallbackResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAllCallbackResponse>(await this.callApi(params, req, runtime), new DescribeAllCallbackResponse({}));
    } else {
      return $dara.cast<DescribeAllCallbackResponse>(await this.execute(params, req, runtime), new DescribeAllCallbackResponse({}));
    }

  }

  /**
   * 列出系统支持的事件回调
   * @returns DescribeAllCallbackResponse
   */
  async describeAllCallback(): Promise<DescribeAllCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllCallbackWithOptions(runtime);
  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatusWithOptions(request: DescribeAppCallStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppCallStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppCallStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppCallStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppCallStatusResponse({}));
    } else {
      return $dara.cast<DescribeAppCallStatusResponse>(await this.execute(params, req, runtime), new DescribeAppCallStatusResponse({}));
    }

  }

  /**
   * 查看app回调开关
   * 
   * @param request - DescribeAppCallStatusRequest
   * @returns DescribeAppCallStatusResponse
   */
  async describeAppCallStatus(request: DescribeAppCallStatusRequest): Promise<DescribeAppCallStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppCallStatusWithOptions(request, runtime);
  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKeyWithOptions(request: DescribeAppCallbackSecretKeyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppCallbackSecretKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppCallbackSecretKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppCallbackSecretKeyResponse>(await this.callApi(params, req, runtime), new DescribeAppCallbackSecretKeyResponse({}));
    } else {
      return $dara.cast<DescribeAppCallbackSecretKeyResponse>(await this.execute(params, req, runtime), new DescribeAppCallbackSecretKeyResponse({}));
    }

  }

  /**
   * 获取app回调密钥
   * 
   * @param request - DescribeAppCallbackSecretKeyRequest
   * @returns DescribeAppCallbackSecretKeyResponse
   */
  async describeAppCallbackSecretKey(request: DescribeAppCallbackSecretKeyRequest): Promise<DescribeAppCallbackSecretKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppCallbackSecretKeyWithOptions(request, runtime);
  }

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppKeyResponse
   */
  async describeAppKeyWithOptions(request: DescribeAppKeyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppKey",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppKeyResponse>(await this.callApi(params, req, runtime), new DescribeAppKeyResponse({}));
    } else {
      return $dara.cast<DescribeAppKeyResponse>(await this.execute(params, req, runtime), new DescribeAppKeyResponse({}));
    }

  }

  /**
   * 查看AppKey
   * 
   * @param request - DescribeAppKeyRequest
   * @returns DescribeAppKeyResponse
   */
  async describeAppKey(request: DescribeAppKeyRequest): Promise<DescribeAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppKeyWithOptions(request, runtime);
  }

  /**
   * 查询app自定义布局
   * 
   * @param tmpReq - DescribeAppLayoutsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayoutsWithOptions(tmpReq: DescribeAppLayoutsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppLayoutsResponse> {
    tmpReq.validate();
    let request = new DescribeAppLayoutsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppLayouts",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppLayoutsResponse>(await this.callApi(params, req, runtime), new DescribeAppLayoutsResponse({}));
    } else {
      return $dara.cast<DescribeAppLayoutsResponse>(await this.execute(params, req, runtime), new DescribeAppLayoutsResponse({}));
    }

  }

  /**
   * 查询app自定义布局
   * 
   * @param request - DescribeAppLayoutsRequest
   * @returns DescribeAppLayoutsResponse
   */
  async describeAppLayouts(request: DescribeAppLayoutsRequest): Promise<DescribeAppLayoutsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppLayoutsWithOptions(request, runtime);
  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatusWithOptions(request: DescribeAppLiveStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppLiveStreamStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppLiveStreamStatusResponse({}));
    } else {
      return $dara.cast<DescribeAppLiveStreamStatusResponse>(await this.execute(params, req, runtime), new DescribeAppLiveStreamStatusResponse({}));
    }

  }

  /**
   * 查看应用旁路开关
   * 
   * @param request - DescribeAppLiveStreamStatusRequest
   * @returns DescribeAppLiveStreamStatusResponse
   */
  async describeAppLiveStreamStatus(request: DescribeAppLiveStreamStatusRequest): Promise<DescribeAppLiveStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatusWithOptions(request: DescribeAppRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppRecordStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppRecordStatusResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordStatusResponse({}));
    } else {
      return $dara.cast<DescribeAppRecordStatusResponse>(await this.execute(params, req, runtime), new DescribeAppRecordStatusResponse({}));
    }

  }

  /**
   * 查询应用录制开关
   * 
   * @param request - DescribeAppRecordStatusRequest
   * @returns DescribeAppRecordStatusResponse
   */
  async describeAppRecordStatus(request: DescribeAppRecordStatusRequest): Promise<DescribeAppRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 应用录制模版列表
   * 
   * @param tmpReq - DescribeAppRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplatesWithOptions(tmpReq: DescribeAppRecordTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppRecordTemplatesResponse> {
    tmpReq.validate();
    let request = new DescribeAppRecordTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppRecordTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordTemplatesResponse({}));
    } else {
      return $dara.cast<DescribeAppRecordTemplatesResponse>(await this.execute(params, req, runtime), new DescribeAppRecordTemplatesResponse({}));
    }

  }

  /**
   * 应用录制模版列表
   * 
   * @param request - DescribeAppRecordTemplatesRequest
   * @returns DescribeAppRecordTemplatesResponse
   */
  async describeAppRecordTemplates(request: DescribeAppRecordTemplatesRequest): Promise<DescribeAppRecordTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * 查询录制列表
   * 
   * @param tmpReq - DescribeAppRecordingFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFilesWithOptions(tmpReq: DescribeAppRecordingFilesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppRecordingFilesResponse> {
    tmpReq.validate();
    let request = new DescribeAppRecordingFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppRecordingFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppRecordingFilesResponse>(await this.callApi(params, req, runtime), new DescribeAppRecordingFilesResponse({}));
    } else {
      return $dara.cast<DescribeAppRecordingFilesResponse>(await this.execute(params, req, runtime), new DescribeAppRecordingFilesResponse({}));
    }

  }

  /**
   * 查询录制列表
   * 
   * @param request - DescribeAppRecordingFilesRequest
   * @returns DescribeAppRecordingFilesResponse
   */
  async describeAppRecordingFiles(request: DescribeAppRecordingFilesRequest): Promise<DescribeAppRecordingFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppRecordingFilesWithOptions(request, runtime);
  }

  /**
   * 应用推流模版列表
   * 
   * @param tmpReq - DescribeAppStreamingOutTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
  async describeAppStreamingOutTemplatesWithOptions(tmpReq: DescribeAppStreamingOutTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppStreamingOutTemplatesResponse> {
    tmpReq.validate();
    let request = new DescribeAppStreamingOutTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.condition)) {
      request.conditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.condition, "Condition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.conditionShrink)) {
      query["Condition"] = request.conditionShrink;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppStreamingOutTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppStreamingOutTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeAppStreamingOutTemplatesResponse({}));
    } else {
      return $dara.cast<DescribeAppStreamingOutTemplatesResponse>(await this.execute(params, req, runtime), new DescribeAppStreamingOutTemplatesResponse({}));
    }

  }

  /**
   * 应用推流模版列表
   * 
   * @param request - DescribeAppStreamingOutTemplatesRequest
   * @returns DescribeAppStreamingOutTemplatesResponse
   */
  async describeAppStreamingOutTemplates(request: DescribeAppStreamingOutTemplatesRequest): Promise<DescribeAppStreamingOutTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppStreamingOutTemplatesWithOptions(request, runtime);
  }

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppsResponse
   */
  async describeAppsWithOptions(request: DescribeAppsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApps",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAppsResponse>(await this.callApi(params, req, runtime), new DescribeAppsResponse({}));
    } else {
      return $dara.cast<DescribeAppsResponse>(await this.execute(params, req, runtime), new DescribeAppsResponse({}));
    }

  }

  /**
   * App列表
   * 
   * @param request - DescribeAppsRequest
   * @returns DescribeAppsResponse
   */
  async describeApps(request: DescribeAppsRequest): Promise<DescribeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoLiveStreamRuleResponse
   */
  async describeAutoLiveStreamRuleWithOptions(request: DescribeAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DescribeAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<DescribeAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new DescribeAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - DescribeAutoLiveStreamRuleRequest
   * @returns DescribeAutoLiveStreamRuleResponse
   */
  async describeAutoLiveStreamRule(request: DescribeAutoLiveStreamRuleRequest): Promise<DescribeAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallResponse
   */
  async describeCallWithOptions(request: DescribeCallRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.extDataType)) {
      query["ExtDataType"] = request.extDataType;
    }

    if (!$dara.isNull(request.queryExpInfo)) {
      query["QueryExpInfo"] = request.queryExpInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCall",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCallResponse>(await this.callApi(params, req, runtime), new DescribeCallResponse({}));
    } else {
      return $dara.cast<DescribeCallResponse>(await this.execute(params, req, runtime), new DescribeCallResponse({}));
    }

  }

  /**
   * 调用DescribeCall获取单次通信详情。
   * 
   * @param request - DescribeCallRequest
   * @returns DescribeCallResponse
   */
  async describeCall(request: DescribeCallRequest): Promise<DescribeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallWithOptions(request, runtime);
  }

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallListResponse
   */
  async describeCallListWithOptions(request: DescribeCallListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCallListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callStatus)) {
      query["CallStatus"] = request.callStatus;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCallList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCallListResponse>(await this.callApi(params, req, runtime), new DescribeCallListResponse({}));
    } else {
      return $dara.cast<DescribeCallListResponse>(await this.execute(params, req, runtime), new DescribeCallListResponse({}));
    }

  }

  /**
   * 调用DescribeCallList分页查询时间范围内创建的通信信息。
   * 
   * @param request - DescribeCallListRequest
   * @returns DescribeCallListResponse
   */
  async describeCallList(request: DescribeCallListRequest): Promise<DescribeCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallListWithOptions(request, runtime);
  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacksWithOptions(request: DescribeCallbacksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCallbacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCallbacks",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCallbacksResponse>(await this.callApi(params, req, runtime), new DescribeCallbacksResponse({}));
    } else {
      return $dara.cast<DescribeCallbacksResponse>(await this.execute(params, req, runtime), new DescribeCallbacksResponse({}));
    }

  }

  /**
   * app事件回调列表
   * 
   * @param request - DescribeCallbacksRequest
   * @returns DescribeCallbacksResponse
   */
  async describeCallbacks(request: DescribeCallbacksRequest): Promise<DescribeCallbacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCallbacksWithOptions(request, runtime);
  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelResponse
   */
  async describeChannelWithOptions(request: DescribeChannelRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelResponse>(await this.callApi(params, req, runtime), new DescribeChannelResponse({}));
    } else {
      return $dara.cast<DescribeChannelResponse>(await this.execute(params, req, runtime), new DescribeChannelResponse({}));
    }

  }

  /**
   * DescribeChannel
   * 
   * @param request - DescribeChannelRequest
   * @returns DescribeChannelResponse
   */
  async describeChannel(request: DescribeChannelRequest): Promise<DescribeChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelWithOptions(request, runtime);
  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsersWithOptions(request: DescribeChannelAllUsersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelAllUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAllUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelAllUsersResponse>(await this.callApi(params, req, runtime), new DescribeChannelAllUsersResponse({}));
    } else {
      return $dara.cast<DescribeChannelAllUsersResponse>(await this.execute(params, req, runtime), new DescribeChannelAllUsersResponse({}));
    }

  }

  /**
   * 查询频道的所有参会者
   * 
   * @param request - DescribeChannelAllUsersRequest
   * @returns DescribeChannelAllUsersResponse
   */
  async describeChannelAllUsers(request: DescribeChannelAllUsersRequest): Promise<DescribeChannelAllUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAllUsersWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
  async describeChannelAreaDistributionStatDataWithOptions(request: DescribeChannelAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelAreaDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeChannelAreaDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeChannelAreaDistributionStatDataResponse({}));
    }

  }

  /**
   * 调用DescribeChannelAreaDistributionStatData获取频道地区分布统计数据。
   * 
   * @param request - DescribeChannelAreaDistributionStatDataRequest
   * @returns DescribeChannelAreaDistributionStatDataResponse
   */
  async describeChannelAreaDistributionStatData(request: DescribeChannelAreaDistributionStatDataRequest): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelDistributionStatDataResponse
   */
  async describeChannelDistributionStatDataWithOptions(request: DescribeChannelDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeChannelDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeChannelDistributionStatDataResponse({}));
    }

  }

  /**
   * 调用DescribeChannelDistributionStatData获取频道分布统计数据。
   * 
   * @param request - DescribeChannelDistributionStatDataRequest
   * @returns DescribeChannelDistributionStatDataResponse
   */
  async describeChannelDistributionStatData(request: DescribeChannelDistributionStatDataRequest): Promise<DescribeChannelDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelOverallDataResponse
   */
  async describeChannelOverallDataWithOptions(request: DescribeChannelOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelOverallDataResponse({}));
    } else {
      return $dara.cast<DescribeChannelOverallDataResponse>(await this.execute(params, req, runtime), new DescribeChannelOverallDataResponse({}));
    }

  }

  /**
   * 调用DescribeChannelOverallData查询频道概览数据。
   * 
   * @param request - DescribeChannelOverallDataRequest
   * @returns DescribeChannelOverallDataResponse
   */
  async describeChannelOverallData(request: DescribeChannelOverallDataRequest): Promise<DescribeChannelOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelParticipantsResponse
   */
  async describeChannelParticipantsWithOptions(request: DescribeChannelParticipantsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelParticipantsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelParticipants",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelParticipantsResponse>(await this.callApi(params, req, runtime), new DescribeChannelParticipantsResponse({}));
    } else {
      return $dara.cast<DescribeChannelParticipantsResponse>(await this.execute(params, req, runtime), new DescribeChannelParticipantsResponse({}));
    }

  }

  /**
   * @param request - DescribeChannelParticipantsRequest
   * @returns DescribeChannelParticipantsResponse
   */
  async describeChannelParticipants(request: DescribeChannelParticipantsRequest): Promise<DescribeChannelParticipantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelParticipantsWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelTopPubUserListResponse
   */
  async describeChannelTopPubUserListWithOptions(request: DescribeChannelTopPubUserListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelTopPubUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelTopPubUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelTopPubUserListResponse>(await this.callApi(params, req, runtime), new DescribeChannelTopPubUserListResponse({}));
    } else {
      return $dara.cast<DescribeChannelTopPubUserListResponse>(await this.execute(params, req, runtime), new DescribeChannelTopPubUserListResponse({}));
    }

  }

  /**
   * 调用DescribeChannelTopPubUserList获取频道内发布端的用户列表（按用户在线时长降序）。
   * 
   * @param request - DescribeChannelTopPubUserListRequest
   * @returns DescribeChannelTopPubUserListResponse
   */
  async describeChannelTopPubUserList(request: DescribeChannelTopPubUserListRequest): Promise<DescribeChannelTopPubUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelTopPubUserListWithOptions(request, runtime);
  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUserWithOptions(request: DescribeChannelUserRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelUserResponse>(await this.callApi(params, req, runtime), new DescribeChannelUserResponse({}));
    } else {
      return $dara.cast<DescribeChannelUserResponse>(await this.execute(params, req, runtime), new DescribeChannelUserResponse({}));
    }

  }

  /**
   * DescribeChannelUser
   * 
   * @param request - DescribeChannelUserRequest
   * @returns DescribeChannelUserResponse
   */
  async describeChannelUser(request: DescribeChannelUserRequest): Promise<DescribeChannelUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUserMetricsResponse
   */
  async describeChannelUserMetricsWithOptions(request: DescribeChannelUserMetricsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelUserMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUserMetrics",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelUserMetricsResponse>(await this.callApi(params, req, runtime), new DescribeChannelUserMetricsResponse({}));
    } else {
      return $dara.cast<DescribeChannelUserMetricsResponse>(await this.execute(params, req, runtime), new DescribeChannelUserMetricsResponse({}));
    }

  }

  /**
   * 调用DescribeChannelUserMetrics查询频道总览中的用户数据。
   * 
   * @param request - DescribeChannelUserMetricsRequest
   * @returns DescribeChannelUserMetricsResponse
   */
  async describeChannelUserMetrics(request: DescribeChannelUserMetricsRequest): Promise<DescribeChannelUserMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUserMetricsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeChannelUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelUsersResponse
   */
  async describeChannelUsersWithOptions(request: DescribeChannelUsersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannelUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelUsersResponse>(await this.callApi(params, req, runtime), new DescribeChannelUsersResponse({}));
    } else {
      return $dara.cast<DescribeChannelUsersResponse>(await this.execute(params, req, runtime), new DescribeChannelUsersResponse({}));
    }

  }

  /**
   * @param request - DescribeChannelUsersRequest
   * @returns DescribeChannelUsersResponse
   */
  async describeChannelUsers(request: DescribeChannelUsersRequest): Promise<DescribeChannelUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelUsersWithOptions(request, runtime);
  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChannelsResponse
   */
  async describeChannelsWithOptions(request: DescribeChannelsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeChannelsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeChannels",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeChannelsResponse>(await this.callApi(params, req, runtime), new DescribeChannelsResponse({}));
    } else {
      return $dara.cast<DescribeChannelsResponse>(await this.execute(params, req, runtime), new DescribeChannelsResponse({}));
    }

  }

  /**
   * 查询在线频道列表
   * 
   * @param request - DescribeChannelsRequest
   * @returns DescribeChannelsResponse
   */
  async describeChannels(request: DescribeChannelsRequest): Promise<DescribeChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeChannelsWithOptions(request, runtime);
  }

  /**
   * 纪要列表
   * 
   * @param tmpReq - DescribeCloudNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudNotesResponse
   */
  async describeCloudNotesWithOptions(tmpReq: DescribeCloudNotesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudNotesResponse> {
    tmpReq.validate();
    let request = new DescribeCloudNotesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudNotes",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudNotesResponse>(await this.callApi(params, req, runtime), new DescribeCloudNotesResponse({}));
    } else {
      return $dara.cast<DescribeCloudNotesResponse>(await this.execute(params, req, runtime), new DescribeCloudNotesResponse({}));
    }

  }

  /**
   * 纪要列表
   * 
   * @param request - DescribeCloudNotesRequest
   * @returns DescribeCloudNotesResponse
   */
  async describeCloudNotes(request: DescribeCloudNotesRequest): Promise<DescribeCloudNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudNotesWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointEventListResponse
   */
  async describeEndPointEventListWithOptions(request: DescribeEndPointEventListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEndPointEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndPointEventList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeEndPointEventListResponse>(await this.callApi(params, req, runtime), new DescribeEndPointEventListResponse({}));
    } else {
      return $dara.cast<DescribeEndPointEventListResponse>(await this.execute(params, req, runtime), new DescribeEndPointEventListResponse({}));
    }

  }

  /**
   * 调用DescribeEndPointEventList获取端对端用户事件列表。
   * 
   * @param request - DescribeEndPointEventListRequest
   * @returns DescribeEndPointEventListResponse
   */
  async describeEndPointEventList(request: DescribeEndPointEventListRequest): Promise<DescribeEndPointEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndPointEventListWithOptions(request, runtime);
  }

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEndPointMetricDataResponse
   */
  async describeEndPointMetricDataWithOptions(request: DescribeEndPointMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEndPointMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.pubCallIdList)) {
      query["PubCallIdList"] = request.pubCallIdList;
    }

    if (!$dara.isNull(request.pubUserId)) {
      query["PubUserId"] = request.pubUserId;
    }

    if (!$dara.isNull(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEndPointMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeEndPointMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeEndPointMetricDataResponse({}));
    } else {
      return $dara.cast<DescribeEndPointMetricDataResponse>(await this.execute(params, req, runtime), new DescribeEndPointMetricDataResponse({}));
    }

  }

  /**
   * 调用DescribeEndPointMetricData获取端对端指标数据。
   * 
   * @param request - DescribeEndPointMetricDataRequest
   * @returns DescribeEndPointMetricDataResponse
   */
  async describeEndPointMetricData(request: DescribeEndPointMetricDataRequest): Promise<DescribeEndPointMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEndPointMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
  async describeFaultDiagnosisFactorDistributionStatWithOptions(request: DescribeFaultDiagnosisFactorDistributionStatRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisFactorDistributionStat",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisFactorDistributionStatResponse({}));
    } else {
      return $dara.cast<DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.execute(params, req, runtime), new DescribeFaultDiagnosisFactorDistributionStatResponse({}));
    }

  }

  /**
   * 获取异常诊断影响因素分布
   * 
   * @param request - DescribeFaultDiagnosisFactorDistributionStatRequest
   * @returns DescribeFaultDiagnosisFactorDistributionStatResponse
   */
  async describeFaultDiagnosisFactorDistributionStat(request: DescribeFaultDiagnosisFactorDistributionStatRequest): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisFactorDistributionStatWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
  async describeFaultDiagnosisOverallDataWithOptions(request: DescribeFaultDiagnosisOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFaultDiagnosisOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisOverallDataResponse({}));
    } else {
      return $dara.cast<DescribeFaultDiagnosisOverallDataResponse>(await this.execute(params, req, runtime), new DescribeFaultDiagnosisOverallDataResponse({}));
    }

  }

  /**
   * 获取异常诊断总览数据
   * 
   * @param request - DescribeFaultDiagnosisOverallDataRequest
   * @returns DescribeFaultDiagnosisOverallDataResponse
   */
  async describeFaultDiagnosisOverallData(request: DescribeFaultDiagnosisOverallDataRequest): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisOverallDataWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
  async describeFaultDiagnosisUserDetailWithOptions(request: DescribeFaultDiagnosisUserDetailRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.faultType)) {
      query["FaultType"] = request.faultType;
    }

    if (!$dara.isNull(request.queryCallUserInfo)) {
      query["QueryCallUserInfo"] = request.queryCallUserInfo;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisUserDetail",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFaultDiagnosisUserDetailResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserDetailResponse({}));
    } else {
      return $dara.cast<DescribeFaultDiagnosisUserDetailResponse>(await this.execute(params, req, runtime), new DescribeFaultDiagnosisUserDetailResponse({}));
    }

  }

  /**
   * 获取异常诊断用户详情
   * 
   * @param request - DescribeFaultDiagnosisUserDetailRequest
   * @returns DescribeFaultDiagnosisUserDetailResponse
   */
  async describeFaultDiagnosisUserDetail(request: DescribeFaultDiagnosisUserDetailRequest): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserDetailWithOptions(request, runtime);
  }

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaultDiagnosisUserListResponse
   */
  async describeFaultDiagnosisUserListWithOptions(request: DescribeFaultDiagnosisUserListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaultDiagnosisUserListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.faultTypes)) {
      query["FaultTypes"] = request.faultTypes;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaultDiagnosisUserList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFaultDiagnosisUserListResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserListResponse({}));
    } else {
      return $dara.cast<DescribeFaultDiagnosisUserListResponse>(await this.execute(params, req, runtime), new DescribeFaultDiagnosisUserListResponse({}));
    }

  }

  /**
   * 获取异常诊断用户明细列表
   * 
   * @param request - DescribeFaultDiagnosisUserListRequest
   * @returns DescribeFaultDiagnosisUserListResponse
   */
  async describeFaultDiagnosisUserList(request: DescribeFaultDiagnosisUserListRequest): Promise<DescribeFaultDiagnosisUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaultDiagnosisUserListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMPULayoutInfoListResponse
   */
  async describeMPULayoutInfoListWithOptions(request: DescribeMPULayoutInfoListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMPULayoutInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMPULayoutInfoList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMPULayoutInfoListResponse>(await this.callApi(params, req, runtime), new DescribeMPULayoutInfoListResponse({}));
    } else {
      return $dara.cast<DescribeMPULayoutInfoListResponse>(await this.execute(params, req, runtime), new DescribeMPULayoutInfoListResponse({}));
    }

  }

  /**
   * @param request - DescribeMPULayoutInfoListRequest
   * @returns DescribeMPULayoutInfoListResponse
   */
  async describeMPULayoutInfoList(request: DescribeMPULayoutInfoListRequest): Promise<DescribeMPULayoutInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMPULayoutInfoListWithOptions(request, runtime);
  }

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePubUserListBySubUserResponse
   */
  async describePubUserListBySubUserWithOptions(request: DescribePubUserListBySubUserRequest, runtime: $dara.RuntimeOptions): Promise<DescribePubUserListBySubUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePubUserListBySubUser",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePubUserListBySubUserResponse>(await this.callApi(params, req, runtime), new DescribePubUserListBySubUserResponse({}));
    } else {
      return $dara.cast<DescribePubUserListBySubUserResponse>(await this.execute(params, req, runtime), new DescribePubUserListBySubUserResponse({}));
    }

  }

  /**
   * 调用DescribePubUserListBySubUser根据订阅端获取通信中发布端用户列表。
   * 
   * @param request - DescribePubUserListBySubUserRequest
   * @returns DescribePubUserListBySubUserResponse
   */
  async describePubUserListBySubUser(request: DescribePubUserListBySubUserRequest): Promise<DescribePubUserListBySubUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePubUserListBySubUserWithOptions(request, runtime);
  }

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQoeMetricDataResponse
   */
  async describeQoeMetricDataWithOptions(request: DescribeQoeMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeQoeMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!$dara.isNull(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQoeMetricData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeQoeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeQoeMetricDataResponse({}));
    } else {
      return $dara.cast<DescribeQoeMetricDataResponse>(await this.execute(params, req, runtime), new DescribeQoeMetricDataResponse({}));
    }

  }

  /**
   * 调用DescribeQoeMetricData获取单次通信中用户的下行体验质量指标。
   * 
   * @param request - DescribeQoeMetricDataRequest
   * @returns DescribeQoeMetricDataResponse
   */
  async describeQoeMetricData(request: DescribeQoeMetricDataRequest): Promise<DescribeQoeMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQoeMetricDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
  async describeQualityAreaDistributionStatDataWithOptions(request: DescribeQualityAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeQualityAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityAreaDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeQualityAreaDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeQualityAreaDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取质量统计区域分布统计数据
   * 
   * @param request - DescribeQualityAreaDistributionStatDataRequest
   * @returns DescribeQualityAreaDistributionStatDataResponse
   */
  async describeQualityAreaDistributionStatData(request: DescribeQualityAreaDistributionStatDataRequest): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityDistributionStatDataResponse
   */
  async describeQualityDistributionStatDataWithOptions(request: DescribeQualityDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeQualityDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeQualityDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeQualityDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeQualityDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取质量统计分布数据
   * 
   * @param request - DescribeQualityDistributionStatDataRequest
   * @returns DescribeQualityDistributionStatDataResponse
   */
  async describeQualityDistributionStatData(request: DescribeQualityDistributionStatDataRequest): Promise<DescribeQualityDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
  async describeQualityOsSdkVersionDistributionStatDataWithOptions(request: DescribeQualityOsSdkVersionDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取质量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeQualityOsSdkVersionDistributionStatDataRequest
   * @returns DescribeQualityOsSdkVersionDistributionStatDataResponse
   */
  async describeQualityOsSdkVersionDistributionStatData(request: DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQualityOverallDataResponse
   */
  async describeQualityOverallDataWithOptions(request: DescribeQualityOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeQualityOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQualityOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeQualityOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOverallDataResponse({}));
    } else {
      return $dara.cast<DescribeQualityOverallDataResponse>(await this.execute(params, req, runtime), new DescribeQualityOverallDataResponse({}));
    }

  }

  /**
   * 获取质量统计概览数据
   * 
   * @param request - DescribeQualityOverallDataRequest
   * @returns DescribeQualityOverallDataResponse
   */
  async describeQualityOverallData(request: DescribeQualityOverallDataRequest): Promise<DescribeQualityOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeQualityOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordFilesResponse
   */
  async describeRecordFilesWithOptions(request: DescribeRecordFilesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecordFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordFiles",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecordFilesResponse>(await this.callApi(params, req, runtime), new DescribeRecordFilesResponse({}));
    } else {
      return $dara.cast<DescribeRecordFilesResponse>(await this.execute(params, req, runtime), new DescribeRecordFilesResponse({}));
    }

  }

  /**
   * @param request - DescribeRecordFilesRequest
   * @returns DescribeRecordFilesResponse
   */
  async describeRecordFiles(request: DescribeRecordFilesRequest): Promise<DescribeRecordFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordFilesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordTemplatesResponse
   */
  async describeRecordTemplatesWithOptions(request: DescribeRecordTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecordTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecordTemplates",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecordTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeRecordTemplatesResponse({}));
    } else {
      return $dara.cast<DescribeRecordTemplatesResponse>(await this.execute(params, req, runtime), new DescribeRecordTemplatesResponse({}));
    }

  }

  /**
   * @param request - DescribeRecordTemplatesRequest
   * @returns DescribeRecordTemplatesResponse
   */
  async describeRecordTemplates(request: DescribeRecordTemplatesRequest): Promise<DescribeRecordTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelListResponse
   */
  async describeRtcChannelListWithOptions(request: DescribeRtcChannelListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRtcChannelListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcChannelList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRtcChannelListResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelListResponse({}));
    } else {
      return $dara.cast<DescribeRtcChannelListResponse>(await this.execute(params, req, runtime), new DescribeRtcChannelListResponse({}));
    }

  }

  /**
   * @param request - DescribeRtcChannelListRequest
   * @returns DescribeRtcChannelListResponse
   */
  async describeRtcChannelList(request: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcChannelListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcChannelMetricResponse
   */
  async describeRtcChannelMetricWithOptions(request: DescribeRtcChannelMetricRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRtcChannelMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcChannelMetric",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRtcChannelMetricResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelMetricResponse({}));
    } else {
      return $dara.cast<DescribeRtcChannelMetricResponse>(await this.execute(params, req, runtime), new DescribeRtcChannelMetricResponse({}));
    }

  }

  /**
   * @param request - DescribeRtcChannelMetricRequest
   * @returns DescribeRtcChannelMetricResponse
   */
  async describeRtcChannelMetric(request: DescribeRtcChannelMetricRequest): Promise<DescribeRtcChannelMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcChannelMetricWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcDurationDataResponse
   */
  async describeRtcDurationDataWithOptions(request: DescribeRtcDurationDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRtcDurationDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcDurationData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRtcDurationDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcDurationDataResponse({}));
    } else {
      return $dara.cast<DescribeRtcDurationDataResponse>(await this.execute(params, req, runtime), new DescribeRtcDurationDataResponse({}));
    }

  }

  /**
   * @param request - DescribeRtcDurationDataRequest
   * @returns DescribeRtcDurationDataResponse
   */
  async describeRtcDurationData(request: DescribeRtcDurationDataRequest): Promise<DescribeRtcDurationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcDurationDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
  async describeRtcPeakChannelCntDataWithOptions(request: DescribeRtcPeakChannelCntDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRtcPeakChannelCntDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcPeakChannelCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRtcPeakChannelCntDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcPeakChannelCntDataResponse({}));
    } else {
      return $dara.cast<DescribeRtcPeakChannelCntDataResponse>(await this.execute(params, req, runtime), new DescribeRtcPeakChannelCntDataResponse({}));
    }

  }

  /**
   * @param request - DescribeRtcPeakChannelCntDataRequest
   * @returns DescribeRtcPeakChannelCntDataResponse
   */
  async describeRtcPeakChannelCntData(request: DescribeRtcPeakChannelCntDataRequest): Promise<DescribeRtcPeakChannelCntDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcPeakChannelCntDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcUserCntDataResponse
   */
  async describeRtcUserCntDataWithOptions(request: DescribeRtcUserCntDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRtcUserCntDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcUserCntData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRtcUserCntDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcUserCntDataResponse({}));
    } else {
      return $dara.cast<DescribeRtcUserCntDataResponse>(await this.execute(params, req, runtime), new DescribeRtcUserCntDataResponse({}));
    }

  }

  /**
   * @param request - DescribeRtcUserCntDataRequest
   * @returns DescribeRtcUserCntDataResponse
   */
  async describeRtcUserCntData(request: DescribeRtcUserCntDataRequest): Promise<DescribeRtcUserCntDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcUserCntDataWithOptions(request, runtime);
  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatusWithOptions(request: DescribeStreamingOutStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStreamingOutStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamingOutStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStreamingOutStatusResponse>(await this.callApi(params, req, runtime), new DescribeStreamingOutStatusResponse({}));
    } else {
      return $dara.cast<DescribeStreamingOutStatusResponse>(await this.execute(params, req, runtime), new DescribeStreamingOutStatusResponse({}));
    }

  }

  /**
   * 查询旁路推流状态
   * 
   * @param request - DescribeStreamingOutStatusRequest
   * @returns DescribeStreamingOutStatusResponse
   */
  async describeStreamingOutStatus(request: DescribeStreamingOutStatusRequest): Promise<DescribeStreamingOutStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamingOutStatusWithOptions(request, runtime);
  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutListWithOptions(request: DescribeSystemLayoutListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSystemLayoutListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemLayoutList",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSystemLayoutListResponse>(await this.callApi(params, req, runtime), new DescribeSystemLayoutListResponse({}));
    } else {
      return $dara.cast<DescribeSystemLayoutListResponse>(await this.execute(params, req, runtime), new DescribeSystemLayoutListResponse({}));
    }

  }

  /**
   * 系统内置布局
   * 
   * @param request - DescribeSystemLayoutListRequest
   * @returns DescribeSystemLayoutListResponse
   */
  async describeSystemLayoutList(request: DescribeSystemLayoutListRequest): Promise<DescribeSystemLayoutListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemLayoutListWithOptions(request, runtime);
  }

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
  async describeUsageAreaDistributionStatDataWithOptions(request: DescribeUsageAreaDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageAreaDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUsageAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageAreaDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeUsageAreaDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeUsageAreaDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取用量统计地域分布数据
   * 
   * @param request - DescribeUsageAreaDistributionStatDataRequest
   * @returns DescribeUsageAreaDistributionStatDataResponse
   */
  async describeUsageAreaDistributionStatData(request: DescribeUsageAreaDistributionStatDataRequest): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageDistributionStatDataResponse
   */
  async describeUsageDistributionStatDataWithOptions(request: DescribeUsageDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUsageDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUsageDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeUsageDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeUsageDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取用量统计分布数据
   * 
   * @param request - DescribeUsageDistributionStatDataRequest
   * @returns DescribeUsageDistributionStatDataResponse
   */
  async describeUsageDistributionStatData(request: DescribeUsageDistributionStatDataRequest): Promise<DescribeUsageDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
  async describeUsageOsSdkVersionDistributionStatDataWithOptions(request: DescribeUsageOsSdkVersionDistributionStatDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageOsSdkVersionDistributionStatData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
    } else {
      return $dara.cast<DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.execute(params, req, runtime), new DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
    }

  }

  /**
   * 获取用量统计各操作系统下SDK版本分布数据
   * 
   * @param request - DescribeUsageOsSdkVersionDistributionStatDataRequest
   * @returns DescribeUsageOsSdkVersionDistributionStatDataResponse
   */
  async describeUsageOsSdkVersionDistributionStatData(request: DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, runtime);
  }

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsageOverallDataResponse
   */
  async describeUsageOverallDataWithOptions(request: DescribeUsageOverallDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUsageOverallDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsageOverallData",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUsageOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOverallDataResponse({}));
    } else {
      return $dara.cast<DescribeUsageOverallDataResponse>(await this.execute(params, req, runtime), new DescribeUsageOverallDataResponse({}));
    }

  }

  /**
   * 获取用量统计概览数据
   * 
   * @param request - DescribeUsageOverallDataRequest
   * @returns DescribeUsageOverallDataResponse
   */
  async describeUsageOverallData(request: DescribeUsageOverallDataRequest): Promise<DescribeUsageOverallDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsageOverallDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserInfoInChannelResponse
   */
  async describeUserInfoInChannelWithOptions(request: DescribeUserInfoInChannelRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUserInfoInChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserInfoInChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUserInfoInChannelResponse>(await this.callApi(params, req, runtime), new DescribeUserInfoInChannelResponse({}));
    } else {
      return $dara.cast<DescribeUserInfoInChannelResponse>(await this.execute(params, req, runtime), new DescribeUserInfoInChannelResponse({}));
    }

  }

  /**
   * @param request - DescribeUserInfoInChannelRequest
   * @returns DescribeUserInfoInChannelResponse
   */
  async describeUserInfoInChannel(request: DescribeUserInfoInChannelRequest): Promise<DescribeUserInfoInChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserInfoInChannelWithOptions(request, runtime);
  }

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoLiveStreamRuleResponse
   */
  async disableAutoLiveStreamRuleWithOptions(request: DisableAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<DisableAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new DisableAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<DisableAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new DisableAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - DisableAutoLiveStreamRuleRequest
   * @returns DisableAutoLiveStreamRuleResponse
   */
  async disableAutoLiveStreamRule(request: DisableAutoLiveStreamRuleRequest): Promise<DisableAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoLiveStreamRuleResponse
   */
  async enableAutoLiveStreamRuleWithOptions(request: EnableAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<EnableAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new EnableAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<EnableAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new EnableAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - EnableAutoLiveStreamRuleRequest
   * @returns EnableAutoLiveStreamRuleResponse
   */
  async enableAutoLiveStreamRule(request: EnableAutoLiveStreamRuleRequest): Promise<EnableAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * @param request - GetMPUTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMPUTaskStatusResponse
   */
  async getMPUTaskStatusWithOptions(request: GetMPUTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetMPUTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMPUTaskStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMPUTaskStatusResponse>(await this.callApi(params, req, runtime), new GetMPUTaskStatusResponse({}));
    } else {
      return $dara.cast<GetMPUTaskStatusResponse>(await this.execute(params, req, runtime), new GetMPUTaskStatusResponse({}));
    }

  }

  /**
   * @param request - GetMPUTaskStatusRequest
   * @returns GetMPUTaskStatusResponse
   */
  async getMPUTaskStatus(request: GetMPUTaskStatusRequest): Promise<GetMPUTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMPUTaskStatusWithOptions(request, runtime);
  }

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppResponse
   */
  async modifyAppWithOptions(request: ModifyAppRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApp",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppResponse>(await this.callApi(params, req, runtime), new ModifyAppResponse({}));
    } else {
      return $dara.cast<ModifyAppResponse>(await this.execute(params, req, runtime), new ModifyAppResponse({}));
    }

  }

  /**
   * 修改App信息
   * 
   * @param request - ModifyAppRequest
   * @returns ModifyAppResponse
   */
  async modifyApp(request: ModifyAppRequest): Promise<ModifyAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppWithOptions(request, runtime);
  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatusWithOptions(request: ModifyAppCallbackStatusRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppCallbackStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppCallbackStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppCallbackStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppCallbackStatusResponse({}));
    } else {
      return $dara.cast<ModifyAppCallbackStatusResponse>(await this.execute(params, req, runtime), new ModifyAppCallbackStatusResponse({}));
    }

  }

  /**
   * 更新app回调事件开关
   * 
   * @param request - ModifyAppCallbackStatusRequest
   * @returns ModifyAppCallbackStatusResponse
   */
  async modifyAppCallbackStatus(request: ModifyAppCallbackStatusRequest): Promise<ModifyAppCallbackStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppCallbackStatusWithOptions(request, runtime);
  }

  /**
   * 修改app自定义布局
   * 
   * @param tmpReq - ModifyAppLayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppLayoutResponse
   */
  async modifyAppLayoutWithOptions(tmpReq: ModifyAppLayoutRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppLayoutResponse> {
    tmpReq.validate();
    let request = new ModifyAppLayoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layout)) {
      request.layoutShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layout, "Layout", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.layoutShrink)) {
      query["Layout"] = request.layoutShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppLayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppLayoutResponse>(await this.callApi(params, req, runtime), new ModifyAppLayoutResponse({}));
    } else {
      return $dara.cast<ModifyAppLayoutResponse>(await this.execute(params, req, runtime), new ModifyAppLayoutResponse({}));
    }

  }

  /**
   * 修改app自定义布局
   * 
   * @param request - ModifyAppLayoutRequest
   * @returns ModifyAppLayoutResponse
   */
  async modifyAppLayout(request: ModifyAppLayoutRequest): Promise<ModifyAppLayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppLayoutWithOptions(request, runtime);
  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatusWithOptions(request: ModifyAppLiveStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppLiveStreamStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppLiveStreamStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppLiveStreamStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppLiveStreamStatusResponse({}));
    } else {
      return $dara.cast<ModifyAppLiveStreamStatusResponse>(await this.execute(params, req, runtime), new ModifyAppLiveStreamStatusResponse({}));
    }

  }

  /**
   * 修改应用旁路开关
   * 
   * @param request - ModifyAppLiveStreamStatusRequest
   * @returns ModifyAppLiveStreamStatusResponse
   */
  async modifyAppLiveStreamStatus(request: ModifyAppLiveStreamStatusRequest): Promise<ModifyAppLiveStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppLiveStreamStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatusWithOptions(request: ModifyAppRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppRecordStatus",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppRecordStatusResponse>(await this.callApi(params, req, runtime), new ModifyAppRecordStatusResponse({}));
    } else {
      return $dara.cast<ModifyAppRecordStatusResponse>(await this.execute(params, req, runtime), new ModifyAppRecordStatusResponse({}));
    }

  }

  /**
   * 修改应用录制开关
   * 
   * @param request - ModifyAppRecordStatusRequest
   * @returns ModifyAppRecordStatusResponse
   */
  async modifyAppRecordStatus(request: ModifyAppRecordStatusRequest): Promise<ModifyAppRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppRecordStatusWithOptions(request, runtime);
  }

  /**
   * 修改应用录制模版
   * 
   * @param tmpReq - ModifyAppRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplateWithOptions(tmpReq: ModifyAppRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppRecordTemplateResponse> {
    tmpReq.validate();
    let request = new ModifyAppRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordTemplate)) {
      request.recordTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordTemplate, "RecordTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.recordTemplateShrink)) {
      query["RecordTemplate"] = request.recordTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppRecordTemplateResponse>(await this.callApi(params, req, runtime), new ModifyAppRecordTemplateResponse({}));
    } else {
      return $dara.cast<ModifyAppRecordTemplateResponse>(await this.execute(params, req, runtime), new ModifyAppRecordTemplateResponse({}));
    }

  }

  /**
   * 修改应用录制模版
   * 
   * @param request - ModifyAppRecordTemplateRequest
   * @returns ModifyAppRecordTemplateResponse
   */
  async modifyAppRecordTemplate(request: ModifyAppRecordTemplateRequest): Promise<ModifyAppRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新应用推流模版
   * 
   * @param tmpReq - ModifyAppStreamingOutTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppStreamingOutTemplateResponse
   */
  async modifyAppStreamingOutTemplateWithOptions(tmpReq: ModifyAppStreamingOutTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAppStreamingOutTemplateResponse> {
    tmpReq.validate();
    let request = new ModifyAppStreamingOutTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamingOutTemplate)) {
      request.streamingOutTemplateShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamingOutTemplate, "StreamingOutTemplate", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.streamingOutTemplateShrink)) {
      query["StreamingOutTemplate"] = request.streamingOutTemplateShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppStreamingOutTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAppStreamingOutTemplateResponse>(await this.callApi(params, req, runtime), new ModifyAppStreamingOutTemplateResponse({}));
    } else {
      return $dara.cast<ModifyAppStreamingOutTemplateResponse>(await this.execute(params, req, runtime), new ModifyAppStreamingOutTemplateResponse({}));
    }

  }

  /**
   * 更新应用推流模版
   * 
   * @param request - ModifyAppStreamingOutTemplateRequest
   * @returns ModifyAppStreamingOutTemplateResponse
   */
  async modifyAppStreamingOutTemplate(request: ModifyAppStreamingOutTemplateRequest): Promise<ModifyAppStreamingOutTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppStreamingOutTemplateWithOptions(request, runtime);
  }

  /**
   * 更新app回调
   * 
   * @param tmpReq - ModifyCallbackMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMetaWithOptions(tmpReq: ModifyCallbackMetaRequest, runtime: $dara.RuntimeOptions): Promise<ModifyCallbackMetaResponse> {
    tmpReq.validate();
    let request = new ModifyCallbackMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCallbackMeta",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyCallbackMetaResponse>(await this.callApi(params, req, runtime), new ModifyCallbackMetaResponse({}));
    } else {
      return $dara.cast<ModifyCallbackMetaResponse>(await this.execute(params, req, runtime), new ModifyCallbackMetaResponse({}));
    }

  }

  /**
   * 更新app回调
   * 
   * @param request - ModifyCallbackMetaRequest
   * @returns ModifyCallbackMetaResponse
   */
  async modifyCallbackMeta(request: ModifyCallbackMetaRequest): Promise<ModifyCallbackMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCallbackMetaWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyMPULayoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMPULayoutResponse
   */
  async modifyMPULayoutWithOptions(request: ModifyMPULayoutRequest, runtime: $dara.RuntimeOptions): Promise<ModifyMPULayoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.audioMixCount)) {
      query["AudioMixCount"] = request.audioMixCount;
    }

    if (!$dara.isNull(request.layoutId)) {
      query["LayoutId"] = request.layoutId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMPULayout",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyMPULayoutResponse>(await this.callApi(params, req, runtime), new ModifyMPULayoutResponse({}));
    } else {
      return $dara.cast<ModifyMPULayoutResponse>(await this.execute(params, req, runtime), new ModifyMPULayoutResponse({}));
    }

  }

  /**
   * @param request - ModifyMPULayoutRequest
   * @returns ModifyMPULayoutResponse
   */
  async modifyMPULayout(request: ModifyMPULayoutRequest): Promise<ModifyMPULayoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMPULayoutWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTerminalsResponse
   */
  async removeTerminalsWithOptions(request: RemoveTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<RemoveTerminalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.terminalIds)) {
      query["TerminalIds"] = request.terminalIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTerminals",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveTerminalsResponse>(await this.callApi(params, req, runtime), new RemoveTerminalsResponse({}));
    } else {
      return $dara.cast<RemoveTerminalsResponse>(await this.execute(params, req, runtime), new RemoveTerminalsResponse({}));
    }

  }

  /**
   * @param request - RemoveTerminalsRequest
   * @returns RemoveTerminalsResponse
   */
  async removeTerminals(request: RemoveTerminalsRequest): Promise<RemoveTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTerminalsWithOptions(request, runtime);
  }

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<RemoveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsers",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveUsersResponse>(await this.callApi(params, req, runtime), new RemoveUsersResponse({}));
    } else {
      return $dara.cast<RemoveUsersResponse>(await this.execute(params, req, runtime), new RemoveUsersResponse({}));
    }

  }

  /**
   * RemoveUsers
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * 开启某个事件回调
   * 
   * @param tmpReq - StartCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallbackWithOptions(tmpReq: StartCategoryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<StartCategoryCallbackResponse> {
    tmpReq.validate();
    let request = new StartCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartCategoryCallbackResponse>(await this.callApi(params, req, runtime), new StartCategoryCallbackResponse({}));
    } else {
      return $dara.cast<StartCategoryCallbackResponse>(await this.execute(params, req, runtime), new StartCategoryCallbackResponse({}));
    }

  }

  /**
   * 开启某个事件回调
   * 
   * @param request - StartCategoryCallbackRequest
   * @returns StartCategoryCallbackResponse
   */
  async startCategoryCallback(request: StartCategoryCallbackRequest): Promise<StartCategoryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * 开启智能纪要
   * 
   * @param tmpReq - StartCloudNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudNoteResponse
   */
  async startCloudNoteWithOptions(tmpReq: StartCloudNoteRequest, runtime: $dara.RuntimeOptions): Promise<StartCloudNoteResponse> {
    tmpReq.validate();
    let request = new StartCloudNoteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.autoChapters)) {
      request.autoChaptersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoChapters, "AutoChapters", "json");
    }

    if (!$dara.isNull(tmpReq.customPrompt)) {
      request.customPromptShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customPrompt, "CustomPrompt", "json");
    }

    if (!$dara.isNull(tmpReq.meetingAssistance)) {
      request.meetingAssistanceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.meetingAssistance, "MeetingAssistance", "json");
    }

    if (!$dara.isNull(tmpReq.serviceInspection)) {
      request.serviceInspectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceInspection, "ServiceInspection", "json");
    }

    if (!$dara.isNull(tmpReq.summarization)) {
      request.summarizationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.summarization, "Summarization", "json");
    }

    if (!$dara.isNull(tmpReq.textPolish)) {
      request.textPolishShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textPolish, "TextPolish", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoChaptersShrink)) {
      query["AutoChapters"] = request.autoChaptersShrink;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.customPromptShrink)) {
      query["CustomPrompt"] = request.customPromptShrink;
    }

    if (!$dara.isNull(request.languageHints)) {
      query["LanguageHints"] = request.languageHints;
    }

    if (!$dara.isNull(request.meetingAssistanceShrink)) {
      query["MeetingAssistance"] = request.meetingAssistanceShrink;
    }

    if (!$dara.isNull(request.serviceInspectionShrink)) {
      query["ServiceInspection"] = request.serviceInspectionShrink;
    }

    if (!$dara.isNull(request.sourceLanguage)) {
      query["SourceLanguage"] = request.sourceLanguage;
    }

    if (!$dara.isNull(request.storageConfig)) {
      query["StorageConfig"] = request.storageConfig;
    }

    if (!$dara.isNull(request.summarizationShrink)) {
      query["Summarization"] = request.summarizationShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.textPolishShrink)) {
      query["TextPolish"] = request.textPolishShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCloudNote",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartCloudNoteResponse>(await this.callApi(params, req, runtime), new StartCloudNoteResponse({}));
    } else {
      return $dara.cast<StartCloudNoteResponse>(await this.execute(params, req, runtime), new StartCloudNoteResponse({}));
    }

  }

  /**
   * 开启智能纪要
   * 
   * @param request - StartCloudNoteRequest
   * @returns StartCloudNoteResponse
   */
  async startCloudNote(request: StartCloudNoteRequest): Promise<StartCloudNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCloudNoteWithOptions(request, runtime);
  }

  /**
   * StartCloudRecord
   * 
   * @param tmpReq - StartCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCloudRecordResponse
   */
  async startCloudRecordWithOptions(tmpReq: StartCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<StartCloudRecordResponse> {
    tmpReq.validate();
    let request = new StartCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.storageConfig)) {
      query["StorageConfig"] = request.storageConfig;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartCloudRecordResponse>(await this.callApi(params, req, runtime), new StartCloudRecordResponse({}));
    } else {
      return $dara.cast<StartCloudRecordResponse>(await this.execute(params, req, runtime), new StartCloudRecordResponse({}));
    }

  }

  /**
   * StartCloudRecord
   * 
   * @param request - StartCloudRecordRequest
   * @returns StartCloudRecordResponse
   */
  async startCloudRecord(request: StartCloudRecordRequest): Promise<StartCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StartMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMPUTaskResponse
   */
  async startMPUTaskWithOptions(request: StartMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<StartMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payloadType)) {
      query["PayloadType"] = request.payloadType;
    }

    if (!$dara.isNull(request.reportVad)) {
      query["ReportVad"] = request.reportVad;
    }

    if (!$dara.isNull(request.rtpExtInfo)) {
      query["RtpExtInfo"] = request.rtpExtInfo;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.streamURL)) {
      query["StreamURL"] = request.streamURL;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.timeStampRef)) {
      query["TimeStampRef"] = request.timeStampRef;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!$dara.isNull(request.vadInterval)) {
      query["VadInterval"] = request.vadInterval;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enhancedParam)) {
      bodyFlat["EnhancedParam"] = request.enhancedParam;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartMPUTaskResponse>(await this.callApi(params, req, runtime), new StartMPUTaskResponse({}));
    } else {
      return $dara.cast<StartMPUTaskResponse>(await this.execute(params, req, runtime), new StartMPUTaskResponse({}));
    }

  }

  /**
   * @param request - StartMPUTaskRequest
   * @returns StartMPUTaskResponse
   */
  async startMPUTask(request: StartMPUTaskRequest): Promise<StartMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordTaskResponse
   */
  async startRecordTaskWithOptions(request: StartRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<StartRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartRecordTaskResponse>(await this.callApi(params, req, runtime), new StartRecordTaskResponse({}));
    } else {
      return $dara.cast<StartRecordTaskResponse>(await this.execute(params, req, runtime), new StartRecordTaskResponse({}));
    }

  }

  /**
   * @param request - StartRecordTaskRequest
   * @returns StartRecordTaskResponse
   */
  async startRecordTask(request: StartRecordTaskRequest): Promise<StartRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordTaskWithOptions(request, runtime);
  }

  /**
   * StartStreamingOut
   * 
   * @param tmpReq - StartStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartStreamingOutResponse
   */
  async startStreamingOutWithOptions(tmpReq: StartStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<StartStreamingOutResponse> {
    tmpReq.validate();
    let request = new StartStreamingOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.regionColor)) {
      query["RegionColor"] = request.regionColor;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartStreamingOutResponse>(await this.callApi(params, req, runtime), new StartStreamingOutResponse({}));
    } else {
      return $dara.cast<StartStreamingOutResponse>(await this.execute(params, req, runtime), new StartStreamingOutResponse({}));
    }

  }

  /**
   * StartStreamingOut
   * 
   * @param request - StartStreamingOutRequest
   * @returns StartStreamingOutResponse
   */
  async startStreamingOut(request: StartStreamingOutRequest): Promise<StartStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startStreamingOutWithOptions(request, runtime);
  }

  /**
   * 关闭某个事件回调
   * 
   * @param tmpReq - StopCategoryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallbackWithOptions(tmpReq: StopCategoryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<StopCategoryCallbackResponse> {
    tmpReq.validate();
    let request = new StopCategoryCallbackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callback)) {
      request.callbackShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callback, "Callback", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callbackShrink)) {
      query["Callback"] = request.callbackShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCategoryCallback",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopCategoryCallbackResponse>(await this.callApi(params, req, runtime), new StopCategoryCallbackResponse({}));
    } else {
      return $dara.cast<StopCategoryCallbackResponse>(await this.execute(params, req, runtime), new StopCategoryCallbackResponse({}));
    }

  }

  /**
   * 关闭某个事件回调
   * 
   * @param request - StopCategoryCallbackRequest
   * @returns StopCategoryCallbackResponse
   */
  async stopCategoryCallback(request: StopCategoryCallbackRequest): Promise<StopCategoryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCategoryCallbackWithOptions(request, runtime);
  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChannelResponse
   */
  async stopChannelWithOptions(request: StopChannelRequest, runtime: $dara.RuntimeOptions): Promise<StopChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopChannel",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopChannelResponse>(await this.callApi(params, req, runtime), new StopChannelResponse({}));
    } else {
      return $dara.cast<StopChannelResponse>(await this.execute(params, req, runtime), new StopChannelResponse({}));
    }

  }

  /**
   * 删除频道
   * 
   * @param request - StopChannelRequest
   * @returns StopChannelResponse
   */
  async stopChannel(request: StopChannelRequest): Promise<StopChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopChannelWithOptions(request, runtime);
  }

  /**
   * 停止智能纪要
   * 
   * @param request - StopCloudNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudNoteResponse
   */
  async stopCloudNoteWithOptions(request: StopCloudNoteRequest, runtime: $dara.RuntimeOptions): Promise<StopCloudNoteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCloudNote",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopCloudNoteResponse>(await this.callApi(params, req, runtime), new StopCloudNoteResponse({}));
    } else {
      return $dara.cast<StopCloudNoteResponse>(await this.execute(params, req, runtime), new StopCloudNoteResponse({}));
    }

  }

  /**
   * 停止智能纪要
   * 
   * @param request - StopCloudNoteRequest
   * @returns StopCloudNoteResponse
   */
  async stopCloudNote(request: StopCloudNoteRequest): Promise<StopCloudNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCloudNoteWithOptions(request, runtime);
  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecordWithOptions(request: StopCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<StopCloudRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopCloudRecordResponse>(await this.callApi(params, req, runtime), new StopCloudRecordResponse({}));
    } else {
      return $dara.cast<StopCloudRecordResponse>(await this.execute(params, req, runtime), new StopCloudRecordResponse({}));
    }

  }

  /**
   * StopCloudRecord
   * 
   * @param request - StopCloudRecordRequest
   * @returns StopCloudRecordResponse
   */
  async stopCloudRecord(request: StopCloudRecordRequest): Promise<StopCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - StopMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMPUTaskResponse
   */
  async stopMPUTaskWithOptions(request: StopMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<StopMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopMPUTaskResponse>(await this.callApi(params, req, runtime), new StopMPUTaskResponse({}));
    } else {
      return $dara.cast<StopMPUTaskResponse>(await this.execute(params, req, runtime), new StopMPUTaskResponse({}));
    }

  }

  /**
   * @param request - StopMPUTaskRequest
   * @returns StopMPUTaskResponse
   */
  async stopMPUTask(request: StopMPUTaskRequest): Promise<StopMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordTaskResponse
   */
  async stopRecordTaskWithOptions(request: StopRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<StopRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopRecordTaskResponse>(await this.callApi(params, req, runtime), new StopRecordTaskResponse({}));
    } else {
      return $dara.cast<StopRecordTaskResponse>(await this.execute(params, req, runtime), new StopRecordTaskResponse({}));
    }

  }

  /**
   * @param request - StopRecordTaskRequest
   * @returns StopRecordTaskResponse
   */
  async stopRecordTask(request: StopRecordTaskRequest): Promise<StopRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordTaskWithOptions(request, runtime);
  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOutWithOptions(request: StopStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<StopStreamingOutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopStreamingOutResponse>(await this.callApi(params, req, runtime), new StopStreamingOutResponse({}));
    } else {
      return $dara.cast<StopStreamingOutResponse>(await this.execute(params, req, runtime), new StopStreamingOutResponse({}));
    }

  }

  /**
   * StopStreamingOut
   * 
   * @param request - StopStreamingOutRequest
   * @returns StopStreamingOutResponse
   */
  async stopStreamingOut(request: StopStreamingOutRequest): Promise<StopStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopStreamingOutWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoLiveStreamRuleResponse
   */
  async updateAutoLiveStreamRuleWithOptions(request: UpdateAutoLiveStreamRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAutoLiveStreamRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callBack)) {
      query["CallBack"] = request.callBack;
    }

    if (!$dara.isNull(request.channelIdPrefixes)) {
      query["ChannelIdPrefixes"] = request.channelIdPrefixes;
    }

    if (!$dara.isNull(request.channelIds)) {
      query["ChannelIds"] = request.channelIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoLiveStreamRule",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAutoLiveStreamRuleResponse>(await this.callApi(params, req, runtime), new UpdateAutoLiveStreamRuleResponse({}));
    } else {
      return $dara.cast<UpdateAutoLiveStreamRuleResponse>(await this.execute(params, req, runtime), new UpdateAutoLiveStreamRuleResponse({}));
    }

  }

  /**
   * @param request - UpdateAutoLiveStreamRuleRequest
   * @returns UpdateAutoLiveStreamRuleResponse
   */
  async updateAutoLiveStreamRule(request: UpdateAutoLiveStreamRuleRequest): Promise<UpdateAutoLiveStreamRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoLiveStreamRuleWithOptions(request, runtime);
  }

  /**
   * 更新云端录制任务
   * 
   * @param tmpReq - UpdateCloudRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecordWithOptions(tmpReq: UpdateCloudRecordRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCloudRecordResponse> {
    tmpReq.validate();
    let request = new UpdateCloudRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudRecord",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCloudRecordResponse>(await this.callApi(params, req, runtime), new UpdateCloudRecordResponse({}));
    } else {
      return $dara.cast<UpdateCloudRecordResponse>(await this.execute(params, req, runtime), new UpdateCloudRecordResponse({}));
    }

  }

  /**
   * 更新云端录制任务
   * 
   * @param request - UpdateCloudRecordRequest
   * @returns UpdateCloudRecordResponse
   */
  async updateCloudRecord(request: UpdateCloudRecordRequest): Promise<UpdateCloudRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudRecordWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMPUTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMPUTaskResponse
   */
  async updateMPUTaskWithOptions(request: UpdateMPUTaskRequest, runtime: $dara.RuntimeOptions): Promise<UpdateMPUTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mixMode)) {
      query["MixMode"] = request.mixMode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMPUTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateMPUTaskResponse>(await this.callApi(params, req, runtime), new UpdateMPUTaskResponse({}));
    } else {
      return $dara.cast<UpdateMPUTaskResponse>(await this.execute(params, req, runtime), new UpdateMPUTaskResponse({}));
    }

  }

  /**
   * @param request - UpdateMPUTaskRequest
   * @returns UpdateMPUTaskResponse
   */
  async updateMPUTask(request: UpdateMPUTaskRequest): Promise<UpdateMPUTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMPUTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTaskResponse
   */
  async updateRecordTaskWithOptions(request: UpdateRecordTaskRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRecordTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.cropMode)) {
      query["CropMode"] = request.cropMode;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.subSpecAudioUsers)) {
      query["SubSpecAudioUsers"] = request.subSpecAudioUsers;
    }

    if (!$dara.isNull(request.subSpecCameraUsers)) {
      query["SubSpecCameraUsers"] = request.subSpecCameraUsers;
    }

    if (!$dara.isNull(request.subSpecShareScreenUsers)) {
      query["SubSpecShareScreenUsers"] = request.subSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.subSpecUsers)) {
      query["SubSpecUsers"] = request.subSpecUsers;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.unsubSpecAudioUsers)) {
      query["UnsubSpecAudioUsers"] = request.unsubSpecAudioUsers;
    }

    if (!$dara.isNull(request.unsubSpecCameraUsers)) {
      query["UnsubSpecCameraUsers"] = request.unsubSpecCameraUsers;
    }

    if (!$dara.isNull(request.unsubSpecShareScreenUsers)) {
      query["UnsubSpecShareScreenUsers"] = request.unsubSpecShareScreenUsers;
    }

    if (!$dara.isNull(request.userPanes)) {
      query["UserPanes"] = request.userPanes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordTask",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRecordTaskResponse>(await this.callApi(params, req, runtime), new UpdateRecordTaskResponse({}));
    } else {
      return $dara.cast<UpdateRecordTaskResponse>(await this.execute(params, req, runtime), new UpdateRecordTaskResponse({}));
    }

  }

  /**
   * @param request - UpdateRecordTaskRequest
   * @returns UpdateRecordTaskResponse
   */
  async updateRecordTask(request: UpdateRecordTaskRequest): Promise<UpdateRecordTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordTaskWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordTemplateResponse
   */
  async updateRecordTemplateWithOptions(request: UpdateRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.delayStopTime)) {
      query["DelayStopTime"] = request.delayStopTime;
    }

    if (!$dara.isNull(request.enableM3u8DateTime)) {
      query["EnableM3u8DateTime"] = request.enableM3u8DateTime;
    }

    if (!$dara.isNull(request.fileSplitInterval)) {
      query["FileSplitInterval"] = request.fileSplitInterval;
    }

    if (!$dara.isNull(request.formats)) {
      query["Formats"] = request.formats;
    }

    if (!$dara.isNull(request.httpCallbackUrl)) {
      query["HttpCallbackUrl"] = request.httpCallbackUrl;
    }

    if (!$dara.isNull(request.layoutIds)) {
      query["LayoutIds"] = request.layoutIds;
    }

    if (!$dara.isNull(request.mediaEncode)) {
      query["MediaEncode"] = request.mediaEncode;
    }

    if (!$dara.isNull(request.mnsQueue)) {
      query["MnsQueue"] = request.mnsQueue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!$dara.isNull(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.taskProfile)) {
      query["TaskProfile"] = request.taskProfile;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.watermarks)) {
      query["Watermarks"] = request.watermarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecordTemplate",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRecordTemplateResponse>(await this.callApi(params, req, runtime), new UpdateRecordTemplateResponse({}));
    } else {
      return $dara.cast<UpdateRecordTemplateResponse>(await this.execute(params, req, runtime), new UpdateRecordTemplateResponse({}));
    }

  }

  /**
   * @param request - UpdateRecordTemplateRequest
   * @returns UpdateRecordTemplateResponse
   */
  async updateRecordTemplate(request: UpdateRecordTemplateRequest): Promise<UpdateRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordTemplateWithOptions(request, runtime);
  }

  /**
   * 更新旁路推流任务
   * 
   * @param tmpReq - UpdateStreamingOutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOutWithOptions(tmpReq: UpdateStreamingOutRequest, runtime: $dara.RuntimeOptions): Promise<UpdateStreamingOutResponse> {
    tmpReq.validate();
    let request = new UpdateStreamingOutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.layoutSpecifiedUsers)) {
      request.layoutSpecifiedUsersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.layoutSpecifiedUsers, "LayoutSpecifiedUsers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backgrounds)) {
      query["Backgrounds"] = request.backgrounds;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clockWidgets)) {
      query["ClockWidgets"] = request.clockWidgets;
    }

    if (!$dara.isNull(request.images)) {
      query["Images"] = request.images;
    }

    if (!$dara.isNull(request.layoutSpecifiedUsersShrink)) {
      query["LayoutSpecifiedUsers"] = request.layoutSpecifiedUsersShrink;
    }

    if (!$dara.isNull(request.panes)) {
      query["Panes"] = request.panes;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.texts)) {
      query["Texts"] = request.texts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStreamingOut",
      version: "2018-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateStreamingOutResponse>(await this.callApi(params, req, runtime), new UpdateStreamingOutResponse({}));
    } else {
      return $dara.cast<UpdateStreamingOutResponse>(await this.execute(params, req, runtime), new UpdateStreamingOutResponse({}));
    }

  }

  /**
   * 更新旁路推流任务
   * 
   * @param request - UpdateStreamingOutRequest
   * @returns UpdateStreamingOutResponse
   */
  async updateStreamingOut(request: UpdateStreamingOutRequest): Promise<UpdateStreamingOutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStreamingOutWithOptions(request, runtime);
  }

}
