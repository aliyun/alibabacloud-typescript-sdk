// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddRegisteredDeviceRequest extends $tea.Model {
  dsn?: string;
  ownerId?: number;
  registerCode?: string;
  secretKey?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      dsn: 'Dsn',
      ownerId: 'OwnerId',
      registerCode: 'RegisterCode',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsn: 'string',
      ownerId: 'number',
      registerCode: 'string',
      secretKey: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisteredDeviceResponseBody extends $tea.Model {
  dsn?: string;
  id?: string;
  registerCode?: string;
  requestId?: string;
  secretKey?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      dsn: 'Dsn',
      id: 'Id',
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
      secretKey: 'SecretKey',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsn: 'string',
      id: 'string',
      registerCode: 'string',
      requestId: 'string',
      secretKey: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisteredDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRegisteredDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRegisteredDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisteredVendorRequest extends $tea.Model {
  description?: string;
  name?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisteredVendorResponseBody extends $tea.Model {
  description?: string;
  name?: string;
  requestId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      requestId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisteredVendorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRegisteredVendorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRegisteredVendorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRenderingDeviceInternetPortsRequest extends $tea.Model {
  ISP?: string;
  instanceIds?: string;
  internalPort?: string;
  ipProtocol?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ISP: 'ISP',
      instanceIds: 'InstanceIds',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISP: 'string',
      instanceIds: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRenderingDeviceInternetPortsResponseBody extends $tea.Model {
  instanceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRenderingDeviceInternetPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRenderingDeviceInternetPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRenderingDeviceInternetPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CaptureDeviceSnapshotRequest extends $tea.Model {
  deviceId?: string;
  mode?: string;
  ownerId?: number;
  snapshotConfig?: string;
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      mode: 'Mode',
      ownerId: 'OwnerId',
      snapshotConfig: 'SnapshotConfig',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      mode: 'string',
      ownerId: 'number',
      snapshotConfig: 'string',
      streamId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CaptureDeviceSnapshotResponseBody extends $tea.Model {
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

export class CaptureDeviceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CaptureDeviceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CaptureDeviceSnapshotResponseBody,
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

export class CreateAIConfigRequest extends $tea.Model {
  captureInterval?: number;
  configs?: string;
  description?: string;
  endTime?: number;
  features?: string;
  instanceId?: number;
  instanceType?: string;
  ownerId?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      captureInterval: 'CaptureInterval',
      configs: 'Configs',
      description: 'Description',
      endTime: 'EndTime',
      features: 'Features',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureInterval: 'number',
      configs: 'string',
      description: 'string',
      endTime: 'number',
      features: 'string',
      instanceId: 'number',
      instanceType: 'string',
      ownerId: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIConfigResponseBody extends $tea.Model {
  configId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAIConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAIConfigResponseBody,
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
  headers: { [key: string]: string };
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  alarmMethod?: string;
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

export class CreateRenderingDeviceRequest extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  clusterId?: string;
  count?: number;
  description?: string;
  edgeNodeName?: string;
  ISP?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceName?: string;
  ownerId?: number;
  password?: string;
  period?: number;
  periodUnit?: string;
  securityGroupId?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clusterId: 'ClusterId',
      count: 'Count',
      description: 'Description',
      edgeNodeName: 'EdgeNodeName',
      ISP: 'ISP',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      ownerId: 'OwnerId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      securityGroupId: 'SecurityGroupId',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clusterId: 'string',
      count: 'number',
      description: 'string',
      edgeNodeName: 'string',
      ISP: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      ownerId: 'number',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      securityGroupId: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingDeviceResponseBody extends $tea.Model {
  instanceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRenderingDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRenderingDeviceResponseBody,
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

export class DeleteAIConfigRequest extends $tea.Model {
  configId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAIConfigResponseBody extends $tea.Model {
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

export class DeleteAIConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAIConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAIConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketRequest extends $tea.Model {
  bucketName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBucketResponseBody extends $tea.Model {
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

export class DeleteBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBucketResponseBody,
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
  headers: { [key: string]: string };
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeletePurchasedDeviceRequest extends $tea.Model {
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

export class DeletePurchasedDeviceResponseBody extends $tea.Model {
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

export class DeletePurchasedDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePurchasedDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePurchasedDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDeviceInternetPortsRequest extends $tea.Model {
  ISP?: string;
  instanceIds?: string;
  internalPort?: string;
  ipProtocol?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ISP: 'ISP',
      instanceIds: 'InstanceIds',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISP: 'string',
      instanceIds: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDeviceInternetPortsResponseBody extends $tea.Model {
  instanceIds?: DeleteRenderingDeviceInternetPortsResponseBodyInstanceIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: DeleteRenderingDeviceInternetPortsResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDeviceInternetPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRenderingDeviceInternetPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRenderingDeviceInternetPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDevicesRequest extends $tea.Model {
  instanceIds?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDevicesResponseBody extends $tea.Model {
  failedIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRenderingDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRenderingDevicesResponseBody,
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

export class DescribeAIConfigRequest extends $tea.Model {
  configId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigResponseBody extends $tea.Model {
  AIConfig?: DescribeAIConfigResponseBodyAIConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIConfig: 'AIConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIConfig: DescribeAIConfigResponseBodyAIConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAIConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAIConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigListRequest extends $tea.Model {
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

export class DescribeAIConfigListResponseBody extends $tea.Model {
  AIConfigList?: DescribeAIConfigListResponseBodyAIConfigList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIConfigList: 'AIConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIConfigList: DescribeAIConfigListResponseBodyAIConfigList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAIConfigListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAIConfigListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIEventListRequest extends $tea.Model {
  endTime?: number;
  feature?: string;
  instanceId?: number;
  instanceType?: string;
  ownerId?: number;
  startTime?: number;
  triggered?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      feature: 'Feature',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      triggered: 'Triggered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      feature: 'string',
      instanceId: 'number',
      instanceType: 'string',
      ownerId: 'number',
      startTime: 'number',
      triggered: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIEventListResponseBody extends $tea.Model {
  AIEventList?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIEventList: 'AIEventList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIEventList: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAIEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAIEventListResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeClusterDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeContainerInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeExternalStreamURLRequest extends $tea.Model {
  kind?: string;
  ownerId?: number;
  profile?: string;
  txId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'Kind',
      ownerId: 'OwnerId',
      profile: 'Profile',
      txId: 'TxId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      ownerId: 'number',
      profile: 'string',
      txId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalStreamURLResponseBody extends $tea.Model {
  ip?: string;
  outProtocol?: string;
  port?: number;
  profile?: string;
  requestId?: string;
  txId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      outProtocol: 'OutProtocol',
      port: 'Port',
      profile: 'Profile',
      requestId: 'RequestId',
      txId: 'TxId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      outProtocol: 'string',
      port: 'number',
      profile: 'string',
      requestId: 'string',
      txId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExternalStreamURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExternalStreamURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExternalStreamURLResponseBody,
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

export class DescribeNodeDevicesInfoRequest extends $tea.Model {
  nodeName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeDevicesInfoResponseBody extends $tea.Model {
  nodeDevices?: DescribeNodeDevicesInfoResponseBodyNodeDevices[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeDevices: 'NodeDevices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeDevices: { 'type': 'array', 'itemType': DescribeNodeDevicesInfoResponseBodyNodeDevices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeDevicesInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNodeDevicesInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNodeDevicesInfoResponseBody,
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

export class DescribeRenderingDevicesRequest extends $tea.Model {
  instanceIds?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingDevicesResponseBody extends $tea.Model {
  devices?: DescribeRenderingDevicesResponseBodyDevices[];
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
      devices: { 'type': 'array', 'itemType': DescribeRenderingDevicesResponseBodyDevices },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRenderingDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRenderingDevicesResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodStreamURLRequest extends $tea.Model {
  ownerId?: number;
  txId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      txId: 'TxId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      txId: 'string',
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
  txId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      outProtocol: 'OutProtocol',
      port: 'Port',
      requestId: 'RequestId',
      txId: 'TxId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outProtocol: 'string',
      port: 'number',
      requestId: 'string',
      txId: 'string',
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
  headers: { [key: string]: string };
  body: DescribeVsDevicesDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeVsDomainOnlineUserNumRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  queryTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      queryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainOnlineUserNumResponseBody extends $tea.Model {
  onlineUserInfo?: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfo;
  requestId?: string;
  streamCount?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      onlineUserInfo: 'OnlineUserInfo',
      requestId: 'RequestId',
      streamCount: 'StreamCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineUserInfo: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfo,
      requestId: 'string',
      streamCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainOnlineUserNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsDomainOnlineUserNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsDomainOnlineUserNumResponseBody,
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

export class DescribeVsPullStreamConfigRequest extends $tea.Model {
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

export class DescribeVsPullStreamConfigResponseBody extends $tea.Model {
  liveAppRecordList?: DescribeVsPullStreamConfigResponseBodyLiveAppRecordList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAppRecordList: 'LiveAppRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecordList: DescribeVsPullStreamConfigResponseBodyLiveAppRecordList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsPullStreamConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsPullStreamConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsPullStreamConfigResponseBody,
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

export class DescribeVsStorageTrafficUsageDataRequest extends $tea.Model {
  bucket?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  splitBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageTrafficUsageDataResponseBody extends $tea.Model {
  requestId?: string;
  trafficUsage?: DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficUsage: 'TrafficUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficUsage: DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageTrafficUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsStorageTrafficUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsStorageTrafficUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageUsageDataRequest extends $tea.Model {
  bucket?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  splitBy?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageUsageDataResponseBody extends $tea.Model {
  requestId?: string;
  storageUsage?: DescribeVsStorageUsageDataResponseBodyStorageUsage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageUsage: 'StorageUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageUsage: DescribeVsStorageUsageDataResponseBodyStorageUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVsStorageUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVsStorageUsageDataResponseBody,
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

export class GetBucketInfoRequest extends $tea.Model {
  bucketName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInfoResponseBody extends $tea.Model {
  bucketInfo?: GetBucketInfoResponseBodyBucketInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketInfo: 'BucketInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfo: GetBucketInfoResponseBodyBucketInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBucketInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBucketInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBucketInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTotalRequest extends $tea.Model {
  bucketName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTotalResponseBody extends $tea.Model {
  objectCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      objectCount: 'ObjectCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetObjectTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetObjectTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetObjectTotalResponseBody,
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

export class ListBucketsRequest extends $tea.Model {
  keyword?: string;
  marker?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      marker: 'Marker',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      marker: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsResponseBody extends $tea.Model {
  bucketInfos?: ListBucketsResponseBodyBucketInfos[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bucketInfos: 'BucketInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketInfos: { 'type': 'array', 'itemType': ListBucketsResponseBodyBucketInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBucketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBucketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsRequest extends $tea.Model {
  bucketName?: string;
  continuationToken?: string;
  delimiter?: string;
  encodingType?: string;
  marker?: string;
  maxKeys?: number;
  ownerId?: number;
  prefix?: string;
  startAfter?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      continuationToken: 'ContinuationToken',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      ownerId: 'OwnerId',
      prefix: 'Prefix',
      startAfter: 'StartAfter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      continuationToken: 'string',
      delimiter: 'string',
      encodingType: 'string',
      marker: 'string',
      maxKeys: 'number',
      ownerId: 'number',
      prefix: 'string',
      startAfter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsResponseBody extends $tea.Model {
  bucketName?: string;
  commonPrefixes?: string[];
  contents?: ListObjectsResponseBodyContents[];
  continuationToken?: string;
  delimiter?: string;
  encodingType?: string;
  isTruncated?: boolean;
  keyCount?: number;
  marker?: string;
  maxKeys?: number;
  nextContinuationToken?: string;
  nextMarker?: string;
  prefix?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      commonPrefixes: 'CommonPrefixes',
      contents: 'Contents',
      continuationToken: 'ContinuationToken',
      delimiter: 'Delimiter',
      encodingType: 'EncodingType',
      isTruncated: 'IsTruncated',
      keyCount: 'KeyCount',
      marker: 'Marker',
      maxKeys: 'MaxKeys',
      nextContinuationToken: 'NextContinuationToken',
      nextMarker: 'NextMarker',
      prefix: 'Prefix',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      commonPrefixes: { 'type': 'array', 'itemType': 'string' },
      contents: { 'type': 'array', 'itemType': ListObjectsResponseBodyContents },
      continuationToken: 'string',
      delimiter: 'string',
      encodingType: 'string',
      isTruncated: 'boolean',
      keyCount: 'number',
      marker: 'string',
      maxKeys: 'number',
      nextContinuationToken: 'string',
      nextMarker: 'string',
      prefix: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceRequest extends $tea.Model {
  alarmMethod?: string;
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

export class ModifyPurchasedDeviceRequest extends $tea.Model {
  description?: string;
  id?: string;
  name?: string;
  orderId?: string;
  ownerId?: number;
  registerCode?: string;
  subType?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      registerCode: 'RegisterCode',
      subType: 'SubType',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      orderId: 'string',
      ownerId: 'number',
      registerCode: 'string',
      subType: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPurchasedDeviceResponseBody extends $tea.Model {
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

export class ModifyPurchasedDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPurchasedDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPurchasedDeviceResponseBody,
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

export class OperateRenderingDevicesRequest extends $tea.Model {
  instanceIds?: string;
  operation?: string;
  ownerId?: number;
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      operation: 'Operation',
      ownerId: 'OwnerId',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      operation: 'string',
      ownerId: 'number',
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRenderingDevicesResponseBody extends $tea.Model {
  failedIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateRenderingDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateRenderingDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateRenderingDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareUploadRequest extends $tea.Model {
  bucketName?: string;
  clientIp?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      clientIp: 'ClientIp',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      clientIp: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareUploadResponseBody extends $tea.Model {
  bucketName?: string;
  endpoint?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareUploadResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PrepareUploadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PrepareUploadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketRequest extends $tea.Model {
  bucketAcl?: string;
  bucketName?: string;
  comment?: string;
  dataRedundancyType?: string;
  dispatcherType?: string;
  endpoint?: string;
  ownerId?: number;
  resourceType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      dataRedundancyType: 'DataRedundancyType',
      dispatcherType: 'DispatcherType',
      endpoint: 'Endpoint',
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      dataRedundancyType: 'string',
      dispatcherType: 'string',
      endpoint: 'string',
      ownerId: 'number',
      resourceType: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutBucketResponseBody extends $tea.Model {
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

export class PutBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetRenderingDevicesRequest extends $tea.Model {
  imageId?: string;
  instanceIds?: string;
  ownerId?: number;
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIds: 'string',
      ownerId: 'number',
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetRenderingDevicesResponseBody extends $tea.Model {
  failedIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetRenderingDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetRenderingDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetRenderingDevicesResponseBody,
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

export class StopParentPlatformRequest extends $tea.Model {
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

export class StopParentPlatformResponseBody extends $tea.Model {
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

export class StopParentPlatformResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopParentPlatformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopParentPlatformResponseBody,
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

export class UpdateAIConfigRequest extends $tea.Model {
  captureInterval?: number;
  configId?: string;
  configs?: string;
  description?: string;
  endTime?: number;
  features?: string;
  ownerId?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      captureInterval: 'CaptureInterval',
      configId: 'ConfigId',
      configs: 'Configs',
      description: 'Description',
      endTime: 'EndTime',
      features: 'Features',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureInterval: 'number',
      configId: 'string',
      configs: 'string',
      description: 'string',
      endTime: 'number',
      features: 'string',
      ownerId: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAIConfigResponseBody extends $tea.Model {
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

export class UpdateAIConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAIConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAIConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBucketInfoRequest extends $tea.Model {
  bucketName?: string;
  comment?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      comment: 'Comment',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      comment: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBucketInfoResponseBody extends $tea.Model {
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

export class UpdateBucketInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBucketInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBucketInfoResponseBody,
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
  headers: { [key: string]: string };
  body: UpdateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingDeviceSpecRequest extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  description?: string;
  effectiveTime?: boolean;
  instanceIds?: string;
  ownerId?: number;
  period?: number;
  periodUnit?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      description: 'Description',
      effectiveTime: 'EffectiveTime',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      description: 'string',
      effectiveTime: 'boolean',
      instanceIds: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingDeviceSpecResponseBody extends $tea.Model {
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

export class UpdateRenderingDeviceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRenderingDeviceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRenderingDeviceSpecResponseBody,
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

export class UpgradeRenderingDevicesHostOSRequest extends $tea.Model {
  instanceIds?: string;
  ownerId?: number;
  romName?: string;
  romPath?: string;
  romVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      romName: 'RomName',
      romPath: 'RomPath',
      romVersion: 'RomVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      romName: 'string',
      romPath: 'string',
      romVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeRenderingDevicesHostOSResponseBody extends $tea.Model {
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

export class UpgradeRenderingDevicesHostOSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeRenderingDevicesHostOSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeRenderingDevicesHostOSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeRenderingDevicesImageRequest extends $tea.Model {
  imageId?: string;
  instanceIds?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceIds: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeRenderingDevicesImageResponseBody extends $tea.Model {
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

export class UpgradeRenderingDevicesImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeRenderingDevicesImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeRenderingDevicesImageResponseBody,
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

export class DeleteRenderingDeviceInternetPortsResponseBodyInstanceIds extends $tea.Model {
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigResponseBodyAIConfig extends $tea.Model {
  captureInterval?: number;
  configs?: string;
  description?: string;
  endTime?: number;
  features?: string;
  instanceId?: number;
  instanceType?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      captureInterval: 'CaptureInterval',
      configs: 'Configs',
      description: 'Description',
      endTime: 'EndTime',
      features: 'Features',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureInterval: 'number',
      configs: 'string',
      description: 'string',
      endTime: 'number',
      features: 'string',
      instanceId: 'number',
      instanceType: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigListResponseBodyAIConfigListAIConfigList extends $tea.Model {
  captureInterval?: number;
  configId?: string;
  configs?: string;
  description?: string;
  endTime?: number;
  features?: string;
  instanceId?: number;
  instanceType?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      captureInterval: 'CaptureInterval',
      configId: 'ConfigId',
      configs: 'Configs',
      description: 'Description',
      endTime: 'EndTime',
      features: 'Features',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureInterval: 'number',
      configId: 'string',
      configs: 'string',
      description: 'string',
      endTime: 'number',
      features: 'string',
      instanceId: 'number',
      instanceType: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIConfigListResponseBodyAIConfigList extends $tea.Model {
  AIConfigList?: DescribeAIConfigListResponseBodyAIConfigListAIConfigList[];
  static names(): { [key: string]: string } {
    return {
      AIConfigList: 'AIConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIConfigList: { 'type': 'array', 'itemType': DescribeAIConfigListResponseBodyAIConfigListAIConfigList },
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      podId: 'PodId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeClusterDevicesResponseBodyDevicesPodInfosNetwork },
      podId: 'string',
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

export class DescribeNodeDevicesInfoResponseBodyNodeDevicesDeviceInfos extends $tea.Model {
  IP?: string;
  instanceId?: string;
  name?: string;
  server?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      name: 'Name',
      server: 'Server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      name: 'string',
      server: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeDevicesInfoResponseBodyNodeDevices extends $tea.Model {
  deviceInfos?: DescribeNodeDevicesInfoResponseBodyNodeDevicesDeviceInfos[];
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfos: 'DeviceInfos',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfos: { 'type': 'array', 'itemType': DescribeNodeDevicesInfoResponseBodyNodeDevicesDeviceInfos },
      nodeName: 'string',
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

export class DescribeRenderingDevicesResponseBodyDevicesIpInfos extends $tea.Model {
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

export class DescribeRenderingDevicesResponseBodyDevicesPodInfosNetwork extends $tea.Model {
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

export class DescribeRenderingDevicesResponseBodyDevicesPodInfos extends $tea.Model {
  network?: DescribeRenderingDevicesResponseBodyDevicesPodInfosNetwork[];
  podId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      podId: 'PodId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeRenderingDevicesResponseBodyDevicesPodInfosNetwork },
      podId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingDevicesResponseBodyDevices extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  clusterId?: string;
  description?: string;
  edgeNodeName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  ipInfos?: DescribeRenderingDevicesResponseBodyDevicesIpInfos[];
  macAddress?: string;
  period?: number;
  periodUnit?: string;
  platformType?: string;
  podInfos?: DescribeRenderingDevicesResponseBodyDevicesPodInfos[];
  serverName?: string;
  specification?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clusterId: 'ClusterId',
      description: 'Description',
      edgeNodeName: 'EdgeNodeName',
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
      serverName: 'ServerName',
      specification: 'Specification',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clusterId: 'string',
      description: 'string',
      edgeNodeName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ipInfos: { 'type': 'array', 'itemType': DescribeRenderingDevicesResponseBodyDevicesIpInfos },
      macAddress: 'string',
      period: 'number',
      periodUnit: 'string',
      platformType: 'string',
      podInfos: { 'type': 'array', 'itemType': DescribeRenderingDevicesResponseBodyDevicesPodInfos },
      serverName: 'string',
      specification: 'string',
      status: 'string',
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

export class DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo extends $tea.Model {
  transcodeTemplate?: string;
  userNumber?: number;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplate: 'TranscodeTemplate',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplate: 'string',
      userNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos extends $tea.Model {
  info?: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo[];
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfosInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo extends $tea.Model {
  infos?: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      infos: 'Infos',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infos: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfoInfos,
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfo extends $tea.Model {
  liveStreamOnlineUserNumInfo?: DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamOnlineUserNumInfo: 'LiveStreamOnlineUserNumInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamOnlineUserNumInfo: { 'type': 'array', 'itemType': DescribeVsDomainOnlineUserNumResponseBodyOnlineUserInfoLiveStreamOnlineUserNumInfo },
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

export class DescribeVsPullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord extends $tea.Model {
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

export class DescribeVsPullStreamConfigResponseBodyLiveAppRecordList extends $tea.Model {
  liveAppRecord?: DescribeVsPullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord[];
  static names(): { [key: string]: string } {
    return {
      liveAppRecord: 'LiveAppRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAppRecord: { 'type': 'array', 'itemType': DescribeVsPullStreamConfigResponseBodyLiveAppRecordListLiveAppRecord },
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

export class DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsageTrafficUsageDataModule extends $tea.Model {
  bucket?: string;
  lanBandwidthInDataValue?: number;
  lanBandwidthOutDataValue?: number;
  lanTrafficInDataValue?: number;
  lanTrafficOutDataValue?: number;
  timeStamp?: string;
  wanBandwidthInDataValue?: number;
  wanBandwidthOutDataValue?: number;
  wanTrafficInDataValue?: number;
  wanTrafficOutDataValue?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      lanBandwidthInDataValue: 'LanBandwidthInDataValue',
      lanBandwidthOutDataValue: 'LanBandwidthOutDataValue',
      lanTrafficInDataValue: 'LanTrafficInDataValue',
      lanTrafficOutDataValue: 'LanTrafficOutDataValue',
      timeStamp: 'TimeStamp',
      wanBandwidthInDataValue: 'WanBandwidthInDataValue',
      wanBandwidthOutDataValue: 'WanBandwidthOutDataValue',
      wanTrafficInDataValue: 'WanTrafficInDataValue',
      wanTrafficOutDataValue: 'WanTrafficOutDataValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      lanBandwidthInDataValue: 'number',
      lanBandwidthOutDataValue: 'number',
      lanTrafficInDataValue: 'number',
      lanTrafficOutDataValue: 'number',
      timeStamp: 'string',
      wanBandwidthInDataValue: 'number',
      wanBandwidthOutDataValue: 'number',
      wanTrafficInDataValue: 'number',
      wanTrafficOutDataValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsage extends $tea.Model {
  trafficUsageDataModule?: DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsageTrafficUsageDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficUsageDataModule: 'TrafficUsageDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficUsageDataModule: { 'type': 'array', 'itemType': DescribeVsStorageTrafficUsageDataResponseBodyTrafficUsageTrafficUsageDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageUsageDataResponseBodyStorageUsageStorageUsageDataModule extends $tea.Model {
  bucket?: string;
  storageDataValue?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      storageDataValue: 'StorageDataValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      storageDataValue: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsStorageUsageDataResponseBodyStorageUsage extends $tea.Model {
  storageUsageDataModule?: DescribeVsStorageUsageDataResponseBodyStorageUsageStorageUsageDataModule[];
  static names(): { [key: string]: string } {
    return {
      storageUsageDataModule: 'StorageUsageDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageUsageDataModule: { 'type': 'array', 'itemType': DescribeVsStorageUsageDataResponseBodyStorageUsageStorageUsageDataModule },
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

export class GetBucketInfoResponseBodyBucketInfo extends $tea.Model {
  bucketAcl?: string;
  bucketName?: string;
  comment?: string;
  createTime?: string;
  dataRedundancyType?: string;
  dispatcherType?: string;
  endpoint?: string;
  modifyTime?: string;
  resourceType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataRedundancyType: 'DataRedundancyType',
      dispatcherType: 'DispatcherType',
      endpoint: 'Endpoint',
      modifyTime: 'ModifyTime',
      resourceType: 'ResourceType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      createTime: 'string',
      dataRedundancyType: 'string',
      dispatcherType: 'string',
      endpoint: 'string',
      modifyTime: 'string',
      resourceType: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBucketsResponseBodyBucketInfos extends $tea.Model {
  bucketAcl?: string;
  bucketName?: string;
  comment?: string;
  createTime?: string;
  dataRedundancyType?: string;
  dispatcherType?: string;
  endpoint?: string;
  modifyTime?: string;
  resourceType?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
      comment: 'Comment',
      createTime: 'CreateTime',
      dataRedundancyType: 'DataRedundancyType',
      dispatcherType: 'DispatcherType',
      endpoint: 'Endpoint',
      modifyTime: 'ModifyTime',
      resourceType: 'ResourceType',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
      comment: 'string',
      createTime: 'string',
      dataRedundancyType: 'string',
      dispatcherType: 'string',
      endpoint: 'string',
      modifyTime: 'string',
      resourceType: 'string',
      storageClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListObjectsResponseBodyContents extends $tea.Model {
  ETag?: string;
  key?: string;
  lastModified?: string;
  size?: number;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      ETag: 'ETag',
      key: 'Key',
      lastModified: 'LastModified',
      size: 'Size',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ETag: 'string',
      key: 'string',
      lastModified: 'string',
      size: 'number',
      storageClass: 'string',
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

  async addRegisteredDeviceWithOptions(request: AddRegisteredDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddRegisteredDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dsn)) {
      query["Dsn"] = request.dsn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.registerCode)) {
      query["RegisterCode"] = request.registerCode;
    }

    if (!Util.isUnset(request.secretKey)) {
      query["SecretKey"] = request.secretKey;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRegisteredDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRegisteredDeviceResponse>(await this.callApi(params, req, runtime), new AddRegisteredDeviceResponse({}));
  }

  async addRegisteredDevice(request: AddRegisteredDeviceRequest): Promise<AddRegisteredDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRegisteredDeviceWithOptions(request, runtime);
  }

  async addRegisteredVendorWithOptions(request: AddRegisteredVendorRequest, runtime: $Util.RuntimeOptions): Promise<AddRegisteredVendorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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
      action: "AddRegisteredVendor",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRegisteredVendorResponse>(await this.callApi(params, req, runtime), new AddRegisteredVendorResponse({}));
  }

  async addRegisteredVendor(request: AddRegisteredVendorRequest): Promise<AddRegisteredVendorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRegisteredVendorWithOptions(request, runtime);
  }

  async addRenderingDeviceInternetPortsWithOptions(request: AddRenderingDeviceInternetPortsRequest, runtime: $Util.RuntimeOptions): Promise<AddRenderingDeviceInternetPortsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRenderingDeviceInternetPorts",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRenderingDeviceInternetPortsResponse>(await this.callApi(params, req, runtime), new AddRenderingDeviceInternetPortsResponse({}));
  }

  async addRenderingDeviceInternetPorts(request: AddRenderingDeviceInternetPortsRequest): Promise<AddRenderingDeviceInternetPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRenderingDeviceInternetPortsWithOptions(request, runtime);
  }

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

  async addVsPullStreamInfoConfig(request: AddVsPullStreamInfoConfigRequest): Promise<AddVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVsPullStreamInfoConfigWithOptions(request, runtime);
  }

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

  async batchBindDirectories(request: BatchBindDirectoriesRequest): Promise<BatchBindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDirectoriesWithOptions(request, runtime);
  }

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

  async batchBindParentPlatformDevices(request: BatchBindParentPlatformDevicesRequest): Promise<BatchBindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindParentPlatformDevicesWithOptions(request, runtime);
  }

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

  async batchBindPurchasedDevices(request: BatchBindPurchasedDevicesRequest): Promise<BatchBindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindPurchasedDevicesWithOptions(request, runtime);
  }

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

  async batchBindTemplate(request: BatchBindTemplateRequest): Promise<BatchBindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplateWithOptions(request, runtime);
  }

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

  async batchBindTemplates(request: BatchBindTemplatesRequest): Promise<BatchBindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindTemplatesWithOptions(request, runtime);
  }

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

  async batchDeleteDevices(request: BatchDeleteDevicesRequest): Promise<BatchDeleteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDevicesWithOptions(request, runtime);
  }

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

  async batchDeleteVsDomainConfigs(request: BatchDeleteVsDomainConfigsRequest): Promise<BatchDeleteVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteVsDomainConfigsWithOptions(request, runtime);
  }

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

  async batchForbidVsStream(request: BatchForbidVsStreamRequest): Promise<BatchForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchForbidVsStreamWithOptions(request, runtime);
  }

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

  async batchResumeVsStream(request: BatchResumeVsStreamRequest): Promise<BatchResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchResumeVsStreamWithOptions(request, runtime);
  }

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

  async batchSetVsDomainConfigs(request: BatchSetVsDomainConfigsRequest): Promise<BatchSetVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetVsDomainConfigsWithOptions(request, runtime);
  }

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

  async batchStartDevices(request: BatchStartDevicesRequest): Promise<BatchStartDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartDevicesWithOptions(request, runtime);
  }

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

  async batchStartStreams(request: BatchStartStreamsRequest): Promise<BatchStartStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartStreamsWithOptions(request, runtime);
  }

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

  async batchStopDevices(request: BatchStopDevicesRequest): Promise<BatchStopDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopDevicesWithOptions(request, runtime);
  }

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

  async batchStopStreams(request: BatchStopStreamsRequest): Promise<BatchStopStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopStreamsWithOptions(request, runtime);
  }

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

  async batchUnbindDirectories(request: BatchUnbindDirectoriesRequest): Promise<BatchUnbindDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindDirectoriesWithOptions(request, runtime);
  }

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

  async batchUnbindParentPlatformDevices(request: BatchUnbindParentPlatformDevicesRequest): Promise<BatchUnbindParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindParentPlatformDevicesWithOptions(request, runtime);
  }

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

  async batchUnbindPurchasedDevices(request: BatchUnbindPurchasedDevicesRequest): Promise<BatchUnbindPurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindPurchasedDevicesWithOptions(request, runtime);
  }

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

  async batchUnbindTemplate(request: BatchUnbindTemplateRequest): Promise<BatchUnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplateWithOptions(request, runtime);
  }

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

  async batchUnbindTemplates(request: BatchUnbindTemplatesRequest): Promise<BatchUnbindTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindTemplatesWithOptions(request, runtime);
  }

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

  async bindDirectory(request: BindDirectoryRequest): Promise<BindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDirectoryWithOptions(request, runtime);
  }

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

  async bindParentPlatformDevice(request: BindParentPlatformDeviceRequest): Promise<BindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindParentPlatformDeviceWithOptions(request, runtime);
  }

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

  async bindPurchasedDevice(request: BindPurchasedDeviceRequest): Promise<BindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPurchasedDeviceWithOptions(request, runtime);
  }

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

  async bindTemplate(request: BindTemplateRequest): Promise<BindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTemplateWithOptions(request, runtime);
  }

  async captureDeviceSnapshotWithOptions(request: CaptureDeviceSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CaptureDeviceSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.snapshotConfig)) {
      query["SnapshotConfig"] = request.snapshotConfig;
    }

    if (!Util.isUnset(request.streamId)) {
      query["StreamId"] = request.streamId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CaptureDeviceSnapshot",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CaptureDeviceSnapshotResponse>(await this.callApi(params, req, runtime), new CaptureDeviceSnapshotResponse({}));
  }

  async captureDeviceSnapshot(request: CaptureDeviceSnapshotRequest): Promise<CaptureDeviceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.captureDeviceSnapshotWithOptions(request, runtime);
  }

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

  async continuousAdjust(request: ContinuousAdjustRequest): Promise<ContinuousAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousAdjustWithOptions(request, runtime);
  }

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

  async continuousMove(request: ContinuousMoveRequest): Promise<ContinuousMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuousMoveWithOptions(request, runtime);
  }

  async createAIConfigWithOptions(request: CreateAIConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateAIConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.captureInterval)) {
      query["CaptureInterval"] = request.captureInterval;
    }

    if (!Util.isUnset(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.features)) {
      query["Features"] = request.features;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAIConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAIConfigResponse>(await this.callApi(params, req, runtime), new CreateAIConfigResponse({}));
  }

  async createAIConfig(request: CreateAIConfigRequest): Promise<CreateAIConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAIConfigWithOptions(request, runtime);
  }

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

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
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

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

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

  async createDeviceAlarm(request: CreateDeviceAlarmRequest): Promise<CreateDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceAlarmWithOptions(request, runtime);
  }

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

  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

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

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

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

  async createParentPlatform(request: CreateParentPlatformRequest): Promise<CreateParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParentPlatformWithOptions(request, runtime);
  }

  async createRenderingDeviceWithOptions(request: CreateRenderingDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRenderingDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.edgeNodeName)) {
      query["EdgeNodeName"] = request.edgeNodeName;
    }

    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRenderingDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRenderingDeviceResponse>(await this.callApi(params, req, runtime), new CreateRenderingDeviceResponse({}));
  }

  async createRenderingDevice(request: CreateRenderingDeviceRequest): Promise<CreateRenderingDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRenderingDeviceWithOptions(request, runtime);
  }

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

  async createStreamSnapshot(request: CreateStreamSnapshotRequest): Promise<CreateStreamSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamSnapshotWithOptions(request, runtime);
  }

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

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteAIConfigWithOptions(request: DeleteAIConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAIConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAIConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAIConfigResponse>(await this.callApi(params, req, runtime), new DeleteAIConfigResponse({}));
  }

  async deleteAIConfig(request: DeleteAIConfigRequest): Promise<DeleteAIConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAIConfigWithOptions(request, runtime);
  }

  async deleteBucketWithOptions(request: DeleteBucketRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBucket",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBucketResponse>(await this.callApi(params, req, runtime), new DeleteBucketResponse({}));
  }

  async deleteBucket(request: DeleteBucketRequest): Promise<DeleteBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBucketWithOptions(request, runtime);
  }

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

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

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

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

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

  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

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

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

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

  async deleteParentPlatform(request: DeleteParentPlatformRequest): Promise<DeleteParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParentPlatformWithOptions(request, runtime);
  }

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

  async deletePreset(request: DeletePresetRequest): Promise<DeletePresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePresetWithOptions(request, runtime);
  }

  async deletePurchasedDeviceWithOptions(request: DeletePurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeletePurchasedDeviceResponse> {
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
      action: "DeletePurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePurchasedDeviceResponse>(await this.callApi(params, req, runtime), new DeletePurchasedDeviceResponse({}));
  }

  async deletePurchasedDevice(request: DeletePurchasedDeviceRequest): Promise<DeletePurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePurchasedDeviceWithOptions(request, runtime);
  }

  async deleteRenderingDeviceInternetPortsWithOptions(request: DeleteRenderingDeviceInternetPortsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRenderingDeviceInternetPortsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ISP)) {
      query["ISP"] = request.ISP;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.internalPort)) {
      query["InternalPort"] = request.internalPort;
    }

    if (!Util.isUnset(request.ipProtocol)) {
      query["IpProtocol"] = request.ipProtocol;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRenderingDeviceInternetPorts",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRenderingDeviceInternetPortsResponse>(await this.callApi(params, req, runtime), new DeleteRenderingDeviceInternetPortsResponse({}));
  }

  async deleteRenderingDeviceInternetPorts(request: DeleteRenderingDeviceInternetPortsRequest): Promise<DeleteRenderingDeviceInternetPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRenderingDeviceInternetPortsWithOptions(request, runtime);
  }

  async deleteRenderingDevicesWithOptions(request: DeleteRenderingDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRenderingDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRenderingDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRenderingDevicesResponse>(await this.callApi(params, req, runtime), new DeleteRenderingDevicesResponse({}));
  }

  async deleteRenderingDevices(request: DeleteRenderingDevicesRequest): Promise<DeleteRenderingDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRenderingDevicesWithOptions(request, runtime);
  }

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

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

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

  async deleteVsPullStreamInfoConfig(request: DeleteVsPullStreamInfoConfigRequest): Promise<DeleteVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsPullStreamInfoConfigWithOptions(request, runtime);
  }

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

  async deleteVsStreamsNotifyUrlConfig(request: DeleteVsStreamsNotifyUrlConfigRequest): Promise<DeleteVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

  async describeAIConfigWithOptions(request: DescribeAIConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAIConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAIConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAIConfigResponse>(await this.callApi(params, req, runtime), new DescribeAIConfigResponse({}));
  }

  async describeAIConfig(request: DescribeAIConfigRequest): Promise<DescribeAIConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAIConfigWithOptions(request, runtime);
  }

  async describeAIConfigListWithOptions(request: DescribeAIConfigListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAIConfigListResponse> {
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
      action: "DescribeAIConfigList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAIConfigListResponse>(await this.callApi(params, req, runtime), new DescribeAIConfigListResponse({}));
  }

  async describeAIConfigList(request: DescribeAIConfigListRequest): Promise<DescribeAIConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAIConfigListWithOptions(request, runtime);
  }

  async describeAIEventListWithOptions(request: DescribeAIEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAIEventListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAIEventList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAIEventListResponse>(await this.callApi(params, req, runtime), new DescribeAIEventListResponse({}));
  }

  async describeAIEventList(request: DescribeAIEventListRequest): Promise<DescribeAIEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAIEventListWithOptions(request, runtime);
  }

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

  async describeAccountStat(request: DescribeAccountStatRequest): Promise<DescribeAccountStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountStatWithOptions(request, runtime);
  }

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

  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

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

  async describeClusterDevices(request: DescribeClusterDevicesRequest): Promise<DescribeClusterDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterDevicesWithOptions(request, runtime);
  }

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

  async describeClusters(request: DescribeClustersRequest): Promise<DescribeClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClustersWithOptions(request, runtime);
  }

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

  async describeContainerInstanceId(request: DescribeContainerInstanceIdRequest): Promise<DescribeContainerInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerInstanceIdWithOptions(request, runtime);
  }

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

  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

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

  async describeDeviceChannels(request: DescribeDeviceChannelsRequest): Promise<DescribeDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceChannelsWithOptions(request, runtime);
  }

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

  async describeDeviceGateway(request: DescribeDeviceGatewayRequest): Promise<DescribeDeviceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceGatewayWithOptions(request, runtime);
  }

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

  async describeDeviceURL(request: DescribeDeviceURLRequest): Promise<DescribeDeviceURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceURLWithOptions(request, runtime);
  }

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

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

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

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

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

  async describeDirectory(request: DescribeDirectoryRequest): Promise<DescribeDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoryWithOptions(request, runtime);
  }

  async describeExternalStreamURLWithOptions(request: DescribeExternalStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExternalStreamURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.kind)) {
      query["Kind"] = request.kind;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!Util.isUnset(request.txId)) {
      query["TxId"] = request.txId;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExternalStreamURL",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExternalStreamURLResponse>(await this.callApi(params, req, runtime), new DescribeExternalStreamURLResponse({}));
  }

  async describeExternalStreamURL(request: DescribeExternalStreamURLRequest): Promise<DescribeExternalStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExternalStreamURLWithOptions(request, runtime);
  }

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

  async describeGroup(request: DescribeGroupRequest): Promise<DescribeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupWithOptions(request, runtime);
  }

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

  async describeGroups(request: DescribeGroupsRequest): Promise<DescribeGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  async describeNodeDevicesInfoWithOptions(request: DescribeNodeDevicesInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeDevicesInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeDevicesInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeDevicesInfoResponse>(await this.callApi(params, req, runtime), new DescribeNodeDevicesInfoResponse({}));
  }

  async describeNodeDevicesInfo(request: DescribeNodeDevicesInfoRequest): Promise<DescribeNodeDevicesInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeDevicesInfoWithOptions(request, runtime);
  }

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

  async describeParentPlatform(request: DescribeParentPlatformRequest): Promise<DescribeParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformWithOptions(request, runtime);
  }

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

  async describeParentPlatformDevices(request: DescribeParentPlatformDevicesRequest): Promise<DescribeParentPlatformDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformDevicesWithOptions(request, runtime);
  }

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

  async describeParentPlatforms(request: DescribeParentPlatformsRequest): Promise<DescribeParentPlatformsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParentPlatformsWithOptions(request, runtime);
  }

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

  async describePresets(request: DescribePresetsRequest): Promise<DescribePresetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePresetsWithOptions(request, runtime);
  }

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

  async describePurchasedDevice(request: DescribePurchasedDeviceRequest): Promise<DescribePurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDeviceWithOptions(request, runtime);
  }

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

  async describePurchasedDevices(request: DescribePurchasedDevicesRequest): Promise<DescribePurchasedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePurchasedDevicesWithOptions(request, runtime);
  }

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

  async describeRecords(request: DescribeRecordsRequest): Promise<DescribeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordsWithOptions(request, runtime);
  }

  async describeRenderingDevicesWithOptions(request: DescribeRenderingDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenderingDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRenderingDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRenderingDevicesResponse>(await this.callApi(params, req, runtime), new DescribeRenderingDevicesResponse({}));
  }

  async describeRenderingDevices(request: DescribeRenderingDevicesRequest): Promise<DescribeRenderingDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenderingDevicesWithOptions(request, runtime);
  }

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

  async describeStream(request: DescribeStreamRequest): Promise<DescribeStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamWithOptions(request, runtime);
  }

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

  async describeStreamURL(request: DescribeStreamURLRequest): Promise<DescribeStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamURLWithOptions(request, runtime);
  }

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

  async describeStreamVodList(request: DescribeStreamVodListRequest): Promise<DescribeStreamVodListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamVodListWithOptions(request, runtime);
  }

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

  async describeStreams(request: DescribeStreamsRequest): Promise<DescribeStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

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

  async describeTemplate(request: DescribeTemplateRequest): Promise<DescribeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplateWithOptions(request, runtime);
  }

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

  async describeTemplates(request: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTemplatesWithOptions(request, runtime);
  }

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

  async describeUserDevices(request: DescribeUserDevicesRequest): Promise<DescribeUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDevicesWithOptions(request, runtime);
  }

  async describeVodStreamURLWithOptions(request: DescribeVodStreamURLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVodStreamURLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.txId)) {
      query["TxId"] = request.txId;
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

  async describeVodStreamURL(request: DescribeVodStreamURLRequest): Promise<DescribeVodStreamURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVodStreamURLWithOptions(request, runtime);
  }

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

  async describeVsCertificateDetail(request: DescribeVsCertificateDetailRequest): Promise<DescribeVsCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateDetailWithOptions(request, runtime);
  }

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

  async describeVsCertificateList(request: DescribeVsCertificateListRequest): Promise<DescribeVsCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsCertificateListWithOptions(request, runtime);
  }

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

  async describeVsDevicesData(request: DescribeVsDevicesDataRequest): Promise<DescribeVsDevicesDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDevicesDataWithOptions(request, runtime);
  }

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

  async describeVsDomainBpsData(request: DescribeVsDomainBpsDataRequest): Promise<DescribeVsDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainBpsDataWithOptions(request, runtime);
  }

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

  async describeVsDomainCertificateInfo(request: DescribeVsDomainCertificateInfoRequest): Promise<DescribeVsDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainCertificateInfoWithOptions(request, runtime);
  }

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

  async describeVsDomainConfigs(request: DescribeVsDomainConfigsRequest): Promise<DescribeVsDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainConfigsWithOptions(request, runtime);
  }

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

  async describeVsDomainDetail(request: DescribeVsDomainDetailRequest): Promise<DescribeVsDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainDetailWithOptions(request, runtime);
  }

  async describeVsDomainOnlineUserNumWithOptions(request: DescribeVsDomainOnlineUserNumRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsDomainOnlineUserNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.queryTime)) {
      query["QueryTime"] = request.queryTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVsDomainOnlineUserNum",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVsDomainOnlineUserNumResponse>(await this.callApi(params, req, runtime), new DescribeVsDomainOnlineUserNumResponse({}));
  }

  async describeVsDomainOnlineUserNum(request: DescribeVsDomainOnlineUserNumRequest): Promise<DescribeVsDomainOnlineUserNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainOnlineUserNumWithOptions(request, runtime);
  }

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

  async describeVsDomainPvData(request: DescribeVsDomainPvDataRequest): Promise<DescribeVsDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvDataWithOptions(request, runtime);
  }

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

  async describeVsDomainPvUvData(request: DescribeVsDomainPvUvDataRequest): Promise<DescribeVsDomainPvUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainPvUvDataWithOptions(request, runtime);
  }

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

  async describeVsDomainRecordData(request: DescribeVsDomainRecordDataRequest): Promise<DescribeVsDomainRecordDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRecordDataWithOptions(request, runtime);
  }

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

  async describeVsDomainRegionData(request: DescribeVsDomainRegionDataRequest): Promise<DescribeVsDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainRegionDataWithOptions(request, runtime);
  }

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

  async describeVsDomainReqBpsData(request: DescribeVsDomainReqBpsDataRequest): Promise<DescribeVsDomainReqBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqBpsDataWithOptions(request, runtime);
  }

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

  async describeVsDomainReqTrafficData(request: DescribeVsDomainReqTrafficDataRequest): Promise<DescribeVsDomainReqTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainReqTrafficDataWithOptions(request, runtime);
  }

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

  async describeVsDomainSnapshotData(request: DescribeVsDomainSnapshotDataRequest): Promise<DescribeVsDomainSnapshotDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainSnapshotDataWithOptions(request, runtime);
  }

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

  async describeVsDomainTrafficData(request: DescribeVsDomainTrafficDataRequest): Promise<DescribeVsDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainTrafficDataWithOptions(request, runtime);
  }

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

  async describeVsDomainUvData(request: DescribeVsDomainUvDataRequest): Promise<DescribeVsDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsDomainUvDataWithOptions(request, runtime);
  }

  async describeVsPullStreamConfigWithOptions(request: DescribeVsPullStreamConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsPullStreamConfigResponse> {
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
      action: "DescribeVsPullStreamConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVsPullStreamConfigResponse>(await this.callApi(params, req, runtime), new DescribeVsPullStreamConfigResponse({}));
  }

  async describeVsPullStreamConfig(request: DescribeVsPullStreamConfigRequest): Promise<DescribeVsPullStreamConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsPullStreamConfigWithOptions(request, runtime);
  }

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

  async describeVsPullStreamInfoConfig(request: DescribeVsPullStreamInfoConfigRequest): Promise<DescribeVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  async describeVsStorageTrafficUsageDataWithOptions(request: DescribeVsStorageTrafficUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStorageTrafficUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVsStorageTrafficUsageData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVsStorageTrafficUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeVsStorageTrafficUsageDataResponse({}));
  }

  async describeVsStorageTrafficUsageData(request: DescribeVsStorageTrafficUsageDataRequest): Promise<DescribeVsStorageTrafficUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStorageTrafficUsageDataWithOptions(request, runtime);
  }

  async describeVsStorageUsageDataWithOptions(request: DescribeVsStorageUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVsStorageUsageDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.splitBy)) {
      query["SplitBy"] = request.splitBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVsStorageUsageData",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVsStorageUsageDataResponse>(await this.callApi(params, req, runtime), new DescribeVsStorageUsageDataResponse({}));
  }

  async describeVsStorageUsageData(request: DescribeVsStorageUsageDataRequest): Promise<DescribeVsStorageUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStorageUsageDataWithOptions(request, runtime);
  }

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

  async describeVsStreamsNotifyUrlConfig(request: DescribeVsStreamsNotifyUrlConfigRequest): Promise<DescribeVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

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

  async describeVsStreamsOnlineList(request: DescribeVsStreamsOnlineListRequest): Promise<DescribeVsStreamsOnlineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsOnlineListWithOptions(request, runtime);
  }

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

  async describeVsStreamsPublishList(request: DescribeVsStreamsPublishListRequest): Promise<DescribeVsStreamsPublishListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsStreamsPublishListWithOptions(request, runtime);
  }

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

  async describeVsTopDomainsByFlow(request: DescribeVsTopDomainsByFlowRequest): Promise<DescribeVsTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsTopDomainsByFlowWithOptions(request, runtime);
  }

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

  async describeVsUpPeakPublishStreamData(request: DescribeVsUpPeakPublishStreamDataRequest): Promise<DescribeVsUpPeakPublishStreamDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUpPeakPublishStreamDataWithOptions(request, runtime);
  }

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

  async describeVsUserResourcePackage(request: DescribeVsUserResourcePackageRequest): Promise<DescribeVsUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVsUserResourcePackageWithOptions(request, runtime);
  }

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

  async forbidVsStream(request: ForbidVsStreamRequest): Promise<ForbidVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forbidVsStreamWithOptions(request, runtime);
  }

  async getBucketInfoWithOptions(request: GetBucketInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBucketInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBucketInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBucketInfoResponse>(await this.callApi(params, req, runtime), new GetBucketInfoResponse({}));
  }

  async getBucketInfo(request: GetBucketInfoRequest): Promise<GetBucketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBucketInfoWithOptions(request, runtime);
  }

  async getObjectTotalWithOptions(request: GetObjectTotalRequest, runtime: $Util.RuntimeOptions): Promise<GetObjectTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetObjectTotal",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetObjectTotalResponse>(await this.callApi(params, req, runtime), new GetObjectTotalResponse({}));
  }

  async getObjectTotal(request: GetObjectTotalRequest): Promise<GetObjectTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getObjectTotalWithOptions(request, runtime);
  }

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

  async gotoPreset(request: GotoPresetRequest): Promise<GotoPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.gotoPresetWithOptions(request, runtime);
  }

  async listBucketsWithOptions(request: ListBucketsRequest, runtime: $Util.RuntimeOptions): Promise<ListBucketsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
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

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBuckets",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBucketsResponse>(await this.callApi(params, req, runtime), new ListBucketsResponse({}));
  }

  async listBuckets(request: ListBucketsRequest): Promise<ListBucketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBucketsWithOptions(request, runtime);
  }

  async listObjectsWithOptions(request: ListObjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.continuationToken)) {
      query["ContinuationToken"] = request.continuationToken;
    }

    if (!Util.isUnset(request.delimiter)) {
      query["Delimiter"] = request.delimiter;
    }

    if (!Util.isUnset(request.encodingType)) {
      query["EncodingType"] = request.encodingType;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxKeys)) {
      query["MaxKeys"] = request.maxKeys;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startAfter)) {
      query["StartAfter"] = request.startAfter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListObjects",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListObjectsResponse>(await this.callApi(params, req, runtime), new ListObjectsResponse({}));
  }

  async listObjects(request: ListObjectsRequest): Promise<ListObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listObjectsWithOptions(request, runtime);
  }

  async modifyDeviceWithOptions(request: ModifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmMethod)) {
      query["AlarmMethod"] = request.alarmMethod;
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

  async modifyDevice(request: ModifyDeviceRequest): Promise<ModifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceWithOptions(request, runtime);
  }

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

  async modifyDeviceAlarm(request: ModifyDeviceAlarmRequest): Promise<ModifyDeviceAlarmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceAlarmWithOptions(request, runtime);
  }

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

  async modifyDeviceCapture(request: ModifyDeviceCaptureRequest): Promise<ModifyDeviceCaptureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceCaptureWithOptions(request, runtime);
  }

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

  async modifyDeviceChannels(request: ModifyDeviceChannelsRequest): Promise<ModifyDeviceChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceChannelsWithOptions(request, runtime);
  }

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

  async modifyDirectory(request: ModifyDirectoryRequest): Promise<ModifyDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDirectoryWithOptions(request, runtime);
  }

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

  async modifyGroup(request: ModifyGroupRequest): Promise<ModifyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupWithOptions(request, runtime);
  }

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

  async modifyParentPlatform(request: ModifyParentPlatformRequest): Promise<ModifyParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParentPlatformWithOptions(request, runtime);
  }

  async modifyPurchasedDeviceWithOptions(request: ModifyPurchasedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPurchasedDeviceResponse> {
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

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.registerCode)) {
      query["RegisterCode"] = request.registerCode;
    }

    if (!Util.isUnset(request.subType)) {
      query["SubType"] = request.subType;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPurchasedDevice",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPurchasedDeviceResponse>(await this.callApi(params, req, runtime), new ModifyPurchasedDeviceResponse({}));
  }

  async modifyPurchasedDevice(request: ModifyPurchasedDeviceRequest): Promise<ModifyPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPurchasedDeviceWithOptions(request, runtime);
  }

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

  async modifyTemplate(request: ModifyTemplateRequest): Promise<ModifyTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTemplateWithOptions(request, runtime);
  }

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

  async openVsService(): Promise<OpenVsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVsServiceWithOptions(runtime);
  }

  async operateRenderingDevicesWithOptions(request: OperateRenderingDevicesRequest, runtime: $Util.RuntimeOptions): Promise<OperateRenderingDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.podId)) {
      query["PodId"] = request.podId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateRenderingDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateRenderingDevicesResponse>(await this.callApi(params, req, runtime), new OperateRenderingDevicesResponse({}));
  }

  async operateRenderingDevices(request: OperateRenderingDevicesRequest): Promise<OperateRenderingDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateRenderingDevicesWithOptions(request, runtime);
  }

  async prepareUploadWithOptions(request: PrepareUploadRequest, runtime: $Util.RuntimeOptions): Promise<PrepareUploadResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PrepareUpload",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PrepareUploadResponse>(await this.callApi(params, req, runtime), new PrepareUploadResponse({}));
  }

  async prepareUpload(request: PrepareUploadRequest): Promise<PrepareUploadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.prepareUploadWithOptions(request, runtime);
  }

  async putBucketWithOptions(request: PutBucketRequest, runtime: $Util.RuntimeOptions): Promise<PutBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketAcl)) {
      query["BucketAcl"] = request.bucketAcl;
    }

    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.dataRedundancyType)) {
      query["DataRedundancyType"] = request.dataRedundancyType;
    }

    if (!Util.isUnset(request.dispatcherType)) {
      query["DispatcherType"] = request.dispatcherType;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutBucket",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutBucketResponse>(await this.callApi(params, req, runtime), new PutBucketResponse({}));
  }

  async putBucket(request: PutBucketRequest): Promise<PutBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putBucketWithOptions(request, runtime);
  }

  async resetRenderingDevicesWithOptions(request: ResetRenderingDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ResetRenderingDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.podId)) {
      query["PodId"] = request.podId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetRenderingDevices",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetRenderingDevicesResponse>(await this.callApi(params, req, runtime), new ResetRenderingDevicesResponse({}));
  }

  async resetRenderingDevices(request: ResetRenderingDevicesRequest): Promise<ResetRenderingDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetRenderingDevicesWithOptions(request, runtime);
  }

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

  async resumeVsStream(request: ResumeVsStreamRequest): Promise<ResumeVsStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeVsStreamWithOptions(request, runtime);
  }

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

  async setPreset(request: SetPresetRequest): Promise<SetPresetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPresetWithOptions(request, runtime);
  }

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

  async setVsDomainCertificate(request: SetVsDomainCertificateRequest): Promise<SetVsDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsDomainCertificateWithOptions(request, runtime);
  }

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

  async setVsStreamsNotifyUrlConfig(request: SetVsStreamsNotifyUrlConfigRequest): Promise<SetVsStreamsNotifyUrlConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setVsStreamsNotifyUrlConfigWithOptions(request, runtime);
  }

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

  async startDevice(request: StartDeviceRequest): Promise<StartDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDeviceWithOptions(request, runtime);
  }

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

  async startParentPlatform(request: StartParentPlatformRequest): Promise<StartParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startParentPlatformWithOptions(request, runtime);
  }

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

  async startRecordStream(request: StartRecordStreamRequest): Promise<StartRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRecordStreamWithOptions(request, runtime);
  }

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

  async startStream(request: StartStreamRequest): Promise<StartStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startStreamWithOptions(request, runtime);
  }

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

  async startTransferStream(request: StartTransferStreamRequest): Promise<StartTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTransferStreamWithOptions(request, runtime);
  }

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

  async stopAdjust(request: StopAdjustRequest): Promise<StopAdjustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAdjustWithOptions(request, runtime);
  }

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

  async stopDevice(request: StopDeviceRequest): Promise<StopDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDeviceWithOptions(request, runtime);
  }

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

  async stopMove(request: StopMoveRequest): Promise<StopMoveResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMoveWithOptions(request, runtime);
  }

  async stopParentPlatformWithOptions(request: StopParentPlatformRequest, runtime: $Util.RuntimeOptions): Promise<StopParentPlatformResponse> {
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
      action: "StopParentPlatform",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopParentPlatformResponse>(await this.callApi(params, req, runtime), new StopParentPlatformResponse({}));
  }

  async stopParentPlatform(request: StopParentPlatformRequest): Promise<StopParentPlatformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopParentPlatformWithOptions(request, runtime);
  }

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

  async stopRecordStream(request: StopRecordStreamRequest): Promise<StopRecordStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRecordStreamWithOptions(request, runtime);
  }

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

  async stopStream(request: StopStreamRequest): Promise<StopStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStreamWithOptions(request, runtime);
  }

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

  async stopTransferStream(request: StopTransferStreamRequest): Promise<StopTransferStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTransferStreamWithOptions(request, runtime);
  }

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

  async syncCatalogs(request: SyncCatalogsRequest): Promise<SyncCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncCatalogsWithOptions(request, runtime);
  }

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

  async unbindDirectory(request: UnbindDirectoryRequest): Promise<UnbindDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDirectoryWithOptions(request, runtime);
  }

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

  async unbindParentPlatformDevice(request: UnbindParentPlatformDeviceRequest): Promise<UnbindParentPlatformDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindParentPlatformDeviceWithOptions(request, runtime);
  }

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

  async unbindPurchasedDevice(request: UnbindPurchasedDeviceRequest): Promise<UnbindPurchasedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPurchasedDeviceWithOptions(request, runtime);
  }

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

  async unbindTemplate(request: UnbindTemplateRequest): Promise<UnbindTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTemplateWithOptions(request, runtime);
  }

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

  async unlockDevice(request: UnlockDeviceRequest): Promise<UnlockDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockDeviceWithOptions(request, runtime);
  }

  async updateAIConfigWithOptions(request: UpdateAIConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAIConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.captureInterval)) {
      query["CaptureInterval"] = request.captureInterval;
    }

    if (!Util.isUnset(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!Util.isUnset(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.features)) {
      query["Features"] = request.features;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAIConfig",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAIConfigResponse>(await this.callApi(params, req, runtime), new UpdateAIConfigResponse({}));
  }

  async updateAIConfig(request: UpdateAIConfigRequest): Promise<UpdateAIConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAIConfigWithOptions(request, runtime);
  }

  async updateBucketInfoWithOptions(request: UpdateBucketInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBucketInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBucketInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBucketInfoResponse>(await this.callApi(params, req, runtime), new UpdateBucketInfoResponse({}));
  }

  async updateBucketInfo(request: UpdateBucketInfoRequest): Promise<UpdateBucketInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBucketInfoWithOptions(request, runtime);
  }

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

  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  async updateRenderingDeviceSpecWithOptions(request: UpdateRenderingDeviceSpecRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRenderingDeviceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRenderingDeviceSpec",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRenderingDeviceSpecResponse>(await this.callApi(params, req, runtime), new UpdateRenderingDeviceSpecResponse({}));
  }

  async updateRenderingDeviceSpec(request: UpdateRenderingDeviceSpecRequest): Promise<UpdateRenderingDeviceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRenderingDeviceSpecWithOptions(request, runtime);
  }

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

  async updateVsPullStreamInfoConfig(request: UpdateVsPullStreamInfoConfigRequest): Promise<UpdateVsPullStreamInfoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVsPullStreamInfoConfigWithOptions(request, runtime);
  }

  async upgradeRenderingDevicesHostOSWithOptions(request: UpgradeRenderingDevicesHostOSRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeRenderingDevicesHostOSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.romName)) {
      query["RomName"] = request.romName;
    }

    if (!Util.isUnset(request.romPath)) {
      query["RomPath"] = request.romPath;
    }

    if (!Util.isUnset(request.romVersion)) {
      query["RomVersion"] = request.romVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeRenderingDevicesHostOS",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeRenderingDevicesHostOSResponse>(await this.callApi(params, req, runtime), new UpgradeRenderingDevicesHostOSResponse({}));
  }

  async upgradeRenderingDevicesHostOS(request: UpgradeRenderingDevicesHostOSRequest): Promise<UpgradeRenderingDevicesHostOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeRenderingDevicesHostOSWithOptions(request, runtime);
  }

  async upgradeRenderingDevicesImageWithOptions(request: UpgradeRenderingDevicesImageRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeRenderingDevicesImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeRenderingDevicesImage",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeRenderingDevicesImageResponse>(await this.callApi(params, req, runtime), new UpgradeRenderingDevicesImageResponse({}));
  }

  async upgradeRenderingDevicesImage(request: UpgradeRenderingDevicesImageRequest): Promise<UpgradeRenderingDevicesImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeRenderingDevicesImageWithOptions(request, runtime);
  }

}
