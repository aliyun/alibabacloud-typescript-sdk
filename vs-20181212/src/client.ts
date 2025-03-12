// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class BatchBindDirectoriesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * An error occurred while processing your request.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 238*****380-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      groupId: 'GroupId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      groupId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponseBodyBindings extends $dara.Model {
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
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

export class BatchBindTemplatesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
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

export class BatchDeleteDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * Device not found
   */
  error?: string;
  /**
   * @example
   * 323884****9092996
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels extends $dara.Model {
  channel?: string[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo extends $dara.Model {
  channels?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels;
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * ok
   */
  detail?: string;
  /**
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      count: 'Count',
      detail: 'Detail',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels,
      count: 'number',
      detail: 'string',
      result: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResult extends $dara.Model {
  forbidResultInfo?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo[];
  static names(): { [key: string]: string } {
    return {
      forbidResultInfo: 'ForbidResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResultInfo: { 'type': 'array', 'itemType': BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.forbidResultInfo)) {
      $dara.Model.validateArray(this.forbidResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels extends $dara.Model {
  channel?: string[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo extends $dara.Model {
  channels?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * ok
   */
  detail?: string;
  /**
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      count: 'Count',
      detail: 'Detail',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels,
      count: 'number',
      detail: 'string',
      result: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResult extends $dara.Model {
  resumeResultInfo?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resumeResultInfo: 'ResumeResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resumeResultInfo: { 'type': 'array', 'itemType': BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resumeResultInfo)) {
      $dara.Model.validateArray(this.resumeResultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @example
   * 3238848****092997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 310101*****187542126
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
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

export class BatchStartDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 32388487****92996-cn-qingdao
   */
  id?: string;
  streams?: BatchStartDevicesResponseBodyResultsStreams[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      streams: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResultsStreams },
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponseBodyResults extends $dara.Model {
  /**
   * @example
   * stream not found
   */
  error?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
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

export class BatchStopDevicesResponseBodyResultsStreams extends $dara.Model {
  /**
   * @example
   * Stream not found
   */
  error?: string;
  /**
   * @example
   * 323884****9092997
   */
  id?: string;
  /**
   * @example
   * 32388*****39092997
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
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

export class BatchStopDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 32388487****92996
   */
  id?: string;
  streams?: BatchStopDevicesResponseBodyResultsStreams[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      streams: { 'type': 'array', 'itemType': BatchStopDevicesResponseBodyResultsStreams },
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponseBodyResults extends $dara.Model {
  /**
   * @example
   * stream not found
   */
  error?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3100000*****00000002
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      id: 'string',
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

export class BatchUnbindDirectoriesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * An error occurred while processing your request.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * some error
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBodyBindings extends $dara.Model {
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
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

export class BatchUnbindTemplatesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * snapshot
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceRequestClientInfo extends $dara.Model {
  /**
   * @example
   * 172.21.128.110
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  attributeNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeNames)) {
      $dara.Model.validateArray(this.attributeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyDirectory extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 3238848****092995-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyStats extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelNum?: number;
  /**
   * @example
   * 1
   */
  failedNum?: number;
  /**
   * @example
   * 1
   */
  offlineNum?: number;
  /**
   * @example
   * 1
   */
  onlineNum?: number;
  /**
   * @example
   * 1
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      failedNum: 'FailedNum',
      offlineNum: 'OfflineNum',
      onlineNum: 'OnlineNum',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      failedNum: 'number',
      offlineNum: 'number',
      onlineNum: 'number',
      streamNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBodyChannels extends $dara.Model {
  /**
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * on
   */
  deviceStatus?: string;
  /**
   * @example
   * 3100000****000000002
   */
  gbId?: string;
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @example
   * off
   */
  streamStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      deviceStatus: 'DeviceStatus',
      gbId: 'GbId',
      name: 'Name',
      params: 'Params',
      streamId: 'StreamId',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      deviceId: 'string',
      deviceStatus: 'string',
      gbId: 'string',
      name: 'string',
      params: 'string',
      streamId: 'string',
      streamStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesDirectory extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesStats extends $dara.Model {
  /**
   * @example
   * 0
   */
  channelNum?: number;
  /**
   * @example
   * 0
   */
  failedNum?: number;
  /**
   * @example
   * 0
   */
  offlineNum?: number;
  /**
   * @example
   * 0
   */
  onlineNum?: number;
  /**
   * @example
   * 0
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      failedNum: 'FailedNum',
      offlineNum: 'OfflineNum',
      onlineNum: 'OnlineNum',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      failedNum: 'number',
      offlineNum: 'number',
      onlineNum: 'number',
      streamNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * 0
   */
  alarmMethod?: string;
  /**
   * @example
   * true
   */
  autoDirectory?: boolean;
  /**
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * 2019-02-28T17:01:17Z
   */
  channelSyncTime?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  directory?: DescribeDevicesResponseBodyDevicesDirectory;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 310000000****0000002
   */
  gbId?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @example
   * 45.00
   */
  longitude?: string;
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 3238848****092995
   */
  parentId?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  registeredTime?: string;
  stats?: DescribeDevicesResponseBodyDevicesStats;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      autoDirectory: 'AutoDirectory',
      autoPos: 'AutoPos',
      autoStart: 'AutoStart',
      channelSyncTime: 'ChannelSyncTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      directory: 'Directory',
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      enabled: 'Enabled',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
      protocol: 'Protocol',
      registeredTime: 'RegisteredTime',
      stats: 'Stats',
      status: 'Status',
      type: 'Type',
      url: 'Url',
      username: 'Username',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      autoDirectory: 'boolean',
      autoPos: 'boolean',
      autoStart: 'boolean',
      channelSyncTime: 'string',
      createdTime: 'string',
      description: 'string',
      directory: DescribeDevicesResponseBodyDevicesDirectory,
      directoryId: 'string',
      dsn: 'string',
      enabled: 'boolean',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      protocol: 'string',
      registeredTime: 'string',
      stats: DescribeDevicesResponseBodyDevicesStats,
      status: 'string',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @example
   * 2021-09-10T10:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponseBodyStats extends $dara.Model {
  /**
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @example
   * 100
   */
  ipcNum?: number;
  /**
   * @example
   * 100
   */
  platformNum?: number;
  static names(): { [key: string]: string } {
    return {
      deviceNum: 'DeviceNum',
      iedNum: 'IedNum',
      ipcNum: 'IpcNum',
      platformNum: 'PlatformNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNum: 'number',
      iedNum: 'number',
      ipcNum: 'number',
      platformNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroupsStats extends $dara.Model {
  /**
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @example
   * 200
   */
  ipcNum?: number;
  /**
   * @example
   * 0
   */
  platformNum?: number;
  static names(): { [key: string]: string } {
    return {
      deviceNum: 'DeviceNum',
      iedNum: 'IedNum',
      ipcNum: 'IpcNum',
      platformNum: 'PlatformNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNum: 'number',
      iedNum: 'number',
      ipcNum: 'number',
      platformNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 31000000000000000001
   */
  gbId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @example
   * 5060
   */
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  /**
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  name?: string;
  /**
   * @example
   * rtmp,flv,hls
   */
  outProtocol?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  stats?: DescribeGroupsResponseBodyGroupsStats;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliasId: 'AliasId',
      app: 'App',
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      enabled: 'Enabled',
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      gbTcpPorts: 'GbTcpPorts',
      gbUdpPorts: 'GbUdpPorts',
      id: 'Id',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
      stats: 'Stats',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasId: 'string',
      app: 'string',
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      enabled: 'boolean',
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      gbTcpPorts: { 'type': 'array', 'itemType': 'string' },
      gbUdpPorts: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
      stats: DescribeGroupsResponseBodyGroupsStats,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gbTcpPorts)) {
      $dara.Model.validateArray(this.gbTcpPorts);
    }
    if(Array.isArray(this.gbUdpPorts)) {
      $dara.Model.validateArray(this.gbUdpPorts);
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * 310101*****7542007
   */
  gbId?: string;
  /**
   * @example
   * 3484*****8732174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3487*****323380-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 3614*****766212-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponseBodyPlatforms extends $dara.Model {
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @example
   * 31010*****317542006
   */
  clientGbId?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * 5160
   */
  clientPort?: number;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  /**
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  name?: string;
  /**
   * @example
   * 5060
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientGbId: 'ClientGbId',
      clientIp: 'ClientIp',
      clientPassword: 'ClientPassword',
      clientPort: 'ClientPort',
      clientUsername: 'ClientUsername',
      createdTime: 'CreatedTime',
      description: 'Description',
      gbId: 'GbId',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      port: 'Port',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientGbId: 'string',
      clientIp: 'string',
      clientPassword: 'string',
      clientPort: 'number',
      clientUsername: 'string',
      createdTime: 'string',
      description: 'string',
      gbId: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      port: 'number',
      protocol: 'string',
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

export class DescribePresetsResponseBodyPresets extends $dara.Model {
  /**
   * @example
   * 2
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribePurchasedDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 1234*****67890
   */
  registerCode?: string;
  /**
   * @example
   * dome
   */
  subType?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      name: 'Name',
      orderId: 'OrderId',
      region: 'Region',
      registerCode: 'RegisterCode',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      id: 'string',
      name: 'string',
      orderId: 'string',
      region: 'string',
      registerCode: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 2021-11-23T18:33:48
   */
  endTime?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 2be2a673-6033-4874-b6f2-f2bc0a1*****
   */
  id?: string;
  /**
   * @example
   * my_oss_bucket
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  ossObject?: string;
  /**
   * @example
   * 2021-11-23T18:19:32
   */
  startTime?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @example
   * 388*****204-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  type?: string;
  /**
   * @example
   * http://my_oss_bucket.oss-cn-qingdao.aliyuncs.com/record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8
   */
  url?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fileFormat: 'FileFormat',
      height: 'Height',
      id: 'Id',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      streamId: 'StreamId',
      templateId: 'TemplateId',
      type: 'Type',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fileFormat: 'string',
      height: 'number',
      id: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      startTime: 'string',
      streamId: 'string',
      templateId: 'string',
      type: 'string',
      url: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes extends $dara.Model {
  /**
   * @example
   * lon
   */
  name?: string;
  /**
   * @example
   * 100
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfiguration extends $dara.Model {
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
  /**
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig extends $dara.Model {
  /**
   * @example
   * success
   */
  bandwidthStatus?: string;
  /**
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @example
   * 2023-08-17T09:54:35Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthStatus: 'BandwidthStatus',
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthStatus: 'string',
      maxEgressBandwidth: 'number',
      maxIngressBandwidth: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfo extends $dara.Model {
  configuration?: DescribeRenderingInstanceResponseBodyConfigInfoConfiguration[];
  networkConfig?: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      networkConfig: 'NetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfiguration },
      networkConfig: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyPortMappings extends $dara.Model {
  /**
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @example
   * 49008/49015
   */
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyRenderingStatus extends $dara.Model {
  description?: string;
  /**
   * @example
   * MigrateLocalData
   */
  latestAction?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      latestAction: 'LatestAction',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      latestAction: 'string',
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

export class DescribeRenderingInstanceResponseBodySystemInfo extends $dara.Model {
  /**
   * @example
   * 60
   */
  frequency?: number;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  attributeNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeNames)) {
      $dara.Model.validateArray(this.attributeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes extends $dara.Model {
  /**
   * @example
   * lon
   */
  name?: string;
  /**
   * @example
   * 100
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBodyConfiguration extends $dara.Model {
  attributes?: DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes[];
  /**
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceSettingsResponseBodySettings extends $dara.Model {
  /**
   * @example
   * navbar.hide
   */
  attributeName?: string;
  /**
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * 1634873413
   */
  endTime?: number;
  /**
   * @example
   * 1639077653
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

export class DescribeStreamsResponseBodyStreams extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 2018-12-10T17:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      createdTime: 'CreatedTime',
      deviceId: 'DeviceId',
      enabled: 'Enabled',
      groupId: 'GroupId',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      playDomain: 'PlayDomain',
      protocol: 'Protocol',
      pushDomain: 'PushDomain',
      status: 'Status',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      createdTime: 'string',
      deviceId: 'string',
      enabled: 'boolean',
      groupId: 'string',
      height: 'number',
      id: 'string',
      name: 'string',
      playDomain: 'string',
      protocol: 'string',
      pushDomain: 'string',
      status: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponseBodyTransConfigs extends $dara.Model {
  /**
   * @example
   * 25
   */
  fps?: number;
  /**
   * @example
   * 50
   */
  gop?: number;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 399*****430-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * sd
   */
  name?: string;
  /**
   * @example
   * 800
   */
  videoBitrate?: number;
  /**
   * @example
   * h264
   */
  videoCodec?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      id: 'string',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplatesTransConfigs extends $dara.Model {
  /**
   * @example
   * 25
   */
  fps?: number;
  /**
   * @example
   * 50
   */
  gop?: number;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * sd
   */
  name?: string;
  /**
   * @example
   * 800
   */
  videoBitrate?: number;
  /**
   * @example
   * h264
   */
  videoCodec?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  /**
   * @example
   * 399788187729597430-cn-qingdao
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      width: 'number',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2018-12-10T10:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  name?: string;
  /**
   * @example
   * my_oss_bucket
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * my_prefix
   */
  ossFilePrefix?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  transConfigs?: DescribeTemplatesResponseBodyTemplatesTransConfigs[];
  /**
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      id: 'Id',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      region: 'Region',
      retention: 'Retention',
      transConfigs: 'TransConfigs',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      id: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      region: 'string',
      retention: 'number',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplatesTransConfigs },
      trigger: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transConfigs)) {
      $dara.Model.validateArray(this.transConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  /**
   * @example
   * 6338888
   */
  certId?: number;
  /**
   * @example
   * cert-5391062
   */
  certName?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  common?: string;
  /**
   * @example
   * 3EB2585309AE5C8F369****7CDA6A8F5CEC8B2D4
   */
  fingerprint?: string;
  /**
   * @example
   * xxxxCert Inc
   */
  issuer?: string;
  /**
   * @example
   * 1632462708
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModel extends $dara.Model {
  certList?: DescribeVsCertificateListResponseBodyCertificateListModelCertList[];
  /**
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribeVsCertificateListResponseBodyCertificateListModelCertList },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 128
   */
  devicesDataValue?: string;
  /**
   * @example
   * 2022-01-04T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      devicesDataValue: 'DevicesDataValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicesDataValue: 'string',
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

export class DescribeVsDevicesDataResponseBodyDevicesDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  bpsValue?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsValue: 'BpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsValue: 'string',
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

export class DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @example
   * example.com
   */
  certDomainName?: string;
  /**
   * @example
   * 2018-06-03T22:03:39Z
   */
  certExpireTime?: string;
  /**
   * @example
   * months
   */
  certLife?: string;
  /**
   * @example
   * myname
   */
  certName?: string;
  /**
   * @example
   * Let\\"s Encrypt
   */
  certOrg?: string;
  /**
   * @example
   * free
   */
  certType?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * asdadaxxxx
   */
  SSLPub?: string;
  /**
   * @example
   * on
   */
  serverCertificateStatus?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certDomainName: 'CertDomainName',
      certExpireTime: 'CertExpireTime',
      certLife: 'CertLife',
      certName: 'CertName',
      certOrg: 'CertOrg',
      certType: 'CertType',
      domainName: 'DomainName',
      SSLPub: 'SSLPub',
      serverCertificateStatus: 'ServerCertificateStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomainName: 'string',
      certExpireTime: 'string',
      certLife: 'string',
      certName: 'string',
      certOrg: 'string',
      certType: 'string',
      domainName: 'string',
      SSLPub: 'string',
      serverCertificateStatus: 'string',
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

export class DescribeVsDomainCertificateInfoResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeVsDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeVsDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  validate() {
    if(Array.isArray(this.certInfo)) {
      $dara.Model.validateArray(this.certInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @example
   * req_auth
   */
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @example
   * 6295
   */
  configId?: string;
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @example
   * aliauth
   */
  functionName?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionArgs)) {
      $dara.Model.validateArray(this.functionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBodyDomainConfig extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com.*****.com
   */
  cname?: string;
  description?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @example
   * vs
   */
  domainType?: string;
  /**
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtCreated?: string;
  /**
   * @example
   * 2021-07-19T10:27:23Z
   */
  gmtModified?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @example
   * domestic
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      region: 'Region',
      SSLProtocol: 'SSLProtocol',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      region: 'string',
      SSLProtocol: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData extends $dara.Model {
  /**
   * @example
   * 2021-11-22T00:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBodyPvDataInterval extends $dara.Model {
  usageData?: DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  PV?: string;
  /**
   * @example
   * 2021-10-14T23:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  UV?: string;
  static names(): { [key: string]: string } {
    return {
      PV: 'PV',
      timeStamp: 'TimeStamp',
      UV: 'UV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PV: 'string',
      timeStamp: 'string',
      UV: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos extends $dara.Model {
  pvUvDataInfo?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo[];
  static names(): { [key: string]: string } {
    return {
      pvUvDataInfo: 'PvUvDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvUvDataInfo: { 'type': 'array', 'itemType': DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pvUvDataInfo)) {
      $dara.Model.validateArray(this.pvUvDataInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 100
   */
  recordValue?: string;
  /**
   * @example
   * 1
   */
  streamCountValue?: string;
  /**
   * @example
   * 2021-11-19T15:59:59Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      recordValue: 'RecordValue',
      streamCountValue: 'StreamCountValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordValue: 'string',
      streamCountValue: 'string',
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

export class DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBodyValueRegionProportionData extends $dara.Model {
  /**
   * @example
   * 2888253.7875
   */
  avgObjectSize?: string;
  /**
   * @example
   * 154.3345765545624
   */
  avgResponseRate?: string;
  /**
   * @example
   * 5183.666666666667
   */
  avgResponseTime?: string;
  /**
   * @example
   * 380.9614285714286
   */
  bps?: string;
  /**
   * @example
   * 0.003544181046236794
   */
  bytesProportion?: string;
  /**
   * @example
   * 0.01155980271270037
   */
  proportion?: string;
  /**
   * @example
   * 0.001746031746031746
   */
  qps?: string;
  region?: string;
  /**
   * @example
   * chongqing
   */
  regionEname?: string;
  /**
   * @example
   * 0
   */
  reqErrRate?: string;
  /**
   * @example
   * 2400057
   */
  totalBytes?: string;
  /**
   * @example
   * 3
   */
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      proportion: 'Proportion',
      qps: 'Qps',
      region: 'Region',
      regionEname: 'RegionEname',
      reqErrRate: 'ReqErrRate',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      bytesProportion: 'string',
      proportion: 'string',
      qps: 'string',
      region: 'string',
      regionEname: 'string',
      reqErrRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBodyValue extends $dara.Model {
  regionProportionData?: DescribeVsDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeVsDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.regionProportionData)) {
      $dara.Model.validateArray(this.regionProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  reqBpsValue?: string;
  /**
   * @example
   * 2021-12-24T16:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqBpsValue: 'ReqBpsValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqBpsValue: 'string',
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

export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 10000
   */
  reqTrafficValue?: string;
  /**
   * @example
   * 2021-09-22T03:40:41Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqTrafficValue: 'ReqTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqTrafficValue: 'string',
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

export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  snapshotValue?: string;
  /**
   * @example
   * 2015-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotValue: 'SnapshotValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotValue: 'string',
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

export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $dara.Model {
  /**
   * @example
   * 2021-09-20T07:10:42Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  trafficValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      trafficValue: 'TrafficValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      trafficValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeVsDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBodyUvDataIntervalUsageData extends $dara.Model {
  /**
   * @example
   * 2015-11-29T15:00:00Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBodyUvDataInterval extends $dara.Model {
  usageData?: DescribeVsDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeVsDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2016-05-15T07:30:00Z
   */
  endTime?: string;
  /**
   * @example
   * http://test
   */
  sourceUrl?: string;
  /**
   * @example
   * 2016-05-15T01:30:00Z
   */
  startTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      sourceUrl: 'string',
      startTime: 'string',
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

export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList extends $dara.Model {
  liveAppRecord?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord },
    };
  }

  validate() {
    if(Array.isArray(this.liveAppRecord)) {
      $dara.Model.validateArray(this.liveAppRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig extends $dara.Model {
  authKey?: string;
  authType?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  notifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authType: 'AuthType',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authType: 'string',
      domainName: 'string',
      notifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * push.example.com
   */
  publishDomain?: string;
  /**
   * @example
   * 2015-12-02T06:58:04Z
   */
  publishTime?: string;
  /**
   * @example
   * edge
   */
  publishType?: string;
  /**
   * @example
   * rtmp://example.com/xchen
   */
  publishUrl?: string;
  /**
   * @example
   * testxchen_small
   */
  streamName?: string;
  /**
   * @example
   * 123
   */
  transcodeId?: string;
  /**
   * @example
   * no
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      streamName: 'string',
      transcodeId: 'string',
      transcoded: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfo extends $dara.Model {
  liveStreamOnlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineInfo: 'LiveStreamOnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineInfo: { 'type': 'array', 'itemType': DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamOnlineInfo)) {
      $dara.Model.validateArray(this.liveStreamOnlineInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  edgeNodeAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  publishDomain?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  publishTime?: string;
  /**
   * @example
   * center
   */
  publishType?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  publishUrl?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  stopTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  streamUrl?: string;
  /**
   * @example
   * 3888920****8138204-cn-qingdao
   */
  transcodeId?: string;
  /**
   * @example
   * yes
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clientAddr: 'ClientAddr',
      domainName: 'DomainName',
      edgeNodeAddr: 'EdgeNodeAddr',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      stopTime: 'StopTime',
      streamName: 'StreamName',
      streamUrl: 'StreamUrl',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clientAddr: 'string',
      domainName: 'string',
      edgeNodeAddr: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      stopTime: 'string',
      streamName: 'string',
      streamUrl: 'string',
      transcodeId: 'string',
      transcoded: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBodyPublishInfo extends $dara.Model {
  liveStreamPublishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamPublishInfo: 'LiveStreamPublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamPublishInfo: { 'type': 'array', 'itemType': DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamPublishInfo)) {
      $dara.Model.validateArray(this.liveStreamPublishInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 100
   */
  maxBps?: number;
  /**
   * @example
   * 1457111400
   */
  maxBpsTime?: string;
  /**
   * @example
   * 1
   */
  rank?: number;
  /**
   * @example
   * 100
   */
  totalAccess?: number;
  /**
   * @example
   * 100
   */
  totalTraffic?: string;
  /**
   * @example
   * 30.64191989360235
   */
  trafficPercent?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
      trafficPercent: 'TrafficPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      maxBps: 'number',
      maxBpsTime: 'string',
      rank: 'number',
      totalAccess: 'number',
      totalTraffic: 'string',
      trafficPercent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  validate() {
    if(Array.isArray(this.topDomain)) {
      $dara.Model.validateArray(this.topDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData extends $dara.Model {
  bandWidth?: string;
  /**
   * @example
   * 1522252320000
   */
  peakTime?: string;
  /**
   * @example
   * 31
   */
  publishStreamNum?: number;
  /**
   * @example
   * 1522166400000
   */
  queryTime?: string;
  /**
   * @example
   * example.com
   */
  statName?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      peakTime: 'PeakTime',
      publishStreamNum: 'PublishStreamNum',
      queryTime: 'QueryTime',
      statName: 'StatName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'string',
      peakTime: 'string',
      publishStreamNum: 'number',
      queryTime: 'string',
      statName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas extends $dara.Model {
  describeVsUpPeakPublishStreamData?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData[];
  static names(): { [key: string]: string } {
    return {
      describeVsUpPeakPublishStreamData: 'DescribeVsUpPeakPublishStreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeVsUpPeakPublishStreamData: { 'type': 'array', 'itemType': DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.describeVsUpPeakPublishStreamData)) {
      $dara.Model.validateArray(this.describeVsUpPeakPublishStreamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
  commodityCode?: string;
  currCapacity?: string;
  displayName?: string;
  initCapacity?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      displayName: 'DisplayName',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currCapacity: 'string',
      displayName: 'string',
      initCapacity: 'string',
      instanceId: 'string',
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

export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageInfo)) {
      $dara.Model.validateArray(this.resourcePackageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponseBodyInstallationInfos extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  installationTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * installed
   */
  status?: string;
  /**
   * @example
   * install success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-05-28T14:50:04+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      installationTime: 'InstallationTime',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      installationTime: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponseBodyCloudApps extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.5.0
   */
  appVersion?: string;
  /**
   * @example
   * demo
   */
  description?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-05-28T14:48:34+08:00
   */
  updateTime?: string;
  /**
   * @example
   * 2024-05-28T14:28:14+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponseBodyPushStatuses extends $dara.Model {
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * 2024-03-26T16:32:20+08:00
   */
  pushTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * push success
   */
  statusDescription?: string;
  /**
   * @example
   * 2024-03-26T17:02:10+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pushTime: 'PushTime',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      statusDescription: 'StatusDescription',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pushTime: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      statusDescription: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyFiles extends $dara.Model {
  description?: string;
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * upload success
   */
  statusDescription?: string;
  /**
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  /**
   * @example
   * 2024-03-28T14:15:08+08:00
   */
  updateTime?: string;
  /**
   * @example
   * 2024-03-28T14:10:12+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileId: 'FileId',
      fileName: 'FileName',
      status: 'Status',
      statusDescription: 'StatusDescription',
      targetPath: 'TargetPath',
      updateTime: 'UpdateTime',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileId: 'string',
      fileName: 'string',
      status: 'string',
      statusDescription: 'string',
      targetPath: 'string',
      updateTime: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @example
   * verify_30d89ccb0905c8c7882c1d14a991954b
   */
  content?: string;
  description?: string;
  /**
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  keyType?: string;
  /**
   * @example
   * 2024-06-11T14:26:48+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingDataPackagesResponseBodyDataPackages extends $dara.Model {
  category?: string;
  /**
   * @example
   * 2024-10-15T10:23:06+08:00
   */
  creationTime?: string;
  /**
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * available
   */
  status?: string;
  /**
   * @example
   * 2024-12-06T02:03:59Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      dataPackageId: 'DataPackageId',
      description: 'Description',
      renderingInstanceId: 'RenderingInstanceId',
      size: 'Size',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      dataPackageId: 'string',
      description: 'string',
      renderingInstanceId: 'string',
      size: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos extends $dara.Model {
  /**
   * @example
   * 2024-10-15 10:19:13
   */
  creationTime?: string;
  /**
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @example
   * available
   */
  status?: string;
  /**
   * @example
   * 2024-11-02 12:08:26
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      gatewayInstanceId: 'GatewayInstanceId',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      gatewayInstanceId: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponseBodyRenderingInstances extends $dara.Model {
  /**
   * @example
   * 2023-11-17T02:18:04Z
   */
  creationTime?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponseBodyLoginInfo extends $dara.Model {
  adbLoginPort?: number;
  /**
   * @example
   * 12.10.4.10
   */
  loginHostname?: string;
  /**
   * @example
   * 10004
   */
  loginPort?: number;
  static names(): { [key: string]: string } {
    return {
      adbLoginPort: 'AdbLoginPort',
      loginHostname: 'LoginHostname',
      loginPort: 'LoginPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbLoginPort: 'number',
      loginHostname: 'string',
      loginPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshRenderingInstanceStreamingRequestClientInfo extends $dara.Model {
  /**
   * @example
   * 172.21.128.110
   */
  clientIp?: string;
  /**
   * @example
   * true
   */
  newClient?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      newClient: 'NewClient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      newClient: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationRequestConfigurationAttributes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: UpdateRenderingInstanceConfigurationRequestConfigurationAttributes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateRenderingInstanceConfigurationRequestConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceSettingsRequestSettings extends $dara.Model {
  /**
   * @example
   * navbar.hide
   */
  attributeName?: string;
  /**
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVsPullStreamInfoConfigRequest extends $dara.Model {
  always?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2017-08-28T09:30:30Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * up.******.com.cn
   */
  sourceUrl?: string;
  /**
   * @example
   * 2017-08-28T07:30:30Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      always: 'Always',
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      always: 'string',
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      sourceUrl: 'string',
      startTime: 'string',
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

export class AddVsPullStreamInfoConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 3CB843A9-DD34-4881-B8D6-B0D539D111E4
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

export class AddVsPullStreamInfoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddVsPullStreamInfoConfigResponseBody;
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
      body: AddVsPullStreamInfoConfigResponseBody,
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

export class BatchBindDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
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

export class BatchBindDirectoriesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchBindDirectoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindDirectoriesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchBindDirectoriesResponseBody;
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
      body: BatchBindDirectoriesResponseBody,
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

export class BatchBindParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchBindParentPlatformDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindParentPlatformDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchBindParentPlatformDevicesResponseBody;
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
      body: BatchBindParentPlatformDevicesResponseBody,
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

export class BatchBindPurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      groupId: 'string',
      ownerId: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchBindPurchasedDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindPurchasedDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchBindPurchasedDevicesResponseBody;
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
      body: BatchBindPurchasedDevicesResponseBody,
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

export class BatchBindTemplateRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applyAll: 'ApplyAll',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      replace: 'Replace',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAll: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      replace: 'boolean',
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

export class BatchBindTemplateResponseBody extends $dara.Model {
  bindings?: BatchBindTemplateResponseBodyBindings[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': BatchBindTemplateResponseBodyBindings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchBindTemplateResponseBody;
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
      body: BatchBindTemplateResponseBody,
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

export class BatchBindTemplatesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stream
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * true
   */
  replace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * timeshift
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      applyAll: 'ApplyAll',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      replace: 'Replace',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAll: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      replace: 'boolean',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 20D0DFCE-5DB7-5D83-BD82-8482F2327636
   */
  requestId?: string;
  results?: BatchBindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindTemplatesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchBindTemplatesResponseBody;
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
      body: BatchBindTemplatesResponseBody,
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

export class BatchDeleteDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388****39092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class BatchDeleteDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchDeleteDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchDeleteDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteDevicesResponseBody;
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
      body: BatchDeleteDevicesResponseBody,
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

export class BatchDeleteVsDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https_force
   */
  functionNames?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functionNames: 'string',
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

export class BatchDeleteVsDomainConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class BatchDeleteVsDomainConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteVsDomainConfigsResponseBody;
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
      body: BatchDeleteVsDomainConfigsResponseBody,
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

export class BatchForbidVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live/stream1,live/stream2
   */
  channel?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  /**
   * @example
   * 2015-12-01T17:37:00Z
   */
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      ownerId: 'OwnerId',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      ownerId: 'number',
      resumeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBody extends $dara.Model {
  forbidResult?: BatchForbidVsStreamResponseBodyForbidResult;
  /**
   * @example
   * B058D71B-76EA-5DF6-ACAF-A617C1E7937F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbidResult: 'ForbidResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResult: BatchForbidVsStreamResponseBodyForbidResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.forbidResult && typeof (this.forbidResult as any).validate === 'function') {
      (this.forbidResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchForbidVsStreamResponseBody;
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
      body: BatchForbidVsStreamResponseBody,
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

export class BatchResumeVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live/stream1
   */
  channel?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
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

export class BatchResumeVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  resumeResult?: BatchResumeVsStreamResponseBodyResumeResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resumeResult: 'ResumeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resumeResult: BatchResumeVsStreamResponseBodyResumeResult,
    };
  }

  validate() {
    if(this.resumeResult && typeof (this.resumeResult as any).validate === 'function') {
      (this.resumeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchResumeVsStreamResponseBody;
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
      body: BatchResumeVsStreamResponseBody,
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

export class BatchSetVsDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{“functionArgs”:[{“argName”:”domain_name”,”argValue”:”api.hellodtworld.com”}],”functionName”:”set_req_host_header”}]
   */
  functions?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
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

export class BatchSetVsDomainConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
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

export class BatchSetVsDomainConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSetVsDomainConfigsResponseBody;
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
      body: BatchSetVsDomainConfigsResponseBody,
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

export class BatchStartDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487****92996-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class BatchStartDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStartDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStartDevicesResponseBody;
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
      body: BatchStartDevicesResponseBody,
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

export class BatchStartStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class BatchStartStreamsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStartStreamsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStartStreamsResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStartStreamsResponseBody;
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
      body: BatchStartStreamsResponseBody,
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

export class BatchStopDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487****92996
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-14T23:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
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

export class BatchStopDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStopDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStopDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStopDevicesResponseBody;
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
      body: BatchStopDevicesResponseBody,
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

export class BatchStopStreamsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
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

export class BatchStopStreamsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchStopStreamsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchStopStreamsResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchStopStreamsResponseBody;
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
      body: BatchStopStreamsResponseBody,
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

export class BatchUnbindDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
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

export class BatchUnbindDirectoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 64DB7F34-11A8-45DC-A421-40ACF446282C
   */
  requestId?: string;
  results?: BatchUnbindDirectoriesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindDirectoriesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUnbindDirectoriesResponseBody;
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
      body: BatchUnbindDirectoriesResponseBody,
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

export class BatchUnbindParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchUnbindParentPlatformDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindParentPlatformDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUnbindParentPlatformDevicesResponseBody;
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
      body: BatchUnbindParentPlatformDevicesResponseBody,
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

export class BatchUnbindPurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
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

export class BatchUnbindPurchasedDevicesResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  results?: BatchUnbindPurchasedDevicesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindPurchasedDevicesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUnbindPurchasedDevicesResponseBody;
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
      body: BatchUnbindPurchasedDevicesResponseBody,
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

export class BatchUnbindTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBody extends $dara.Model {
  bindings?: BatchUnbindTemplateResponseBodyBindings[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': BatchUnbindTemplateResponseBodyBindings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUnbindTemplateResponseBody;
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
      body: BatchUnbindTemplateResponseBody,
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

export class BatchUnbindTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400941290881239938-cn-beijing
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stream
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 90B377DF-C874-5BBD-B957-42C4C06AFECE
   */
  requestId?: string;
  results?: BatchUnbindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindTemplatesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUnbindTemplatesResponseBody;
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
      body: BatchUnbindTemplatesResponseBody,
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

export class BindDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
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

export class BindDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * 3CB843A9-DD34-4881-B8D6-B0D539D111E4
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

export class BindDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindDirectoryResponseBody;
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
      body: BindDirectoryResponseBody,
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

export class BindParentPlatformDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindParentPlatformDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class BindParentPlatformDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindParentPlatformDeviceResponseBody;
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
      body: BindParentPlatformDeviceResponseBody,
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

export class BindPurchasedDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3939*****6580539-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3484*****8732174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      groupId: 'string',
      ownerId: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class BindPurchasedDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindPurchasedDeviceResponseBody;
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
      body: BindPurchasedDeviceResponseBody,
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

export class BindTemplateRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  applyAll?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      applyAll: 'ApplyAll',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      replace: 'Replace',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAll: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      replace: 'boolean',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
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

export class BindTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindTemplateResponseBody;
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
      body: BindTemplateResponseBody,
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

export class ContinuousAdjustRequest extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  focus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 0.5
   */
  iris?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      focus: 'Focus',
      id: 'Id',
      iris: 'Iris',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focus: 'string',
      id: 'string',
      iris: 'string',
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

export class ContinuousAdjustResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ContinuousAdjustResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinuousAdjustResponseBody;
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
      body: ContinuousAdjustResponseBody,
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

export class ContinuousMoveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 0.5
   */
  pan?: string;
  /**
   * @example
   * 0.5
   */
  tilt?: string;
  /**
   * @example
   * 0.5
   */
  zoom?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pan: 'Pan',
      tilt: 'Tilt',
      zoom: 'Zoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      pan: 'string',
      tilt: 'string',
      zoom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ContinuousMoveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinuousMoveResponseBody;
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
      body: ContinuousMoveResponseBody,
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

export class CreateDeviceRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  description?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @example
   * 45.00
   */
  longitude?: string;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      autoDirectory: 'AutoDirectory',
      autoPos: 'AutoPos',
      autoStart: 'AutoStart',
      description: 'Description',
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      gbId: 'GbId',
      groupId: 'GroupId',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
      type: 'Type',
      url: 'Url',
      username: 'Username',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      autoDirectory: 'boolean',
      autoPos: 'boolean',
      autoStart: 'boolean',
      description: 'string',
      directoryId: 'string',
      dsn: 'string',
      gbId: 'string',
      groupId: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      ownerId: 'number',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class CreateDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeviceResponseBody;
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
      body: CreateDeviceResponseBody,
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

export class CreateDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alarm?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  channelId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1632314789000
   */
  endTime?: number;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  objectType?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1632121707000
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  subAlarm?: number;
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      expire: 'Expire',
      id: 'Id',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      subAlarm: 'SubAlarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: 'number',
      channelId: 'number',
      endTime: 'number',
      expire: 'number',
      id: 'string',
      objectType: 'number',
      ownerId: 'number',
      startTime: 'number',
      subAlarm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * 60
   */
  alarmDelay?: number;
  /**
   * @example
   * 0hyNgTdgv2D000195842
   */
  alarmId?: string;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @example
   * 76E11E6A-4441-51C9-AF60-D354362257A7
   */
  requestId?: string;
  /**
   * @example
   * rtmp://demo.aliyundoc.com/live/310101*****7542007?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      alarmDelay: 'AlarmDelay',
      alarmId: 'AlarmId',
      expire: 'Expire',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDelay: 'number',
      alarmId: 'string',
      expire: 'number',
      requestId: 'string',
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

export class CreateDeviceAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeviceAlarmResponseBody;
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
      body: CreateDeviceAlarmResponseBody,
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

export class CreateDirectoryRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      ownerId: 'number',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class CreateDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDirectoryResponseBody;
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
      body: CreateDirectoryResponseBody,
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

export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * flv,rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      callback: 'Callback',
      description: 'Description',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      callback: 'string',
      description: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 31000000****00000001
   */
  gbId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @example
   * 5060
   */
  gbPort?: number;
  /**
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      id: 'string',
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

export class CreateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupResponseBody;
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
      body: CreateGroupResponseBody,
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

export class CreateParentPlatformRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5060
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientPassword: 'ClientPassword',
      clientUsername: 'ClientUsername',
      description: 'Description',
      gbId: 'GbId',
      ip: 'Ip',
      name: 'Name',
      ownerId: 'OwnerId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientPassword: 'string',
      clientUsername: 'string',
      description: 'string',
      gbId: 'string',
      ip: 'string',
      name: 'string',
      ownerId: 'number',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class CreateParentPlatformResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateParentPlatformResponseBody;
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
      body: CreateParentPlatformResponseBody,
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

export class CreateRenderingDataPackageRequest extends $dara.Model {
  category?: string;
  /**
   * @example
   * testdescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingDataPackageResponseBody extends $dara.Model {
  /**
   * @example
   * dp-9f8c57355d224ad7beaf95e145f22111
   */
  dataPackageId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageId: 'DataPackageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
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

export class CreateRenderingDataPackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRenderingDataPackageResponseBody;
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
      body: CreateRenderingDataPackageResponseBody,
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

export class CreateRenderingInstanceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  clientInfo?: CreateRenderingInstanceRequestClientInfo;
  instanceBillingCycle?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidth?: number;
  /**
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientInfo: 'ClientInfo',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientInfo: CreateRenderingInstanceRequestClientInfo,
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    if(this.clientInfo && typeof (this.clientInfo as any).validate === 'function') {
      (this.clientInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  clientInfoShrink?: string;
  instanceBillingCycle?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidth?: number;
  /**
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientInfoShrink: 'ClientInfo',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientInfoShrink: 'string',
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
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

export class CreateRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRenderingInstanceResponseBody;
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
      body: CreateRenderingInstanceResponseBody,
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

export class CreateRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayInstanceId: 'GatewayInstanceId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayInstanceId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class CreateRenderingInstanceGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRenderingInstanceGatewayResponseBody;
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
      body: CreateRenderingInstanceGatewayResponseBody,
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

export class CreateStreamSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * device
   */
  location?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      location: 'Location',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
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

export class CreateStreamSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * jpg
   */
  format?: string;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * examplebucket
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * photos/live/340200*****100049/ondemand-1639126601767.jpg
   */
  ossObject?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1639126601767
   */
  timestamp?: number;
  /**
   * @example
   * http://examplebucket.oss-*****.aliyuncs.com/photos/live/340200*****100049/ondemand-1639126601767.jpg
   */
  url?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      height: 'Height',
      id: 'Id',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      height: 'number',
      id: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      requestId: 'string',
      timestamp: 'number',
      url: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStreamSnapshotResponseBody;
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
      body: CreateStreamSnapshotResponseBody,
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

export class CreateTemplateRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * bucketname
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  /**
   * @example
   * [{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]
   */
  transConfigsJSON?: string;
  /**
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      region: 'Region',
      retention: 'Retention',
      transConfigsJSON: 'TransConfigsJSON',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      region: 'string',
      retention: 'number',
      transConfigsJSON: 'string',
      trigger: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 399*****735-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class CreateTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
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
      body: CreateTemplateResponseBody,
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

export class DeleteCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
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

export class DeleteCloudAppResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteCloudAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCloudAppResponseBody;
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
      body: DeleteCloudAppResponseBody,
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

export class DeleteDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3238848****092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeleteDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeviceResponseBody;
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
      body: DeleteDeviceResponseBody,
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

export class DeleteDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeleteDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDirectoryResponseBody;
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
      body: DeleteDirectoryResponseBody,
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

export class DeleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-167131acd45omat771813f7141d28db2f7
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFileResponseBody;
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
      body: DeleteFileResponseBody,
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

export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33763950751395843
   */
  id?: string;
  /**
   * @example
   * 123456
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeleteGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupResponseBody;
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
      body: DeleteGroupResponseBody,
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

export class DeleteParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeleteParentPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteParentPlatformResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteParentPlatformResponseBody;
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
      body: DeleteParentPlatformResponseBody,
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

export class DeletePresetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      presetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * F18FD685-B194-4489-9609-F80A9490A258
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeletePresetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePresetResponseBody;
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
      body: DeletePresetResponseBody,
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

export class DeletePublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * appKey
   */
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicKeyResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeletePublicKeyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicKeyResponseBody;
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
      body: DeletePublicKeyResponseBody,
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

export class DeleteRenderingInstanceConfigurationRequest extends $dara.Model {
  configuration?: DeleteRenderingInstanceConfigurationRequestConfiguration[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DeleteRenderingInstanceConfigurationRequestConfiguration },
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationShrinkRequest extends $dara.Model {
  configurationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationShrink: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteRenderingInstanceConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRenderingInstanceConfigurationResponseBody;
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
      body: DeleteRenderingInstanceConfigurationResponseBody,
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

export class DeleteRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteRenderingInstanceGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRenderingInstanceGatewayResponseBody;
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
      body: DeleteRenderingInstanceGatewayResponseBody,
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

export class DeleteRenderingInstanceSettingsRequest extends $dara.Model {
  attributeNames?: string[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeNames)) {
      $dara.Model.validateArray(this.attributeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceSettingsShrinkRequest extends $dara.Model {
  attributeNamesShrink?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNamesShrink: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNamesShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteRenderingInstanceSettingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRenderingInstanceSettingsResponseBody;
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
      body: DeleteRenderingInstanceSettingsResponseBody,
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

export class DeleteTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DeleteTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTemplateResponseBody;
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
      body: DeleteTemplateResponseBody,
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

export class DeleteVsPullStreamInfoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
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

export class DeleteVsPullStreamInfoConfigResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class DeleteVsPullStreamInfoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVsPullStreamInfoConfigResponseBody;
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
      body: DeleteVsPullStreamInfoConfigResponseBody,
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

export class DeleteVsStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DeleteVsStreamsNotifyUrlConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 4C747C97-7ECD-4C61-8A92-67AD806331FF
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

export class DeleteVsStreamsNotifyUrlConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVsStreamsNotifyUrlConfigResponseBody;
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
      body: DeleteVsStreamsNotifyUrlConfigResponseBody,
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

export class DescribeAccountStatRequest extends $dara.Model {
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeAccountStatResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  groupLimit?: number;
  /**
   * @example
   * 6
   */
  groupNum?: number;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 3238848****092996
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  templateLimit?: number;
  /**
   * @example
   * 10
   */
  templateNum?: number;
  static names(): { [key: string]: string } {
    return {
      groupLimit: 'GroupLimit',
      groupNum: 'GroupNum',
      id: 'Id',
      requestId: 'RequestId',
      templateLimit: 'TemplateLimit',
      templateNum: 'TemplateNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLimit: 'number',
      groupNum: 'number',
      id: 'string',
      requestId: 'string',
      templateLimit: 'number',
      templateNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountStatResponseBody;
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
      body: DescribeAccountStatResponseBody,
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

export class DescribeDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3238848****092996-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * false
   */
  includeDirectory?: boolean;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeDirectory: 'IncludeDirectory',
      includeStats: 'IncludeStats',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeDirectory: 'boolean',
      includeStats: 'boolean',
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

export class DescribeDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * 2019-02-28T17:01:17Z
   */
  channelSyncTime?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  directory?: DescribeDeviceResponseBodyDirectory;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 31000000****00000002
   */
  gbId?: string;
  /**
   * @example
   * 3238848****092994-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 3238848****092996-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @example
   * 45.00
   */
  longitude?: string;
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 3238848****092995-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  registeredTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  stats?: DescribeDeviceResponseBodyStats;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      autoDirectory: 'AutoDirectory',
      autoPos: 'AutoPos',
      autoStart: 'AutoStart',
      channelSyncTime: 'ChannelSyncTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      directory: 'Directory',
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      enabled: 'Enabled',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
      protocol: 'Protocol',
      registeredTime: 'RegisteredTime',
      requestId: 'RequestId',
      stats: 'Stats',
      status: 'Status',
      type: 'Type',
      url: 'Url',
      username: 'Username',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      autoDirectory: 'boolean',
      autoPos: 'boolean',
      autoStart: 'boolean',
      channelSyncTime: 'string',
      createdTime: 'string',
      description: 'string',
      directory: DescribeDeviceResponseBodyDirectory,
      directoryId: 'string',
      dsn: 'string',
      enabled: 'boolean',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      protocol: 'string',
      registeredTime: 'string',
      requestId: 'string',
      stats: DescribeDeviceResponseBodyStats,
      status: 'string',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceResponseBody;
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
      body: DescribeDeviceResponseBody,
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

export class DescribeDeviceChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeDeviceChannelsResponseBody extends $dara.Model {
  channels?: DescribeDeviceChannelsResponseBodyChannels[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4641C72D-462E-4AEA-8485-FC267AF90B0A
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': DescribeDeviceChannelsResponseBodyChannels },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceChannelsResponseBody;
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
      body: DescribeDeviceChannelsResponseBody,
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

export class DescribeDeviceGatewayRequest extends $dara.Model {
  /**
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24611****70597051-cn-beijing
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      expire: 'Expire',
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      expire: 'number',
      id: 'string',
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

export class DescribeDeviceGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * 192.168.0.1
   */
  host?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * f5578fbc-694c-461d-a2a2-eb090775cef0
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      protocol: 'Protocol',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      protocol: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceGatewayResponseBody;
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
      body: DescribeDeviceGatewayResponseBody,
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

export class DescribeDeviceURLRequest extends $dara.Model {
  auth?: boolean;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * push
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live001
   */
  stream?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      expire: 'Expire',
      id: 'Id',
      mode: 'Mode',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      stream: 'Stream',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
      expire: 'number',
      id: 'string',
      mode: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      stream: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLResponseBody extends $dara.Model {
  /**
   * @example
   * 1639130258
   */
  expireTime?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * rtmp://demo.aliyundoc.com/live/live001?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      requestId: 'string',
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

export class DescribeDeviceURLResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeviceURLResponseBody;
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
      body: DescribeDeviceURLResponseBody,
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

export class DescribeDevicesRequest extends $dara.Model {
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 7D0*****4C0
   */
  dsn?: string;
  /**
   * @example
   * 310000000****0000002
   */
  gbId?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * false
   */
  includeDirectory?: boolean;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * 8yd*****qem
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      dsn: 'Dsn',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      includeDirectory: 'IncludeDirectory',
      includeStats: 'IncludeStats',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      dsn: 'string',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      includeDirectory: 'boolean',
      includeStats: 'boolean',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      status: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $dara.Model {
  devices?: DescribeDevicesResponseBodyDevices[];
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 77
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevices },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDevicesResponseBody;
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
      body: DescribeDevicesResponseBody,
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

export class DescribeDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * false
   */
  noPagination?: boolean;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * ID
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      noPagination: 'NoPagination',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      noPagination: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $dara.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirectoriesResponseBody;
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
      body: DescribeDirectoriesResponseBody,
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

export class DescribeDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * 2021-09-10T10:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
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

export class DescribeDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirectoryResponseBody;
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
      body: DescribeDirectoryResponseBody,
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

export class DescribeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeStats: 'IncludeStats',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeStats: 'boolean',
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

export class DescribeGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 337639*****24964-cn-qingdao
   */
  aliasId?: string;
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 3100000*****0000001
   */
  gbId?: string;
  /**
   * @example
   * 10.10.10.10
   */
  gbIp?: string;
  /**
   * @example
   * 5060
   */
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  /**
   * @example
   * 337639****224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  name?: string;
  /**
   * @example
   * flv,hls,rtmp
   */
  outProtocol?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  stats?: DescribeGroupResponseBodyStats;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliasId: 'AliasId',
      app: 'App',
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      enabled: 'Enabled',
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      gbTcpPorts: 'GbTcpPorts',
      gbUdpPorts: 'GbUdpPorts',
      id: 'Id',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
      requestId: 'RequestId',
      stats: 'Stats',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasId: 'string',
      app: 'string',
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      enabled: 'boolean',
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'number',
      gbTcpPorts: { 'type': 'array', 'itemType': 'string' },
      gbUdpPorts: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
      requestId: 'string',
      stats: DescribeGroupResponseBodyStats,
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gbTcpPorts)) {
      $dara.Model.validateArray(this.gbTcpPorts);
    }
    if(Array.isArray(this.gbUdpPorts)) {
      $dara.Model.validateArray(this.gbUdpPorts);
    }
    if(this.stats && typeof (this.stats as any).validate === 'function') {
      (this.stats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGroupResponseBody;
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
      body: DescribeGroupResponseBody,
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

export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      inProtocol: 'InProtocol',
      includeStats: 'IncludeStats',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inProtocol: 'string',
      includeStats: 'boolean',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
      sortBy: 'string',
      sortDirection: 'string',
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

export class DescribeGroupsResponseBody extends $dara.Model {
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGroupsResponseBody;
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
      body: DescribeGroupsResponseBody,
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

export class DescribeParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeParentPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @example
   * 31010*****317542006
   */
  clientGbId?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * 5160
   */
  clientPort?: number;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  /**
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  name?: string;
  /**
   * @example
   * 5060
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientGbId: 'ClientGbId',
      clientIp: 'ClientIp',
      clientPassword: 'ClientPassword',
      clientPort: 'ClientPort',
      clientUsername: 'ClientUsername',
      createdTime: 'CreatedTime',
      description: 'Description',
      gbId: 'GbId',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      port: 'Port',
      protocol: 'Protocol',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientGbId: 'string',
      clientIp: 'string',
      clientPassword: 'string',
      clientPort: 'number',
      clientUsername: 'string',
      createdTime: 'string',
      description: 'string',
      gbId: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      port: 'number',
      protocol: 'string',
      requestId: 'string',
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

export class DescribeParentPlatformResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParentPlatformResponseBody;
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
      body: DescribeParentPlatformResponseBody,
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

export class DescribeParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBody extends $dara.Model {
  devices?: DescribeParentPlatformDevicesResponseBodyDevices[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeParentPlatformDevicesResponseBodyDevices },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParentPlatformDevicesResponseBody;
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
      body: DescribeParentPlatformDevicesResponseBody,
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

export class DescribeParentPlatformsRequest extends $dara.Model {
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
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

export class DescribeParentPlatformsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  platforms?: DescribeParentPlatformsResponseBodyPlatforms[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      platforms: 'Platforms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      platforms: { 'type': 'array', 'itemType': DescribeParentPlatformsResponseBodyPlatforms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParentPlatformsResponseBody;
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
      body: DescribeParentPlatformsResponseBody,
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

export class DescribePresetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribePresetsResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  presets?: DescribePresetsResponseBodyPresets[];
  /**
   * @example
   * 9FE0CA83-BFD3-4EBD-A429-FABB9B9AE772
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      presets: 'Presets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      presets: { 'type': 'array', 'itemType': DescribePresetsResponseBodyPresets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.presets)) {
      $dara.Model.validateArray(this.presets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePresetsResponseBody;
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
      body: DescribePresetsResponseBody,
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

export class DescribePublishStreamStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class DescribePublishStreamStatusResponseBody extends $dara.Model {
  code?: number;
  message?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
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

export class DescribePublishStreamStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePublishStreamStatusResponseBody;
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
      body: DescribePublishStreamStatusResponseBody,
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

export class DescribePurchasedDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3614*****66212-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribePurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * 33763****77224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 2117*****0447
   */
  orderId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 12345*****67890
   */
  registerCode?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * dome
   */
  subType?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * 8yd*****qem
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      name: 'Name',
      orderId: 'OrderId',
      region: 'Region',
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      id: 'string',
      name: 'string',
      orderId: 'string',
      region: 'string',
      registerCode: 'string',
      requestId: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePurchasedDeviceResponseBody;
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
      body: DescribePurchasedDeviceResponseBody,
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

export class DescribePurchasedDevicesRequest extends $dara.Model {
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 4070*****1132-cn-qingdao
   */
  id?: string;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @example
   * dome
   */
  subType?: string;
  /**
   * @example
   * ipc
   */
  type?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      subType: 'SubType',
      type: 'Type',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
      subType: 'string',
      type: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponseBody extends $dara.Model {
  devices?: DescribePurchasedDevicesResponseBodyDevices[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribePurchasedDevicesResponseBodyDevices },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePurchasedDevicesResponseBody;
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
      body: DescribePurchasedDevicesResponseBody,
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

export class DescribeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-24T00:00:00Z
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  privateBucket?: boolean;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-11-22T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      privateBucket: 'PrivateBucket',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      startTime: 'StartTime',
      streamId: 'StreamId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      privateBucket: 'boolean',
      sortBy: 'string',
      sortDirection: 'string',
      startTime: 'string',
      streamId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 2018-12-10T11:00:00Z
   */
  nextStartTime?: string;
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  records?: DescribeRecordsResponseBodyRecords[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextStartTime: 'NextStartTime',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStartTime: 'string',
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecordsResponseBody;
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
      body: DescribeRecordsResponseBody,
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

export class DescribeRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBody extends $dara.Model {
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  /**
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  renderingSpec?: string;
  renderingStatus?: DescribeRenderingInstanceResponseBodyRenderingStatus;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  storageSize?: number;
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      hostname: 'Hostname',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      renderingStatus: 'RenderingStatus',
      requestId: 'RequestId',
      storageSize: 'StorageSize',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configInfo: DescribeRenderingInstanceResponseBodyConfigInfo,
      creationTime: 'string',
      hostname: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyPortMappings },
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      renderingStatus: DescribeRenderingInstanceResponseBodyRenderingStatus,
      requestId: 'string',
      storageSize: 'number',
      systemInfo: DescribeRenderingInstanceResponseBodySystemInfo,
    };
  }

  validate() {
    if(this.configInfo && typeof (this.configInfo as any).validate === 'function') {
      (this.configInfo as any).validate();
    }
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    if(this.renderingStatus && typeof (this.renderingStatus as any).validate === 'function') {
      (this.renderingStatus as any).validate();
    }
    if(this.systemInfo && typeof (this.systemInfo as any).validate === 'function') {
      (this.systemInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRenderingInstanceResponseBody;
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
      body: DescribeRenderingInstanceResponseBody,
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

export class DescribeRenderingInstanceConfigurationRequest extends $dara.Model {
  configuration?: DescribeRenderingInstanceConfigurationRequestConfiguration[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationRequestConfiguration },
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationShrinkRequest extends $dara.Model {
  configurationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationShrink: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBody extends $dara.Model {
  configuration?: DescribeRenderingInstanceConfigurationResponseBodyConfiguration[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfiguration },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRenderingInstanceConfigurationResponseBody;
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
      body: DescribeRenderingInstanceConfigurationResponseBody,
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

export class DescribeRenderingInstanceSettingsRequest extends $dara.Model {
  attributeNames?: string[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeNames)) {
      $dara.Model.validateArray(this.attributeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceSettingsShrinkRequest extends $dara.Model {
  attributeNamesShrink?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNamesShrink: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNamesShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  settings?: DescribeRenderingInstanceSettingsResponseBodySettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      settings: { 'type': 'array', 'itemType': DescribeRenderingInstanceSettingsResponseBodySettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceSettingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRenderingInstanceSettingsResponseBody;
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
      body: DescribeRenderingInstanceSettingsResponseBody,
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

export class DescribeStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeStreamResponseBody extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 2019-02-28T17:00:17Z
   */
  createdTime?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
   */
  name?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      createdTime: 'CreatedTime',
      deviceId: 'DeviceId',
      enabled: 'Enabled',
      groupId: 'GroupId',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      playDomain: 'PlayDomain',
      protocol: 'Protocol',
      pushDomain: 'PushDomain',
      requestId: 'RequestId',
      status: 'Status',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      createdTime: 'string',
      deviceId: 'string',
      enabled: 'boolean',
      groupId: 'string',
      height: 'number',
      id: 'string',
      name: 'string',
      playDomain: 'string',
      protocol: 'string',
      pushDomain: 'string',
      requestId: 'string',
      status: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamResponseBody;
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
      body: DescribeStreamResponseBody,
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

export class DescribeStreamURLRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  auth?: boolean;
  /**
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @example
   * 1571649499
   */
  endTime?: number;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @example
   * 1571639499
   */
  startTime?: number;
  /**
   * @example
   * sd
   */
  transcode?: string;
  /**
   * @example
   * live
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      authKey: 'AuthKey',
      endTime: 'EndTime',
      expire: 'Expire',
      id: 'Id',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      transcode: 'Transcode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'boolean',
      authKey: 'string',
      endTime: 'number',
      expire: 'number',
      id: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      startTime: 'number',
      transcode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLResponseBody extends $dara.Model {
  /**
   * @example
   * 1557977029
   */
  expireTime?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * rtmp://demo.aliyundoc.com/live/310101*****7542007?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      requestId: 'string',
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

export class DescribeStreamURLResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamURLResponseBody;
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
      body: DescribeStreamURLResponseBody,
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

export class DescribeStreamVodListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634873413
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18526049*****219118918-cn-beijing
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1639077653
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'string',
      ownerId: 'number',
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

export class DescribeStreamVodListResponseBody extends $dara.Model {
  records?: DescribeStreamVodListResponseBodyRecords[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeStreamVodListResponseBodyRecords },
      requestId: 'string',
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

export class DescribeStreamVodListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamVodListResponseBody;
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
      body: DescribeStreamVodListResponseBody,
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

export class DescribeStreamsRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3100000*****00000002
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      deviceId: 'DeviceId',
      domain: 'Domain',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      deviceId: 'string',
      domain: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  streams?: DescribeStreamsResponseBodyStreams[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      streams: 'Streams',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      streams: { 'type': 'array', 'itemType': DescribeStreamsResponseBodyStreams },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStreamsResponseBody;
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
      body: DescribeStreamsResponseBody,
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

export class DescribeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class DescribeTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @example
   * 2020-12-10T10:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  name?: string;
  /**
   * @example
   * my_oss_bucket
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  transConfigs?: DescribeTemplateResponseBodyTransConfigs[];
  /**
   * @example
   * auto
   */
  trigger?: string;
  /**
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      createdTime: 'CreatedTime',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      id: 'Id',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      region: 'Region',
      requestId: 'RequestId',
      retention: 'Retention',
      transConfigs: 'TransConfigs',
      trigger: 'Trigger',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      createdTime: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      id: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      region: 'string',
      requestId: 'string',
      retention: 'number',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplateResponseBodyTransConfigs },
      trigger: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transConfigs)) {
      $dara.Model.validateArray(this.transConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateResponseBody;
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
      body: DescribeTemplateResponseBody,
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

export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @example
   * 323434****83423432
   */
  id?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @example
   * record
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * F3F88C96-CA6E-573E-B8F7-5BE83A1A0BCF
   */
  requestId?: string;
  templates?: DescribeTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
      totalCount: 'number',
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

export class DescribeTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplatesResponseBody;
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
      body: DescribeTemplatesResponseBody,
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

export class DescribeVodStreamURLRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
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

export class DescribeVodStreamURLResponseBody extends $dara.Model {
  /**
   * @example
   * rtsp
   */
  outProtocol?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * rtsp://domain/live/stream?sign=xxxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      outProtocol: 'OutProtocol',
      port: 'Port',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outProtocol: 'string',
      port: 'number',
      requestId: 'string',
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

export class DescribeVodStreamURLResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVodStreamURLResponseBody;
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
      body: DescribeVodStreamURLResponseBody,
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

export class DescribeVsCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cert-539xxxx
   */
  certName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
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

export class DescribeVsCertificateDetailResponseBody extends $dara.Model {
  /**
   * @example
   * -----BEGIN CERTIFICATE-----xxxxx-----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @example
   * 63000000
   */
  certId?: number;
  /**
   * @example
   * cert-539xxxxx
   */
  certName?: string;
  /**
   * @example
   * xxxxx
   */
  key?: string;
  /**
   * @example
   * D94D0E1E-E71B-562D-8C18-969BB3653FBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certName: 'CertName',
      key: 'Key',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certName: 'string',
      key: 'string',
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

export class DescribeVsCertificateDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsCertificateDetailResponseBody;
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
      body: DescribeVsCertificateDetailResponseBody,
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

export class DescribeVsCertificateListRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsCertificateListResponseBody extends $dara.Model {
  certificateListModel?: DescribeVsCertificateListResponseBodyCertificateListModel;
  /**
   * @example
   * 6E310519-E035-51AB-80D4-C1CBECD39EB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeVsCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificateListModel && typeof (this.certificateListModel as any).validate === 'function') {
      (this.certificateListModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsCertificateListResponseBody;
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
      body: DescribeVsCertificateListResponseBody,
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

export class DescribeVsDevicesDataRequest extends $dara.Model {
  /**
   * @example
   * 2022-01-30T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @example
   * 2022-01-04T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupId: 'string',
      ownerId: 'number',
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

export class DescribeVsDevicesDataResponseBody extends $dara.Model {
  devicesDataPerInterval?: DescribeVsDevicesDataResponseBodyDevicesDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devicesDataPerInterval: 'DevicesDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devicesDataPerInterval: DescribeVsDevicesDataResponseBodyDevicesDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.devicesDataPerInterval && typeof (this.devicesDataPerInterval as any).validate === 'function') {
      (this.devicesDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDevicesDataResponseBody;
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
      body: DescribeVsDevicesDataResponseBody,
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

export class DescribeVsDomainBpsDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-02T02:30:48Z
   */
  endTime?: string;
  /**
   * @example
   * 300
   */
  interval?: string;
  /**
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @example
   * guangdong
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-12-26T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainBpsDataResponseBody extends $dara.Model {
  bpsDataPerInterval?: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval;
  /**
   * @example
   * 2100
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-01T07:10:48Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-09-18T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.bpsDataPerInterval && typeof (this.bpsDataPerInterval as any).validate === 'function') {
      (this.bpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainBpsDataResponseBody;
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
      body: DescribeVsDomainBpsDataResponseBody,
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

export class DescribeVsDomainCertificateInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsDomainCertificateInfoResponseBody extends $dara.Model {
  certInfos?: DescribeVsDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeVsDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certInfos && typeof (this.certInfos as any).validate === 'function') {
      (this.certInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainCertificateInfoResponseBody;
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
      body: DescribeVsDomainCertificateInfoResponseBody,
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

export class DescribeVsDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * path_based_ttl_set,oss_auth
   */
  functionNames?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
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

export class DescribeVsDomainConfigsResponseBody extends $dara.Model {
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
  /**
   * @example
   * D94D0E1E-E71B-562D-8C18-969BB3653FBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigs)) {
      $dara.Model.validateArray(this.domainConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainConfigsResponseBody;
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
      body: DescribeVsDomainConfigsResponseBody,
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

export class DescribeVsDomainDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsDomainDetailResponseBody extends $dara.Model {
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: DescribeVsDomainDetailResponseBodyDomainConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfig && typeof (this.domainConfig as any).validate === 'function') {
      (this.domainConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainDetailResponseBody;
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
      body: DescribeVsDomainDetailResponseBody,
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

export class DescribeVsDomainPvDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-15T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-10T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainPvDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-12T15:59:59Z
   */
  endTime?: string;
  pvDataInterval?: DescribeVsDomainPvDataResponseBodyPvDataInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-11-22T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvDataInterval: 'PvDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvDataInterval: DescribeVsDomainPvDataResponseBodyPvDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvDataInterval && typeof (this.pvDataInterval as any).validate === 'function') {
      (this.pvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainPvDataResponseBody;
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
      body: DescribeVsDomainPvDataResponseBody,
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

export class DescribeVsDomainPvUvDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-14T23:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainPvUvDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  pvUvDataInfos?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pvUvDataInfos: 'PvUvDataInfos',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pvUvDataInfos: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.pvUvDataInfos && typeof (this.pvUvDataInfos as any).validate === 'function') {
      (this.pvUvDataInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainPvUvDataResponseBody;
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
      body: DescribeVsDomainPvUvDataResponseBody,
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

export class DescribeVsDomainRecordDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-19T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 2021-09-29T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
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

export class DescribeVsDomainRecordDataResponseBody extends $dara.Model {
  recordDataPerInterval?: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordDataPerInterval: 'RecordDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDataPerInterval: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordDataPerInterval && typeof (this.recordDataPerInterval as any).validate === 'function') {
      (this.recordDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainRecordDataResponseBody;
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
      body: DescribeVsDomainRecordDataResponseBody,
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

export class DescribeVsDomainRegionDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainRegionDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-31T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-10-30T16:00:00Z
   */
  startTime?: string;
  value?: DescribeVsDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeVsDomainRegionDataResponseBodyValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainRegionDataResponseBody;
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
      body: DescribeVsDomainRegionDataResponseBody,
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

export class DescribeVsDomainReqBpsDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-16T07:00:46Z
   */
  endTime?: string;
  /**
   * @example
   * 300
   */
  interval?: string;
  /**
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @example
   * beijing
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @example
   * 2022-01-15T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainReqBpsDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-24T03:30:46Z
   */
  endTime?: string;
  reqBpsDataPerInterval?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-24T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqBpsDataPerInterval: 'ReqBpsDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqBpsDataPerInterval: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.reqBpsDataPerInterval && typeof (this.reqBpsDataPerInterval as any).validate === 'function') {
      (this.reqBpsDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainReqBpsDataResponseBody;
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
      body: DescribeVsDomainReqBpsDataResponseBody,
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

export class DescribeVsDomainReqTrafficDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-13T10:00:41Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @example
   * shanghai
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-09-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainReqTrafficDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-22T03:40:41Z
   */
  endTime?: string;
  reqTrafficDataPerInterval?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval;
  /**
   * @example
   * 9BEC5E85-C76B-56EF-A922-860EFDB8B64B
   */
  requestId?: string;
  /**
   * @example
   * 2021-09-21T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqTrafficDataPerInterval: 'ReqTrafficDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqTrafficDataPerInterval: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.reqTrafficDataPerInterval && typeof (this.reqTrafficDataPerInterval as any).validate === 'function') {
      (this.reqTrafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainReqTrafficDataResponseBody;
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
      body: DescribeVsDomainReqTrafficDataResponseBody,
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

export class DescribeVsDomainSnapshotDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-10-18T16:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-05T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainSnapshotDataResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  snapshotDataPerInterval?: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotDataPerInterval: 'SnapshotDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotDataPerInterval: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval,
    };
  }

  validate() {
    if(this.snapshotDataPerInterval && typeof (this.snapshotDataPerInterval as any).validate === 'function') {
      (this.snapshotDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainSnapshotDataResponseBody;
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
      body: DescribeVsDomainSnapshotDataResponseBody,
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

export class DescribeVsDomainTrafficDataRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-21T02:50:42Z
   */
  endTime?: string;
  /**
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @example
   * beijing
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-08-18T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainTrafficDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-09-20T07:10:42Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-10-25T16:00:00Z
   */
  startTime?: string;
  trafficDataPerInterval?: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      trafficDataPerInterval: 'TrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      trafficDataPerInterval: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval,
    };
  }

  validate() {
    if(this.trafficDataPerInterval && typeof (this.trafficDataPerInterval as any).validate === 'function') {
      (this.trafficDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainTrafficDataResponseBody;
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
      body: DescribeVsDomainTrafficDataResponseBody,
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

export class DescribeVsDomainUvDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2021-11-24T00:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-10-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsDomainUvDataResponseBody extends $dara.Model {
  /**
   * @example
   * 3600
   */
  dataInterval?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2015-11-30T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2015-11-29T00:00:00Z
   */
  startTime?: string;
  uvDataInterval?: DescribeVsDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeVsDomainUvDataResponseBodyUvDataInterval,
    };
  }

  validate() {
    if(this.uvDataInterval && typeof (this.uvDataInterval as any).validate === 'function') {
      (this.uvDataInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsDomainUvDataResponseBody;
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
      body: DescribeVsDomainUvDataResponseBody,
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

export class DescribeVsPullStreamInfoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsPullStreamInfoConfigResponseBody extends $dara.Model {
  liveAppRecordList?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAppRecordList: 'LiveAppRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecordList: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAppRecordList && typeof (this.liveAppRecordList as any).validate === 'function') {
      (this.liveAppRecordList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsPullStreamInfoConfigResponseBody;
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
      body: DescribeVsPullStreamInfoConfigResponseBody,
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

export class DescribeVsStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsStreamsNotifyUrlConfigResponseBody extends $dara.Model {
  liveStreamsNotifyConfig?: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamsNotifyConfig: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveStreamsNotifyConfig && typeof (this.liveStreamsNotifyConfig as any).validate === 'function') {
      (this.liveStreamsNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsStreamsNotifyUrlConfigResponseBody;
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
      body: DescribeVsStreamsNotifyUrlConfigResponseBody,
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

export class DescribeVsStreamsOnlineListRequest extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * publish_time_asc
   */
  orderBy?: string;
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
   * fuzzy
   */
  queryType?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @example
   * all
   */
  streamType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      streamName: 'StreamName',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      orderBy: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'string',
      streamName: 'string',
      streamType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBody extends $dara.Model {
  onlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfo;
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
   * B31FC4AD-3592-573E-8063-878F722B322A
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
      onlineInfo: 'OnlineInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineInfo: DescribeVsStreamsOnlineListResponseBodyOnlineInfo,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.onlineInfo && typeof (this.onlineInfo as any).validate === 'function') {
      (this.onlineInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsStreamsOnlineListResponseBody;
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
      body: DescribeVsStreamsOnlineListResponseBody,
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

export class DescribeVsStreamsPublishListRequest extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-06-30T19:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * publish_time_asc
   */
  orderBy?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 3000
   */
  pageSize?: number;
  /**
   * @example
   * fuzzy
   */
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T19:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @example
   * all
   */
  streamType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      startTime: 'StartTime',
      streamName: 'StreamName',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      orderBy: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'string',
      streamName: 'string',
      streamType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 3000
   */
  pageSize?: number;
  publishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfo;
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      publishInfo: 'PublishInfo',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      publishInfo: DescribeVsStreamsPublishListResponseBodyPublishInfo,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.publishInfo && typeof (this.publishInfo as any).validate === 'function') {
      (this.publishInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsStreamsPublishListResponseBody;
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
      body: DescribeVsStreamsPublishListResponseBody,
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

export class DescribeVsTopDomainsByFlowRequest extends $dara.Model {
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 3
   */
  limit?: number;
  ownerId?: number;
  /**
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      ownerId: 'number',
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

export class DescribeVsTopDomainsByFlowResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  domainCount?: number;
  /**
   * @example
   * 12
   */
  domainOnlineCount?: number;
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  topDomains?: DescribeVsTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      domainOnlineCount: 'number',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      topDomains: DescribeVsTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  validate() {
    if(this.topDomains && typeof (this.topDomains as any).validate === 'function') {
      (this.topDomains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsTopDomainsByFlowResponseBody;
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
      body: DescribeVsTopDomainsByFlowResponseBody,
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

export class DescribeVsUpPeakPublishStreamDataRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * on
   */
  domainSwitch?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T21:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSwitch: 'DomainSwitch',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSwitch: 'string',
      endTime: 'string',
      ownerId: 'number',
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

export class DescribeVsUpPeakPublishStreamDataResponseBody extends $dara.Model {
  describeVsUpPeakPublishStreamDatas?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas;
  /**
   * @example
   * 27A3C548-A699-48F9-97CD-F35D81075AF3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describeVsUpPeakPublishStreamDatas: 'DescribeVsUpPeakPublishStreamDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeVsUpPeakPublishStreamDatas: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.describeVsUpPeakPublishStreamDatas && typeof (this.describeVsUpPeakPublishStreamDatas as any).validate === 'function') {
      (this.describeVsUpPeakPublishStreamDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsUpPeakPublishStreamDataResponseBody;
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
      body: DescribeVsUpPeakPublishStreamDataResponseBody,
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

export class DescribeVsUserResourcePackageRequest extends $dara.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBody extends $dara.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  validate() {
    if(this.resourcePackageInfos && typeof (this.resourcePackageInfos as any).validate === 'function') {
      (this.resourcePackageInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsUserResourcePackageResponseBody;
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
      body: DescribeVsUserResourcePackageResponseBody,
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

export class DescribeVsVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

export class DescribeVsVerifyContentResponseBody extends $dara.Model {
  /**
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class DescribeVsVerifyContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVsVerifyContentResponseBody;
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
      body: DescribeVsVerifyContentResponseBody,
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

export class ForbidVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  /**
   * @example
   * yes
   */
  oneshot?: string;
  ownerId?: number;
  /**
   * @example
   * 2015-12-01T17:37:00Z
   */
  resumeTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      ownerId: 'OwnerId',
      resumeTime: 'ResumeTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      ownerId: 'number',
      resumeTime: 'string',
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

export class ForbidVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
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

export class ForbidVsStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ForbidVsStreamResponseBody;
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
      body: ForbidVsStreamResponseBody,
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

export class GetRenderingInstanceStreamingInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderingInstanceStreamingInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 792fy125-594c-4dde-ab35-9ff8hrf0a86f
   */
  flowId?: string;
  /**
   * @example
   * 10.178.208.22
   */
  gateway?: string;
  /**
   * @example
   * 10.18.20.2
   */
  hostname?: string;
  /**
   * @example
   * 10003
   */
  port?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      gateway: 'Gateway',
      hostname: 'Hostname',
      port: 'Port',
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      gateway: 'string',
      hostname: 'string',
      port: 'string',
      renderingInstanceId: 'string',
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

export class GetRenderingInstanceStreamingInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRenderingInstanceStreamingInfoResponseBody;
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
      body: GetRenderingInstanceStreamingInfoResponseBody,
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

export class GotoPresetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      presetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 30295DF1-1DC7-48BA-BE5A-D58E61EB2375
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class GotoPresetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GotoPresetResponseBody;
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
      body: GotoPresetResponseBody,
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

export class InstallCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAppResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class InstallCloudAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallCloudAppResponseBody;
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
      body: InstallCloudAppResponseBody,
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

export class ListCloudAppInstallationsRequest extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponseBody extends $dara.Model {
  installationInfos?: ListCloudAppInstallationsResponseBodyInstallationInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      installationInfos: 'InstallationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installationInfos: { 'type': 'array', 'itemType': ListCloudAppInstallationsResponseBodyInstallationInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.installationInfos)) {
      $dara.Model.validateArray(this.installationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudAppInstallationsResponseBody;
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
      body: ListCloudAppInstallationsResponseBody,
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

export class ListCloudAppsRequest extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      pageNumber: 'number',
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

export class ListCloudAppsResponseBody extends $dara.Model {
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudApps: 'CloudApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudApps: { 'type': 'array', 'itemType': ListCloudAppsResponseBodyCloudApps },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudApps)) {
      $dara.Model.validateArray(this.cloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudAppsResponseBody;
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
      body: ListCloudAppsResponseBody,
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

export class ListFilePushStatusesRequest extends $dara.Model {
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  pushStatuses?: ListFilePushStatusesResponseBodyPushStatuses[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pushStatuses: 'PushStatuses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pushStatuses: { 'type': 'array', 'itemType': ListFilePushStatusesResponseBodyPushStatuses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pushStatuses)) {
      $dara.Model.validateArray(this.pushStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilePushStatusesResponseBody;
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
      body: ListFilePushStatusesResponseBody,
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

export class ListFilesRequest extends $dara.Model {
  /**
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      pageNumber: 'number',
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

export class ListFilesResponseBody extends $dara.Model {
  files?: ListFilesResponseBodyFiles[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListFilesResponseBodyFiles },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilesResponseBody;
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
      body: ListFilesResponseBody,
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

export class ListPublicKeysRequest extends $dara.Model {
  /**
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  keyType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      pageNumber: 'number',
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

export class ListPublicKeysResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publicKeys?: ListPublicKeysResponseBodyPublicKeys[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicKeys: 'PublicKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publicKeys: { 'type': 'array', 'itemType': ListPublicKeysResponseBodyPublicKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicKeys)) {
      $dara.Model.validateArray(this.publicKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicKeysResponseBody;
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
      body: ListPublicKeysResponseBody,
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

export class ListRenderingDataPackagesRequest extends $dara.Model {
  category?: string;
  /**
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      dataPackageId: 'DataPackageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      dataPackageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
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

export class ListRenderingDataPackagesResponseBody extends $dara.Model {
  dataPackages?: ListRenderingDataPackagesResponseBodyDataPackages[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataPackages: 'DataPackages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackages: { 'type': 'array', 'itemType': ListRenderingDataPackagesResponseBodyDataPackages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataPackages)) {
      $dara.Model.validateArray(this.dataPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingDataPackagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRenderingDataPackagesResponseBody;
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
      body: ListRenderingDataPackagesResponseBody,
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

export class ListRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayInstanceId: 'GatewayInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstanceGatewayResponseBody extends $dara.Model {
  gatewayConfigurationInfos?: ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayConfigurationInfos: 'GatewayConfigurationInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayConfigurationInfos: { 'type': 'array', 'itemType': ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayConfigurationInfos)) {
      $dara.Model.validateArray(this.gatewayConfigurationInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstanceGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRenderingInstanceGatewayResponseBody;
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
      body: ListRenderingInstanceGatewayResponseBody,
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

export class ListRenderingInstancesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponseBody extends $dara.Model {
  renderingInstances?: ListRenderingInstancesResponseBodyRenderingInstances[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      renderingInstances: 'RenderingInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstances: { 'type': 'array', 'itemType': ListRenderingInstancesResponseBodyRenderingInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstances)) {
      $dara.Model.validateArray(this.renderingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRenderingInstancesResponseBody;
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
      body: ListRenderingInstancesResponseBody,
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

export class ManageLoginRequest extends $dara.Model {
  /**
   * @example
   * open
   */
  actionName?: string;
  /**
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      keyGroup: 'string',
      keyName: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponseBody extends $dara.Model {
  loginInfo?: ManageLoginResponseBodyLoginInfo;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginInfo: 'LoginInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginInfo: ManageLoginResponseBodyLoginInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginInfo && typeof (this.loginInfo as any).validate === 'function') {
      (this.loginInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManageLoginResponseBody;
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
      body: ManageLoginResponseBody,
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

export class ModifyDeviceRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alarmMethod?: string;
  autoDirectory?: boolean;
  /**
   * @example
   * false
   */
  autoPos?: boolean;
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  description?: string;
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  directoryId?: string;
  /**
   * @example
   * 3100000****000000002
   */
  gbId?: string;
  /**
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @example
   * 119.20
   */
  latitude?: string;
  /**
   * @example
   * 45.00
   */
  longitude?: string;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * 300
   */
  posInterval?: number;
  /**
   * @example
   * ipc
   */
  type?: string;
  /**
   * @example
   * rtmp://xxx/xxx
   */
  url?: string;
  /**
   * @example
   * admin
   */
  username?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      autoDirectory: 'AutoDirectory',
      autoPos: 'AutoPos',
      autoStart: 'AutoStart',
      description: 'Description',
      directoryId: 'DirectoryId',
      gbId: 'GbId',
      groupId: 'GroupId',
      id: 'Id',
      ip: 'Ip',
      latitude: 'Latitude',
      longitude: 'Longitude',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      parentId: 'ParentId',
      password: 'Password',
      port: 'Port',
      posInterval: 'PosInterval',
      type: 'Type',
      url: 'Url',
      username: 'Username',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      autoDirectory: 'boolean',
      autoPos: 'boolean',
      autoStart: 'boolean',
      description: 'string',
      directoryId: 'string',
      gbId: 'string',
      groupId: 'string',
      id: 'string',
      ip: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
      ownerId: 'number',
      params: 'string',
      parentId: 'string',
      password: 'string',
      port: 'number',
      posInterval: 'number',
      type: 'string',
      url: 'string',
      username: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDeviceResponseBody;
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
      body: ModifyDeviceResponseBody,
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

export class ModifyDeviceAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0dGo7jLwwf1000296232
   */
  alarmId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  channelId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      channelId: 'ChannelId',
      id: 'Id',
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      channelId: 'number',
      id: 'string',
      ownerId: 'number',
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

export class ModifyDeviceAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ModifyDeviceAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDeviceAlarmResponseBody;
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
      body: ModifyDeviceAlarmResponseBody,
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

export class ModifyDeviceCaptureRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 0
   */
  image?: number;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  video?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      image: 'Image',
      ownerId: 'OwnerId',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      image: 'number',
      ownerId: 'number',
      video: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceCaptureResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ModifyDeviceCaptureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDeviceCaptureResponseBody;
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
      body: ModifyDeviceCaptureResponseBody,
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

export class ModifyDeviceChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channels?: string;
  /**
   * @example
   * on
   */
  deviceStatus?: string;
  /**
   * @example
   * 210235C3GN32090008286cf17e130d
   */
  dsn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      deviceStatus: 'DeviceStatus',
      dsn: 'Dsn',
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'string',
      deviceStatus: 'string',
      dsn: 'string',
      id: 'string',
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

export class ModifyDeviceChannelsResponseBody extends $dara.Model {
  /**
   * @example
   * 8F4D95B6-EB19-5245-AD77-95EDA83E53B7
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

export class ModifyDeviceChannelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDeviceChannelsResponseBody;
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
      body: ModifyDeviceChannelsResponseBody,
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

export class ModifyDirectoryRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  name?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
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

export class ModifyDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDirectoryResponseBody;
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
      body: ModifyDirectoryResponseBody,
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

export class ModifyGroupRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487739092994-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @example
   * myGroup
   */
  name?: string;
  /**
   * @example
   * flv,rtmp,hls
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @example
   * myplay.com
   */
  playDomain?: string;
  /**
   * @example
   * mypush.com
   */
  pushDomain?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 32388487739092994-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGroupResponseBody;
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
      body: ModifyGroupResponseBody,
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

export class ModifyParentPlatformRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  description?: string;
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 5060
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientPassword: 'ClientPassword',
      clientUsername: 'ClientUsername',
      description: 'Description',
      gbId: 'GbId',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      ownerId: 'OwnerId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientPassword: 'string',
      clientUsername: 'string',
      description: 'string',
      gbId: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      ownerId: 'number',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyParentPlatformResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyParentPlatformResponseBody;
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
      body: ModifyParentPlatformResponseBody,
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

export class ModifyRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @example
   * 20
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6DFE7B89-8532-566F-B5CE-924B10FCE7AC
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

export class ModifyRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRenderingInstanceResponseBody;
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
      body: ModifyRenderingInstanceResponseBody,
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

export class ModifyRenderingInstanceBandwidthRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxEgressBandwidth: 'number',
      maxIngressBandwidth: 'number',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRenderingInstanceBandwidthResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ModifyRenderingInstanceBandwidthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRenderingInstanceBandwidthResponseBody;
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
      body: ModifyRenderingInstanceBandwidthResponseBody,
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

export class ModifyTemplateRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @example
   * hls
   */
  fileFormat?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  flv?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  hlsM3u8?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{UnixTimestamp}_{Sequence}
   */
  hlsTs?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}_ondemand.jpg
   */
  jpgOnDemand?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}.jpg
   */
  jpgOverwrite?: string;
  /**
   * @example
   * osspath/snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  jpgSequence?: string;
  /**
   * @example
   * osspath/record/{StreamName}/{EscapedStartTime}_{EscapedEndTime}
   */
  mp4?: string;
  name?: string;
  /**
   * @example
   * bucketname
   */
  ossBucket?: string;
  /**
   * @example
   * oss-cn-qingdao.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @example
   * oss-prefix
   */
  ossFilePrefix?: string;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * 3
   */
  retention?: number;
  /**
   * @example
   * [{"Fps":25,"Gop":50,"Height":720,"VideoCodec":"h264","Width":1280,"Name":"sd","VideoBitrate":800}]
   */
  transConfigsJSON?: string;
  /**
   * @example
   * auto
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      fileFormat: 'FileFormat',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      id: 'Id',
      interval: 'Interval',
      jpgOnDemand: 'JpgOnDemand',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      mp4: 'Mp4',
      name: 'Name',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      ownerId: 'OwnerId',
      region: 'Region',
      retention: 'Retention',
      transConfigsJSON: 'TransConfigsJSON',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      description: 'string',
      fileFormat: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      id: 'string',
      interval: 'number',
      jpgOnDemand: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      mp4: 'string',
      name: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      ownerId: 'number',
      region: 'string',
      retention: 'number',
      transConfigsJSON: 'string',
      trigger: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class ModifyTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTemplateResponseBody;
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
      body: ModifyTemplateResponseBody,
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

export class OpenVsServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 150275784
   */
  orderId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

export class OpenVsServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenVsServiceResponseBody;
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
      body: OpenVsServiceResponseBody,
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

export class PushFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-1671accd4dafdag3er256cvgewt13f7141db2f7
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFileResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class PushFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushFileResponseBody;
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
      body: PushFileResponseBody,
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

export class RebootRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class RebootRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootRenderingInstanceResponseBody;
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
      body: RebootRenderingInstanceResponseBody,
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

export class RecoverRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp-449ea3d16c0841b8bf33ec5bbc86a152
   */
  dataPackageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageId: 'DataPackageId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverRenderingDataPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class RecoverRenderingDataPackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverRenderingDataPackageResponseBody;
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
      body: RecoverRenderingDataPackageResponseBody,
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

export class RefreshRenderingInstanceStreamingRequest extends $dara.Model {
  clientInfo?: RefreshRenderingInstanceStreamingRequestClientInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: RefreshRenderingInstanceStreamingRequestClientInfo,
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(this.clientInfo && typeof (this.clientInfo as any).validate === 'function') {
      (this.clientInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshRenderingInstanceStreamingShrinkRequest extends $dara.Model {
  clientInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfoShrink: 'ClientInfo',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshRenderingInstanceStreamingResponseBody extends $dara.Model {
  /**
   * @example
   * 792fy125-594c-4dde-ab35-9ff8hrf0a86f
   */
  flowId?: string;
  /**
   * @example
   * 10.178.208.22
   */
  gateway?: string;
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      gateway: 'Gateway',
      hostname: 'Hostname',
      port: 'Port',
      renderingInstanceId: 'RenderingInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      gateway: 'string',
      hostname: 'string',
      port: 'string',
      renderingInstanceId: 'string',
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

export class RefreshRenderingInstanceStreamingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshRenderingInstanceStreamingResponseBody;
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
      body: RefreshRenderingInstanceStreamingResponseBody,
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

export class ReleaseRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dp-9f8c57355d224ad7beaf95e145f22111
   */
  dataPackageId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPackageId: 'DataPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPackageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseRenderingDataPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5BEF36E7-3838-5B92-BA32-87DBF1425ABC
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

export class ReleaseRenderingDataPackageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseRenderingDataPackageResponseBody;
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
      body: ReleaseRenderingDataPackageResponseBody,
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

export class ReleaseRenderingInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ReleaseRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseRenderingInstanceResponseBody;
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
      body: ReleaseRenderingInstanceResponseBody,
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

export class RenewRenderingInstanceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      period: 'Period',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      period: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class RenewRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewRenderingInstanceResponseBody;
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
      body: RenewRenderingInstanceResponseBody,
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

export class ResetRenderingInstanceRequest extends $dara.Model {
  /**
   * @example
   * Reset
   */
  actionName?: string;
  dataPackageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      dataPackageId: 'DataPackageId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      dataPackageId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetRenderingInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ResetRenderingInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetRenderingInstanceResponseBody;
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
      body: ResetRenderingInstanceResponseBody,
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

export class ResumeVsStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxApp
   */
  appName?: string;
  controlStreamAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * publisher
   */
  liveStreamType?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      controlStreamAction: 'ControlStreamAction',
      domainName: 'DomainName',
      liveStreamType: 'LiveStreamType',
      ownerId: 'OwnerId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      controlStreamAction: 'string',
      domainName: 'string',
      liveStreamType: 'string',
      ownerId: 'number',
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

export class ResumeVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class ResumeVsStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeVsStreamResponseBody;
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
      body: ResumeVsStreamResponseBody,
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

export class SendRenderingInstanceCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * date;ls -l /tmp
   */
  commands?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRenderingInstanceCommandsResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * Thu Jun 27 16:06:26 CST 2024
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

export class SendRenderingInstanceCommandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendRenderingInstanceCommandsResponseBody;
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
      body: SendRenderingInstanceCommandsResponseBody,
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

export class SetPresetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      presetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 30295DF1-1DC7-48BA-BE5A-D58E61EB2375
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class SetPresetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPresetResponseBody;
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
      body: SetPresetResponseBody,
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

export class SetVsDomainCertificateRequest extends $dara.Model {
  /**
   * @example
   * Cert-77****7
   */
  certName?: string;
  /**
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  forceSet?: string;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * xxxxxxx
   */
  SSLPri?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @example
   * 328uiuii28****82dsada81
   */
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      region: 'Region',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      forceSet: 'string',
      ownerId: 'number',
      region: 'string',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsDomainCertificateResponseBody extends $dara.Model {
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
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

export class SetVsDomainCertificateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetVsDomainCertificateResponseBody;
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
      body: SetVsDomainCertificateResponseBody,
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

export class SetVsStreamsNotifyUrlConfigRequest extends $dara.Model {
  /**
   * @example
   * ocs*****ace
   */
  authKey?: string;
  /**
   * @example
   * type_a
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xxx.com/xx
   */
  notifyUrl?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authType: 'AuthType',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authType: 'string',
      domainName: 'string',
      notifyUrl: 'string',
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

export class SetVsStreamsNotifyUrlConfigResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class SetVsStreamsNotifyUrlConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetVsStreamsNotifyUrlConfigResponseBody;
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
      body: SetVsStreamsNotifyUrlConfigResponseBody,
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

export class StartDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323884****9092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StartDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 323884****9092996
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StartDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDeviceResponseBody;
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
      body: StartDeviceResponseBody,
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

export class StartParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StartParentPlatformResponseBody extends $dara.Model {
  /**
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StartParentPlatformResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartParentPlatformResponseBody;
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
      body: StartParentPlatformResponseBody,
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

export class StartPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      publishUrl: 'PublishUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      publishUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPublishStreamResponseBody extends $dara.Model {
  code?: number;
  message?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
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

export class StartPublishStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartPublishStreamResponseBody;
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
      body: StartPublishStreamResponseBody,
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

export class StartRecordStreamRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 310000*****000002
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * example.com
   */
  playDomain?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      playDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class StartRecordStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRecordStreamResponseBody;
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
      body: StartRecordStreamResponseBody,
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

export class StartStreamRequest extends $dara.Model {
  /**
   * @example
   * 1599336385
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 1589336385
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'string',
      ownerId: 'number',
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

export class StartStreamResponseBody extends $dara.Model {
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000000000000002
   */
  name?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

export class StartStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartStreamResponseBody;
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
      body: StartStreamResponseBody,
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

export class StartTransferStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * sd
   */
  transcode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      transcode: 'Transcode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      transcode: 'string',
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

export class StartTransferStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class StartTransferStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTransferStreamResponseBody;
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
      body: StartTransferStreamResponseBody,
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

export class StopAdjustRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  focus?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * true
   */
  iris?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      focus: 'Focus',
      id: 'Id',
      iris: 'Iris',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focus: 'boolean',
      id: 'string',
      iris: 'boolean',
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

export class StopAdjustResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StopAdjustResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAdjustResponseBody;
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
      body: StopAdjustResponseBody,
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

export class StopDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
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

export class StopDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StopDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDeviceResponseBody;
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
      body: StopDeviceResponseBody,
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

export class StopMoveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * true
   */
  pan?: boolean;
  /**
   * @example
   * true
   */
  tilt?: boolean;
  /**
   * @example
   * true
   */
  zoom?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pan: 'Pan',
      tilt: 'Tilt',
      zoom: 'Zoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      pan: 'boolean',
      tilt: 'boolean',
      zoom: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StopMoveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMoveResponseBody;
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
      body: StopMoveResponseBody,
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

export class StopPublishStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class StopPublishStreamResponseBody extends $dara.Model {
  code?: number;
  message?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'number',
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

export class StopPublishStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopPublishStreamResponseBody;
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
      body: StopPublishStreamResponseBody,
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

export class StopRecordStreamRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * example.com
   */
  playDomain?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
      playDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class StopRecordStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRecordStreamResponseBody;
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
      body: StopRecordStreamResponseBody,
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

export class StopStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487****92997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 31000000*****0000002
   */
  name?: string;
  ownerId?: number;
  /**
   * @example
   * 2021-12-12T10:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      ownerId: 'number',
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

export class StopStreamResponseBody extends $dara.Model {
  /**
   * @example
   * 32388487****92997-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class StopStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopStreamResponseBody;
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
      body: StopStreamResponseBody,
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

export class StopTransferStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323434****83423432
   */
  id?: string;
  ownerId?: number;
  /**
   * @example
   * sd
   */
  transcode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      transcode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTransferStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class StopTransferStreamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTransferStreamResponseBody;
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
      body: StopTransferStreamResponseBody,
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

export class SyncCatalogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3238****739092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class SyncCatalogsResponseBody extends $dara.Model {
  /**
   * @example
   * 3238****739092996
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class SyncCatalogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncCatalogsResponseBody;
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
      body: SyncCatalogsResponseBody,
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

export class UnbindDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 34871************3380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3998**************9488-cn-qingdao
   */
  directoryId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      directoryId: 'string',
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

export class UnbindDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UnbindDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindDirectoryResponseBody;
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
      body: UnbindDirectoryResponseBody,
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

export class UnbindParentPlatformDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindParentPlatformDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UnbindParentPlatformDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindParentPlatformDeviceResponseBody;
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
      body: UnbindParentPlatformDeviceResponseBody,
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

export class UnbindPurchasedDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3939*****6580539-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
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

export class UnbindPurchasedDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UnbindPurchasedDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindPurchasedDeviceResponseBody;
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
      body: UnbindPurchasedDeviceResponseBody,
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

export class UnbindTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group
   */
  instanceType?: string;
  ownerId?: number;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ownerId: 'number',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      requestId: 'string',
      templateId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindTemplateResponseBody;
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
      body: UnbindTemplateResponseBody,
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

export class UninstallCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallCloudAppResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UninstallCloudAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallCloudAppResponseBody;
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
      body: UninstallCloudAppResponseBody,
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

export class UnlockDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323884****9092996
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class UnlockDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 323884****9092996
   */
  id?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

export class UnlockDeviceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockDeviceResponseBody;
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
      body: UnlockDeviceResponseBody,
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

export class UpdateCloudAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudAppInfoResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UpdateCloudAppInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCloudAppInfoResponseBody;
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
      body: UpdateCloudAppInfoResponseBody,
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

export class UpdateFileInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-16713accddtgtj6340jgnclhwsg1813f718db2f7
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileInfoResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UpdateFileInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFileInfoResponseBody;
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
      body: UpdateFileInfoResponseBody,
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

export class UpdateRenderingInstanceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: UpdateRenderingInstanceConfigurationRequestConfiguration[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': UpdateRenderingInstanceConfigurationRequestConfiguration },
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configurationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationShrink: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UpdateRenderingInstanceConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRenderingInstanceConfigurationResponseBody;
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
      body: UpdateRenderingInstanceConfigurationResponseBody,
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

export class UpdateRenderingInstanceSettingsRequest extends $dara.Model {
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  settings?: UpdateRenderingInstanceSettingsRequestSettings[];
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      settings: { 'type': 'array', 'itemType': UpdateRenderingInstanceSettingsRequestSettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceSettingsShrinkRequest extends $dara.Model {
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  settingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      settingsShrink: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      settingsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UpdateRenderingInstanceSettingsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRenderingInstanceSettingsResponseBody;
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
      body: UpdateRenderingInstanceSettingsResponseBody,
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

export class UpdateVsPullStreamInfoConfigRequest extends $dara.Model {
  always?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 2018-12-10T18:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * up.xxx.com.cn
   */
  sourceUrl?: string;
  /**
   * @example
   * 2021-12-10T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxStream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      always: 'Always',
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      always: 'string',
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      sourceUrl: 'string',
      startTime: 'string',
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

export class UpdateVsPullStreamInfoConfigResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UpdateVsPullStreamInfoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVsPullStreamInfoConfigResponseBody;
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
      body: UpdateVsPullStreamInfoConfigResponseBody,
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

export class UploadCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1
   */
  appVersion?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0CFBB7BD10CDD7279642ADAB8FEF3DEE
   */
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      downloadUrl: 'string',
      md5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCloudAppResponseBody extends $dara.Model {
  /**
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

export class UploadCloudAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCloudAppResponseBody;
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
      body: UploadCloudAppResponseBody,
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

export class UploadFileRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mytest
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 150b6083f50dd08159d45a0d5e4b56f9
   */
  md5?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.tar
   */
  originUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /data/tmp/test/xxx.tar
   */
  targetPath?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileName: 'FileName',
      md5: 'Md5',
      originUrl: 'OriginUrl',
      targetPath: 'TargetPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileName: 'string',
      md5: 'string',
      originUrl: 'string',
      targetPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBody extends $dara.Model {
  /**
   * @example
   * f-1671330gr7934d4771813f7141d28db2f7
   */
  fileId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

export class UploadFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadFileResponseBody;
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
      body: UploadFileResponseBody,
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

export class UploadPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * verify_dffeb6610035dcb77b413a59c3*****
   */
  content?: string;
  description?: string;
  /**
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mykey-v1.0
   */
  keyName?: string;
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPublicKeyResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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

export class UploadPublicKeyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadPublicKeyResponseBody;
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
      body: UploadPublicKeyResponseBody,
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

export class VerifyVsDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dnsCheck
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVsDomainOwnerResponseBody extends $dara.Model {
  /**
   * @example
   * verify_dffeb6610035dcb77b413a59c32c****
   */
  content?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class VerifyVsDomainOwnerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyVsDomainOwnerResponseBody;
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
      body: VerifyVsDomainOwnerResponseBody,
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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfigWithOptions(request: AddVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<AddVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.always)) {
      query["Always"] = request.always;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new AddVsPullStreamInfoConfigResponse({}));
    } else {
      return $dara.cast<AddVsPullStreamInfoConfigResponse>(await this.execute(params, req, runtime), new AddVsPullStreamInfoConfigResponse({}));
    }

  }

  /**
   * @param request - AddVsPullStreamInfoConfigRequest
   * @returns AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfig(request: AddVsPullStreamInfoConfigRequest): Promise<AddVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindDirectoriesResponse
   */
  async batchBindDirectoriesWithOptions(request: BatchBindDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<BatchBindDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchBindDirectoriesResponse>(await this.callApi(params, req, runtime), new BatchBindDirectoriesResponse({}));
    } else {
      return $dara.cast<BatchBindDirectoriesResponse>(await this.execute(params, req, runtime), new BatchBindDirectoriesResponse({}));
    }

  }

  /**
   * @param request - BatchBindDirectoriesRequest
   * @returns BatchBindDirectoriesResponse
   */
  async batchBindDirectories(request: BatchBindDirectoriesRequest): Promise<BatchBindDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevicesWithOptions(request: BatchBindParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchBindParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchBindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new BatchBindParentPlatformDevicesResponse({}));
    } else {
      return $dara.cast<BatchBindParentPlatformDevicesResponse>(await this.execute(params, req, runtime), new BatchBindParentPlatformDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchBindParentPlatformDevicesRequest
   * @returns BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevices(request: BatchBindParentPlatformDevicesRequest): Promise<BatchBindParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindPurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevicesWithOptions(request: BatchBindPurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchBindPurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindPurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchBindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new BatchBindPurchasedDevicesResponse({}));
    } else {
      return $dara.cast<BatchBindPurchasedDevicesResponse>(await this.execute(params, req, runtime), new BatchBindPurchasedDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchBindPurchasedDevicesRequest
   * @returns BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevices(request: BatchBindPurchasedDevicesRequest): Promise<BatchBindPurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindTemplateResponse
   */
  async batchBindTemplateWithOptions(request: BatchBindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<BatchBindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchBindTemplateResponse>(await this.callApi(params, req, runtime), new BatchBindTemplateResponse({}));
    } else {
      return $dara.cast<BatchBindTemplateResponse>(await this.execute(params, req, runtime), new BatchBindTemplateResponse({}));
    }

  }

  /**
   * @param request - BatchBindTemplateRequest
   * @returns BatchBindTemplateResponse
   */
  async batchBindTemplate(request: BatchBindTemplateRequest): Promise<BatchBindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - BatchBindTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchBindTemplatesResponse
   */
  async batchBindTemplatesWithOptions(request: BatchBindTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<BatchBindTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchBindTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchBindTemplatesResponse>(await this.callApi(params, req, runtime), new BatchBindTemplatesResponse({}));
    } else {
      return $dara.cast<BatchBindTemplatesResponse>(await this.execute(params, req, runtime), new BatchBindTemplatesResponse({}));
    }

  }

  /**
   * @param request - BatchBindTemplatesRequest
   * @returns BatchBindTemplatesResponse
   */
  async batchBindTemplates(request: BatchBindTemplatesRequest): Promise<BatchBindTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchBindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDevicesResponse
   */
  async batchDeleteDevicesWithOptions(request: BatchDeleteDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchDeleteDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchDeleteDevicesResponse>(await this.callApi(params, req, runtime), new BatchDeleteDevicesResponse({}));
    } else {
      return $dara.cast<BatchDeleteDevicesResponse>(await this.execute(params, req, runtime), new BatchDeleteDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchDeleteDevicesRequest
   * @returns BatchDeleteDevicesResponse
   */
  async batchDeleteDevices(request: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchDeleteVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigsWithOptions(request: BatchDeleteVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<BatchDeleteVsDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchDeleteVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchDeleteVsDomainConfigsResponse({}));
    } else {
      return $dara.cast<BatchDeleteVsDomainConfigsResponse>(await this.execute(params, req, runtime), new BatchDeleteVsDomainConfigsResponse({}));
    }

  }

  /**
   * @param request - BatchDeleteVsDomainConfigsRequest
   * @returns BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigs(request: BatchDeleteVsDomainConfigsRequest): Promise<BatchDeleteVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchForbidVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchForbidVsStreamResponse
   */
  async batchForbidVsStreamWithOptions(request: BatchForbidVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<BatchForbidVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchForbidVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchForbidVsStreamResponse>(await this.callApi(params, req, runtime), new BatchForbidVsStreamResponse({}));
    } else {
      return $dara.cast<BatchForbidVsStreamResponse>(await this.execute(params, req, runtime), new BatchForbidVsStreamResponse({}));
    }

  }

  /**
   * @param request - BatchForbidVsStreamRequest
   * @returns BatchForbidVsStreamResponse
   */
  async batchForbidVsStream(request: BatchForbidVsStreamRequest): Promise<BatchForbidVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchForbidVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request - BatchResumeVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchResumeVsStreamResponse
   */
  async batchResumeVsStreamWithOptions(request: BatchResumeVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<BatchResumeVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchResumeVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchResumeVsStreamResponse>(await this.callApi(params, req, runtime), new BatchResumeVsStreamResponse({}));
    } else {
      return $dara.cast<BatchResumeVsStreamResponse>(await this.execute(params, req, runtime), new BatchResumeVsStreamResponse({}));
    }

  }

  /**
   * @param request - BatchResumeVsStreamRequest
   * @returns BatchResumeVsStreamResponse
   */
  async batchResumeVsStream(request: BatchResumeVsStreamRequest): Promise<BatchResumeVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchResumeVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request - BatchSetVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigsWithOptions(request: BatchSetVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<BatchSetVsDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!$dara.isNull(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSetVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchSetVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetVsDomainConfigsResponse({}));
    } else {
      return $dara.cast<BatchSetVsDomainConfigsResponse>(await this.execute(params, req, runtime), new BatchSetVsDomainConfigsResponse({}));
    }

  }

  /**
   * @param request - BatchSetVsDomainConfigsRequest
   * @returns BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigs(request: BatchSetVsDomainConfigsRequest): Promise<BatchSetVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSetVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStartDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartDevicesResponse
   */
  async batchStartDevicesWithOptions(request: BatchStartDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchStartDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchStartDevicesResponse>(await this.callApi(params, req, runtime), new BatchStartDevicesResponse({}));
    } else {
      return $dara.cast<BatchStartDevicesResponse>(await this.execute(params, req, runtime), new BatchStartDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchStartDevicesRequest
   * @returns BatchStartDevicesResponse
   */
  async batchStartDevices(request: BatchStartDevicesRequest): Promise<BatchStartDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStartStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartStreamsResponse
   */
  async batchStartStreamsWithOptions(request: BatchStartStreamsRequest, runtime: $dara.RuntimeOptions): Promise<BatchStartStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchStartStreamsResponse>(await this.callApi(params, req, runtime), new BatchStartStreamsResponse({}));
    } else {
      return $dara.cast<BatchStartStreamsResponse>(await this.execute(params, req, runtime), new BatchStartStreamsResponse({}));
    }

  }

  /**
   * @param request - BatchStartStreamsRequest
   * @returns BatchStartStreamsResponse
   */
  async batchStartStreams(request: BatchStartStreamsRequest): Promise<BatchStartStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStartStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStopDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopDevicesResponse
   */
  async batchStopDevicesWithOptions(request: BatchStopDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchStopDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchStopDevicesResponse>(await this.callApi(params, req, runtime), new BatchStopDevicesResponse({}));
    } else {
      return $dara.cast<BatchStopDevicesResponse>(await this.execute(params, req, runtime), new BatchStopDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchStopDevicesRequest
   * @returns BatchStopDevicesResponse
   */
  async batchStopDevices(request: BatchStopDevicesRequest): Promise<BatchStopDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchStopStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopStreamsResponse
   */
  async batchStopStreamsWithOptions(request: BatchStopStreamsRequest, runtime: $dara.RuntimeOptions): Promise<BatchStopStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchStopStreamsResponse>(await this.callApi(params, req, runtime), new BatchStopStreamsResponse({}));
    } else {
      return $dara.cast<BatchStopStreamsResponse>(await this.execute(params, req, runtime), new BatchStopStreamsResponse({}));
    }

  }

  /**
   * @param request - BatchStopStreamsRequest
   * @returns BatchStopStreamsResponse
   */
  async batchStopStreams(request: BatchStopStreamsRequest): Promise<BatchStopStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchStopStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectoriesWithOptions(request: BatchUnbindDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<BatchUnbindDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchUnbindDirectoriesResponse>(await this.callApi(params, req, runtime), new BatchUnbindDirectoriesResponse({}));
    } else {
      return $dara.cast<BatchUnbindDirectoriesResponse>(await this.execute(params, req, runtime), new BatchUnbindDirectoriesResponse({}));
    }

  }

  /**
   * @param request - BatchUnbindDirectoriesRequest
   * @returns BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectories(request: BatchUnbindDirectoriesRequest): Promise<BatchUnbindDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevicesWithOptions(request: BatchUnbindParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchUnbindParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchUnbindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new BatchUnbindParentPlatformDevicesResponse({}));
    } else {
      return $dara.cast<BatchUnbindParentPlatformDevicesResponse>(await this.execute(params, req, runtime), new BatchUnbindParentPlatformDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchUnbindParentPlatformDevicesRequest
   * @returns BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevices(request: BatchUnbindParentPlatformDevicesRequest): Promise<BatchUnbindParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindPurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevicesWithOptions(request: BatchUnbindPurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<BatchUnbindPurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindPurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchUnbindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new BatchUnbindPurchasedDevicesResponse({}));
    } else {
      return $dara.cast<BatchUnbindPurchasedDevicesResponse>(await this.execute(params, req, runtime), new BatchUnbindPurchasedDevicesResponse({}));
    }

  }

  /**
   * @param request - BatchUnbindPurchasedDevicesRequest
   * @returns BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevices(request: BatchUnbindPurchasedDevicesRequest): Promise<BatchUnbindPurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindTemplateResponse
   */
  async batchUnbindTemplateWithOptions(request: BatchUnbindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<BatchUnbindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchUnbindTemplateResponse>(await this.callApi(params, req, runtime), new BatchUnbindTemplateResponse({}));
    } else {
      return $dara.cast<BatchUnbindTemplateResponse>(await this.execute(params, req, runtime), new BatchUnbindTemplateResponse({}));
    }

  }

  /**
   * @param request - BatchUnbindTemplateRequest
   * @returns BatchUnbindTemplateResponse
   */
  async batchUnbindTemplate(request: BatchUnbindTemplateRequest): Promise<BatchUnbindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - BatchUnbindTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplatesWithOptions(request: BatchUnbindTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<BatchUnbindTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUnbindTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchUnbindTemplatesResponse>(await this.callApi(params, req, runtime), new BatchUnbindTemplatesResponse({}));
    } else {
      return $dara.cast<BatchUnbindTemplatesResponse>(await this.execute(params, req, runtime), new BatchUnbindTemplatesResponse({}));
    }

  }

  /**
   * @param request - BatchUnbindTemplatesRequest
   * @returns BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplates(request: BatchUnbindTemplatesRequest): Promise<BatchUnbindTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUnbindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - BindDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDirectoryResponse
   */
  async bindDirectoryWithOptions(request: BindDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<BindDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindDirectoryResponse>(await this.callApi(params, req, runtime), new BindDirectoryResponse({}));
    } else {
      return $dara.cast<BindDirectoryResponse>(await this.execute(params, req, runtime), new BindDirectoryResponse({}));
    }

  }

  /**
   * @param request - BindDirectoryRequest
   * @returns BindDirectoryResponse
   */
  async bindDirectory(request: BindDirectoryRequest): Promise<BindDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - BindParentPlatformDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDeviceWithOptions(request: BindParentPlatformDeviceRequest, runtime: $dara.RuntimeOptions): Promise<BindParentPlatformDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindParentPlatformDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new BindParentPlatformDeviceResponse({}));
    } else {
      return $dara.cast<BindParentPlatformDeviceResponse>(await this.execute(params, req, runtime), new BindParentPlatformDeviceResponse({}));
    }

  }

  /**
   * @param request - BindParentPlatformDeviceRequest
   * @returns BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDevice(request: BindParentPlatformDeviceRequest): Promise<BindParentPlatformDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - BindPurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPurchasedDeviceResponse
   */
  async bindPurchasedDeviceWithOptions(request: BindPurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<BindPurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new BindPurchasedDeviceResponse({}));
    } else {
      return $dara.cast<BindPurchasedDeviceResponse>(await this.execute(params, req, runtime), new BindPurchasedDeviceResponse({}));
    }

  }

  /**
   * @param request - BindPurchasedDeviceRequest
   * @returns BindPurchasedDeviceResponse
   */
  async bindPurchasedDevice(request: BindPurchasedDeviceRequest): Promise<BindPurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - BindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindTemplateResponse
   */
  async bindTemplateWithOptions(request: BindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<BindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindTemplateResponse>(await this.callApi(params, req, runtime), new BindTemplateResponse({}));
    } else {
      return $dara.cast<BindTemplateResponse>(await this.execute(params, req, runtime), new BindTemplateResponse({}));
    }

  }

  /**
   * @param request - BindTemplateRequest
   * @returns BindTemplateResponse
   */
  async bindTemplate(request: BindTemplateRequest): Promise<BindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ContinuousAdjustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuousAdjustResponse
   */
  async continuousAdjustWithOptions(request: ContinuousAdjustRequest, runtime: $dara.RuntimeOptions): Promise<ContinuousAdjustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuousAdjust",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContinuousAdjustResponse>(await this.callApi(params, req, runtime), new ContinuousAdjustResponse({}));
    } else {
      return $dara.cast<ContinuousAdjustResponse>(await this.execute(params, req, runtime), new ContinuousAdjustResponse({}));
    }

  }

  /**
   * @param request - ContinuousAdjustRequest
   * @returns ContinuousAdjustResponse
   */
  async continuousAdjust(request: ContinuousAdjustRequest): Promise<ContinuousAdjustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuousAdjustWithOptions(request, runtime);
  }

  /**
   * @param request - ContinuousMoveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuousMoveResponse
   */
  async continuousMoveWithOptions(request: ContinuousMoveRequest, runtime: $dara.RuntimeOptions): Promise<ContinuousMoveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!$dara.isNull(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!$dara.isNull(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuousMove",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContinuousMoveResponse>(await this.callApi(params, req, runtime), new ContinuousMoveResponse({}));
    } else {
      return $dara.cast<ContinuousMoveResponse>(await this.execute(params, req, runtime), new ContinuousMoveResponse({}));
    }

  }

  /**
   * @param request - ContinuousMoveRequest
   * @returns ContinuousMoveResponse
   */
  async continuousMove(request: ContinuousMoveRequest): Promise<ContinuousMoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuousMoveWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeviceResponse
   */
  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $dara.RuntimeOptions): Promise<CreateDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!$dara.isNull(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!$dara.isNull(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeviceResponse>(await this.callApi(params, req, runtime), new CreateDeviceResponse({}));
    } else {
      return $dara.cast<CreateDeviceResponse>(await this.execute(params, req, runtime), new CreateDeviceResponse({}));
    }

  }

  /**
   * @param request - CreateDeviceRequest
   * @returns CreateDeviceResponse
   */
  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDeviceAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeviceAlarmResponse
   */
  async createDeviceAlarmWithOptions(request: CreateDeviceAlarmRequest, runtime: $dara.RuntimeOptions): Promise<CreateDeviceAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarm)) {
      query["Alarm"] = request.alarm;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subAlarm)) {
      query["SubAlarm"] = request.subAlarm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeviceAlarm",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDeviceAlarmResponse>(await this.callApi(params, req, runtime), new CreateDeviceAlarmResponse({}));
    } else {
      return $dara.cast<CreateDeviceAlarmResponse>(await this.execute(params, req, runtime), new CreateDeviceAlarmResponse({}));
    }

  }

  /**
   * @param request - CreateDeviceAlarmRequest
   * @returns CreateDeviceAlarmResponse
   */
  async createDeviceAlarm(request: CreateDeviceAlarmRequest): Promise<CreateDeviceAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
   */
  async createDirectoryWithOptions(request: CreateDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<CreateDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDirectoryResponse>(await this.callApi(params, req, runtime), new CreateDirectoryResponse({}));
    } else {
      return $dara.cast<CreateDirectoryResponse>(await this.execute(params, req, runtime), new CreateDirectoryResponse({}));
    }

  }

  /**
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
    } else {
      return $dara.cast<CreateGroupResponse>(await this.execute(params, req, runtime), new CreateGroupResponse({}));
    }

  }

  /**
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * @param request - CreateParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParentPlatformResponse
   */
  async createParentPlatformWithOptions(request: CreateParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<CreateParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!$dara.isNull(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!$dara.isNull(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateParentPlatformResponse>(await this.callApi(params, req, runtime), new CreateParentPlatformResponse({}));
    } else {
      return $dara.cast<CreateParentPlatformResponse>(await this.execute(params, req, runtime), new CreateParentPlatformResponse({}));
    }

  }

  /**
   * @param request - CreateParentPlatformRequest
   * @returns CreateParentPlatformResponse
   */
  async createParentPlatform(request: CreateParentPlatformRequest): Promise<CreateParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParentPlatformWithOptions(request, runtime);
  }

  /**
   * 创建云渲染数据包
   * 
   * @param request - CreateRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingDataPackageResponse
   */
  async createRenderingDataPackageWithOptions(request: CreateRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<CreateRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new CreateRenderingDataPackageResponse({}));
    } else {
      return $dara.cast<CreateRenderingDataPackageResponse>(await this.execute(params, req, runtime), new CreateRenderingDataPackageResponse({}));
    }

  }

  /**
   * 创建云渲染数据包
   * 
   * @param request - CreateRenderingDataPackageRequest
   * @returns CreateRenderingDataPackageResponse
   */
  async createRenderingDataPackage(request: CreateRenderingDataPackageRequest): Promise<CreateRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 申请云渲染资源实例
   * 
   * @param tmpReq - CreateRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingInstanceResponse
   */
  async createRenderingInstanceWithOptions(tmpReq: CreateRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateRenderingInstanceResponse> {
    tmpReq.validate();
    let request = new CreateRenderingInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientInfo)) {
      request.clientInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientInfo, "ClientInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clientInfoShrink)) {
      query["ClientInfo"] = request.clientInfoShrink;
    }

    if (!$dara.isNull(request.instanceBillingCycle)) {
      query["InstanceBillingCycle"] = request.instanceBillingCycle;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidth)) {
      query["InternetMaxBandwidth"] = request.internetMaxBandwidth;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.renderingSpec)) {
      query["RenderingSpec"] = request.renderingSpec;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRenderingInstanceResponse>(await this.callApi(params, req, runtime), new CreateRenderingInstanceResponse({}));
    } else {
      return $dara.cast<CreateRenderingInstanceResponse>(await this.execute(params, req, runtime), new CreateRenderingInstanceResponse({}));
    }

  }

  /**
   * 申请云渲染资源实例
   * 
   * @param request - CreateRenderingInstanceRequest
   * @returns CreateRenderingInstanceResponse
   */
  async createRenderingInstance(request: CreateRenderingInstanceRequest): Promise<CreateRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 创建自定义网关
   * 
   * @param request - CreateRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRenderingInstanceGatewayResponse
   */
  async createRenderingInstanceGatewayWithOptions(request: CreateRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<CreateRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gatewayInstanceId)) {
      query["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new CreateRenderingInstanceGatewayResponse({}));
    } else {
      return $dara.cast<CreateRenderingInstanceGatewayResponse>(await this.execute(params, req, runtime), new CreateRenderingInstanceGatewayResponse({}));
    }

  }

  /**
   * 创建自定义网关
   * 
   * @param request - CreateRenderingInstanceGatewayRequest
   * @returns CreateRenderingInstanceGatewayResponse
   */
  async createRenderingInstanceGateway(request: CreateRenderingInstanceGatewayRequest): Promise<CreateRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * @param request - CreateStreamSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamSnapshotResponse
   */
  async createStreamSnapshotWithOptions(request: CreateStreamSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<CreateStreamSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamSnapshot",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateStreamSnapshotResponse>(await this.callApi(params, req, runtime), new CreateStreamSnapshotResponse({}));
    } else {
      return $dara.cast<CreateStreamSnapshotResponse>(await this.execute(params, req, runtime), new CreateStreamSnapshotResponse({}));
    }

  }

  /**
   * @param request - CreateStreamSnapshotRequest
   * @returns CreateStreamSnapshotResponse
   */
  async createStreamSnapshot(request: CreateStreamSnapshotRequest): Promise<CreateStreamSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamSnapshotWithOptions(request, runtime);
  }

  /**
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!$dara.isNull(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!$dara.isNull(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!$dara.isNull(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!$dara.isNull(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!$dara.isNull(request.mp4)) {
      query["Mp4"] = request.mp4;
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

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!$dara.isNull(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
    } else {
      return $dara.cast<CreateTemplateResponse>(await this.execute(params, req, runtime), new CreateTemplateResponse({}));
    }

  }

  /**
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * 删除云应用
   * 
   * @param request - DeleteCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloudAppResponse
   */
  async deleteCloudAppWithOptions(request: DeleteCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCloudAppResponse>(await this.callApi(params, req, runtime), new DeleteCloudAppResponse({}));
    } else {
      return $dara.cast<DeleteCloudAppResponse>(await this.execute(params, req, runtime), new DeleteCloudAppResponse({}));
    }

  }

  /**
   * 删除云应用
   * 
   * @param request - DeleteCloudAppRequest
   * @returns DeleteCloudAppResponse
   */
  async deleteCloudApp(request: DeleteCloudAppRequest): Promise<DeleteCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeviceResponse
   */
  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDeviceResponse>(await this.callApi(params, req, runtime), new DeleteDeviceResponse({}));
    } else {
      return $dara.cast<DeleteDeviceResponse>(await this.execute(params, req, runtime), new DeleteDeviceResponse({}));
    }

  }

  /**
   * @param request - DeleteDeviceRequest
   * @returns DeleteDeviceResponse
   */
  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new DeleteDirectoryResponse({}));
    } else {
      return $dara.cast<DeleteDirectoryResponse>(await this.execute(params, req, runtime), new DeleteDirectoryResponse({}));
    }

  }

  /**
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * 删除文件对象。
   * 
   * @param request - DeleteFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
    } else {
      return $dara.cast<DeleteFileResponse>(await this.execute(params, req, runtime), new DeleteFileResponse({}));
    }

  }

  /**
   * 删除文件对象。
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
    } else {
      return $dara.cast<DeleteGroupResponse>(await this.execute(params, req, runtime), new DeleteGroupResponse({}));
    }

  }

  /**
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParentPlatformResponse
   */
  async deleteParentPlatformWithOptions(request: DeleteParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<DeleteParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteParentPlatformResponse>(await this.callApi(params, req, runtime), new DeleteParentPlatformResponse({}));
    } else {
      return $dara.cast<DeleteParentPlatformResponse>(await this.execute(params, req, runtime), new DeleteParentPlatformResponse({}));
    }

  }

  /**
   * @param request - DeleteParentPlatformRequest
   * @returns DeleteParentPlatformResponse
   */
  async deleteParentPlatform(request: DeleteParentPlatformRequest): Promise<DeleteParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePresetResponse
   */
  async deletePresetWithOptions(request: DeletePresetRequest, runtime: $dara.RuntimeOptions): Promise<DeletePresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePresetResponse>(await this.callApi(params, req, runtime), new DeletePresetResponse({}));
    } else {
      return $dara.cast<DeletePresetResponse>(await this.execute(params, req, runtime), new DeletePresetResponse({}));
    }

  }

  /**
   * @param request - DeletePresetRequest
   * @returns DeletePresetResponse
   */
  async deletePreset(request: DeletePresetRequest): Promise<DeletePresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePresetWithOptions(request, runtime);
  }

  /**
   * 删除公钥信息
   * 
   * @param request - DeletePublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicKeyResponse
   */
  async deletePublicKeyWithOptions(request: DeletePublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<DeletePublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicKey",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePublicKeyResponse>(await this.callApi(params, req, runtime), new DeletePublicKeyResponse({}));
    } else {
      return $dara.cast<DeletePublicKeyResponse>(await this.execute(params, req, runtime), new DeletePublicKeyResponse({}));
    }

  }

  /**
   * 删除公钥信息
   * 
   * @param request - DeletePublicKeyRequest
   * @returns DeletePublicKeyResponse
   */
  async deletePublicKey(request: DeletePublicKeyRequest): Promise<DeletePublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePublicKeyWithOptions(request, runtime);
  }

  /**
   * 删除云渲染实例配置参数
   * 
   * @param tmpReq - DeleteRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfigurationWithOptions(tmpReq: DeleteRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new DeleteRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteRenderingInstanceConfigurationResponse({}));
    } else {
      return $dara.cast<DeleteRenderingInstanceConfigurationResponse>(await this.execute(params, req, runtime), new DeleteRenderingInstanceConfigurationResponse({}));
    }

  }

  /**
   * 删除云渲染实例配置参数
   * 
   * @param request - DeleteRenderingInstanceConfigurationRequest
   * @returns DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfiguration(request: DeleteRenderingInstanceConfigurationRequest): Promise<DeleteRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 删除自定义网关
   * 
   * @param request - DeleteRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceGatewayResponse
   */
  async deleteRenderingInstanceGatewayWithOptions(request: DeleteRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new DeleteRenderingInstanceGatewayResponse({}));
    } else {
      return $dara.cast<DeleteRenderingInstanceGatewayResponse>(await this.execute(params, req, runtime), new DeleteRenderingInstanceGatewayResponse({}));
    }

  }

  /**
   * 删除自定义网关
   * 
   * @param request - DeleteRenderingInstanceGatewayRequest
   * @returns DeleteRenderingInstanceGatewayResponse
   */
  async deleteRenderingInstanceGateway(request: DeleteRenderingInstanceGatewayRequest): Promise<DeleteRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * 清除实例设置
   * 
   * @param tmpReq - DeleteRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRenderingInstanceSettingsResponse
   */
  async deleteRenderingInstanceSettingsWithOptions(tmpReq: DeleteRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new DeleteRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributeNames)) {
      request.attributeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeNames, "AttributeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attributeNamesShrink)) {
      query["AttributeNames"] = request.attributeNamesShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new DeleteRenderingInstanceSettingsResponse({}));
    } else {
      return $dara.cast<DeleteRenderingInstanceSettingsResponse>(await this.execute(params, req, runtime), new DeleteRenderingInstanceSettingsResponse({}));
    }

  }

  /**
   * 清除实例设置
   * 
   * @param request - DeleteRenderingInstanceSettingsRequest
   * @returns DeleteRenderingInstanceSettingsResponse
   */
  async deleteRenderingInstanceSettings(request: DeleteRenderingInstanceSettingsRequest): Promise<DeleteRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
    } else {
      return $dara.cast<DeleteTemplateResponse>(await this.execute(params, req, runtime), new DeleteTemplateResponse({}));
    }

  }

  /**
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfigWithOptions(request: DeleteVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new DeleteVsPullStreamInfoConfigResponse({}));
    } else {
      return $dara.cast<DeleteVsPullStreamInfoConfigResponse>(await this.execute(params, req, runtime), new DeleteVsPullStreamInfoConfigResponse({}));
    }

  }

  /**
   * @param request - DeleteVsPullStreamInfoConfigRequest
   * @returns DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfig(request: DeleteVsPullStreamInfoConfigRequest): Promise<DeleteVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfigWithOptions(request: DeleteVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new DeleteVsStreamsNotifyUrlConfigResponse({}));
    } else {
      return $dara.cast<DeleteVsStreamsNotifyUrlConfigResponse>(await this.execute(params, req, runtime), new DeleteVsStreamsNotifyUrlConfigResponse({}));
    }

  }

  /**
   * @param request - DeleteVsStreamsNotifyUrlConfigRequest
   * @returns DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfig(request: DeleteVsStreamsNotifyUrlConfigRequest): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountStatResponse
   */
  async describeAccountStatWithOptions(request: DescribeAccountStatRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAccountStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountStat",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAccountStatResponse>(await this.callApi(params, req, runtime), new DescribeAccountStatResponse({}));
    } else {
      return $dara.cast<DescribeAccountStatResponse>(await this.execute(params, req, runtime), new DescribeAccountStatResponse({}));
    }

  }

  /**
   * @param request - DescribeAccountStatRequest
   * @returns DescribeAccountStatResponse
   */
  async describeAccountStat(request: DescribeAccountStatRequest): Promise<DescribeAccountStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountStatWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceResponse
   */
  async describeDeviceWithOptions(request: DescribeDeviceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeviceResponse>(await this.callApi(params, req, runtime), new DescribeDeviceResponse({}));
    } else {
      return $dara.cast<DescribeDeviceResponse>(await this.execute(params, req, runtime), new DescribeDeviceResponse({}));
    }

  }

  /**
   * @param request - DescribeDeviceRequest
   * @returns DescribeDeviceResponse
   */
  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceChannelsResponse
   */
  async describeDeviceChannelsWithOptions(request: DescribeDeviceChannelsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeviceChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "DescribeDeviceChannels",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeviceChannelsResponse>(await this.callApi(params, req, runtime), new DescribeDeviceChannelsResponse({}));
    } else {
      return $dara.cast<DescribeDeviceChannelsResponse>(await this.execute(params, req, runtime), new DescribeDeviceChannelsResponse({}));
    }

  }

  /**
   * @param request - DescribeDeviceChannelsRequest
   * @returns DescribeDeviceChannelsResponse
   */
  async describeDeviceChannels(request: DescribeDeviceChannelsRequest): Promise<DescribeDeviceChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceGatewayResponse
   */
  async describeDeviceGatewayWithOptions(request: DescribeDeviceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeviceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeviceGatewayResponse>(await this.callApi(params, req, runtime), new DescribeDeviceGatewayResponse({}));
    } else {
      return $dara.cast<DescribeDeviceGatewayResponse>(await this.execute(params, req, runtime), new DescribeDeviceGatewayResponse({}));
    }

  }

  /**
   * @param request - DescribeDeviceGatewayRequest
   * @returns DescribeDeviceGatewayResponse
   */
  async describeDeviceGateway(request: DescribeDeviceGatewayRequest): Promise<DescribeDeviceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceGatewayWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceURLResponse
   */
  async describeDeviceURLWithOptions(request: DescribeDeviceURLRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeviceURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.stream)) {
      query["Stream"] = request.stream;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeviceURLResponse>(await this.callApi(params, req, runtime), new DescribeDeviceURLResponse({}));
    } else {
      return $dara.cast<DescribeDeviceURLResponse>(await this.execute(params, req, runtime), new DescribeDeviceURLResponse({}));
    }

  }

  /**
   * @param request - DescribeDeviceURLRequest
   * @returns DescribeDeviceURLResponse
   */
  async describeDeviceURL(request: DescribeDeviceURLRequest): Promise<DescribeDeviceURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDevicesResponse
   */
  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
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

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDevicesResponse>(await this.callApi(params, req, runtime), new DescribeDevicesResponse({}));
    } else {
      return $dara.cast<DescribeDevicesResponse>(await this.execute(params, req, runtime), new DescribeDevicesResponse({}));
    }

  }

  /**
   * @param request - DescribeDevicesRequest
   * @returns DescribeDevicesResponse
   */
  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.noPagination)) {
      query["NoPagination"] = request.noPagination;
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

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
    } else {
      return $dara.cast<DescribeDirectoriesResponse>(await this.execute(params, req, runtime), new DescribeDirectoriesResponse({}));
    }

  }

  /**
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoryResponse
   */
  async describeDirectoryWithOptions(request: DescribeDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDirectoryResponse>(await this.callApi(params, req, runtime), new DescribeDirectoryResponse({}));
    } else {
      return $dara.cast<DescribeDirectoryResponse>(await this.execute(params, req, runtime), new DescribeDirectoryResponse({}));
    }

  }

  /**
   * @param request - DescribeDirectoryRequest
   * @returns DescribeDirectoryResponse
   */
  async describeDirectory(request: DescribeDirectoryRequest): Promise<DescribeDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupResponse
   */
  async describeGroupWithOptions(request: DescribeGroupRequest, runtime: $dara.RuntimeOptions): Promise<DescribeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGroupResponse>(await this.callApi(params, req, runtime), new DescribeGroupResponse({}));
    } else {
      return $dara.cast<DescribeGroupResponse>(await this.execute(params, req, runtime), new DescribeGroupResponse({}));
    }

  }

  /**
   * @param request - DescribeGroupRequest
   * @returns DescribeGroupResponse
   */
  async describeGroup(request: DescribeGroupRequest): Promise<DescribeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupsResponse
   */
  async describeGroupsWithOptions(request: DescribeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
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

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroups",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGroupsResponse>(await this.callApi(params, req, runtime), new DescribeGroupsResponse({}));
    } else {
      return $dara.cast<DescribeGroupsResponse>(await this.execute(params, req, runtime), new DescribeGroupsResponse({}));
    }

  }

  /**
   * @param request - DescribeGroupsRequest
   * @returns DescribeGroupsResponse
   */
  async describeGroups(request: DescribeGroupsRequest): Promise<DescribeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformResponse
   */
  async describeParentPlatformWithOptions(request: DescribeParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<DescribeParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeParentPlatformResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformResponse({}));
    } else {
      return $dara.cast<DescribeParentPlatformResponse>(await this.execute(params, req, runtime), new DescribeParentPlatformResponse({}));
    }

  }

  /**
   * @param request - DescribeParentPlatformRequest
   * @returns DescribeParentPlatformResponse
   */
  async describeParentPlatform(request: DescribeParentPlatformRequest): Promise<DescribeParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevicesWithOptions(request: DescribeParentPlatformDevicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeParentPlatformDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatformDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformDevicesResponse({}));
    } else {
      return $dara.cast<DescribeParentPlatformDevicesResponse>(await this.execute(params, req, runtime), new DescribeParentPlatformDevicesResponse({}));
    }

  }

  /**
   * @param request - DescribeParentPlatformDevicesRequest
   * @returns DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevices(request: DescribeParentPlatformDevicesRequest): Promise<DescribeParentPlatformDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeParentPlatformsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParentPlatformsResponse
   */
  async describeParentPlatformsWithOptions(request: DescribeParentPlatformsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeParentPlatformsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParentPlatforms",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeParentPlatformsResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformsResponse({}));
    } else {
      return $dara.cast<DescribeParentPlatformsResponse>(await this.execute(params, req, runtime), new DescribeParentPlatformsResponse({}));
    }

  }

  /**
   * @param request - DescribeParentPlatformsRequest
   * @returns DescribeParentPlatformsResponse
   */
  async describeParentPlatforms(request: DescribeParentPlatformsRequest): Promise<DescribeParentPlatformsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParentPlatformsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePresetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePresetsResponse
   */
  async describePresetsWithOptions(request: DescribePresetsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePresetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePresets",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePresetsResponse>(await this.callApi(params, req, runtime), new DescribePresetsResponse({}));
    } else {
      return $dara.cast<DescribePresetsResponse>(await this.execute(params, req, runtime), new DescribePresetsResponse({}));
    }

  }

  /**
   * @param request - DescribePresetsRequest
   * @returns DescribePresetsResponse
   */
  async describePresets(request: DescribePresetsRequest): Promise<DescribePresetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePresetsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePublishStreamStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatusWithOptions(request: DescribePublishStreamStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribePublishStreamStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePublishStreamStatus",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePublishStreamStatusResponse>(await this.callApi(params, req, runtime), new DescribePublishStreamStatusResponse({}));
    } else {
      return $dara.cast<DescribePublishStreamStatusResponse>(await this.execute(params, req, runtime), new DescribePublishStreamStatusResponse({}));
    }

  }

  /**
   * @param request - DescribePublishStreamStatusRequest
   * @returns DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatus(request: DescribePublishStreamStatusRequest): Promise<DescribePublishStreamStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePublishStreamStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedDeviceResponse
   */
  async describePurchasedDeviceWithOptions(request: DescribePurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<DescribePurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePurchasedDeviceResponse>(await this.callApi(params, req, runtime), new DescribePurchasedDeviceResponse({}));
    } else {
      return $dara.cast<DescribePurchasedDeviceResponse>(await this.execute(params, req, runtime), new DescribePurchasedDeviceResponse({}));
    }

  }

  /**
   * @param request - DescribePurchasedDeviceRequest
   * @returns DescribePurchasedDeviceResponse
   */
  async describePurchasedDevice(request: DescribePurchasedDeviceRequest): Promise<DescribePurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePurchasedDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurchasedDevicesResponse
   */
  async describePurchasedDevicesWithOptions(request: DescribePurchasedDevicesRequest, runtime: $dara.RuntimeOptions): Promise<DescribePurchasedDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurchasedDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePurchasedDevicesResponse>(await this.callApi(params, req, runtime), new DescribePurchasedDevicesResponse({}));
    } else {
      return $dara.cast<DescribePurchasedDevicesResponse>(await this.execute(params, req, runtime), new DescribePurchasedDevicesResponse({}));
    }

  }

  /**
   * @param request - DescribePurchasedDevicesRequest
   * @returns DescribePurchasedDevicesResponse
   */
  async describePurchasedDevices(request: DescribePurchasedDevicesRequest): Promise<DescribePurchasedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecordsResponse
   */
  async describeRecordsWithOptions(request: DescribeRecordsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecordsResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.privateBucket)) {
      query["PrivateBucket"] = request.privateBucket;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamId)) {
      query["StreamId"] = request.streamId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecords",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecordsResponse>(await this.callApi(params, req, runtime), new DescribeRecordsResponse({}));
    } else {
      return $dara.cast<DescribeRecordsResponse>(await this.execute(params, req, runtime), new DescribeRecordsResponse({}));
    }

  }

  /**
   * @param request - DescribeRecordsRequest
   * @returns DescribeRecordsResponse
   */
  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  /**
   * 查询云渲染实例详细信息。
   * 
   * @param request - DescribeRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceResponse
   */
  async describeRenderingInstanceWithOptions(request: DescribeRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRenderingInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRenderingInstanceResponse>(await this.callApi(params, req, runtime), new DescribeRenderingInstanceResponse({}));
    } else {
      return $dara.cast<DescribeRenderingInstanceResponse>(await this.execute(params, req, runtime), new DescribeRenderingInstanceResponse({}));
    }

  }

  /**
   * 查询云渲染实例详细信息。
   * 
   * @param request - DescribeRenderingInstanceRequest
   * @returns DescribeRenderingInstanceResponse
   */
  async describeRenderingInstance(request: DescribeRenderingInstanceRequest): Promise<DescribeRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 查询云渲染实例模块配置参数
   * 
   * @param tmpReq - DescribeRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfigurationWithOptions(tmpReq: DescribeRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new DescribeRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeRenderingInstanceConfigurationResponse({}));
    } else {
      return $dara.cast<DescribeRenderingInstanceConfigurationResponse>(await this.execute(params, req, runtime), new DescribeRenderingInstanceConfigurationResponse({}));
    }

  }

  /**
   * 查询云渲染实例模块配置参数
   * 
   * @param request - DescribeRenderingInstanceConfigurationRequest
   * @returns DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfiguration(request: DescribeRenderingInstanceConfigurationRequest): Promise<DescribeRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 查询实例配置
   * 
   * @param tmpReq - DescribeRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenderingInstanceSettingsResponse
   */
  async describeRenderingInstanceSettingsWithOptions(tmpReq: DescribeRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new DescribeRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributeNames)) {
      request.attributeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributeNames, "AttributeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attributeNamesShrink)) {
      query["AttributeNames"] = request.attributeNamesShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new DescribeRenderingInstanceSettingsResponse({}));
    } else {
      return $dara.cast<DescribeRenderingInstanceSettingsResponse>(await this.execute(params, req, runtime), new DescribeRenderingInstanceSettingsResponse({}));
    }

  }

  /**
   * 查询实例配置
   * 
   * @param request - DescribeRenderingInstanceSettingsRequest
   * @returns DescribeRenderingInstanceSettingsResponse
   */
  async describeRenderingInstanceSettings(request: DescribeRenderingInstanceSettingsRequest): Promise<DescribeRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamResponse
   */
  async describeStreamWithOptions(request: DescribeStreamRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStreamResponse>(await this.callApi(params, req, runtime), new DescribeStreamResponse({}));
    } else {
      return $dara.cast<DescribeStreamResponse>(await this.execute(params, req, runtime), new DescribeStreamResponse({}));
    }

  }

  /**
   * @param request - DescribeStreamRequest
   * @returns DescribeStreamResponse
   */
  async describeStream(request: DescribeStreamRequest): Promise<DescribeStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamURLResponse
   */
  async describeStreamURLWithOptions(request: DescribeStreamURLRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStreamURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStreamURLResponse>(await this.callApi(params, req, runtime), new DescribeStreamURLResponse({}));
    } else {
      return $dara.cast<DescribeStreamURLResponse>(await this.execute(params, req, runtime), new DescribeStreamURLResponse({}));
    }

  }

  /**
   * @param request - DescribeStreamURLRequest
   * @returns DescribeStreamURLResponse
   */
  async describeStreamURL(request: DescribeStreamURLRequest): Promise<DescribeStreamURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamVodListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamVodListResponse
   */
  async describeStreamVodListWithOptions(request: DescribeStreamVodListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStreamVodListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamVodList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStreamVodListResponse>(await this.callApi(params, req, runtime), new DescribeStreamVodListResponse({}));
    } else {
      return $dara.cast<DescribeStreamVodListResponse>(await this.execute(params, req, runtime), new DescribeStreamVodListResponse({}));
    }

  }

  /**
   * @param request - DescribeStreamVodListRequest
   * @returns DescribeStreamVodListResponse
   */
  async describeStreamVodList(request: DescribeStreamVodListRequest): Promise<DescribeStreamVodListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamVodListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeStreamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamsResponse
   */
  async describeStreamsWithOptions(request: DescribeStreamsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeStreamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreams",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeStreamsResponse>(await this.callApi(params, req, runtime), new DescribeStreamsResponse({}));
    } else {
      return $dara.cast<DescribeStreamsResponse>(await this.execute(params, req, runtime), new DescribeStreamsResponse({}));
    }

  }

  /**
   * @param request - DescribeStreamsRequest
   * @returns DescribeStreamsResponse
   */
  async describeStreams(request: DescribeStreamsRequest): Promise<DescribeStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateResponse
   */
  async describeTemplateWithOptions(request: DescribeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTemplateResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResponse({}));
    } else {
      return $dara.cast<DescribeTemplateResponse>(await this.execute(params, req, runtime), new DescribeTemplateResponse({}));
    }

  }

  /**
   * @param request - DescribeTemplateRequest
   * @returns DescribeTemplateResponse
   */
  async describeTemplate(request: DescribeTemplateRequest): Promise<DescribeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplates",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeTemplatesResponse({}));
    } else {
      return $dara.cast<DescribeTemplatesResponse>(await this.execute(params, req, runtime), new DescribeTemplatesResponse({}));
    }

  }

  /**
   * @param request - DescribeTemplatesRequest
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVodStreamURLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVodStreamURLResponse
   */
  async describeVodStreamURLWithOptions(request: DescribeVodStreamURLRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVodStreamURLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVodStreamURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVodStreamURLResponse>(await this.callApi(params, req, runtime), new DescribeVodStreamURLResponse({}));
    } else {
      return $dara.cast<DescribeVodStreamURLResponse>(await this.execute(params, req, runtime), new DescribeVodStreamURLResponse({}));
    }

  }

  /**
   * @param request - DescribeVodStreamURLRequest
   * @returns DescribeVodStreamURLResponse
   */
  async describeVodStreamURL(request: DescribeVodStreamURLRequest): Promise<DescribeVodStreamURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVodStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsCertificateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetailWithOptions(request: DescribeVsCertificateDetailRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsCertificateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsCertificateDetail",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeVsCertificateDetailResponse({}));
    } else {
      return $dara.cast<DescribeVsCertificateDetailResponse>(await this.execute(params, req, runtime), new DescribeVsCertificateDetailResponse({}));
    }

  }

  /**
   * @param request - DescribeVsCertificateDetailRequest
   * @returns DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetail(request: DescribeVsCertificateDetailRequest): Promise<DescribeVsCertificateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsCertificateDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsCertificateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsCertificateListResponse
   */
  async describeVsCertificateListWithOptions(request: DescribeVsCertificateListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsCertificateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsCertificateList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeVsCertificateListResponse({}));
    } else {
      return $dara.cast<DescribeVsCertificateListResponse>(await this.execute(params, req, runtime), new DescribeVsCertificateListResponse({}));
    }

  }

  /**
   * @param request - DescribeVsCertificateListRequest
   * @returns DescribeVsCertificateListResponse
   */
  async describeVsCertificateList(request: DescribeVsCertificateListRequest): Promise<DescribeVsCertificateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsCertificateListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDevicesDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDevicesDataResponse
   */
  async describeVsDevicesDataWithOptions(request: DescribeVsDevicesDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDevicesDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDevicesData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDevicesDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDevicesDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDevicesDataResponse>(await this.execute(params, req, runtime), new DescribeVsDevicesDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDevicesDataRequest
   * @returns DescribeVsDevicesDataResponse
   */
  async describeVsDevicesData(request: DescribeVsDevicesDataRequest): Promise<DescribeVsDevicesDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDevicesDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsDataWithOptions(request: DescribeVsDomainBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainBpsData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainBpsDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainBpsDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainBpsDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainBpsDataRequest
   * @returns DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsData(request: DescribeVsDomainBpsDataRequest): Promise<DescribeVsDomainBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainCertificateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfoWithOptions(request: DescribeVsDomainCertificateInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainCertificateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainCertificateInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainCertificateInfoResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainCertificateInfoResponse>(await this.execute(params, req, runtime), new DescribeVsDomainCertificateInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainCertificateInfoRequest
   * @returns DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfo(request: DescribeVsDomainCertificateInfoRequest): Promise<DescribeVsDomainCertificateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigsWithOptions(request: DescribeVsDomainConfigsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainConfigs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainConfigsResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainConfigsResponse>(await this.execute(params, req, runtime), new DescribeVsDomainConfigsResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainConfigsRequest
   * @returns DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigs(request: DescribeVsDomainConfigsRequest): Promise<DescribeVsDomainConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetailWithOptions(request: DescribeVsDomainDetailRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainDetail",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainDetailResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainDetailResponse>(await this.execute(params, req, runtime), new DescribeVsDomainDetailResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainDetailRequest
   * @returns DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetail(request: DescribeVsDomainDetailRequest): Promise<DescribeVsDomainDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainDetailWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainPvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvDataWithOptions(request: DescribeVsDomainPvDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainPvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainPvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainPvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainPvDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainPvDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainPvDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainPvDataRequest
   * @returns DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvData(request: DescribeVsDomainPvDataRequest): Promise<DescribeVsDomainPvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainPvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainPvUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvDataWithOptions(request: DescribeVsDomainPvUvDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainPvUvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainPvUvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainPvUvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainPvUvDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainPvUvDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainPvUvDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainPvUvDataRequest
   * @returns DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvData(request: DescribeVsDomainPvUvDataRequest): Promise<DescribeVsDomainPvUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainPvUvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainRecordDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordDataWithOptions(request: DescribeVsDomainRecordDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainRecordDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainRecordData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainRecordDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainRecordDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainRecordDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainRecordDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainRecordDataRequest
   * @returns DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordData(request: DescribeVsDomainRecordDataRequest): Promise<DescribeVsDomainRecordDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainRecordDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainRegionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionDataWithOptions(request: DescribeVsDomainRegionDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainRegionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainRegionData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainRegionDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainRegionDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainRegionDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainRegionDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainRegionDataRequest
   * @returns DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionData(request: DescribeVsDomainRegionDataRequest): Promise<DescribeVsDomainRegionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainReqBpsDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsDataWithOptions(request: DescribeVsDomainReqBpsDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainReqBpsDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainReqBpsData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainReqBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainReqBpsDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainReqBpsDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainReqBpsDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainReqBpsDataRequest
   * @returns DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsData(request: DescribeVsDomainReqBpsDataRequest): Promise<DescribeVsDomainReqBpsDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainReqBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainReqTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficDataWithOptions(request: DescribeVsDomainReqTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainReqTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainReqTrafficData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainReqTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainReqTrafficDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainReqTrafficDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainReqTrafficDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainReqTrafficDataRequest
   * @returns DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficData(request: DescribeVsDomainReqTrafficDataRequest): Promise<DescribeVsDomainReqTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainReqTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainSnapshotDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotDataWithOptions(request: DescribeVsDomainSnapshotDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainSnapshotDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainSnapshotData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainSnapshotDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainSnapshotDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainSnapshotDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainSnapshotDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainSnapshotDataRequest
   * @returns DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotData(request: DescribeVsDomainSnapshotDataRequest): Promise<DescribeVsDomainSnapshotDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainSnapshotDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainTrafficDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficDataWithOptions(request: DescribeVsDomainTrafficDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainTrafficDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!$dara.isNull(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainTrafficData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainTrafficDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainTrafficDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainTrafficDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainTrafficDataRequest
   * @returns DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficData(request: DescribeVsDomainTrafficDataRequest): Promise<DescribeVsDomainTrafficDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsDomainUvDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvDataWithOptions(request: DescribeVsDomainUvDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsDomainUvDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsDomainUvData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsDomainUvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainUvDataResponse({}));
    } else {
      return $dara.cast<DescribeVsDomainUvDataResponse>(await this.execute(params, req, runtime), new DescribeVsDomainUvDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsDomainUvDataRequest
   * @returns DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvData(request: DescribeVsDomainUvDataRequest): Promise<DescribeVsDomainUvDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsDomainUvDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfigWithOptions(request: DescribeVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new DescribeVsPullStreamInfoConfigResponse({}));
    } else {
      return $dara.cast<DescribeVsPullStreamInfoConfigResponse>(await this.execute(params, req, runtime), new DescribeVsPullStreamInfoConfigResponse({}));
    }

  }

  /**
   * @param request - DescribeVsPullStreamInfoConfigRequest
   * @returns DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfig(request: DescribeVsPullStreamInfoConfigRequest): Promise<DescribeVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfigWithOptions(request: DescribeVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsNotifyUrlConfigResponse({}));
    } else {
      return $dara.cast<DescribeVsStreamsNotifyUrlConfigResponse>(await this.execute(params, req, runtime), new DescribeVsStreamsNotifyUrlConfigResponse({}));
    }

  }

  /**
   * @param request - DescribeVsStreamsNotifyUrlConfigRequest
   * @returns DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfig(request: DescribeVsStreamsNotifyUrlConfigRequest): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsOnlineListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineListWithOptions(request: DescribeVsStreamsOnlineListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsStreamsOnlineListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsStreamsOnlineList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsStreamsOnlineListResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsOnlineListResponse({}));
    } else {
      return $dara.cast<DescribeVsStreamsOnlineListResponse>(await this.execute(params, req, runtime), new DescribeVsStreamsOnlineListResponse({}));
    }

  }

  /**
   * @param request - DescribeVsStreamsOnlineListRequest
   * @returns DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineList(request: DescribeVsStreamsOnlineListRequest): Promise<DescribeVsStreamsOnlineListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsOnlineListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsStreamsPublishListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishListWithOptions(request: DescribeVsStreamsPublishListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsStreamsPublishListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!$dara.isNull(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsStreamsPublishList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsStreamsPublishListResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsPublishListResponse({}));
    } else {
      return $dara.cast<DescribeVsStreamsPublishListResponse>(await this.execute(params, req, runtime), new DescribeVsStreamsPublishListResponse({}));
    }

  }

  /**
   * @param request - DescribeVsStreamsPublishListRequest
   * @returns DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishList(request: DescribeVsStreamsPublishListRequest): Promise<DescribeVsStreamsPublishListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsStreamsPublishListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsTopDomainsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlowWithOptions(request: DescribeVsTopDomainsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsTopDomainsByFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsTopDomainsByFlow",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new DescribeVsTopDomainsByFlowResponse({}));
    } else {
      return $dara.cast<DescribeVsTopDomainsByFlowResponse>(await this.execute(params, req, runtime), new DescribeVsTopDomainsByFlowResponse({}));
    }

  }

  /**
   * @param request - DescribeVsTopDomainsByFlowRequest
   * @returns DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlow(request: DescribeVsTopDomainsByFlowRequest): Promise<DescribeVsTopDomainsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsUpPeakPublishStreamDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamDataWithOptions(request: DescribeVsUpPeakPublishStreamDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.domainSwitch)) {
      query["DomainSwitch"] = request.domainSwitch;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsUpPeakPublishStreamData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsUpPeakPublishStreamDataResponse>(await this.callApi(params, req, runtime), new DescribeVsUpPeakPublishStreamDataResponse({}));
    } else {
      return $dara.cast<DescribeVsUpPeakPublishStreamDataResponse>(await this.execute(params, req, runtime), new DescribeVsUpPeakPublishStreamDataResponse({}));
    }

  }

  /**
   * @param request - DescribeVsUpPeakPublishStreamDataRequest
   * @returns DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamData(request: DescribeVsUpPeakPublishStreamDataRequest): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsUserResourcePackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackageWithOptions(request: DescribeVsUserResourcePackageRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsUserResourcePackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsUserResourcePackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsUserResourcePackageResponse>(await this.callApi(params, req, runtime), new DescribeVsUserResourcePackageResponse({}));
    } else {
      return $dara.cast<DescribeVsUserResourcePackageResponse>(await this.execute(params, req, runtime), new DescribeVsUserResourcePackageResponse({}));
    }

  }

  /**
   * @param request - DescribeVsUserResourcePackageRequest
   * @returns DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackage(request: DescribeVsUserResourcePackageRequest): Promise<DescribeVsUserResourcePackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVsVerifyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContentWithOptions(request: DescribeVsVerifyContentRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVsVerifyContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsVerifyContent",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVsVerifyContentResponse>(await this.callApi(params, req, runtime), new DescribeVsVerifyContentResponse({}));
    } else {
      return $dara.cast<DescribeVsVerifyContentResponse>(await this.execute(params, req, runtime), new DescribeVsVerifyContentResponse({}));
    }

  }

  /**
   * @param request - DescribeVsVerifyContentRequest
   * @returns DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContent(request: DescribeVsVerifyContentRequest): Promise<DescribeVsVerifyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVsVerifyContentWithOptions(request, runtime);
  }

  /**
   * @param request - ForbidVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForbidVsStreamResponse
   */
  async forbidVsStreamWithOptions(request: ForbidVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<ForbidVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForbidVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ForbidVsStreamResponse>(await this.callApi(params, req, runtime), new ForbidVsStreamResponse({}));
    } else {
      return $dara.cast<ForbidVsStreamResponse>(await this.execute(params, req, runtime), new ForbidVsStreamResponse({}));
    }

  }

  /**
   * @param request - ForbidVsStreamRequest
   * @returns ForbidVsStreamResponse
   */
  async forbidVsStream(request: ForbidVsStreamRequest): Promise<ForbidVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forbidVsStreamWithOptions(request, runtime);
  }

  /**
   * 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   * 
   * @param request - GetRenderingInstanceStreamingInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfoWithOptions(request: GetRenderingInstanceStreamingInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetRenderingInstanceStreamingInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRenderingInstanceStreamingInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRenderingInstanceStreamingInfoResponse>(await this.callApi(params, req, runtime), new GetRenderingInstanceStreamingInfoResponse({}));
    } else {
      return $dara.cast<GetRenderingInstanceStreamingInfoResponse>(await this.execute(params, req, runtime), new GetRenderingInstanceStreamingInfoResponse({}));
    }

  }

  /**
   * 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   * 
   * @param request - GetRenderingInstanceStreamingInfoRequest
   * @returns GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfo(request: GetRenderingInstanceStreamingInfoRequest): Promise<GetRenderingInstanceStreamingInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRenderingInstanceStreamingInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GotoPresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GotoPresetResponse
   */
  async gotoPresetWithOptions(request: GotoPresetRequest, runtime: $dara.RuntimeOptions): Promise<GotoPresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GotoPreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GotoPresetResponse>(await this.callApi(params, req, runtime), new GotoPresetResponse({}));
    } else {
      return $dara.cast<GotoPresetResponse>(await this.execute(params, req, runtime), new GotoPresetResponse({}));
    }

  }

  /**
   * @param request - GotoPresetRequest
   * @returns GotoPresetResponse
   */
  async gotoPreset(request: GotoPresetRequest): Promise<GotoPresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.gotoPresetWithOptions(request, runtime);
  }

  /**
   * 安装云应用
   * 
   * @param request - InstallCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudAppResponse
   */
  async installCloudAppWithOptions(request: InstallCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<InstallCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallCloudAppResponse>(await this.callApi(params, req, runtime), new InstallCloudAppResponse({}));
    } else {
      return $dara.cast<InstallCloudAppResponse>(await this.execute(params, req, runtime), new InstallCloudAppResponse({}));
    }

  }

  /**
   * 安装云应用
   * 
   * @param request - InstallCloudAppRequest
   * @returns InstallCloudAppResponse
   */
  async installCloudApp(request: InstallCloudAppRequest): Promise<InstallCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudAppWithOptions(request, runtime);
  }

  /**
   * 查询云应用安装信息列表
   * 
   * @param request - ListCloudAppInstallationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallationsWithOptions(request: ListCloudAppInstallationsRequest, runtime: $dara.RuntimeOptions): Promise<ListCloudAppInstallationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudAppInstallations",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCloudAppInstallationsResponse>(await this.callApi(params, req, runtime), new ListCloudAppInstallationsResponse({}));
    } else {
      return $dara.cast<ListCloudAppInstallationsResponse>(await this.execute(params, req, runtime), new ListCloudAppInstallationsResponse({}));
    }

  }

  /**
   * 查询云应用安装信息列表
   * 
   * @param request - ListCloudAppInstallationsRequest
   * @returns ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallations(request: ListCloudAppInstallationsRequest): Promise<ListCloudAppInstallationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAppInstallationsWithOptions(request, runtime);
  }

  /**
   * 查询云应用列表
   * 
   * @param request - ListCloudAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudAppsResponse
   */
  async listCloudAppsWithOptions(request: ListCloudAppsRequest, runtime: $dara.RuntimeOptions): Promise<ListCloudAppsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudApps",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCloudAppsResponse>(await this.callApi(params, req, runtime), new ListCloudAppsResponse({}));
    } else {
      return $dara.cast<ListCloudAppsResponse>(await this.execute(params, req, runtime), new ListCloudAppsResponse({}));
    }

  }

  /**
   * 查询云应用列表
   * 
   * @param request - ListCloudAppsRequest
   * @returns ListCloudAppsResponse
   */
  async listCloudApps(request: ListCloudAppsRequest): Promise<ListCloudAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudAppsWithOptions(request, runtime);
  }

  /**
   * 查询文件的实例推送状态信息列表。
   * 
   * @param request - ListFilePushStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilePushStatusesResponse
   */
  async listFilePushStatusesWithOptions(request: ListFilePushStatusesRequest, runtime: $dara.RuntimeOptions): Promise<ListFilePushStatusesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFilePushStatuses",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFilePushStatusesResponse>(await this.callApi(params, req, runtime), new ListFilePushStatusesResponse({}));
    } else {
      return $dara.cast<ListFilePushStatusesResponse>(await this.execute(params, req, runtime), new ListFilePushStatusesResponse({}));
    }

  }

  /**
   * 查询文件的实例推送状态信息列表。
   * 
   * @param request - ListFilePushStatusesRequest
   * @returns ListFilePushStatusesResponse
   */
  async listFilePushStatuses(request: ListFilePushStatusesRequest): Promise<ListFilePushStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilePushStatusesWithOptions(request, runtime);
  }

  /**
   * 查询可用文件列表。
   * 
   * @param request - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(request: ListFilesRequest, runtime: $dara.RuntimeOptions): Promise<ListFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFiles",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFilesResponse>(await this.callApi(params, req, runtime), new ListFilesResponse({}));
    } else {
      return $dara.cast<ListFilesResponse>(await this.execute(params, req, runtime), new ListFilesResponse({}));
    }

  }

  /**
   * 查询可用文件列表。
   * 
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * 查询公钥信息
   * 
   * @param request - ListPublicKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicKeysResponse
   */
  async listPublicKeysWithOptions(request: ListPublicKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListPublicKeysResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublicKeys",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPublicKeysResponse>(await this.callApi(params, req, runtime), new ListPublicKeysResponse({}));
    } else {
      return $dara.cast<ListPublicKeysResponse>(await this.execute(params, req, runtime), new ListPublicKeysResponse({}));
    }

  }

  /**
   * 查询公钥信息
   * 
   * @param request - ListPublicKeysRequest
   * @returns ListPublicKeysResponse
   */
  async listPublicKeys(request: ListPublicKeysRequest): Promise<ListPublicKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicKeysWithOptions(request, runtime);
  }

  /**
   * 查询所有云应用数据包信息，支持分页查询。
   * 
   * @param request - ListRenderingDataPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingDataPackagesResponse
   */
  async listRenderingDataPackagesWithOptions(request: ListRenderingDataPackagesRequest, runtime: $dara.RuntimeOptions): Promise<ListRenderingDataPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingDataPackages",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRenderingDataPackagesResponse>(await this.callApi(params, req, runtime), new ListRenderingDataPackagesResponse({}));
    } else {
      return $dara.cast<ListRenderingDataPackagesResponse>(await this.execute(params, req, runtime), new ListRenderingDataPackagesResponse({}));
    }

  }

  /**
   * 查询所有云应用数据包信息，支持分页查询。
   * 
   * @param request - ListRenderingDataPackagesRequest
   * @returns ListRenderingDataPackagesResponse
   */
  async listRenderingDataPackages(request: ListRenderingDataPackagesRequest): Promise<ListRenderingDataPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingDataPackagesWithOptions(request, runtime);
  }

  /**
   * 查询自定义网关
   * 
   * @param request - ListRenderingInstanceGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingInstanceGatewayResponse
   */
  async listRenderingInstanceGatewayWithOptions(request: ListRenderingInstanceGatewayRequest, runtime: $dara.RuntimeOptions): Promise<ListRenderingInstanceGatewayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gatewayInstanceId)) {
      query["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingInstanceGateway",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRenderingInstanceGatewayResponse>(await this.callApi(params, req, runtime), new ListRenderingInstanceGatewayResponse({}));
    } else {
      return $dara.cast<ListRenderingInstanceGatewayResponse>(await this.execute(params, req, runtime), new ListRenderingInstanceGatewayResponse({}));
    }

  }

  /**
   * 查询自定义网关
   * 
   * @param request - ListRenderingInstanceGatewayRequest
   * @returns ListRenderingInstanceGatewayResponse
   */
  async listRenderingInstanceGateway(request: ListRenderingInstanceGatewayRequest): Promise<ListRenderingInstanceGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingInstanceGatewayWithOptions(request, runtime);
  }

  /**
   * 查询所有云渲染实例信息，支持分页查询。
   * 
   * @param request - ListRenderingInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRenderingInstancesResponse
   */
  async listRenderingInstancesWithOptions(request: ListRenderingInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListRenderingInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRenderingInstances",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRenderingInstancesResponse>(await this.callApi(params, req, runtime), new ListRenderingInstancesResponse({}));
    } else {
      return $dara.cast<ListRenderingInstancesResponse>(await this.execute(params, req, runtime), new ListRenderingInstancesResponse({}));
    }

  }

  /**
   * 查询所有云渲染实例信息，支持分页查询。
   * 
   * @param request - ListRenderingInstancesRequest
   * @returns ListRenderingInstancesResponse
   */
  async listRenderingInstances(request: ListRenderingInstancesRequest): Promise<ListRenderingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRenderingInstancesWithOptions(request, runtime);
  }

  /**
   * 安全登陆管理
   * 
   * @param request - ManageLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageLoginResponse
   */
  async manageLoginWithOptions(request: ManageLoginRequest, runtime: $dara.RuntimeOptions): Promise<ManageLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageLogin",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManageLoginResponse>(await this.callApi(params, req, runtime), new ManageLoginResponse({}));
    } else {
      return $dara.cast<ManageLoginResponse>(await this.execute(params, req, runtime), new ManageLoginResponse({}));
    }

  }

  /**
   * 安全登陆管理
   * 
   * @param request - ManageLoginRequest
   * @returns ManageLoginResponse
   */
  async manageLogin(request: ManageLoginRequest): Promise<ManageLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manageLoginWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceResponse
   */
  async modifyDeviceWithOptions(request: ModifyDeviceRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!$dara.isNull(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!$dara.isNull(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDeviceResponse>(await this.callApi(params, req, runtime), new ModifyDeviceResponse({}));
    } else {
      return $dara.cast<ModifyDeviceResponse>(await this.execute(params, req, runtime), new ModifyDeviceResponse({}));
    }

  }

  /**
   * @param request - ModifyDeviceRequest
   * @returns ModifyDeviceResponse
   */
  async modifyDevice(request: ModifyDeviceRequest): Promise<ModifyDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarmWithOptions(request: ModifyDeviceAlarmRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDeviceAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceAlarm",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDeviceAlarmResponse>(await this.callApi(params, req, runtime), new ModifyDeviceAlarmResponse({}));
    } else {
      return $dara.cast<ModifyDeviceAlarmResponse>(await this.execute(params, req, runtime), new ModifyDeviceAlarmResponse({}));
    }

  }

  /**
   * @param request - ModifyDeviceAlarmRequest
   * @returns ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarm(request: ModifyDeviceAlarmRequest): Promise<ModifyDeviceAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceCaptureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceCaptureResponse
   */
  async modifyDeviceCaptureWithOptions(request: ModifyDeviceCaptureRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDeviceCaptureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceCapture",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDeviceCaptureResponse>(await this.callApi(params, req, runtime), new ModifyDeviceCaptureResponse({}));
    } else {
      return $dara.cast<ModifyDeviceCaptureResponse>(await this.execute(params, req, runtime), new ModifyDeviceCaptureResponse({}));
    }

  }

  /**
   * @param request - ModifyDeviceCaptureRequest
   * @returns ModifyDeviceCaptureResponse
   */
  async modifyDeviceCapture(request: ModifyDeviceCaptureRequest): Promise<ModifyDeviceCaptureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceCaptureWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannelsWithOptions(request: ModifyDeviceChannelsRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDeviceChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channels)) {
      query["Channels"] = request.channels;
    }

    if (!$dara.isNull(request.deviceStatus)) {
      query["DeviceStatus"] = request.deviceStatus;
    }

    if (!$dara.isNull(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeviceChannels",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDeviceChannelsResponse>(await this.callApi(params, req, runtime), new ModifyDeviceChannelsResponse({}));
    } else {
      return $dara.cast<ModifyDeviceChannelsResponse>(await this.execute(params, req, runtime), new ModifyDeviceChannelsResponse({}));
    }

  }

  /**
   * @param request - ModifyDeviceChannelsRequest
   * @returns ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannels(request: ModifyDeviceChannelsRequest): Promise<ModifyDeviceChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDirectoryResponse
   */
  async modifyDirectoryWithOptions(request: ModifyDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDirectoryResponse>(await this.callApi(params, req, runtime), new ModifyDirectoryResponse({}));
    } else {
      return $dara.cast<ModifyDirectoryResponse>(await this.execute(params, req, runtime), new ModifyDirectoryResponse({}));
    }

  }

  /**
   * @param request - ModifyDirectoryRequest
   * @returns ModifyDirectoryResponse
   */
  async modifyDirectory(request: ModifyDirectoryRequest): Promise<ModifyDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGroupResponse
   */
  async modifyGroupWithOptions(request: ModifyGroupRequest, runtime: $dara.RuntimeOptions): Promise<ModifyGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!$dara.isNull(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!$dara.isNull(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGroup",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyGroupResponse>(await this.callApi(params, req, runtime), new ModifyGroupResponse({}));
    } else {
      return $dara.cast<ModifyGroupResponse>(await this.execute(params, req, runtime), new ModifyGroupResponse({}));
    }

  }

  /**
   * @param request - ModifyGroupRequest
   * @returns ModifyGroupResponse
   */
  async modifyGroup(request: ModifyGroupRequest): Promise<ModifyGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParentPlatformResponse
   */
  async modifyParentPlatformWithOptions(request: ModifyParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<ModifyParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!$dara.isNull(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!$dara.isNull(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyParentPlatformResponse>(await this.callApi(params, req, runtime), new ModifyParentPlatformResponse({}));
    } else {
      return $dara.cast<ModifyParentPlatformResponse>(await this.execute(params, req, runtime), new ModifyParentPlatformResponse({}));
    }

  }

  /**
   * @param request - ModifyParentPlatformRequest
   * @returns ModifyParentPlatformResponse
   */
  async modifyParentPlatform(request: ModifyParentPlatformRequest): Promise<ModifyParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParentPlatformWithOptions(request, runtime);
  }

  /**
   * 变配云渲染资源实例
   * 
   * @param request - ModifyRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRenderingInstanceResponse
   */
  async modifyRenderingInstanceWithOptions(request: ModifyRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ModifyRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.renderingSpec)) {
      query["RenderingSpec"] = request.renderingSpec;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyRenderingInstanceResponse>(await this.callApi(params, req, runtime), new ModifyRenderingInstanceResponse({}));
    } else {
      return $dara.cast<ModifyRenderingInstanceResponse>(await this.execute(params, req, runtime), new ModifyRenderingInstanceResponse({}));
    }

  }

  /**
   * 变配云渲染资源实例
   * 
   * @param request - ModifyRenderingInstanceRequest
   * @returns ModifyRenderingInstanceResponse
   */
  async modifyRenderingInstance(request: ModifyRenderingInstanceRequest): Promise<ModifyRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 修改云渲染实例限速带宽
   * 
   * @param request - ModifyRenderingInstanceBandwidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidthWithOptions(request: ModifyRenderingInstanceBandwidthRequest, runtime: $dara.RuntimeOptions): Promise<ModifyRenderingInstanceBandwidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxEgressBandwidth)) {
      query["MaxEgressBandwidth"] = request.maxEgressBandwidth;
    }

    if (!$dara.isNull(request.maxIngressBandwidth)) {
      query["MaxIngressBandwidth"] = request.maxIngressBandwidth;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRenderingInstanceBandwidth",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyRenderingInstanceBandwidthResponse>(await this.callApi(params, req, runtime), new ModifyRenderingInstanceBandwidthResponse({}));
    } else {
      return $dara.cast<ModifyRenderingInstanceBandwidthResponse>(await this.execute(params, req, runtime), new ModifyRenderingInstanceBandwidthResponse({}));
    }

  }

  /**
   * 修改云渲染实例限速带宽
   * 
   * @param request - ModifyRenderingInstanceBandwidthRequest
   * @returns ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidth(request: ModifyRenderingInstanceBandwidthRequest): Promise<ModifyRenderingInstanceBandwidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRenderingInstanceBandwidthWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTemplateResponse
   */
  async modifyTemplateWithOptions(request: ModifyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ModifyTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!$dara.isNull(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!$dara.isNull(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!$dara.isNull(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!$dara.isNull(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!$dara.isNull(request.mp4)) {
      query["Mp4"] = request.mp4;
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

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!$dara.isNull(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!$dara.isNull(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyTemplateResponse>(await this.callApi(params, req, runtime), new ModifyTemplateResponse({}));
    } else {
      return $dara.cast<ModifyTemplateResponse>(await this.execute(params, req, runtime), new ModifyTemplateResponse({}));
    }

  }

  /**
   * @param request - ModifyTemplateRequest
   * @returns ModifyTemplateResponse
   */
  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - OpenVsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVsServiceResponse
   */
  async openVsServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<OpenVsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenVsService",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenVsServiceResponse>(await this.callApi(params, req, runtime), new OpenVsServiceResponse({}));
    } else {
      return $dara.cast<OpenVsServiceResponse>(await this.execute(params, req, runtime), new OpenVsServiceResponse({}));
    }

  }

  /**
   * @returns OpenVsServiceResponse
   */
  async openVsService(): Promise<OpenVsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVsServiceWithOptions(runtime);
  }

  /**
   * 预推文件到云渲染实例。
   * 
   * @param request - PushFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushFileResponse
   */
  async pushFileWithOptions(request: PushFileRequest, runtime: $dara.RuntimeOptions): Promise<PushFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushFileResponse>(await this.callApi(params, req, runtime), new PushFileResponse({}));
    } else {
      return $dara.cast<PushFileResponse>(await this.execute(params, req, runtime), new PushFileResponse({}));
    }

  }

  /**
   * 预推文件到云渲染实例。
   * 
   * @param request - PushFileRequest
   * @returns PushFileResponse
   */
  async pushFile(request: PushFileRequest): Promise<PushFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushFileWithOptions(request, runtime);
  }

  /**
   * 重启云渲染实例
   * 
   * @param request - RebootRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootRenderingInstanceResponse
   */
  async rebootRenderingInstanceWithOptions(request: RebootRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RebootRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RebootRenderingInstanceResponse>(await this.callApi(params, req, runtime), new RebootRenderingInstanceResponse({}));
    } else {
      return $dara.cast<RebootRenderingInstanceResponse>(await this.execute(params, req, runtime), new RebootRenderingInstanceResponse({}));
    }

  }

  /**
   * 重启云渲染实例
   * 
   * @param request - RebootRenderingInstanceRequest
   * @returns RebootRenderingInstanceResponse
   */
  async rebootRenderingInstance(request: RebootRenderingInstanceRequest): Promise<RebootRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 恢复数据到云渲染实例
   * 
   * @param request - RecoverRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverRenderingDataPackageResponse
   */
  async recoverRenderingDataPackageWithOptions(request: RecoverRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<RecoverRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RecoverRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new RecoverRenderingDataPackageResponse({}));
    } else {
      return $dara.cast<RecoverRenderingDataPackageResponse>(await this.execute(params, req, runtime), new RecoverRenderingDataPackageResponse({}));
    }

  }

  /**
   * 恢复数据到云渲染实例
   * 
   * @param request - RecoverRenderingDataPackageRequest
   * @returns RecoverRenderingDataPackageResponse
   */
  async recoverRenderingDataPackage(request: RecoverRenderingDataPackageRequest): Promise<RecoverRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 更新实例流连接信息
   * 
   * @param tmpReq - RefreshRenderingInstanceStreamingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshRenderingInstanceStreamingResponse
   */
  async refreshRenderingInstanceStreamingWithOptions(tmpReq: RefreshRenderingInstanceStreamingRequest, runtime: $dara.RuntimeOptions): Promise<RefreshRenderingInstanceStreamingResponse> {
    tmpReq.validate();
    let request = new RefreshRenderingInstanceStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientInfo)) {
      request.clientInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientInfo, "ClientInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientInfoShrink)) {
      query["ClientInfo"] = request.clientInfoShrink;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshRenderingInstanceStreaming",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshRenderingInstanceStreamingResponse>(await this.callApi(params, req, runtime), new RefreshRenderingInstanceStreamingResponse({}));
    } else {
      return $dara.cast<RefreshRenderingInstanceStreamingResponse>(await this.execute(params, req, runtime), new RefreshRenderingInstanceStreamingResponse({}));
    }

  }

  /**
   * 更新实例流连接信息
   * 
   * @param request - RefreshRenderingInstanceStreamingRequest
   * @returns RefreshRenderingInstanceStreamingResponse
   */
  async refreshRenderingInstanceStreaming(request: RefreshRenderingInstanceStreamingRequest): Promise<RefreshRenderingInstanceStreamingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshRenderingInstanceStreamingWithOptions(request, runtime);
  }

  /**
   * 释放云渲染数据包
   * 
   * @param request - ReleaseRenderingDataPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseRenderingDataPackageResponse
   */
  async releaseRenderingDataPackageWithOptions(request: ReleaseRenderingDataPackageRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseRenderingDataPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseRenderingDataPackage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseRenderingDataPackageResponse>(await this.callApi(params, req, runtime), new ReleaseRenderingDataPackageResponse({}));
    } else {
      return $dara.cast<ReleaseRenderingDataPackageResponse>(await this.execute(params, req, runtime), new ReleaseRenderingDataPackageResponse({}));
    }

  }

  /**
   * 释放云渲染数据包
   * 
   * @param request - ReleaseRenderingDataPackageRequest
   * @returns ReleaseRenderingDataPackageResponse
   */
  async releaseRenderingDataPackage(request: ReleaseRenderingDataPackageRequest): Promise<ReleaseRenderingDataPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseRenderingDataPackageWithOptions(request, runtime);
  }

  /**
   * 释放云渲染实例
   * 
   * @param request - ReleaseRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstanceWithOptions(request: ReleaseRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseRenderingInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseRenderingInstanceResponse({}));
    } else {
      return $dara.cast<ReleaseRenderingInstanceResponse>(await this.execute(params, req, runtime), new ReleaseRenderingInstanceResponse({}));
    }

  }

  /**
   * 释放云渲染实例
   * 
   * @param request - ReleaseRenderingInstanceRequest
   * @returns ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstance(request: ReleaseRenderingInstanceRequest): Promise<ReleaseRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 续费云渲染资源实例
   * 
   * @param request - RenewRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewRenderingInstanceResponse
   */
  async renewRenderingInstanceWithOptions(request: RenewRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RenewRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenewRenderingInstanceResponse>(await this.callApi(params, req, runtime), new RenewRenderingInstanceResponse({}));
    } else {
      return $dara.cast<RenewRenderingInstanceResponse>(await this.execute(params, req, runtime), new RenewRenderingInstanceResponse({}));
    }

  }

  /**
   * 续费云渲染资源实例
   * 
   * @param request - RenewRenderingInstanceRequest
   * @returns RenewRenderingInstanceResponse
   */
  async renewRenderingInstance(request: RenewRenderingInstanceRequest): Promise<RenewRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * 重置云渲染实例
   * 
   * @param request - ResetRenderingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetRenderingInstanceResponse
   */
  async resetRenderingInstanceWithOptions(request: ResetRenderingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ResetRenderingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.dataPackageId)) {
      query["DataPackageId"] = request.dataPackageId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetRenderingInstance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetRenderingInstanceResponse>(await this.callApi(params, req, runtime), new ResetRenderingInstanceResponse({}));
    } else {
      return $dara.cast<ResetRenderingInstanceResponse>(await this.execute(params, req, runtime), new ResetRenderingInstanceResponse({}));
    }

  }

  /**
   * 重置云渲染实例
   * 
   * @param request - ResetRenderingInstanceRequest
   * @returns ResetRenderingInstanceResponse
   */
  async resetRenderingInstance(request: ResetRenderingInstanceRequest): Promise<ResetRenderingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeVsStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeVsStreamResponse
   */
  async resumeVsStreamWithOptions(request: ResumeVsStreamRequest, runtime: $dara.RuntimeOptions): Promise<ResumeVsStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeVsStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResumeVsStreamResponse>(await this.callApi(params, req, runtime), new ResumeVsStreamResponse({}));
    } else {
      return $dara.cast<ResumeVsStreamResponse>(await this.execute(params, req, runtime), new ResumeVsStreamResponse({}));
    }

  }

  /**
   * @param request - ResumeVsStreamRequest
   * @returns ResumeVsStreamResponse
   */
  async resumeVsStream(request: ResumeVsStreamRequest): Promise<ResumeVsStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeVsStreamWithOptions(request, runtime);
  }

  /**
   * 下发shell命令，同步响应。不适用于耗时命令。
   * 
   * @param request - SendRenderingInstanceCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommandsWithOptions(request: SendRenderingInstanceCommandsRequest, runtime: $dara.RuntimeOptions): Promise<SendRenderingInstanceCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commands)) {
      body["Commands"] = request.commands;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendRenderingInstanceCommands",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendRenderingInstanceCommandsResponse>(await this.callApi(params, req, runtime), new SendRenderingInstanceCommandsResponse({}));
    } else {
      return $dara.cast<SendRenderingInstanceCommandsResponse>(await this.execute(params, req, runtime), new SendRenderingInstanceCommandsResponse({}));
    }

  }

  /**
   * 下发shell命令，同步响应。不适用于耗时命令。
   * 
   * @param request - SendRenderingInstanceCommandsRequest
   * @returns SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommands(request: SendRenderingInstanceCommandsRequest): Promise<SendRenderingInstanceCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendRenderingInstanceCommandsWithOptions(request, runtime);
  }

  /**
   * @param request - SetPresetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPresetResponse
   */
  async setPresetWithOptions(request: SetPresetRequest, runtime: $dara.RuntimeOptions): Promise<SetPresetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPreset",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetPresetResponse>(await this.callApi(params, req, runtime), new SetPresetResponse({}));
    } else {
      return $dara.cast<SetPresetResponse>(await this.execute(params, req, runtime), new SetPresetResponse({}));
    }

  }

  /**
   * @param request - SetPresetRequest
   * @returns SetPresetResponse
   */
  async setPreset(request: SetPresetRequest): Promise<SetPresetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPresetWithOptions(request, runtime);
  }

  /**
   * @param request - SetVsDomainCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVsDomainCertificateResponse
   */
  async setVsDomainCertificateWithOptions(request: SetVsDomainCertificateRequest, runtime: $dara.RuntimeOptions): Promise<SetVsDomainCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.forceSet)) {
      query["ForceSet"] = request.forceSet;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!$dara.isNull(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!$dara.isNull(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVsDomainCertificate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetVsDomainCertificateResponse>(await this.callApi(params, req, runtime), new SetVsDomainCertificateResponse({}));
    } else {
      return $dara.cast<SetVsDomainCertificateResponse>(await this.execute(params, req, runtime), new SetVsDomainCertificateResponse({}));
    }

  }

  /**
   * @param request - SetVsDomainCertificateRequest
   * @returns SetVsDomainCertificateResponse
   */
  async setVsDomainCertificate(request: SetVsDomainCertificateRequest): Promise<SetVsDomainCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVsDomainCertificateWithOptions(request, runtime);
  }

  /**
   * @param request - SetVsStreamsNotifyUrlConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfigWithOptions(request: SetVsStreamsNotifyUrlConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetVsStreamsNotifyUrlConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new SetVsStreamsNotifyUrlConfigResponse({}));
    } else {
      return $dara.cast<SetVsStreamsNotifyUrlConfigResponse>(await this.execute(params, req, runtime), new SetVsStreamsNotifyUrlConfigResponse({}));
    }

  }

  /**
   * @param request - SetVsStreamsNotifyUrlConfigRequest
   * @returns SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfig(request: SetVsStreamsNotifyUrlConfigRequest): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request - StartDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDeviceResponse
   */
  async startDeviceWithOptions(request: StartDeviceRequest, runtime: $dara.RuntimeOptions): Promise<StartDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDeviceResponse>(await this.callApi(params, req, runtime), new StartDeviceResponse({}));
    } else {
      return $dara.cast<StartDeviceResponse>(await this.execute(params, req, runtime), new StartDeviceResponse({}));
    }

  }

  /**
   * @param request - StartDeviceRequest
   * @returns StartDeviceResponse
   */
  async startDevice(request: StartDeviceRequest): Promise<StartDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - StartParentPlatformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartParentPlatformResponse
   */
  async startParentPlatformWithOptions(request: StartParentPlatformRequest, runtime: $dara.RuntimeOptions): Promise<StartParentPlatformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartParentPlatformResponse>(await this.callApi(params, req, runtime), new StartParentPlatformResponse({}));
    } else {
      return $dara.cast<StartParentPlatformResponse>(await this.execute(params, req, runtime), new StartParentPlatformResponse({}));
    }

  }

  /**
   * @param request - StartParentPlatformRequest
   * @returns StartParentPlatformResponse
   */
  async startParentPlatform(request: StartParentPlatformRequest): Promise<StartParentPlatformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request - StartPublishStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPublishStreamResponse
   */
  async startPublishStreamWithOptions(request: StartPublishStreamRequest, runtime: $dara.RuntimeOptions): Promise<StartPublishStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.publishUrl)) {
      query["PublishUrl"] = request.publishUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPublishStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartPublishStreamResponse>(await this.callApi(params, req, runtime), new StartPublishStreamResponse({}));
    } else {
      return $dara.cast<StartPublishStreamResponse>(await this.execute(params, req, runtime), new StartPublishStreamResponse({}));
    }

  }

  /**
   * @param request - StartPublishStreamRequest
   * @returns StartPublishStreamResponse
   */
  async startPublishStream(request: StartPublishStreamRequest): Promise<StartPublishStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordStreamResponse
   */
  async startRecordStreamWithOptions(request: StartRecordStreamRequest, runtime: $dara.RuntimeOptions): Promise<StartRecordStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartRecordStreamResponse>(await this.callApi(params, req, runtime), new StartRecordStreamResponse({}));
    } else {
      return $dara.cast<StartRecordStreamResponse>(await this.execute(params, req, runtime), new StartRecordStreamResponse({}));
    }

  }

  /**
   * @param request - StartRecordStreamRequest
   * @returns StartRecordStreamResponse
   */
  async startRecordStream(request: StartRecordStreamRequest): Promise<StartRecordStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StartStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartStreamResponse
   */
  async startStreamWithOptions(request: StartStreamRequest, runtime: $dara.RuntimeOptions): Promise<StartStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartStreamResponse>(await this.callApi(params, req, runtime), new StartStreamResponse({}));
    } else {
      return $dara.cast<StartStreamResponse>(await this.execute(params, req, runtime), new StartStreamResponse({}));
    }

  }

  /**
   * @param request - StartStreamRequest
   * @returns StartStreamResponse
   */
  async startStream(request: StartStreamRequest): Promise<StartStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StartTransferStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTransferStreamResponse
   */
  async startTransferStreamWithOptions(request: StartTransferStreamRequest, runtime: $dara.RuntimeOptions): Promise<StartTransferStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTransferStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTransferStreamResponse>(await this.callApi(params, req, runtime), new StartTransferStreamResponse({}));
    } else {
      return $dara.cast<StartTransferStreamResponse>(await this.execute(params, req, runtime), new StartTransferStreamResponse({}));
    }

  }

  /**
   * @param request - StartTransferStreamRequest
   * @returns StartTransferStreamResponse
   */
  async startTransferStream(request: StartTransferStreamRequest): Promise<StartTransferStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopAdjustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAdjustResponse
   */
  async stopAdjustWithOptions(request: StopAdjustRequest, runtime: $dara.RuntimeOptions): Promise<StopAdjustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAdjust",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAdjustResponse>(await this.callApi(params, req, runtime), new StopAdjustResponse({}));
    } else {
      return $dara.cast<StopAdjustResponse>(await this.execute(params, req, runtime), new StopAdjustResponse({}));
    }

  }

  /**
   * @param request - StopAdjustRequest
   * @returns StopAdjustResponse
   */
  async stopAdjust(request: StopAdjustRequest): Promise<StopAdjustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAdjustWithOptions(request, runtime);
  }

  /**
   * @param request - StopDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDeviceResponse
   */
  async stopDeviceWithOptions(request: StopDeviceRequest, runtime: $dara.RuntimeOptions): Promise<StopDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDeviceResponse>(await this.callApi(params, req, runtime), new StopDeviceResponse({}));
    } else {
      return $dara.cast<StopDeviceResponse>(await this.execute(params, req, runtime), new StopDeviceResponse({}));
    }

  }

  /**
   * @param request - StopDeviceRequest
   * @returns StopDeviceResponse
   */
  async stopDevice(request: StopDeviceRequest): Promise<StopDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - StopMoveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMoveResponse
   */
  async stopMoveWithOptions(request: StopMoveRequest, runtime: $dara.RuntimeOptions): Promise<StopMoveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!$dara.isNull(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!$dara.isNull(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMove",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopMoveResponse>(await this.callApi(params, req, runtime), new StopMoveResponse({}));
    } else {
      return $dara.cast<StopMoveResponse>(await this.execute(params, req, runtime), new StopMoveResponse({}));
    }

  }

  /**
   * @param request - StopMoveRequest
   * @returns StopMoveResponse
   */
  async stopMove(request: StopMoveRequest): Promise<StopMoveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMoveWithOptions(request, runtime);
  }

  /**
   * @param request - StopPublishStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopPublishStreamResponse
   */
  async stopPublishStreamWithOptions(request: StopPublishStreamRequest, runtime: $dara.RuntimeOptions): Promise<StopPublishStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopPublishStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopPublishStreamResponse>(await this.callApi(params, req, runtime), new StopPublishStreamResponse({}));
    } else {
      return $dara.cast<StopPublishStreamResponse>(await this.execute(params, req, runtime), new StopPublishStreamResponse({}));
    }

  }

  /**
   * @param request - StopPublishStreamRequest
   * @returns StopPublishStreamResponse
   */
  async stopPublishStream(request: StopPublishStreamRequest): Promise<StopPublishStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordStreamResponse
   */
  async stopRecordStreamWithOptions(request: StopRecordStreamRequest, runtime: $dara.RuntimeOptions): Promise<StopRecordStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.app)) {
      query["App"] = request.app;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopRecordStreamResponse>(await this.callApi(params, req, runtime), new StopRecordStreamResponse({}));
    } else {
      return $dara.cast<StopRecordStreamResponse>(await this.execute(params, req, runtime), new StopRecordStreamResponse({}));
    }

  }

  /**
   * @param request - StopRecordStreamRequest
   * @returns StopRecordStreamResponse
   */
  async stopRecordStream(request: StopRecordStreamRequest): Promise<StopRecordStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStreamResponse
   */
  async stopStreamWithOptions(request: StopStreamRequest, runtime: $dara.RuntimeOptions): Promise<StopStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopStreamResponse>(await this.callApi(params, req, runtime), new StopStreamResponse({}));
    } else {
      return $dara.cast<StopStreamResponse>(await this.execute(params, req, runtime), new StopStreamResponse({}));
    }

  }

  /**
   * @param request - StopStreamRequest
   * @returns StopStreamResponse
   */
  async stopStream(request: StopStreamRequest): Promise<StopStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopStreamWithOptions(request, runtime);
  }

  /**
   * @param request - StopTransferStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTransferStreamResponse
   */
  async stopTransferStreamWithOptions(request: StopTransferStreamRequest, runtime: $dara.RuntimeOptions): Promise<StopTransferStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTransferStream",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopTransferStreamResponse>(await this.callApi(params, req, runtime), new StopTransferStreamResponse({}));
    } else {
      return $dara.cast<StopTransferStreamResponse>(await this.execute(params, req, runtime), new StopTransferStreamResponse({}));
    }

  }

  /**
   * @param request - StopTransferStreamRequest
   * @returns StopTransferStreamResponse
   */
  async stopTransferStream(request: StopTransferStreamRequest): Promise<StopTransferStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request - SyncCatalogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncCatalogsResponse
   */
  async syncCatalogsWithOptions(request: SyncCatalogsRequest, runtime: $dara.RuntimeOptions): Promise<SyncCatalogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncCatalogs",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncCatalogsResponse>(await this.callApi(params, req, runtime), new SyncCatalogsResponse({}));
    } else {
      return $dara.cast<SyncCatalogsResponse>(await this.execute(params, req, runtime), new SyncCatalogsResponse({}));
    }

  }

  /**
   * @param request - SyncCatalogsRequest
   * @returns SyncCatalogsResponse
   */
  async syncCatalogs(request: SyncCatalogsRequest): Promise<SyncCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncCatalogsWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDirectoryResponse
   */
  async unbindDirectoryWithOptions(request: UnbindDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<UnbindDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDirectory",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindDirectoryResponse>(await this.callApi(params, req, runtime), new UnbindDirectoryResponse({}));
    } else {
      return $dara.cast<UnbindDirectoryResponse>(await this.execute(params, req, runtime), new UnbindDirectoryResponse({}));
    }

  }

  /**
   * @param request - UnbindDirectoryRequest
   * @returns UnbindDirectoryResponse
   */
  async unbindDirectory(request: UnbindDirectoryRequest): Promise<UnbindDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindParentPlatformDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDeviceWithOptions(request: UnbindParentPlatformDeviceRequest, runtime: $dara.RuntimeOptions): Promise<UnbindParentPlatformDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindParentPlatformDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new UnbindParentPlatformDeviceResponse({}));
    } else {
      return $dara.cast<UnbindParentPlatformDeviceResponse>(await this.execute(params, req, runtime), new UnbindParentPlatformDeviceResponse({}));
    }

  }

  /**
   * @param request - UnbindParentPlatformDeviceRequest
   * @returns UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDevice(request: UnbindParentPlatformDeviceRequest): Promise<UnbindParentPlatformDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindPurchasedDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDeviceWithOptions(request: UnbindPurchasedDeviceRequest, runtime: $dara.RuntimeOptions): Promise<UnbindPurchasedDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new UnbindPurchasedDeviceResponse({}));
    } else {
      return $dara.cast<UnbindPurchasedDeviceResponse>(await this.execute(params, req, runtime), new UnbindPurchasedDeviceResponse({}));
    }

  }

  /**
   * @param request - UnbindPurchasedDeviceRequest
   * @returns UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDevice(request: UnbindPurchasedDeviceRequest): Promise<UnbindPurchasedDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTemplateResponse
   */
  async unbindTemplateWithOptions(request: UnbindTemplateRequest, runtime: $dara.RuntimeOptions): Promise<UnbindTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindTemplate",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindTemplateResponse>(await this.callApi(params, req, runtime), new UnbindTemplateResponse({}));
    } else {
      return $dara.cast<UnbindTemplateResponse>(await this.execute(params, req, runtime), new UnbindTemplateResponse({}));
    }

  }

  /**
   * @param request - UnbindTemplateRequest
   * @returns UnbindTemplateResponse
   */
  async unbindTemplate(request: UnbindTemplateRequest): Promise<UnbindTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindTemplateWithOptions(request, runtime);
  }

  /**
   * 卸载云应用
   * 
   * @param request - UninstallCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallCloudAppResponse
   */
  async uninstallCloudAppWithOptions(request: UninstallCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<UninstallCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallCloudAppResponse>(await this.callApi(params, req, runtime), new UninstallCloudAppResponse({}));
    } else {
      return $dara.cast<UninstallCloudAppResponse>(await this.execute(params, req, runtime), new UninstallCloudAppResponse({}));
    }

  }

  /**
   * 卸载云应用
   * 
   * @param request - UninstallCloudAppRequest
   * @returns UninstallCloudAppResponse
   */
  async uninstallCloudApp(request: UninstallCloudAppRequest): Promise<UninstallCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request - UnlockDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockDeviceResponse
   */
  async unlockDeviceWithOptions(request: UnlockDeviceRequest, runtime: $dara.RuntimeOptions): Promise<UnlockDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnlockDeviceResponse>(await this.callApi(params, req, runtime), new UnlockDeviceResponse({}));
    } else {
      return $dara.cast<UnlockDeviceResponse>(await this.execute(params, req, runtime), new UnlockDeviceResponse({}));
    }

  }

  /**
   * @param request - UnlockDeviceRequest
   * @returns UnlockDeviceResponse
   */
  async unlockDevice(request: UnlockDeviceRequest): Promise<UnlockDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockDeviceWithOptions(request, runtime);
  }

  /**
   * 更新云应用信息
   * 
   * @param request - UpdateCloudAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfoWithOptions(request: UpdateCloudAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCloudAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloudAppInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCloudAppInfoResponse>(await this.callApi(params, req, runtime), new UpdateCloudAppInfoResponse({}));
    } else {
      return $dara.cast<UpdateCloudAppInfoResponse>(await this.execute(params, req, runtime), new UpdateCloudAppInfoResponse({}));
    }

  }

  /**
   * 更新云应用信息
   * 
   * @param request - UpdateCloudAppInfoRequest
   * @returns UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfo(request: UpdateCloudAppInfoRequest): Promise<UpdateCloudAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloudAppInfoWithOptions(request, runtime);
  }

  /**
   * 更新文件信息。
   * 
   * @param request - UpdateFileInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileInfoResponse
   */
  async updateFileInfoWithOptions(request: UpdateFileInfoRequest, runtime: $dara.RuntimeOptions): Promise<UpdateFileInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFileInfoResponse>(await this.callApi(params, req, runtime), new UpdateFileInfoResponse({}));
    } else {
      return $dara.cast<UpdateFileInfoResponse>(await this.execute(params, req, runtime), new UpdateFileInfoResponse({}));
    }

  }

  /**
   * 更新文件信息。
   * 
   * @param request - UpdateFileInfoRequest
   * @returns UpdateFileInfoResponse
   */
  async updateFileInfo(request: UpdateFileInfoRequest): Promise<UpdateFileInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileInfoWithOptions(request, runtime);
  }

  /**
   * 更新云渲染实例配置参数
   * 
   * @param tmpReq - UpdateRenderingInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfigurationWithOptions(tmpReq: UpdateRenderingInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRenderingInstanceConfigurationResponse> {
    tmpReq.validate();
    let request = new UpdateRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRenderingInstanceConfiguration",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateRenderingInstanceConfigurationResponse({}));
    } else {
      return $dara.cast<UpdateRenderingInstanceConfigurationResponse>(await this.execute(params, req, runtime), new UpdateRenderingInstanceConfigurationResponse({}));
    }

  }

  /**
   * 更新云渲染实例配置参数
   * 
   * @param request - UpdateRenderingInstanceConfigurationRequest
   * @returns UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfiguration(request: UpdateRenderingInstanceConfigurationRequest): Promise<UpdateRenderingInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * 更新实例设置
   * 
   * @param tmpReq - UpdateRenderingInstanceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRenderingInstanceSettingsResponse
   */
  async updateRenderingInstanceSettingsWithOptions(tmpReq: UpdateRenderingInstanceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRenderingInstanceSettingsResponse> {
    tmpReq.validate();
    let request = new UpdateRenderingInstanceSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    let query = { };
    if (!$dara.isNull(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    if (!$dara.isNull(request.settingsShrink)) {
      query["Settings"] = request.settingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRenderingInstanceSettings",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRenderingInstanceSettingsResponse>(await this.callApi(params, req, runtime), new UpdateRenderingInstanceSettingsResponse({}));
    } else {
      return $dara.cast<UpdateRenderingInstanceSettingsResponse>(await this.execute(params, req, runtime), new UpdateRenderingInstanceSettingsResponse({}));
    }

  }

  /**
   * 更新实例设置
   * 
   * @param request - UpdateRenderingInstanceSettingsRequest
   * @returns UpdateRenderingInstanceSettingsResponse
   */
  async updateRenderingInstanceSettings(request: UpdateRenderingInstanceSettingsRequest): Promise<UpdateRenderingInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRenderingInstanceSettingsWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateVsPullStreamInfoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfigWithOptions(request: UpdateVsPullStreamInfoConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateVsPullStreamInfoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.always)) {
      query["Always"] = request.always;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVsPullStreamInfoConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new UpdateVsPullStreamInfoConfigResponse({}));
    } else {
      return $dara.cast<UpdateVsPullStreamInfoConfigResponse>(await this.execute(params, req, runtime), new UpdateVsPullStreamInfoConfigResponse({}));
    }

  }

  /**
   * @param request - UpdateVsPullStreamInfoConfigRequest
   * @returns UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfig(request: UpdateVsPullStreamInfoConfigRequest): Promise<UpdateVsPullStreamInfoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * 应用上架
   * 
   * @param request - UploadCloudAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCloudAppResponse
   */
  async uploadCloudAppWithOptions(request: UploadCloudAppRequest, runtime: $dara.RuntimeOptions): Promise<UploadCloudAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadCloudApp",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadCloudAppResponse>(await this.callApi(params, req, runtime), new UploadCloudAppResponse({}));
    } else {
      return $dara.cast<UploadCloudAppResponse>(await this.execute(params, req, runtime), new UploadCloudAppResponse({}));
    }

  }

  /**
   * 应用上架
   * 
   * @param request - UploadCloudAppRequest
   * @returns UploadCloudAppResponse
   */
  async uploadCloudApp(request: UploadCloudAppRequest): Promise<UploadCloudAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCloudAppWithOptions(request, runtime);
  }

  /**
   * 文件上传
   * 
   * @param request - UploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadFileResponse
   */
  async uploadFileWithOptions(request: UploadFileRequest, runtime: $dara.RuntimeOptions): Promise<UploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.originUrl)) {
      query["OriginUrl"] = request.originUrl;
    }

    if (!$dara.isNull(request.targetPath)) {
      query["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadFile",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadFileResponse>(await this.callApi(params, req, runtime), new UploadFileResponse({}));
    } else {
      return $dara.cast<UploadFileResponse>(await this.execute(params, req, runtime), new UploadFileResponse({}));
    }

  }

  /**
   * 文件上传
   * 
   * @param request - UploadFileRequest
   * @returns UploadFileResponse
   */
  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  /**
   * 上传公钥，用于安全登陆鉴权。
   * 
   * @param request - UploadPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadPublicKeyResponse
   */
  async uploadPublicKeyWithOptions(request: UploadPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<UploadPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!$dara.isNull(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadPublicKey",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadPublicKeyResponse>(await this.callApi(params, req, runtime), new UploadPublicKeyResponse({}));
    } else {
      return $dara.cast<UploadPublicKeyResponse>(await this.execute(params, req, runtime), new UploadPublicKeyResponse({}));
    }

  }

  /**
   * 上传公钥，用于安全登陆鉴权。
   * 
   * @param request - UploadPublicKeyRequest
   * @returns UploadPublicKeyResponse
   */
  async uploadPublicKey(request: UploadPublicKeyRequest): Promise<UploadPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadPublicKeyWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyVsDomainOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwnerWithOptions(request: VerifyVsDomainOwnerRequest, runtime: $dara.RuntimeOptions): Promise<VerifyVsDomainOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyVsDomainOwner",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyVsDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyVsDomainOwnerResponse({}));
    } else {
      return $dara.cast<VerifyVsDomainOwnerResponse>(await this.execute(params, req, runtime), new VerifyVsDomainOwnerResponse({}));
    }

  }

  /**
   * @param request - VerifyVsDomainOwnerRequest
   * @returns VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwner(request: VerifyVsDomainOwnerRequest): Promise<VerifyVsDomainOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyVsDomainOwnerWithOptions(request, runtime);
  }

}
