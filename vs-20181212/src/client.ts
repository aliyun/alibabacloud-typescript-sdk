// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddVsPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  sourceUrl?: string;
  startTime?: string;
  endTime?: string;
  always?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
      always: 'Always',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      endTime: 'string',
      always: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVsPullStreamInfoConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVsPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVsPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVsPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  directoryId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      directoryId: 'DirectoryId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      directoryId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  parentPlatformId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      parentPlatformId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindParentPlatformDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindParentPlatformDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  region?: string;
  groupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      region: 'Region',
      groupId: 'GroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      region: 'string',
      groupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindPurchasedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindPurchasedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  instanceId?: string;
  instanceType?: string;
  applyAll?: boolean;
  replace?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      applyAll: 'ApplyAll',
      replace: 'Replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      applyAll: 'boolean',
      replace: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponseBody extends $tea.Model {
  requestId?: string;
  bindings?: BatchBindTemplateResponseBodyBindings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bindings: { 'type': 'array', 'itemType': BatchBindTemplateResponseBodyBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  applyAll?: boolean;
  replace?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      applyAll: 'ApplyAll',
      replace: 'Replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      applyAll: 'boolean',
      replace: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVsDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainNames?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainNames: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVsDomainConfigsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVsDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteVsDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteVsDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  channel?: string;
  liveStreamType?: string;
  oneshot?: string;
  controlStreamAction?: string;
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      channel: 'Channel',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      controlStreamAction: 'ControlStreamAction',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      channel: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      controlStreamAction: 'string',
      resumeTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBody extends $tea.Model {
  forbidResult?: BatchForbidVsStreamResponseBodyForbidResult;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchForbidVsStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchForbidVsStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  channel?: string;
  liveStreamType?: string;
  controlStreamAction?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      channel: 'Channel',
      liveStreamType: 'LiveStreamType',
      controlStreamAction: 'ControlStreamAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      channel: 'string',
      liveStreamType: 'string',
      controlStreamAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchResumeVsStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchResumeVsStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVsDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainNames?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainNames: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVsDomainConfigsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVsDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetVsDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetVsDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStartDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStartStreamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStopDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStopStreamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  directoryId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      directoryId: 'DirectoryId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      directoryId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  parentPlatformId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      parentPlatformId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindParentPlatformDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindParentPlatformDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindPurchasedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindPurchasedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBody extends $tea.Model {
  requestId?: string;
  bindings?: BatchUnbindTemplateResponseBodyBindings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bindings: { 'type': 'array', 'itemType': BatchUnbindTemplateResponseBodyBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  directoryId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      directoryId: 'DirectoryId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      directoryId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDirectoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindParentPlatformDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  parentPlatformId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      parentPlatformId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindParentPlatformDeviceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindParentPlatformDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindParentPlatformDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindParentPlatformDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPurchasedDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  region?: string;
  groupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      region: 'Region',
      groupId: 'GroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      region: 'string',
      groupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPurchasedDeviceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPurchasedDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindPurchasedDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindPurchasedDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  applyAll?: boolean;
  replace?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      applyAll: 'ApplyAll',
      replace: 'Replace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      applyAll: 'boolean',
      replace: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  instanceType?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  iris?: string;
  focus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      iris: 'Iris',
      focus: 'Focus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      iris: 'string',
      focus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContinuousAdjustResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContinuousAdjustResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  pan?: string;
  tilt?: string;
  zoom?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      pan: 'Pan',
      tilt: 'Tilt',
      zoom: 'Zoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      pan: 'string',
      tilt: 'string',
      zoom: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContinuousMoveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContinuousMoveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  name?: string;
  description?: string;
  groupId?: string;
  parentId?: string;
  directoryId?: string;
  type?: string;
  autoStart?: boolean;
  gbId?: string;
  ip?: string;
  port?: number;
  url?: string;
  username?: string;
  password?: string;
  vendor?: string;
  dsn?: string;
  longitude?: string;
  latitude?: string;
  autoPos?: boolean;
  posInterval?: number;
  alarmMethod?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      name: 'Name',
      description: 'Description',
      groupId: 'GroupId',
      parentId: 'ParentId',
      directoryId: 'DirectoryId',
      type: 'Type',
      autoStart: 'AutoStart',
      gbId: 'GbId',
      ip: 'Ip',
      port: 'Port',
      url: 'Url',
      username: 'Username',
      password: 'Password',
      vendor: 'Vendor',
      dsn: 'Dsn',
      longitude: 'Longitude',
      latitude: 'Latitude',
      autoPos: 'AutoPos',
      posInterval: 'PosInterval',
      alarmMethod: 'AlarmMethod',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      name: 'string',
      description: 'string',
      groupId: 'string',
      parentId: 'string',
      directoryId: 'string',
      type: 'string',
      autoStart: 'boolean',
      gbId: 'string',
      ip: 'string',
      port: 'number',
      url: 'string',
      username: 'string',
      password: 'string',
      vendor: 'string',
      dsn: 'string',
      longitude: 'string',
      latitude: 'string',
      autoPos: 'boolean',
      posInterval: 'number',
      alarmMethod: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  channelId?: number;
  objectType?: number;
  alarm?: number;
  subAlarm?: number;
  startTime?: number;
  endTime?: number;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      channelId: 'ChannelId',
      objectType: 'ObjectType',
      alarm: 'Alarm',
      subAlarm: 'SubAlarm',
      startTime: 'StartTime',
      endTime: 'EndTime',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      channelId: 'number',
      objectType: 'number',
      alarm: 'number',
      subAlarm: 'number',
      startTime: 'number',
      endTime: 'number',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmResponseBody extends $tea.Model {
  alarmId?: string;
  expire?: number;
  requestId?: string;
  alarmDelay?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      expire: 'Expire',
      requestId: 'RequestId',
      alarmDelay: 'AlarmDelay',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
      expire: 'number',
      requestId: 'string',
      alarmDelay: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  name?: string;
  description?: string;
  groupId?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      name: 'Name',
      description: 'Description',
      groupId: 'GroupId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      name: 'string',
      description: 'string',
      groupId: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  name?: string;
  description?: string;
  app?: string;
  region?: string;
  inProtocol?: string;
  outProtocol?: string;
  pushDomain?: string;
  playDomain?: string;
  lazyPull?: boolean;
  callback?: string;
  captureInterval?: number;
  captureImage?: number;
  captureVideo?: number;
  captureOssBucket?: string;
  captureOssPath?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      name: 'Name',
      description: 'Description',
      app: 'App',
      region: 'Region',
      inProtocol: 'InProtocol',
      outProtocol: 'OutProtocol',
      pushDomain: 'PushDomain',
      playDomain: 'PlayDomain',
      lazyPull: 'LazyPull',
      callback: 'Callback',
      captureInterval: 'CaptureInterval',
      captureImage: 'CaptureImage',
      captureVideo: 'CaptureVideo',
      captureOssBucket: 'CaptureOssBucket',
      captureOssPath: 'CaptureOssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      name: 'string',
      description: 'string',
      app: 'string',
      region: 'string',
      inProtocol: 'string',
      outProtocol: 'string',
      pushDomain: 'string',
      playDomain: 'string',
      lazyPull: 'boolean',
      callback: 'string',
      captureInterval: 'number',
      captureImage: 'number',
      captureVideo: 'number',
      captureOssBucket: 'string',
      captureOssPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  gbIp?: string;
  requestId?: string;
  gbId?: string;
  id?: string;
  gbPort?: number;
  static names(): { [key: string]: string } {
    return {
      gbIp: 'GbIp',
      requestId: 'RequestId',
      gbId: 'GbId',
      id: 'Id',
      gbPort: 'GbPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbIp: 'string',
      requestId: 'string',
      gbId: 'string',
      id: 'string',
      gbPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  name?: string;
  description?: string;
  protocol?: string;
  gbId?: string;
  ip?: string;
  port?: number;
  clientAuth?: boolean;
  clientUsername?: string;
  clientPassword?: string;
  autoStart?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      name: 'Name',
      description: 'Description',
      protocol: 'Protocol',
      gbId: 'GbId',
      ip: 'Ip',
      port: 'Port',
      clientAuth: 'ClientAuth',
      clientUsername: 'ClientUsername',
      clientPassword: 'ClientPassword',
      autoStart: 'AutoStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      name: 'string',
      description: 'string',
      protocol: 'string',
      gbId: 'string',
      ip: 'string',
      port: 'number',
      clientAuth: 'boolean',
      clientUsername: 'string',
      clientPassword: 'string',
      autoStart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateParentPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotResponseBody extends $tea.Model {
  format?: string;
  requestId?: string;
  ossEndpoint?: string;
  ossBucket?: string;
  ossObject?: string;
  height?: number;
  id?: string;
  width?: number;
  timestamp?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      requestId: 'RequestId',
      ossEndpoint: 'OssEndpoint',
      ossBucket: 'OssBucket',
      ossObject: 'OssObject',
      height: 'Height',
      id: 'Id',
      width: 'Width',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      requestId: 'string',
      ossEndpoint: 'string',
      ossBucket: 'string',
      ossObject: 'string',
      height: 'number',
      id: 'string',
      width: 'number',
      timestamp: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStreamSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStreamSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  name?: string;
  description?: string;
  type?: string;
  region?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  trigger?: string;
  startTime?: string;
  endTime?: string;
  interval?: number;
  retention?: number;
  fileFormat?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  jpgOnDemand?: string;
  mp4?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  callback?: string;
  transConfigsJSON?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      region: 'Region',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      trigger: 'Trigger',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      retention: 'Retention',
      fileFormat: 'FileFormat',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      jpgOnDemand: 'JpgOnDemand',
      mp4: 'Mp4',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      callback: 'Callback',
      transConfigsJSON: 'TransConfigsJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      region: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      trigger: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'number',
      retention: 'number',
      fileFormat: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      jpgOnDemand: 'string',
      mp4: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      callback: 'string',
      transConfigsJSON: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParentPlatformRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParentPlatformResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteParentPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      presetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePresetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePresetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsPullStreamInfoConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVsPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVsPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsStreamsNotifyUrlConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVsStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVsStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatResponseBody extends $tea.Model {
  templateLimit?: number;
  requestId?: string;
  templateNum?: number;
  id?: string;
  groupLimit?: number;
  groupNum?: number;
  static names(): { [key: string]: string } {
    return {
      templateLimit: 'TemplateLimit',
      requestId: 'RequestId',
      templateNum: 'TemplateNum',
      id: 'Id',
      groupLimit: 'GroupLimit',
      groupNum: 'GroupNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateLimit: 'number',
      requestId: 'string',
      templateNum: 'number',
      id: 'string',
      groupLimit: 'number',
      groupNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  includeStats?: boolean;
  includeDirectory?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      includeStats: 'IncludeStats',
      includeDirectory: 'IncludeDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      includeStats: 'boolean',
      includeDirectory: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBody extends $tea.Model {
  alarmMethod?: string;
  description?: string;
  createdTime?: string;
  port?: number;
  ip?: string;
  channelSyncTime?: string;
  latitude?: string;
  url?: string;
  name?: string;
  gbId?: string;
  protocol?: string;
  autoStart?: boolean;
  dsn?: string;
  password?: string;
  directory?: DescribeDeviceResponseBodyDirectory;
  status?: string;
  parentId?: string;
  requestId?: string;
  params?: string;
  enabled?: boolean;
  vendor?: string;
  registeredTime?: string;
  longitude?: string;
  groupId?: string;
  posInterval?: number;
  type?: string;
  directoryId?: string;
  username?: string;
  autoPos?: boolean;
  stats?: DescribeDeviceResponseBodyStats;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMethod: 'AlarmMethod',
      description: 'Description',
      createdTime: 'CreatedTime',
      port: 'Port',
      ip: 'Ip',
      channelSyncTime: 'ChannelSyncTime',
      latitude: 'Latitude',
      url: 'Url',
      name: 'Name',
      gbId: 'GbId',
      protocol: 'Protocol',
      autoStart: 'AutoStart',
      dsn: 'Dsn',
      password: 'Password',
      directory: 'Directory',
      status: 'Status',
      parentId: 'ParentId',
      requestId: 'RequestId',
      params: 'Params',
      enabled: 'Enabled',
      vendor: 'Vendor',
      registeredTime: 'RegisteredTime',
      longitude: 'Longitude',
      groupId: 'GroupId',
      posInterval: 'PosInterval',
      type: 'Type',
      directoryId: 'DirectoryId',
      username: 'Username',
      autoPos: 'AutoPos',
      stats: 'Stats',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMethod: 'string',
      description: 'string',
      createdTime: 'string',
      port: 'number',
      ip: 'string',
      channelSyncTime: 'string',
      latitude: 'string',
      url: 'string',
      name: 'string',
      gbId: 'string',
      protocol: 'string',
      autoStart: 'boolean',
      dsn: 'string',
      password: 'string',
      directory: DescribeDeviceResponseBodyDirectory,
      status: 'string',
      parentId: 'string',
      requestId: 'string',
      params: 'string',
      enabled: 'boolean',
      vendor: 'string',
      registeredTime: 'string',
      longitude: 'string',
      groupId: 'string',
      posInterval: 'number',
      type: 'string',
      directoryId: 'string',
      username: 'string',
      autoPos: 'boolean',
      stats: DescribeDeviceResponseBodyStats,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  channels?: DescribeDeviceChannelsResponseBodyChannels[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      channels: { 'type': 'array', 'itemType': DescribeDeviceChannelsResponseBodyChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  clientIp?: string;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      clientIp: 'ClientIp',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      clientIp: 'string',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayResponseBody extends $tea.Model {
  requestId?: string;
  port?: number;
  host?: string;
  token?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      port: 'Port',
      host: 'Host',
      token: 'Token',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      port: 'number',
      host: 'string',
      token: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  type?: string;
  groupId?: string;
  parentId?: string;
  directoryId?: string;
  gbId?: string;
  status?: string;
  vendor?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  includeStats?: boolean;
  includeDirectory?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      groupId: 'GroupId',
      parentId: 'ParentId',
      directoryId: 'DirectoryId',
      gbId: 'GbId',
      status: 'Status',
      vendor: 'Vendor',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      includeStats: 'IncludeStats',
      includeDirectory: 'IncludeDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
      groupId: 'string',
      parentId: 'string',
      directoryId: 'string',
      gbId: 'string',
      status: 'string',
      vendor: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
      includeStats: 'boolean',
      includeDirectory: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  devices?: DescribeDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      devices: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  stream?: string;
  outProtocol?: string;
  mode?: string;
  type?: string;
  auth?: boolean;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      stream: 'Stream',
      outProtocol: 'OutProtocol',
      mode: 'Mode',
      type: 'Type',
      auth: 'Auth',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      stream: 'string',
      outProtocol: 'string',
      mode: 'string',
      type: 'string',
      auth: 'boolean',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLResponseBody extends $tea.Model {
  requestId?: string;
  expireTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      expireTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  groupId?: string;
  parentId?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  noPagination?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      groupId: 'GroupId',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      noPagination: 'NoPagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      groupId: 'string',
      parentId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
      noPagination: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryResponseBody extends $tea.Model {
  parentId?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  id?: string;
  groupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      id: 'Id',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      id: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  includeStats?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      includeStats: 'IncludeStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      includeStats: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponseBody extends $tea.Model {
  app?: string;
  inProtocol?: string;
  description?: string;
  createdTime?: string;
  name?: string;
  gbUdpPorts?: string[];
  captureInterval?: number;
  gbId?: string;
  pushDomain?: string;
  aliasId?: string;
  captureImage?: number;
  status?: string;
  captureOssPath?: string;
  gbIp?: string;
  requestId?: string;
  enabled?: boolean;
  lazyPull?: boolean;
  outProtocol?: string;
  gbPort?: number;
  callback?: string;
  captureVideo?: number;
  playDomain?: string;
  stats?: DescribeGroupResponseBodyStats;
  region?: string;
  captureOssBucket?: string;
  gbTcpPorts?: string[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      inProtocol: 'InProtocol',
      description: 'Description',
      createdTime: 'CreatedTime',
      name: 'Name',
      gbUdpPorts: 'GbUdpPorts',
      captureInterval: 'CaptureInterval',
      gbId: 'GbId',
      pushDomain: 'PushDomain',
      aliasId: 'AliasId',
      captureImage: 'CaptureImage',
      status: 'Status',
      captureOssPath: 'CaptureOssPath',
      gbIp: 'GbIp',
      requestId: 'RequestId',
      enabled: 'Enabled',
      lazyPull: 'LazyPull',
      outProtocol: 'OutProtocol',
      gbPort: 'GbPort',
      callback: 'Callback',
      captureVideo: 'CaptureVideo',
      playDomain: 'PlayDomain',
      stats: 'Stats',
      region: 'Region',
      captureOssBucket: 'CaptureOssBucket',
      gbTcpPorts: 'GbTcpPorts',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      inProtocol: 'string',
      description: 'string',
      createdTime: 'string',
      name: 'string',
      gbUdpPorts: { 'type': 'array', 'itemType': 'string' },
      captureInterval: 'number',
      gbId: 'string',
      pushDomain: 'string',
      aliasId: 'string',
      captureImage: 'number',
      status: 'string',
      captureOssPath: 'string',
      gbIp: 'string',
      requestId: 'string',
      enabled: 'boolean',
      lazyPull: 'boolean',
      outProtocol: 'string',
      gbPort: 'number',
      callback: 'string',
      captureVideo: 'number',
      playDomain: 'string',
      stats: DescribeGroupResponseBodyStats,
      region: 'string',
      captureOssBucket: 'string',
      gbTcpPorts: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  region?: string;
  inProtocol?: string;
  status?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  includeStats?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      region: 'Region',
      inProtocol: 'InProtocol',
      status: 'Status',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      includeStats: 'IncludeStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      region: 'string',
      inProtocol: 'string',
      status: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
      includeStats: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  groups?: DescribeGroupsResponseBodyGroups[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformResponseBody extends $tea.Model {
  status?: string;
  clientGbId?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  ip?: string;
  port?: number;
  clientPort?: number;
  clientAuth?: boolean;
  clientIp?: string;
  name?: string;
  gbId?: string;
  clientPassword?: string;
  id?: string;
  protocol?: string;
  autoStart?: boolean;
  clientUsername?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clientGbId: 'ClientGbId',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      ip: 'Ip',
      port: 'Port',
      clientPort: 'ClientPort',
      clientAuth: 'ClientAuth',
      clientIp: 'ClientIp',
      name: 'Name',
      gbId: 'GbId',
      clientPassword: 'ClientPassword',
      id: 'Id',
      protocol: 'Protocol',
      autoStart: 'AutoStart',
      clientUsername: 'ClientUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clientGbId: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      ip: 'string',
      port: 'number',
      clientPort: 'number',
      clientAuth: 'boolean',
      clientIp: 'string',
      name: 'string',
      gbId: 'string',
      clientPassword: 'string',
      id: 'string',
      protocol: 'string',
      autoStart: 'boolean',
      clientUsername: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParentPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  devices?: DescribeParentPlatformDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      devices: { 'type': 'array', 'itemType': DescribeParentPlatformDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParentPlatformDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParentPlatformDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  gbId?: string;
  status?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      gbId: 'GbId',
      status: 'Status',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      gbId: 'string',
      status: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponseBody extends $tea.Model {
  platforms?: DescribeParentPlatformsResponseBodyPlatforms[];
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      platforms: 'Platforms',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platforms: { 'type': 'array', 'itemType': DescribeParentPlatformsResponseBodyPlatforms },
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParentPlatformsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParentPlatformsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponseBody extends $tea.Model {
  requestId?: string;
  presets?: DescribePresetsResponseBodyPresets[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      presets: 'Presets',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      presets: { 'type': 'array', 'itemType': DescribePresetsResponseBodyPresets },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePresetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePresetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceResponseBody extends $tea.Model {
  groupName?: string;
  subType?: string;
  description?: string;
  createdTime?: string;
  requestId?: string;
  registerCode?: string;
  vendor?: string;
  orderId?: string;
  groupId?: string;
  name?: string;
  type?: string;
  region?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      subType: 'SubType',
      description: 'Description',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      registerCode: 'RegisterCode',
      vendor: 'Vendor',
      orderId: 'OrderId',
      groupId: 'GroupId',
      name: 'Name',
      type: 'Type',
      region: 'Region',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      subType: 'string',
      description: 'string',
      createdTime: 'string',
      requestId: 'string',
      registerCode: 'string',
      vendor: 'string',
      orderId: 'string',
      groupId: 'string',
      name: 'string',
      type: 'string',
      region: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePurchasedDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePurchasedDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  type?: string;
  subType?: string;
  groupId?: string;
  vendor?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      subType: 'SubType',
      groupId: 'GroupId',
      vendor: 'Vendor',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
      subType: 'string',
      groupId: 'string',
      vendor: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  devices?: DescribePurchasedDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      devices: { 'type': 'array', 'itemType': DescribePurchasedDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePurchasedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePurchasedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  type?: string;
  streamId?: string;
  startTime?: string;
  endTime?: string;
  privateBucket?: boolean;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      type: 'Type',
      streamId: 'StreamId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      privateBucket: 'PrivateBucket',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      type: 'string',
      streamId: 'string',
      startTime: 'string',
      endTime: 'string',
      privateBucket: 'boolean',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  nextStartTime?: string;
  records?: DescribeRecordsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      nextStartTime: 'NextStartTime',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      nextStartTime: 'string',
      records: { 'type': 'array', 'itemType': DescribeRecordsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamResponseBody extends $tea.Model {
  status?: string;
  app?: string;
  createdTime?: string;
  requestId?: string;
  deviceId?: string;
  enabled?: boolean;
  groupId?: string;
  name?: string;
  playDomain?: string;
  height?: number;
  id?: string;
  protocol?: string;
  pushDomain?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      app: 'App',
      createdTime: 'CreatedTime',
      requestId: 'RequestId',
      deviceId: 'DeviceId',
      enabled: 'Enabled',
      groupId: 'GroupId',
      name: 'Name',
      playDomain: 'PlayDomain',
      height: 'Height',
      id: 'Id',
      protocol: 'Protocol',
      pushDomain: 'PushDomain',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      app: 'string',
      createdTime: 'string',
      requestId: 'string',
      deviceId: 'string',
      enabled: 'boolean',
      groupId: 'string',
      name: 'string',
      playDomain: 'string',
      height: 'number',
      id: 'string',
      protocol: 'string',
      pushDomain: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  groupId?: string;
  deviceId?: string;
  parentId?: string;
  name?: string;
  domain?: string;
  app?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      groupId: 'GroupId',
      deviceId: 'DeviceId',
      parentId: 'ParentId',
      name: 'Name',
      domain: 'Domain',
      app: 'App',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      groupId: 'string',
      deviceId: 'string',
      parentId: 'string',
      name: 'string',
      domain: 'string',
      app: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  streams?: DescribeStreamsResponseBodyStreams[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      streams: { 'type': 'array', 'itemType': DescribeStreamsResponseBodyStreams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  type?: string;
  outProtocol?: string;
  outHostType?: string;
  location?: string;
  auth?: boolean;
  authKey?: string;
  expire?: number;
  startTime?: number;
  endTime?: number;
  transcode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      type: 'Type',
      outProtocol: 'OutProtocol',
      outHostType: 'OutHostType',
      location: 'Location',
      auth: 'Auth',
      authKey: 'AuthKey',
      expire: 'Expire',
      startTime: 'StartTime',
      endTime: 'EndTime',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      type: 'string',
      outProtocol: 'string',
      outHostType: 'string',
      location: 'string',
      auth: 'boolean',
      authKey: 'string',
      expire: 'number',
      startTime: 'number',
      endTime: 'number',
      transcode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLResponseBody extends $tea.Model {
  requestId?: string;
  expireTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      expireTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponseBody extends $tea.Model {
  requestId?: string;
  records?: DescribeStreamVodListResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DescribeStreamVodListResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamVodListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamVodListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponseBody extends $tea.Model {
  description?: string;
  createdTime?: string;
  endTime?: string;
  hlsTs?: string;
  ossBucket?: string;
  retention?: number;
  fileFormat?: string;
  name?: string;
  mp4?: string;
  jpgOnDemand?: string;
  flv?: string;
  ossFilePrefix?: string;
  trigger?: string;
  ossEndpoint?: string;
  requestId?: string;
  transConfigs?: DescribeTemplateResponseBodyTransConfigs[];
  startTime?: string;
  type?: string;
  jpgSequence?: string;
  callback?: string;
  jpgOverwrite?: string;
  region?: string;
  id?: string;
  hlsM3u8?: string;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      hlsTs: 'HlsTs',
      ossBucket: 'OssBucket',
      retention: 'Retention',
      fileFormat: 'FileFormat',
      name: 'Name',
      mp4: 'Mp4',
      jpgOnDemand: 'JpgOnDemand',
      flv: 'Flv',
      ossFilePrefix: 'OssFilePrefix',
      trigger: 'Trigger',
      ossEndpoint: 'OssEndpoint',
      requestId: 'RequestId',
      transConfigs: 'TransConfigs',
      startTime: 'StartTime',
      type: 'Type',
      jpgSequence: 'JpgSequence',
      callback: 'Callback',
      jpgOverwrite: 'JpgOverwrite',
      region: 'Region',
      id: 'Id',
      hlsM3u8: 'HlsM3u8',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      createdTime: 'string',
      endTime: 'string',
      hlsTs: 'string',
      ossBucket: 'string',
      retention: 'number',
      fileFormat: 'string',
      name: 'string',
      mp4: 'string',
      jpgOnDemand: 'string',
      flv: 'string',
      ossFilePrefix: 'string',
      trigger: 'string',
      ossEndpoint: 'string',
      requestId: 'string',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplateResponseBodyTransConfigs },
      startTime: 'string',
      type: 'string',
      jpgSequence: 'string',
      callback: 'string',
      jpgOverwrite: 'string',
      region: 'string',
      id: 'string',
      hlsM3u8: 'string',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  type?: string;
  instanceId?: string;
  sortBy?: string;
  sortDirection?: string;
  pageSize?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      type: 'Type',
      instanceId: 'InstanceId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      type: 'string',
      instanceId: 'string',
      sortBy: 'string',
      sortDirection: 'string',
      pageSize: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  pageCount?: number;
  templates?: DescribeTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageCount: 'PageCount',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageCount: 'number',
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  url?: string;
  txId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      url: 'Url',
      txId: 'TxId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      url: 'string',
      txId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLResponseBody extends $tea.Model {
  requestId?: string;
  port?: number;
  txId?: string;
  outProtocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      port: 'Port',
      txId: 'TxId',
      outProtocol: 'OutProtocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      port: 'number',
      txId: 'string',
      outProtocol: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVodStreamURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVodStreamURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  certName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailResponseBody extends $tea.Model {
  requestId?: string;
  certId?: number;
  certName?: string;
  cert?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certId: 'number',
      certName: 'string',
      cert: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeVsCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeVsCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeVsDomainCertificateInfoResponseBodyCertInfos;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBody extends $tea.Model {
  requestId?: string;
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfig: DescribeVsDomainDetailResponseBodyDomainConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  pvDataInterval?: DescribeVsDomainPvDataResponseBodyPvDataInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      pvDataInterval: 'PvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      pvDataInterval: DescribeVsDomainPvDataResponseBodyPvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainPvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  pvUvDataInfos?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      pvUvDataInfos: 'PvUvDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      pvUvDataInfos: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainPvUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainPvUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  recordDataPerInterval?: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      recordDataPerInterval: 'RecordDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      recordDataPerInterval: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainRecordDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainRecordDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeVsDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      value: DescribeVsDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainRegionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  reqBpsDataPerInterval?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      reqBpsDataPerInterval: 'ReqBpsDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      reqBpsDataPerInterval: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainReqBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainReqBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponseBody extends $tea.Model {
  reqTrafficDataPerInterval?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      reqTrafficDataPerInterval: 'ReqTrafficDataPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqTrafficDataPerInterval: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainReqTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainReqTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  snapshotDataPerInterval?: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval;
  domainName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      snapshotDataPerInterval: 'SnapshotDataPerInterval',
      domainName: 'DomainName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      snapshotDataPerInterval: DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval,
      domainName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainSnapshotDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainSnapshotDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      trafficDataPerInterval: 'TrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      trafficDataPerInterval: DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBody extends $tea.Model {
  uvDataInterval?: DescribeVsDomainUvDataResponseBodyUvDataInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      uvDataInterval: 'UvDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvDataInterval: DescribeVsDomainUvDataResponseBodyUvDataInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveAppRecordList?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveAppRecordList: 'LiveAppRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveAppRecordList: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponseBody extends $tea.Model {
  requestId?: string;
  liveStreamsNotifyConfig?: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      liveStreamsNotifyConfig: 'LiveStreamsNotifyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      liveStreamsNotifyConfig: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  pageSize?: number;
  pageNum?: number;
  streamType?: string;
  startTime?: string;
  endTime?: string;
  queryType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      streamType: 'StreamType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      queryType: 'QueryType',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      pageSize: 'number',
      pageNum: 'number',
      streamType: 'string',
      startTime: 'string',
      endTime: 'string',
      queryType: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  onlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfo;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      onlineInfo: 'OnlineInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      onlineInfo: DescribeVsStreamsOnlineListResponseBodyOnlineInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsStreamsOnlineListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsStreamsOnlineListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  streamType?: string;
  queryType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      streamType: 'StreamType',
      queryType: 'QueryType',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      streamType: 'string',
      queryType: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBody extends $tea.Model {
  totalNum?: number;
  totalPage?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  publishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfo;
  static names(): { [key: string]: string } {
    return {
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      publishInfo: 'PublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNum: 'number',
      totalPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      publishInfo: DescribeVsStreamsPublishListResponseBodyPublishInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsStreamsPublishListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsStreamsPublishListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBody extends $tea.Model {
  topDomains?: DescribeVsTopDomainsByFlowResponseBodyTopDomains;
  endTime?: string;
  requestId?: string;
  domainOnlineCount?: number;
  startTime?: string;
  domainCount?: number;
  static names(): { [key: string]: string } {
    return {
      topDomains: 'TopDomains',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainOnlineCount: 'DomainOnlineCount',
      startTime: 'StartTime',
      domainCount: 'DomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomains: DescribeVsTopDomainsByFlowResponseBodyTopDomains,
      endTime: 'string',
      requestId: 'string',
      domainOnlineCount: 'number',
      startTime: 'string',
      domainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  startTime?: string;
  endTime?: string;
  domainSwitch?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      startTime: 'StartTime',
      endTime: 'EndTime',
      domainSwitch: 'DomainSwitch',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      startTime: 'string',
      endTime: 'string',
      domainSwitch: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBody extends $tea.Model {
  requestId?: string;
  describeVsUpPeakPublishStreamDatas?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      describeVsUpPeakPublishStreamDatas: 'DescribeVsUpPeakPublishStreamDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      describeVsUpPeakPublishStreamDatas: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsUpPeakPublishStreamDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsUpPeakPublishStreamDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  showLog?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      showLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsUserResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsUserResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidVsStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  liveStreamType?: string;
  oneshot?: string;
  controlStreamAction?: string;
  resumeTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      liveStreamType: 'LiveStreamType',
      oneshot: 'Oneshot',
      controlStreamAction: 'ControlStreamAction',
      resumeTime: 'ResumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      liveStreamType: 'string',
      oneshot: 'string',
      controlStreamAction: 'string',
      resumeTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidVsStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidVsStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ForbidVsStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ForbidVsStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      presetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GotoPresetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GotoPresetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  description?: string;
  groupId?: string;
  parentId?: string;
  directoryId?: string;
  type?: string;
  autoStart?: boolean;
  gbId?: string;
  ip?: string;
  port?: number;
  url?: string;
  username?: string;
  password?: string;
  vendor?: string;
  longitude?: string;
  latitude?: string;
  autoPos?: boolean;
  posInterval?: number;
  alarmMethod?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      groupId: 'GroupId',
      parentId: 'ParentId',
      directoryId: 'DirectoryId',
      type: 'Type',
      autoStart: 'AutoStart',
      gbId: 'GbId',
      ip: 'Ip',
      port: 'Port',
      url: 'Url',
      username: 'Username',
      password: 'Password',
      vendor: 'Vendor',
      longitude: 'Longitude',
      latitude: 'Latitude',
      autoPos: 'AutoPos',
      posInterval: 'PosInterval',
      alarmMethod: 'AlarmMethod',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      groupId: 'string',
      parentId: 'string',
      directoryId: 'string',
      type: 'string',
      autoStart: 'boolean',
      gbId: 'string',
      ip: 'string',
      port: 'number',
      url: 'string',
      username: 'string',
      password: 'string',
      vendor: 'string',
      longitude: 'string',
      latitude: 'string',
      autoPos: 'boolean',
      posInterval: 'number',
      alarmMethod: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAlarmRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  channelId?: number;
  alarmId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      channelId: 'ChannelId',
      alarmId: 'AlarmId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      channelId: 'number',
      alarmId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAlarmResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAlarmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceAlarmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceCaptureRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  image?: number;
  video?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      image: 'Image',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      image: 'number',
      video: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceCaptureResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceCaptureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceCaptureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceCaptureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceChannelsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  dsn?: string;
  deviceStatus?: string;
  channels?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      dsn: 'Dsn',
      deviceStatus: 'DeviceStatus',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      dsn: 'string',
      deviceStatus: 'string',
      channels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceChannelsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeviceChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  description?: string;
  region?: string;
  inProtocol?: string;
  outProtocol?: string;
  enabled?: boolean;
  pushDomain?: string;
  playDomain?: string;
  lazyPull?: boolean;
  callback?: string;
  captureInterval?: number;
  captureImage?: number;
  captureVideo?: number;
  captureOssBucket?: string;
  captureOssPath?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      region: 'Region',
      inProtocol: 'InProtocol',
      outProtocol: 'OutProtocol',
      enabled: 'Enabled',
      pushDomain: 'PushDomain',
      playDomain: 'PlayDomain',
      lazyPull: 'LazyPull',
      callback: 'Callback',
      captureInterval: 'CaptureInterval',
      captureImage: 'CaptureImage',
      captureVideo: 'CaptureVideo',
      captureOssBucket: 'CaptureOssBucket',
      captureOssPath: 'CaptureOssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      region: 'string',
      inProtocol: 'string',
      outProtocol: 'string',
      enabled: 'boolean',
      pushDomain: 'string',
      playDomain: 'string',
      lazyPull: 'boolean',
      callback: 'string',
      captureInterval: 'number',
      captureImage: 'number',
      captureVideo: 'number',
      captureOssBucket: 'string',
      captureOssPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  description?: string;
  gbId?: string;
  ip?: string;
  port?: number;
  clientAuth?: boolean;
  clientUsername?: string;
  clientPassword?: string;
  autoStart?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      gbId: 'GbId',
      ip: 'Ip',
      port: 'Port',
      clientAuth: 'ClientAuth',
      clientUsername: 'ClientUsername',
      clientPassword: 'ClientPassword',
      autoStart: 'AutoStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      gbId: 'string',
      ip: 'string',
      port: 'number',
      clientAuth: 'boolean',
      clientUsername: 'string',
      clientPassword: 'string',
      autoStart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyParentPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  description?: string;
  region?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  trigger?: string;
  startTime?: string;
  endTime?: string;
  interval?: number;
  retention?: number;
  fileFormat?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  jpgOnDemand?: string;
  mp4?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  callback?: string;
  transConfigsJSON?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      region: 'Region',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      trigger: 'Trigger',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      retention: 'Retention',
      fileFormat: 'FileFormat',
      jpgOverwrite: 'JpgOverwrite',
      jpgSequence: 'JpgSequence',
      jpgOnDemand: 'JpgOnDemand',
      mp4: 'Mp4',
      flv: 'Flv',
      hlsM3u8: 'HlsM3u8',
      hlsTs: 'HlsTs',
      callback: 'Callback',
      transConfigsJSON: 'TransConfigsJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      region: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      trigger: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'number',
      retention: 'number',
      fileFormat: 'string',
      jpgOverwrite: 'string',
      jpgSequence: 'string',
      jpgOnDemand: 'string',
      mp4: 'string',
      flv: 'string',
      hlsM3u8: 'string',
      hlsTs: 'string',
      callback: 'string',
      transConfigsJSON: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVsServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenVsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenVsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVsStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  liveStreamType?: string;
  controlStreamAction?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      liveStreamType: 'LiveStreamType',
      controlStreamAction: 'ControlStreamAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      liveStreamType: 'string',
      controlStreamAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVsStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVsStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeVsStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeVsStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  presetId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      presetId: 'PresetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      presetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetPresetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetPresetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  SSLProtocol?: string;
  certName?: string;
  certType?: string;
  SSLPub?: string;
  SSLPri?: string;
  region?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      SSLProtocol: 'SSLProtocol',
      certName: 'CertName',
      certType: 'CertType',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      region: 'Region',
      forceSet: 'ForceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      SSLProtocol: 'string',
      certName: 'string',
      certType: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      region: 'string',
      forceSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsDomainCertificateResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetVsDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetVsDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsStreamsNotifyUrlConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  notifyUrl?: string;
  authType?: string;
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      notifyUrl: 'NotifyUrl',
      authType: 'AuthType',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      notifyUrl: 'string',
      authType: 'string',
      authKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsStreamsNotifyUrlConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsStreamsNotifyUrlConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetVsStreamsNotifyUrlConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetVsStreamsNotifyUrlConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartParentPlatformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  playDomain?: string;
  app?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      playDomain: 'PlayDomain',
      app: 'App',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      playDomain: 'string',
      app: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRecordStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRecordStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTransferStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  url?: string;
  transcode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      url: 'Url',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      url: 'string',
      transcode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTransferStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTransferStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartTransferStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartTransferStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  iris?: boolean;
  focus?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      iris: 'Iris',
      focus: 'Focus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      iris: 'boolean',
      focus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopAdjustResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopAdjustResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  pan?: boolean;
  tilt?: boolean;
  zoom?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      pan: 'Pan',
      tilt: 'Tilt',
      zoom: 'Zoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      pan: 'boolean',
      tilt: 'boolean',
      zoom: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMoveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMoveResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  playDomain?: string;
  app?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      playDomain: 'PlayDomain',
      app: 'App',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      playDomain: 'string',
      app: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopRecordStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopRecordStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  name?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      name: 'Name',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      name: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTransferStreamRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  transcode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
      transcode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTransferStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTransferStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopTransferStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopTransferStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncCatalogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncCatalogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDirectoryRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  directoryId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      directoryId: 'DirectoryId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      directoryId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDirectoryResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindParentPlatformDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  parentPlatformId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      parentPlatformId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindParentPlatformDeviceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindParentPlatformDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindParentPlatformDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindParentPlatformDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPurchasedDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPurchasedDeviceResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPurchasedDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindPurchasedDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindPurchasedDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  templateId?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      templateId: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  templateType?: string;
  instanceType?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      templateType: 'TemplateType',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      templateType: 'string',
      instanceType: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnlockDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnlockDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVsPullStreamInfoConfigRequest extends $tea.Model {
  ownerId?: number;
  showLog?: string;
  domainName?: string;
  appName?: string;
  streamName?: string;
  sourceUrl?: string;
  startTime?: string;
  endTime?: string;
  always?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      showLog: 'ShowLog',
      domainName: 'DomainName',
      appName: 'AppName',
      streamName: 'StreamName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
      always: 'Always',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      showLog: 'string',
      domainName: 'string',
      appName: 'string',
      streamName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      endTime: 'string',
      always: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVsPullStreamInfoConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVsPullStreamInfoConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVsPullStreamInfoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVsPullStreamInfoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  error?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponseBodyResults extends $tea.Model {
  parentPlatformId?: string;
  deviceId?: string;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentPlatformId: 'string',
      deviceId: 'string',
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBodyResults extends $tea.Model {
  groupId?: string;
  deviceId?: string;
  region?: string;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      deviceId: 'DeviceId',
      region: 'Region',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      deviceId: 'string',
      region: 'string',
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponseBodyBindings extends $tea.Model {
  error?: string;
  instanceId?: string;
  instanceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesResponseBodyResults extends $tea.Model {
  error?: string;
  instanceId?: string;
  instanceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesResponseBodyResults extends $tea.Model {
  error?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfo extends $tea.Model {
  result?: string;
  channels?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels;
  count?: number;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      channels: 'Channels',
      count: 'Count',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      channels: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels,
      count: 'number',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamResponseBodyForbidResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResultResumeResultInfo extends $tea.Model {
  result?: string;
  channels?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels;
  count?: number;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      channels: 'Channels',
      count: 'Count',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      channels: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels,
      count: 'number',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamResponseBodyResumeResult extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBodyResultsStreams extends $tea.Model {
  error?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBodyResults extends $tea.Model {
  streams?: BatchStartDevicesResponseBodyResultsStreams[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      streams: 'Streams',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streams: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResultsStreams },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponseBodyResults extends $tea.Model {
  error?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponseBodyResultsStreams extends $tea.Model {
  error?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponseBodyResults extends $tea.Model {
  streams?: BatchStopDevicesResponseBodyResultsStreams[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      streams: 'Streams',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streams: { 'type': 'array', 'itemType': BatchStopDevicesResponseBodyResultsStreams },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponseBodyResults extends $tea.Model {
  error?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  error?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponseBodyResults extends $tea.Model {
  parentPlatformId?: string;
  deviceId?: string;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      parentPlatformId: 'ParentPlatformId',
      deviceId: 'DeviceId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentPlatformId: 'string',
      deviceId: 'string',
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesResponseBodyResults extends $tea.Model {
  deviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBodyBindings extends $tea.Model {
  error?: string;
  instanceId?: string;
  instanceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesResponseBodyResults extends $tea.Model {
  error?: string;
  templateType?: string;
  instanceId?: string;
  instanceType?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      templateType: 'TemplateType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      templateType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyDirectory extends $tea.Model {
  parentId?: string;
  description?: string;
  groupId?: string;
  name?: string;
  createdTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      createdTime: 'CreatedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
      createdTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyStats extends $tea.Model {
  failedNum?: number;
  streamNum?: number;
  onlineNum?: number;
  offlineNum?: number;
  channelNum?: number;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      streamNum: 'StreamNum',
      onlineNum: 'OnlineNum',
      offlineNum: 'OfflineNum',
      channelNum: 'ChannelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      streamNum: 'number',
      onlineNum: 'number',
      offlineNum: 'number',
      channelNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBodyChannels extends $tea.Model {
  streamStatus?: string;
  gbId?: string;
  params?: string;
  deviceId?: string;
  channelId?: number;
  deviceStatus?: string;
  name?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      streamStatus: 'StreamStatus',
      gbId: 'GbId',
      params: 'Params',
      deviceId: 'DeviceId',
      channelId: 'ChannelId',
      deviceStatus: 'DeviceStatus',
      name: 'Name',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamStatus: 'string',
      gbId: 'string',
      params: 'string',
      deviceId: 'string',
      channelId: 'number',
      deviceStatus: 'string',
      name: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesStats extends $tea.Model {
  failedNum?: number;
  streamNum?: number;
  onlineNum?: number;
  offlineNum?: number;
  channelNum?: number;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      streamNum: 'StreamNum',
      onlineNum: 'OnlineNum',
      offlineNum: 'OfflineNum',
      channelNum: 'ChannelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      streamNum: 'number',
      onlineNum: 'number',
      offlineNum: 'number',
      channelNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesDirectory extends $tea.Model {
  parentId?: string;
  description?: string;
  groupId?: string;
  name?: string;
  createdTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      createdTime: 'CreatedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
      createdTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevices extends $tea.Model {
  type?: string;
  status?: string;
  alarmMethod?: string;
  dsn?: string;
  port?: number;
  posInterval?: number;
  parentId?: string;
  password?: string;
  autoPos?: boolean;
  params?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  directoryId?: string;
  createdTime?: string;
  channelSyncTime?: string;
  registeredTime?: string;
  stats?: DescribeDevicesResponseBodyDevicesStats;
  protocol?: string;
  url?: string;
  ip?: string;
  vendor?: string;
  autoStart?: boolean;
  gbId?: string;
  groupId?: string;
  longitude?: string;
  latitude?: string;
  directory?: DescribeDevicesResponseBodyDevicesDirectory;
  id?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      alarmMethod: 'AlarmMethod',
      dsn: 'Dsn',
      port: 'Port',
      posInterval: 'PosInterval',
      parentId: 'ParentId',
      password: 'Password',
      autoPos: 'AutoPos',
      params: 'Params',
      description: 'Description',
      enabled: 'Enabled',
      name: 'Name',
      directoryId: 'DirectoryId',
      createdTime: 'CreatedTime',
      channelSyncTime: 'ChannelSyncTime',
      registeredTime: 'RegisteredTime',
      stats: 'Stats',
      protocol: 'Protocol',
      url: 'Url',
      ip: 'Ip',
      vendor: 'Vendor',
      autoStart: 'AutoStart',
      gbId: 'GbId',
      groupId: 'GroupId',
      longitude: 'Longitude',
      latitude: 'Latitude',
      directory: 'Directory',
      id: 'Id',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      alarmMethod: 'string',
      dsn: 'string',
      port: 'number',
      posInterval: 'number',
      parentId: 'string',
      password: 'string',
      autoPos: 'boolean',
      params: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      directoryId: 'string',
      createdTime: 'string',
      channelSyncTime: 'string',
      registeredTime: 'string',
      stats: DescribeDevicesResponseBodyDevicesStats,
      protocol: 'string',
      url: 'string',
      ip: 'string',
      vendor: 'string',
      autoStart: 'boolean',
      gbId: 'string',
      groupId: 'string',
      longitude: 'string',
      latitude: 'string',
      directory: DescribeDevicesResponseBodyDevicesDirectory,
      id: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  parentId?: string;
  description?: string;
  groupId?: string;
  name?: string;
  createdTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      createdTime: 'CreatedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
      createdTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponseBodyStats extends $tea.Model {
  platformNum?: number;
  deviceNum?: number;
  ipcNum?: number;
  iedNum?: number;
  static names(): { [key: string]: string } {
    return {
      platformNum: 'PlatformNum',
      deviceNum: 'DeviceNum',
      ipcNum: 'IpcNum',
      iedNum: 'IedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformNum: 'number',
      deviceNum: 'number',
      ipcNum: 'number',
      iedNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroupsStats extends $tea.Model {
  platformNum?: number;
  deviceNum?: number;
  ipcNum?: number;
  iedNum?: number;
  static names(): { [key: string]: string } {
    return {
      platformNum: 'PlatformNum',
      deviceNum: 'DeviceNum',
      ipcNum: 'IpcNum',
      iedNum: 'IedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformNum: 'number',
      deviceNum: 'number',
      ipcNum: 'number',
      iedNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $tea.Model {
  status?: string;
  lazyPull?: boolean;
  callback?: string;
  description?: string;
  app?: string;
  region?: string;
  enabled?: boolean;
  inProtocol?: string;
  outProtocol?: string;
  name?: string;
  pushDomain?: string;
  createdTime?: string;
  captureVideo?: number;
  stats?: DescribeGroupsResponseBodyGroupsStats;
  playDomain?: string;
  gbPort?: number;
  captureInterval?: number;
  gbTcpPorts?: string[];
  gbId?: string;
  gbIp?: string;
  captureImage?: number;
  aliasId?: string;
  captureOssPath?: string;
  captureOssBucket?: string;
  gbUdpPorts?: string[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lazyPull: 'LazyPull',
      callback: 'Callback',
      description: 'Description',
      app: 'App',
      region: 'Region',
      enabled: 'Enabled',
      inProtocol: 'InProtocol',
      outProtocol: 'OutProtocol',
      name: 'Name',
      pushDomain: 'PushDomain',
      createdTime: 'CreatedTime',
      captureVideo: 'CaptureVideo',
      stats: 'Stats',
      playDomain: 'PlayDomain',
      gbPort: 'GbPort',
      captureInterval: 'CaptureInterval',
      gbTcpPorts: 'GbTcpPorts',
      gbId: 'GbId',
      gbIp: 'GbIp',
      captureImage: 'CaptureImage',
      aliasId: 'AliasId',
      captureOssPath: 'CaptureOssPath',
      captureOssBucket: 'CaptureOssBucket',
      gbUdpPorts: 'GbUdpPorts',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lazyPull: 'boolean',
      callback: 'string',
      description: 'string',
      app: 'string',
      region: 'string',
      enabled: 'boolean',
      inProtocol: 'string',
      outProtocol: 'string',
      name: 'string',
      pushDomain: 'string',
      createdTime: 'string',
      captureVideo: 'number',
      stats: DescribeGroupsResponseBodyGroupsStats,
      playDomain: 'string',
      gbPort: 'number',
      captureInterval: 'number',
      gbTcpPorts: { 'type': 'array', 'itemType': 'string' },
      gbId: 'string',
      gbIp: 'string',
      captureImage: 'number',
      aliasId: 'string',
      captureOssPath: 'string',
      captureOssBucket: 'string',
      gbUdpPorts: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBodyDevices extends $tea.Model {
  parentId?: string;
  gbId?: string;
  groupId?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      gbId: 'GbId',
      groupId: 'GroupId',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      gbId: 'string',
      groupId: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponseBodyPlatforms extends $tea.Model {
  status?: string;
  clientPort?: number;
  clientGbId?: string;
  protocol?: string;
  ip?: string;
  port?: number;
  clientPassword?: string;
  clientUsername?: string;
  autoStart?: boolean;
  clientAuth?: boolean;
  gbId?: string;
  description?: string;
  clientIp?: string;
  name?: string;
  createdTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clientPort: 'ClientPort',
      clientGbId: 'ClientGbId',
      protocol: 'Protocol',
      ip: 'Ip',
      port: 'Port',
      clientPassword: 'ClientPassword',
      clientUsername: 'ClientUsername',
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      gbId: 'GbId',
      description: 'Description',
      clientIp: 'ClientIp',
      name: 'Name',
      createdTime: 'CreatedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clientPort: 'number',
      clientGbId: 'string',
      protocol: 'string',
      ip: 'string',
      port: 'number',
      clientPassword: 'string',
      clientUsername: 'string',
      autoStart: 'boolean',
      clientAuth: 'boolean',
      gbId: 'string',
      description: 'string',
      clientIp: 'string',
      name: 'string',
      createdTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponseBodyPresets extends $tea.Model {
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponseBodyDevices extends $tea.Model {
  type?: string;
  subType?: string;
  vendor?: string;
  groupName?: string;
  groupId?: string;
  registerCode?: string;
  description?: string;
  region?: string;
  name?: string;
  createdTime?: string;
  orderId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      subType: 'SubType',
      vendor: 'Vendor',
      groupName: 'GroupName',
      groupId: 'GroupId',
      registerCode: 'RegisterCode',
      description: 'Description',
      region: 'Region',
      name: 'Name',
      createdTime: 'CreatedTime',
      orderId: 'OrderId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      subType: 'string',
      vendor: 'string',
      groupName: 'string',
      groupId: 'string',
      registerCode: 'string',
      description: 'string',
      region: 'string',
      name: 'string',
      createdTime: 'string',
      orderId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBodyRecords extends $tea.Model {
  type?: string;
  height?: number;
  url?: string;
  ossBucket?: string;
  fileFormat?: string;
  streamId?: string;
  endTime?: string;
  ossObject?: string;
  startTime?: string;
  width?: number;
  templateId?: string;
  id?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      height: 'Height',
      url: 'Url',
      ossBucket: 'OssBucket',
      fileFormat: 'FileFormat',
      streamId: 'StreamId',
      endTime: 'EndTime',
      ossObject: 'OssObject',
      startTime: 'StartTime',
      width: 'Width',
      templateId: 'TemplateId',
      id: 'Id',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      height: 'number',
      url: 'string',
      ossBucket: 'string',
      fileFormat: 'string',
      streamId: 'string',
      endTime: 'string',
      ossObject: 'string',
      startTime: 'string',
      width: 'number',
      templateId: 'string',
      id: 'string',
      ossEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBodyStreams extends $tea.Model {
  status?: string;
  deviceId?: string;
  protocol?: string;
  playDomain?: string;
  height?: number;
  groupId?: string;
  width?: number;
  app?: string;
  enabled?: boolean;
  pushDomain?: string;
  name?: string;
  createdTime?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceId: 'DeviceId',
      protocol: 'Protocol',
      playDomain: 'PlayDomain',
      height: 'Height',
      groupId: 'GroupId',
      width: 'Width',
      app: 'App',
      enabled: 'Enabled',
      pushDomain: 'PushDomain',
      name: 'Name',
      createdTime: 'CreatedTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deviceId: 'string',
      protocol: 'string',
      playDomain: 'string',
      height: 'number',
      groupId: 'string',
      width: 'number',
      app: 'string',
      enabled: 'boolean',
      pushDomain: 'string',
      name: 'string',
      createdTime: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponseBodyRecords extends $tea.Model {
  endTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponseBodyTransConfigs extends $tea.Model {
  gop?: number;
  width?: number;
  videoBitrate?: number;
  height?: number;
  videoCodec?: string;
  fps?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gop: 'Gop',
      width: 'Width',
      videoBitrate: 'VideoBitrate',
      height: 'Height',
      videoCodec: 'VideoCodec',
      fps: 'Fps',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gop: 'number',
      width: 'number',
      videoBitrate: 'number',
      height: 'number',
      videoCodec: 'string',
      fps: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplatesTransConfigs extends $tea.Model {
  gop?: number;
  width?: number;
  videoBitrate?: number;
  height?: number;
  videoCodec?: string;
  fps?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gop: 'Gop',
      width: 'Width',
      videoBitrate: 'VideoBitrate',
      height: 'Height',
      videoCodec: 'VideoCodec',
      fps: 'Fps',
      name: 'Name',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gop: 'number',
      width: 'number',
      videoBitrate: 'number',
      height: 'number',
      videoCodec: 'string',
      fps: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $tea.Model {
  type?: string;
  trigger?: string;
  hlsTs?: string;
  mp4?: string;
  jpgOverwrite?: string;
  callback?: string;
  description?: string;
  region?: string;
  retention?: number;
  hlsM3u8?: string;
  name?: string;
  flv?: string;
  createdTime?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  transConfigs?: DescribeTemplatesResponseBodyTemplatesTransConfigs[];
  jpgOnDemand?: string;
  ossBucket?: string;
  jpgSequence?: string;
  fileFormat?: string;
  endTime?: string;
  startTime?: string;
  interval?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      trigger: 'Trigger',
      hlsTs: 'HlsTs',
      mp4: 'Mp4',
      jpgOverwrite: 'JpgOverwrite',
      callback: 'Callback',
      description: 'Description',
      region: 'Region',
      retention: 'Retention',
      hlsM3u8: 'HlsM3u8',
      name: 'Name',
      flv: 'Flv',
      createdTime: 'CreatedTime',
      ossEndpoint: 'OssEndpoint',
      ossFilePrefix: 'OssFilePrefix',
      transConfigs: 'TransConfigs',
      jpgOnDemand: 'JpgOnDemand',
      ossBucket: 'OssBucket',
      jpgSequence: 'JpgSequence',
      fileFormat: 'FileFormat',
      endTime: 'EndTime',
      startTime: 'StartTime',
      interval: 'Interval',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      trigger: 'string',
      hlsTs: 'string',
      mp4: 'string',
      jpgOverwrite: 'string',
      callback: 'string',
      description: 'string',
      region: 'string',
      retention: 'number',
      hlsM3u8: 'string',
      name: 'string',
      flv: 'string',
      createdTime: 'string',
      ossEndpoint: 'string',
      ossFilePrefix: 'string',
      transConfigs: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplatesTransConfigs },
      jpgOnDemand: 'string',
      ossBucket: 'string',
      jpgSequence: 'string',
      fileFormat: 'string',
      endTime: 'string',
      startTime: 'string',
      interval: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  lastTime?: number;
  fingerprint?: string;
  certName?: string;
  issuer?: string;
  certId?: number;
  common?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      fingerprint: 'Fingerprint',
      certName: 'CertName',
      issuer: 'Issuer',
      certId: 'CertId',
      common: 'Common',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      fingerprint: 'string',
      certName: 'string',
      issuer: 'string',
      certId: 'number',
      common: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeVsCertificateListResponseBodyCertificateListModelCertList[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  bpsValue?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  status?: string;
  certLife?: string;
  certExpireTime?: string;
  SSLPub?: string;
  certType?: string;
  serverCertificateStatus?: string;
  certDomainName?: string;
  certName?: string;
  certOrg?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certLife: 'CertLife',
      certExpireTime: 'CertExpireTime',
      SSLPub: 'SSLPub',
      certType: 'CertType',
      serverCertificateStatus: 'ServerCertificateStatus',
      certDomainName: 'CertDomainName',
      certName: 'CertName',
      certOrg: 'CertOrg',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      certLife: 'string',
      certExpireTime: 'string',
      SSLPub: 'string',
      certType: 'string',
      serverCertificateStatus: 'string',
      certDomainName: 'string',
      certName: 'string',
      certOrg: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
  argName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBodyDomainConfig extends $tea.Model {
  gmtCreated?: string;
  description?: string;
  SSLProtocol?: string;
  region?: string;
  scope?: string;
  cname?: string;
  domainStatus?: string;
  gmtModified?: string;
  domainName?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      region: 'Region',
      scope: 'Scope',
      cname: 'Cname',
      domainStatus: 'DomainStatus',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      description: 'string',
      SSLProtocol: 'string',
      region: 'string',
      scope: 'string',
      cname: 'string',
      domainStatus: 'string',
      gmtModified: 'string',
      domainName: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfosPvUvDataInfo extends $tea.Model {
  PV?: string;
  timeStamp?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponseBodyRecordDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  recordValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      recordValue: 'RecordValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      recordValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  reqErrRate?: string;
  avgObjectSize?: string;
  bps?: string;
  qps?: string;
  regionEname?: string;
  region?: string;
  proportion?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      reqErrRate: 'ReqErrRate',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      qps: 'Qps',
      regionEname: 'RegionEname',
      region: 'Region',
      proportion: 'Proportion',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      reqErrRate: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      qps: 'string',
      regionEname: 'string',
      region: 'string',
      proportion: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBodyValue extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  reqBpsValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      reqBpsValue: 'ReqBpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      reqBpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerIntervalDataModule extends $tea.Model {
  reqTrafficValue?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  snapshotValue?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      snapshotValue: 'SnapshotValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      snapshotValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponseBodySnapshotDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  trafficValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      trafficValue: 'TrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordListLiveAppRecord extends $tea.Model {
  endTime?: string;
  appName?: string;
  sourceUrl?: string;
  startTime?: string;
  streamName?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      appName: 'AppName',
      sourceUrl: 'SourceUrl',
      startTime: 'StartTime',
      streamName: 'StreamName',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      appName: 'string',
      sourceUrl: 'string',
      startTime: 'string',
      streamName: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig extends $tea.Model {
  authType?: string;
  notifyUrl?: string;
  authKey?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      notifyUrl: 'NotifyUrl',
      authKey: 'AuthKey',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      notifyUrl: 'string',
      authKey: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $tea.Model {
  publishTime?: string;
  appName?: string;
  publishType?: string;
  publishUrl?: string;
  transcoded?: string;
  streamName?: string;
  domainName?: string;
  transcodeId?: string;
  publishDomain?: string;
  static names(): { [key: string]: string } {
    return {
      publishTime: 'PublishTime',
      appName: 'AppName',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      transcoded: 'Transcoded',
      streamName: 'StreamName',
      domainName: 'DomainName',
      transcodeId: 'TranscodeId',
      publishDomain: 'PublishDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishTime: 'string',
      appName: 'string',
      publishType: 'string',
      publishUrl: 'string',
      transcoded: 'string',
      streamName: 'string',
      domainName: 'string',
      transcodeId: 'string',
      publishDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $tea.Model {
  edgeNodeAddr?: string;
  publishUrl?: string;
  streamName?: string;
  stopTime?: string;
  domainName?: string;
  transcodeId?: string;
  publishDomain?: string;
  publishTime?: string;
  appName?: string;
  publishType?: string;
  transcoded?: string;
  clientAddr?: string;
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      edgeNodeAddr: 'EdgeNodeAddr',
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      stopTime: 'StopTime',
      domainName: 'DomainName',
      transcodeId: 'TranscodeId',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      appName: 'AppName',
      publishType: 'PublishType',
      transcoded: 'Transcoded',
      clientAddr: 'ClientAddr',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeNodeAddr: 'string',
      publishUrl: 'string',
      streamName: 'string',
      stopTime: 'string',
      domainName: 'string',
      transcodeId: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      appName: 'string',
      publishType: 'string',
      transcoded: 'string',
      clientAddr: 'string',
      streamUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBodyPublishInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  maxBps?: number;
  rank?: number;
  totalAccess?: number;
  trafficPercent?: string;
  domainName?: string;
  totalTraffic?: string;
  maxBpsTime?: string;
  static names(): { [key: string]: string } {
    return {
      maxBps: 'MaxBps',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      trafficPercent: 'TrafficPercent',
      domainName: 'DomainName',
      totalTraffic: 'TotalTraffic',
      maxBpsTime: 'MaxBpsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBps: 'number',
      rank: 'number',
      totalAccess: 'number',
      trafficPercent: 'string',
      domainName: 'string',
      totalTraffic: 'string',
      maxBpsTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatasDescribeVsUpPeakPublishStreamData extends $tea.Model {
  queryTime?: string;
  statName?: string;
  peakTime?: string;
  bandWidth?: string;
  publishStreamNum?: number;
  static names(): { [key: string]: string } {
    return {
      queryTime: 'QueryTime',
      statName: 'StatName',
      peakTime: 'PeakTime',
      bandWidth: 'BandWidth',
      publishStreamNum: 'PublishStreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryTime: 'string',
      statName: 'string',
      peakTime: 'string',
      bandWidth: 'string',
      publishStreamNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $tea.Model {
  displayName?: string;
  status?: string;
  commodityCode?: string;
  currCapacity?: string;
  initCapacity?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      commodityCode: 'string',
      currCapacity: 'string',
      initCapacity: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addVsPullStreamInfoConfigWithOptions(request: AddVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVsPullStreamInfoConfigResponse>(await this.doRPCRequest("AddVsPullStreamInfoConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new AddVsPullStreamInfoConfigResponse({}));
  }

  async addVsPullStreamInfoConfig(request: AddVsPullStreamInfoConfigRequest): Promise<AddVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  async batchBindDirectoriesWithOptions(request: BatchBindDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindDirectoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindDirectoriesResponse>(await this.doRPCRequest("BatchBindDirectories", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindDirectoriesResponse({}));
  }

  async batchBindDirectories(request: BatchBindDirectoriesRequest): Promise<BatchBindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDirectoriesWithOptions(request, runtime);
  }

  async batchBindParentPlatformDevicesWithOptions(request: BatchBindParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindParentPlatformDevicesResponse>(await this.doRPCRequest("BatchBindParentPlatformDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindParentPlatformDevicesResponse({}));
  }

  async batchBindParentPlatformDevices(request: BatchBindParentPlatformDevicesRequest): Promise<BatchBindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindParentPlatformDevicesWithOptions(request, runtime);
  }

  async batchBindPurchasedDevicesWithOptions(request: BatchBindPurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindPurchasedDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindPurchasedDevicesResponse>(await this.doRPCRequest("BatchBindPurchasedDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindPurchasedDevicesResponse({}));
  }

  async batchBindPurchasedDevices(request: BatchBindPurchasedDevicesRequest): Promise<BatchBindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindPurchasedDevicesWithOptions(request, runtime);
  }

  async batchBindTemplateWithOptions(request: BatchBindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindTemplateResponse>(await this.doRPCRequest("BatchBindTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindTemplateResponse({}));
  }

  async batchBindTemplate(request: BatchBindTemplateRequest): Promise<BatchBindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplateWithOptions(request, runtime);
  }

  async batchBindTemplatesWithOptions(request: BatchBindTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindTemplatesResponse>(await this.doRPCRequest("BatchBindTemplates", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindTemplatesResponse({}));
  }

  async batchBindTemplates(request: BatchBindTemplatesRequest): Promise<BatchBindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplatesWithOptions(request, runtime);
  }

  async batchDeleteDevicesWithOptions(request: BatchDeleteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteDevicesResponse>(await this.doRPCRequest("BatchDeleteDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteDevicesResponse({}));
  }

  async batchDeleteDevices(request: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDevicesWithOptions(request, runtime);
  }

  async batchDeleteVsDomainConfigsWithOptions(request: BatchDeleteVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteVsDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteVsDomainConfigsResponse>(await this.doRPCRequest("BatchDeleteVsDomainConfigs", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteVsDomainConfigsResponse({}));
  }

  async batchDeleteVsDomainConfigs(request: BatchDeleteVsDomainConfigsRequest): Promise<BatchDeleteVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteVsDomainConfigsWithOptions(request, runtime);
  }

  async batchForbidVsStreamWithOptions(request: BatchForbidVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<BatchForbidVsStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchForbidVsStreamResponse>(await this.doRPCRequest("BatchForbidVsStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchForbidVsStreamResponse({}));
  }

  async batchForbidVsStream(request: BatchForbidVsStreamRequest): Promise<BatchForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchForbidVsStreamWithOptions(request, runtime);
  }

  async batchResumeVsStreamWithOptions(request: BatchResumeVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<BatchResumeVsStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchResumeVsStreamResponse>(await this.doRPCRequest("BatchResumeVsStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchResumeVsStreamResponse({}));
  }

  async batchResumeVsStream(request: BatchResumeVsStreamRequest): Promise<BatchResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchResumeVsStreamWithOptions(request, runtime);
  }

  async batchSetVsDomainConfigsWithOptions(request: BatchSetVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetVsDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetVsDomainConfigsResponse>(await this.doRPCRequest("BatchSetVsDomainConfigs", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetVsDomainConfigsResponse({}));
  }

  async batchSetVsDomainConfigs(request: BatchSetVsDomainConfigsRequest): Promise<BatchSetVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetVsDomainConfigsWithOptions(request, runtime);
  }

  async batchStartDevicesWithOptions(request: BatchStartDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStartDevicesResponse>(await this.doRPCRequest("BatchStartDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStartDevicesResponse({}));
  }

  async batchStartDevices(request: BatchStartDevicesRequest): Promise<BatchStartDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartDevicesWithOptions(request, runtime);
  }

  async batchStartStreamsWithOptions(request: BatchStartStreamsRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartStreamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStartStreamsResponse>(await this.doRPCRequest("BatchStartStreams", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStartStreamsResponse({}));
  }

  async batchStartStreams(request: BatchStartStreamsRequest): Promise<BatchStartStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartStreamsWithOptions(request, runtime);
  }

  async batchStopDevicesWithOptions(request: BatchStopDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStopDevicesResponse>(await this.doRPCRequest("BatchStopDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStopDevicesResponse({}));
  }

  async batchStopDevices(request: BatchStopDevicesRequest): Promise<BatchStopDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopDevicesWithOptions(request, runtime);
  }

  async batchStopStreamsWithOptions(request: BatchStopStreamsRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopStreamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStopStreamsResponse>(await this.doRPCRequest("BatchStopStreams", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStopStreamsResponse({}));
  }

  async batchStopStreams(request: BatchStopStreamsRequest): Promise<BatchStopStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopStreamsWithOptions(request, runtime);
  }

  async batchUnbindDirectoriesWithOptions(request: BatchUnbindDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindDirectoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindDirectoriesResponse>(await this.doRPCRequest("BatchUnbindDirectories", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindDirectoriesResponse({}));
  }

  async batchUnbindDirectories(request: BatchUnbindDirectoriesRequest): Promise<BatchUnbindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindDirectoriesWithOptions(request, runtime);
  }

  async batchUnbindParentPlatformDevicesWithOptions(request: BatchUnbindParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindParentPlatformDevicesResponse>(await this.doRPCRequest("BatchUnbindParentPlatformDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindParentPlatformDevicesResponse({}));
  }

  async batchUnbindParentPlatformDevices(request: BatchUnbindParentPlatformDevicesRequest): Promise<BatchUnbindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindParentPlatformDevicesWithOptions(request, runtime);
  }

  async batchUnbindPurchasedDevicesWithOptions(request: BatchUnbindPurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindPurchasedDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindPurchasedDevicesResponse>(await this.doRPCRequest("BatchUnbindPurchasedDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindPurchasedDevicesResponse({}));
  }

  async batchUnbindPurchasedDevices(request: BatchUnbindPurchasedDevicesRequest): Promise<BatchUnbindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindPurchasedDevicesWithOptions(request, runtime);
  }

  async batchUnbindTemplateWithOptions(request: BatchUnbindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindTemplateResponse>(await this.doRPCRequest("BatchUnbindTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindTemplateResponse({}));
  }

  async batchUnbindTemplate(request: BatchUnbindTemplateRequest): Promise<BatchUnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplateWithOptions(request, runtime);
  }

  async batchUnbindTemplatesWithOptions(request: BatchUnbindTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindTemplatesResponse>(await this.doRPCRequest("BatchUnbindTemplates", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindTemplatesResponse({}));
  }

  async batchUnbindTemplates(request: BatchUnbindTemplatesRequest): Promise<BatchUnbindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplatesWithOptions(request, runtime);
  }

  async bindDirectoryWithOptions(request: BindDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<BindDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindDirectoryResponse>(await this.doRPCRequest("BindDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BindDirectoryResponse({}));
  }

  async bindDirectory(request: BindDirectoryRequest): Promise<BindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDirectoryWithOptions(request, runtime);
  }

  async bindParentPlatformDeviceWithOptions(request: BindParentPlatformDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindParentPlatformDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindParentPlatformDeviceResponse>(await this.doRPCRequest("BindParentPlatformDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BindParentPlatformDeviceResponse({}));
  }

  async bindParentPlatformDevice(request: BindParentPlatformDeviceRequest): Promise<BindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindParentPlatformDeviceWithOptions(request, runtime);
  }

  async bindPurchasedDeviceWithOptions(request: BindPurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindPurchasedDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindPurchasedDeviceResponse>(await this.doRPCRequest("BindPurchasedDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BindPurchasedDeviceResponse({}));
  }

  async bindPurchasedDevice(request: BindPurchasedDeviceRequest): Promise<BindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPurchasedDeviceWithOptions(request, runtime);
  }

  async bindTemplateWithOptions(request: BindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BindTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindTemplateResponse>(await this.doRPCRequest("BindTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new BindTemplateResponse({}));
  }

  async bindTemplate(request: BindTemplateRequest): Promise<BindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTemplateWithOptions(request, runtime);
  }

  async continuousAdjustWithOptions(request: ContinuousAdjustRequest, runtime: $Util.RuntimeOptions): Promise<ContinuousAdjustResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContinuousAdjustResponse>(await this.doRPCRequest("ContinuousAdjust", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ContinuousAdjustResponse({}));
  }

  async continuousAdjust(request: ContinuousAdjustRequest): Promise<ContinuousAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousAdjustWithOptions(request, runtime);
  }

  async continuousMoveWithOptions(request: ContinuousMoveRequest, runtime: $Util.RuntimeOptions): Promise<ContinuousMoveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContinuousMoveResponse>(await this.doRPCRequest("ContinuousMove", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ContinuousMoveResponse({}));
  }

  async continuousMove(request: ContinuousMoveRequest): Promise<ContinuousMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousMoveWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceResponse>(await this.doRPCRequest("CreateDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async createDeviceAlarmWithOptions(request: CreateDeviceAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceAlarmResponse>(await this.doRPCRequest("CreateDeviceAlarm", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceAlarmResponse({}));
  }

  async createDeviceAlarm(request: CreateDeviceAlarmRequest): Promise<CreateDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceAlarmWithOptions(request, runtime);
  }

  async createDirectoryWithOptions(request: CreateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDirectoryResponse>(await this.doRPCRequest("CreateDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDirectoryResponse({}));
  }

  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupResponse>(await this.doRPCRequest("CreateGroup", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  async createParentPlatformWithOptions(request: CreateParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<CreateParentPlatformResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateParentPlatformResponse>(await this.doRPCRequest("CreateParentPlatform", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateParentPlatformResponse({}));
  }

  async createParentPlatform(request: CreateParentPlatformRequest): Promise<CreateParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParentPlatformWithOptions(request, runtime);
  }

  async createStreamSnapshotWithOptions(request: CreateStreamSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateStreamSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStreamSnapshotResponse>(await this.doRPCRequest("CreateStreamSnapshot", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStreamSnapshotResponse({}));
  }

  async createStreamSnapshot(request: CreateStreamSnapshotRequest): Promise<CreateStreamSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamSnapshotWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDirectoryResponse>(await this.doRPCRequest("DeleteDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDirectoryResponse({}));
  }

  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupResponse>(await this.doRPCRequest("DeleteGroup", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteParentPlatformWithOptions(request: DeleteParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParentPlatformResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteParentPlatformResponse>(await this.doRPCRequest("DeleteParentPlatform", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteParentPlatformResponse({}));
  }

  async deleteParentPlatform(request: DeleteParentPlatformRequest): Promise<DeleteParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParentPlatformWithOptions(request, runtime);
  }

  async deletePresetWithOptions(request: DeletePresetRequest, runtime: $Util.RuntimeOptions): Promise<DeletePresetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePresetResponse>(await this.doRPCRequest("DeletePreset", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePresetResponse({}));
  }

  async deletePreset(request: DeletePresetRequest): Promise<DeletePresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePresetWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async deleteVsPullStreamInfoConfigWithOptions(request: DeleteVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVsPullStreamInfoConfigResponse>(await this.doRPCRequest("DeleteVsPullStreamInfoConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVsPullStreamInfoConfigResponse({}));
  }

  async deleteVsPullStreamInfoConfig(request: DeleteVsPullStreamInfoConfigRequest): Promise<DeleteVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  async deleteVsStreamsNotifyUrlConfigWithOptions(request: DeleteVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVsStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("DeleteVsStreamsNotifyUrlConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVsStreamsNotifyUrlConfigResponse({}));
  }

  async deleteVsStreamsNotifyUrlConfig(request: DeleteVsStreamsNotifyUrlConfigRequest): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async describeAccountStatWithOptions(request: DescribeAccountStatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountStatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountStatResponse>(await this.doRPCRequest("DescribeAccountStat", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountStatResponse({}));
  }

  async describeAccountStat(request: DescribeAccountStatRequest): Promise<DescribeAccountStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountStatWithOptions(request, runtime);
  }

  async describeDeviceWithOptions(request: DescribeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceResponse>(await this.doRPCRequest("DescribeDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceResponse({}));
  }

  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  async describeDeviceChannelsWithOptions(request: DescribeDeviceChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceChannelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceChannelsResponse>(await this.doRPCRequest("DescribeDeviceChannels", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceChannelsResponse({}));
  }

  async describeDeviceChannels(request: DescribeDeviceChannelsRequest): Promise<DescribeDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceChannelsWithOptions(request, runtime);
  }

  async describeDeviceGatewayWithOptions(request: DescribeDeviceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceGatewayResponse>(await this.doRPCRequest("DescribeDeviceGateway", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceGatewayResponse({}));
  }

  async describeDeviceGateway(request: DescribeDeviceGatewayRequest): Promise<DescribeDeviceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceGatewayWithOptions(request, runtime);
  }

  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDevicesResponse>(await this.doRPCRequest("DescribeDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDevicesResponse({}));
  }

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  async describeDeviceURLWithOptions(request: DescribeDeviceURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceURLResponse>(await this.doRPCRequest("DescribeDeviceURL", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceURLResponse({}));
  }

  async describeDeviceURL(request: DescribeDeviceURLRequest): Promise<DescribeDeviceURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceURLWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDirectoriesResponse>(await this.doRPCRequest("DescribeDirectories", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async describeDirectoryWithOptions(request: DescribeDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDirectoryResponse>(await this.doRPCRequest("DescribeDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDirectoryResponse({}));
  }

  async describeDirectory(request: DescribeDirectoryRequest): Promise<DescribeDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoryWithOptions(request, runtime);
  }

  async describeGroupWithOptions(request: DescribeGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupResponse>(await this.doRPCRequest("DescribeGroup", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupResponse({}));
  }

  async describeGroup(request: DescribeGroupRequest): Promise<DescribeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupWithOptions(request, runtime);
  }

  async describeGroupsWithOptions(request: DescribeGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupsResponse>(await this.doRPCRequest("DescribeGroups", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupsResponse({}));
  }

  async describeGroups(request: DescribeGroupsRequest): Promise<DescribeGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  async describeParentPlatformWithOptions(request: DescribeParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParentPlatformResponse>(await this.doRPCRequest("DescribeParentPlatform", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParentPlatformResponse({}));
  }

  async describeParentPlatform(request: DescribeParentPlatformRequest): Promise<DescribeParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformWithOptions(request, runtime);
  }

  async describeParentPlatformDevicesWithOptions(request: DescribeParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParentPlatformDevicesResponse>(await this.doRPCRequest("DescribeParentPlatformDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParentPlatformDevicesResponse({}));
  }

  async describeParentPlatformDevices(request: DescribeParentPlatformDevicesRequest): Promise<DescribeParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformDevicesWithOptions(request, runtime);
  }

  async describeParentPlatformsWithOptions(request: DescribeParentPlatformsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParentPlatformsResponse>(await this.doRPCRequest("DescribeParentPlatforms", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParentPlatformsResponse({}));
  }

  async describeParentPlatforms(request: DescribeParentPlatformsRequest): Promise<DescribeParentPlatformsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformsWithOptions(request, runtime);
  }

  async describePresetsWithOptions(request: DescribePresetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePresetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePresetsResponse>(await this.doRPCRequest("DescribePresets", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePresetsResponse({}));
  }

  async describePresets(request: DescribePresetsRequest): Promise<DescribePresetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePresetsWithOptions(request, runtime);
  }

  async describePurchasedDeviceWithOptions(request: DescribePurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePurchasedDeviceResponse>(await this.doRPCRequest("DescribePurchasedDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePurchasedDeviceResponse({}));
  }

  async describePurchasedDevice(request: DescribePurchasedDeviceRequest): Promise<DescribePurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDeviceWithOptions(request, runtime);
  }

  async describePurchasedDevicesWithOptions(request: DescribePurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePurchasedDevicesResponse>(await this.doRPCRequest("DescribePurchasedDevices", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePurchasedDevicesResponse({}));
  }

  async describePurchasedDevices(request: DescribePurchasedDevicesRequest): Promise<DescribePurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDevicesWithOptions(request, runtime);
  }

  async describeRecordsWithOptions(request: DescribeRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordsResponse>(await this.doRPCRequest("DescribeRecords", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordsResponse({}));
  }

  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  async describeStreamWithOptions(request: DescribeStreamRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamResponse>(await this.doRPCRequest("DescribeStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamResponse({}));
  }

  async describeStream(request: DescribeStreamRequest): Promise<DescribeStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamWithOptions(request, runtime);
  }

  async describeStreamsWithOptions(request: DescribeStreamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamsResponse>(await this.doRPCRequest("DescribeStreams", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamsResponse({}));
  }

  async describeStreams(request: DescribeStreamsRequest): Promise<DescribeStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

  async describeStreamURLWithOptions(request: DescribeStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamURLResponse>(await this.doRPCRequest("DescribeStreamURL", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamURLResponse({}));
  }

  async describeStreamURL(request: DescribeStreamURLRequest): Promise<DescribeStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamURLWithOptions(request, runtime);
  }

  async describeStreamVodListWithOptions(request: DescribeStreamVodListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamVodListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamVodListResponse>(await this.doRPCRequest("DescribeStreamVodList", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamVodListResponse({}));
  }

  async describeStreamVodList(request: DescribeStreamVodListRequest): Promise<DescribeStreamVodListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamVodListWithOptions(request, runtime);
  }

  async describeTemplateWithOptions(request: DescribeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTemplateResponse>(await this.doRPCRequest("DescribeTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTemplateResponse({}));
  }

  async describeTemplate(request: DescribeTemplateRequest): Promise<DescribeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateWithOptions(request, runtime);
  }

  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTemplatesResponse>(await this.doRPCRequest("DescribeTemplates", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTemplatesResponse({}));
  }

  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

  async describeVodStreamURLWithOptions(request: DescribeVodStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodStreamURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVodStreamURLResponse>(await this.doRPCRequest("DescribeVodStreamURL", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVodStreamURLResponse({}));
  }

  async describeVodStreamURL(request: DescribeVodStreamURLRequest): Promise<DescribeVodStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodStreamURLWithOptions(request, runtime);
  }

  async describeVsCertificateDetailWithOptions(request: DescribeVsCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsCertificateDetailResponse>(await this.doRPCRequest("DescribeVsCertificateDetail", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsCertificateDetailResponse({}));
  }

  async describeVsCertificateDetail(request: DescribeVsCertificateDetailRequest): Promise<DescribeVsCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateDetailWithOptions(request, runtime);
  }

  async describeVsCertificateListWithOptions(request: DescribeVsCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsCertificateListResponse>(await this.doRPCRequest("DescribeVsCertificateList", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsCertificateListResponse({}));
  }

  async describeVsCertificateList(request: DescribeVsCertificateListRequest): Promise<DescribeVsCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateListWithOptions(request, runtime);
  }

  async describeVsDomainBpsDataWithOptions(request: DescribeVsDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainBpsDataResponse>(await this.doRPCRequest("DescribeVsDomainBpsData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainBpsDataResponse({}));
  }

  async describeVsDomainBpsData(request: DescribeVsDomainBpsDataRequest): Promise<DescribeVsDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainBpsDataWithOptions(request, runtime);
  }

  async describeVsDomainCertificateInfoWithOptions(request: DescribeVsDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeVsDomainCertificateInfo", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainCertificateInfoResponse({}));
  }

  async describeVsDomainCertificateInfo(request: DescribeVsDomainCertificateInfoRequest): Promise<DescribeVsDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeVsDomainConfigsWithOptions(request: DescribeVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainConfigsResponse>(await this.doRPCRequest("DescribeVsDomainConfigs", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainConfigsResponse({}));
  }

  async describeVsDomainConfigs(request: DescribeVsDomainConfigsRequest): Promise<DescribeVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainConfigsWithOptions(request, runtime);
  }

  async describeVsDomainDetailWithOptions(request: DescribeVsDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainDetailResponse>(await this.doRPCRequest("DescribeVsDomainDetail", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainDetailResponse({}));
  }

  async describeVsDomainDetail(request: DescribeVsDomainDetailRequest): Promise<DescribeVsDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainDetailWithOptions(request, runtime);
  }

  async describeVsDomainPvDataWithOptions(request: DescribeVsDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainPvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainPvDataResponse>(await this.doRPCRequest("DescribeVsDomainPvData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainPvDataResponse({}));
  }

  async describeVsDomainPvData(request: DescribeVsDomainPvDataRequest): Promise<DescribeVsDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvDataWithOptions(request, runtime);
  }

  async describeVsDomainPvUvDataWithOptions(request: DescribeVsDomainPvUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainPvUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainPvUvDataResponse>(await this.doRPCRequest("DescribeVsDomainPvUvData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainPvUvDataResponse({}));
  }

  async describeVsDomainPvUvData(request: DescribeVsDomainPvUvDataRequest): Promise<DescribeVsDomainPvUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvUvDataWithOptions(request, runtime);
  }

  async describeVsDomainRecordDataWithOptions(request: DescribeVsDomainRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainRecordDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainRecordDataResponse>(await this.doRPCRequest("DescribeVsDomainRecordData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainRecordDataResponse({}));
  }

  async describeVsDomainRecordData(request: DescribeVsDomainRecordDataRequest): Promise<DescribeVsDomainRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRecordDataWithOptions(request, runtime);
  }

  async describeVsDomainRegionDataWithOptions(request: DescribeVsDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainRegionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainRegionDataResponse>(await this.doRPCRequest("DescribeVsDomainRegionData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainRegionDataResponse({}));
  }

  async describeVsDomainRegionData(request: DescribeVsDomainRegionDataRequest): Promise<DescribeVsDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRegionDataWithOptions(request, runtime);
  }

  async describeVsDomainReqBpsDataWithOptions(request: DescribeVsDomainReqBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainReqBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainReqBpsDataResponse>(await this.doRPCRequest("DescribeVsDomainReqBpsData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainReqBpsDataResponse({}));
  }

  async describeVsDomainReqBpsData(request: DescribeVsDomainReqBpsDataRequest): Promise<DescribeVsDomainReqBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqBpsDataWithOptions(request, runtime);
  }

  async describeVsDomainReqTrafficDataWithOptions(request: DescribeVsDomainReqTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainReqTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainReqTrafficDataResponse>(await this.doRPCRequest("DescribeVsDomainReqTrafficData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainReqTrafficDataResponse({}));
  }

  async describeVsDomainReqTrafficData(request: DescribeVsDomainReqTrafficDataRequest): Promise<DescribeVsDomainReqTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqTrafficDataWithOptions(request, runtime);
  }

  async describeVsDomainSnapshotDataWithOptions(request: DescribeVsDomainSnapshotDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainSnapshotDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainSnapshotDataResponse>(await this.doRPCRequest("DescribeVsDomainSnapshotData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainSnapshotDataResponse({}));
  }

  async describeVsDomainSnapshotData(request: DescribeVsDomainSnapshotDataRequest): Promise<DescribeVsDomainSnapshotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainSnapshotDataWithOptions(request, runtime);
  }

  async describeVsDomainTrafficDataWithOptions(request: DescribeVsDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainTrafficDataResponse>(await this.doRPCRequest("DescribeVsDomainTrafficData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainTrafficDataResponse({}));
  }

  async describeVsDomainTrafficData(request: DescribeVsDomainTrafficDataRequest): Promise<DescribeVsDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainTrafficDataWithOptions(request, runtime);
  }

  async describeVsDomainUvDataWithOptions(request: DescribeVsDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsDomainUvDataResponse>(await this.doRPCRequest("DescribeVsDomainUvData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsDomainUvDataResponse({}));
  }

  async describeVsDomainUvData(request: DescribeVsDomainUvDataRequest): Promise<DescribeVsDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainUvDataWithOptions(request, runtime);
  }

  async describeVsPullStreamInfoConfigWithOptions(request: DescribeVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsPullStreamInfoConfigResponse>(await this.doRPCRequest("DescribeVsPullStreamInfoConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsPullStreamInfoConfigResponse({}));
  }

  async describeVsPullStreamInfoConfig(request: DescribeVsPullStreamInfoConfigRequest): Promise<DescribeVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  async describeVsStreamsNotifyUrlConfigWithOptions(request: DescribeVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("DescribeVsStreamsNotifyUrlConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsStreamsNotifyUrlConfigResponse({}));
  }

  async describeVsStreamsNotifyUrlConfig(request: DescribeVsStreamsNotifyUrlConfigRequest): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async describeVsStreamsOnlineListWithOptions(request: DescribeVsStreamsOnlineListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsOnlineListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsStreamsOnlineListResponse>(await this.doRPCRequest("DescribeVsStreamsOnlineList", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsStreamsOnlineListResponse({}));
  }

  async describeVsStreamsOnlineList(request: DescribeVsStreamsOnlineListRequest): Promise<DescribeVsStreamsOnlineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsOnlineListWithOptions(request, runtime);
  }

  async describeVsStreamsPublishListWithOptions(request: DescribeVsStreamsPublishListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsPublishListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsStreamsPublishListResponse>(await this.doRPCRequest("DescribeVsStreamsPublishList", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsStreamsPublishListResponse({}));
  }

  async describeVsStreamsPublishList(request: DescribeVsStreamsPublishListRequest): Promise<DescribeVsStreamsPublishListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsPublishListWithOptions(request, runtime);
  }

  async describeVsTopDomainsByFlowWithOptions(request: DescribeVsTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsTopDomainsByFlowResponse>(await this.doRPCRequest("DescribeVsTopDomainsByFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsTopDomainsByFlowResponse({}));
  }

  async describeVsTopDomainsByFlow(request: DescribeVsTopDomainsByFlowRequest): Promise<DescribeVsTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeVsUpPeakPublishStreamDataWithOptions(request: DescribeVsUpPeakPublishStreamDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsUpPeakPublishStreamDataResponse>(await this.doRPCRequest("DescribeVsUpPeakPublishStreamData", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsUpPeakPublishStreamDataResponse({}));
  }

  async describeVsUpPeakPublishStreamData(request: DescribeVsUpPeakPublishStreamDataRequest): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  async describeVsUserResourcePackageWithOptions(request: DescribeVsUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsUserResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVsUserResourcePackageResponse>(await this.doRPCRequest("DescribeVsUserResourcePackage", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVsUserResourcePackageResponse({}));
  }

  async describeVsUserResourcePackage(request: DescribeVsUserResourcePackageRequest): Promise<DescribeVsUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUserResourcePackageWithOptions(request, runtime);
  }

  async forbidVsStreamWithOptions(request: ForbidVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidVsStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ForbidVsStreamResponse>(await this.doRPCRequest("ForbidVsStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ForbidVsStreamResponse({}));
  }

  async forbidVsStream(request: ForbidVsStreamRequest): Promise<ForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidVsStreamWithOptions(request, runtime);
  }

  async gotoPresetWithOptions(request: GotoPresetRequest, runtime: $Util.RuntimeOptions): Promise<GotoPresetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GotoPresetResponse>(await this.doRPCRequest("GotoPreset", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new GotoPresetResponse({}));
  }

  async gotoPreset(request: GotoPresetRequest): Promise<GotoPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.gotoPresetWithOptions(request, runtime);
  }

  async modifyDeviceWithOptions(request: ModifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceResponse>(await this.doRPCRequest("ModifyDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceResponse({}));
  }

  async modifyDevice(request: ModifyDeviceRequest): Promise<ModifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceWithOptions(request, runtime);
  }

  async modifyDeviceAlarmWithOptions(request: ModifyDeviceAlarmRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceAlarmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceAlarmResponse>(await this.doRPCRequest("ModifyDeviceAlarm", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceAlarmResponse({}));
  }

  async modifyDeviceAlarm(request: ModifyDeviceAlarmRequest): Promise<ModifyDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceAlarmWithOptions(request, runtime);
  }

  async modifyDeviceCaptureWithOptions(request: ModifyDeviceCaptureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceCaptureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceCaptureResponse>(await this.doRPCRequest("ModifyDeviceCapture", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceCaptureResponse({}));
  }

  async modifyDeviceCapture(request: ModifyDeviceCaptureRequest): Promise<ModifyDeviceCaptureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceCaptureWithOptions(request, runtime);
  }

  async modifyDeviceChannelsWithOptions(request: ModifyDeviceChannelsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceChannelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceChannelsResponse>(await this.doRPCRequest("ModifyDeviceChannels", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceChannelsResponse({}));
  }

  async modifyDeviceChannels(request: ModifyDeviceChannelsRequest): Promise<ModifyDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceChannelsWithOptions(request, runtime);
  }

  async modifyDirectoryWithOptions(request: ModifyDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDirectoryResponse>(await this.doRPCRequest("ModifyDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDirectoryResponse({}));
  }

  async modifyDirectory(request: ModifyDirectoryRequest): Promise<ModifyDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDirectoryWithOptions(request, runtime);
  }

  async modifyGroupWithOptions(request: ModifyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGroupResponse>(await this.doRPCRequest("ModifyGroup", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGroupResponse({}));
  }

  async modifyGroup(request: ModifyGroupRequest): Promise<ModifyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  async modifyParentPlatformWithOptions(request: ModifyParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParentPlatformResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParentPlatformResponse>(await this.doRPCRequest("ModifyParentPlatform", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParentPlatformResponse({}));
  }

  async modifyParentPlatform(request: ModifyParentPlatformRequest): Promise<ModifyParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParentPlatformWithOptions(request, runtime);
  }

  async modifyTemplateWithOptions(request: ModifyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTemplateResponse>(await this.doRPCRequest("ModifyTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTemplateResponse({}));
  }

  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  async openVsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenVsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenVsServiceResponse>(await this.doRPCRequest("OpenVsService", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new OpenVsServiceResponse({}));
  }

  async openVsService(): Promise<OpenVsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVsServiceWithOptions(runtime);
  }

  async resumeVsStreamWithOptions(request: ResumeVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<ResumeVsStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeVsStreamResponse>(await this.doRPCRequest("ResumeVsStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeVsStreamResponse({}));
  }

  async resumeVsStream(request: ResumeVsStreamRequest): Promise<ResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeVsStreamWithOptions(request, runtime);
  }

  async setPresetWithOptions(request: SetPresetRequest, runtime: $Util.RuntimeOptions): Promise<SetPresetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetPresetResponse>(await this.doRPCRequest("SetPreset", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new SetPresetResponse({}));
  }

  async setPreset(request: SetPresetRequest): Promise<SetPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPresetWithOptions(request, runtime);
  }

  async setVsDomainCertificateWithOptions(request: SetVsDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetVsDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetVsDomainCertificateResponse>(await this.doRPCRequest("SetVsDomainCertificate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new SetVsDomainCertificateResponse({}));
  }

  async setVsDomainCertificate(request: SetVsDomainCertificateRequest): Promise<SetVsDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsDomainCertificateWithOptions(request, runtime);
  }

  async setVsStreamsNotifyUrlConfigWithOptions(request: SetVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetVsStreamsNotifyUrlConfigResponse>(await this.doRPCRequest("SetVsStreamsNotifyUrlConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new SetVsStreamsNotifyUrlConfigResponse({}));
  }

  async setVsStreamsNotifyUrlConfig(request: SetVsStreamsNotifyUrlConfigRequest): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async startDeviceWithOptions(request: StartDeviceRequest, runtime: $Util.RuntimeOptions): Promise<StartDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDeviceResponse>(await this.doRPCRequest("StartDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StartDeviceResponse({}));
  }

  async startDevice(request: StartDeviceRequest): Promise<StartDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDeviceWithOptions(request, runtime);
  }

  async startParentPlatformWithOptions(request: StartParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<StartParentPlatformResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartParentPlatformResponse>(await this.doRPCRequest("StartParentPlatform", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StartParentPlatformResponse({}));
  }

  async startParentPlatform(request: StartParentPlatformRequest): Promise<StartParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startParentPlatformWithOptions(request, runtime);
  }

  async startRecordStreamWithOptions(request: StartRecordStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartRecordStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRecordStreamResponse>(await this.doRPCRequest("StartRecordStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StartRecordStreamResponse({}));
  }

  async startRecordStream(request: StartRecordStreamRequest): Promise<StartRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordStreamWithOptions(request, runtime);
  }

  async startStreamWithOptions(request: StartStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartStreamResponse>(await this.doRPCRequest("StartStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StartStreamResponse({}));
  }

  async startStream(request: StartStreamRequest): Promise<StartStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startStreamWithOptions(request, runtime);
  }

  async startTransferStreamWithOptions(request: StartTransferStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartTransferStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartTransferStreamResponse>(await this.doRPCRequest("StartTransferStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StartTransferStreamResponse({}));
  }

  async startTransferStream(request: StartTransferStreamRequest): Promise<StartTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTransferStreamWithOptions(request, runtime);
  }

  async stopAdjustWithOptions(request: StopAdjustRequest, runtime: $Util.RuntimeOptions): Promise<StopAdjustResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopAdjustResponse>(await this.doRPCRequest("StopAdjust", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopAdjustResponse({}));
  }

  async stopAdjust(request: StopAdjustRequest): Promise<StopAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAdjustWithOptions(request, runtime);
  }

  async stopDeviceWithOptions(request: StopDeviceRequest, runtime: $Util.RuntimeOptions): Promise<StopDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDeviceResponse>(await this.doRPCRequest("StopDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopDeviceResponse({}));
  }

  async stopDevice(request: StopDeviceRequest): Promise<StopDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDeviceWithOptions(request, runtime);
  }

  async stopMoveWithOptions(request: StopMoveRequest, runtime: $Util.RuntimeOptions): Promise<StopMoveResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMoveResponse>(await this.doRPCRequest("StopMove", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopMoveResponse({}));
  }

  async stopMove(request: StopMoveRequest): Promise<StopMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMoveWithOptions(request, runtime);
  }

  async stopRecordStreamWithOptions(request: StopRecordStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopRecordStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopRecordStreamResponse>(await this.doRPCRequest("StopRecordStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopRecordStreamResponse({}));
  }

  async stopRecordStream(request: StopRecordStreamRequest): Promise<StopRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordStreamWithOptions(request, runtime);
  }

  async stopStreamWithOptions(request: StopStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopStreamResponse>(await this.doRPCRequest("StopStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopStreamResponse({}));
  }

  async stopStream(request: StopStreamRequest): Promise<StopStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStreamWithOptions(request, runtime);
  }

  async stopTransferStreamWithOptions(request: StopTransferStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopTransferStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopTransferStreamResponse>(await this.doRPCRequest("StopTransferStream", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new StopTransferStreamResponse({}));
  }

  async stopTransferStream(request: StopTransferStreamRequest): Promise<StopTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTransferStreamWithOptions(request, runtime);
  }

  async syncCatalogsWithOptions(request: SyncCatalogsRequest, runtime: $Util.RuntimeOptions): Promise<SyncCatalogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncCatalogsResponse>(await this.doRPCRequest("SyncCatalogs", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new SyncCatalogsResponse({}));
  }

  async syncCatalogs(request: SyncCatalogsRequest): Promise<SyncCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncCatalogsWithOptions(request, runtime);
  }

  async unbindDirectoryWithOptions(request: UnbindDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindDirectoryResponse>(await this.doRPCRequest("UnbindDirectory", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindDirectoryResponse({}));
  }

  async unbindDirectory(request: UnbindDirectoryRequest): Promise<UnbindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDirectoryWithOptions(request, runtime);
  }

  async unbindParentPlatformDeviceWithOptions(request: UnbindParentPlatformDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindParentPlatformDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindParentPlatformDeviceResponse>(await this.doRPCRequest("UnbindParentPlatformDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindParentPlatformDeviceResponse({}));
  }

  async unbindParentPlatformDevice(request: UnbindParentPlatformDeviceRequest): Promise<UnbindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindParentPlatformDeviceWithOptions(request, runtime);
  }

  async unbindPurchasedDeviceWithOptions(request: UnbindPurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPurchasedDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindPurchasedDeviceResponse>(await this.doRPCRequest("UnbindPurchasedDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindPurchasedDeviceResponse({}));
  }

  async unbindPurchasedDevice(request: UnbindPurchasedDeviceRequest): Promise<UnbindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPurchasedDeviceWithOptions(request, runtime);
  }

  async unbindTemplateWithOptions(request: UnbindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UnbindTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindTemplateResponse>(await this.doRPCRequest("UnbindTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindTemplateResponse({}));
  }

  async unbindTemplate(request: UnbindTemplateRequest): Promise<UnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTemplateWithOptions(request, runtime);
  }

  async unlockDeviceWithOptions(request: UnlockDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockDeviceResponse>(await this.doRPCRequest("UnlockDevice", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockDeviceResponse({}));
  }

  async unlockDevice(request: UnlockDeviceRequest): Promise<UnlockDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockDeviceWithOptions(request, runtime);
  }

  async updateVsPullStreamInfoConfigWithOptions(request: UpdateVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVsPullStreamInfoConfigResponse>(await this.doRPCRequest("UpdateVsPullStreamInfoConfig", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVsPullStreamInfoConfigResponse({}));
  }

  async updateVsPullStreamInfoConfig(request: UpdateVsPullStreamInfoConfigRequest): Promise<UpdateVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVsPullStreamInfoConfigWithOptions(request, runtime);
  }

}
