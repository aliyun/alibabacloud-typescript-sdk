// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListLayoutConfig extends $dara.Model {
  /**
   * @remarks
   * The fill type. Set this value to none.
   * 
   * @example
   * none
   */
  fillMode?: string;
  /**
   * @remarks
   * The position of the layer, in the format of [unk][x,y][unk]. The values of x and y need to be normalized.
   */
  positionNormalized?: number[];
  /**
   * @remarks
   * The reference position of the element. Valid values:
   * 
   * *   topLeft
   * *   topRight
   * *   bottomLeft
   * *   bottomRight
   * 
   * @example
   * topLeft
   */
  positionRefer?: string;
  /**
   * @remarks
   * The size of the layer. Unit: bytes.
   */
  sizeNormalized?: number[];
  static names(): { [key: string]: string } {
    return {
      fillMode: 'FillMode',
      positionNormalized: 'PositionNormalized',
      positionRefer: 'PositionRefer',
      sizeNormalized: 'SizeNormalized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillMode: 'string',
      positionNormalized: { 'type': 'array', 'itemType': 'number' },
      positionRefer: 'string',
      sizeNormalized: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.positionNormalized)) {
      $dara.Model.validateArray(this.positionNormalized);
    }
    if(Array.isArray(this.sizeNormalized)) {
      $dara.Model.validateArray(this.sizeNormalized);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListPlayConfig extends $dara.Model {
  /**
   * @remarks
   * The volume. Valid values: 0 to 1. The value is rounded to two decimal places.
   * 
   * @example
   * 0.50
   */
  volumeRate?: number;
  static names(): { [key: string]: string } {
    return {
      volumeRate: 'VolumeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputList extends $dara.Model {
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * @example
   * demo.aliyundoc.com
   */
  inputUrl?: string;
  /**
   * @remarks
   * The layout information.
   */
  layoutConfig?: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListLayoutConfig;
  /**
   * @remarks
   * The layout ID, which must start from 1.
   * 
   * @example
   * 1
   */
  layoutId?: number;
  /**
   * @remarks
   * The playback configurations.
   */
  playConfig?: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListPlayConfig;
  /**
   * @remarks
   * The display name of the monitored stream.
   * 
   * @example
   * monitorStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      inputUrl: 'InputUrl',
      layoutConfig: 'LayoutConfig',
      layoutId: 'LayoutId',
      playConfig: 'PlayConfig',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      inputUrl: 'string',
      layoutConfig: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListLayoutConfig,
      layoutId: 'number',
      playConfig: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputListPlayConfig,
      streamName: 'string',
    };
  }

  validate() {
    if(this.layoutConfig && typeof (this.layoutConfig as any).validate === 'function') {
      (this.layoutConfig as any).validate();
    }
    if(this.playConfig && typeof (this.playConfig as any).validate === 'function') {
      (this.playConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListOutputUrls extends $dara.Model {
  /**
   * @remarks
   * The output URL in the Flash Video (FLV) format.
   * 
   * @example
   * http://demo.aliyundoc.com/monitor/445409ec-7eaa-461d-8f29-4bec2eb9****.flv
   */
  flvUrl?: string;
  /**
   * @remarks
   * The output URL in the Real-Time Messaging Protocol (RTMP) format.
   * 
   * @example
   * rtmp://demo.aliyundoc.com/monitor/445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  rtmpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      flvUrl: 'FlvUrl',
      rtmpUrl: 'RtmpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flvUrl: 'string',
      rtmpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorList extends $dara.Model {
  /**
   * @remarks
   * The audio source in the layout.
   * 
   * @example
   * 1
   */
  audioFrom?: number;
  /**
   * @remarks
   * The callback URL that sends monitoring alerts.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****
   */
  dingTalkWebHookUrl?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of monitored input streams.
   */
  inputList?: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputList[];
  /**
   * @remarks
   * The monitoring alert thresholds. The following fields are included:
   * 
   * *   fpsLowThres: the video frame rate alert threshold. The value is a floating-point number.
   * *   brHighThres: the audio/video bitrate alert threshold. The value is a floating-point number.
   * *   eofDurationThresSec: the interruption duration alert threshold. The value is a floating-point number.
   * 
   * @example
   * "{\\"fpsLowThres\\": 0.6,\\"brLowThres\\": 1.1,\\"eofDurationThresSec\\": 10}"
   */
  monitorConfig?: string;
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  /**
   * @remarks
   * The name of the monitoring session.
   * 
   * @example
   * liveMonito****
   */
  monitorName?: string;
  /**
   * @remarks
   * The output resolution template. Valid values:
   * 
   * *   **lp_ld**: low definition
   * *   **lp_sd**: standard definition
   * *   **lp_hd**: high definition
   * *   **lp_ud**: ultra-high definition
   * 
   * @example
   * lp_ud
   */
  outputTemplate?: string;
  /**
   * @remarks
   * The output URLs.
   */
  outputUrls?: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListOutputUrls;
  /**
   * @remarks
   * The ID of the region. Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-beijing: China (Beijing)
   * *   ap-southeast-1: Singapore
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The start time of live monitoring. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the monitoring session. Valid values:
   * 
   * *   1: Monitoring
   * *   0: Unmonitored
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The end time of live monitoring. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      audioFrom: 'AudioFrom',
      callbackUrl: 'CallbackUrl',
      dingTalkWebHookUrl: 'DingTalkWebHookUrl',
      domain: 'Domain',
      inputList: 'InputList',
      monitorConfig: 'MonitorConfig',
      monitorId: 'MonitorId',
      monitorName: 'MonitorName',
      outputTemplate: 'OutputTemplate',
      outputUrls: 'OutputUrls',
      region: 'Region',
      startTime: 'StartTime',
      status: 'Status',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrom: 'number',
      callbackUrl: 'string',
      dingTalkWebHookUrl: 'string',
      domain: 'string',
      inputList: { 'type': 'array', 'itemType': DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListInputList },
      monitorConfig: 'string',
      monitorId: 'string',
      monitorName: 'string',
      outputTemplate: 'string',
      outputUrls: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorListOutputUrls,
      region: 'string',
      startTime: 'string',
      status: 'number',
      stopTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputList)) {
      $dara.Model.validateArray(this.inputList);
    }
    if(this.outputUrls && typeof (this.outputUrls as any).validate === 'function') {
      (this.outputUrls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamMonitorListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring sessions.
   */
  liveStreamMonitorList?: DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2234baba-a586-46ea-8bd4-c8f7891abcdef
   */
  requestId?: string;
  /**
   * @remarks
   * The number of monitoring sessions.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      liveStreamMonitorList: 'LiveStreamMonitorList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamMonitorList: { 'type': 'array', 'itemType': DescribeLiveStreamMonitorListResponseBodyLiveStreamMonitorList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamMonitorList)) {
      $dara.Model.validateArray(this.liveStreamMonitorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

