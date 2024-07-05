// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddVsPullStreamInfoConfigRequest extends $tea.Model {
  always?: string;
  appName?: string;
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  sourceUrl?: string;
  startTime?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesRequest extends $tea.Model {
  deviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesRequest extends $tea.Model {
  deviceId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesRequest extends $tea.Model {
  deviceId?: string;
  groupId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateRequest extends $tea.Model {
  applyAll?: boolean;
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  replace?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponseBody extends $tea.Model {
  bindings?: BatchBindTemplateResponseBodyBindings[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindTemplatesRequest extends $tea.Model {
  applyAll?: boolean;
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  replace?: boolean;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDevicesRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteVsDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchForbidVsStreamRequest extends $tea.Model {
  channel?: string;
  controlStreamAction?: string;
  domainName?: string;
  liveStreamType?: string;
  oneshot?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchResumeVsStreamRequest extends $tea.Model {
  channel?: string;
  controlStreamAction?: string;
  domainName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetVsDomainConfigsRequest extends $tea.Model {
  domainNames?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesRequest extends $tea.Model {
  deviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesRequest extends $tea.Model {
  deviceId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindPurchasedDevicesRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateRequest extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBody extends $tea.Model {
  bindings?: BatchUnbindTemplateResponseBodyBindings[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplatesRequest extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDirectoryRequest extends $tea.Model {
  deviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindParentPlatformDeviceRequest extends $tea.Model {
  deviceId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPurchasedDeviceRequest extends $tea.Model {
  deviceId?: string;
  groupId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateRequest extends $tea.Model {
  applyAll?: boolean;
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  replace?: boolean;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateResponseBody extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustRequest extends $tea.Model {
  focus?: string;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousAdjustResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
  pan?: string;
  tilt?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuousMoveResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  description?: string;
  internalPorts?: string;
  maintainTime?: string;
  name?: string;
  ownerId?: number;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      internalPorts: 'InternalPorts',
      maintainTime: 'MaintainTime',
      name: 'Name',
      ownerId: 'OwnerId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      internalPorts: 'string',
      maintainTime: 'string',
      name: 'string',
      ownerId: 'number',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  alarmMethod?: string;
  autoDirectory?: boolean;
  autoPos?: boolean;
  autoStart?: boolean;
  description?: string;
  directoryId?: string;
  dsn?: string;
  gbId?: string;
  groupId?: string;
  ip?: string;
  latitude?: string;
  longitude?: string;
  name?: string;
  ownerId?: number;
  params?: string;
  parentId?: string;
  password?: string;
  port?: number;
  posInterval?: number;
  type?: string;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmRequest extends $tea.Model {
  alarm?: number;
  channelId?: number;
  endTime?: number;
  expire?: number;
  id?: string;
  objectType?: number;
  ownerId?: number;
  startTime?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmResponseBody extends $tea.Model {
  alarmDelay?: number;
  alarmId?: string;
  expire?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceAlarmResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  name?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  app?: string;
  callback?: string;
  description?: string;
  inProtocol?: string;
  lazyPull?: boolean;
  name?: string;
  outProtocol?: string;
  ownerId?: number;
  playDomain?: string;
  pushDomain?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  gbId?: string;
  gbIp?: string;
  gbPort?: number;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformRequest extends $tea.Model {
  autoStart?: boolean;
  clientAuth?: boolean;
  clientPassword?: string;
  clientUsername?: string;
  description?: string;
  gbId?: string;
  ip?: string;
  name?: string;
  ownerId?: number;
  port?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParentPlatformResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  clientInfo?: CreateRenderingInstanceRequestClientInfo;
  instanceChargeType?: string;
  internetChargeType?: string;
  internetMaxBandwidth?: number;
  period?: string;
  renderingSpec?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientInfo: 'ClientInfo',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientInfo: CreateRenderingInstanceRequestClientInfo,
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceShrinkRequest extends $tea.Model {
  autoRenew?: boolean;
  clientInfoShrink?: string;
  instanceChargeType?: string;
  internetChargeType?: string;
  internetMaxBandwidth?: number;
  period?: string;
  renderingSpec?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientInfoShrink: 'ClientInfo',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientInfoShrink: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceResponseBody extends $tea.Model {
  renderingInstanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotRequest extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotResponseBody extends $tea.Model {
  format?: string;
  height?: number;
  id?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  requestId?: string;
  timestamp?: number;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamSnapshotResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  callback?: string;
  description?: string;
  fileFormat?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  interval?: number;
  jpgOnDemand?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  mp4?: string;
  name?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  ownerId?: number;
  region?: string;
  retention?: number;
  transConfigsJSON?: string;
  trigger?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudAppRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCloudAppResponseBody extends $tea.Model {
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

export class DeleteCloudAppResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
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

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponseBody extends $tea.Model {
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

export class DeleteFileResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParentPlatformRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePresetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicKeyRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicKeyResponseBody extends $tea.Model {
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

export class DeletePublicKeyResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationRequest extends $tea.Model {
  configuration?: DeleteRenderingInstanceConfigurationRequestConfiguration[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationShrinkRequest extends $tea.Model {
  configurationShrink?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationResponseBody extends $tea.Model {
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

export class DeleteRenderingInstanceConfigurationResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsPullStreamInfoConfigRequest extends $tea.Model {
  appName?: string;
  domainName?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVsStreamsNotifyUrlConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatResponseBody extends $tea.Model {
  groupLimit?: number;
  groupNum?: number;
  id?: string;
  requestId?: string;
  templateLimit?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountStatResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $tea.Model {
  clusterId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $tea.Model {
  clusterId?: string;
  description?: string;
  internalPorts?: DescribeClusterResponseBodyInternalPorts[];
  maintainTime?: string;
  name?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      internalPorts: 'InternalPorts',
      maintainTime: 'MaintainTime',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      internalPorts: { 'type': 'array', 'itemType': DescribeClusterResponseBodyInternalPorts },
      maintainTime: 'string',
      name: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesRequest extends $tea.Model {
  clusterId?: string;
  description?: string;
  edgeNodeName?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  platform?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      edgeNodeName: 'EdgeNodeName',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      platform: 'Platform',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      edgeNodeName: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      platform: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponseBody extends $tea.Model {
  devices?: DescribeClusterDevicesResponseBodyDevices[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeClusterDevicesResponseBodyDevices },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBody extends $tea.Model {
  clusters?: DescribeClustersResponseBodyClusters[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClusters },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerInstanceIdRequest extends $tea.Model {
  nodeName?: string;
  ownerId?: number;
  podIndex?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      podIndex: 'PodIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      ownerId: 'number',
      podIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerInstanceIdResponseBody extends $tea.Model {
  instanceDetail?: DescribeContainerInstanceIdResponseBodyInstanceDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetail: 'InstanceDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetail: DescribeContainerInstanceIdResponseBodyInstanceDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerInstanceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContainerInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeContainerInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceRequest extends $tea.Model {
  id?: string;
  includeDirectory?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBody extends $tea.Model {
  alarmMethod?: string;
  autoDirectory?: boolean;
  autoPos?: boolean;
  autoStart?: boolean;
  channelSyncTime?: string;
  createdTime?: string;
  description?: string;
  directory?: DescribeDeviceResponseBodyDirectory;
  directoryId?: string;
  dsn?: string;
  enabled?: boolean;
  gbId?: string;
  groupId?: string;
  id?: string;
  ip?: string;
  latitude?: string;
  longitude?: string;
  name?: string;
  params?: string;
  parentId?: string;
  password?: string;
  port?: number;
  posInterval?: number;
  protocol?: string;
  registeredTime?: string;
  requestId?: string;
  stats?: DescribeDeviceResponseBodyStats;
  status?: string;
  type?: string;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
  pageNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBody extends $tea.Model {
  channels?: DescribeDeviceChannelsResponseBodyChannels[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayRequest extends $tea.Model {
  clientIp?: string;
  expire?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayResponseBody extends $tea.Model {
  host?: string;
  port?: number;
  protocol?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceGatewayResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLRequest extends $tea.Model {
  auth?: boolean;
  expire?: number;
  id?: string;
  mode?: string;
  outProtocol?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLResponseBody extends $tea.Model {
  expireTime?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceURLResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  directoryId?: string;
  dsn?: string;
  gbId?: string;
  groupId?: string;
  id?: string;
  includeDirectory?: boolean;
  includeStats?: boolean;
  name?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  parentId?: string;
  sortBy?: string;
  sortDirection?: string;
  status?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $tea.Model {
  devices?: DescribeDevicesResponseBodyDevices[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  groupId?: string;
  noPagination?: boolean;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  parentId?: string;
  sortBy?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  id?: string;
  name?: string;
  parentId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupRequest extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponseBody extends $tea.Model {
  aliasId?: string;
  app?: string;
  callback?: string;
  createdTime?: string;
  description?: string;
  enabled?: boolean;
  gbId?: string;
  gbIp?: string;
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  id?: string;
  inProtocol?: string;
  lazyPull?: boolean;
  name?: string;
  outProtocol?: string;
  playDomain?: string;
  pushDomain?: string;
  region?: string;
  requestId?: string;
  stats?: DescribeGroupResponseBodyStats;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsRequest extends $tea.Model {
  id?: string;
  inProtocol?: string;
  includeStats?: boolean;
  name?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  region?: string;
  sortBy?: string;
  sortDirection?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $tea.Model {
  groups?: DescribeGroupsResponseBodyGroups[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformResponseBody extends $tea.Model {
  autoStart?: boolean;
  clientAuth?: boolean;
  clientGbId?: string;
  clientIp?: string;
  clientPassword?: string;
  clientPort?: number;
  clientUsername?: string;
  createdTime?: string;
  description?: string;
  gbId?: string;
  id?: string;
  ip?: string;
  name?: string;
  port?: number;
  protocol?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBody extends $tea.Model {
  devices?: DescribeParentPlatformDevicesResponseBodyDevices[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsRequest extends $tea.Model {
  gbId?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponseBody extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  platforms?: DescribeParentPlatformsResponseBodyPlatforms[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponseBody extends $tea.Model {
  id?: string;
  presets?: DescribePresetsResponseBodyPresets[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishStreamStatusRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishStreamStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePublishStreamStatusResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  id?: string;
  name?: string;
  orderId?: string;
  region?: string;
  registerCode?: string;
  requestId?: string;
  subType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesRequest extends $tea.Model {
  groupId?: string;
  id?: string;
  name?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
  subType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponseBody extends $tea.Model {
  devices?: DescribePurchasedDevicesResponseBodyDevices[];
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsRequest extends $tea.Model {
  endTime?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  privateBucket?: boolean;
  sortBy?: string;
  sortDirection?: string;
  startTime?: string;
  streamId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBody extends $tea.Model {
  nextStartTime?: string;
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  records?: DescribeRecordsResponseBodyRecords[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBody extends $tea.Model {
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  creationTime?: string;
  hostname?: string;
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  renderingInstanceId?: string;
  renderingStatus?: DescribeRenderingInstanceResponseBodyRenderingStatus;
  requestId?: string;
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      hostname: 'Hostname',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      renderingStatus: 'RenderingStatus',
      requestId: 'RequestId',
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
      renderingStatus: DescribeRenderingInstanceResponseBodyRenderingStatus,
      requestId: 'string',
      systemInfo: DescribeRenderingInstanceResponseBodySystemInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationRequest extends $tea.Model {
  configuration?: DescribeRenderingInstanceConfigurationRequestConfiguration[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationShrinkRequest extends $tea.Model {
  configurationShrink?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBody extends $tea.Model {
  configuration?: DescribeRenderingInstanceConfigurationResponseBodyConfiguration[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamResponseBody extends $tea.Model {
  app?: string;
  createdTime?: string;
  deviceId?: string;
  enabled?: boolean;
  groupId?: string;
  height?: number;
  id?: string;
  name?: string;
  playDomain?: string;
  protocol?: string;
  pushDomain?: string;
  requestId?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLRequest extends $tea.Model {
  auth?: boolean;
  authKey?: string;
  endTime?: number;
  expire?: number;
  id?: string;
  outProtocol?: string;
  ownerId?: number;
  startTime?: number;
  transcode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLResponseBody extends $tea.Model {
  expireTime?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamURLResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListRequest extends $tea.Model {
  endTime?: number;
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponseBody extends $tea.Model {
  records?: DescribeStreamVodListResponseBodyRecords[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamVodListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsRequest extends $tea.Model {
  app?: string;
  deviceId?: string;
  domain?: string;
  groupId?: string;
  id?: string;
  name?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  parentId?: string;
  sortBy?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBody extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  streams?: DescribeStreamsResponseBodyStreams[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponseBody extends $tea.Model {
  callback?: string;
  createdTime?: string;
  description?: string;
  fileFormat?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  id?: string;
  interval?: number;
  jpgOnDemand?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  mp4?: string;
  name?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  region?: string;
  requestId?: string;
  retention?: number;
  transConfigs?: DescribeTemplateResponseBodyTransConfigs[];
  trigger?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesRequest extends $tea.Model {
  id?: string;
  instanceId?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $tea.Model {
  pageCount?: number;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  templates?: DescribeTemplatesResponseBodyTemplates[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDevicesRequest extends $tea.Model {
  ensInstanceIds?: string;
  ownerId?: number;
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      ensInstanceIds: 'EnsInstanceIds',
      ownerId: 'OwnerId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensInstanceIds: 'string',
      ownerId: 'number',
      serverName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDevicesResponseBody extends $tea.Model {
  list?: DescribeUserDevicesResponseBodyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeUserDevicesResponseBodyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLRequest extends $tea.Model {
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLResponseBody extends $tea.Model {
  outProtocol?: string;
  port?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailResponseBody extends $tea.Model {
  cert?: string;
  certId?: number;
  certName?: string;
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateDetailResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBody extends $tea.Model {
  certificateListModel?: DescribeVsCertificateListResponseBodyCertificateListModel;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataRequest extends $tea.Model {
  endTime?: string;
  groupId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponseBody extends $tea.Model {
  devicesDataPerInterval?: DescribeVsDevicesDataResponseBodyDevicesDataPerInterval;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeVsDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainBpsDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainCertificateInfoRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsRequest extends $tea.Model {
  domainName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBody extends $tea.Model {
  domainConfig?: DescribeVsDomainDetailResponseBodyDomainConfig;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pvDataInterval?: DescribeVsDomainPvDataResponseBodyPvDataInterval;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  pvUvDataInfos?: DescribeVsDomainPvUvDataResponseBodyPvUvDataInfos;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvUvDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  region?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponseBody extends $tea.Model {
  recordDataPerInterval?: DescribeVsDomainRecordDataResponseBodyRecordDataPerInterval;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRecordDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainRegionDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  reqBpsDataPerInterval?: DescribeVsDomainReqBpsDataResponseBodyReqBpsDataPerInterval;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqBpsDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  reqTrafficDataPerInterval?: DescribeVsDomainReqTrafficDataResponseBodyReqTrafficDataPerInterval;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainReqTrafficDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainSnapshotDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainTrafficDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainUvDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponseBody extends $tea.Model {
  liveAppRecordList?: DescribeVsPullStreamInfoConfigResponseBodyLiveAppRecordList;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamInfoConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponseBody extends $tea.Model {
  liveStreamsNotifyConfig?: DescribeVsStreamsNotifyUrlConfigResponseBodyLiveStreamsNotifyConfig;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsNotifyUrlConfigResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListRequest extends $tea.Model {
  appName?: string;
  domainName?: string;
  endTime?: string;
  orderBy?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  queryType?: string;
  startTime?: string;
  streamName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBody extends $tea.Model {
  onlineInfo?: DescribeVsStreamsOnlineListResponseBodyOnlineInfo;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  totalNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListRequest extends $tea.Model {
  appName?: string;
  domainName?: string;
  endTime?: string;
  orderBy?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  queryType?: string;
  startTime?: string;
  streamName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponseBody extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  publishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfo;
  requestId?: string;
  totalNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsPublishListResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowRequest extends $tea.Model {
  endTime?: string;
  limit?: number;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponseBody extends $tea.Model {
  domainCount?: number;
  domainOnlineCount?: number;
  endTime?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsTopDomainsByFlowResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataRequest extends $tea.Model {
  domainName?: string;
  domainSwitch?: string;
  endTime?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponseBody extends $tea.Model {
  describeVsUpPeakPublishStreamDatas?: DescribeVsUpPeakPublishStreamDataResponseBodyDescribeVsUpPeakPublishStreamDatas;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUpPeakPublishStreamDataResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsVerifyContentRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsVerifyContentResponseBody extends $tea.Model {
  content?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsVerifyContentResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForbidVsStreamRequest extends $tea.Model {
  appName?: string;
  controlStreamAction?: string;
  domainName?: string;
  liveStreamType?: string;
  oneshot?: string;
  ownerId?: number;
  resumeTime?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderingInstanceStreamingInfoRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderingInstanceStreamingInfoResponseBody extends $tea.Model {
  flowId?: string;
  gateway?: string;
  hostname?: string;
  port?: string;
  renderingInstanceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRenderingInstanceStreamingInfoResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GotoPresetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAppRequest extends $tea.Model {
  appId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAppResponseBody extends $tea.Model {
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

export class InstallCloudAppResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponseBody extends $tea.Model {
  installationInfos?: ListCloudAppInstallationsResponseBodyInstallationInfos[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppInstallationsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  pageNumber?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponseBody extends $tea.Model {
  cloudApps?: ListCloudAppsResponseBodyCloudApps[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesRequest extends $tea.Model {
  fileId?: string;
  fileName?: string;
  pageNumber?: number;
  pageSize?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pushStatuses?: ListFilePushStatusesResponseBodyPushStatuses[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  fileId?: string;
  fileName?: string;
  pageNumber?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
  files?: ListFilesResponseBodyFiles[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysRequest extends $tea.Model {
  keyGroup?: string;
  keyName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyGroup: 'string',
      keyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  publicKeys?: ListPublicKeysResponseBodyPublicKeys[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  renderingInstanceId?: string;
  renderingSpec?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponseBody extends $tea.Model {
  renderingInstances?: ListRenderingInstancesResponseBodyRenderingInstances[];
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginRequest extends $tea.Model {
  actionName?: string;
  keyGroup?: string;
  keyName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponseBody extends $tea.Model {
  loginInfo?: ManageLoginResponseBodyLoginInfo;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceRequest extends $tea.Model {
  alarmMethod?: string;
  autoDirectory?: boolean;
  autoPos?: boolean;
  autoStart?: boolean;
  description?: string;
  directoryId?: string;
  gbId?: string;
  groupId?: string;
  id?: string;
  ip?: string;
  latitude?: string;
  longitude?: string;
  name?: string;
  ownerId?: number;
  params?: string;
  parentId?: string;
  password?: string;
  port?: number;
  posInterval?: number;
  type?: string;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceAlarmRequest extends $tea.Model {
  alarmId?: string;
  channelId?: number;
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceCaptureRequest extends $tea.Model {
  id?: string;
  image?: number;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceChannelsRequest extends $tea.Model {
  channels?: string;
  deviceStatus?: string;
  dsn?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryRequest extends $tea.Model {
  description?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDirectoryResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupRequest extends $tea.Model {
  callback?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  inProtocol?: string;
  lazyPull?: boolean;
  name?: string;
  outProtocol?: string;
  ownerId?: number;
  playDomain?: string;
  pushDomain?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformRequest extends $tea.Model {
  autoStart?: boolean;
  clientAuth?: boolean;
  clientPassword?: string;
  clientUsername?: string;
  description?: string;
  gbId?: string;
  id?: string;
  ip?: string;
  name?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParentPlatformResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRenderingInstanceBandwidthRequest extends $tea.Model {
  maxEgressBandwidth?: number;
  maxIngressBandwidth?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRenderingInstanceBandwidthResponseBody extends $tea.Model {
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

export class ModifyRenderingInstanceBandwidthResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateRequest extends $tea.Model {
  callback?: string;
  description?: string;
  fileFormat?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  id?: string;
  interval?: number;
  jpgOnDemand?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  mp4?: string;
  name?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  ownerId?: number;
  region?: string;
  retention?: number;
  transConfigsJSON?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVsServiceResponseBody extends $tea.Model {
  orderId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVsServiceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFileRequest extends $tea.Model {
  fileId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFileResponseBody extends $tea.Model {
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

export class PushFileResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootRenderingInstanceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootRenderingInstanceResponseBody extends $tea.Model {
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

export class RebootRenderingInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseRenderingInstanceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseRenderingInstanceResponseBody extends $tea.Model {
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

export class ReleaseRenderingInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewRenderingInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  period?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewRenderingInstanceResponseBody extends $tea.Model {
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

export class RenewRenderingInstanceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeVsStreamRequest extends $tea.Model {
  appName?: string;
  controlStreamAction?: string;
  domainName?: string;
  liveStreamType?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRenderingInstanceCommandsRequest extends $tea.Model {
  commands?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRenderingInstanceCommandsResponseBody extends $tea.Model {
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendRenderingInstanceCommandsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPresetResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsDomainCertificateRequest extends $tea.Model {
  certName?: string;
  certType?: string;
  domainName?: string;
  forceSet?: string;
  ownerId?: number;
  region?: string;
  SSLPri?: string;
  SSLProtocol?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetVsStreamsNotifyUrlConfigRequest extends $tea.Model {
  authKey?: string;
  authType?: string;
  domainName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartParentPlatformResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPublishStreamRequest extends $tea.Model {
  instanceId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPublishStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPublishStreamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordStreamRequest extends $tea.Model {
  app?: string;
  id?: string;
  name?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamRequest extends $tea.Model {
  endTime?: number;
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamResponseBody extends $tea.Model {
  id?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartStreamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTransferStreamRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
  transcode?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustRequest extends $tea.Model {
  focus?: boolean;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdjustResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
  pan?: boolean;
  tilt?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMoveResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPublishStreamRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPublishStreamResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPublishStreamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordStreamRequest extends $tea.Model {
  app?: string;
  id?: string;
  name?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamRequest extends $tea.Model {
  id?: string;
  name?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStreamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTransferStreamRequest extends $tea.Model {
  id?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCatalogsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDirectoryRequest extends $tea.Model {
  deviceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindParentPlatformDeviceRequest extends $tea.Model {
  deviceId?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPurchasedDeviceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateRequest extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  ownerId?: number;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponseBody extends $tea.Model {
  instanceId?: string;
  instanceType?: string;
  requestId?: string;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTemplateResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallCloudAppRequest extends $tea.Model {
  appId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallCloudAppResponseBody extends $tea.Model {
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

export class UninstallCloudAppResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceResponseBody extends $tea.Model {
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockDeviceResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudAppInfoRequest extends $tea.Model {
  appId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudAppInfoResponseBody extends $tea.Model {
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

export class UpdateCloudAppInfoResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequest extends $tea.Model {
  clusterId?: string;
  description?: string;
  effectiveTime?: string;
  internalPorts?: string;
  maintainTime?: string;
  name?: string;
  ownerId?: number;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      effectiveTime: 'EffectiveTime',
      internalPorts: 'InternalPorts',
      maintainTime: 'MaintainTime',
      name: 'Name',
      ownerId: 'OwnerId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      effectiveTime: 'string',
      internalPorts: 'string',
      maintainTime: 'string',
      name: 'string',
      ownerId: 'number',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $tea.Model {
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

export class UpdateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileInfoRequest extends $tea.Model {
  description?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileInfoResponseBody extends $tea.Model {
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

export class UpdateFileInfoResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationRequest extends $tea.Model {
  configuration?: UpdateRenderingInstanceConfigurationRequestConfiguration[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationShrinkRequest extends $tea.Model {
  configurationShrink?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationResponseBody extends $tea.Model {
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

export class UpdateRenderingInstanceConfigurationResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVsPullStreamInfoConfigRequest extends $tea.Model {
  always?: string;
  appName?: string;
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  sourceUrl?: string;
  startTime?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCloudAppRequest extends $tea.Model {
  appName?: string;
  appVersion?: string;
  description?: string;
  downloadUrl?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCloudAppResponseBody extends $tea.Model {
  appId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCloudAppResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileRequest extends $tea.Model {
  description?: string;
  fileName?: string;
  md5?: string;
  originUrl?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBody extends $tea.Model {
  fileId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPublicKeyRequest extends $tea.Model {
  content?: string;
  description?: string;
  keyGroup?: string;
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPublicKeyResponseBody extends $tea.Model {
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

export class UploadPublicKeyResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVsDomainOwnerRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVsDomainOwnerResponseBody extends $tea.Model {
  content?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyVsDomainOwnerResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDirectoriesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  directoryId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindParentPlatformDevicesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  error?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindPurchasedDevicesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  error?: string;
  groupId?: string;
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
  channels?: BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels;
  count?: number;
  detail?: string;
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
  channels?: BatchResumeVsStreamResponseBodyResumeResultResumeResultInfoChannels;
  count?: number;
  detail?: string;
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
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDevicesResponseBodyResults extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartStreamsResponseBodyResults extends $tea.Model {
  error?: string;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponseBodyResultsStreams extends $tea.Model {
  error?: string;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDevicesResponseBodyResults extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopStreamsResponseBodyResults extends $tea.Model {
  error?: string;
  id?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDirectoriesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  directoryId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindParentPlatformDevicesResponseBodyResults extends $tea.Model {
  deviceId?: string;
  error?: string;
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
  instanceId?: string;
  instanceType?: string;
  templateId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingInstanceRequestClientInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationRequestConfiguration extends $tea.Model {
  attributeNames?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyInternalPorts extends $tea.Model {
  ipProtocol?: string;
  platform?: string;
  port?: string[];
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      platform: 'Platform',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      platform: 'string',
      port: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponseBodyDevicesIpInfos extends $tea.Model {
  externalIp?: string;
  externalPort?: string;
  ISP?: string;
  internalIp?: string;
  internalPort?: string;
  ipProtocol?: string;
  natType?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      ISP: 'ISP',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      natType: 'NatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      ISP: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      natType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponseBodyDevicesPodInfosNetwork extends $tea.Model {
  containerPorts?: string;
  externalIp?: string;
  externalIsp?: string;
  externalPorts?: string;
  outgoingIp?: string;
  outgoingIsp?: string;
  static names(): { [key: string]: string } {
    return {
      containerPorts: 'ContainerPorts',
      externalIp: 'ExternalIp',
      externalIsp: 'ExternalIsp',
      externalPorts: 'ExternalPorts',
      outgoingIp: 'OutgoingIp',
      outgoingIsp: 'OutgoingIsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerPorts: 'string',
      externalIp: 'string',
      externalIsp: 'string',
      externalPorts: 'string',
      outgoingIp: 'string',
      outgoingIsp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponseBodyDevicesPodInfos extends $tea.Model {
  network?: DescribeClusterDevicesResponseBodyDevicesPodInfosNetwork[];
  podId?: string;
  podIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      podId: 'PodId',
      podIp: 'PodIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeClusterDevicesResponseBodyDevicesPodInfosNetwork },
      podId: 'string',
      podIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterDevicesResponseBodyDevices extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  description?: string;
  edgeNodeName?: string;
  hostRom?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  ipInfos?: DescribeClusterDevicesResponseBodyDevicesIpInfos[];
  macAddress?: string;
  period?: number;
  periodUnit?: string;
  platformType?: string;
  podInfos?: DescribeClusterDevicesResponseBodyDevicesPodInfos[];
  server?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      description: 'Description',
      edgeNodeName: 'EdgeNodeName',
      hostRom: 'HostRom',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ipInfos: 'IpInfos',
      macAddress: 'MacAddress',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      platformType: 'PlatformType',
      podInfos: 'PodInfos',
      server: 'Server',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      description: 'string',
      edgeNodeName: 'string',
      hostRom: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ipInfos: { 'type': 'array', 'itemType': DescribeClusterDevicesResponseBodyDevicesIpInfos },
      macAddress: 'string',
      period: 'number',
      periodUnit: 'string',
      platformType: 'string',
      podInfos: { 'type': 'array', 'itemType': DescribeClusterDevicesResponseBodyDevicesPodInfos },
      server: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyClustersInternalPorts extends $tea.Model {
  ipProtocol?: string;
  platform?: string;
  port?: string[];
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      platform: 'Platform',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      platform: 'string',
      port: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersResponseBodyClusters extends $tea.Model {
  clusterId?: string;
  description?: string;
  internalPorts?: DescribeClustersResponseBodyClustersInternalPorts[];
  maintainTime?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      internalPorts: 'InternalPorts',
      maintainTime: 'MaintainTime',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      internalPorts: { 'type': 'array', 'itemType': DescribeClustersResponseBodyClustersInternalPorts },
      maintainTime: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerInstanceIdResponseBodyInstanceDetail extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyDirectory extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  id?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyStats extends $tea.Model {
  channelNum?: number;
  failedNum?: number;
  offlineNum?: number;
  onlineNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBodyChannels extends $tea.Model {
  channelId?: number;
  deviceId?: string;
  deviceStatus?: string;
  gbId?: string;
  name?: string;
  params?: string;
  streamId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesDirectory extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  id?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevicesStats extends $tea.Model {
  channelNum?: number;
  failedNum?: number;
  offlineNum?: number;
  onlineNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevices extends $tea.Model {
  alarmMethod?: string;
  autoDirectory?: boolean;
  autoPos?: boolean;
  autoStart?: boolean;
  channelSyncTime?: string;
  createdTime?: string;
  description?: string;
  directory?: DescribeDevicesResponseBodyDevicesDirectory;
  directoryId?: string;
  dsn?: string;
  enabled?: boolean;
  gbId?: string;
  groupId?: string;
  id?: string;
  ip?: string;
  latitude?: string;
  longitude?: string;
  name?: string;
  params?: string;
  parentId?: string;
  password?: string;
  port?: number;
  posInterval?: number;
  protocol?: string;
  registeredTime?: string;
  stats?: DescribeDevicesResponseBodyDevicesStats;
  status?: string;
  type?: string;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  id?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponseBodyStats extends $tea.Model {
  deviceNum?: number;
  iedNum?: number;
  ipcNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroupsStats extends $tea.Model {
  deviceNum?: number;
  iedNum?: number;
  ipcNum?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBodyGroups extends $tea.Model {
  aliasId?: string;
  app?: string;
  callback?: string;
  createdTime?: string;
  description?: string;
  enabled?: boolean;
  gbId?: string;
  gbIp?: string;
  gbPort?: number;
  gbTcpPorts?: string[];
  gbUdpPorts?: string[];
  id?: string;
  inProtocol?: string;
  lazyPull?: boolean;
  name?: string;
  outProtocol?: string;
  playDomain?: string;
  pushDomain?: string;
  region?: string;
  stats?: DescribeGroupsResponseBodyGroupsStats;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformDevicesResponseBodyDevices extends $tea.Model {
  gbId?: string;
  groupId?: string;
  id?: string;
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentPlatformsResponseBodyPlatforms extends $tea.Model {
  autoStart?: boolean;
  clientAuth?: boolean;
  clientGbId?: string;
  clientIp?: string;
  clientPassword?: string;
  clientPort?: number;
  clientUsername?: string;
  createdTime?: string;
  description?: string;
  gbId?: string;
  id?: string;
  ip?: string;
  name?: string;
  port?: number;
  protocol?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePresetsResponseBodyPresets extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurchasedDevicesResponseBodyDevices extends $tea.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  id?: string;
  name?: string;
  orderId?: string;
  region?: string;
  registerCode?: string;
  subType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordsResponseBodyRecords extends $tea.Model {
  endTime?: string;
  fileFormat?: string;
  height?: number;
  id?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossObject?: string;
  startTime?: string;
  streamId?: string;
  templateId?: string;
  type?: string;
  url?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes extends $tea.Model {
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfiguration extends $tea.Model {
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig extends $tea.Model {
  bandwidthStatus?: string;
  maxEgressBandwidth?: number;
  maxIngressBandwidth?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyPortMappings extends $tea.Model {
  externalPort?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyRenderingStatus extends $tea.Model {
  description?: string;
  latestAction?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodySystemInfo extends $tea.Model {
  frequency?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationRequestConfiguration extends $tea.Model {
  attributeNames?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes extends $tea.Model {
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBodyConfiguration extends $tea.Model {
  attributes?: DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes[];
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

export class DescribeStreamsResponseBodyStreams extends $tea.Model {
  app?: string;
  createdTime?: string;
  deviceId?: string;
  enabled?: boolean;
  groupId?: string;
  height?: number;
  id?: string;
  name?: string;
  playDomain?: string;
  protocol?: string;
  pushDomain?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateResponseBodyTransConfigs extends $tea.Model {
  fps?: number;
  gop?: number;
  height?: number;
  id?: string;
  name?: string;
  videoBitrate?: number;
  videoCodec?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplatesTransConfigs extends $tea.Model {
  fps?: number;
  gop?: number;
  height?: number;
  name?: string;
  videoBitrate?: number;
  videoCodec?: string;
  width?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $tea.Model {
  callback?: string;
  createdTime?: string;
  description?: string;
  fileFormat?: string;
  flv?: string;
  hlsM3u8?: string;
  hlsTs?: string;
  id?: string;
  interval?: number;
  jpgOnDemand?: string;
  jpgOverwrite?: string;
  jpgSequence?: string;
  mp4?: string;
  name?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  ossFilePrefix?: string;
  region?: string;
  retention?: number;
  transConfigs?: DescribeTemplatesResponseBodyTemplatesTransConfigs[];
  trigger?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDevicesResponseBodyList extends $tea.Model {
  aliUid?: string;
  edgeNodeName?: string;
  instanceId?: string;
  macAddress?: string;
  matrixId?: string;
  server?: string;
  specification?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      edgeNodeName: 'EdgeNodeName',
      instanceId: 'InstanceId',
      macAddress: 'MacAddress',
      matrixId: 'MatrixId',
      server: 'Server',
      specification: 'Specification',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      edgeNodeName: 'string',
      instanceId: 'string',
      macAddress: 'string',
      matrixId: 'string',
      server: 'string',
      specification: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  certId?: number;
  certName?: string;
  common?: string;
  fingerprint?: string;
  issuer?: string;
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

export class DescribeVsDevicesDataResponseBodyDevicesDataPerIntervalDataModule extends $tea.Model {
  devicesDataValue?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDevicesDataResponseBodyDevicesDataPerInterval extends $tea.Model {
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
  certDomainName?: string;
  certExpireTime?: string;
  certLife?: string;
  certName?: string;
  certOrg?: string;
  certType?: string;
  domainName?: string;
  SSLPub?: string;
  serverCertificateStatus?: string;
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
  configId?: string;
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  functionName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainDetailResponseBodyDomainConfig extends $tea.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  gmtCreated?: string;
  gmtModified?: string;
  region?: string;
  SSLProtocol?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
  timeStamp?: string;
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
  recordValue?: string;
  streamCountValue?: string;
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
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  bytesProportion?: string;
  proportion?: string;
  qps?: string;
  region?: string;
  regionEname?: string;
  reqErrRate?: string;
  totalBytes?: string;
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
  reqBpsValue?: string;
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
  snapshotValue?: string;
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
  timeStamp?: string;
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
  timeStamp?: string;
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
  appName?: string;
  domainName?: string;
  endTime?: string;
  sourceUrl?: string;
  startTime?: string;
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
  authKey?: string;
  authType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $tea.Model {
  appName?: string;
  domainName?: string;
  publishDomain?: string;
  publishTime?: string;
  publishType?: string;
  publishUrl?: string;
  streamName?: string;
  transcodeId?: string;
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
  appName?: string;
  clientAddr?: string;
  domainName?: string;
  edgeNodeAddr?: string;
  publishDomain?: string;
  publishTime?: string;
  publishType?: string;
  publishUrl?: string;
  stopTime?: string;
  streamName?: string;
  streamUrl?: string;
  transcodeId?: string;
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
  domainName?: string;
  maxBps?: number;
  maxBpsTime?: string;
  rank?: number;
  totalAccess?: number;
  totalTraffic?: string;
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
  bandWidth?: string;
  peakTime?: string;
  publishStreamNum?: number;
  queryTime?: string;
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

export class ListCloudAppInstallationsResponseBodyInstallationInfos extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  installationTime?: string;
  renderingInstanceId?: string;
  status?: string;
  statusDescription?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAppsResponseBodyCloudApps extends $tea.Model {
  appId?: string;
  appName?: string;
  appVersion?: string;
  description?: string;
  status?: string;
  statusDescription?: string;
  updateTime?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilePushStatusesResponseBodyPushStatuses extends $tea.Model {
  fileId?: string;
  fileName?: string;
  pushTime?: string;
  renderingInstanceId?: string;
  status?: string;
  statusDescription?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyFiles extends $tea.Model {
  description?: string;
  fileId?: string;
  fileName?: string;
  status?: string;
  statusDescription?: string;
  targetPath?: string;
  updateTime?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponseBodyPublicKeys extends $tea.Model {
  content?: string;
  description?: string;
  keyGroup?: string;
  keyName?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponseBodyRenderingInstances extends $tea.Model {
  creationTime?: string;
  renderingInstanceId?: string;
  renderingSpec?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageLoginResponseBodyLoginInfo extends $tea.Model {
  loginHostname?: string;
  loginPort?: number;
  static names(): { [key: string]: string } {
    return {
      loginHostname: 'LoginHostname',
      loginPort: 'LoginPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginHostname: 'string',
      loginPort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationRequestConfigurationAttributes extends $tea.Model {
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceConfigurationRequestConfiguration extends $tea.Model {
  attributes?: UpdateRenderingInstanceConfigurationRequestConfigurationAttributes[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
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

  /**
   * @param request AddVsPullStreamInfoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfigWithOptions(request: AddVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.always)) {
      query["Always"] = request.always;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AddVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new AddVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request AddVsPullStreamInfoConfigRequest
   * @return AddVsPullStreamInfoConfigResponse
   */
  async addVsPullStreamInfoConfig(request: AddVsPullStreamInfoConfigRequest): Promise<AddVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request BatchBindDirectoriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchBindDirectoriesResponse
   */
  async batchBindDirectoriesWithOptions(request: BatchBindDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchBindDirectoriesResponse>(await this.callApi(params, req, runtime), new BatchBindDirectoriesResponse({}));
  }

  /**
   * @param request BatchBindDirectoriesRequest
   * @return BatchBindDirectoriesResponse
   */
  async batchBindDirectories(request: BatchBindDirectoriesRequest): Promise<BatchBindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request BatchBindParentPlatformDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevicesWithOptions(request: BatchBindParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchBindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new BatchBindParentPlatformDevicesResponse({}));
  }

  /**
   * @param request BatchBindParentPlatformDevicesRequest
   * @return BatchBindParentPlatformDevicesResponse
   */
  async batchBindParentPlatformDevices(request: BatchBindParentPlatformDevicesRequest): Promise<BatchBindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchBindPurchasedDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevicesWithOptions(request: BatchBindPurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindPurchasedDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchBindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new BatchBindPurchasedDevicesResponse({}));
  }

  /**
   * @param request BatchBindPurchasedDevicesRequest
   * @return BatchBindPurchasedDevicesResponse
   */
  async batchBindPurchasedDevices(request: BatchBindPurchasedDevicesRequest): Promise<BatchBindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchBindTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchBindTemplateResponse
   */
  async batchBindTemplateWithOptions(request: BatchBindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchBindTemplateResponse>(await this.callApi(params, req, runtime), new BatchBindTemplateResponse({}));
  }

  /**
   * @param request BatchBindTemplateRequest
   * @return BatchBindTemplateResponse
   */
  async batchBindTemplate(request: BatchBindTemplateRequest): Promise<BatchBindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request BatchBindTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchBindTemplatesResponse
   */
  async batchBindTemplatesWithOptions(request: BatchBindTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchBindTemplatesResponse>(await this.callApi(params, req, runtime), new BatchBindTemplatesResponse({}));
  }

  /**
   * @param request BatchBindTemplatesRequest
   * @return BatchBindTemplatesResponse
   */
  async batchBindTemplates(request: BatchBindTemplatesRequest): Promise<BatchBindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request BatchDeleteDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteDevicesResponse
   */
  async batchDeleteDevicesWithOptions(request: BatchDeleteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchDeleteDevicesResponse>(await this.callApi(params, req, runtime), new BatchDeleteDevicesResponse({}));
  }

  /**
   * @param request BatchDeleteDevicesRequest
   * @return BatchDeleteDevicesResponse
   */
  async batchDeleteDevices(request: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchDeleteVsDomainConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigsWithOptions(request: BatchDeleteVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteVsDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchDeleteVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchDeleteVsDomainConfigsResponse({}));
  }

  /**
   * @param request BatchDeleteVsDomainConfigsRequest
   * @return BatchDeleteVsDomainConfigsResponse
   */
  async batchDeleteVsDomainConfigs(request: BatchDeleteVsDomainConfigsRequest): Promise<BatchDeleteVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request BatchForbidVsStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchForbidVsStreamResponse
   */
  async batchForbidVsStreamWithOptions(request: BatchForbidVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<BatchForbidVsStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!Util.isUnset(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchForbidVsStreamResponse>(await this.callApi(params, req, runtime), new BatchForbidVsStreamResponse({}));
  }

  /**
   * @param request BatchForbidVsStreamRequest
   * @return BatchForbidVsStreamResponse
   */
  async batchForbidVsStream(request: BatchForbidVsStreamRequest): Promise<BatchForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchForbidVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request BatchResumeVsStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchResumeVsStreamResponse
   */
  async batchResumeVsStreamWithOptions(request: BatchResumeVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<BatchResumeVsStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchResumeVsStreamResponse>(await this.callApi(params, req, runtime), new BatchResumeVsStreamResponse({}));
  }

  /**
   * @param request BatchResumeVsStreamRequest
   * @return BatchResumeVsStreamResponse
   */
  async batchResumeVsStream(request: BatchResumeVsStreamRequest): Promise<BatchResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchResumeVsStreamWithOptions(request, runtime);
  }

  /**
   * @param request BatchSetVsDomainConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigsWithOptions(request: BatchSetVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetVsDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.functions)) {
      query["Functions"] = request.functions;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchSetVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new BatchSetVsDomainConfigsResponse({}));
  }

  /**
   * @param request BatchSetVsDomainConfigsRequest
   * @return BatchSetVsDomainConfigsResponse
   */
  async batchSetVsDomainConfigs(request: BatchSetVsDomainConfigsRequest): Promise<BatchSetVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request BatchStartDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStartDevicesResponse
   */
  async batchStartDevicesWithOptions(request: BatchStartDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchStartDevicesResponse>(await this.callApi(params, req, runtime), new BatchStartDevicesResponse({}));
  }

  /**
   * @param request BatchStartDevicesRequest
   * @return BatchStartDevicesResponse
   */
  async batchStartDevices(request: BatchStartDevicesRequest): Promise<BatchStartDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchStartStreamsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStartStreamsResponse
   */
  async batchStartStreamsWithOptions(request: BatchStartStreamsRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartStreamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchStartStreamsResponse>(await this.callApi(params, req, runtime), new BatchStartStreamsResponse({}));
  }

  /**
   * @param request BatchStartStreamsRequest
   * @return BatchStartStreamsResponse
   */
  async batchStartStreams(request: BatchStartStreamsRequest): Promise<BatchStartStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartStreamsWithOptions(request, runtime);
  }

  /**
   * @param request BatchStopDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStopDevicesResponse
   */
  async batchStopDevicesWithOptions(request: BatchStopDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchStopDevicesResponse>(await this.callApi(params, req, runtime), new BatchStopDevicesResponse({}));
  }

  /**
   * @param request BatchStopDevicesRequest
   * @return BatchStopDevicesResponse
   */
  async batchStopDevices(request: BatchStopDevicesRequest): Promise<BatchStopDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchStopStreamsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchStopStreamsResponse
   */
  async batchStopStreamsWithOptions(request: BatchStopStreamsRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopStreamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchStopStreamsResponse>(await this.callApi(params, req, runtime), new BatchStopStreamsResponse({}));
  }

  /**
   * @param request BatchStopStreamsRequest
   * @return BatchStopStreamsResponse
   */
  async batchStopStreams(request: BatchStopStreamsRequest): Promise<BatchStopStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopStreamsWithOptions(request, runtime);
  }

  /**
   * @param request BatchUnbindDirectoriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectoriesWithOptions(request: BatchUnbindDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchUnbindDirectoriesResponse>(await this.callApi(params, req, runtime), new BatchUnbindDirectoriesResponse({}));
  }

  /**
   * @param request BatchUnbindDirectoriesRequest
   * @return BatchUnbindDirectoriesResponse
   */
  async batchUnbindDirectories(request: BatchUnbindDirectoriesRequest): Promise<BatchUnbindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request BatchUnbindParentPlatformDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevicesWithOptions(request: BatchUnbindParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchUnbindParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new BatchUnbindParentPlatformDevicesResponse({}));
  }

  /**
   * @param request BatchUnbindParentPlatformDevicesRequest
   * @return BatchUnbindParentPlatformDevicesResponse
   */
  async batchUnbindParentPlatformDevices(request: BatchUnbindParentPlatformDevicesRequest): Promise<BatchUnbindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchUnbindPurchasedDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevicesWithOptions(request: BatchUnbindPurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindPurchasedDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchUnbindPurchasedDevicesResponse>(await this.callApi(params, req, runtime), new BatchUnbindPurchasedDevicesResponse({}));
  }

  /**
   * @param request BatchUnbindPurchasedDevicesRequest
   * @return BatchUnbindPurchasedDevicesResponse
   */
  async batchUnbindPurchasedDevices(request: BatchUnbindPurchasedDevicesRequest): Promise<BatchUnbindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindPurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request BatchUnbindTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUnbindTemplateResponse
   */
  async batchUnbindTemplateWithOptions(request: BatchUnbindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchUnbindTemplateResponse>(await this.callApi(params, req, runtime), new BatchUnbindTemplateResponse({}));
  }

  /**
   * @param request BatchUnbindTemplateRequest
   * @return BatchUnbindTemplateResponse
   */
  async batchUnbindTemplate(request: BatchUnbindTemplateRequest): Promise<BatchUnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request BatchUnbindTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplatesWithOptions(request: BatchUnbindTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchUnbindTemplatesResponse>(await this.callApi(params, req, runtime), new BatchUnbindTemplatesResponse({}));
  }

  /**
   * @param request BatchUnbindTemplatesRequest
   * @return BatchUnbindTemplatesResponse
   */
  async batchUnbindTemplates(request: BatchUnbindTemplatesRequest): Promise<BatchUnbindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request BindDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindDirectoryResponse
   */
  async bindDirectoryWithOptions(request: BindDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<BindDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BindDirectoryResponse>(await this.callApi(params, req, runtime), new BindDirectoryResponse({}));
  }

  /**
   * @param request BindDirectoryRequest
   * @return BindDirectoryResponse
   */
  async bindDirectory(request: BindDirectoryRequest): Promise<BindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request BindParentPlatformDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDeviceWithOptions(request: BindParentPlatformDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindParentPlatformDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new BindParentPlatformDeviceResponse({}));
  }

  /**
   * @param request BindParentPlatformDeviceRequest
   * @return BindParentPlatformDeviceResponse
   */
  async bindParentPlatformDevice(request: BindParentPlatformDeviceRequest): Promise<BindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request BindPurchasedDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindPurchasedDeviceResponse
   */
  async bindPurchasedDeviceWithOptions(request: BindPurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindPurchasedDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new BindPurchasedDeviceResponse({}));
  }

  /**
   * @param request BindPurchasedDeviceRequest
   * @return BindPurchasedDeviceResponse
   */
  async bindPurchasedDevice(request: BindPurchasedDeviceRequest): Promise<BindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request BindTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BindTemplateResponse
   */
  async bindTemplateWithOptions(request: BindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<BindTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyAll)) {
      query["ApplyAll"] = request.applyAll;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replace)) {
      query["Replace"] = request.replace;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BindTemplateResponse>(await this.callApi(params, req, runtime), new BindTemplateResponse({}));
  }

  /**
   * @param request BindTemplateRequest
   * @return BindTemplateResponse
   */
  async bindTemplate(request: BindTemplateRequest): Promise<BindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTemplateWithOptions(request, runtime);
  }

  /**
   * @param request ContinuousAdjustRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ContinuousAdjustResponse
   */
  async continuousAdjustWithOptions(request: ContinuousAdjustRequest, runtime: $Util.RuntimeOptions): Promise<ContinuousAdjustResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ContinuousAdjustResponse>(await this.callApi(params, req, runtime), new ContinuousAdjustResponse({}));
  }

  /**
   * @param request ContinuousAdjustRequest
   * @return ContinuousAdjustResponse
   */
  async continuousAdjust(request: ContinuousAdjustRequest): Promise<ContinuousAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousAdjustWithOptions(request, runtime);
  }

  /**
   * @param request ContinuousMoveRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ContinuousMoveResponse
   */
  async continuousMoveWithOptions(request: ContinuousMoveRequest, runtime: $Util.RuntimeOptions): Promise<ContinuousMoveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!Util.isUnset(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!Util.isUnset(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ContinuousMoveResponse>(await this.callApi(params, req, runtime), new ContinuousMoveResponse({}));
  }

  /**
   * @param request ContinuousMoveRequest
   * @return ContinuousMoveResponse
   */
  async continuousMove(request: ContinuousMoveRequest): Promise<ContinuousMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousMoveWithOptions(request, runtime);
  }

  /**
   * @param request CreateClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.internalPorts)) {
      query["InternalPorts"] = request.internalPorts;
    }

    if (!Util.isUnset(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * @param request CreateClusterRequest
   * @return CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * @param request CreateDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDeviceResponse
   */
  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!Util.isUnset(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!Util.isUnset(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDeviceResponse>(await this.callApi(params, req, runtime), new CreateDeviceResponse({}));
  }

  /**
   * @param request CreateDeviceRequest
   * @return CreateDeviceResponse
   */
  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  /**
   * @param request CreateDeviceAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDeviceAlarmResponse
   */
  async createDeviceAlarmWithOptions(request: CreateDeviceAlarmRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarm)) {
      query["Alarm"] = request.alarm;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subAlarm)) {
      query["SubAlarm"] = request.subAlarm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDeviceAlarmResponse>(await this.callApi(params, req, runtime), new CreateDeviceAlarmResponse({}));
  }

  /**
   * @param request CreateDeviceAlarmRequest
   * @return CreateDeviceAlarmResponse
   */
  async createDeviceAlarm(request: CreateDeviceAlarmRequest): Promise<CreateDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request CreateDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDirectoryResponse
   */
  async createDirectoryWithOptions(request: CreateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateDirectoryResponse>(await this.callApi(params, req, runtime), new CreateDirectoryResponse({}));
  }

  /**
   * @param request CreateDirectoryRequest
   * @return CreateDirectoryResponse
   */
  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request CreateGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.app)) {
      query["App"] = request.app;
    }

    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!Util.isUnset(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!Util.isUnset(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * @param request CreateGroupRequest
   * @return CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * @param request CreateParentPlatformRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateParentPlatformResponse
   */
  async createParentPlatformWithOptions(request: CreateParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<CreateParentPlatformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!Util.isUnset(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!Util.isUnset(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateParentPlatformResponse>(await this.callApi(params, req, runtime), new CreateParentPlatformResponse({}));
  }

  /**
   * @param request CreateParentPlatformRequest
   * @return CreateParentPlatformResponse
   */
  async createParentPlatform(request: CreateParentPlatformRequest): Promise<CreateParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParentPlatformWithOptions(request, runtime);
  }

  /**
   * @summary 申请云渲染资源实例
   *
   * @param tmpReq CreateRenderingInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRenderingInstanceResponse
   */
  async createRenderingInstanceWithOptions(tmpReq: CreateRenderingInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRenderingInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRenderingInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clientInfo)) {
      request.clientInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientInfo, "ClientInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.clientInfoShrink)) {
      query["ClientInfo"] = request.clientInfoShrink;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.internetMaxBandwidth)) {
      query["InternetMaxBandwidth"] = request.internetMaxBandwidth;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.renderingSpec)) {
      query["RenderingSpec"] = request.renderingSpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateRenderingInstanceResponse>(await this.callApi(params, req, runtime), new CreateRenderingInstanceResponse({}));
  }

  /**
   * @summary 申请云渲染资源实例
   *
   * @param request CreateRenderingInstanceRequest
   * @return CreateRenderingInstanceResponse
   */
  async createRenderingInstance(request: CreateRenderingInstanceRequest): Promise<CreateRenderingInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @param request CreateStreamSnapshotRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateStreamSnapshotResponse
   */
  async createStreamSnapshotWithOptions(request: CreateStreamSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateStreamSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.location)) {
      query["Location"] = request.location;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateStreamSnapshotResponse>(await this.callApi(params, req, runtime), new CreateStreamSnapshotResponse({}));
  }

  /**
   * @param request CreateStreamSnapshotRequest
   * @return CreateStreamSnapshotResponse
   */
  async createStreamSnapshot(request: CreateStreamSnapshotRequest): Promise<CreateStreamSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamSnapshotWithOptions(request, runtime);
  }

  /**
   * @param request CreateTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTemplateResponse
   */
  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!Util.isUnset(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!Util.isUnset(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!Util.isUnset(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!Util.isUnset(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!Util.isUnset(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!Util.isUnset(request.mp4)) {
      query["Mp4"] = request.mp4;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!Util.isUnset(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!Util.isUnset(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!Util.isUnset(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  /**
   * @param request CreateTemplateRequest
   * @return CreateTemplateResponse
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * @summary 删除云应用
   *
   * @param request DeleteCloudAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCloudAppResponse
   */
  async deleteCloudAppWithOptions(request: DeleteCloudAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCloudAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteCloudAppResponse>(await this.callApi(params, req, runtime), new DeleteCloudAppResponse({}));
  }

  /**
   * @summary 删除云应用
   *
   * @param request DeleteCloudAppRequest
   * @return DeleteCloudAppResponse
   */
  async deleteCloudApp(request: DeleteCloudAppRequest): Promise<DeleteCloudAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request DeleteClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * @param request DeleteClusterRequest
   * @return DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * @param request DeleteDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDeviceResponse
   */
  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDeviceResponse>(await this.callApi(params, req, runtime), new DeleteDeviceResponse({}));
  }

  /**
   * @param request DeleteDeviceRequest
   * @return DeleteDeviceResponse
   */
  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  /**
   * @param request DeleteDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new DeleteDirectoryResponse({}));
  }

  /**
   * @param request DeleteDirectoryRequest
   * @return DeleteDirectoryResponse
   */
  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * @summary 删除文件对象。
   *
   * @param request DeleteFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFileResponse
   */
  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteFileResponse>(await this.callApi(params, req, runtime), new DeleteFileResponse({}));
  }

  /**
   * @summary 删除文件对象。
   *
   * @param request DeleteFileRequest
   * @return DeleteFileResponse
   */
  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request DeleteGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * @param request DeleteGroupRequest
   * @return DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * @param request DeleteParentPlatformRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteParentPlatformResponse
   */
  async deleteParentPlatformWithOptions(request: DeleteParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParentPlatformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteParentPlatformResponse>(await this.callApi(params, req, runtime), new DeleteParentPlatformResponse({}));
  }

  /**
   * @param request DeleteParentPlatformRequest
   * @return DeleteParentPlatformResponse
   */
  async deleteParentPlatform(request: DeleteParentPlatformRequest): Promise<DeleteParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request DeletePresetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePresetResponse
   */
  async deletePresetWithOptions(request: DeletePresetRequest, runtime: $Util.RuntimeOptions): Promise<DeletePresetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeletePresetResponse>(await this.callApi(params, req, runtime), new DeletePresetResponse({}));
  }

  /**
   * @param request DeletePresetRequest
   * @return DeletePresetResponse
   */
  async deletePreset(request: DeletePresetRequest): Promise<DeletePresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePresetWithOptions(request, runtime);
  }

  /**
   * @summary 删除公钥信息
   *
   * @param request DeletePublicKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePublicKeyResponse
   */
  async deletePublicKeyWithOptions(request: DeletePublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeletePublicKeyResponse>(await this.callApi(params, req, runtime), new DeletePublicKeyResponse({}));
  }

  /**
   * @summary 删除公钥信息
   *
   * @param request DeletePublicKeyRequest
   * @return DeletePublicKeyResponse
   */
  async deletePublicKey(request: DeletePublicKeyRequest): Promise<DeletePublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePublicKeyWithOptions(request, runtime);
  }

  /**
   * @summary 删除云渲染实例配置参数
   *
   * @param tmpReq DeleteRenderingInstanceConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfigurationWithOptions(tmpReq: DeleteRenderingInstanceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRenderingInstanceConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteRenderingInstanceConfigurationResponse({}));
  }

  /**
   * @summary 删除云渲染实例配置参数
   *
   * @param request DeleteRenderingInstanceConfigurationRequest
   * @return DeleteRenderingInstanceConfigurationResponse
   */
  async deleteRenderingInstanceConfiguration(request: DeleteRenderingInstanceConfigurationRequest): Promise<DeleteRenderingInstanceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * @param request DeleteTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * @param request DeleteTemplateRequest
   * @return DeleteTemplateResponse
   */
  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * @param request DeleteVsPullStreamInfoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfigWithOptions(request: DeleteVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new DeleteVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request DeleteVsPullStreamInfoConfigRequest
   * @return DeleteVsPullStreamInfoConfigResponse
   */
  async deleteVsPullStreamInfoConfig(request: DeleteVsPullStreamInfoConfigRequest): Promise<DeleteVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request DeleteVsStreamsNotifyUrlConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfigWithOptions(request: DeleteVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new DeleteVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request DeleteVsStreamsNotifyUrlConfigRequest
   * @return DeleteVsStreamsNotifyUrlConfigResponse
   */
  async deleteVsStreamsNotifyUrlConfig(request: DeleteVsStreamsNotifyUrlConfigRequest): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request DescribeAccountStatRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAccountStatResponse
   */
  async describeAccountStatWithOptions(request: DescribeAccountStatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeAccountStatResponse>(await this.callApi(params, req, runtime), new DescribeAccountStatResponse({}));
  }

  /**
   * @param request DescribeAccountStatRequest
   * @return DescribeAccountStatResponse
   */
  async describeAccountStat(request: DescribeAccountStatRequest): Promise<DescribeAccountStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountStatWithOptions(request, runtime);
  }

  /**
   * @param request DescribeClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterResponse
   */
  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCluster",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  /**
   * @param request DescribeClusterRequest
   * @return DescribeClusterResponse
   */
  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * @param request DescribeClusterDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClusterDevicesResponse
   */
  async describeClusterDevicesWithOptions(request: DescribeClusterDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.edgeNodeName)) {
      query["EdgeNodeName"] = request.edgeNodeName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterDevicesResponse>(await this.callApi(params, req, runtime), new DescribeClusterDevicesResponse({}));
  }

  /**
   * @param request DescribeClusterDevicesRequest
   * @return DescribeClusterDevicesResponse
   */
  async describeClusterDevices(request: DescribeClusterDevicesRequest): Promise<DescribeClusterDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeClustersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClustersResponse
   */
  async describeClustersWithOptions(request: DescribeClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusters",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClustersResponse>(await this.callApi(params, req, runtime), new DescribeClustersResponse({}));
  }

  /**
   * @param request DescribeClustersRequest
   * @return DescribeClustersResponse
   */
  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

  /**
   * @param request DescribeContainerInstanceIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeContainerInstanceIdResponse
   */
  async describeContainerInstanceIdWithOptions(request: DescribeContainerInstanceIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerInstanceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.podIndex)) {
      query["PodIndex"] = request.podIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerInstanceId",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerInstanceIdResponse>(await this.callApi(params, req, runtime), new DescribeContainerInstanceIdResponse({}));
  }

  /**
   * @param request DescribeContainerInstanceIdRequest
   * @return DescribeContainerInstanceIdResponse
   */
  async describeContainerInstanceId(request: DescribeContainerInstanceIdRequest): Promise<DescribeContainerInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerInstanceIdWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeviceResponse
   */
  async describeDeviceWithOptions(request: DescribeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!Util.isUnset(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDeviceResponse>(await this.callApi(params, req, runtime), new DescribeDeviceResponse({}));
  }

  /**
   * @param request DescribeDeviceRequest
   * @return DescribeDeviceResponse
   */
  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDeviceChannelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeviceChannelsResponse
   */
  async describeDeviceChannelsWithOptions(request: DescribeDeviceChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDeviceChannelsResponse>(await this.callApi(params, req, runtime), new DescribeDeviceChannelsResponse({}));
  }

  /**
   * @param request DescribeDeviceChannelsRequest
   * @return DescribeDeviceChannelsResponse
   */
  async describeDeviceChannels(request: DescribeDeviceChannelsRequest): Promise<DescribeDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDeviceGatewayRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeviceGatewayResponse
   */
  async describeDeviceGatewayWithOptions(request: DescribeDeviceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDeviceGatewayResponse>(await this.callApi(params, req, runtime), new DescribeDeviceGatewayResponse({}));
  }

  /**
   * @param request DescribeDeviceGatewayRequest
   * @return DescribeDeviceGatewayResponse
   */
  async describeDeviceGateway(request: DescribeDeviceGatewayRequest): Promise<DescribeDeviceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceGatewayWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDeviceURLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeviceURLResponse
   */
  async describeDeviceURLWithOptions(request: DescribeDeviceURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.stream)) {
      query["Stream"] = request.stream;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDeviceURLResponse>(await this.callApi(params, req, runtime), new DescribeDeviceURLResponse({}));
  }

  /**
   * @param request DescribeDeviceURLRequest
   * @return DescribeDeviceURLResponse
   */
  async describeDeviceURL(request: DescribeDeviceURLRequest): Promise<DescribeDeviceURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceURLWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDevicesResponse
   */
  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.includeDirectory)) {
      query["IncludeDirectory"] = request.includeDirectory;
    }

    if (!Util.isUnset(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDevicesResponse>(await this.callApi(params, req, runtime), new DescribeDevicesResponse({}));
  }

  /**
   * @param request DescribeDevicesRequest
   * @return DescribeDevicesResponse
   */
  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDirectoriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.noPagination)) {
      query["NoPagination"] = request.noPagination;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
  }

  /**
   * @param request DescribeDirectoriesRequest
   * @return DescribeDirectoriesResponse
   */
  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDirectoryResponse
   */
  async describeDirectoryWithOptions(request: DescribeDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeDirectoryResponse>(await this.callApi(params, req, runtime), new DescribeDirectoryResponse({}));
  }

  /**
   * @param request DescribeDirectoryRequest
   * @return DescribeDirectoryResponse
   */
  async describeDirectory(request: DescribeDirectoryRequest): Promise<DescribeDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request DescribeGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGroupResponse
   */
  async describeGroupWithOptions(request: DescribeGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeGroupResponse>(await this.callApi(params, req, runtime), new DescribeGroupResponse({}));
  }

  /**
   * @param request DescribeGroupRequest
   * @return DescribeGroupResponse
   */
  async describeGroup(request: DescribeGroupRequest): Promise<DescribeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupWithOptions(request, runtime);
  }

  /**
   * @param request DescribeGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGroupsResponse
   */
  async describeGroupsWithOptions(request: DescribeGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!Util.isUnset(request.includeStats)) {
      query["IncludeStats"] = request.includeStats;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeGroupsResponse>(await this.callApi(params, req, runtime), new DescribeGroupsResponse({}));
  }

  /**
   * @param request DescribeGroupsRequest
   * @return DescribeGroupsResponse
   */
  async describeGroups(request: DescribeGroupsRequest): Promise<DescribeGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeParentPlatformRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParentPlatformResponse
   */
  async describeParentPlatformWithOptions(request: DescribeParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeParentPlatformResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformResponse({}));
  }

  /**
   * @param request DescribeParentPlatformRequest
   * @return DescribeParentPlatformResponse
   */
  async describeParentPlatform(request: DescribeParentPlatformRequest): Promise<DescribeParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request DescribeParentPlatformDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevicesWithOptions(request: DescribeParentPlatformDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeParentPlatformDevicesResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformDevicesResponse({}));
  }

  /**
   * @param request DescribeParentPlatformDevicesRequest
   * @return DescribeParentPlatformDevicesResponse
   */
  async describeParentPlatformDevices(request: DescribeParentPlatformDevicesRequest): Promise<DescribeParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeParentPlatformsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParentPlatformsResponse
   */
  async describeParentPlatformsWithOptions(request: DescribeParentPlatformsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParentPlatformsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeParentPlatformsResponse>(await this.callApi(params, req, runtime), new DescribeParentPlatformsResponse({}));
  }

  /**
   * @param request DescribeParentPlatformsRequest
   * @return DescribeParentPlatformsResponse
   */
  async describeParentPlatforms(request: DescribeParentPlatformsRequest): Promise<DescribeParentPlatformsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformsWithOptions(request, runtime);
  }

  /**
   * @param request DescribePresetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePresetsResponse
   */
  async describePresetsWithOptions(request: DescribePresetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePresetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePresetsResponse>(await this.callApi(params, req, runtime), new DescribePresetsResponse({}));
  }

  /**
   * @param request DescribePresetsRequest
   * @return DescribePresetsResponse
   */
  async describePresets(request: DescribePresetsRequest): Promise<DescribePresetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePresetsWithOptions(request, runtime);
  }

  /**
   * @param request DescribePublishStreamStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatusWithOptions(request: DescribePublishStreamStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribePublishStreamStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePublishStreamStatusResponse>(await this.callApi(params, req, runtime), new DescribePublishStreamStatusResponse({}));
  }

  /**
   * @param request DescribePublishStreamStatusRequest
   * @return DescribePublishStreamStatusResponse
   */
  async describePublishStreamStatus(request: DescribePublishStreamStatusRequest): Promise<DescribePublishStreamStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePublishStreamStatusWithOptions(request, runtime);
  }

  /**
   * @param request DescribePurchasedDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePurchasedDeviceResponse
   */
  async describePurchasedDeviceWithOptions(request: DescribePurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePurchasedDeviceResponse>(await this.callApi(params, req, runtime), new DescribePurchasedDeviceResponse({}));
  }

  /**
   * @param request DescribePurchasedDeviceRequest
   * @return DescribePurchasedDeviceResponse
   */
  async describePurchasedDevice(request: DescribePurchasedDeviceRequest): Promise<DescribePurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request DescribePurchasedDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePurchasedDevicesResponse
   */
  async describePurchasedDevicesWithOptions(request: DescribePurchasedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePurchasedDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribePurchasedDevicesResponse>(await this.callApi(params, req, runtime), new DescribePurchasedDevicesResponse({}));
  }

  /**
   * @param request DescribePurchasedDevicesRequest
   * @return DescribePurchasedDevicesResponse
   */
  async describePurchasedDevices(request: DescribePurchasedDevicesRequest): Promise<DescribePurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRecordsResponse
   */
  async describeRecordsWithOptions(request: DescribeRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateBucket)) {
      query["PrivateBucket"] = request.privateBucket;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamId)) {
      query["StreamId"] = request.streamId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRecordsResponse>(await this.callApi(params, req, runtime), new DescribeRecordsResponse({}));
  }

  /**
   * @param request DescribeRecordsRequest
   * @return DescribeRecordsResponse
   */
  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 查询云渲染实例详细信息。
   *
   * @param request DescribeRenderingInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRenderingInstanceResponse
   */
  async describeRenderingInstanceWithOptions(request: DescribeRenderingInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenderingInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRenderingInstanceResponse>(await this.callApi(params, req, runtime), new DescribeRenderingInstanceResponse({}));
  }

  /**
   * @summary 查询云渲染实例详细信息。
   *
   * @param request DescribeRenderingInstanceRequest
   * @return DescribeRenderingInstanceResponse
   */
  async describeRenderingInstance(request: DescribeRenderingInstanceRequest): Promise<DescribeRenderingInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 查询云渲染实例模块配置参数
   *
   * @param tmpReq DescribeRenderingInstanceConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfigurationWithOptions(tmpReq: DescribeRenderingInstanceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenderingInstanceConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeRenderingInstanceConfigurationResponse({}));
  }

  /**
   * @summary 查询云渲染实例模块配置参数
   *
   * @param request DescribeRenderingInstanceConfigurationRequest
   * @return DescribeRenderingInstanceConfigurationResponse
   */
  async describeRenderingInstanceConfiguration(request: DescribeRenderingInstanceConfigurationRequest): Promise<DescribeRenderingInstanceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * @param request DescribeStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeStreamResponse
   */
  async describeStreamWithOptions(request: DescribeStreamRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeStreamResponse>(await this.callApi(params, req, runtime), new DescribeStreamResponse({}));
  }

  /**
   * @param request DescribeStreamRequest
   * @return DescribeStreamResponse
   */
  async describeStream(request: DescribeStreamRequest): Promise<DescribeStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamWithOptions(request, runtime);
  }

  /**
   * @param request DescribeStreamURLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeStreamURLResponse
   */
  async describeStreamURLWithOptions(request: DescribeStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!Util.isUnset(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeStreamURLResponse>(await this.callApi(params, req, runtime), new DescribeStreamURLResponse({}));
  }

  /**
   * @param request DescribeStreamURLRequest
   * @return DescribeStreamURLResponse
   */
  async describeStreamURL(request: DescribeStreamURLRequest): Promise<DescribeStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request DescribeStreamVodListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeStreamVodListResponse
   */
  async describeStreamVodListWithOptions(request: DescribeStreamVodListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamVodListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeStreamVodListResponse>(await this.callApi(params, req, runtime), new DescribeStreamVodListResponse({}));
  }

  /**
   * @param request DescribeStreamVodListRequest
   * @return DescribeStreamVodListResponse
   */
  async describeStreamVodList(request: DescribeStreamVodListRequest): Promise<DescribeStreamVodListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamVodListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeStreamsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeStreamsResponse
   */
  async describeStreamsWithOptions(request: DescribeStreamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.app)) {
      query["App"] = request.app;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeStreamsResponse>(await this.callApi(params, req, runtime), new DescribeStreamsResponse({}));
  }

  /**
   * @param request DescribeStreamsRequest
   * @return DescribeStreamsResponse
   */
  async describeStreams(request: DescribeStreamsRequest): Promise<DescribeStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplateResponse
   */
  async describeTemplateWithOptions(request: DescribeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeTemplateResponse>(await this.callApi(params, req, runtime), new DescribeTemplateResponse({}));
  }

  /**
   * @param request DescribeTemplateRequest
   * @return DescribeTemplateResponse
   */
  async describeTemplate(request: DescribeTemplateRequest): Promise<DescribeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateWithOptions(request, runtime);
  }

  /**
   * @param request DescribeTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: DescribeTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeTemplatesResponse({}));
  }

  /**
   * @param request DescribeTemplatesRequest
   * @return DescribeTemplatesResponse
   */
  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeUserDevicesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserDevicesResponse
   */
  async describeUserDevicesWithOptions(request: DescribeUserDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ensInstanceIds)) {
      query["EnsInstanceIds"] = request.ensInstanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.serverName)) {
      query["ServerName"] = request.serverName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserDevicesResponse>(await this.callApi(params, req, runtime), new DescribeUserDevicesResponse({}));
  }

  /**
   * @param request DescribeUserDevicesRequest
   * @return DescribeUserDevicesResponse
   */
  async describeUserDevices(request: DescribeUserDevicesRequest): Promise<DescribeUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDevicesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVodStreamURLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVodStreamURLResponse
   */
  async describeVodStreamURLWithOptions(request: DescribeVodStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodStreamURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVodStreamURLResponse>(await this.callApi(params, req, runtime), new DescribeVodStreamURLResponse({}));
  }

  /**
   * @param request DescribeVodStreamURLRequest
   * @return DescribeVodStreamURLResponse
   */
  async describeVodStreamURL(request: DescribeVodStreamURLRequest): Promise<DescribeVodStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodStreamURLWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsCertificateDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetailWithOptions(request: DescribeVsCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsCertificateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsCertificateDetailResponse>(await this.callApi(params, req, runtime), new DescribeVsCertificateDetailResponse({}));
  }

  /**
   * @param request DescribeVsCertificateDetailRequest
   * @return DescribeVsCertificateDetailResponse
   */
  async describeVsCertificateDetail(request: DescribeVsCertificateDetailRequest): Promise<DescribeVsCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateDetailWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsCertificateListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsCertificateListResponse
   */
  async describeVsCertificateListWithOptions(request: DescribeVsCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsCertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsCertificateListResponse>(await this.callApi(params, req, runtime), new DescribeVsCertificateListResponse({}));
  }

  /**
   * @param request DescribeVsCertificateListRequest
   * @return DescribeVsCertificateListResponse
   */
  async describeVsCertificateList(request: DescribeVsCertificateListRequest): Promise<DescribeVsCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDevicesDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDevicesDataResponse
   */
  async describeVsDevicesDataWithOptions(request: DescribeVsDevicesDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDevicesDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDevicesDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDevicesDataResponse({}));
  }

  /**
   * @param request DescribeVsDevicesDataRequest
   * @return DescribeVsDevicesDataResponse
   */
  async describeVsDevicesData(request: DescribeVsDevicesDataRequest): Promise<DescribeVsDevicesDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDevicesDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainBpsDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsDataWithOptions(request: DescribeVsDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainBpsDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainBpsDataRequest
   * @return DescribeVsDomainBpsDataResponse
   */
  async describeVsDomainBpsData(request: DescribeVsDomainBpsDataRequest): Promise<DescribeVsDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainCertificateInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfoWithOptions(request: DescribeVsDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainCertificateInfoResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainCertificateInfoResponse({}));
  }

  /**
   * @param request DescribeVsDomainCertificateInfoRequest
   * @return DescribeVsDomainCertificateInfoResponse
   */
  async describeVsDomainCertificateInfo(request: DescribeVsDomainCertificateInfoRequest): Promise<DescribeVsDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainCertificateInfoWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigsWithOptions(request: DescribeVsDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.functionNames)) {
      query["FunctionNames"] = request.functionNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainConfigsResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainConfigsResponse({}));
  }

  /**
   * @param request DescribeVsDomainConfigsRequest
   * @return DescribeVsDomainConfigsResponse
   */
  async describeVsDomainConfigs(request: DescribeVsDomainConfigsRequest): Promise<DescribeVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainConfigsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetailWithOptions(request: DescribeVsDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainDetailResponse({}));
  }

  /**
   * @param request DescribeVsDomainDetailRequest
   * @return DescribeVsDomainDetailResponse
   */
  async describeVsDomainDetail(request: DescribeVsDomainDetailRequest): Promise<DescribeVsDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainDetailWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainPvDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvDataWithOptions(request: DescribeVsDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainPvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainPvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainPvDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainPvDataRequest
   * @return DescribeVsDomainPvDataResponse
   */
  async describeVsDomainPvData(request: DescribeVsDomainPvDataRequest): Promise<DescribeVsDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainPvUvDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvDataWithOptions(request: DescribeVsDomainPvUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainPvUvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainPvUvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainPvUvDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainPvUvDataRequest
   * @return DescribeVsDomainPvUvDataResponse
   */
  async describeVsDomainPvUvData(request: DescribeVsDomainPvUvDataRequest): Promise<DescribeVsDomainPvUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvUvDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainRecordDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordDataWithOptions(request: DescribeVsDomainRecordDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainRecordDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainRecordDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainRecordDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainRecordDataRequest
   * @return DescribeVsDomainRecordDataResponse
   */
  async describeVsDomainRecordData(request: DescribeVsDomainRecordDataRequest): Promise<DescribeVsDomainRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRecordDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainRegionDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionDataWithOptions(request: DescribeVsDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainRegionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainRegionDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainRegionDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainRegionDataRequest
   * @return DescribeVsDomainRegionDataResponse
   */
  async describeVsDomainRegionData(request: DescribeVsDomainRegionDataRequest): Promise<DescribeVsDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRegionDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainReqBpsDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsDataWithOptions(request: DescribeVsDomainReqBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainReqBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainReqBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainReqBpsDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainReqBpsDataRequest
   * @return DescribeVsDomainReqBpsDataResponse
   */
  async describeVsDomainReqBpsData(request: DescribeVsDomainReqBpsDataRequest): Promise<DescribeVsDomainReqBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqBpsDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainReqTrafficDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficDataWithOptions(request: DescribeVsDomainReqTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainReqTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainReqTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainReqTrafficDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainReqTrafficDataRequest
   * @return DescribeVsDomainReqTrafficDataResponse
   */
  async describeVsDomainReqTrafficData(request: DescribeVsDomainReqTrafficDataRequest): Promise<DescribeVsDomainReqTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainSnapshotDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotDataWithOptions(request: DescribeVsDomainSnapshotDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainSnapshotDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainSnapshotDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainSnapshotDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainSnapshotDataRequest
   * @return DescribeVsDomainSnapshotDataResponse
   */
  async describeVsDomainSnapshotData(request: DescribeVsDomainSnapshotDataRequest): Promise<DescribeVsDomainSnapshotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainSnapshotDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainTrafficDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficDataWithOptions(request: DescribeVsDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainTrafficDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainTrafficDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainTrafficDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainTrafficDataRequest
   * @return DescribeVsDomainTrafficDataResponse
   */
  async describeVsDomainTrafficData(request: DescribeVsDomainTrafficDataRequest): Promise<DescribeVsDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainTrafficDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsDomainUvDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvDataWithOptions(request: DescribeVsDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainUvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsDomainUvDataResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainUvDataResponse({}));
  }

  /**
   * @param request DescribeVsDomainUvDataRequest
   * @return DescribeVsDomainUvDataResponse
   */
  async describeVsDomainUvData(request: DescribeVsDomainUvDataRequest): Promise<DescribeVsDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainUvDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsPullStreamInfoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfigWithOptions(request: DescribeVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new DescribeVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request DescribeVsPullStreamInfoConfigRequest
   * @return DescribeVsPullStreamInfoConfigResponse
   */
  async describeVsPullStreamInfoConfig(request: DescribeVsPullStreamInfoConfigRequest): Promise<DescribeVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsStreamsNotifyUrlConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfigWithOptions(request: DescribeVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request DescribeVsStreamsNotifyUrlConfigRequest
   * @return DescribeVsStreamsNotifyUrlConfigResponse
   */
  async describeVsStreamsNotifyUrlConfig(request: DescribeVsStreamsNotifyUrlConfigRequest): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsStreamsOnlineListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineListWithOptions(request: DescribeVsStreamsOnlineListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsOnlineListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsStreamsOnlineListResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsOnlineListResponse({}));
  }

  /**
   * @param request DescribeVsStreamsOnlineListRequest
   * @return DescribeVsStreamsOnlineListResponse
   */
  async describeVsStreamsOnlineList(request: DescribeVsStreamsOnlineListRequest): Promise<DescribeVsStreamsOnlineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsOnlineListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsStreamsPublishListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishListWithOptions(request: DescribeVsStreamsPublishListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStreamsPublishListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsStreamsPublishListResponse>(await this.callApi(params, req, runtime), new DescribeVsStreamsPublishListResponse({}));
  }

  /**
   * @param request DescribeVsStreamsPublishListRequest
   * @return DescribeVsStreamsPublishListResponse
   */
  async describeVsStreamsPublishList(request: DescribeVsStreamsPublishListRequest): Promise<DescribeVsStreamsPublishListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsPublishListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsTopDomainsByFlowRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlowWithOptions(request: DescribeVsTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new DescribeVsTopDomainsByFlowResponse({}));
  }

  /**
   * @param request DescribeVsTopDomainsByFlowRequest
   * @return DescribeVsTopDomainsByFlowResponse
   */
  async describeVsTopDomainsByFlow(request: DescribeVsTopDomainsByFlowRequest): Promise<DescribeVsTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsTopDomainsByFlowWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsUpPeakPublishStreamDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamDataWithOptions(request: DescribeVsUpPeakPublishStreamDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainSwitch)) {
      query["DomainSwitch"] = request.domainSwitch;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsUpPeakPublishStreamDataResponse>(await this.callApi(params, req, runtime), new DescribeVsUpPeakPublishStreamDataResponse({}));
  }

  /**
   * @param request DescribeVsUpPeakPublishStreamDataRequest
   * @return DescribeVsUpPeakPublishStreamDataResponse
   */
  async describeVsUpPeakPublishStreamData(request: DescribeVsUpPeakPublishStreamDataRequest): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUpPeakPublishStreamDataWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsUserResourcePackageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackageWithOptions(request: DescribeVsUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsUserResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsUserResourcePackageResponse>(await this.callApi(params, req, runtime), new DescribeVsUserResourcePackageResponse({}));
  }

  /**
   * @param request DescribeVsUserResourcePackageRequest
   * @return DescribeVsUserResourcePackageResponse
   */
  async describeVsUserResourcePackage(request: DescribeVsUserResourcePackageRequest): Promise<DescribeVsUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUserResourcePackageWithOptions(request, runtime);
  }

  /**
   * @param request DescribeVsVerifyContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContentWithOptions(request: DescribeVsVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsVerifyContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeVsVerifyContentResponse>(await this.callApi(params, req, runtime), new DescribeVsVerifyContentResponse({}));
  }

  /**
   * @param request DescribeVsVerifyContentRequest
   * @return DescribeVsVerifyContentResponse
   */
  async describeVsVerifyContent(request: DescribeVsVerifyContentRequest): Promise<DescribeVsVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsVerifyContentWithOptions(request, runtime);
  }

  /**
   * @param request ForbidVsStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ForbidVsStreamResponse
   */
  async forbidVsStreamWithOptions(request: ForbidVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<ForbidVsStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!Util.isUnset(request.oneshot)) {
      query["Oneshot"] = request.oneshot;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resumeTime)) {
      query["ResumeTime"] = request.resumeTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ForbidVsStreamResponse>(await this.callApi(params, req, runtime), new ForbidVsStreamResponse({}));
  }

  /**
   * @param request ForbidVsStreamRequest
   * @return ForbidVsStreamResponse
   */
  async forbidVsStream(request: ForbidVsStreamRequest): Promise<ForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidVsStreamWithOptions(request, runtime);
  }

  /**
   * @summary 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   *
   * @param request GetRenderingInstanceStreamingInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfoWithOptions(request: GetRenderingInstanceStreamingInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetRenderingInstanceStreamingInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetRenderingInstanceStreamingInfoResponse>(await this.callApi(params, req, runtime), new GetRenderingInstanceStreamingInfoResponse({}));
  }

  /**
   * @summary 获取云渲染实例流连接信息，每次流化建联前都需要调用此接口获取最新连接信息
   *
   * @param request GetRenderingInstanceStreamingInfoRequest
   * @return GetRenderingInstanceStreamingInfoResponse
   */
  async getRenderingInstanceStreamingInfo(request: GetRenderingInstanceStreamingInfoRequest): Promise<GetRenderingInstanceStreamingInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRenderingInstanceStreamingInfoWithOptions(request, runtime);
  }

  /**
   * @param request GotoPresetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GotoPresetResponse
   */
  async gotoPresetWithOptions(request: GotoPresetRequest, runtime: $Util.RuntimeOptions): Promise<GotoPresetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GotoPresetResponse>(await this.callApi(params, req, runtime), new GotoPresetResponse({}));
  }

  /**
   * @param request GotoPresetRequest
   * @return GotoPresetResponse
   */
  async gotoPreset(request: GotoPresetRequest): Promise<GotoPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.gotoPresetWithOptions(request, runtime);
  }

  /**
   * @summary 安装云应用
   *
   * @param request InstallCloudAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InstallCloudAppResponse
   */
  async installCloudAppWithOptions(request: InstallCloudAppRequest, runtime: $Util.RuntimeOptions): Promise<InstallCloudAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<InstallCloudAppResponse>(await this.callApi(params, req, runtime), new InstallCloudAppResponse({}));
  }

  /**
   * @summary 安装云应用
   *
   * @param request InstallCloudAppRequest
   * @return InstallCloudAppResponse
   */
  async installCloudApp(request: InstallCloudAppRequest): Promise<InstallCloudAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCloudAppWithOptions(request, runtime);
  }

  /**
   * @summary 查询云应用安装信息列表
   *
   * @param request ListCloudAppInstallationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallationsWithOptions(request: ListCloudAppInstallationsRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudAppInstallationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCloudAppInstallationsResponse>(await this.callApi(params, req, runtime), new ListCloudAppInstallationsResponse({}));
  }

  /**
   * @summary 查询云应用安装信息列表
   *
   * @param request ListCloudAppInstallationsRequest
   * @return ListCloudAppInstallationsResponse
   */
  async listCloudAppInstallations(request: ListCloudAppInstallationsRequest): Promise<ListCloudAppInstallationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudAppInstallationsWithOptions(request, runtime);
  }

  /**
   * @summary 查询云应用列表
   *
   * @param request ListCloudAppsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCloudAppsResponse
   */
  async listCloudAppsWithOptions(request: ListCloudAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListCloudAppsResponse>(await this.callApi(params, req, runtime), new ListCloudAppsResponse({}));
  }

  /**
   * @summary 查询云应用列表
   *
   * @param request ListCloudAppsRequest
   * @return ListCloudAppsResponse
   */
  async listCloudApps(request: ListCloudAppsRequest): Promise<ListCloudAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudAppsWithOptions(request, runtime);
  }

  /**
   * @summary 查询文件的实例推送状态信息列表。
   *
   * @param request ListFilePushStatusesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFilePushStatusesResponse
   */
  async listFilePushStatusesWithOptions(request: ListFilePushStatusesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilePushStatusesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFilePushStatusesResponse>(await this.callApi(params, req, runtime), new ListFilePushStatusesResponse({}));
  }

  /**
   * @summary 查询文件的实例推送状态信息列表。
   *
   * @param request ListFilePushStatusesRequest
   * @return ListFilePushStatusesResponse
   */
  async listFilePushStatuses(request: ListFilePushStatusesRequest): Promise<ListFilePushStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilePushStatusesWithOptions(request, runtime);
  }

  /**
   * @summary 查询可用文件列表。
   *
   * @param request ListFilesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFilesResponse
   */
  async listFilesWithOptions(request: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListFilesResponse>(await this.callApi(params, req, runtime), new ListFilesResponse({}));
  }

  /**
   * @summary 查询可用文件列表。
   *
   * @param request ListFilesRequest
   * @return ListFilesResponse
   */
  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * @summary 查询公钥信息
   *
   * @param request ListPublicKeysRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublicKeysResponse
   */
  async listPublicKeysWithOptions(request: ListPublicKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicKeysResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPublicKeysResponse>(await this.callApi(params, req, runtime), new ListPublicKeysResponse({}));
  }

  /**
   * @summary 查询公钥信息
   *
   * @param request ListPublicKeysRequest
   * @return ListPublicKeysResponse
   */
  async listPublicKeys(request: ListPublicKeysRequest): Promise<ListPublicKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicKeysWithOptions(request, runtime);
  }

  /**
   * @summary 查询所有云渲染实例信息，支持分页查询。
   *
   * @param request ListRenderingInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRenderingInstancesResponse
   */
  async listRenderingInstancesWithOptions(request: ListRenderingInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListRenderingInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListRenderingInstancesResponse>(await this.callApi(params, req, runtime), new ListRenderingInstancesResponse({}));
  }

  /**
   * @summary 查询所有云渲染实例信息，支持分页查询。
   *
   * @param request ListRenderingInstancesRequest
   * @return ListRenderingInstancesResponse
   */
  async listRenderingInstances(request: ListRenderingInstancesRequest): Promise<ListRenderingInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRenderingInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 安全登陆管理
   *
   * @param request ManageLoginRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManageLoginResponse
   */
  async manageLoginWithOptions(request: ManageLoginRequest, runtime: $Util.RuntimeOptions): Promise<ManageLoginResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ManageLoginResponse>(await this.callApi(params, req, runtime), new ManageLoginResponse({}));
  }

  /**
   * @summary 安全登陆管理
   *
   * @param request ManageLoginRequest
   * @return ManageLoginResponse
   */
  async manageLogin(request: ManageLoginRequest): Promise<ManageLoginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manageLoginWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDeviceResponse
   */
  async modifyDeviceWithOptions(request: ModifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
    }

    if (!Util.isUnset(request.autoDirectory)) {
      query["AutoDirectory"] = request.autoDirectory;
    }

    if (!Util.isUnset(request.autoPos)) {
      query["AutoPos"] = request.autoPos;
    }

    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.latitude)) {
      query["Latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      query["Longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.posInterval)) {
      query["PosInterval"] = request.posInterval;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDeviceResponse>(await this.callApi(params, req, runtime), new ModifyDeviceResponse({}));
  }

  /**
   * @param request ModifyDeviceRequest
   * @return ModifyDeviceResponse
   */
  async modifyDevice(request: ModifyDeviceRequest): Promise<ModifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDeviceAlarmRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarmWithOptions(request: ModifyDeviceAlarmRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceAlarmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDeviceAlarmResponse>(await this.callApi(params, req, runtime), new ModifyDeviceAlarmResponse({}));
  }

  /**
   * @param request ModifyDeviceAlarmRequest
   * @return ModifyDeviceAlarmResponse
   */
  async modifyDeviceAlarm(request: ModifyDeviceAlarmRequest): Promise<ModifyDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceAlarmWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDeviceCaptureRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDeviceCaptureResponse
   */
  async modifyDeviceCaptureWithOptions(request: ModifyDeviceCaptureRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceCaptureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDeviceCaptureResponse>(await this.callApi(params, req, runtime), new ModifyDeviceCaptureResponse({}));
  }

  /**
   * @param request ModifyDeviceCaptureRequest
   * @return ModifyDeviceCaptureResponse
   */
  async modifyDeviceCapture(request: ModifyDeviceCaptureRequest): Promise<ModifyDeviceCaptureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceCaptureWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDeviceChannelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannelsWithOptions(request: ModifyDeviceChannelsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.channels)) {
      query["Channels"] = request.channels;
    }

    if (!Util.isUnset(request.deviceStatus)) {
      query["DeviceStatus"] = request.deviceStatus;
    }

    if (!Util.isUnset(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDeviceChannelsResponse>(await this.callApi(params, req, runtime), new ModifyDeviceChannelsResponse({}));
  }

  /**
   * @param request ModifyDeviceChannelsRequest
   * @return ModifyDeviceChannelsResponse
   */
  async modifyDeviceChannels(request: ModifyDeviceChannelsRequest): Promise<ModifyDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceChannelsWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDirectoryResponse
   */
  async modifyDirectoryWithOptions(request: ModifyDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyDirectoryResponse>(await this.callApi(params, req, runtime), new ModifyDirectoryResponse({}));
  }

  /**
   * @param request ModifyDirectoryRequest
   * @return ModifyDirectoryResponse
   */
  async modifyDirectory(request: ModifyDirectoryRequest): Promise<ModifyDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request ModifyGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGroupResponse
   */
  async modifyGroupWithOptions(request: ModifyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.inProtocol)) {
      query["InProtocol"] = request.inProtocol;
    }

    if (!Util.isUnset(request.lazyPull)) {
      query["LazyPull"] = request.lazyPull;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.outProtocol)) {
      query["OutProtocol"] = request.outProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    if (!Util.isUnset(request.pushDomain)) {
      query["PushDomain"] = request.pushDomain;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyGroupResponse>(await this.callApi(params, req, runtime), new ModifyGroupResponse({}));
  }

  /**
   * @param request ModifyGroupRequest
   * @return ModifyGroupResponse
   */
  async modifyGroup(request: ModifyGroupRequest): Promise<ModifyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

  /**
   * @param request ModifyParentPlatformRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyParentPlatformResponse
   */
  async modifyParentPlatformWithOptions(request: ModifyParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParentPlatformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!Util.isUnset(request.clientAuth)) {
      query["ClientAuth"] = request.clientAuth;
    }

    if (!Util.isUnset(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!Util.isUnset(request.clientUsername)) {
      query["ClientUsername"] = request.clientUsername;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyParentPlatformResponse>(await this.callApi(params, req, runtime), new ModifyParentPlatformResponse({}));
  }

  /**
   * @param request ModifyParentPlatformRequest
   * @return ModifyParentPlatformResponse
   */
  async modifyParentPlatform(request: ModifyParentPlatformRequest): Promise<ModifyParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParentPlatformWithOptions(request, runtime);
  }

  /**
   * @summary 修改云渲染实例限速带宽
   *
   * @param request ModifyRenderingInstanceBandwidthRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidthWithOptions(request: ModifyRenderingInstanceBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRenderingInstanceBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxEgressBandwidth)) {
      query["MaxEgressBandwidth"] = request.maxEgressBandwidth;
    }

    if (!Util.isUnset(request.maxIngressBandwidth)) {
      query["MaxIngressBandwidth"] = request.maxIngressBandwidth;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyRenderingInstanceBandwidthResponse>(await this.callApi(params, req, runtime), new ModifyRenderingInstanceBandwidthResponse({}));
  }

  /**
   * @summary 修改云渲染实例限速带宽
   *
   * @param request ModifyRenderingInstanceBandwidthRequest
   * @return ModifyRenderingInstanceBandwidthResponse
   */
  async modifyRenderingInstanceBandwidth(request: ModifyRenderingInstanceBandwidthRequest): Promise<ModifyRenderingInstanceBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRenderingInstanceBandwidthWithOptions(request, runtime);
  }

  /**
   * @param request ModifyTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTemplateResponse
   */
  async modifyTemplateWithOptions(request: ModifyTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callback)) {
      query["Callback"] = request.callback;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!Util.isUnset(request.flv)) {
      query["Flv"] = request.flv;
    }

    if (!Util.isUnset(request.hlsM3u8)) {
      query["HlsM3u8"] = request.hlsM3u8;
    }

    if (!Util.isUnset(request.hlsTs)) {
      query["HlsTs"] = request.hlsTs;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.jpgOnDemand)) {
      query["JpgOnDemand"] = request.jpgOnDemand;
    }

    if (!Util.isUnset(request.jpgOverwrite)) {
      query["JpgOverwrite"] = request.jpgOverwrite;
    }

    if (!Util.isUnset(request.jpgSequence)) {
      query["JpgSequence"] = request.jpgSequence;
    }

    if (!Util.isUnset(request.mp4)) {
      query["Mp4"] = request.mp4;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossBucket)) {
      query["OssBucket"] = request.ossBucket;
    }

    if (!Util.isUnset(request.ossEndpoint)) {
      query["OssEndpoint"] = request.ossEndpoint;
    }

    if (!Util.isUnset(request.ossFilePrefix)) {
      query["OssFilePrefix"] = request.ossFilePrefix;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.retention)) {
      query["Retention"] = request.retention;
    }

    if (!Util.isUnset(request.transConfigsJSON)) {
      query["TransConfigsJSON"] = request.transConfigsJSON;
    }

    if (!Util.isUnset(request.trigger)) {
      query["Trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ModifyTemplateResponse>(await this.callApi(params, req, runtime), new ModifyTemplateResponse({}));
  }

  /**
   * @param request ModifyTemplateRequest
   * @return ModifyTemplateResponse
   */
  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

  /**
   * @param request OpenVsServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenVsServiceResponse
   */
  async openVsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenVsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<OpenVsServiceResponse>(await this.callApi(params, req, runtime), new OpenVsServiceResponse({}));
  }

  /**
   * @return OpenVsServiceResponse
   */
  async openVsService(): Promise<OpenVsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVsServiceWithOptions(runtime);
  }

  /**
   * @summary 预推文件到云渲染实例。
   *
   * @param request PushFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PushFileResponse
   */
  async pushFileWithOptions(request: PushFileRequest, runtime: $Util.RuntimeOptions): Promise<PushFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<PushFileResponse>(await this.callApi(params, req, runtime), new PushFileResponse({}));
  }

  /**
   * @summary 预推文件到云渲染实例。
   *
   * @param request PushFileRequest
   * @return PushFileResponse
   */
  async pushFile(request: PushFileRequest): Promise<PushFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushFileWithOptions(request, runtime);
  }

  /**
   * @summary 重启云渲染实例
   *
   * @param request RebootRenderingInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RebootRenderingInstanceResponse
   */
  async rebootRenderingInstanceWithOptions(request: RebootRenderingInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootRenderingInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RebootRenderingInstanceResponse>(await this.callApi(params, req, runtime), new RebootRenderingInstanceResponse({}));
  }

  /**
   * @summary 重启云渲染实例
   *
   * @param request RebootRenderingInstanceRequest
   * @return RebootRenderingInstanceResponse
   */
  async rebootRenderingInstance(request: RebootRenderingInstanceRequest): Promise<RebootRenderingInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 释放云渲染实例
   *
   * @param request ReleaseRenderingInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstanceWithOptions(request: ReleaseRenderingInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseRenderingInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ReleaseRenderingInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseRenderingInstanceResponse({}));
  }

  /**
   * @summary 释放云渲染实例
   *
   * @param request ReleaseRenderingInstanceRequest
   * @return ReleaseRenderingInstanceResponse
   */
  async releaseRenderingInstance(request: ReleaseRenderingInstanceRequest): Promise<ReleaseRenderingInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 续费云渲染资源实例
   *
   * @param request RenewRenderingInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RenewRenderingInstanceResponse
   */
  async renewRenderingInstanceWithOptions(request: RenewRenderingInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewRenderingInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<RenewRenderingInstanceResponse>(await this.callApi(params, req, runtime), new RenewRenderingInstanceResponse({}));
  }

  /**
   * @summary 续费云渲染资源实例
   *
   * @param request RenewRenderingInstanceRequest
   * @return RenewRenderingInstanceResponse
   */
  async renewRenderingInstance(request: RenewRenderingInstanceRequest): Promise<RenewRenderingInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewRenderingInstanceWithOptions(request, runtime);
  }

  /**
   * @param request ResumeVsStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeVsStreamResponse
   */
  async resumeVsStreamWithOptions(request: ResumeVsStreamRequest, runtime: $Util.RuntimeOptions): Promise<ResumeVsStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.controlStreamAction)) {
      query["ControlStreamAction"] = request.controlStreamAction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.liveStreamType)) {
      query["LiveStreamType"] = request.liveStreamType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ResumeVsStreamResponse>(await this.callApi(params, req, runtime), new ResumeVsStreamResponse({}));
  }

  /**
   * @param request ResumeVsStreamRequest
   * @return ResumeVsStreamResponse
   */
  async resumeVsStream(request: ResumeVsStreamRequest): Promise<ResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeVsStreamWithOptions(request, runtime);
  }

  /**
   * @summary 下发shell命令，同步响应。不适用于耗时命令。
   *
   * @param request SendRenderingInstanceCommandsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommandsWithOptions(request: SendRenderingInstanceCommandsRequest, runtime: $Util.RuntimeOptions): Promise<SendRenderingInstanceCommandsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commands)) {
      body["Commands"] = request.commands;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SendRenderingInstanceCommandsResponse>(await this.callApi(params, req, runtime), new SendRenderingInstanceCommandsResponse({}));
  }

  /**
   * @summary 下发shell命令，同步响应。不适用于耗时命令。
   *
   * @param request SendRenderingInstanceCommandsRequest
   * @return SendRenderingInstanceCommandsResponse
   */
  async sendRenderingInstanceCommands(request: SendRenderingInstanceCommandsRequest): Promise<SendRenderingInstanceCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendRenderingInstanceCommandsWithOptions(request, runtime);
  }

  /**
   * @param request SetPresetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetPresetResponse
   */
  async setPresetWithOptions(request: SetPresetRequest, runtime: $Util.RuntimeOptions): Promise<SetPresetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.presetId)) {
      query["PresetId"] = request.presetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetPresetResponse>(await this.callApi(params, req, runtime), new SetPresetResponse({}));
  }

  /**
   * @param request SetPresetRequest
   * @return SetPresetResponse
   */
  async setPreset(request: SetPresetRequest): Promise<SetPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPresetWithOptions(request, runtime);
  }

  /**
   * @param request SetVsDomainCertificateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetVsDomainCertificateResponse
   */
  async setVsDomainCertificateWithOptions(request: SetVsDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetVsDomainCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.forceSet)) {
      query["ForceSet"] = request.forceSet;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.SSLPri)) {
      query["SSLPri"] = request.SSLPri;
    }

    if (!Util.isUnset(request.SSLProtocol)) {
      query["SSLProtocol"] = request.SSLProtocol;
    }

    if (!Util.isUnset(request.SSLPub)) {
      query["SSLPub"] = request.SSLPub;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetVsDomainCertificateResponse>(await this.callApi(params, req, runtime), new SetVsDomainCertificateResponse({}));
  }

  /**
   * @param request SetVsDomainCertificateRequest
   * @return SetVsDomainCertificateResponse
   */
  async setVsDomainCertificate(request: SetVsDomainCertificateRequest): Promise<SetVsDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsDomainCertificateWithOptions(request, runtime);
  }

  /**
   * @param request SetVsStreamsNotifyUrlConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfigWithOptions(request: SetVsStreamsNotifyUrlConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SetVsStreamsNotifyUrlConfigResponse>(await this.callApi(params, req, runtime), new SetVsStreamsNotifyUrlConfigResponse({}));
  }

  /**
   * @param request SetVsStreamsNotifyUrlConfigRequest
   * @return SetVsStreamsNotifyUrlConfigResponse
   */
  async setVsStreamsNotifyUrlConfig(request: SetVsStreamsNotifyUrlConfigRequest): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  /**
   * @param request StartDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartDeviceResponse
   */
  async startDeviceWithOptions(request: StartDeviceRequest, runtime: $Util.RuntimeOptions): Promise<StartDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartDeviceResponse>(await this.callApi(params, req, runtime), new StartDeviceResponse({}));
  }

  /**
   * @param request StartDeviceRequest
   * @return StartDeviceResponse
   */
  async startDevice(request: StartDeviceRequest): Promise<StartDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDeviceWithOptions(request, runtime);
  }

  /**
   * @param request StartParentPlatformRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartParentPlatformResponse
   */
  async startParentPlatformWithOptions(request: StartParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<StartParentPlatformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartParentPlatformResponse>(await this.callApi(params, req, runtime), new StartParentPlatformResponse({}));
  }

  /**
   * @param request StartParentPlatformRequest
   * @return StartParentPlatformResponse
   */
  async startParentPlatform(request: StartParentPlatformRequest): Promise<StartParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startParentPlatformWithOptions(request, runtime);
  }

  /**
   * @param request StartPublishStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartPublishStreamResponse
   */
  async startPublishStreamWithOptions(request: StartPublishStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartPublishStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.publishUrl)) {
      query["PublishUrl"] = request.publishUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartPublishStreamResponse>(await this.callApi(params, req, runtime), new StartPublishStreamResponse({}));
  }

  /**
   * @param request StartPublishStreamRequest
   * @return StartPublishStreamResponse
   */
  async startPublishStream(request: StartPublishStreamRequest): Promise<StartPublishStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request StartRecordStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartRecordStreamResponse
   */
  async startRecordStreamWithOptions(request: StartRecordStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartRecordStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.app)) {
      query["App"] = request.app;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartRecordStreamResponse>(await this.callApi(params, req, runtime), new StartRecordStreamResponse({}));
  }

  /**
   * @param request StartRecordStreamRequest
   * @return StartRecordStreamResponse
   */
  async startRecordStream(request: StartRecordStreamRequest): Promise<StartRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordStreamWithOptions(request, runtime);
  }

  /**
   * @param request StartStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartStreamResponse
   */
  async startStreamWithOptions(request: StartStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartStreamResponse>(await this.callApi(params, req, runtime), new StartStreamResponse({}));
  }

  /**
   * @param request StartStreamRequest
   * @return StartStreamResponse
   */
  async startStream(request: StartStreamRequest): Promise<StartStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startStreamWithOptions(request, runtime);
  }

  /**
   * @param request StartTransferStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartTransferStreamResponse
   */
  async startTransferStreamWithOptions(request: StartTransferStreamRequest, runtime: $Util.RuntimeOptions): Promise<StartTransferStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StartTransferStreamResponse>(await this.callApi(params, req, runtime), new StartTransferStreamResponse({}));
  }

  /**
   * @param request StartTransferStreamRequest
   * @return StartTransferStreamResponse
   */
  async startTransferStream(request: StartTransferStreamRequest): Promise<StartTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request StopAdjustRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopAdjustResponse
   */
  async stopAdjustWithOptions(request: StopAdjustRequest, runtime: $Util.RuntimeOptions): Promise<StopAdjustResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.focus)) {
      query["Focus"] = request.focus;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.iris)) {
      query["Iris"] = request.iris;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopAdjustResponse>(await this.callApi(params, req, runtime), new StopAdjustResponse({}));
  }

  /**
   * @param request StopAdjustRequest
   * @return StopAdjustResponse
   */
  async stopAdjust(request: StopAdjustRequest): Promise<StopAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAdjustWithOptions(request, runtime);
  }

  /**
   * @param request StopDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopDeviceResponse
   */
  async stopDeviceWithOptions(request: StopDeviceRequest, runtime: $Util.RuntimeOptions): Promise<StopDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopDeviceResponse>(await this.callApi(params, req, runtime), new StopDeviceResponse({}));
  }

  /**
   * @param request StopDeviceRequest
   * @return StopDeviceResponse
   */
  async stopDevice(request: StopDeviceRequest): Promise<StopDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDeviceWithOptions(request, runtime);
  }

  /**
   * @param request StopMoveRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopMoveResponse
   */
  async stopMoveWithOptions(request: StopMoveRequest, runtime: $Util.RuntimeOptions): Promise<StopMoveResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pan)) {
      query["Pan"] = request.pan;
    }

    if (!Util.isUnset(request.tilt)) {
      query["Tilt"] = request.tilt;
    }

    if (!Util.isUnset(request.zoom)) {
      query["Zoom"] = request.zoom;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopMoveResponse>(await this.callApi(params, req, runtime), new StopMoveResponse({}));
  }

  /**
   * @param request StopMoveRequest
   * @return StopMoveResponse
   */
  async stopMove(request: StopMoveRequest): Promise<StopMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMoveWithOptions(request, runtime);
  }

  /**
   * @param request StopPublishStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopPublishStreamResponse
   */
  async stopPublishStreamWithOptions(request: StopPublishStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopPublishStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopPublishStreamResponse>(await this.callApi(params, req, runtime), new StopPublishStreamResponse({}));
  }

  /**
   * @param request StopPublishStreamRequest
   * @return StopPublishStreamResponse
   */
  async stopPublishStream(request: StopPublishStreamRequest): Promise<StopPublishStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopPublishStreamWithOptions(request, runtime);
  }

  /**
   * @param request StopRecordStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopRecordStreamResponse
   */
  async stopRecordStreamWithOptions(request: StopRecordStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopRecordStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.app)) {
      query["App"] = request.app;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playDomain)) {
      query["PlayDomain"] = request.playDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopRecordStreamResponse>(await this.callApi(params, req, runtime), new StopRecordStreamResponse({}));
  }

  /**
   * @param request StopRecordStreamRequest
   * @return StopRecordStreamResponse
   */
  async stopRecordStream(request: StopRecordStreamRequest): Promise<StopRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordStreamWithOptions(request, runtime);
  }

  /**
   * @param request StopStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopStreamResponse
   */
  async stopStreamWithOptions(request: StopStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopStreamResponse>(await this.callApi(params, req, runtime), new StopStreamResponse({}));
  }

  /**
   * @param request StopStreamRequest
   * @return StopStreamResponse
   */
  async stopStream(request: StopStreamRequest): Promise<StopStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStreamWithOptions(request, runtime);
  }

  /**
   * @param request StopTransferStreamRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopTransferStreamResponse
   */
  async stopTransferStreamWithOptions(request: StopTransferStreamRequest, runtime: $Util.RuntimeOptions): Promise<StopTransferStreamResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.transcode)) {
      query["Transcode"] = request.transcode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<StopTransferStreamResponse>(await this.callApi(params, req, runtime), new StopTransferStreamResponse({}));
  }

  /**
   * @param request StopTransferStreamRequest
   * @return StopTransferStreamResponse
   */
  async stopTransferStream(request: StopTransferStreamRequest): Promise<StopTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTransferStreamWithOptions(request, runtime);
  }

  /**
   * @param request SyncCatalogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SyncCatalogsResponse
   */
  async syncCatalogsWithOptions(request: SyncCatalogsRequest, runtime: $Util.RuntimeOptions): Promise<SyncCatalogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SyncCatalogsResponse>(await this.callApi(params, req, runtime), new SyncCatalogsResponse({}));
  }

  /**
   * @param request SyncCatalogsRequest
   * @return SyncCatalogsResponse
   */
  async syncCatalogs(request: SyncCatalogsRequest): Promise<SyncCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncCatalogsWithOptions(request, runtime);
  }

  /**
   * @param request UnbindDirectoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindDirectoryResponse
   */
  async unbindDirectoryWithOptions(request: UnbindDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnbindDirectoryResponse>(await this.callApi(params, req, runtime), new UnbindDirectoryResponse({}));
  }

  /**
   * @param request UnbindDirectoryRequest
   * @return UnbindDirectoryResponse
   */
  async unbindDirectory(request: UnbindDirectoryRequest): Promise<UnbindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDirectoryWithOptions(request, runtime);
  }

  /**
   * @param request UnbindParentPlatformDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDeviceWithOptions(request: UnbindParentPlatformDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindParentPlatformDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parentPlatformId)) {
      query["ParentPlatformId"] = request.parentPlatformId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnbindParentPlatformDeviceResponse>(await this.callApi(params, req, runtime), new UnbindParentPlatformDeviceResponse({}));
  }

  /**
   * @param request UnbindParentPlatformDeviceRequest
   * @return UnbindParentPlatformDeviceResponse
   */
  async unbindParentPlatformDevice(request: UnbindParentPlatformDeviceRequest): Promise<UnbindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindParentPlatformDeviceWithOptions(request, runtime);
  }

  /**
   * @param request UnbindPurchasedDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDeviceWithOptions(request: UnbindPurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPurchasedDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnbindPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new UnbindPurchasedDeviceResponse({}));
  }

  /**
   * @param request UnbindPurchasedDeviceRequest
   * @return UnbindPurchasedDeviceResponse
   */
  async unbindPurchasedDevice(request: UnbindPurchasedDeviceRequest): Promise<UnbindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPurchasedDeviceWithOptions(request, runtime);
  }

  /**
   * @param request UnbindTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnbindTemplateResponse
   */
  async unbindTemplateWithOptions(request: UnbindTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UnbindTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnbindTemplateResponse>(await this.callApi(params, req, runtime), new UnbindTemplateResponse({}));
  }

  /**
   * @param request UnbindTemplateRequest
   * @return UnbindTemplateResponse
   */
  async unbindTemplate(request: UnbindTemplateRequest): Promise<UnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTemplateWithOptions(request, runtime);
  }

  /**
   * @summary 卸载云应用
   *
   * @param request UninstallCloudAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UninstallCloudAppResponse
   */
  async uninstallCloudAppWithOptions(request: UninstallCloudAppRequest, runtime: $Util.RuntimeOptions): Promise<UninstallCloudAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UninstallCloudAppResponse>(await this.callApi(params, req, runtime), new UninstallCloudAppResponse({}));
  }

  /**
   * @summary 卸载云应用
   *
   * @param request UninstallCloudAppRequest
   * @return UninstallCloudAppResponse
   */
  async uninstallCloudApp(request: UninstallCloudAppRequest): Promise<UninstallCloudAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallCloudAppWithOptions(request, runtime);
  }

  /**
   * @param request UnlockDeviceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnlockDeviceResponse
   */
  async unlockDeviceWithOptions(request: UnlockDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UnlockDeviceResponse>(await this.callApi(params, req, runtime), new UnlockDeviceResponse({}));
  }

  /**
   * @param request UnlockDeviceRequest
   * @return UnlockDeviceResponse
   */
  async unlockDevice(request: UnlockDeviceRequest): Promise<UnlockDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockDeviceWithOptions(request, runtime);
  }

  /**
   * @summary 更新云应用信息
   *
   * @param request UpdateCloudAppInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfoWithOptions(request: UpdateCloudAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCloudAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateCloudAppInfoResponse>(await this.callApi(params, req, runtime), new UpdateCloudAppInfoResponse({}));
  }

  /**
   * @summary 更新云应用信息
   *
   * @param request UpdateCloudAppInfoRequest
   * @return UpdateCloudAppInfoResponse
   */
  async updateCloudAppInfo(request: UpdateCloudAppInfoRequest): Promise<UpdateCloudAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCloudAppInfoWithOptions(request, runtime);
  }

  /**
   * @param request UpdateClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateClusterResponse
   */
  async updateClusterWithOptions(request: UpdateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.internalPorts)) {
      query["InternalPorts"] = request.internalPorts;
    }

    if (!Util.isUnset(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCluster",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterResponse>(await this.callApi(params, req, runtime), new UpdateClusterResponse({}));
  }

  /**
   * @param request UpdateClusterRequest
   * @return UpdateClusterResponse
   */
  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * @summary 更新文件信息。
   *
   * @param request UpdateFileInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateFileInfoResponse
   */
  async updateFileInfoWithOptions(request: UpdateFileInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateFileInfoResponse>(await this.callApi(params, req, runtime), new UpdateFileInfoResponse({}));
  }

  /**
   * @summary 更新文件信息。
   *
   * @param request UpdateFileInfoRequest
   * @return UpdateFileInfoResponse
   */
  async updateFileInfo(request: UpdateFileInfoRequest): Promise<UpdateFileInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileInfoWithOptions(request, runtime);
  }

  /**
   * @summary 更新云渲染实例配置参数
   *
   * @param tmpReq UpdateRenderingInstanceConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfigurationWithOptions(tmpReq: UpdateRenderingInstanceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRenderingInstanceConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRenderingInstanceConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let query = { };
    if (!Util.isUnset(request.renderingInstanceId)) {
      query["RenderingInstanceId"] = request.renderingInstanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateRenderingInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateRenderingInstanceConfigurationResponse({}));
  }

  /**
   * @summary 更新云渲染实例配置参数
   *
   * @param request UpdateRenderingInstanceConfigurationRequest
   * @return UpdateRenderingInstanceConfigurationResponse
   */
  async updateRenderingInstanceConfiguration(request: UpdateRenderingInstanceConfigurationRequest): Promise<UpdateRenderingInstanceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRenderingInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * @param request UpdateVsPullStreamInfoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfigWithOptions(request: UpdateVsPullStreamInfoConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVsPullStreamInfoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.always)) {
      query["Always"] = request.always;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateVsPullStreamInfoConfigResponse>(await this.callApi(params, req, runtime), new UpdateVsPullStreamInfoConfigResponse({}));
  }

  /**
   * @param request UpdateVsPullStreamInfoConfigRequest
   * @return UpdateVsPullStreamInfoConfigResponse
   */
  async updateVsPullStreamInfoConfig(request: UpdateVsPullStreamInfoConfigRequest): Promise<UpdateVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  /**
   * @summary 应用上架
   *
   * @param request UploadCloudAppRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UploadCloudAppResponse
   */
  async uploadCloudAppWithOptions(request: UploadCloudAppRequest, runtime: $Util.RuntimeOptions): Promise<UploadCloudAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadCloudAppResponse>(await this.callApi(params, req, runtime), new UploadCloudAppResponse({}));
  }

  /**
   * @summary 应用上架
   *
   * @param request UploadCloudAppRequest
   * @return UploadCloudAppResponse
   */
  async uploadCloudApp(request: UploadCloudAppRequest): Promise<UploadCloudAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCloudAppWithOptions(request, runtime);
  }

  /**
   * @summary 文件上传
   *
   * @param request UploadFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UploadFileResponse
   */
  async uploadFileWithOptions(request: UploadFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.originUrl)) {
      query["OriginUrl"] = request.originUrl;
    }

    if (!Util.isUnset(request.targetPath)) {
      query["TargetPath"] = request.targetPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadFileResponse>(await this.callApi(params, req, runtime), new UploadFileResponse({}));
  }

  /**
   * @summary 文件上传
   *
   * @param request UploadFileRequest
   * @return UploadFileResponse
   */
  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  /**
   * @summary 上传公钥，用于安全登陆鉴权。
   *
   * @param request UploadPublicKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UploadPublicKeyResponse
   */
  async uploadPublicKeyWithOptions(request: UploadPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<UploadPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.keyGroup)) {
      query["KeyGroup"] = request.keyGroup;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadPublicKeyResponse>(await this.callApi(params, req, runtime), new UploadPublicKeyResponse({}));
  }

  /**
   * @summary 上传公钥，用于安全登陆鉴权。
   *
   * @param request UploadPublicKeyRequest
   * @return UploadPublicKeyResponse
   */
  async uploadPublicKey(request: UploadPublicKeyRequest): Promise<UploadPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadPublicKeyWithOptions(request, runtime);
  }

  /**
   * @param request VerifyVsDomainOwnerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwnerWithOptions(request: VerifyVsDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyVsDomainOwnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<VerifyVsDomainOwnerResponse>(await this.callApi(params, req, runtime), new VerifyVsDomainOwnerResponse({}));
  }

  /**
   * @param request VerifyVsDomainOwnerRequest
   * @return VerifyVsDomainOwnerResponse
   */
  async verifyVsDomainOwner(request: VerifyVsDomainOwnerRequest): Promise<VerifyVsDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyVsDomainOwnerWithOptions(request, runtime);
  }

}
