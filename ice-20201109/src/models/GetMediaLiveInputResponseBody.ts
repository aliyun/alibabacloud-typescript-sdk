// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveInputResponseBodyInputInputInfos extends $dara.Model {
  /**
   * @remarks
   * The endpoint that the stream is pushed to. This parameter is returned for PUSH inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  destHost?: string;
  /**
   * @remarks
   * The ID of the flow from MediaConnect.
   * 
   * @example
   * ******81-9693-40dc-bbab-db5e49******
   */
  flowId?: string;
  /**
   * @remarks
   * The output name of the MediaConnect flow.
   * 
   * @example
   * myFlowOutputName
   */
  flowOutputName?: string;
  /**
   * @remarks
   * The URL for input monitoring.
   * 
   * @example
   * rtmp://domain/app/stream_for_monitor
   */
  monitorUrl?: string;
  /**
   * @remarks
   * The source URL where the stream is pulled from. This parameter is returned for PULL inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  sourceUrl?: string;
  srtLatency?: number;
  srtMaxBitrate?: number;
  srtPassphrase?: string;
  srtPbKeyLen?: number;
  /**
   * @remarks
   * The name of the pushed stream. This parameter is returned for PUSH inputs.
   * 
   * @example
   * mystream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      destHost: 'DestHost',
      flowId: 'FlowId',
      flowOutputName: 'FlowOutputName',
      monitorUrl: 'MonitorUrl',
      sourceUrl: 'SourceUrl',
      srtLatency: 'SrtLatency',
      srtMaxBitrate: 'SrtMaxBitrate',
      srtPassphrase: 'SrtPassphrase',
      srtPbKeyLen: 'SrtPbKeyLen',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destHost: 'string',
      flowId: 'string',
      flowOutputName: 'string',
      monitorUrl: 'string',
      sourceUrl: 'string',
      srtLatency: 'number',
      srtMaxBitrate: 'number',
      srtPassphrase: 'string',
      srtPbKeyLen: 'number',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaLiveInputResponseBodyInput extends $dara.Model {
  /**
   * @remarks
   * The IDs of the channels associated with the input.
   */
  channelIds?: string[];
  /**
   * @remarks
   * The time when the input was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the input.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputInfos?: GetMediaLiveInputResponseBodyInputInputInfos[];
  /**
   * @remarks
   * The name of the input.
   * 
   * @example
   * myinput
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the security groups associated with the input.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The input type.
   * 
   * @example
   * RTMP_PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      inputId: 'InputId',
      inputInfos: 'InputInfos',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      inputId: 'string',
      inputInfos: { 'type': 'array', 'itemType': GetMediaLiveInputResponseBodyInputInputInfos },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    if(Array.isArray(this.inputInfos)) {
      $dara.Model.validateArray(this.inputInfos);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaLiveInputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The input information.
   */
  input?: GetMediaLiveInputResponseBodyInput;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: GetMediaLiveInputResponseBodyInput,
      requestId: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

