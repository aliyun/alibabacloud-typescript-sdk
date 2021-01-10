// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchAddDeviceGroupRelationsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  device?: BatchAddDeviceGroupRelationsRequestDevice[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      device: { 'type': 'array', 'itemType': BatchAddDeviceGroupRelationsRequestDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsResponseBody extends $tea.Model {
  validDeviceCount?: number;
  successAddedDeviceCount?: number;
  requestId?: string;
  exceedTenGroupDeviceCount?: number;
  errorMessage?: string;
  alreadyRelatedGroupDeviceCount?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      validDeviceCount: 'ValidDeviceCount',
      successAddedDeviceCount: 'SuccessAddedDeviceCount',
      requestId: 'RequestId',
      exceedTenGroupDeviceCount: 'ExceedTenGroupDeviceCount',
      errorMessage: 'ErrorMessage',
      alreadyRelatedGroupDeviceCount: 'AlreadyRelatedGroupDeviceCount',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validDeviceCount: 'number',
      successAddedDeviceCount: 'number',
      requestId: 'string',
      exceedTenGroupDeviceCount: 'number',
      errorMessage: 'string',
      alreadyRelatedGroupDeviceCount: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddDeviceGroupRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddDeviceGroupRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  gwProductKey?: string;
  ext?: { [key: string]: any };
  gwDeviceName?: string;
  topoAddItem?: BatchAddThingTopoRequestTopoAddItem[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      gwProductKey: 'GwProductKey',
      ext: 'Ext',
      gwDeviceName: 'GwDeviceName',
      topoAddItem: 'TopoAddItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      gwProductKey: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gwDeviceName: 'string',
      topoAddItem: { 'type': 'array', 'itemType': BatchAddThingTopoRequestTopoAddItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoShrinkRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  gwProductKey?: string;
  extShrink?: string;
  gwDeviceName?: string;
  topoAddItem?: BatchAddThingTopoShrinkRequestTopoAddItem[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      gwProductKey: 'GwProductKey',
      extShrink: 'Ext',
      gwDeviceName: 'GwDeviceName',
      topoAddItem: 'TopoAddItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      gwProductKey: 'string',
      extShrink: 'string',
      gwDeviceName: 'string',
      topoAddItem: { 'type': 'array', 'itemType': BatchAddThingTopoShrinkRequestTopoAddItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddThingTopoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddThingTopoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDeviceToEdgeInstanceWithDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDeviceToEdgeInstanceWithDriverResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDeviceToEdgeInstanceWithDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchBindDeviceToEdgeInstanceWithDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchBindDeviceToEdgeInstanceWithDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string[];
  deviceNameList?: BatchCheckDeviceNamesRequestDeviceNameList[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceNameList: 'DeviceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      deviceNameList: { 'type': 'array', 'itemType': BatchCheckDeviceNamesRequestDeviceNameList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchCheckDeviceNamesResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BatchCheckDeviceNamesResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchCheckDeviceNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchCheckDeviceNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchClearEdgeInstanceDeviceConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchClearEdgeInstanceDeviceConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchClearEdgeInstanceDeviceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchClearEdgeInstanceDeviceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchClearEdgeInstanceDeviceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  device?: BatchDeleteDeviceGroupRelationsRequestDevice[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      device: { 'type': 'array', 'itemType': BatchDeleteDeviceGroupRelationsRequestDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsResponseBody extends $tea.Model {
  validDeviceCount?: number;
  requestId?: string;
  successDeviceCount?: number;
  errorMessage?: string;
  alreadyRelatedGroupDeviceCount?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      validDeviceCount: 'ValidDeviceCount',
      requestId: 'RequestId',
      successDeviceCount: 'SuccessDeviceCount',
      errorMessage: 'ErrorMessage',
      alreadyRelatedGroupDeviceCount: 'AlreadyRelatedGroupDeviceCount',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validDeviceCount: 'number',
      requestId: 'string',
      successDeviceCount: 'number',
      errorMessage: 'string',
      alreadyRelatedGroupDeviceCount: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteDeviceGroupRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteDeviceGroupRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteEdgeInstanceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelIds: 'ChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteEdgeInstanceChannelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteEdgeInstanceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteEdgeInstanceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteEdgeInstanceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchGetDeviceBindStatusResponseBodyData[];
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': BatchGetDeviceBindStatusResponseBodyData },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetDeviceBindStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetDeviceBindStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string[];
  iotId?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      iotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponseBody extends $tea.Model {
  requestId?: string;
  deviceStatusList?: BatchGetDeviceStateResponseBodyDeviceStatusList;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceStatusList: 'DeviceStatusList',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceStatusList: BatchGetDeviceStateResponseBodyDeviceStatusList,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetDeviceStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetDeviceStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverIds: 'DriverIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  driverList?: BatchGetEdgeDriverResponseBodyDriverList[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      driverList: 'DriverList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      driverList: { 'type': 'array', 'itemType': BatchGetEdgeDriverResponseBodyDriverList },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelIds: 'ChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchGetEdgeInstanceChannelResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BatchGetEdgeInstanceChannelResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeInstanceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeInstanceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  deviceChannelList?: BatchGetEdgeInstanceDeviceChannelResponseBodyDeviceChannelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
      deviceChannelList: 'DeviceChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
      deviceChannelList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceChannelResponseBodyDeviceChannelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeInstanceDeviceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeInstanceDeviceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponseBody extends $tea.Model {
  deviceConfigList?: BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigList[];
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceConfigList: 'DeviceConfigList',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceConfigList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigList },
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeInstanceDeviceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeInstanceDeviceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  deviceDriverList?: BatchGetEdgeInstanceDeviceDriverResponseBodyDeviceDriverList[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      deviceDriverList: 'DeviceDriverList',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      deviceDriverList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceDriverResponseBodyDeviceDriverList },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeInstanceDeviceDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeInstanceDeviceDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverIds: 'DriverIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponseBody extends $tea.Model {
  requestId?: string;
  driverConfigList?: BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigList[];
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      driverConfigList: 'DriverConfigList',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      driverConfigList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigList },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetEdgeInstanceDriverConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetEdgeInstanceDriverConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPubRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  qos?: number;
  topicShortName?: string;
  messageContent?: string;
  deviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      qos: 'Qos',
      topicShortName: 'TopicShortName',
      messageContent: 'MessageContent',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      qos: 'number',
      topicShortName: 'string',
      messageContent: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPubResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPubResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchPubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchPubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  productKey?: string;
  iotInstanceId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  deviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      productKey: 'ProductKey',
      iotInstanceId: 'IotInstanceId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      productKey: 'string',
      iotInstanceId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchQueryDeviceDetailResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BatchQueryDeviceDetailResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchQueryDeviceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchQueryDeviceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchRegisterDeviceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BatchRegisterDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchRegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchRegisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: BatchRegisterDeviceWithApplyIdResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: BatchRegisterDeviceWithApplyIdResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchRegisterDeviceWithApplyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchRegisterDeviceWithApplyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelId: 'ChannelId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceChannelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetEdgeInstanceDeviceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetEdgeInstanceDeviceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  deviceConfigs?: BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      deviceConfigs: 'DeviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      deviceConfigs: { 'type': 'array', 'itemType': BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetEdgeInstanceDeviceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetEdgeInstanceDeviceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDeviceFromEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  iotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDeviceFromEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDeviceFromEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUnbindDeviceFromEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUnbindDeviceFromEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  deviceNicknameInfo?: BatchUpdateDeviceNicknameRequestDeviceNicknameInfo[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      deviceNicknameInfo: 'DeviceNicknameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      deviceNicknameInfo: { 'type': 'array', 'itemType': BatchUpdateDeviceNicknameRequestDeviceNicknameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUpdateDeviceNicknameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUpdateDeviceNicknameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicationToEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  applicationId?: string;
  applicationVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      applicationId: 'ApplicationId',
      applicationVersion: 'ApplicationVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      applicationId: 'string',
      applicationVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicationToEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicationToEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindApplicationToEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindApplicationToEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDriverToEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  driverVersion?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDriverToEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDriverToEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindDriverToEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindDriverToEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGatewayToEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGatewayToEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGatewayToEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindGatewayToEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindGatewayToEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindRoleToEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  roleArn?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      roleArn: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindRoleToEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindRoleToEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindRoleToEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindRoleToEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSceneRuleToEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSceneRuleToEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSceneRuleToEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindSceneRuleToEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindSceneRuleToEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTAStrategyByJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTAStrategyByJobResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTAStrategyByJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOTAStrategyByJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOTAStrategyByJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  productKey?: string;
  jobId?: string;
  deviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      jobId: 'JobId',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      jobId: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOTATaskByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOTATaskByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  cancelScheduledTask?: boolean;
  cancelQueuedTask?: boolean;
  cancelInProgressTask?: boolean;
  cancelNotifiedTask?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
      cancelScheduledTask: 'CancelScheduledTask',
      cancelQueuedTask: 'CancelQueuedTask',
      cancelInProgressTask: 'CancelInProgressTask',
      cancelNotifiedTask: 'CancelNotifiedTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
      cancelScheduledTask: 'boolean',
      cancelQueuedTask: 'boolean',
      cancelInProgressTask: 'boolean',
      cancelNotifiedTask: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByJobResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOTATaskByJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOTATaskByJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearEdgeInstanceDriverConfigsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearEdgeInstanceDriverConfigsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearEdgeInstanceDriverConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearEdgeInstanceDriverConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearEdgeInstanceDriverConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEdgeInstanceDeploymentRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEdgeInstanceDeploymentResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEdgeInstanceDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseEdgeInstanceDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseEdgeInstanceDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  sourceProductKey?: string;
  targetProductKey?: string;
  sourceModelVersion?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      sourceProductKey: 'SourceProductKey',
      targetProductKey: 'TargetProductKey',
      sourceModelVersion: 'SourceModelVersion',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      sourceProductKey: 'string',
      targetProductKey: 'string',
      sourceModelVersion: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyThingModelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupSubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  consumerGroupId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      consumerGroupId: 'ConsumerGroupId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      consumerGroupId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupSubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupSubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConsumerGroupSubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConsumerGroupSubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  displayName?: string;
  originSql?: string;
  desc?: string;
  templateSql?: string;
  apiPath?: string;
  iotInstanceId?: string;
  requestParam?: CreateDataAPIServiceRequestRequestParam[];
  responseParam?: CreateDataAPIServiceRequestResponseParam[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      displayName: 'DisplayName',
      originSql: 'OriginSql',
      desc: 'Desc',
      templateSql: 'TemplateSql',
      apiPath: 'ApiPath',
      iotInstanceId: 'IotInstanceId',
      requestParam: 'RequestParam',
      responseParam: 'ResponseParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      displayName: 'string',
      originSql: 'string',
      desc: 'string',
      templateSql: 'string',
      apiPath: 'string',
      iotInstanceId: 'string',
      requestParam: { 'type': 'array', 'itemType': CreateDataAPIServiceRequestRequestParam },
      responseParam: { 'type': 'array', 'itemType': CreateDataAPIServiceRequestResponseParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateDataAPIServiceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateDataAPIServiceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataAPIServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataAPIServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  superGroupId?: string;
  groupDesc?: string;
  groupName?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      superGroupId: 'SuperGroupId',
      groupDesc: 'GroupDesc',
      groupName: 'GroupName',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      superGroupId: 'string',
      groupDesc: 'string',
      groupName: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateDeviceGroupResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateDeviceGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverName?: string;
  driverProtocol?: string;
  runtime?: string;
  cpuArch?: string;
  isBuiltIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
      runtime: 'Runtime',
      cpuArch: 'CpuArch',
      isBuiltIn: 'IsBuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverName: 'string',
      driverProtocol: 'string',
      runtime: 'string',
      cpuArch: 'string',
      isBuiltIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverResponseBody extends $tea.Model {
  driverId?: string;
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  driverVersion?: string;
  edgeVersion?: string;
  description?: string;
  sourceConfig?: string;
  driverConfig?: string;
  containerConfig?: string;
  configCheckRule?: string;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  name?: string;
  tags?: string;
  spec?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      name: 'Name',
      tags: 'Tags',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      name: 'string',
      tags: 'string',
      spec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelName?: string;
  configs?: CreateEdgeInstanceChannelRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelName: 'ChannelName',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelName: 'string',
      configs: { 'type': 'array', 'itemType': CreateEdgeInstanceChannelRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeInstanceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeInstanceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceDeploymentRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceDeploymentResponseBody extends $tea.Model {
  deploymentId?: string;
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeInstanceDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeInstanceDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  resourceId?: string;
  fileName?: string;
  iotInstanceId?: string;
  type?: string;
  instanceId?: string;
  resourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      resourceId: 'ResourceId',
      fileName: 'FileName',
      iotInstanceId: 'IotInstanceId',
      type: 'Type',
      instanceId: 'InstanceId',
      resourceVersion: 'ResourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      resourceId: 'string',
      fileName: 'string',
      iotInstanceId: 'string',
      type: 'string',
      instanceId: 'string',
      resourceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateEdgeOssPreSignedAddressResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateEdgeOssPreSignedAddressResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEdgeOssPreSignedAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEdgeOssPreSignedAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  description?: string;
  jobDocument?: string;
  type?: string;
  jobFile?: { [key: string]: any };
  jobName?: string;
  timeoutConfig?: { [key: string]: any };
  rolloutConfig?: { [key: string]: any };
  targetConfig?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      jobDocument: 'JobDocument',
      type: 'Type',
      jobFile: 'JobFile',
      jobName: 'JobName',
      timeoutConfig: 'TimeoutConfig',
      rolloutConfig: 'RolloutConfig',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      description: 'string',
      jobDocument: 'string',
      type: 'string',
      jobFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobName: 'string',
      timeoutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rolloutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  description?: string;
  jobDocument?: string;
  type?: string;
  jobFileShrink?: string;
  jobName?: string;
  timeoutConfigShrink?: string;
  rolloutConfigShrink?: string;
  targetConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      jobDocument: 'JobDocument',
      type: 'Type',
      jobFileShrink: 'JobFile',
      jobName: 'JobName',
      timeoutConfigShrink: 'TimeoutConfig',
      rolloutConfigShrink: 'RolloutConfig',
      targetConfigShrink: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      description: 'string',
      jobDocument: 'string',
      type: 'string',
      jobFileShrink: 'string',
      jobName: 'string',
      timeoutConfigShrink: 'string',
      rolloutConfigShrink: 'string',
      targetConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceInfo?: CreateLoRaNodesTaskRequestDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceInfo: { 'type': 'array', 'itemType': CreateLoRaNodesTaskRequestDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoRaNodesTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoRaNodesTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  productKey?: string;
  retryInterval?: number;
  retryCount?: number;
  timeoutInMinutes?: number;
  maximumPerMinute?: number;
  overwriteMode?: number;
  dynamicMode?: number;
  srcVersion?: string[];
  tag?: CreateOTADynamicUpgradeJobRequestTag[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      maximumPerMinute: 'MaximumPerMinute',
      overwriteMode: 'OverwriteMode',
      dynamicMode: 'DynamicMode',
      srcVersion: 'SrcVersion',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      maximumPerMinute: 'number',
      overwriteMode: 'number',
      dynamicMode: 'number',
      srcVersion: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateOTADynamicUpgradeJobRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateOTADynamicUpgradeJobResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateOTADynamicUpgradeJobResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOTADynamicUpgradeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOTADynamicUpgradeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareName?: string;
  destVersion?: string;
  firmwareUrl?: string;
  firmwareSign?: string;
  signMethod?: string;
  firmwareSize?: number;
  productKey?: string;
  firmwareDesc?: string;
  type?: number;
  srcVersion?: string;
  moduleName?: string;
  needToVerify?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareName: 'FirmwareName',
      destVersion: 'DestVersion',
      firmwareUrl: 'FirmwareUrl',
      firmwareSign: 'FirmwareSign',
      signMethod: 'SignMethod',
      firmwareSize: 'FirmwareSize',
      productKey: 'ProductKey',
      firmwareDesc: 'FirmwareDesc',
      type: 'Type',
      srcVersion: 'SrcVersion',
      moduleName: 'ModuleName',
      needToVerify: 'NeedToVerify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareName: 'string',
      destVersion: 'string',
      firmwareUrl: 'string',
      firmwareSign: 'string',
      signMethod: 'string',
      firmwareSize: 'number',
      productKey: 'string',
      firmwareDesc: 'string',
      type: 'number',
      srcVersion: 'string',
      moduleName: 'string',
      needToVerify: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateOTAFirmwareResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateOTAFirmwareResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOTAFirmwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOTAFirmwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAModuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  aliasName?: string;
  iotInstanceId?: string;
  moduleName?: string;
  desc?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      aliasName: 'AliasName',
      iotInstanceId: 'IotInstanceId',
      moduleName: 'ModuleName',
      desc: 'Desc',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      aliasName: 'string',
      iotInstanceId: 'string',
      moduleName: 'string',
      desc: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAModuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOTAModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOTAModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  productKey?: string;
  targetSelection?: string;
  scheduleTime?: number;
  retryInterval?: number;
  retryCount?: number;
  timeoutInMinutes?: number;
  maximumPerMinute?: number;
  grayPercent?: string;
  scheduleFinishTime?: number;
  overwriteMode?: number;
  dnListFileUrl?: string;
  srcVersion?: string[];
  targetDeviceName?: string[];
  tag?: CreateOTAStaticUpgradeJobRequestTag[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      targetSelection: 'TargetSelection',
      scheduleTime: 'ScheduleTime',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      maximumPerMinute: 'MaximumPerMinute',
      grayPercent: 'GrayPercent',
      scheduleFinishTime: 'ScheduleFinishTime',
      overwriteMode: 'OverwriteMode',
      dnListFileUrl: 'DnListFileUrl',
      srcVersion: 'SrcVersion',
      targetDeviceName: 'TargetDeviceName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      targetSelection: 'string',
      scheduleTime: 'number',
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      maximumPerMinute: 'number',
      grayPercent: 'string',
      scheduleFinishTime: 'number',
      overwriteMode: 'number',
      dnListFileUrl: 'string',
      srcVersion: { 'type': 'array', 'itemType': 'string' },
      targetDeviceName: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateOTAStaticUpgradeJobRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateOTAStaticUpgradeJobResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateOTAStaticUpgradeJobResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOTAStaticUpgradeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOTAStaticUpgradeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  timeoutInMinutes?: number;
  productKey?: string;
  targetDeviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      timeoutInMinutes: 'TimeoutInMinutes',
      productKey: 'ProductKey',
      targetDeviceName: 'TargetDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      timeoutInMinutes: 'number',
      productKey: 'string',
      targetDeviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateOTAVerifyJobResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateOTAVerifyJobResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOTAVerifyJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOTAVerifyJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productName?: string;
  nodeType?: number;
  dataFormat?: number;
  description?: string;
  aliyunCommodityCode?: string;
  id2?: boolean;
  categoryId?: number;
  protocolType?: string;
  netType?: string;
  joinPermissionId?: string;
  resourceGroupId?: string;
  authType?: string;
  categoryKey?: string;
  publishAuto?: boolean;
  validateType?: number;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productName: 'ProductName',
      nodeType: 'NodeType',
      dataFormat: 'DataFormat',
      description: 'Description',
      aliyunCommodityCode: 'AliyunCommodityCode',
      id2: 'Id2',
      categoryId: 'CategoryId',
      protocolType: 'ProtocolType',
      netType: 'NetType',
      joinPermissionId: 'JoinPermissionId',
      resourceGroupId: 'ResourceGroupId',
      authType: 'AuthType',
      categoryKey: 'CategoryKey',
      publishAuto: 'PublishAuto',
      validateType: 'ValidateType',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productName: 'string',
      nodeType: 'number',
      dataFormat: 'number',
      description: 'string',
      aliyunCommodityCode: 'string',
      id2: 'boolean',
      categoryId: 'number',
      protocolType: 'string',
      netType: 'string',
      joinPermissionId: 'string',
      resourceGroupId: 'string',
      authType: 'string',
      categoryKey: 'string',
      publishAuto: 'boolean',
      validateType: 'number',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateProductResponseBodyData;
  errorMessage?: string;
  code?: string;
  productKey?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      productKey: 'ProductKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateProductResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      productKey: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  productTag?: CreateProductTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      productTag: { 'type': 'array', 'itemType': CreateProductTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponseBody extends $tea.Model {
  requestId?: string;
  invalidProductTags?: CreateProductTagsResponseBodyInvalidProductTags;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invalidProductTags: 'InvalidProductTags',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invalidProductTags: CreateProductTagsResponseBodyInvalidProductTags,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProductTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProductTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTopicRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  topicShortName?: string;
  operation?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      topicShortName: 'TopicShortName',
      operation: 'Operation',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      topicShortName: 'string',
      operation: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTopicResponseBody extends $tea.Model {
  requestId?: string;
  topicId?: number;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topicId: 'TopicId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topicId: 'number',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProductTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProductTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  select?: string;
  shortTopic?: string;
  where?: string;
  productKey?: string;
  name?: string;
  ruleDesc?: string;
  dataType?: string;
  topicType?: number;
  resourceGroupId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      select: 'Select',
      shortTopic: 'ShortTopic',
      where: 'Where',
      productKey: 'ProductKey',
      name: 'Name',
      ruleDesc: 'RuleDesc',
      dataType: 'DataType',
      topicType: 'TopicType',
      resourceGroupId: 'ResourceGroupId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      select: 'string',
      shortTopic: 'string',
      where: 'string',
      productKey: 'string',
      name: 'string',
      ruleDesc: 'string',
      dataType: 'string',
      topicType: 'number',
      resourceGroupId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: number;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'number',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  type?: string;
  configuration?: string;
  errorActionFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleActionResponseBody extends $tea.Model {
  actionId?: number;
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'number',
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleName?: string;
  ruleContent?: string;
  ruleDescription?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleName: 'RuleName',
      ruleContent: 'RuleContent',
      ruleDescription: 'RuleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleName: 'string',
      ruleContent: 'string',
      ruleDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  ruleId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceDataFlag?: boolean;
  deviceLifeCycleFlag?: boolean;
  deviceStatusChangeFlag?: boolean;
  deviceTopoLifeCycleFlag?: boolean;
  foundDeviceListFlag?: boolean;
  mnsConfiguration?: string;
  type?: string;
  otaEventFlag?: boolean;
  thingHistoryFlag?: boolean;
  deviceTagFlag?: boolean;
  otaVersionFlag?: boolean;
  otaJobFlag?: boolean;
  consumerGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceDataFlag: 'DeviceDataFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      mnsConfiguration: 'MnsConfiguration',
      type: 'Type',
      otaEventFlag: 'OtaEventFlag',
      thingHistoryFlag: 'ThingHistoryFlag',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
      consumerGroupIds: 'ConsumerGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceDataFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      deviceStatusChangeFlag: 'boolean',
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      mnsConfiguration: 'string',
      type: 'string',
      otaEventFlag: 'boolean',
      thingHistoryFlag: 'boolean',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  thingModelJson?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      thingModelJson: 'ThingModelJson',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      thingModelJson: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingModelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingScriptRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  scriptContent?: string;
  iotInstanceId?: string;
  productKey?: string;
  scriptType?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      scriptContent: 'ScriptContent',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      scriptContent: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scriptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingScriptResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateThingScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateThingScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  srcTopic?: string;
  dstTopic?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      srcTopic: 'SrcTopic',
      dstTopic: 'DstTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      srcTopic: 'string',
      dstTopic: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableResponseBody extends $tea.Model {
  requestId?: string;
  failureTopics?: CreateTopicRouteTableResponseBodyFailureTopics;
  errorMessage?: string;
  code?: string;
  isAllSucceed?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failureTopics: 'FailureTopics',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      isAllSucceed: 'IsAllSucceed',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failureTopics: CreateTopicRouteTableResponseBodyFailureTopics,
      errorMessage: 'string',
      code: 'string',
      isAllSucceed: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTopicRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTopicRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientIdsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  iotInstanceId?: string;
  authConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      authConfig: 'AuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      authConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientIdsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClientIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClientIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  consumerGroupId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      consumerGroupId: 'ConsumerGroupId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      consumerGroupId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConsumerGroupSubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConsumerGroupSubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
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

export class DeleteDeviceFileRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFileResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  propKey?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      propKey: 'PropKey',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      propKey: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDevicePropResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDevicePropResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEdgeDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEdgeDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  driverVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAFirmwareRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAFirmwareResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAFirmwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOTAFirmwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOTAFirmwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAModuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  moduleName?: string;
  authConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      moduleName: 'ModuleName',
      authConfig: 'AuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      moduleName: 'string',
      authConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAModuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOTAModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOTAModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  productTagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      productTagKey: 'ProductTagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      productTagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTagsResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProductTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProductTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTopicRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTopicResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProductTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProductTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  actionId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      actionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleActionResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  functionBlockId?: string;
  isClearAllFunction?: boolean;
  realTenantId?: string;
  realTripartiteKey?: string;
  propertyIdentifier?: string[];
  serviceIdentifier?: string[];
  eventIdentifier?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      functionBlockId: 'FunctionBlockId',
      isClearAllFunction: 'IsClearAllFunction',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
      propertyIdentifier: 'PropertyIdentifier',
      serviceIdentifier: 'ServiceIdentifier',
      eventIdentifier: 'EventIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      functionBlockId: 'string',
      isClearAllFunction: 'boolean',
      realTenantId: 'string',
      realTripartiteKey: 'string',
      propertyIdentifier: { 'type': 'array', 'itemType': 'string' },
      serviceIdentifier: { 'type': 'array', 'itemType': 'string' },
      eventIdentifier: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteThingModelResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  srcTopic?: string;
  dstTopic?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      srcTopic: 'SrcTopic',
      dstTopic: 'DstTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      srcTopic: 'string',
      dstTopic: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableResponseBody extends $tea.Model {
  requestId?: string;
  failureTopics?: DeleteTopicRouteTableResponseBodyFailureTopics;
  errorMessage?: string;
  code?: string;
  isAllSucceed?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failureTopics: 'FailureTopics',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      isAllSucceed: 'IsAllSucceed',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failureTopics: DeleteTopicRouteTableResponseBodyFailureTopics,
      errorMessage: 'string',
      code: 'string',
      isAllSucceed: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTopicRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTopicRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableThingRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableThingResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableThingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableThingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableThingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableThingRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableThingResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableThingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableThingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableThingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateDeviceNameListURLResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateDeviceNameListURLResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDeviceNameListURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateDeviceNameListURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  fileSuffix?: string;
  bizCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      fileSuffix: 'FileSuffix',
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      fileSuffix: 'string',
      bizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateFileUploadURLResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateFileUploadURLResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateFileUploadURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateFileUploadURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateOTAUploadURLResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateOTAUploadURLResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateOTAUploadURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateOTAUploadURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  apiSrn?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      apiSrn: 'ApiSrn',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      apiSrn: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetDataAPIServiceDetailResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetDataAPIServiceDetailResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataAPIServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataAPIServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceShadowRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceShadowResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  shadowMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      shadowMessage: 'ShadowMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      shadowMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceShadowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceShadowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceShadowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetDeviceStatusResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetDeviceStatusResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  driverVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetEdgeDriverVersionResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetEdgeDriverVersionResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetEdgeInstanceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetEdgeInstanceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  deploymentId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      deploymentId: 'DeploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      deploymentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetEdgeInstanceDeploymentResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetEdgeInstanceDeploymentResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEdgeInstanceDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEdgeInstanceDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetGatewayBySubDeviceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetGatewayBySubDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGatewayBySubDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGatewayBySubDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskResponseBody extends $tea.Model {
  totalCount?: number;
  successDevEuis?: GetLoraNodesTaskResponseBodySuccessDevEuis;
  taskId?: string;
  requestId?: string;
  errorMessage?: string;
  successCount?: number;
  taskState?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      successDevEuis: 'SuccessDevEuis',
      taskId: 'TaskId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      successCount: 'SuccessCount',
      taskState: 'TaskState',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      successDevEuis: GetLoraNodesTaskResponseBodySuccessDevEuis,
      taskId: 'string',
      requestId: 'string',
      errorMessage: 'string',
      successCount: 'number',
      taskState: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoraNodesTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoraNodesTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskResponseBody extends $tea.Model {
  totalCount?: number;
  successDevEuis?: GetNodesAddingTaskResponseBodySuccessDevEuis;
  taskId?: string;
  requestId?: string;
  errorMessage?: string;
  successCount?: number;
  taskState?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      successDevEuis: 'SuccessDevEuis',
      taskId: 'TaskId',
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      successCount: 'SuccessCount',
      taskState: 'TaskState',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      successDevEuis: GetNodesAddingTaskResponseBodySuccessDevEuis,
      taskId: 'string',
      requestId: 'string',
      errorMessage: 'string',
      successCount: 'number',
      taskState: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodesAddingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodesAddingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  ruleInfo?: GetRuleResponseBodyRuleInfo;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      ruleInfo: 'RuleInfo',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      ruleInfo: GetRuleResponseBodyRuleInfo,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  actionId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      actionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionResponseBody extends $tea.Model {
  requestId?: string;
  ruleActionInfo?: GetRuleActionResponseBodyRuleActionInfo;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleActionInfo: 'RuleActionInfo',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleActionInfo: GetRuleActionResponseBodyRuleActionInfo,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetSceneRuleResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetSceneRuleResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  modelVersion?: string;
  simple?: boolean;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      simple: 'Simple',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      simple: 'boolean',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetThingModelTslResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetThingModelTslResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThingModelTslResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThingModelTslResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  resourceGroupId?: string;
  simple?: boolean;
  modelVersion?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      simple: 'Simple',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      simple: 'boolean',
      modelVersion: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetThingModelTslPublishedResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetThingModelTslPublishedResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThingModelTslPublishedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThingModelTslPublishedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetThingScriptResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetThingScriptResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThingScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThingScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTemplateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  categoryKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      categoryKey: 'CategoryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      categoryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTemplateResponseBody extends $tea.Model {
  requestId?: string;
  thingModelJSON?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thingModelJSON: 'ThingModelJSON',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thingModelJSON: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThingTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThingTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  pageNo?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      pageNo: 'PageNo',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      pageNo: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetThingTopoResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetThingTopoResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThingTopoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThingTopoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportThingModelTslRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  tslStr?: string;
  tslUrl?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      tslStr: 'TslStr',
      tslUrl: 'TslUrl',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      tslStr: 'string',
      tslUrl: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportThingModelTslResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportThingModelTslResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportThingModelTslResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportThingModelTslResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  apiSrn?: string;
  iotInstanceId?: string;
  param?: InvokeDataAPIServiceRequestParam[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      apiSrn: 'ApiSrn',
      iotInstanceId: 'IotInstanceId',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      apiSrn: 'string',
      iotInstanceId: 'string',
      param: { 'type': 'array', 'itemType': InvokeDataAPIServiceRequestParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: InvokeDataAPIServiceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: InvokeDataAPIServiceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeDataAPIServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeDataAPIServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  identifier?: string;
  args?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      identifier: 'Identifier',
      args: 'Args',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      identifier: 'string',
      args: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceResponseBody extends $tea.Model {
  requestId?: string;
  data?: InvokeThingServiceResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: InvokeThingServiceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeThingServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeThingServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingsServiceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  identifier?: string;
  args?: string;
  deviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      identifier: 'Identifier',
      args: 'Args',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      identifier: 'string',
      args: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingsServiceResponseBody extends $tea.Model {
  requestId?: string;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeThingsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeThingsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  status?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  page?: number;
  data?: ListJobResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      page: 'number',
      data: ListJobResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  pageSize?: number;
  currentPage?: number;
  destVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      destVersion: 'DestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      pageSize: 'number',
      currentPage: 'number',
      destVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  firmwareInfo?: ListOTAFirmwareResponseBodyFirmwareInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      firmwareInfo: 'FirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      firmwareInfo: ListOTAFirmwareResponseBodyFirmwareInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTAFirmwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTAFirmwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  data?: ListOTAJobByDeviceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAJobByDeviceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTAJobByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTAJobByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  data?: ListOTAJobByFirmwareResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAJobByFirmwareResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTAJobByFirmwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTAJobByFirmwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  authConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      authConfig: 'AuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      authConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: ListOTAModuleByProductResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: { 'type': 'array', 'itemType': ListOTAModuleByProductResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTAModuleByProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTAModuleByProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  data?: ListOTAModuleVersionsByDeviceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAModuleVersionsByDeviceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTAModuleVersionsByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTAModuleVersionsByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  taskStatus?: string;
  jobId?: string;
  currentPage?: number;
  deviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      taskStatus: 'TaskStatus',
      jobId: 'JobId',
      currentPage: 'CurrentPage',
      deviceNames: 'DeviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      taskStatus: 'string',
      jobId: 'string',
      currentPage: 'number',
      deviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  data?: ListOTATaskByJobResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTATaskByJobResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOTATaskByJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOTATaskByJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  currentPage?: number;
  pageSize?: number;
  productTag?: ListProductByTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      productTag: { 'type': 'array', 'itemType': ListProductByTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  productInfos?: ListProductByTagsResponseBodyProductInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      productInfos: 'ProductInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      productInfos: ListProductByTagsResponseBodyProductInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductByTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductByTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: ListProductTagsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: ListProductTagsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  currentPage?: number;
  pageSize?: number;
  searchName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      searchName: 'SearchName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      searchName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  page?: number;
  total?: number;
  pageSize?: number;
  data?: ListRuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      total: 'Total',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      total: 'number',
      pageSize: 'number',
      data: ListRuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  ruleActionList?: ListRuleActionsResponseBodyRuleActionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleActionList: 'RuleActionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleActionList: ListRuleActionsResponseBodyRuleActionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRuleActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRuleActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  limit?: number;
  jobId?: string;
  nextToken?: string;
  device?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      limit: 'Limit',
      jobId: 'JobId',
      nextToken: 'NextToken',
      device: 'Device',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      limit: 'number',
      jobId: 'string',
      nextToken: 'string',
      device: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  nextToken?: string;
  data?: ListTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      nextToken: 'NextToken',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      data: ListTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: string;
  pageNo?: string;
  jobId?: string;
  device?: string;
  status?: string;
  deviceName?: string;
  jobName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      jobId: 'JobId',
      device: 'Device',
      status: 'Status',
      deviceName: 'DeviceName',
      jobName: 'JobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'string',
      pageNo: 'string',
      jobId: 'string',
      device: 'string',
      status: 'string',
      deviceName: 'string',
      jobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  page?: number;
  data?: ListTaskByPageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      page: 'number',
      data: ListTaskByPageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: ListThingModelVersionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListThingModelVersionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListThingModelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListThingModelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: ListThingTemplatesResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: { 'type': 'array', 'itemType': ListThingTemplatesResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListThingTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListThingTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  deviceListStr?: string;
  gwIotId?: string;
  gwProductKey?: string;
  gwDeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      deviceListStr: 'DeviceListStr',
      gwIotId: 'GwIotId',
      gwProductKey: 'GwProductKey',
      gwDeviceName: 'GwDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      deviceListStr: 'string',
      gwIotId: 'string',
      gwProductKey: 'string',
      gwDeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: NotifyAddThingTopoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: NotifyAddThingTopoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: NotifyAddThingTopoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: NotifyAddThingTopoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  qos?: number;
  topicFullName?: string;
  messageContent?: string;
  responseTopic?: string;
  correlationData?: string;
  userProp?: PubRequestUserProp[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      qos: 'Qos',
      topicFullName: 'TopicFullName',
      messageContent: 'MessageContent',
      responseTopic: 'ResponseTopic',
      correlationData: 'CorrelationData',
      userProp: 'UserProp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      qos: 'number',
      topicFullName: 'string',
      messageContent: 'string',
      responseTopic: 'string',
      correlationData: 'string',
      userProp: { 'type': 'array', 'itemType': PubRequestUserProp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubBroadcastRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  topicFullName?: string;
  messageContent?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      topicFullName: 'TopicFullName',
      messageContent: 'MessageContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      topicFullName: 'string',
      messageContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubBroadcastResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubBroadcastResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PubBroadcastResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PubBroadcastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  modelVersion?: string;
  description?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      description: 'Description',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      description: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishThingModelResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKeyList?: string[];
  categoryKeyList?: string[];
  appKey?: string;
  tagList?: QueryAppDeviceListRequestTagList[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKeyList: 'ProductKeyList',
      categoryKeyList: 'CategoryKeyList',
      appKey: 'AppKey',
      tagList: 'TagList',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKeyList: { 'type': 'array', 'itemType': 'string' },
      categoryKeyList: { 'type': 'array', 'itemType': 'string' },
      appKey: 'string',
      tagList: { 'type': 'array', 'itemType': QueryAppDeviceListRequestTagList },
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  data?: QueryAppDeviceListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryAppDeviceListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAppDeviceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAppDeviceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryBatchRegisterDeviceStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryBatchRegisterDeviceStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBatchRegisterDeviceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBatchRegisterDeviceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertUrlByApplyIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertUrlByApplyIdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  certUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      certUrl: 'CertUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      certUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertUrlByApplyIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCertUrlByApplyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCertUrlByApplyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClientIdsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  iotInstanceId?: string;
  authConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      authConfig: 'AuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      authConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClientIdsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryClientIdsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryClientIdsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClientIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryClientIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryClientIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryConsumerGroupByGroupIdResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QueryConsumerGroupByGroupIdResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConsumerGroupByGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConsumerGroupByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  fuzzy?: boolean;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      fuzzy: 'Fuzzy',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      fuzzy: 'boolean',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  currentPage?: number;
  code?: string;
  data?: QueryConsumerGroupListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      currentPage: 'CurrentPage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      currentPage: 'number',
      code: 'string',
      data: QueryConsumerGroupListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConsumerGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConsumerGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  accumulationCount?: number;
  consumerSpeed?: number;
  lastConsumerTime?: string;
  code?: string;
  clientConnectionStatusList?: QueryConsumerGroupStatusResponseBodyClientConnectionStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      accumulationCount: 'AccumulationCount',
      consumerSpeed: 'ConsumerSpeed',
      lastConsumerTime: 'LastConsumerTime',
      code: 'Code',
      clientConnectionStatusList: 'ClientConnectionStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      accumulationCount: 'number',
      consumerSpeed: 'number',
      lastConsumerTime: 'string',
      code: 'string',
      clientConnectionStatusList: QueryConsumerGroupStatusResponseBodyClientConnectionStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryConsumerGroupStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryConsumerGroupStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  startTime?: number;
  endTime?: number;
  traceId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      traceId: 'TraceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
      startTime: 'number',
      endTime: 'number',
      traceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryDetailSceneRuleLogResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QueryDetailSceneRuleLogResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDetailSceneRuleLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDetailSceneRuleLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  total?: number;
  pageSize?: number;
  pageCount?: number;
  page?: number;
  data?: QueryDeviceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      page: 'number',
      data: QueryDeviceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      SQL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  totalCount?: number;
  data?: QueryDeviceBySQLResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceBySQLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceBySQLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  status?: number;
  currentPage?: number;
  pageSize?: number;
  bizTenantId?: string;
  resourceGroupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      status: 'Status',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      bizTenantId: 'BizTenantId',
      resourceGroupId: 'ResourceGroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      status: 'number',
      currentPage: 'number',
      pageSize: 'number',
      bizTenantId: 'string',
      resourceGroupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  data?: QueryDeviceByStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceByStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceByStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceByStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  tag?: QueryDeviceByTagsRequestTag[];
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      tag: 'Tag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      tag: { 'type': 'array', 'itemType': QueryDeviceByTagsRequestTag },
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  data?: QueryDeviceByTagsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceByTagsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceByTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceByTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  deviceCertInfo?: QueryDeviceCertResponseBodyDeviceCertInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceCertInfo: 'DeviceCertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceCertInfo: QueryDeviceCertResponseBodyDeviceCertInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  identifier?: string[];
  iotId?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      identifier: 'Identifier',
      iotId: 'IotId',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      identifier: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceDesiredPropertyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceDesiredPropertyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceDesiredPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceDesiredPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime?: number;
  identifier?: string;
  eventType?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      eventType: 'EventType',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      eventType: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceEventDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceEventDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceEventDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceEventDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceFileResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceFileResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  currentPage?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  data?: QueryDeviceFileListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      data: QueryDeviceFileListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceFileListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceFileListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  groupInfos?: QueryDeviceGroupByDeviceResponseBodyGroupInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      groupInfos: 'GroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      groupInfos: QueryDeviceGroupByDeviceResponseBodyGroupInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceGroupByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceGroupByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  tag?: QueryDeviceGroupByTagsRequestTag[];
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      tag: 'Tag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      tag: { 'type': 'array', 'itemType': QueryDeviceGroupByTagsRequestTag },
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  data?: QueryDeviceGroupByTagsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceGroupByTagsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceGroupByTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceGroupByTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceGroupInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceGroupInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceGroupInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  superGroupId?: string;
  groupName?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      superGroupId: 'SuperGroupId',
      groupName: 'GroupName',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      superGroupId: 'string',
      groupName: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  currentPage?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  data?: QueryDeviceGroupListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      data: QueryDeviceGroupListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceGroupTagListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceGroupTagListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceGroupTagListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceGroupTagListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  data?: QueryDeviceListByDeviceGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceListByDeviceGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceListByDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceListByDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime?: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceOriginalEventDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalEventDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceOriginalEventDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceOriginalEventDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime?: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceOriginalPropertyDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalPropertyDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceOriginalPropertyDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceOriginalPropertyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  iotId?: string;
  asc?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      iotId: 'IotId',
      asc: 'Asc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      iotId: 'string',
      asc: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceOriginalPropertyStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalPropertyStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceOriginalPropertyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceOriginalPropertyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime?: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceOriginalServiceDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalServiceDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceOriginalServiceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceOriginalServiceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  props?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      props: 'Props',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      props: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePropResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePropResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime?: number;
  identifier?: string[];
  asc?: number;
  iotId?: string;
  endTime?: number;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: { 'type': 'array', 'itemType': 'string' },
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  nextValid?: boolean;
  nextTime?: number;
  propertyDataInfos?: QueryDevicePropertiesDataResponseBodyPropertyDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      nextValid: 'NextValid',
      nextTime: 'NextTime',
      propertyDataInfos: 'PropertyDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      nextValid: 'boolean',
      nextTime: 'number',
      propertyDataInfos: QueryDevicePropertiesDataResponseBodyPropertyDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePropertiesDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePropertiesDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime?: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDevicePropertyDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDevicePropertyDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePropertyDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePropertyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDevicePropertyStatusResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDevicePropertyStatusResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePropertyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePropertyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime?: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime?: number;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceServiceDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceServiceDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceServiceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceServiceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  groupId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      groupId: 'GroupId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      groupId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryDeviceStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  type?: number;
  driverName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      type: 'Type',
      driverName: 'DriverName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      type: 'number',
      driverName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeDriverResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeDriverResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  driverId?: string;
  driverVersion?: string;
  versionState?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      versionState: 'VersionState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      driverId: 'string',
      driverVersion: 'string',
      versionState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeDriverVersionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeDriverVersionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelName?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelName: 'ChannelName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceChannelResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceChannelResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceDeviceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDeviceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  instanceId?: string;
  channelId?: string;
  driverId?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      channelId: 'ChannelId',
      driverId: 'DriverId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      instanceId: 'string',
      channelId: 'string',
      driverId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceDeviceByDriverResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDeviceByDriverResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceDeviceByDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceDeviceByDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceDriverResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDriverResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceDriverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceDriverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  gatewayList?: QueryEdgeInstanceGatewayResponseBodyGatewayList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      gatewayList: 'GatewayList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      gatewayList: { 'type': 'array', 'itemType': QueryEdgeInstanceGatewayResponseBodyGatewayList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceHistoricDeploymentResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceHistoricDeploymentResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceHistoricDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceHistoricDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryEdgeInstanceSceneRuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceSceneRuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEdgeInstanceSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEdgeInstanceSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryJobResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryJobResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryJobStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryJobStatisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryJobStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryJobStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  productKey?: string;
  joinPermissions?: QueryLoRaJoinPermissionsResponseBodyJoinPermissions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      joinPermissions: 'JoinPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      joinPermissions: QueryLoRaJoinPermissionsResponseBodyJoinPermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryLoRaJoinPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryLoRaJoinPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  firmwareId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      firmwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  firmwareInfo?: QueryOTAFirmwareResponseBodyFirmwareInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      firmwareInfo: 'FirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      firmwareInfo: QueryOTAFirmwareResponseBodyFirmwareInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOTAFirmwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOTAFirmwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryOTAJobResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryOTAJobResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOTAJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOTAJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  applyId?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      applyId: 'ApplyId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      applyId: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  pageSize?: number;
  page?: number;
  pageCount?: number;
  total?: number;
  applyDeviceList?: QueryPageByApplyIdResponseBodyApplyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      pageSize: 'PageSize',
      page: 'Page',
      pageCount: 'PageCount',
      total: 'Total',
      applyDeviceList: 'ApplyDeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      pageSize: 'number',
      page: 'number',
      pageCount: 'number',
      total: 'number',
      applyDeviceList: QueryPageByApplyIdResponseBodyApplyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPageByApplyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPageByApplyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryProductResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  productCertInfo?: QueryProductCertInfoResponseBodyProductCertInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productCertInfo: 'ProductCertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productCertInfo: QueryProductCertInfoResponseBodyProductCertInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProductCertInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProductCertInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  pageSize?: number;
  resourceGroupId?: string;
  aliyunCommodityCode?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      aliyunCommodityCode: 'AliyunCommodityCode',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      resourceGroupId: 'string',
      aliyunCommodityCode: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryProductListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProductListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryProductTopicResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductTopicResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProductTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProductTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleName?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleName: 'RuleName',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleName: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QuerySceneRuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QuerySceneRuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  productKey?: string;
  type?: string;
  deviceDataFlag?: boolean;
  deviceLifeCycleFlag?: boolean;
  deviceStatusChangeFlag?: boolean;
  deviceTopoLifeCycleFlag?: boolean;
  foundDeviceListFlag?: boolean;
  otaEventFlag?: boolean;
  thingHistoryFlag?: boolean;
  mnsConfiguration?: string;
  deviceTagFlag?: boolean;
  otaVersionFlag?: boolean;
  otaJobFlag?: boolean;
  consumerGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      type: 'Type',
      deviceDataFlag: 'DeviceDataFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      otaEventFlag: 'OtaEventFlag',
      thingHistoryFlag: 'ThingHistoryFlag',
      mnsConfiguration: 'MnsConfiguration',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
      consumerGroupIds: 'ConsumerGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      type: 'string',
      deviceDataFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      deviceStatusChangeFlag: 'boolean',
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      otaEventFlag: 'boolean',
      thingHistoryFlag: 'boolean',
      mnsConfiguration: 'string',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  startTime?: number;
  endTime?: number;
  status?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
      startTime: 'number',
      endTime: 'number',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QuerySummarySceneRuleLogResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QuerySummarySceneRuleLogResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySummarySceneRuleLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySummarySceneRuleLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QuerySuperDeviceGroupResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QuerySuperDeviceGroupResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySuperDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySuperDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryTaskResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryTaskResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey?: string;
  modelVersion?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  productKey?: string;
  data?: QueryThingModelResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      data: QueryThingModelResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  resourceGroupId?: string;
  modelVersion?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryThingModelExtendConfigResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryThingModelExtendConfigResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryThingModelExtendConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryThingModelExtendConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  modelVersion?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: QueryThingModelExtendConfigPublishedResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryThingModelExtendConfigPublishedResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryThingModelExtendConfigPublishedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryThingModelExtendConfigPublishedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  resourceGroupId?: string;
  modelVersion?: string;
  functionBlockId?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  productKey?: string;
  data?: QueryThingModelPublishedResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      data: QueryThingModelPublishedResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryThingModelPublishedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryThingModelPublishedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  srcTopics?: QueryTopicReverseRouteTableResponseBodySrcTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      srcTopics: 'SrcTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      srcTopics: QueryTopicReverseRouteTableResponseBodySrcTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTopicReverseRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTopicReverseRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  dstTopics?: QueryTopicRouteTableResponseBodyDstTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      dstTopics: 'DstTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      dstTopics: QueryTopicRouteTableResponseBodyDstTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTopicRouteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTopicRouteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  devEui?: string;
  nickname?: string;
  pinCode?: string;
  joinEui?: string;
  appKey?: string;
  loraNodeType?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      devEui: 'DevEui',
      nickname: 'Nickname',
      pinCode: 'PinCode',
      joinEui: 'JoinEui',
      appKey: 'AppKey',
      loraNodeType: 'LoraNodeType',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      devEui: 'string',
      nickname: 'string',
      pinCode: 'string',
      joinEui: 'string',
      appKey: 'string',
      loraNodeType: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: RegisterDeviceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: RegisterDeviceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  driverVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveThingTopoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveThingTopoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveThingTopoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveThingTopoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveThingTopoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceEdgeInstanceGatewayRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  currentGatewayId?: string;
  newGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentGatewayId: 'CurrentGatewayId',
      newGatewayId: 'NewGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      currentGatewayId: 'string',
      newGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceEdgeInstanceGatewayResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceEdgeInstanceGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceEdgeInstanceGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceEdgeInstanceGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumerGroupPositionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumerGroupPositionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumerGroupPositionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetConsumerGroupPositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetConsumerGroupPositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetThingRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetThingResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetThingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetThingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetThingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RRpcRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  timeout?: number;
  requestBase64Byte?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      timeout: 'Timeout',
      requestBase64Byte: 'RequestBase64Byte',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      timeout: 'number',
      requestBase64Byte: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RRpcResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  rrpcCode?: string;
  payloadBase64Byte?: string;
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      rrpcCode: 'RrpcCode',
      payloadBase64Byte: 'PayloadBase64Byte',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      rrpcCode: 'string',
      payloadBase64Byte: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RRpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RRpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RRpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDevicePropRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  props?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      props: 'Props',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      props: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDevicePropResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDevicePropResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveDevicePropResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveDevicePropResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  iotId?: string;
  deviceName?: string;
  productKey?: string;
  items?: string;
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      iotId: 'IotId',
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
      items: 'Items',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      iotId: 'string',
      deviceName: 'string',
      productKey: 'string',
      items: 'string',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: SetDeviceDesiredPropertyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: SetDeviceDesiredPropertyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDeviceDesiredPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDeviceDesiredPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceGroupTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  tagString?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      tagString: 'TagString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      tagString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceGroupTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceGroupTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDeviceGroupTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDeviceGroupTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  items?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      items: 'Items',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      items: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: SetDevicePropertyResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: SetDevicePropertyResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDevicePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDevicePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicesPropertyRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  deviceName?: string[];
  iotInstanceId?: string;
  productKey?: string;
  items?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
      items: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicesPropertyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicesPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDevicesPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDevicesPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  configs?: SetEdgeInstanceDriverConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      configs: { 'type': 'array', 'itemType': SetEdgeInstanceDriverConfigsRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetEdgeInstanceDriverConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetEdgeInstanceDriverConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProductCertInfoRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  issueModel?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      issueModel: 'IssueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      issueModel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProductCertInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProductCertInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetProductCertInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetProductCertInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpeechByCombinationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  combinationList?: string[];
  iotId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      combinationList: 'CombinationList',
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      combinationList: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpeechByCombinationResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpeechByCombinationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SpeechByCombinationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SpeechByCombinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCpuRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  targetValue?: string;
  iotId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      targetValue: 'TargetValue',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      targetValue: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCpuResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  data?: StartCpuResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: StartCpuResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCpuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCpuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCpuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClientIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  clientId?: string;
  iotInstanceId?: string;
  authConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      clientId: 'ClientId',
      iotInstanceId: 'IotInstanceId',
      authConfig: 'AuthConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      clientId: 'string',
      iotInstanceId: 'string',
      authConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClientIdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformClientIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransformClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransformClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TriggerSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TriggerSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindApplicationFromEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindApplicationFromEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindApplicationFromEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindApplicationFromEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindApplicationFromEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDriverFromEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDriverFromEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDriverFromEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindDriverFromEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDriverFromEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRoleFromEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRoleFromEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRoleFromEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindRoleFromEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindRoleFromEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSceneRuleFromEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSceneRuleFromEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSceneRuleFromEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindSceneRuleFromEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindSceneRuleFromEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  newGroupName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      newGroupName: 'NewGroupName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      newGroupName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConsumerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  groupId?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      groupId: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceShadowRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  shadowMessage?: string;
  deltaUpdate?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      shadowMessage: 'ShadowMessage',
      deltaUpdate: 'DeltaUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      shadowMessage: 'string',
      deltaUpdate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceShadowResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceShadowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceShadowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceShadowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeDriverVersionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  driverId?: string;
  driverVersion?: string;
  edgeVersion?: string;
  description?: string;
  sourceConfig?: string;
  driverConfig?: string;
  containerConfig?: string;
  configCheckRule?: string;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeDriverVersionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeDriverVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEdgeDriverVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEdgeDriverVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  name?: string;
  tags?: string;
  spec?: number;
  bizEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      name: 'Name',
      tags: 'Tags',
      spec: 'Spec',
      bizEnable: 'BizEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      name: 'string',
      tags: 'string',
      spec: 'number',
      bizEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEdgeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEdgeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  instanceId?: string;
  driverId?: string;
  channelId?: string;
  channelName?: string;
  configs?: UpdateEdgeInstanceChannelRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelId: 'string',
      channelName: 'string',
      configs: { 'type': 'array', 'itemType': UpdateEdgeInstanceChannelRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEdgeInstanceChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEdgeInstanceChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  description?: string;
  timeoutConfig?: string;
  rolloutConfig?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      timeoutConfig: 'TimeoutConfig',
      rolloutConfig: 'RolloutConfig',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      description: 'string',
      timeoutConfig: 'string',
      rolloutConfig: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOTAModuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  aliasName?: string;
  iotInstanceId?: string;
  moduleName?: string;
  desc?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      aliasName: 'AliasName',
      iotInstanceId: 'IotInstanceId',
      moduleName: 'ModuleName',
      desc: 'Desc',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      aliasName: 'string',
      iotInstanceId: 'string',
      moduleName: 'string',
      desc: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOTAModuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOTAModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOTAModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOTAModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  description?: string;
  productKey?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      productKey: 'ProductKey',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      description: 'string',
      productKey: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFilterConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  propertyTimestampFilter?: boolean;
  propertyValueFilter?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      propertyTimestampFilter: 'PropertyTimestampFilter',
      propertyValueFilter: 'PropertyValueFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      propertyTimestampFilter: 'boolean',
      propertyValueFilter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFilterConfigResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFilterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProductFilterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProductFilterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  productTag?: UpdateProductTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      productTag: { 'type': 'array', 'itemType': UpdateProductTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  invalidProductTags?: UpdateProductTagsResponseBodyInvalidProductTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      invalidProductTags: 'InvalidProductTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      invalidProductTags: UpdateProductTagsResponseBodyInvalidProductTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProductTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProductTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTopicRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  desc?: string;
  operation?: string;
  topicShortName?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      desc: 'Desc',
      operation: 'Operation',
      topicShortName: 'TopicShortName',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      desc: 'string',
      operation: 'string',
      topicShortName: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTopicResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProductTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProductTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: number;
  select?: string;
  shortTopic?: string;
  where?: string;
  productKey?: string;
  name?: string;
  ruleDesc?: string;
  topicType?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      select: 'Select',
      shortTopic: 'ShortTopic',
      where: 'Where',
      productKey: 'ProductKey',
      name: 'Name',
      ruleDesc: 'RuleDesc',
      topicType: 'TopicType',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'number',
      select: 'string',
      shortTopic: 'string',
      where: 'string',
      productKey: 'string',
      name: 'string',
      ruleDesc: 'string',
      topicType: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  actionId?: number;
  type?: string;
  configuration?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
      type: 'Type',
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      actionId: 'number',
      type: 'string',
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleActionResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  success?: boolean;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRuleActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRuleActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRuleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  ruleId?: string;
  ruleName?: string;
  ruleContent?: string;
  ruleDescription?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleContent: 'RuleContent',
      ruleDescription: 'RuleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleContent: 'string',
      ruleDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSceneRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSceneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribeRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  deviceStatusChangeFlag?: boolean;
  iotInstanceId?: string;
  thingHistoryFlag?: boolean;
  productKey?: string;
  type?: string;
  deviceDataFlag?: boolean;
  consumerGroupIds?: string[];
  deviceTopoLifeCycleFlag?: boolean;
  foundDeviceListFlag?: boolean;
  otaEventFlag?: boolean;
  deviceLifeCycleFlag?: boolean;
  mnsConfiguration?: string;
  deviceTagFlag?: boolean;
  otaVersionFlag?: boolean;
  otaJobFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      iotInstanceId: 'IotInstanceId',
      thingHistoryFlag: 'ThingHistoryFlag',
      productKey: 'ProductKey',
      type: 'Type',
      deviceDataFlag: 'DeviceDataFlag',
      consumerGroupIds: 'ConsumerGroupIds',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      otaEventFlag: 'OtaEventFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      mnsConfiguration: 'MnsConfiguration',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      deviceStatusChangeFlag: 'boolean',
      iotInstanceId: 'string',
      thingHistoryFlag: 'boolean',
      productKey: 'string',
      type: 'string',
      deviceDataFlag: 'boolean',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      otaEventFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      mnsConfiguration: 'string',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribeRelationResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribeRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSubscribeRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSubscribeRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotInstanceId?: string;
  productKey?: string;
  identifier?: string;
  thingModelJson?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  realTenantId?: string;
  realTripartiteKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      identifier: 'Identifier',
      thingModelJson: 'ThingModelJson',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
      realTenantId: 'RealTenantId',
      realTripartiteKey: 'RealTripartiteKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      identifier: 'string',
      thingModelJson: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
      realTenantId: 'string',
      realTripartiteKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateThingModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateThingModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelValidationConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  validateType?: number;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      validateType: 'ValidateType',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      validateType: 'number',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelValidationConfigResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelValidationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateThingModelValidationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateThingModelValidationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingScriptRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  scriptContent?: string;
  iotInstanceId?: string;
  productKey?: string;
  scriptType?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      scriptContent: 'ScriptContent',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      scriptContent: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scriptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingScriptResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateThingScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateThingScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsRequestDevice extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoRequestTopoAddItem extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  sign?: string;
  timestamp?: string;
  signMethod?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      sign: 'Sign',
      timestamp: 'Timestamp',
      signMethod: 'SignMethod',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      sign: 'string',
      timestamp: 'string',
      signMethod: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoShrinkRequestTopoAddItem extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  sign?: string;
  timestamp?: string;
  signMethod?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      sign: 'Sign',
      timestamp: 'Timestamp',
      signMethod: 'SignMethod',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      sign: 'string',
      timestamp: 'string',
      signMethod: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesRequestDeviceNameList extends $tea.Model {
  deviceNickname?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNickname: 'DeviceNickname',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNickname: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNameList extends $tea.Model {
  invalidDeviceName?: string[];
  static names(): { [key: string]: string } {
    return {
      invalidDeviceName: 'InvalidDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDeviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNicknameList extends $tea.Model {
  invalidDeviceNickname?: string[];
  static names(): { [key: string]: string } {
    return {
      invalidDeviceNickname: 'InvalidDeviceNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDeviceNickname: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseBodyData extends $tea.Model {
  applyId?: number;
  invalidDeviceNameList?: BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNameList;
  invalidDeviceNicknameList?: BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNicknameList;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      invalidDeviceNameList: 'InvalidDeviceNameList',
      invalidDeviceNicknameList: 'InvalidDeviceNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      invalidDeviceNameList: BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNameList,
      invalidDeviceNicknameList: BatchCheckDeviceNamesResponseBodyDataInvalidDeviceNicknameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsRequestDevice extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusResponseBodyData extends $tea.Model {
  bindStatus?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponseBodyDeviceStatusListDeviceStatus extends $tea.Model {
  status?: string;
  lastOnlineTime?: string;
  deviceName?: string;
  deviceId?: string;
  asAddress?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastOnlineTime: 'LastOnlineTime',
      deviceName: 'DeviceName',
      deviceId: 'DeviceId',
      asAddress: 'AsAddress',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastOnlineTime: 'string',
      deviceName: 'string',
      deviceId: 'string',
      asAddress: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponseBodyDeviceStatusList extends $tea.Model {
  deviceStatus?: BatchGetDeviceStateResponseBodyDeviceStatusListDeviceStatus[];
  static names(): { [key: string]: string } {
    return {
      deviceStatus: 'DeviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStatus: { 'type': 'array', 'itemType': BatchGetDeviceStateResponseBodyDeviceStatusListDeviceStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverResponseBodyDriverList extends $tea.Model {
  gmtCreateTimestamp?: number;
  type?: number;
  cpuArch?: string;
  driverId?: string;
  isBuiltIn?: boolean;
  gmtModifiedTimestamp?: number;
  runtime?: string;
  driverName?: string;
  driverProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      type: 'Type',
      cpuArch: 'CpuArch',
      driverId: 'DriverId',
      isBuiltIn: 'IsBuiltIn',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      runtime: 'Runtime',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      type: 'number',
      cpuArch: 'string',
      driverId: 'string',
      isBuiltIn: 'boolean',
      gmtModifiedTimestamp: 'number',
      runtime: 'string',
      driverName: 'string',
      driverProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigListConfig extends $tea.Model {
  key?: string;
  configId?: string;
  format?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      configId: 'string',
      format: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigList extends $tea.Model {
  config?: BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseBodyDataChannel extends $tea.Model {
  channelName?: string;
  channelId?: string;
  configList?: BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigList;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      channelId: 'ChannelId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      channelId: 'string',
      configList: BatchGetEdgeInstanceChannelResponseBodyDataChannelConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseBodyData extends $tea.Model {
  channel?: BatchGetEdgeInstanceChannelResponseBodyDataChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': BatchGetEdgeInstanceChannelResponseBodyDataChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelResponseBodyDeviceChannelList extends $tea.Model {
  channelName?: string;
  channelId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      channelId: 'ChannelId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      channelId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigListConfig extends $tea.Model {
  content?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigList extends $tea.Model {
  config?: BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigListConfig;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: BatchGetEdgeInstanceDeviceConfigResponseBodyDeviceConfigListConfig,
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverResponseBodyDeviceDriverList extends $tea.Model {
  driverId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigListConfigList extends $tea.Model {
  key?: string;
  configId?: string;
  format?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      configId: 'string',
      format: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigList extends $tea.Model {
  driverId?: string;
  configList?: BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigListConfigList[];
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      configList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDriverConfigsResponseBodyDriverConfigListConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponseBodyDataData extends $tea.Model {
  status?: string;
  utcActive?: string;
  productName?: string;
  deviceName?: string;
  firmwareVersion?: string;
  utcCreate?: string;
  productKey?: string;
  nodeType?: number;
  region?: string;
  deviceSecret?: string;
  gmtActive?: string;
  gmtCreate?: string;
  nickname?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      utcActive: 'UtcActive',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      firmwareVersion: 'FirmwareVersion',
      utcCreate: 'UtcCreate',
      productKey: 'ProductKey',
      nodeType: 'NodeType',
      region: 'Region',
      deviceSecret: 'DeviceSecret',
      gmtActive: 'GmtActive',
      gmtCreate: 'GmtCreate',
      nickname: 'Nickname',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      utcActive: 'string',
      productName: 'string',
      deviceName: 'string',
      firmwareVersion: 'string',
      utcCreate: 'string',
      productKey: 'string',
      nodeType: 'number',
      region: 'string',
      deviceSecret: 'string',
      gmtActive: 'string',
      gmtCreate: 'string',
      nickname: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponseBodyData extends $tea.Model {
  data?: BatchQueryDeviceDetailResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BatchQueryDeviceDetailResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceResponseBodyData extends $tea.Model {
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdResponseBodyData extends $tea.Model {
  applyId?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs extends $tea.Model {
  content?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameRequestDeviceNicknameInfo extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  nickname?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nickname: 'Nickname',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      nickname: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequestRequestParam extends $tea.Model {
  type?: string;
  required?: boolean;
  example?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      required: 'Required',
      example: 'Example',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      required: 'boolean',
      example: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequestResponseParam extends $tea.Model {
  type?: string;
  required?: boolean;
  example?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      required: 'Required',
      example: 'Example',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      required: 'boolean',
      example: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceResponseBodyData extends $tea.Model {
  apiSrn?: string;
  createTime?: number;
  lastUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiSrn: 'ApiSrn',
      createTime: 'CreateTime',
      lastUpdateTime: 'LastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSrn: 'string',
      createTime: 'number',
      lastUpdateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupResponseBodyData extends $tea.Model {
  groupId?: string;
  groupName?: string;
  utcCreate?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      utcCreate: 'UtcCreate',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      utcCreate: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelRequestConfigs extends $tea.Model {
  key?: string;
  content?: string;
  format?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      content: 'Content',
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      content: 'string',
      format: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressResponseBodyData extends $tea.Model {
  ossAddress?: string;
  ossPreSignedAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ossAddress: 'OssAddress',
      ossPreSignedAddress: 'OssPreSignedAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossAddress: 'string',
      ossPreSignedAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskRequestDeviceInfo extends $tea.Model {
  devEui?: string;
  pinCode?: string;
  static names(): { [key: string]: string } {
    return {
      devEui: 'DevEui',
      pinCode: 'PinCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devEui: 'string',
      pinCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobResponseBodyData extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareResponseBodyData extends $tea.Model {
  utcCreate?: string;
  firmwareId?: string;
  static names(): { [key: string]: string } {
    return {
      utcCreate: 'UtcCreate',
      firmwareId: 'FirmwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      utcCreate: 'string',
      firmwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobResponseBodyData extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobResponseBodyData extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBodyData extends $tea.Model {
  authType?: string;
  productKey?: string;
  productName?: string;
  nodeType?: number;
  description?: string;
  id2?: boolean;
  productSecret?: string;
  protocolType?: string;
  dataFormat?: number;
  aliyunCommodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      nodeType: 'NodeType',
      description: 'Description',
      id2: 'Id2',
      productSecret: 'ProductSecret',
      protocolType: 'ProtocolType',
      dataFormat: 'DataFormat',
      aliyunCommodityCode: 'AliyunCommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      productKey: 'string',
      productName: 'string',
      nodeType: 'number',
      description: 'string',
      id2: 'boolean',
      productSecret: 'string',
      protocolType: 'string',
      dataFormat: 'number',
      aliyunCommodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsRequestProductTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponseBodyInvalidProductTagsProductTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponseBodyInvalidProductTags extends $tea.Model {
  productTag?: CreateProductTagsResponseBodyInvalidProductTagsProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': CreateProductTagsResponseBodyInvalidProductTagsProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableResponseBodyFailureTopics extends $tea.Model {
  topic?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableResponseBodyFailureTopics extends $tea.Model {
  topic?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLResponseBodyData extends $tea.Model {
  key?: string;
  signature?: string;
  host?: string;
  fileUrl?: string;
  policy?: string;
  objectStorage?: string;
  utcCreate?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      signature: 'Signature',
      host: 'Host',
      fileUrl: 'FileUrl',
      policy: 'Policy',
      objectStorage: 'ObjectStorage',
      utcCreate: 'UtcCreate',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      signature: 'string',
      host: 'string',
      fileUrl: 'string',
      policy: 'string',
      objectStorage: 'string',
      utcCreate: 'string',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLResponseBodyData extends $tea.Model {
  key?: string;
  ossAccessKeyId?: string;
  signature?: string;
  host?: string;
  policy?: string;
  objectStorage?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ossAccessKeyId: 'OssAccessKeyId',
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      objectStorage: 'ObjectStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ossAccessKeyId: 'string',
      signature: 'string',
      host: 'string',
      policy: 'string',
      objectStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLResponseBodyData extends $tea.Model {
  key?: string;
  OSSAccessKeyId?: string;
  signature?: string;
  host?: string;
  policy?: string;
  objectStorage?: string;
  firmwareUrl?: string;
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      OSSAccessKeyId: 'OSSAccessKeyId',
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      objectStorage: 'ObjectStorage',
      firmwareUrl: 'FirmwareUrl',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      OSSAccessKeyId: 'string',
      signature: 'string',
      host: 'string',
      policy: 'string',
      objectStorage: 'string',
      firmwareUrl: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParamsRequestParams extends $tea.Model {
  type?: string;
  required?: boolean;
  example?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      required: 'Required',
      example: 'Example',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      required: 'boolean',
      example: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParams extends $tea.Model {
  requestParams?: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParamsRequestParams[];
  static names(): { [key: string]: string } {
    return {
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParams: { 'type': 'array', 'itemType': GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParamsRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParamsResponseParams extends $tea.Model {
  type?: string;
  required?: boolean;
  example?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      required: 'Required',
      example: 'Example',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      required: 'boolean',
      example: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParams extends $tea.Model {
  responseParams?: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParamsResponseParams[];
  static names(): { [key: string]: string } {
    return {
      responseParams: 'ResponseParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseParams: { 'type': 'array', 'itemType': GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParamsResponseParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTO extends $tea.Model {
  requestParams?: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParams;
  originSql?: string;
  responseParams?: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParams;
  templateSql?: string;
  static names(): { [key: string]: string } {
    return {
      requestParams: 'RequestParams',
      originSql: 'OriginSql',
      responseParams: 'ResponseParams',
      templateSql: 'TemplateSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParams: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTORequestParams,
      originSql: 'string',
      responseParams: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTOResponseParams,
      templateSql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseBodyData extends $tea.Model {
  displayName?: string;
  status?: number;
  apiSrn?: string;
  sqlTemplateDTO?: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTO;
  description?: string;
  createTime?: number;
  lastUpdateTime?: number;
  requestMethod?: string;
  dateFormat?: string;
  requestProtocol?: string;
  apiPath?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      apiSrn: 'ApiSrn',
      sqlTemplateDTO: 'SqlTemplateDTO',
      description: 'Description',
      createTime: 'CreateTime',
      lastUpdateTime: 'LastUpdateTime',
      requestMethod: 'RequestMethod',
      dateFormat: 'DateFormat',
      requestProtocol: 'RequestProtocol',
      apiPath: 'ApiPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'number',
      apiSrn: 'string',
      sqlTemplateDTO: GetDataAPIServiceDetailResponseBodyDataSqlTemplateDTO,
      description: 'string',
      createTime: 'number',
      lastUpdateTime: 'number',
      requestMethod: 'string',
      dateFormat: 'string',
      requestProtocol: 'string',
      apiPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusResponseBodyData extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionResponseBodyData extends $tea.Model {
  gmtCreateTimestamp?: number;
  configCheckRule?: string;
  edgeVersion?: string;
  driverId?: string;
  gmtModifiedTimestamp?: number;
  versionState?: string;
  containerConfig?: string;
  description?: string;
  driverConfig?: string;
  argument?: string;
  driverVersion?: string;
  sourceConfig?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      configCheckRule: 'ConfigCheckRule',
      edgeVersion: 'EdgeVersion',
      driverId: 'DriverId',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      versionState: 'VersionState',
      containerConfig: 'ContainerConfig',
      description: 'Description',
      driverConfig: 'DriverConfig',
      argument: 'Argument',
      driverVersion: 'DriverVersion',
      sourceConfig: 'SourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      configCheckRule: 'string',
      edgeVersion: 'string',
      driverId: 'string',
      gmtModifiedTimestamp: 'number',
      versionState: 'string',
      containerConfig: 'string',
      description: 'string',
      driverConfig: 'string',
      argument: 'string',
      driverVersion: 'string',
      sourceConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceResponseBodyData extends $tea.Model {
  type?: string;
  gmtCreateTimestamp?: number;
  roleArn?: string;
  roleAttachTime?: string;
  spec?: number;
  gmtModifiedTimestamp?: number;
  tags?: string;
  roleName?: string;
  instanceId?: string;
  gmtModified?: string;
  roleAttachTimestamp?: number;
  latestDeploymentType?: string;
  latestDeploymentStatus?: number;
  bizEnable?: boolean;
  gmtCreate?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      roleArn: 'RoleArn',
      roleAttachTime: 'RoleAttachTime',
      spec: 'Spec',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      tags: 'Tags',
      roleName: 'RoleName',
      instanceId: 'InstanceId',
      gmtModified: 'GmtModified',
      roleAttachTimestamp: 'RoleAttachTimestamp',
      latestDeploymentType: 'LatestDeploymentType',
      latestDeploymentStatus: 'LatestDeploymentStatus',
      bizEnable: 'BizEnable',
      gmtCreate: 'GmtCreate',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      gmtCreateTimestamp: 'number',
      roleArn: 'string',
      roleAttachTime: 'string',
      spec: 'number',
      gmtModifiedTimestamp: 'number',
      tags: 'string',
      roleName: 'string',
      instanceId: 'string',
      gmtModified: 'string',
      roleAttachTimestamp: 'number',
      latestDeploymentType: 'string',
      latestDeploymentStatus: 'number',
      bizEnable: 'boolean',
      gmtCreate: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseBodyDataTaskListResourceSnapshotList extends $tea.Model {
  gmtCreateTimestamp?: number;
  status?: number;
  stage?: number;
  gmtModifiedTimestamp?: number;
  log?: string;
  gmtModified?: string;
  operateType?: number;
  resourceType?: string;
  snapshotId?: string;
  gmtCompleted?: string;
  gmtCreate?: string;
  gmtCompletedTimestamp?: number;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      status: 'Status',
      stage: 'Stage',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      log: 'Log',
      gmtModified: 'GmtModified',
      operateType: 'OperateType',
      resourceType: 'ResourceType',
      snapshotId: 'SnapshotId',
      gmtCompleted: 'GmtCompleted',
      gmtCreate: 'GmtCreate',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      status: 'number',
      stage: 'number',
      gmtModifiedTimestamp: 'number',
      log: 'string',
      gmtModified: 'string',
      operateType: 'number',
      resourceType: 'string',
      snapshotId: 'string',
      gmtCompleted: 'string',
      gmtCreate: 'string',
      gmtCompletedTimestamp: 'number',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseBodyDataTaskList extends $tea.Model {
  gmtCreateTimestamp?: number;
  status?: number;
  resourceSnapshotList?: GetEdgeInstanceDeploymentResponseBodyDataTaskListResourceSnapshotList[];
  stage?: number;
  gatewayId?: string;
  gmtModifiedTimestamp?: number;
  gmtCompleted?: string;
  gmtCreate?: string;
  gmtCompletedTimestamp?: number;
  gmtModified?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      status: 'Status',
      resourceSnapshotList: 'ResourceSnapshotList',
      stage: 'Stage',
      gatewayId: 'GatewayId',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompleted: 'GmtCompleted',
      gmtCreate: 'GmtCreate',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
      gmtModified: 'GmtModified',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      status: 'number',
      resourceSnapshotList: { 'type': 'array', 'itemType': GetEdgeInstanceDeploymentResponseBodyDataTaskListResourceSnapshotList },
      stage: 'number',
      gatewayId: 'string',
      gmtModifiedTimestamp: 'number',
      gmtCompleted: 'string',
      gmtCreate: 'string',
      gmtCompletedTimestamp: 'number',
      gmtModified: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseBodyData extends $tea.Model {
  gmtCreateTimestamp?: number;
  type?: string;
  status?: number;
  deploymentId?: string;
  description?: string;
  gmtModifiedTimestamp?: number;
  taskList?: GetEdgeInstanceDeploymentResponseBodyDataTaskList[];
  gmtCompleted?: string;
  gmtCreate?: string;
  gmtCompletedTimestamp?: number;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      type: 'Type',
      status: 'Status',
      deploymentId: 'DeploymentId',
      description: 'Description',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      taskList: 'TaskList',
      gmtCompleted: 'GmtCompleted',
      gmtCreate: 'GmtCreate',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      type: 'string',
      status: 'number',
      deploymentId: 'string',
      description: 'string',
      gmtModifiedTimestamp: 'number',
      taskList: { 'type': 'array', 'itemType': GetEdgeInstanceDeploymentResponseBodyDataTaskList },
      gmtCompleted: 'string',
      gmtCreate: 'string',
      gmtCompletedTimestamp: 'number',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceResponseBodyData extends $tea.Model {
  status?: string;
  utcActive?: string;
  productName?: string;
  deviceName?: string;
  utcCreate?: string;
  firmwareVersion?: string;
  gmtOnline?: string;
  region?: string;
  iotId?: string;
  utcOnline?: string;
  productKey?: string;
  ipAddress?: string;
  nodeType?: string;
  deviceSecret?: string;
  gmtCreate?: string;
  gmtActive?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      utcActive: 'UtcActive',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      utcCreate: 'UtcCreate',
      firmwareVersion: 'FirmwareVersion',
      gmtOnline: 'GmtOnline',
      region: 'region',
      iotId: 'iotId',
      utcOnline: 'UtcOnline',
      productKey: 'ProductKey',
      ipAddress: 'IpAddress',
      nodeType: 'NodeType',
      deviceSecret: 'DeviceSecret',
      gmtCreate: 'GmtCreate',
      gmtActive: 'GmtActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      utcActive: 'string',
      productName: 'string',
      deviceName: 'string',
      utcCreate: 'string',
      firmwareVersion: 'string',
      gmtOnline: 'string',
      region: 'string',
      iotId: 'string',
      utcOnline: 'string',
      productKey: 'string',
      ipAddress: 'string',
      nodeType: 'string',
      deviceSecret: 'string',
      gmtCreate: 'string',
      gmtActive: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskResponseBodySuccessDevEuis extends $tea.Model {
  successDevEui?: string[];
  static names(): { [key: string]: string } {
    return {
      successDevEui: 'SuccessDevEui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDevEui: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskResponseBodySuccessDevEuis extends $tea.Model {
  successDevEui?: string[];
  static names(): { [key: string]: string } {
    return {
      successDevEui: 'SuccessDevEui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDevEui: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleInfo extends $tea.Model {
  status?: string;
  modified?: string;
  dataType?: string;
  select?: string;
  utcCreated?: string;
  createUserId?: number;
  topicType?: number;
  where?: string;
  productKey?: string;
  utcModified?: string;
  topic?: string;
  shortTopic?: string;
  ruleDesc?: string;
  name?: string;
  created?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modified: 'Modified',
      dataType: 'DataType',
      select: 'Select',
      utcCreated: 'UtcCreated',
      createUserId: 'CreateUserId',
      topicType: 'TopicType',
      where: 'Where',
      productKey: 'ProductKey',
      utcModified: 'UtcModified',
      topic: 'Topic',
      shortTopic: 'ShortTopic',
      ruleDesc: 'RuleDesc',
      name: 'Name',
      created: 'Created',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modified: 'string',
      dataType: 'string',
      select: 'string',
      utcCreated: 'string',
      createUserId: 'number',
      topicType: 'number',
      where: 'string',
      productKey: 'string',
      utcModified: 'string',
      topic: 'string',
      shortTopic: 'string',
      ruleDesc: 'string',
      name: 'string',
      created: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionResponseBodyRuleActionInfo extends $tea.Model {
  type?: string;
  configuration?: string;
  errorActionFlag?: boolean;
  id?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
      id: 'Id',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
      id: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleResponseBodyData extends $tea.Model {
  ruleStatus?: number;
  ruleContent?: string;
  gmtCreate?: number;
  gmtModified?: number;
  ruleDescription?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleStatus: 'RuleStatus',
      ruleContent: 'RuleContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleDescription: 'RuleDescription',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleStatus: 'number',
      ruleContent: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      ruleDescription: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslResponseBodyData extends $tea.Model {
  tslStr?: string;
  tslUri?: string;
  static names(): { [key: string]: string } {
    return {
      tslStr: 'TslStr',
      tslUri: 'TslUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tslStr: 'string',
      tslUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedResponseBodyData extends $tea.Model {
  tslStr?: string;
  tslUri?: string;
  static names(): { [key: string]: string } {
    return {
      tslStr: 'TslStr',
      tslUri: 'TslUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tslStr: 'string',
      tslUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptResponseBodyData extends $tea.Model {
  scriptType?: string;
  scriptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      scriptType: 'ScriptType',
      scriptUrl: 'ScriptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptType: 'string',
      scriptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseBodyDataListDeviceInfo extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseBodyDataList extends $tea.Model {
  deviceInfo?: GetThingTopoResponseBodyDataListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'deviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': GetThingTopoResponseBodyDataListDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseBodyData extends $tea.Model {
  currentPage?: number;
  list?: GetThingTopoResponseBodyDataList;
  pageSize?: number;
  pageCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: GetThingTopoResponseBodyDataList,
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceRequestParam extends $tea.Model {
  paramName?: string;
  paramType?: string;
  paramValue?: string;
  listParamType?: string;
  listParamValue?: string[];
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      listParamType: 'ListParamType',
      listParamValue: 'ListParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramType: 'string',
      paramValue: 'string',
      listParamType: 'string',
      listParamValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseBodyDataResultList extends $tea.Model {
  resultList?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseBodyDataFieldNameList extends $tea.Model {
  fieldNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      fieldNameList: 'FieldNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseBodyData extends $tea.Model {
  resultList?: InvokeDataAPIServiceResponseBodyDataResultList;
  apiSrn?: string;
  fieldNameList?: InvokeDataAPIServiceResponseBodyDataFieldNameList;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      apiSrn: 'ApiSrn',
      fieldNameList: 'FieldNameList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: InvokeDataAPIServiceResponseBodyDataResultList,
      apiSrn: 'string',
      fieldNameList: InvokeDataAPIServiceResponseBodyDataFieldNameList,
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceResponseBodyData extends $tea.Model {
  messageId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyDataData extends $tea.Model {
  jobId?: string;
  jobName?: string;
  utcCreate?: string;
  utcModified?: string;
  status?: string;
  description?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      description: 'Description',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'string',
      description: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseBodyData extends $tea.Model {
  data?: ListJobResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListJobResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponseBodyFirmwareInfoSimpleFirmwareInfo extends $tea.Model {
  firmwareName?: string;
  firmwareId?: string;
  srcVersion?: string;
  destVersion?: string;
  utcCreate?: string;
  utcModified?: string;
  status?: number;
  firmwareDesc?: string;
  firmwareSign?: string;
  firmwareSize?: number;
  firmwareUrl?: string;
  productKey?: string;
  signMethod?: string;
  productName?: string;
  type?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareName: 'FirmwareName',
      firmwareId: 'FirmwareId',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      firmwareDesc: 'FirmwareDesc',
      firmwareSign: 'FirmwareSign',
      firmwareSize: 'FirmwareSize',
      firmwareUrl: 'FirmwareUrl',
      productKey: 'ProductKey',
      signMethod: 'SignMethod',
      productName: 'ProductName',
      type: 'Type',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareName: 'string',
      firmwareId: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'number',
      firmwareDesc: 'string',
      firmwareSign: 'string',
      firmwareSize: 'number',
      firmwareUrl: 'string',
      productKey: 'string',
      signMethod: 'string',
      productName: 'string',
      type: 'number',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponseBodyFirmwareInfo extends $tea.Model {
  simpleFirmwareInfo?: ListOTAFirmwareResponseBodyFirmwareInfoSimpleFirmwareInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleFirmwareInfo: 'SimpleFirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleFirmwareInfo: { 'type': 'array', 'itemType': ListOTAFirmwareResponseBodyFirmwareInfoSimpleFirmwareInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTags extends $tea.Model {
  otaTagDTO?: ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfo extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  utcModified?: string;
  productKey?: string;
  firmwareId?: string;
  utcStartTime?: string;
  utcEndTime?: string;
  jobStatus?: string;
  jobType?: string;
  targetSelection?: string;
  selectionType?: string;
  tags?: ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTags;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      targetSelection: 'string',
      selectionType: 'string',
      tags: ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfoTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseBodyData extends $tea.Model {
  simpleOTAJobInfo?: ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAJobInfo: 'SimpleOTAJobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAJobInfo: { 'type': 'array', 'itemType': ListOTAJobByDeviceResponseBodyDataSimpleOTAJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTags extends $tea.Model {
  otaTagDTO?: ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfo extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  utcModified?: string;
  productKey?: string;
  firmwareId?: string;
  utcStartTime?: string;
  utcEndTime?: string;
  jobStatus?: string;
  jobType?: string;
  targetSelection?: string;
  selectionType?: string;
  tags?: ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTags;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      targetSelection: 'string',
      selectionType: 'string',
      tags: ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfoTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseBodyData extends $tea.Model {
  simpleOTAJobInfo?: ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAJobInfo: 'SimpleOTAJobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAJobInfo: { 'type': 'array', 'itemType': ListOTAJobByFirmwareResponseBodyDataSimpleOTAJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductResponseBodyData extends $tea.Model {
  productKey?: string;
  moduleName?: string;
  aliasName?: string;
  desc?: string;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      moduleName: 'ModuleName',
      aliasName: 'AliasName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      moduleName: 'string',
      aliasName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponseBodyDataSimpleOTAModuleInfo extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  moduleVersion?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      moduleVersion: 'ModuleVersion',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      moduleVersion: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponseBodyData extends $tea.Model {
  simpleOTAModuleInfo?: ListOTAModuleVersionsByDeviceResponseBodyDataSimpleOTAModuleInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAModuleInfo: 'SimpleOTAModuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAModuleInfo: { 'type': 'array', 'itemType': ListOTAModuleVersionsByDeviceResponseBodyDataSimpleOTAModuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponseBodyDataSimpleOTATaskInfo extends $tea.Model {
  taskId?: string;
  utcModified?: string;
  productKey?: string;
  firmwareId?: string;
  taskStatus?: string;
  jobId?: string;
  productName?: string;
  deviceName?: string;
  srcVersion?: string;
  destVersion?: string;
  taskDesc?: string;
  progress?: string;
  iotId?: string;
  utcCreate?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      taskStatus: 'TaskStatus',
      jobId: 'JobId',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      taskDesc: 'TaskDesc',
      progress: 'Progress',
      iotId: 'IotId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      taskStatus: 'string',
      jobId: 'string',
      productName: 'string',
      deviceName: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      taskDesc: 'string',
      progress: 'string',
      iotId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponseBodyData extends $tea.Model {
  simpleOTATaskInfo?: ListOTATaskByJobResponseBodyDataSimpleOTATaskInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTATaskInfo: 'SimpleOTATaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTATaskInfo: { 'type': 'array', 'itemType': ListOTATaskByJobResponseBodyDataSimpleOTATaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsRequestProductTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponseBodyProductInfosProductInfo extends $tea.Model {
  productName?: string;
  productKey?: string;
  createTime?: number;
  description?: string;
  nodeType?: number;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      createTime: 'CreateTime',
      description: 'Description',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      createTime: 'number',
      description: 'string',
      nodeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponseBodyProductInfos extends $tea.Model {
  productInfo?: ListProductByTagsResponseBodyProductInfosProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': ListProductByTagsResponseBodyProductInfosProductInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponseBodyDataProductTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponseBodyData extends $tea.Model {
  productTag?: ListProductTagsResponseBodyDataProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': ListProductTagsResponseBodyDataProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponseBodyDataRuleInfo extends $tea.Model {
  id?: number;
  select?: string;
  topic?: string;
  shortTopic?: string;
  where?: string;
  status?: string;
  createUserId?: number;
  productKey?: string;
  name?: string;
  dataType?: string;
  ruleDesc?: string;
  created?: string;
  utcCreated?: string;
  modified?: string;
  utcModified?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      select: 'Select',
      topic: 'Topic',
      shortTopic: 'ShortTopic',
      where: 'Where',
      status: 'Status',
      createUserId: 'CreateUserId',
      productKey: 'ProductKey',
      name: 'Name',
      dataType: 'DataType',
      ruleDesc: 'RuleDesc',
      created: 'Created',
      utcCreated: 'UtcCreated',
      modified: 'Modified',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      select: 'string',
      topic: 'string',
      shortTopic: 'string',
      where: 'string',
      status: 'string',
      createUserId: 'number',
      productKey: 'string',
      name: 'string',
      dataType: 'string',
      ruleDesc: 'string',
      created: 'string',
      utcCreated: 'string',
      modified: 'string',
      utcModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponseBodyData extends $tea.Model {
  ruleInfo?: ListRuleResponseBodyDataRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': ListRuleResponseBodyDataRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponseBodyRuleActionListRuleActionInfo extends $tea.Model {
  id?: number;
  ruleId?: number;
  type?: string;
  configuration?: string;
  errorActionFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ruleId: 'RuleId',
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleId: 'number',
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponseBodyRuleActionList extends $tea.Model {
  ruleActionInfo?: ListRuleActionsResponseBodyRuleActionListRuleActionInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleActionInfo: 'RuleActionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionInfo: { 'type': 'array', 'itemType': ListRuleActionsResponseBodyRuleActionListRuleActionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyDataData extends $tea.Model {
  jobId?: string;
  jobName?: string;
  taskId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  progress?: string;
  utcQueueTime?: string;
  utcModified?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'string',
      utcQueueTime: 'string',
      utcModified: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyData extends $tea.Model {
  data?: ListTaskResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTaskResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponseBodyDataData extends $tea.Model {
  jobId?: string;
  jobName?: string;
  taskId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  progress?: number;
  utcQueueTime?: string;
  utcModified?: string;
  statusDetail?: string;
  status?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      statusDetail: 'StatusDetail',
      status: 'Status',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'number',
      utcQueueTime: 'string',
      utcModified: 'string',
      statusDetail: 'string',
      status: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponseBodyData extends $tea.Model {
  data?: ListTaskByPageResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTaskByPageResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponseBodyDataModelVersions extends $tea.Model {
  modelVersion?: string;
  description?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      modelVersion: 'ModelVersion',
      description: 'Description',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelVersion: 'string',
      description: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponseBodyData extends $tea.Model {
  modelVersions?: ListThingModelVersionResponseBodyDataModelVersions[];
  static names(): { [key: string]: string } {
    return {
      modelVersions: 'ModelVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelVersions: { 'type': 'array', 'itemType': ListThingModelVersionResponseBodyDataModelVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesResponseBodyData extends $tea.Model {
  categoryKey?: string;
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryKey: 'CategoryKey',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryKey: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoResponseBodyData extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubRequestUserProp extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListRequestTagList extends $tea.Model {
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponseBodyDataData extends $tea.Model {
  productName?: string;
  productKey?: string;
  deviceName?: string;
  nodeType?: number;
  status?: string;
  activeTime?: string;
  lastOnlineTime?: string;
  createTime?: string;
  childDeviceCount?: number;
  utcActiveTime?: string;
  utcLastOnlineTime?: string;
  utcCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nodeType: 'NodeType',
      status: 'Status',
      activeTime: 'ActiveTime',
      lastOnlineTime: 'LastOnlineTime',
      createTime: 'CreateTime',
      childDeviceCount: 'ChildDeviceCount',
      utcActiveTime: 'UtcActiveTime',
      utcLastOnlineTime: 'UtcLastOnlineTime',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      nodeType: 'number',
      status: 'string',
      activeTime: 'string',
      lastOnlineTime: 'string',
      createTime: 'string',
      childDeviceCount: 'number',
      utcActiveTime: 'string',
      utcLastOnlineTime: 'string',
      utcCreateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponseBodyData extends $tea.Model {
  data?: QueryAppDeviceListResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryAppDeviceListResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseBodyDataValidList extends $tea.Model {
  name?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseBodyDataInvalidList extends $tea.Model {
  name?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseBodyData extends $tea.Model {
  status?: string;
  validList?: QueryBatchRegisterDeviceStatusResponseBodyDataValidList;
  invalidList?: QueryBatchRegisterDeviceStatusResponseBodyDataInvalidList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      validList: 'ValidList',
      invalidList: 'InvalidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      validList: QueryBatchRegisterDeviceStatusResponseBodyDataValidList,
      invalidList: QueryBatchRegisterDeviceStatusResponseBodyDataInvalidList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClientIdsResponseBodyDataDynamicRegClientIds extends $tea.Model {
  clientId?: string;
  createTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClientIdsResponseBodyData extends $tea.Model {
  iotId?: string;
  dynamicRegClientIds?: QueryClientIdsResponseBodyDataDynamicRegClientIds[];
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      dynamicRegClientIds: 'DynamicRegClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      dynamicRegClientIds: { 'type': 'array', 'itemType': QueryClientIdsResponseBodyDataDynamicRegClientIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdResponseBodyData extends $tea.Model {
  groupId?: string;
  groupName?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponseBodyDataConsumerGroupDTO extends $tea.Model {
  groupId?: string;
  groupName?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponseBodyData extends $tea.Model {
  consumerGroupDTO?: QueryConsumerGroupListResponseBodyDataConsumerGroupDTO[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupDTO: 'ConsumerGroupDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupDTO: { 'type': 'array', 'itemType': QueryConsumerGroupListResponseBodyDataConsumerGroupDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponseBodyClientConnectionStatusListConsumerGroupClientConnectionInfo extends $tea.Model {
  clientId?: string;
  clientIpPort?: string;
  onlineTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientIpPort: 'ClientIpPort',
      onlineTime: 'OnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientIpPort: 'string',
      onlineTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponseBodyClientConnectionStatusList extends $tea.Model {
  consumerGroupClientConnectionInfo?: QueryConsumerGroupStatusResponseBodyClientConnectionStatusListConsumerGroupClientConnectionInfo[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupClientConnectionInfo: 'ConsumerGroupClientConnectionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupClientConnectionInfo: { 'type': 'array', 'itemType': QueryConsumerGroupStatusResponseBodyClientConnectionStatusListConsumerGroupClientConnectionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponseBodyDataLogList extends $tea.Model {
  code?: string;
  message?: string;
  pkDn?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pkDn: 'PkDn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pkDn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  logList?: QueryDetailSceneRuleLogResponseBodyDataLogList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      logList: { 'type': 'array', 'itemType': QueryDetailSceneRuleLogResponseBodyDataLogList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponseBodyDataDeviceInfo extends $tea.Model {
  deviceId?: string;
  deviceSecret?: string;
  productKey?: string;
  deviceStatus?: string;
  deviceName?: string;
  deviceType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  utcCreate?: string;
  utcModified?: string;
  iotId?: string;
  nickname?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceSecret: 'DeviceSecret',
      productKey: 'ProductKey',
      deviceStatus: 'DeviceStatus',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      iotId: 'IotId',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceSecret: 'string',
      productKey: 'string',
      deviceStatus: 'string',
      deviceName: 'string',
      deviceType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      iotId: 'string',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponseBodyData extends $tea.Model {
  deviceInfo?: QueryDeviceResponseBodyDataDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': QueryDeviceResponseBodyDataDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseBodyDataGroups extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseBodyDataTags extends $tea.Model {
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseBodyDataOTAModules extends $tea.Model {
  moduleName?: string;
  firmwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      firmwareVersion: 'FirmwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      firmwareVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseBodyData extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  nickname?: string;
  status?: string;
  activeTime?: string;
  iotId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groups?: QueryDeviceBySQLResponseBodyDataGroups[];
  tags?: QueryDeviceBySQLResponseBodyDataTags[];
  OTAModules?: QueryDeviceBySQLResponseBodyDataOTAModules[];
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nickname: 'Nickname',
      status: 'Status',
      activeTime: 'ActiveTime',
      iotId: 'IotId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groups: 'Groups',
      tags: 'Tags',
      OTAModules: 'OTAModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      nickname: 'string',
      status: 'string',
      activeTime: 'string',
      iotId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groups: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseBodyDataGroups },
      tags: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseBodyDataTags },
      OTAModules: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseBodyDataOTAModules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponseBodyDataSimpleDeviceInfo extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  status?: string;
  iotId?: string;
  nickname?: string;
  gmtCreate?: string;
  gmtModified?: string;
  utcCreate?: string;
  utcModified?: string;
  deviceSecret?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      status: 'Status',
      iotId: 'IotId',
      nickname: 'Nickname',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      deviceSecret: 'DeviceSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      status: 'string',
      iotId: 'string',
      nickname: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      deviceSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponseBodyData extends $tea.Model {
  simpleDeviceInfo?: QueryDeviceByStatusResponseBodyDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceByStatusResponseBodyDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsRequestTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponseBodyDataSimpleDeviceInfo extends $tea.Model {
  productName?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponseBodyData extends $tea.Model {
  simpleDeviceInfo?: QueryDeviceByTagsResponseBodyDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceByTagsResponseBodyDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertResponseBodyDeviceCertInfo extends $tea.Model {
  status?: number;
  certificate?: string;
  privateKey?: string;
  certSN?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
      certSN: 'CertSN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      certificate: 'string',
      privateKey: 'string',
      certSN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseBodyDataListDesiredPropertyInfo extends $tea.Model {
  unit?: string;
  identifier?: string;
  dataType?: string;
  time?: string;
  value?: string;
  name?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      identifier: 'Identifier',
      dataType: 'DataType',
      time: 'Time',
      value: 'Value',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      identifier: 'string',
      dataType: 'string',
      time: 'string',
      value: 'string',
      name: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseBodyDataList extends $tea.Model {
  desiredPropertyInfo?: QueryDeviceDesiredPropertyResponseBodyDataListDesiredPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      desiredPropertyInfo: 'DesiredPropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredPropertyInfo: { 'type': 'array', 'itemType': QueryDeviceDesiredPropertyResponseBodyDataListDesiredPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseBodyData extends $tea.Model {
  list?: QueryDeviceDesiredPropertyResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QueryDeviceDesiredPropertyResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponseBodyData extends $tea.Model {
  iotId?: string;
  productKey?: string;
  productName?: string;
  deviceName?: string;
  deviceSecret?: string;
  firmwareVersion?: string;
  gmtCreate?: string;
  utcCreate?: string;
  gmtActive?: string;
  utcActive?: string;
  gmtOnline?: string;
  utcOnline?: string;
  status?: string;
  ipAddress?: string;
  nodeType?: number;
  region?: string;
  owner?: boolean;
  nickname?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      firmwareVersion: 'FirmwareVersion',
      gmtCreate: 'GmtCreate',
      utcCreate: 'UtcCreate',
      gmtActive: 'GmtActive',
      utcActive: 'UtcActive',
      gmtOnline: 'GmtOnline',
      utcOnline: 'UtcOnline',
      status: 'Status',
      ipAddress: 'IpAddress',
      nodeType: 'NodeType',
      region: 'Region',
      owner: 'Owner',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      productName: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      firmwareVersion: 'string',
      gmtCreate: 'string',
      utcCreate: 'string',
      gmtActive: 'string',
      utcActive: 'string',
      gmtOnline: 'string',
      utcOnline: 'string',
      status: 'string',
      ipAddress: 'string',
      nodeType: 'number',
      region: 'string',
      owner: 'boolean',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseBodyDataListEventInfo extends $tea.Model {
  time?: string;
  identifier?: string;
  name?: string;
  eventType?: string;
  outputData?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      eventType: 'EventType',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      eventType: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseBodyDataList extends $tea.Model {
  eventInfo?: QueryDeviceEventDataResponseBodyDataListEventInfo[];
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': QueryDeviceEventDataResponseBodyDataListEventInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseBodyData extends $tea.Model {
  nextTime?: number;
  nextValid?: boolean;
  list?: QueryDeviceEventDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextTime: 'NextTime',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextTime: 'number',
      nextValid: 'boolean',
      list: QueryDeviceEventDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileResponseBodyData extends $tea.Model {
  fileId?: string;
  name?: string;
  size?: string;
  utcCreatedOn?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      name: 'Name',
      size: 'Size',
      utcCreatedOn: 'UtcCreatedOn',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      name: 'string',
      size: 'string',
      utcCreatedOn: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponseBodyDataFileSummary extends $tea.Model {
  fileId?: string;
  name?: string;
  size?: string;
  utcCreatedOn?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      name: 'Name',
      size: 'Size',
      utcCreatedOn: 'UtcCreatedOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      name: 'string',
      size: 'string',
      utcCreatedOn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponseBodyData extends $tea.Model {
  fileSummary?: QueryDeviceFileListResponseBodyDataFileSummary[];
  static names(): { [key: string]: string } {
    return {
      fileSummary: 'FileSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSummary: { 'type': 'array', 'itemType': QueryDeviceFileListResponseBodyDataFileSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponseBodyGroupInfosGroupInfo extends $tea.Model {
  groupId?: string;
  groupName?: string;
  utcCreate?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      utcCreate: 'UtcCreate',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      utcCreate: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponseBodyGroupInfos extends $tea.Model {
  groupInfo?: QueryDeviceGroupByDeviceResponseBodyGroupInfosGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QueryDeviceGroupByDeviceResponseBodyGroupInfosGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsRequestTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponseBodyDataDeviceGroup extends $tea.Model {
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponseBodyData extends $tea.Model {
  deviceGroup?: QueryDeviceGroupByTagsResponseBodyDataDeviceGroup[];
  static names(): { [key: string]: string } {
    return {
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroup: { 'type': 'array', 'itemType': QueryDeviceGroupByTagsResponseBodyDataDeviceGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoResponseBodyData extends $tea.Model {
  groupId?: string;
  utcCreate?: string;
  groupName?: string;
  groupDesc?: string;
  deviceCount?: number;
  deviceActive?: number;
  deviceOnline?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      utcCreate: 'UtcCreate',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
      deviceCount: 'DeviceCount',
      deviceActive: 'DeviceActive',
      deviceOnline: 'DeviceOnline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      utcCreate: 'string',
      groupName: 'string',
      groupDesc: 'string',
      deviceCount: 'number',
      deviceActive: 'number',
      deviceOnline: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponseBodyDataGroupInfo extends $tea.Model {
  groupId?: string;
  utcCreate?: string;
  groupName?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      utcCreate: 'UtcCreate',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      utcCreate: 'string',
      groupName: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponseBodyData extends $tea.Model {
  groupInfo?: QueryDeviceGroupListResponseBodyDataGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QueryDeviceGroupListResponseBodyDataGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponseBodyDataGroupTagInfo extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponseBodyData extends $tea.Model {
  groupTagInfo?: QueryDeviceGroupTagListResponseBodyDataGroupTagInfo[];
  static names(): { [key: string]: string } {
    return {
      groupTagInfo: 'GroupTagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupTagInfo: { 'type': 'array', 'itemType': QueryDeviceGroupTagListResponseBodyDataGroupTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponseBodyDataSimpleDeviceInfo extends $tea.Model {
  productName?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponseBodyData extends $tea.Model {
  simpleDeviceInfo?: QueryDeviceListByDeviceGroupResponseBodyDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceListByDeviceGroupResponseBodyDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseBodyDataListEventInfo extends $tea.Model {
  time?: string;
  identifier?: string;
  name?: string;
  eventType?: string;
  outputData?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      eventType: 'EventType',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      eventType: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseBodyDataList extends $tea.Model {
  eventInfo?: QueryDeviceOriginalEventDataResponseBodyDataListEventInfo[];
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalEventDataResponseBodyDataListEventInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseBodyData extends $tea.Model {
  nextPageToken?: string;
  nextValid?: boolean;
  list?: QueryDeviceOriginalEventDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nextValid: 'boolean',
      list: QueryDeviceOriginalEventDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseBodyDataListPropertyInfo extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseBodyDataList extends $tea.Model {
  propertyInfo?: QueryDeviceOriginalPropertyDataResponseBodyDataListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalPropertyDataResponseBodyDataListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseBodyData extends $tea.Model {
  nextValid?: boolean;
  nextPageToken?: string;
  list?: QueryDeviceOriginalPropertyDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextPageToken: 'nextPageToken',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextPageToken: 'string',
      list: QueryDeviceOriginalPropertyDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseBodyDataListPropertyStatusDataInfo extends $tea.Model {
  identifier?: string;
  value?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      value: 'Value',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      value: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseBodyDataList extends $tea.Model {
  propertyStatusDataInfo?: QueryDeviceOriginalPropertyStatusResponseBodyDataListPropertyStatusDataInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyStatusDataInfo: 'PropertyStatusDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyStatusDataInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalPropertyStatusResponseBodyDataListPropertyStatusDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseBodyData extends $tea.Model {
  nextValid?: boolean;
  nextPageToken?: string;
  list?: QueryDeviceOriginalPropertyStatusResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextPageToken: 'NextPageToken',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextPageToken: 'string',
      list: QueryDeviceOriginalPropertyStatusResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseBodyDataListServiceInfo extends $tea.Model {
  time?: string;
  identifier?: string;
  name?: string;
  inputData?: string;
  outputData?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      inputData: 'InputData',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      inputData: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseBodyDataList extends $tea.Model {
  serviceInfo?: QueryDeviceOriginalServiceDataResponseBodyDataListServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalServiceDataResponseBodyDataListServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseBodyData extends $tea.Model {
  nextPageToken?: string;
  nextValid?: boolean;
  list?: QueryDeviceOriginalServiceDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nextValid: 'boolean',
      list: QueryDeviceOriginalServiceDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoListPropertyInfo extends $tea.Model {
  time?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoList extends $tea.Model {
  propertyInfo?: QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfo extends $tea.Model {
  identifier?: string;
  list?: QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoList;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      list: QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponseBodyPropertyDataInfos extends $tea.Model {
  propertyDataInfo?: QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyDataInfo: 'PropertyDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyDataInfo: { 'type': 'array', 'itemType': QueryDevicePropertiesDataResponseBodyPropertyDataInfosPropertyDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseBodyDataListPropertyInfo extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseBodyDataList extends $tea.Model {
  propertyInfo?: QueryDevicePropertyDataResponseBodyDataListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDevicePropertyDataResponseBodyDataListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseBodyData extends $tea.Model {
  nextValid?: boolean;
  nextTime?: number;
  list?: QueryDevicePropertyDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextTime: 'NextTime',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextTime: 'number',
      list: QueryDevicePropertyDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseBodyDataListPropertyStatusInfo extends $tea.Model {
  unit?: string;
  identifier?: string;
  dataType?: string;
  time?: string;
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      identifier: 'Identifier',
      dataType: 'DataType',
      time: 'Time',
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      identifier: 'string',
      dataType: 'string',
      time: 'string',
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseBodyDataList extends $tea.Model {
  propertyStatusInfo?: QueryDevicePropertyStatusResponseBodyDataListPropertyStatusInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyStatusInfo: 'PropertyStatusInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyStatusInfo: { 'type': 'array', 'itemType': QueryDevicePropertyStatusResponseBodyDataListPropertyStatusInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseBodyData extends $tea.Model {
  list?: QueryDevicePropertyStatusResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QueryDevicePropertyStatusResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseBodyDataListServiceInfo extends $tea.Model {
  time?: string;
  identifier?: string;
  name?: string;
  inputData?: string;
  outputData?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      inputData: 'InputData',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      inputData: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseBodyDataList extends $tea.Model {
  serviceInfo?: QueryDeviceServiceDataResponseBodyDataListServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: { 'type': 'array', 'itemType': QueryDeviceServiceDataResponseBodyDataListServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseBodyData extends $tea.Model {
  nextTime?: number;
  nextValid?: boolean;
  list?: QueryDeviceServiceDataResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      nextTime: 'NextTime',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextTime: 'number',
      nextValid: 'boolean',
      list: QueryDeviceServiceDataResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsResponseBodyData extends $tea.Model {
  deviceCount?: number;
  onlineCount?: number;
  activeCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCount: 'deviceCount',
      onlineCount: 'onlineCount',
      activeCount: 'activeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCount: 'number',
      onlineCount: 'number',
      activeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponseBodyDataDriverList extends $tea.Model {
  driverId?: string;
  driverName?: string;
  driverProtocol?: string;
  runtime?: string;
  cpuArch?: string;
  type?: number;
  isBuiltIn?: boolean;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
      runtime: 'Runtime',
      cpuArch: 'CpuArch',
      type: 'Type',
      isBuiltIn: 'IsBuiltIn',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverName: 'string',
      driverProtocol: 'string',
      runtime: 'string',
      cpuArch: 'string',
      type: 'number',
      isBuiltIn: 'boolean',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  driverList?: QueryEdgeDriverResponseBodyDataDriverList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverList: 'DriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverList: { 'type': 'array', 'itemType': QueryEdgeDriverResponseBodyDataDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponseBodyDataDriverVersionList extends $tea.Model {
  driverId?: string;
  driverVersion?: string;
  versionState?: string;
  edgeVersion?: string;
  description?: string;
  sourceConfig?: string;
  driverConfig?: string;
  containerConfig?: string;
  configCheckRule?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      versionState: 'VersionState',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverVersion: 'string',
      versionState: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  driverVersionList?: QueryEdgeDriverVersionResponseBodyDataDriverVersionList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverVersionList: 'DriverVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverVersionList: { 'type': 'array', 'itemType': QueryEdgeDriverVersionResponseBodyDataDriverVersionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponseBodyDataInstanceList extends $tea.Model {
  instanceId?: string;
  name?: string;
  tags?: string;
  type?: number;
  gmtCreate?: string;
  gmtModified?: string;
  roleArn?: string;
  roleName?: string;
  roleAttachTime?: string;
  spec?: number;
  bizEnable?: boolean;
  latestDeploymentStatus?: number;
  latestDeploymentType?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  roleAttachTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      tags: 'Tags',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
      roleAttachTime: 'RoleAttachTime',
      spec: 'Spec',
      bizEnable: 'BizEnable',
      latestDeploymentStatus: 'LatestDeploymentStatus',
      latestDeploymentType: 'LatestDeploymentType',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      roleAttachTimestamp: 'RoleAttachTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      tags: 'string',
      type: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      roleArn: 'string',
      roleName: 'string',
      roleAttachTime: 'string',
      spec: 'number',
      bizEnable: 'boolean',
      latestDeploymentStatus: 'number',
      latestDeploymentType: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      roleAttachTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  instanceList?: QueryEdgeInstanceResponseBodyDataInstanceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      instanceList: { 'type': 'array', 'itemType': QueryEdgeInstanceResponseBodyDataInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigListConfig extends $tea.Model {
  configId?: string;
  format?: string;
  content?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigList extends $tea.Model {
  config?: QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBodyDataChannelListChannel extends $tea.Model {
  channelId?: string;
  channelName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  configList?: QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigList;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      configList: QueryEdgeInstanceChannelResponseBodyDataChannelListChannelConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBodyDataChannelList extends $tea.Model {
  channel?: QueryEdgeInstanceChannelResponseBodyDataChannelListChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': QueryEdgeInstanceChannelResponseBodyDataChannelListChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  channelList?: QueryEdgeInstanceChannelResponseBodyDataChannelList;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      channelList: QueryEdgeInstanceChannelResponseBodyDataChannelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponseBodyDataDeviceList extends $tea.Model {
  iotId?: string;
  productKey?: string;
  deviceName?: string;
  driverId?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  deviceList?: QueryEdgeInstanceDeviceResponseBodyDataDeviceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deviceList: { 'type': 'array', 'itemType': QueryEdgeInstanceDeviceResponseBodyDataDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponseBodyDataDeviceList extends $tea.Model {
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  deviceList?: QueryEdgeInstanceDeviceByDriverResponseBodyDataDeviceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deviceList: { 'type': 'array', 'itemType': QueryEdgeInstanceDeviceByDriverResponseBodyDataDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponseBodyDataDriverList extends $tea.Model {
  driverId?: string;
  driverVersion?: string;
  orderId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      orderId: 'OrderId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverVersion: 'string',
      orderId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  driverList?: QueryEdgeInstanceDriverResponseBodyDataDriverList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverList: 'DriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverList: { 'type': 'array', 'itemType': QueryEdgeInstanceDriverResponseBodyDataDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayResponseBodyGatewayList extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  edgeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      edgeVersion: 'EdgeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      edgeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponseBodyDataDeploymentList extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  gmtCompleted?: string;
  deploymentId?: string;
  description?: string;
  status?: number;
  type?: string;
  gmtCreateTimestamp?: number;
  gmtModifiedTimestamp?: number;
  gmtCompletedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCompleted: 'GmtCompleted',
      deploymentId: 'DeploymentId',
      description: 'Description',
      status: 'Status',
      type: 'Type',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCompleted: 'string',
      deploymentId: 'string',
      description: 'string',
      status: 'number',
      type: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      gmtCompletedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  deploymentList?: QueryEdgeInstanceHistoricDeploymentResponseBodyDataDeploymentList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deploymentList: 'DeploymentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deploymentList: { 'type': 'array', 'itemType': QueryEdgeInstanceHistoricDeploymentResponseBodyDataDeploymentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponseBodyDataRuleList extends $tea.Model {
  ruleId?: string;
  ruleName?: string;
  gmtCreate?: number;
  status?: number;
  isExisted?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      gmtCreate: 'GmtCreate',
      status: 'Status',
      isExisted: 'IsExisted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
      gmtCreate: 'number',
      status: 'number',
      isExisted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  ruleList?: QueryEdgeInstanceSceneRuleResponseBodyDataRuleList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      ruleList: { 'type': 'array', 'itemType': QueryEdgeInstanceSceneRuleResponseBodyDataRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataRolloutConfig extends $tea.Model {
  maximumPerMinute?: number;
  static names(): { [key: string]: string } {
    return {
      maximumPerMinute: 'MaximumPerMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumPerMinute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataTimeoutConfig extends $tea.Model {
  inProgressTimeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      inProgressTimeoutInMinutes: 'InProgressTimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProgressTimeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataJobFile extends $tea.Model {
  fileUrl?: string;
  signMethod?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      signMethod: 'SignMethod',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      signMethod: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataTargetConfigTargetDevicesTargetDevices extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataTargetConfigTargetDevices extends $tea.Model {
  targetDevices?: QueryJobResponseBodyDataTargetConfigTargetDevicesTargetDevices[];
  static names(): { [key: string]: string } {
    return {
      targetDevices: 'targetDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetDevices: { 'type': 'array', 'itemType': QueryJobResponseBodyDataTargetConfigTargetDevicesTargetDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyDataTargetConfig extends $tea.Model {
  targetGroup?: string;
  targetProduct?: string;
  targetType?: string;
  targetDevices?: QueryJobResponseBodyDataTargetConfigTargetDevices;
  static names(): { [key: string]: string } {
    return {
      targetGroup: 'TargetGroup',
      targetProduct: 'TargetProduct',
      targetType: 'TargetType',
      targetDevices: 'TargetDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetGroup: 'string',
      targetProduct: 'string',
      targetType: 'string',
      targetDevices: QueryJobResponseBodyDataTargetConfigTargetDevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseBodyData extends $tea.Model {
  jobId?: string;
  jobName?: string;
  utcCreate?: string;
  status?: string;
  description?: string;
  type?: string;
  jobDocument?: string;
  utcModified?: string;
  rolloutConfig?: QueryJobResponseBodyDataRolloutConfig;
  timeoutConfig?: QueryJobResponseBodyDataTimeoutConfig;
  jobFile?: QueryJobResponseBodyDataJobFile;
  targetConfig?: QueryJobResponseBodyDataTargetConfig;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      utcCreate: 'UtcCreate',
      status: 'Status',
      description: 'Description',
      type: 'Type',
      jobDocument: 'JobDocument',
      utcModified: 'UtcModified',
      rolloutConfig: 'RolloutConfig',
      timeoutConfig: 'TimeoutConfig',
      jobFile: 'JobFile',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      utcCreate: 'string',
      status: 'string',
      description: 'string',
      type: 'string',
      jobDocument: 'string',
      utcModified: 'string',
      rolloutConfig: QueryJobResponseBodyDataRolloutConfig,
      timeoutConfig: QueryJobResponseBodyDataTimeoutConfig,
      jobFile: QueryJobResponseBodyDataJobFile,
      targetConfig: QueryJobResponseBodyDataTargetConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsResponseBodyData extends $tea.Model {
  total?: number;
  queued?: number;
  sent?: number;
  inProgress?: number;
  succeeded?: number;
  failed?: number;
  rejected?: number;
  timeOut?: number;
  cancelled?: number;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      queued: 'Queued',
      sent: 'Sent',
      inProgress: 'InProgress',
      succeeded: 'Succeeded',
      failed: 'Failed',
      rejected: 'Rejected',
      timeOut: 'TimeOut',
      cancelled: 'Cancelled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      queued: 'number',
      sent: 'number',
      inProgress: 'number',
      succeeded: 'number',
      failed: 'number',
      rejected: 'number',
      timeOut: 'number',
      cancelled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponseBodyJoinPermissionsJoinPermission extends $tea.Model {
  joinPermissionId?: string;
  joinPermissionName?: string;
  joinPermissionType?: string;
  ownerAliyunPk?: string;
  enabled?: boolean;
  classMode?: string;
  static names(): { [key: string]: string } {
    return {
      joinPermissionId: 'JoinPermissionId',
      joinPermissionName: 'JoinPermissionName',
      joinPermissionType: 'JoinPermissionType',
      ownerAliyunPk: 'OwnerAliyunPk',
      enabled: 'Enabled',
      classMode: 'ClassMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinPermissionId: 'string',
      joinPermissionName: 'string',
      joinPermissionType: 'string',
      ownerAliyunPk: 'string',
      enabled: 'boolean',
      classMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponseBodyJoinPermissions extends $tea.Model {
  joinPermission?: QueryLoRaJoinPermissionsResponseBodyJoinPermissionsJoinPermission[];
  static names(): { [key: string]: string } {
    return {
      joinPermission: 'JoinPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinPermission: { 'type': 'array', 'itemType': QueryLoRaJoinPermissionsResponseBodyJoinPermissionsJoinPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareResponseBodyFirmwareInfo extends $tea.Model {
  firmwareName?: string;
  firmwareId?: string;
  srcVersion?: string;
  destVersion?: string;
  utcCreate?: string;
  utcModified?: string;
  status?: number;
  firmwareDesc?: string;
  firmwareSign?: string;
  firmwareSize?: number;
  firmwareUrl?: string;
  productKey?: string;
  signMethod?: string;
  productName?: string;
  type?: number;
  verifyProgress?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareName: 'FirmwareName',
      firmwareId: 'FirmwareId',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      firmwareDesc: 'FirmwareDesc',
      firmwareSign: 'FirmwareSign',
      firmwareSize: 'FirmwareSize',
      firmwareUrl: 'FirmwareUrl',
      productKey: 'ProductKey',
      signMethod: 'SignMethod',
      productName: 'ProductName',
      type: 'Type',
      verifyProgress: 'VerifyProgress',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareName: 'string',
      firmwareId: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'number',
      firmwareDesc: 'string',
      firmwareSign: 'string',
      firmwareSize: 'number',
      firmwareUrl: 'string',
      productKey: 'string',
      signMethod: 'string',
      productName: 'string',
      type: 'number',
      verifyProgress: 'number',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseBodyDataSrcVersions extends $tea.Model {
  srcVersion?: string[];
  static names(): { [key: string]: string } {
    return {
      srcVersion: 'SrcVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcVersion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseBodyDataTagsOtaTagDTO extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseBodyDataTags extends $tea.Model {
  otaTagDTO?: QueryOTAJobResponseBodyDataTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': QueryOTAJobResponseBodyDataTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseBodyData extends $tea.Model {
  jobId?: string;
  utcCreate?: string;
  utcModified?: string;
  productKey?: string;
  firmwareId?: string;
  utcStartTime?: string;
  utcEndTime?: string;
  jobStatus?: string;
  jobType?: string;
  jobDesc?: string;
  name?: string;
  utcScheduleTime?: string;
  retryInterval?: number;
  retryCount?: number;
  timeoutInMinutes?: number;
  targetSelection?: string;
  selectionType?: string;
  grayPercent?: string;
  maximumPerMinute?: number;
  destVersion?: string;
  utcScheduleFinishTime?: string;
  overwriteMode?: number;
  dynamicMode?: number;
  srcVersions?: QueryOTAJobResponseBodyDataSrcVersions;
  tags?: QueryOTAJobResponseBodyDataTags;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      jobDesc: 'JobDesc',
      name: 'Name',
      utcScheduleTime: 'UtcScheduleTime',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      grayPercent: 'GrayPercent',
      maximumPerMinute: 'MaximumPerMinute',
      destVersion: 'DestVersion',
      utcScheduleFinishTime: 'UtcScheduleFinishTime',
      overwriteMode: 'OverwriteMode',
      dynamicMode: 'DynamicMode',
      srcVersions: 'SrcVersions',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      jobDesc: 'string',
      name: 'string',
      utcScheduleTime: 'string',
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      targetSelection: 'string',
      selectionType: 'string',
      grayPercent: 'string',
      maximumPerMinute: 'number',
      destVersion: 'string',
      utcScheduleFinishTime: 'string',
      overwriteMode: 'number',
      dynamicMode: 'number',
      srcVersions: QueryOTAJobResponseBodyDataSrcVersions,
      tags: QueryOTAJobResponseBodyDataTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponseBodyApplyDeviceListApplyDeviceInfo extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  deviceSecret?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponseBodyApplyDeviceList extends $tea.Model {
  applyDeviceInfo?: QueryPageByApplyIdResponseBodyApplyDeviceListApplyDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      applyDeviceInfo: 'ApplyDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDeviceInfo: { 'type': 'array', 'itemType': QueryPageByApplyIdResponseBodyApplyDeviceListApplyDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  dataFormat?: number;
  description?: string;
  deviceCount?: number;
  nodeType?: number;
  productKey?: string;
  productName?: string;
  productSecret?: string;
  categoryName?: string;
  categoryKey?: string;
  aliyunCommodityCode?: string;
  id2?: boolean;
  protocolType?: string;
  productStatus?: string;
  owner?: boolean;
  netType?: number;
  authType?: string;
  validateType?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      dataFormat: 'DataFormat',
      description: 'Description',
      deviceCount: 'DeviceCount',
      nodeType: 'NodeType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      productSecret: 'ProductSecret',
      categoryName: 'CategoryName',
      categoryKey: 'CategoryKey',
      aliyunCommodityCode: 'AliyunCommodityCode',
      id2: 'Id2',
      protocolType: 'ProtocolType',
      productStatus: 'ProductStatus',
      owner: 'Owner',
      netType: 'NetType',
      authType: 'AuthType',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      dataFormat: 'number',
      description: 'string',
      deviceCount: 'number',
      nodeType: 'number',
      productKey: 'string',
      productName: 'string',
      productSecret: 'string',
      categoryName: 'string',
      categoryKey: 'string',
      aliyunCommodityCode: 'string',
      id2: 'boolean',
      protocolType: 'string',
      productStatus: 'string',
      owner: 'boolean',
      netType: 'number',
      authType: 'string',
      validateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoResponseBodyProductCertInfo extends $tea.Model {
  issueModel?: number;
  static names(): { [key: string]: string } {
    return {
      issueModel: 'IssueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueModel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataListProductInfo extends $tea.Model {
  gmtCreate?: number;
  dataFormat?: number;
  description?: string;
  deviceCount?: number;
  nodeType?: number;
  productKey?: string;
  productName?: string;
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      dataFormat: 'DataFormat',
      description: 'Description',
      deviceCount: 'DeviceCount',
      nodeType: 'NodeType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      dataFormat: 'number',
      description: 'string',
      deviceCount: 'number',
      nodeType: 'number',
      productKey: 'string',
      productName: 'string',
      authType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataList extends $tea.Model {
  productInfo?: QueryProductListResponseBodyDataListProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': QueryProductListResponseBodyDataListProductInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  list?: QueryProductListResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      list: QueryProductListResponseBodyDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponseBodyDataProductTopicInfo extends $tea.Model {
  productKey?: string;
  topicShortName?: string;
  operation?: string;
  desc?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      topicShortName: 'TopicShortName',
      operation: 'Operation',
      desc: 'Desc',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      topicShortName: 'string',
      operation: 'string',
      desc: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponseBodyData extends $tea.Model {
  productTopicInfo?: QueryProductTopicResponseBodyDataProductTopicInfo[];
  static names(): { [key: string]: string } {
    return {
      productTopicInfo: 'ProductTopicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTopicInfo: { 'type': 'array', 'itemType': QueryProductTopicResponseBodyDataProductTopicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponseBodyDataRuleList extends $tea.Model {
  ruleId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  ruleName?: string;
  ruleDescription?: string;
  ruleStatus?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleName: 'RuleName',
      ruleDescription: 'RuleDescription',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      ruleName: 'string',
      ruleDescription: 'string',
      ruleStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  ruleList?: QuerySceneRuleResponseBodyDataRuleList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      ruleList: { 'type': 'array', 'itemType': QuerySceneRuleResponseBodyDataRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseBodyDataLogListLogInfo extends $tea.Model {
  logTime?: number;
  result?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      logTime: 'LogTime',
      result: 'Result',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTime: 'number',
      result: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseBodyDataLogList extends $tea.Model {
  logInfo?: QuerySummarySceneRuleLogResponseBodyDataLogListLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': QuerySummarySceneRuleLogResponseBodyDataLogListLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseBodyData extends $tea.Model {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  logList?: QuerySummarySceneRuleLogResponseBodyDataLogList;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      logList: QuerySummarySceneRuleLogResponseBodyDataLogList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponseBodyDataGroupInfo extends $tea.Model {
  groupId?: string;
  groupName?: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponseBodyData extends $tea.Model {
  groupInfo?: QuerySuperDeviceGroupResponseBodyDataGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QuerySuperDeviceGroupResponseBodyDataGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyDataData extends $tea.Model {
  jobId?: string;
  jobName?: string;
  taskId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  progress?: string;
  utcQueueTime?: string;
  utcModified?: string;
  statusDetail?: string;
  status?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      statusDetail: 'StatusDetail',
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'string',
      utcQueueTime: 'string',
      utcModified: 'string',
      statusDetail: 'string',
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseBodyData extends $tea.Model {
  data?: QueryTaskResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTaskResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelResponseBodyData extends $tea.Model {
  thingModelJson?: string;
  static names(): { [key: string]: string } {
    return {
      thingModelJson: 'ThingModelJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thingModelJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigResponseBodyData extends $tea.Model {
  configuration?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedResponseBodyData extends $tea.Model {
  configuration?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedResponseBodyData extends $tea.Model {
  thingModelJson?: string;
  static names(): { [key: string]: string } {
    return {
      thingModelJson: 'ThingModelJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thingModelJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableResponseBodySrcTopics extends $tea.Model {
  topic?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableResponseBodyDstTopics extends $tea.Model {
  topic?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBodyData extends $tea.Model {
  iotId?: string;
  productKey?: string;
  deviceName?: string;
  deviceSecret?: string;
  devEui?: string;
  joinEui?: string;
  nickname?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      devEui: 'DevEui',
      joinEui: 'JoinEui',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      devEui: 'string',
      joinEui: 'string',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyResponseBodyData extends $tea.Model {
  messageId?: string;
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyResponseBodyData extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsRequestConfigs extends $tea.Model {
  format?: string;
  content?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCpuResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  timeZone?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      timeZone: 'TimeZone',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      timeZone: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelRequestConfigs extends $tea.Model {
  format?: string;
  content?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsRequestProductTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponseBodyInvalidProductTagsProductTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponseBodyInvalidProductTags extends $tea.Model {
  productTag?: UpdateProductTagsResponseBodyInvalidProductTagsProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': UpdateProductTagsResponseBodyInvalidProductTagsProductTag },
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
    this._endpointMap = {
      'ap-northeast-2-pop': "iot.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-2': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "iot.ap-northeast-1.aliyuncs.com",
      'cn-beijing': "iot.aliyuncs.com",
      'cn-beijing-finance-1': "iot.aliyuncs.com",
      'cn-beijing-finance-pop': "iot.aliyuncs.com",
      'cn-beijing-gov-1': "iot.aliyuncs.com",
      'cn-beijing-nu16-b01': "iot.aliyuncs.com",
      'cn-chengdu': "iot.aliyuncs.com",
      'cn-edge-1': "iot.aliyuncs.com",
      'cn-fujian': "iot.aliyuncs.com",
      'cn-haidian-cm12-c01': "iot.aliyuncs.com",
      'cn-hangzhou-bj-b01': "iot.aliyuncs.com",
      'cn-hangzhou-finance': "iot.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "iot.aliyuncs.com",
      'cn-hangzhou-test-306': "iot.aliyuncs.com",
      'cn-hongkong': "iot.aliyuncs.com",
      'cn-hongkong-finance-pop': "iot.aliyuncs.com",
      'cn-huhehaote': "iot.aliyuncs.com",
      'cn-north-2-gov-1': "iot.aliyuncs.com",
      'cn-qingdao': "iot.aliyuncs.com",
      'cn-qingdao-nebula': "iot.aliyuncs.com",
      'cn-shanghai-et15-b01': "iot.aliyuncs.com",
      'cn-shanghai-et2-b01': "iot.aliyuncs.com",
      'cn-shanghai-finance-1': "iot.aliyuncs.com",
      'cn-shanghai-inner': "iot.aliyuncs.com",
      'cn-shanghai-internal-test-1': "iot.aliyuncs.com",
      'cn-shenzhen': "iot.aliyuncs.com",
      'cn-shenzhen-finance-1': "iot.aliyuncs.com",
      'cn-shenzhen-inner': "iot.aliyuncs.com",
      'cn-shenzhen-st4-d01': "iot.aliyuncs.com",
      'cn-shenzhen-su18-b01': "iot.aliyuncs.com",
      'cn-wuhan': "iot.aliyuncs.com",
      'cn-yushanfang': "iot.aliyuncs.com",
      'cn-zhangbei-na61-b01': "iot.aliyuncs.com",
      'cn-zhangjiakou': "iot.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "iot.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "iot.aliyuncs.com",
      'eu-west-1': "iot.ap-northeast-1.aliyuncs.com",
      'eu-west-1-oxs': "iot.ap-northeast-1.aliyuncs.com",
      'me-east-1': "iot.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "iot.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchAddDeviceGroupRelationsWithOptions(request: BatchAddDeviceGroupRelationsRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddDeviceGroupRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAddDeviceGroupRelationsResponse>(await this.doRPCRequest("BatchAddDeviceGroupRelations", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAddDeviceGroupRelationsResponse({}));
  }

  async batchAddDeviceGroupRelations(request: BatchAddDeviceGroupRelationsRequest): Promise<BatchAddDeviceGroupRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddDeviceGroupRelationsWithOptions(request, runtime);
  }

  async batchAddThingTopoWithOptions(tmpReq: BatchAddThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddThingTopoResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchAddThingTopoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAddThingTopoResponse>(await this.doRPCRequest("BatchAddThingTopo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAddThingTopoResponse({}));
  }

  async batchAddThingTopo(request: BatchAddThingTopoRequest): Promise<BatchAddThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddThingTopoWithOptions(request, runtime);
  }

  async batchBindDeviceToEdgeInstanceWithDriverWithOptions(request: BatchBindDeviceToEdgeInstanceWithDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindDeviceToEdgeInstanceWithDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchBindDeviceToEdgeInstanceWithDriverResponse>(await this.doRPCRequest("BatchBindDeviceToEdgeInstanceWithDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchBindDeviceToEdgeInstanceWithDriverResponse({}));
  }

  async batchBindDeviceToEdgeInstanceWithDriver(request: BatchBindDeviceToEdgeInstanceWithDriverRequest): Promise<BatchBindDeviceToEdgeInstanceWithDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDeviceToEdgeInstanceWithDriverWithOptions(request, runtime);
  }

  async batchCheckDeviceNamesWithOptions(request: BatchCheckDeviceNamesRequest, runtime: $Util.RuntimeOptions): Promise<BatchCheckDeviceNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchCheckDeviceNamesResponse>(await this.doRPCRequest("BatchCheckDeviceNames", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchCheckDeviceNamesResponse({}));
  }

  async batchCheckDeviceNames(request: BatchCheckDeviceNamesRequest): Promise<BatchCheckDeviceNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCheckDeviceNamesWithOptions(request, runtime);
  }

  async batchClearEdgeInstanceDeviceConfigWithOptions(request: BatchClearEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchClearEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchClearEdgeInstanceDeviceConfigResponse>(await this.doRPCRequest("BatchClearEdgeInstanceDeviceConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchClearEdgeInstanceDeviceConfigResponse({}));
  }

  async batchClearEdgeInstanceDeviceConfig(request: BatchClearEdgeInstanceDeviceConfigRequest): Promise<BatchClearEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchClearEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchDeleteDeviceGroupRelationsWithOptions(request: BatchDeleteDeviceGroupRelationsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDeviceGroupRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteDeviceGroupRelationsResponse>(await this.doRPCRequest("BatchDeleteDeviceGroupRelations", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteDeviceGroupRelationsResponse({}));
  }

  async batchDeleteDeviceGroupRelations(request: BatchDeleteDeviceGroupRelationsRequest): Promise<BatchDeleteDeviceGroupRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDeviceGroupRelationsWithOptions(request, runtime);
  }

  async batchDeleteEdgeInstanceChannelWithOptions(request: BatchDeleteEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteEdgeInstanceChannelResponse>(await this.doRPCRequest("BatchDeleteEdgeInstanceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteEdgeInstanceChannelResponse({}));
  }

  async batchDeleteEdgeInstanceChannel(request: BatchDeleteEdgeInstanceChannelRequest): Promise<BatchDeleteEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchGetDeviceBindStatusWithOptions(request: BatchGetDeviceBindStatusRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetDeviceBindStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetDeviceBindStatusResponse>(await this.doRPCRequest("BatchGetDeviceBindStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetDeviceBindStatusResponse({}));
  }

  async batchGetDeviceBindStatus(request: BatchGetDeviceBindStatusRequest): Promise<BatchGetDeviceBindStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetDeviceBindStatusWithOptions(request, runtime);
  }

  async batchGetDeviceStateWithOptions(request: BatchGetDeviceStateRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetDeviceStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetDeviceStateResponse>(await this.doRPCRequest("BatchGetDeviceState", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetDeviceStateResponse({}));
  }

  async batchGetDeviceState(request: BatchGetDeviceStateRequest): Promise<BatchGetDeviceStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetDeviceStateWithOptions(request, runtime);
  }

  async batchGetEdgeDriverWithOptions(request: BatchGetEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeDriverResponse>(await this.doRPCRequest("BatchGetEdgeDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeDriverResponse({}));
  }

  async batchGetEdgeDriver(request: BatchGetEdgeDriverRequest): Promise<BatchGetEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeDriverWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceChannelWithOptions(request: BatchGetEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeInstanceChannelResponse>(await this.doRPCRequest("BatchGetEdgeInstanceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeInstanceChannelResponse({}));
  }

  async batchGetEdgeInstanceChannel(request: BatchGetEdgeInstanceChannelRequest): Promise<BatchGetEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceChannelWithOptions(request: BatchGetEdgeInstanceDeviceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeInstanceDeviceChannelResponse>(await this.doRPCRequest("BatchGetEdgeInstanceDeviceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeInstanceDeviceChannelResponse({}));
  }

  async batchGetEdgeInstanceDeviceChannel(request: BatchGetEdgeInstanceDeviceChannelRequest): Promise<BatchGetEdgeInstanceDeviceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceChannelWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceConfigWithOptions(request: BatchGetEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeInstanceDeviceConfigResponse>(await this.doRPCRequest("BatchGetEdgeInstanceDeviceConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeInstanceDeviceConfigResponse({}));
  }

  async batchGetEdgeInstanceDeviceConfig(request: BatchGetEdgeInstanceDeviceConfigRequest): Promise<BatchGetEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceDriverWithOptions(request: BatchGetEdgeInstanceDeviceDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeInstanceDeviceDriverResponse>(await this.doRPCRequest("BatchGetEdgeInstanceDeviceDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeInstanceDeviceDriverResponse({}));
  }

  async batchGetEdgeInstanceDeviceDriver(request: BatchGetEdgeInstanceDeviceDriverRequest): Promise<BatchGetEdgeInstanceDeviceDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceDriverWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDriverConfigsWithOptions(request: BatchGetEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetEdgeInstanceDriverConfigsResponse>(await this.doRPCRequest("BatchGetEdgeInstanceDriverConfigs", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetEdgeInstanceDriverConfigsResponse({}));
  }

  async batchGetEdgeInstanceDriverConfigs(request: BatchGetEdgeInstanceDriverConfigsRequest): Promise<BatchGetEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async batchPubWithOptions(request: BatchPubRequest, runtime: $Util.RuntimeOptions): Promise<BatchPubResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchPubResponse>(await this.doRPCRequest("BatchPub", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchPubResponse({}));
  }

  async batchPub(request: BatchPubRequest): Promise<BatchPubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchPubWithOptions(request, runtime);
  }

  async batchQueryDeviceDetailWithOptions(request: BatchQueryDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<BatchQueryDeviceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchQueryDeviceDetailResponse>(await this.doRPCRequest("BatchQueryDeviceDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchQueryDeviceDetailResponse({}));
  }

  async batchQueryDeviceDetail(request: BatchQueryDeviceDetailRequest): Promise<BatchQueryDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQueryDeviceDetailWithOptions(request, runtime);
  }

  async batchRegisterDeviceWithOptions(request: BatchRegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegisterDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchRegisterDeviceResponse>(await this.doRPCRequest("BatchRegisterDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchRegisterDeviceResponse({}));
  }

  async batchRegisterDevice(request: BatchRegisterDeviceRequest): Promise<BatchRegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegisterDeviceWithOptions(request, runtime);
  }

  async batchRegisterDeviceWithApplyIdWithOptions(request: BatchRegisterDeviceWithApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegisterDeviceWithApplyIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchRegisterDeviceWithApplyIdResponse>(await this.doRPCRequest("BatchRegisterDeviceWithApplyId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchRegisterDeviceWithApplyIdResponse({}));
  }

  async batchRegisterDeviceWithApplyId(request: BatchRegisterDeviceWithApplyIdRequest): Promise<BatchRegisterDeviceWithApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegisterDeviceWithApplyIdWithOptions(request, runtime);
  }

  async batchSetEdgeInstanceDeviceChannelWithOptions(request: BatchSetEdgeInstanceDeviceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetEdgeInstanceDeviceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetEdgeInstanceDeviceChannelResponse>(await this.doRPCRequest("BatchSetEdgeInstanceDeviceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetEdgeInstanceDeviceChannelResponse({}));
  }

  async batchSetEdgeInstanceDeviceChannel(request: BatchSetEdgeInstanceDeviceChannelRequest): Promise<BatchSetEdgeInstanceDeviceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetEdgeInstanceDeviceChannelWithOptions(request, runtime);
  }

  async batchSetEdgeInstanceDeviceConfigWithOptions(request: BatchSetEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetEdgeInstanceDeviceConfigResponse>(await this.doRPCRequest("BatchSetEdgeInstanceDeviceConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetEdgeInstanceDeviceConfigResponse({}));
  }

  async batchSetEdgeInstanceDeviceConfig(request: BatchSetEdgeInstanceDeviceConfigRequest): Promise<BatchSetEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchUnbindDeviceFromEdgeInstanceWithOptions(request: BatchUnbindDeviceFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindDeviceFromEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUnbindDeviceFromEdgeInstanceResponse>(await this.doRPCRequest("BatchUnbindDeviceFromEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUnbindDeviceFromEdgeInstanceResponse({}));
  }

  async batchUnbindDeviceFromEdgeInstance(request: BatchUnbindDeviceFromEdgeInstanceRequest): Promise<BatchUnbindDeviceFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindDeviceFromEdgeInstanceWithOptions(request, runtime);
  }

  async batchUpdateDeviceNicknameWithOptions(request: BatchUpdateDeviceNicknameRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateDeviceNicknameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUpdateDeviceNicknameResponse>(await this.doRPCRequest("BatchUpdateDeviceNickname", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUpdateDeviceNicknameResponse({}));
  }

  async batchUpdateDeviceNickname(request: BatchUpdateDeviceNicknameRequest): Promise<BatchUpdateDeviceNicknameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateDeviceNicknameWithOptions(request, runtime);
  }

  async bindApplicationToEdgeInstanceWithOptions(request: BindApplicationToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindApplicationToEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindApplicationToEdgeInstanceResponse>(await this.doRPCRequest("BindApplicationToEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindApplicationToEdgeInstanceResponse({}));
  }

  async bindApplicationToEdgeInstance(request: BindApplicationToEdgeInstanceRequest): Promise<BindApplicationToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindApplicationToEdgeInstanceWithOptions(request, runtime);
  }

  async bindDriverToEdgeInstanceWithOptions(request: BindDriverToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindDriverToEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindDriverToEdgeInstanceResponse>(await this.doRPCRequest("BindDriverToEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindDriverToEdgeInstanceResponse({}));
  }

  async bindDriverToEdgeInstance(request: BindDriverToEdgeInstanceRequest): Promise<BindDriverToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDriverToEdgeInstanceWithOptions(request, runtime);
  }

  async bindGatewayToEdgeInstanceWithOptions(request: BindGatewayToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindGatewayToEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindGatewayToEdgeInstanceResponse>(await this.doRPCRequest("BindGatewayToEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindGatewayToEdgeInstanceResponse({}));
  }

  async bindGatewayToEdgeInstance(request: BindGatewayToEdgeInstanceRequest): Promise<BindGatewayToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindGatewayToEdgeInstanceWithOptions(request, runtime);
  }

  async bindRoleToEdgeInstanceWithOptions(request: BindRoleToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindRoleToEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindRoleToEdgeInstanceResponse>(await this.doRPCRequest("BindRoleToEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindRoleToEdgeInstanceResponse({}));
  }

  async bindRoleToEdgeInstance(request: BindRoleToEdgeInstanceRequest): Promise<BindRoleToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindRoleToEdgeInstanceWithOptions(request, runtime);
  }

  async bindSceneRuleToEdgeInstanceWithOptions(request: BindSceneRuleToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindSceneRuleToEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindSceneRuleToEdgeInstanceResponse>(await this.doRPCRequest("BindSceneRuleToEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindSceneRuleToEdgeInstanceResponse({}));
  }

  async bindSceneRuleToEdgeInstance(request: BindSceneRuleToEdgeInstanceRequest): Promise<BindSceneRuleToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSceneRuleToEdgeInstanceWithOptions(request, runtime);
  }

  async cancelJobWithOptions(request: CancelJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelJobResponse>(await this.doRPCRequest("CancelJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CancelJobResponse({}));
  }

  async cancelJob(request: CancelJobRequest): Promise<CancelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobWithOptions(request, runtime);
  }

  async cancelOTAStrategyByJobWithOptions(request: CancelOTAStrategyByJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTAStrategyByJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOTAStrategyByJobResponse>(await this.doRPCRequest("CancelOTAStrategyByJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOTAStrategyByJobResponse({}));
  }

  async cancelOTAStrategyByJob(request: CancelOTAStrategyByJobRequest): Promise<CancelOTAStrategyByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTAStrategyByJobWithOptions(request, runtime);
  }

  async cancelOTATaskByDeviceWithOptions(request: CancelOTATaskByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTATaskByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOTATaskByDeviceResponse>(await this.doRPCRequest("CancelOTATaskByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOTATaskByDeviceResponse({}));
  }

  async cancelOTATaskByDevice(request: CancelOTATaskByDeviceRequest): Promise<CancelOTATaskByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTATaskByDeviceWithOptions(request, runtime);
  }

  async cancelOTATaskByJobWithOptions(request: CancelOTATaskByJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTATaskByJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOTATaskByJobResponse>(await this.doRPCRequest("CancelOTATaskByJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOTATaskByJobResponse({}));
  }

  async cancelOTATaskByJob(request: CancelOTATaskByJobRequest): Promise<CancelOTATaskByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTATaskByJobWithOptions(request, runtime);
  }

  async clearEdgeInstanceDriverConfigsWithOptions(request: ClearEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ClearEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearEdgeInstanceDriverConfigsResponse>(await this.doRPCRequest("ClearEdgeInstanceDriverConfigs", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ClearEdgeInstanceDriverConfigsResponse({}));
  }

  async clearEdgeInstanceDriverConfigs(request: ClearEdgeInstanceDriverConfigsRequest): Promise<ClearEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async closeEdgeInstanceDeploymentWithOptions(request: CloseEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CloseEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseEdgeInstanceDeploymentResponse>(await this.doRPCRequest("CloseEdgeInstanceDeployment", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CloseEdgeInstanceDeploymentResponse({}));
  }

  async closeEdgeInstanceDeployment(request: CloseEdgeInstanceDeploymentRequest): Promise<CloseEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async copyThingModelWithOptions(request: CopyThingModelRequest, runtime: $Util.RuntimeOptions): Promise<CopyThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyThingModelResponse>(await this.doRPCRequest("CopyThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CopyThingModelResponse({}));
  }

  async copyThingModel(request: CopyThingModelRequest): Promise<CopyThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyThingModelWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.doRPCRequest("CreateConsumerGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createConsumerGroupSubscribeRelationWithOptions(request: CreateConsumerGroupSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupSubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConsumerGroupSubscribeRelationResponse>(await this.doRPCRequest("CreateConsumerGroupSubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConsumerGroupSubscribeRelationResponse({}));
  }

  async createConsumerGroupSubscribeRelation(request: CreateConsumerGroupSubscribeRelationRequest): Promise<CreateConsumerGroupSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupSubscribeRelationWithOptions(request, runtime);
  }

  async createDataAPIServiceWithOptions(request: CreateDataAPIServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataAPIServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataAPIServiceResponse>(await this.doRPCRequest("CreateDataAPIService", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataAPIServiceResponse({}));
  }

  async createDataAPIService(request: CreateDataAPIServiceRequest): Promise<CreateDataAPIServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataAPIServiceWithOptions(request, runtime);
  }

  async createDeviceGroupWithOptions(request: CreateDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceGroupResponse>(await this.doRPCRequest("CreateDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceGroupResponse({}));
  }

  async createDeviceGroup(request: CreateDeviceGroupRequest): Promise<CreateDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceGroupWithOptions(request, runtime);
  }

  async createEdgeDriverWithOptions(request: CreateEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeDriverResponse>(await this.doRPCRequest("CreateEdgeDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeDriverResponse({}));
  }

  async createEdgeDriver(request: CreateEdgeDriverRequest): Promise<CreateEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeDriverWithOptions(request, runtime);
  }

  async createEdgeDriverVersionWithOptions(request: CreateEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeDriverVersionResponse>(await this.doRPCRequest("CreateEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeDriverVersionResponse({}));
  }

  async createEdgeDriverVersion(request: CreateEdgeDriverVersionRequest): Promise<CreateEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeDriverVersionWithOptions(request, runtime);
  }

  async createEdgeInstanceWithOptions(request: CreateEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeInstanceResponse>(await this.doRPCRequest("CreateEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeInstanceResponse({}));
  }

  async createEdgeInstance(request: CreateEdgeInstanceRequest): Promise<CreateEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceWithOptions(request, runtime);
  }

  async createEdgeInstanceChannelWithOptions(request: CreateEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeInstanceChannelResponse>(await this.doRPCRequest("CreateEdgeInstanceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeInstanceChannelResponse({}));
  }

  async createEdgeInstanceChannel(request: CreateEdgeInstanceChannelRequest): Promise<CreateEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceChannelWithOptions(request, runtime);
  }

  async createEdgeInstanceDeploymentWithOptions(request: CreateEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeInstanceDeploymentResponse>(await this.doRPCRequest("CreateEdgeInstanceDeployment", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeInstanceDeploymentResponse({}));
  }

  async createEdgeInstanceDeployment(request: CreateEdgeInstanceDeploymentRequest): Promise<CreateEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async createEdgeOssPreSignedAddressWithOptions(request: CreateEdgeOssPreSignedAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeOssPreSignedAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEdgeOssPreSignedAddressResponse>(await this.doRPCRequest("CreateEdgeOssPreSignedAddress", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEdgeOssPreSignedAddressResponse({}));
  }

  async createEdgeOssPreSignedAddress(request: CreateEdgeOssPreSignedAddressRequest): Promise<CreateEdgeOssPreSignedAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeOssPreSignedAddressWithOptions(request, runtime);
  }

  async createJobWithOptions(tmpReq: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobFile)) {
      request.jobFileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobFile, "JobFile", "json");
    }

    if (!Util.isUnset(tmpReq.timeoutConfig)) {
      request.timeoutConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timeoutConfig, "TimeoutConfig", "json");
    }

    if (!Util.isUnset(tmpReq.rolloutConfig)) {
      request.rolloutConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rolloutConfig, "RolloutConfig", "json");
    }

    if (!Util.isUnset(tmpReq.targetConfig)) {
      request.targetConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetConfig, "TargetConfig", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateJobResponse>(await this.doRPCRequest("CreateJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateJobResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  async createLoRaNodesTaskWithOptions(request: CreateLoRaNodesTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoRaNodesTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoRaNodesTaskResponse>(await this.doRPCRequest("CreateLoRaNodesTask", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoRaNodesTaskResponse({}));
  }

  async createLoRaNodesTask(request: CreateLoRaNodesTaskRequest): Promise<CreateLoRaNodesTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoRaNodesTaskWithOptions(request, runtime);
  }

  async createOTADynamicUpgradeJobWithOptions(request: CreateOTADynamicUpgradeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTADynamicUpgradeJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOTADynamicUpgradeJobResponse>(await this.doRPCRequest("CreateOTADynamicUpgradeJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOTADynamicUpgradeJobResponse({}));
  }

  async createOTADynamicUpgradeJob(request: CreateOTADynamicUpgradeJobRequest): Promise<CreateOTADynamicUpgradeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTADynamicUpgradeJobWithOptions(request, runtime);
  }

  async createOTAFirmwareWithOptions(request: CreateOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAFirmwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOTAFirmwareResponse>(await this.doRPCRequest("CreateOTAFirmware", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOTAFirmwareResponse({}));
  }

  async createOTAFirmware(request: CreateOTAFirmwareRequest): Promise<CreateOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAFirmwareWithOptions(request, runtime);
  }

  async createOTAModuleWithOptions(request: CreateOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAModuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOTAModuleResponse>(await this.doRPCRequest("CreateOTAModule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOTAModuleResponse({}));
  }

  async createOTAModule(request: CreateOTAModuleRequest): Promise<CreateOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAModuleWithOptions(request, runtime);
  }

  async createOTAStaticUpgradeJobWithOptions(request: CreateOTAStaticUpgradeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAStaticUpgradeJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOTAStaticUpgradeJobResponse>(await this.doRPCRequest("CreateOTAStaticUpgradeJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOTAStaticUpgradeJobResponse({}));
  }

  async createOTAStaticUpgradeJob(request: CreateOTAStaticUpgradeJobRequest): Promise<CreateOTAStaticUpgradeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAStaticUpgradeJobWithOptions(request, runtime);
  }

  async createOTAVerifyJobWithOptions(request: CreateOTAVerifyJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAVerifyJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOTAVerifyJobResponse>(await this.doRPCRequest("CreateOTAVerifyJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOTAVerifyJobResponse({}));
  }

  async createOTAVerifyJob(request: CreateOTAVerifyJobRequest): Promise<CreateOTAVerifyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAVerifyJobWithOptions(request, runtime);
  }

  async createProductWithOptions(request: CreateProductRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProductResponse>(await this.doRPCRequest("CreateProduct", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProductResponse({}));
  }

  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  async createProductTagsWithOptions(request: CreateProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProductTagsResponse>(await this.doRPCRequest("CreateProductTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProductTagsResponse({}));
  }

  async createProductTags(request: CreateProductTagsRequest): Promise<CreateProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductTagsWithOptions(request, runtime);
  }

  async createProductTopicWithOptions(request: CreateProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProductTopicResponse>(await this.doRPCRequest("CreateProductTopic", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProductTopicResponse({}));
  }

  async createProductTopic(request: CreateProductTopicRequest): Promise<CreateProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductTopicWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createRuleActionWithOptions(request: CreateRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleActionResponse>(await this.doRPCRequest("CreateRuleAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleActionResponse({}));
  }

  async createRuleAction(request: CreateRuleActionRequest): Promise<CreateRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleActionWithOptions(request, runtime);
  }

  async createSceneRuleWithOptions(request: CreateSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSceneRuleResponse>(await this.doRPCRequest("CreateSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSceneRuleResponse({}));
  }

  async createSceneRule(request: CreateSceneRuleRequest): Promise<CreateSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneRuleWithOptions(request, runtime);
  }

  async createSubscribeRelationWithOptions(request: CreateSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubscribeRelationResponse>(await this.doRPCRequest("CreateSubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubscribeRelationResponse({}));
  }

  async createSubscribeRelation(request: CreateSubscribeRelationRequest): Promise<CreateSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscribeRelationWithOptions(request, runtime);
  }

  async createThingModelWithOptions(request: CreateThingModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateThingModelResponse>(await this.doRPCRequest("CreateThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateThingModelResponse({}));
  }

  async createThingModel(request: CreateThingModelRequest): Promise<CreateThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThingModelWithOptions(request, runtime);
  }

  async createThingScriptWithOptions(request: CreateThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<CreateThingScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateThingScriptResponse>(await this.doRPCRequest("CreateThingScript", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateThingScriptResponse({}));
  }

  async createThingScript(request: CreateThingScriptRequest): Promise<CreateThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThingScriptWithOptions(request, runtime);
  }

  async createTopicRouteTableWithOptions(request: CreateTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTopicRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTopicRouteTableResponse>(await this.doRPCRequest("CreateTopicRouteTable", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTopicRouteTableResponse({}));
  }

  async createTopicRouteTable(request: CreateTopicRouteTableRequest): Promise<CreateTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTopicRouteTableWithOptions(request, runtime);
  }

  async deleteClientIdsWithOptions(request: DeleteClientIdsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClientIdsResponse>(await this.doRPCRequest("DeleteClientIds", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClientIdsResponse({}));
  }

  async deleteClientIds(request: DeleteClientIdsRequest): Promise<DeleteClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientIdsWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.doRPCRequest("DeleteConsumerGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async deleteConsumerGroupSubscribeRelationWithOptions(request: DeleteConsumerGroupSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupSubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConsumerGroupSubscribeRelationResponse>(await this.doRPCRequest("DeleteConsumerGroupSubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConsumerGroupSubscribeRelationResponse({}));
  }

  async deleteConsumerGroupSubscribeRelation(request: DeleteConsumerGroupSubscribeRelationRequest): Promise<DeleteConsumerGroupSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupSubscribeRelationWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteDeviceFileWithOptions(request: DeleteDeviceFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceFileResponse>(await this.doRPCRequest("DeleteDeviceFile", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceFileResponse({}));
  }

  async deleteDeviceFile(request: DeleteDeviceFileRequest): Promise<DeleteDeviceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceFileWithOptions(request, runtime);
  }

  async deleteDeviceGroupWithOptions(request: DeleteDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceGroupResponse>(await this.doRPCRequest("DeleteDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceGroupResponse({}));
  }

  async deleteDeviceGroup(request: DeleteDeviceGroupRequest): Promise<DeleteDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceGroupWithOptions(request, runtime);
  }

  async deleteDevicePropWithOptions(request: DeleteDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicePropResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDevicePropResponse>(await this.doRPCRequest("DeleteDeviceProp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDevicePropResponse({}));
  }

  async deleteDeviceProp(request: DeleteDevicePropRequest): Promise<DeleteDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicePropWithOptions(request, runtime);
  }

  async deleteEdgeDriverWithOptions(request: DeleteEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEdgeDriverResponse>(await this.doRPCRequest("DeleteEdgeDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEdgeDriverResponse({}));
  }

  async deleteEdgeDriver(request: DeleteEdgeDriverRequest): Promise<DeleteEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeDriverWithOptions(request, runtime);
  }

  async deleteEdgeDriverVersionWithOptions(request: DeleteEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEdgeDriverVersionResponse>(await this.doRPCRequest("DeleteEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEdgeDriverVersionResponse({}));
  }

  async deleteEdgeDriverVersion(request: DeleteEdgeDriverVersionRequest): Promise<DeleteEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeDriverVersionWithOptions(request, runtime);
  }

  async deleteEdgeInstanceWithOptions(request: DeleteEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEdgeInstanceResponse>(await this.doRPCRequest("DeleteEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEdgeInstanceResponse({}));
  }

  async deleteEdgeInstance(request: DeleteEdgeInstanceRequest): Promise<DeleteEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeInstanceWithOptions(request, runtime);
  }

  async deleteJobWithOptions(request: DeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteJobResponse>(await this.doRPCRequest("DeleteJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteJobResponse({}));
  }

  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  async deleteOTAFirmwareWithOptions(request: DeleteOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOTAFirmwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOTAFirmwareResponse>(await this.doRPCRequest("DeleteOTAFirmware", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOTAFirmwareResponse({}));
  }

  async deleteOTAFirmware(request: DeleteOTAFirmwareRequest): Promise<DeleteOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOTAFirmwareWithOptions(request, runtime);
  }

  async deleteOTAModuleWithOptions(request: DeleteOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOTAModuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOTAModuleResponse>(await this.doRPCRequest("DeleteOTAModule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOTAModuleResponse({}));
  }

  async deleteOTAModule(request: DeleteOTAModuleRequest): Promise<DeleteOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOTAModuleWithOptions(request, runtime);
  }

  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProductResponse>(await this.doRPCRequest("DeleteProduct", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  async deleteProductTagsWithOptions(request: DeleteProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProductTagsResponse>(await this.doRPCRequest("DeleteProductTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProductTagsResponse({}));
  }

  async deleteProductTags(request: DeleteProductTagsRequest): Promise<DeleteProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductTagsWithOptions(request, runtime);
  }

  async deleteProductTopicWithOptions(request: DeleteProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProductTopicResponse>(await this.doRPCRequest("DeleteProductTopic", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProductTopicResponse({}));
  }

  async deleteProductTopic(request: DeleteProductTopicRequest): Promise<DeleteProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductTopicWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteRuleActionWithOptions(request: DeleteRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleActionResponse>(await this.doRPCRequest("DeleteRuleAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleActionResponse({}));
  }

  async deleteRuleAction(request: DeleteRuleActionRequest): Promise<DeleteRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleActionWithOptions(request, runtime);
  }

  async deleteSceneRuleWithOptions(request: DeleteSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSceneRuleResponse>(await this.doRPCRequest("DeleteSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSceneRuleResponse({}));
  }

  async deleteSceneRule(request: DeleteSceneRuleRequest): Promise<DeleteSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneRuleWithOptions(request, runtime);
  }

  async deleteSubscribeRelationWithOptions(request: DeleteSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubscribeRelationResponse>(await this.doRPCRequest("DeleteSubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubscribeRelationResponse({}));
  }

  async deleteSubscribeRelation(request: DeleteSubscribeRelationRequest): Promise<DeleteSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscribeRelationWithOptions(request, runtime);
  }

  async deleteThingModelWithOptions(request: DeleteThingModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteThingModelResponse>(await this.doRPCRequest("DeleteThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteThingModelResponse({}));
  }

  async deleteThingModel(request: DeleteThingModelRequest): Promise<DeleteThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteThingModelWithOptions(request, runtime);
  }

  async deleteTopicRouteTableWithOptions(request: DeleteTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTopicRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTopicRouteTableResponse>(await this.doRPCRequest("DeleteTopicRouteTable", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTopicRouteTableResponse({}));
  }

  async deleteTopicRouteTable(request: DeleteTopicRouteTableRequest): Promise<DeleteTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTopicRouteTableWithOptions(request, runtime);
  }

  async disableSceneRuleWithOptions(request: DisableSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSceneRuleResponse>(await this.doRPCRequest("DisableSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSceneRuleResponse({}));
  }

  async disableSceneRule(request: DisableSceneRuleRequest): Promise<DisableSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSceneRuleWithOptions(request, runtime);
  }

  async disableThingWithOptions(request: DisableThingRequest, runtime: $Util.RuntimeOptions): Promise<DisableThingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableThingResponse>(await this.doRPCRequest("DisableThing", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DisableThingResponse({}));
  }

  async disableThing(request: DisableThingRequest): Promise<DisableThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableThingWithOptions(request, runtime);
  }

  async enableSceneRuleWithOptions(request: EnableSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSceneRuleResponse>(await this.doRPCRequest("EnableSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSceneRuleResponse({}));
  }

  async enableSceneRule(request: EnableSceneRuleRequest): Promise<EnableSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSceneRuleWithOptions(request, runtime);
  }

  async enableThingWithOptions(request: EnableThingRequest, runtime: $Util.RuntimeOptions): Promise<EnableThingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableThingResponse>(await this.doRPCRequest("EnableThing", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnableThingResponse({}));
  }

  async enableThing(request: EnableThingRequest): Promise<EnableThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableThingWithOptions(request, runtime);
  }

  async generateDeviceNameListURLWithOptions(request: GenerateDeviceNameListURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceNameListURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateDeviceNameListURLResponse>(await this.doRPCRequest("GenerateDeviceNameListURL", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateDeviceNameListURLResponse({}));
  }

  async generateDeviceNameListURL(request: GenerateDeviceNameListURLRequest): Promise<GenerateDeviceNameListURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDeviceNameListURLWithOptions(request, runtime);
  }

  async generateFileUploadURLWithOptions(request: GenerateFileUploadURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFileUploadURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateFileUploadURLResponse>(await this.doRPCRequest("GenerateFileUploadURL", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateFileUploadURLResponse({}));
  }

  async generateFileUploadURL(request: GenerateFileUploadURLRequest): Promise<GenerateFileUploadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFileUploadURLWithOptions(request, runtime);
  }

  async generateOTAUploadURLWithOptions(request: GenerateOTAUploadURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOTAUploadURLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateOTAUploadURLResponse>(await this.doRPCRequest("GenerateOTAUploadURL", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateOTAUploadURLResponse({}));
  }

  async generateOTAUploadURL(request: GenerateOTAUploadURLRequest): Promise<GenerateOTAUploadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOTAUploadURLWithOptions(request, runtime);
  }

  async getDataAPIServiceDetailWithOptions(request: GetDataAPIServiceDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataAPIServiceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDataAPIServiceDetailResponse>(await this.doRPCRequest("GetDataAPIServiceDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDataAPIServiceDetailResponse({}));
  }

  async getDataAPIServiceDetail(request: GetDataAPIServiceDetailRequest): Promise<GetDataAPIServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataAPIServiceDetailWithOptions(request, runtime);
  }

  async getDeviceShadowWithOptions(request: GetDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceShadowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceShadowResponse>(await this.doRPCRequest("GetDeviceShadow", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceShadowResponse({}));
  }

  async getDeviceShadow(request: GetDeviceShadowRequest): Promise<GetDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceShadowWithOptions(request, runtime);
  }

  async getDeviceStatusWithOptions(request: GetDeviceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceStatusResponse>(await this.doRPCRequest("GetDeviceStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceStatusResponse({}));
  }

  async getDeviceStatus(request: GetDeviceStatusRequest): Promise<GetDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceStatusWithOptions(request, runtime);
  }

  async getEdgeDriverVersionWithOptions(request: GetEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEdgeDriverVersionResponse>(await this.doRPCRequest("GetEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetEdgeDriverVersionResponse({}));
  }

  async getEdgeDriverVersion(request: GetEdgeDriverVersionRequest): Promise<GetEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeDriverVersionWithOptions(request, runtime);
  }

  async getEdgeInstanceWithOptions(request: GetEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEdgeInstanceResponse>(await this.doRPCRequest("GetEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetEdgeInstanceResponse({}));
  }

  async getEdgeInstance(request: GetEdgeInstanceRequest): Promise<GetEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeInstanceWithOptions(request, runtime);
  }

  async getEdgeInstanceDeploymentWithOptions(request: GetEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEdgeInstanceDeploymentResponse>(await this.doRPCRequest("GetEdgeInstanceDeployment", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetEdgeInstanceDeploymentResponse({}));
  }

  async getEdgeInstanceDeployment(request: GetEdgeInstanceDeploymentRequest): Promise<GetEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async getGatewayBySubDeviceWithOptions(request: GetGatewayBySubDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayBySubDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGatewayBySubDeviceResponse>(await this.doRPCRequest("GetGatewayBySubDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetGatewayBySubDeviceResponse({}));
  }

  async getGatewayBySubDevice(request: GetGatewayBySubDeviceRequest): Promise<GetGatewayBySubDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayBySubDeviceWithOptions(request, runtime);
  }

  async getLoraNodesTaskWithOptions(request: GetLoraNodesTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetLoraNodesTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoraNodesTaskResponse>(await this.doRPCRequest("GetLoraNodesTask", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoraNodesTaskResponse({}));
  }

  async getLoraNodesTask(request: GetLoraNodesTaskRequest): Promise<GetLoraNodesTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoraNodesTaskWithOptions(request, runtime);
  }

  async getNodesAddingTaskWithOptions(request: GetNodesAddingTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetNodesAddingTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNodesAddingTaskResponse>(await this.doRPCRequest("GetNodesAddingTask", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetNodesAddingTaskResponse({}));
  }

  async getNodesAddingTask(request: GetNodesAddingTaskRequest): Promise<GetNodesAddingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodesAddingTaskWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleResponse>(await this.doRPCRequest("GetRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getRuleActionWithOptions(request: GetRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleActionResponse>(await this.doRPCRequest("GetRuleAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleActionResponse({}));
  }

  async getRuleAction(request: GetRuleActionRequest): Promise<GetRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleActionWithOptions(request, runtime);
  }

  async getSceneRuleWithOptions(request: GetSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSceneRuleResponse>(await this.doRPCRequest("GetSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSceneRuleResponse({}));
  }

  async getSceneRule(request: GetSceneRuleRequest): Promise<GetSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneRuleWithOptions(request, runtime);
  }

  async getThingModelTslWithOptions(request: GetThingModelTslRequest, runtime: $Util.RuntimeOptions): Promise<GetThingModelTslResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThingModelTslResponse>(await this.doRPCRequest("GetThingModelTsl", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetThingModelTslResponse({}));
  }

  async getThingModelTsl(request: GetThingModelTslRequest): Promise<GetThingModelTslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingModelTslWithOptions(request, runtime);
  }

  async getThingModelTslPublishedWithOptions(request: GetThingModelTslPublishedRequest, runtime: $Util.RuntimeOptions): Promise<GetThingModelTslPublishedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThingModelTslPublishedResponse>(await this.doRPCRequest("GetThingModelTslPublished", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetThingModelTslPublishedResponse({}));
  }

  async getThingModelTslPublished(request: GetThingModelTslPublishedRequest): Promise<GetThingModelTslPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingModelTslPublishedWithOptions(request, runtime);
  }

  async getThingScriptWithOptions(request: GetThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetThingScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThingScriptResponse>(await this.doRPCRequest("GetThingScript", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetThingScriptResponse({}));
  }

  async getThingScript(request: GetThingScriptRequest): Promise<GetThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingScriptWithOptions(request, runtime);
  }

  async getThingTemplateWithOptions(request: GetThingTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetThingTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThingTemplateResponse>(await this.doRPCRequest("GetThingTemplate", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetThingTemplateResponse({}));
  }

  async getThingTemplate(request: GetThingTemplateRequest): Promise<GetThingTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingTemplateWithOptions(request, runtime);
  }

  async getThingTopoWithOptions(request: GetThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<GetThingTopoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThingTopoResponse>(await this.doRPCRequest("GetThingTopo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetThingTopoResponse({}));
  }

  async getThingTopo(request: GetThingTopoRequest): Promise<GetThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingTopoWithOptions(request, runtime);
  }

  async importThingModelTslWithOptions(request: ImportThingModelTslRequest, runtime: $Util.RuntimeOptions): Promise<ImportThingModelTslResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportThingModelTslResponse>(await this.doRPCRequest("ImportThingModelTsl", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImportThingModelTslResponse({}));
  }

  async importThingModelTsl(request: ImportThingModelTslRequest): Promise<ImportThingModelTslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importThingModelTslWithOptions(request, runtime);
  }

  async invokeDataAPIServiceWithOptions(request: InvokeDataAPIServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeDataAPIServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeDataAPIServiceResponse>(await this.doRPCRequest("InvokeDataAPIService", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeDataAPIServiceResponse({}));
  }

  async invokeDataAPIService(request: InvokeDataAPIServiceRequest): Promise<InvokeDataAPIServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeDataAPIServiceWithOptions(request, runtime);
  }

  async invokeThingServiceWithOptions(request: InvokeThingServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeThingServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeThingServiceResponse>(await this.doRPCRequest("InvokeThingService", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeThingServiceResponse({}));
  }

  async invokeThingService(request: InvokeThingServiceRequest): Promise<InvokeThingServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeThingServiceWithOptions(request, runtime);
  }

  async invokeThingsServiceWithOptions(request: InvokeThingsServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeThingsServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeThingsServiceResponse>(await this.doRPCRequest("InvokeThingsService", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeThingsServiceResponse({}));
  }

  async invokeThingsService(request: InvokeThingsServiceRequest): Promise<InvokeThingsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeThingsServiceWithOptions(request, runtime);
  }

  async listJobWithOptions(request: ListJobRequest, runtime: $Util.RuntimeOptions): Promise<ListJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobResponse>(await this.doRPCRequest("ListJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobResponse({}));
  }

  async listJob(request: ListJobRequest): Promise<ListJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobWithOptions(request, runtime);
  }

  async listOTAFirmwareWithOptions(request: ListOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAFirmwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOTAFirmwareResponse>(await this.doRPCRequest("ListOTAFirmware", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOTAFirmwareResponse({}));
  }

  async listOTAFirmware(request: ListOTAFirmwareRequest): Promise<ListOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAFirmwareWithOptions(request, runtime);
  }

  async listOTAJobByDeviceWithOptions(request: ListOTAJobByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAJobByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOTAJobByDeviceResponse>(await this.doRPCRequest("ListOTAJobByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOTAJobByDeviceResponse({}));
  }

  async listOTAJobByDevice(request: ListOTAJobByDeviceRequest): Promise<ListOTAJobByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAJobByDeviceWithOptions(request, runtime);
  }

  async listOTAJobByFirmwareWithOptions(request: ListOTAJobByFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAJobByFirmwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOTAJobByFirmwareResponse>(await this.doRPCRequest("ListOTAJobByFirmware", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOTAJobByFirmwareResponse({}));
  }

  async listOTAJobByFirmware(request: ListOTAJobByFirmwareRequest): Promise<ListOTAJobByFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAJobByFirmwareWithOptions(request, runtime);
  }

  async listOTAModuleByProductWithOptions(request: ListOTAModuleByProductRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAModuleByProductResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOTAModuleByProductResponse>(await this.doRPCRequest("ListOTAModuleByProduct", "2018-01-20", "HTTPS", "GET", "AK", "json", req, runtime), new ListOTAModuleByProductResponse({}));
  }

  async listOTAModuleByProduct(request: ListOTAModuleByProductRequest): Promise<ListOTAModuleByProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAModuleByProductWithOptions(request, runtime);
  }

  async listOTAModuleVersionsByDeviceWithOptions(request: ListOTAModuleVersionsByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAModuleVersionsByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOTAModuleVersionsByDeviceResponse>(await this.doRPCRequest("ListOTAModuleVersionsByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOTAModuleVersionsByDeviceResponse({}));
  }

  async listOTAModuleVersionsByDevice(request: ListOTAModuleVersionsByDeviceRequest): Promise<ListOTAModuleVersionsByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAModuleVersionsByDeviceWithOptions(request, runtime);
  }

  async listOTATaskByJobWithOptions(request: ListOTATaskByJobRequest, runtime: $Util.RuntimeOptions): Promise<ListOTATaskByJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOTATaskByJobResponse>(await this.doRPCRequest("ListOTATaskByJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListOTATaskByJobResponse({}));
  }

  async listOTATaskByJob(request: ListOTATaskByJobRequest): Promise<ListOTATaskByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTATaskByJobWithOptions(request, runtime);
  }

  async listProductByTagsWithOptions(request: ListProductByTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductByTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductByTagsResponse>(await this.doRPCRequest("ListProductByTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductByTagsResponse({}));
  }

  async listProductByTags(request: ListProductByTagsRequest): Promise<ListProductByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductByTagsWithOptions(request, runtime);
  }

  async listProductTagsWithOptions(request: ListProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductTagsResponse>(await this.doRPCRequest("ListProductTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductTagsResponse({}));
  }

  async listProductTags(request: ListProductTagsRequest): Promise<ListProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductTagsWithOptions(request, runtime);
  }

  async listRuleWithOptions(request: ListRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRuleResponse>(await this.doRPCRequest("ListRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListRuleResponse({}));
  }

  async listRule(request: ListRuleRequest): Promise<ListRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRuleWithOptions(request, runtime);
  }

  async listRuleActionsWithOptions(request: ListRuleActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRuleActionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRuleActionsResponse>(await this.doRPCRequest("ListRuleActions", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListRuleActionsResponse({}));
  }

  async listRuleActions(request: ListRuleActionsRequest): Promise<ListRuleActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRuleActionsWithOptions(request, runtime);
  }

  async listTaskWithOptions(request: ListTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskResponse>(await this.doRPCRequest("ListTask", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskResponse({}));
  }

  async listTask(request: ListTaskRequest): Promise<ListTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  async listTaskByPageWithOptions(request: ListTaskByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskByPageResponse>(await this.doRPCRequest("ListTaskByPage", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskByPageResponse({}));
  }

  async listTaskByPage(request: ListTaskByPageRequest): Promise<ListTaskByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskByPageWithOptions(request, runtime);
  }

  async listThingModelVersionWithOptions(request: ListThingModelVersionRequest, runtime: $Util.RuntimeOptions): Promise<ListThingModelVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListThingModelVersionResponse>(await this.doRPCRequest("ListThingModelVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListThingModelVersionResponse({}));
  }

  async listThingModelVersion(request: ListThingModelVersionRequest): Promise<ListThingModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listThingModelVersionWithOptions(request, runtime);
  }

  async listThingTemplatesWithOptions(request: ListThingTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListThingTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListThingTemplatesResponse>(await this.doRPCRequest("ListThingTemplates", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListThingTemplatesResponse({}));
  }

  async listThingTemplates(request: ListThingTemplatesRequest): Promise<ListThingTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listThingTemplatesWithOptions(request, runtime);
  }

  async notifyAddThingTopoWithOptions(request: NotifyAddThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<NotifyAddThingTopoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<NotifyAddThingTopoResponse>(await this.doRPCRequest("NotifyAddThingTopo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new NotifyAddThingTopoResponse({}));
  }

  async notifyAddThingTopo(request: NotifyAddThingTopoRequest): Promise<NotifyAddThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyAddThingTopoWithOptions(request, runtime);
  }

  async pubWithOptions(request: PubRequest, runtime: $Util.RuntimeOptions): Promise<PubResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PubResponse>(await this.doRPCRequest("Pub", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new PubResponse({}));
  }

  async pub(request: PubRequest): Promise<PubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pubWithOptions(request, runtime);
  }

  async pubBroadcastWithOptions(request: PubBroadcastRequest, runtime: $Util.RuntimeOptions): Promise<PubBroadcastResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PubBroadcastResponse>(await this.doRPCRequest("PubBroadcast", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new PubBroadcastResponse({}));
  }

  async pubBroadcast(request: PubBroadcastRequest): Promise<PubBroadcastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pubBroadcastWithOptions(request, runtime);
  }

  async publishThingModelWithOptions(request: PublishThingModelRequest, runtime: $Util.RuntimeOptions): Promise<PublishThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishThingModelResponse>(await this.doRPCRequest("PublishThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new PublishThingModelResponse({}));
  }

  async publishThingModel(request: PublishThingModelRequest): Promise<PublishThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishThingModelWithOptions(request, runtime);
  }

  async queryAppDeviceListWithOptions(request: QueryAppDeviceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAppDeviceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAppDeviceListResponse>(await this.doRPCRequest("QueryAppDeviceList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAppDeviceListResponse({}));
  }

  async queryAppDeviceList(request: QueryAppDeviceListRequest): Promise<QueryAppDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAppDeviceListWithOptions(request, runtime);
  }

  async queryBatchRegisterDeviceStatusWithOptions(request: QueryBatchRegisterDeviceStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryBatchRegisterDeviceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBatchRegisterDeviceStatusResponse>(await this.doRPCRequest("QueryBatchRegisterDeviceStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBatchRegisterDeviceStatusResponse({}));
  }

  async queryBatchRegisterDeviceStatus(request: QueryBatchRegisterDeviceStatusRequest): Promise<QueryBatchRegisterDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBatchRegisterDeviceStatusWithOptions(request, runtime);
  }

  async queryCertUrlByApplyIdWithOptions(request: QueryCertUrlByApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCertUrlByApplyIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCertUrlByApplyIdResponse>(await this.doRPCRequest("QueryCertUrlByApplyId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCertUrlByApplyIdResponse({}));
  }

  async queryCertUrlByApplyId(request: QueryCertUrlByApplyIdRequest): Promise<QueryCertUrlByApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCertUrlByApplyIdWithOptions(request, runtime);
  }

  async queryClientIdsWithOptions(request: QueryClientIdsRequest, runtime: $Util.RuntimeOptions): Promise<QueryClientIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryClientIdsResponse>(await this.doRPCRequest("QueryClientIds", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryClientIdsResponse({}));
  }

  async queryClientIds(request: QueryClientIdsRequest): Promise<QueryClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClientIdsWithOptions(request, runtime);
  }

  async queryConsumerGroupByGroupIdWithOptions(request: QueryConsumerGroupByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupByGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryConsumerGroupByGroupIdResponse>(await this.doRPCRequest("QueryConsumerGroupByGroupId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryConsumerGroupByGroupIdResponse({}));
  }

  async queryConsumerGroupByGroupId(request: QueryConsumerGroupByGroupIdRequest): Promise<QueryConsumerGroupByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupByGroupIdWithOptions(request, runtime);
  }

  async queryConsumerGroupListWithOptions(request: QueryConsumerGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryConsumerGroupListResponse>(await this.doRPCRequest("QueryConsumerGroupList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryConsumerGroupListResponse({}));
  }

  async queryConsumerGroupList(request: QueryConsumerGroupListRequest): Promise<QueryConsumerGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupListWithOptions(request, runtime);
  }

  async queryConsumerGroupStatusWithOptions(request: QueryConsumerGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryConsumerGroupStatusResponse>(await this.doRPCRequest("QueryConsumerGroupStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryConsumerGroupStatusResponse({}));
  }

  async queryConsumerGroupStatus(request: QueryConsumerGroupStatusRequest): Promise<QueryConsumerGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupStatusWithOptions(request, runtime);
  }

  async queryDetailSceneRuleLogWithOptions(request: QueryDetailSceneRuleLogRequest, runtime: $Util.RuntimeOptions): Promise<QueryDetailSceneRuleLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDetailSceneRuleLogResponse>(await this.doRPCRequest("QueryDetailSceneRuleLog", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDetailSceneRuleLogResponse({}));
  }

  async queryDetailSceneRuleLog(request: QueryDetailSceneRuleLogRequest): Promise<QueryDetailSceneRuleLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDetailSceneRuleLogWithOptions(request, runtime);
  }

  async queryDeviceWithOptions(request: QueryDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceResponse>(await this.doRPCRequest("QueryDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceResponse({}));
  }

  async queryDevice(request: QueryDeviceRequest): Promise<QueryDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceWithOptions(request, runtime);
  }

  async queryDeviceBySQLWithOptions(request: QueryDeviceBySQLRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceBySQLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceBySQLResponse>(await this.doRPCRequest("QueryDeviceBySQL", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceBySQLResponse({}));
  }

  async queryDeviceBySQL(request: QueryDeviceBySQLRequest): Promise<QueryDeviceBySQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceBySQLWithOptions(request, runtime);
  }

  async queryDeviceByStatusWithOptions(request: QueryDeviceByStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceByStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceByStatusResponse>(await this.doRPCRequest("QueryDeviceByStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceByStatusResponse({}));
  }

  async queryDeviceByStatus(request: QueryDeviceByStatusRequest): Promise<QueryDeviceByStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceByStatusWithOptions(request, runtime);
  }

  async queryDeviceByTagsWithOptions(request: QueryDeviceByTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceByTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceByTagsResponse>(await this.doRPCRequest("QueryDeviceByTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceByTagsResponse({}));
  }

  async queryDeviceByTags(request: QueryDeviceByTagsRequest): Promise<QueryDeviceByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceByTagsWithOptions(request, runtime);
  }

  async queryDeviceCertWithOptions(request: QueryDeviceCertRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceCertResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceCertResponse>(await this.doRPCRequest("QueryDeviceCert", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceCertResponse({}));
  }

  async queryDeviceCert(request: QueryDeviceCertRequest): Promise<QueryDeviceCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceCertWithOptions(request, runtime);
  }

  async queryDeviceDesiredPropertyWithOptions(request: QueryDeviceDesiredPropertyRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDesiredPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceDesiredPropertyResponse>(await this.doRPCRequest("QueryDeviceDesiredProperty", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceDesiredPropertyResponse({}));
  }

  async queryDeviceDesiredProperty(request: QueryDeviceDesiredPropertyRequest): Promise<QueryDeviceDesiredPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDesiredPropertyWithOptions(request, runtime);
  }

  async queryDeviceDetailWithOptions(request: QueryDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceDetailResponse>(await this.doRPCRequest("QueryDeviceDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceDetailResponse({}));
  }

  async queryDeviceDetail(request: QueryDeviceDetailRequest): Promise<QueryDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDetailWithOptions(request, runtime);
  }

  async queryDeviceEventDataWithOptions(request: QueryDeviceEventDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceEventDataResponse>(await this.doRPCRequest("QueryDeviceEventData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceEventDataResponse({}));
  }

  async queryDeviceEventData(request: QueryDeviceEventDataRequest): Promise<QueryDeviceEventDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventDataWithOptions(request, runtime);
  }

  async queryDeviceFileWithOptions(request: QueryDeviceFileRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceFileResponse>(await this.doRPCRequest("QueryDeviceFile", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceFileResponse({}));
  }

  async queryDeviceFile(request: QueryDeviceFileRequest): Promise<QueryDeviceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceFileWithOptions(request, runtime);
  }

  async queryDeviceFileListWithOptions(request: QueryDeviceFileListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceFileListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceFileListResponse>(await this.doRPCRequest("QueryDeviceFileList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceFileListResponse({}));
  }

  async queryDeviceFileList(request: QueryDeviceFileListRequest): Promise<QueryDeviceFileListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceFileListWithOptions(request, runtime);
  }

  async queryDeviceGroupByDeviceWithOptions(request: QueryDeviceGroupByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceGroupByDeviceResponse>(await this.doRPCRequest("QueryDeviceGroupByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceGroupByDeviceResponse({}));
  }

  async queryDeviceGroupByDevice(request: QueryDeviceGroupByDeviceRequest): Promise<QueryDeviceGroupByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupByDeviceWithOptions(request, runtime);
  }

  async queryDeviceGroupByTagsWithOptions(request: QueryDeviceGroupByTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupByTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceGroupByTagsResponse>(await this.doRPCRequest("QueryDeviceGroupByTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceGroupByTagsResponse({}));
  }

  async queryDeviceGroupByTags(request: QueryDeviceGroupByTagsRequest): Promise<QueryDeviceGroupByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupByTagsWithOptions(request, runtime);
  }

  async queryDeviceGroupInfoWithOptions(request: QueryDeviceGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceGroupInfoResponse>(await this.doRPCRequest("QueryDeviceGroupInfo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceGroupInfoResponse({}));
  }

  async queryDeviceGroupInfo(request: QueryDeviceGroupInfoRequest): Promise<QueryDeviceGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupInfoWithOptions(request, runtime);
  }

  async queryDeviceGroupListWithOptions(request: QueryDeviceGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceGroupListResponse>(await this.doRPCRequest("QueryDeviceGroupList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceGroupListResponse({}));
  }

  async queryDeviceGroupList(request: QueryDeviceGroupListRequest): Promise<QueryDeviceGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupListWithOptions(request, runtime);
  }

  async queryDeviceGroupTagListWithOptions(request: QueryDeviceGroupTagListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupTagListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceGroupTagListResponse>(await this.doRPCRequest("QueryDeviceGroupTagList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceGroupTagListResponse({}));
  }

  async queryDeviceGroupTagList(request: QueryDeviceGroupTagListRequest): Promise<QueryDeviceGroupTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupTagListWithOptions(request, runtime);
  }

  async queryDeviceListByDeviceGroupWithOptions(request: QueryDeviceListByDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceListByDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceListByDeviceGroupResponse>(await this.doRPCRequest("QueryDeviceListByDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceListByDeviceGroupResponse({}));
  }

  async queryDeviceListByDeviceGroup(request: QueryDeviceListByDeviceGroupRequest): Promise<QueryDeviceListByDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceListByDeviceGroupWithOptions(request, runtime);
  }

  async queryDeviceOriginalEventDataWithOptions(request: QueryDeviceOriginalEventDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalEventDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceOriginalEventDataResponse>(await this.doRPCRequest("QueryDeviceOriginalEventData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceOriginalEventDataResponse({}));
  }

  async queryDeviceOriginalEventData(request: QueryDeviceOriginalEventDataRequest): Promise<QueryDeviceOriginalEventDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalEventDataWithOptions(request, runtime);
  }

  async queryDeviceOriginalPropertyDataWithOptions(request: QueryDeviceOriginalPropertyDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalPropertyDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceOriginalPropertyDataResponse>(await this.doRPCRequest("QueryDeviceOriginalPropertyData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceOriginalPropertyDataResponse({}));
  }

  async queryDeviceOriginalPropertyData(request: QueryDeviceOriginalPropertyDataRequest): Promise<QueryDeviceOriginalPropertyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalPropertyDataWithOptions(request, runtime);
  }

  async queryDeviceOriginalPropertyStatusWithOptions(request: QueryDeviceOriginalPropertyStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalPropertyStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceOriginalPropertyStatusResponse>(await this.doRPCRequest("QueryDeviceOriginalPropertyStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceOriginalPropertyStatusResponse({}));
  }

  async queryDeviceOriginalPropertyStatus(request: QueryDeviceOriginalPropertyStatusRequest): Promise<QueryDeviceOriginalPropertyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalPropertyStatusWithOptions(request, runtime);
  }

  async queryDeviceOriginalServiceDataWithOptions(request: QueryDeviceOriginalServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalServiceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceOriginalServiceDataResponse>(await this.doRPCRequest("QueryDeviceOriginalServiceData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceOriginalServiceDataResponse({}));
  }

  async queryDeviceOriginalServiceData(request: QueryDeviceOriginalServiceDataRequest): Promise<QueryDeviceOriginalServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalServiceDataWithOptions(request, runtime);
  }

  async queryDevicePropWithOptions(request: QueryDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePropResponse>(await this.doRPCRequest("QueryDeviceProp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePropResponse({}));
  }

  async queryDeviceProp(request: QueryDevicePropRequest): Promise<QueryDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropWithOptions(request, runtime);
  }

  async queryDevicePropertiesDataWithOptions(request: QueryDevicePropertiesDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertiesDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePropertiesDataResponse>(await this.doRPCRequest("QueryDevicePropertiesData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePropertiesDataResponse({}));
  }

  async queryDevicePropertiesData(request: QueryDevicePropertiesDataRequest): Promise<QueryDevicePropertiesDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertiesDataWithOptions(request, runtime);
  }

  async queryDevicePropertyDataWithOptions(request: QueryDevicePropertyDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertyDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePropertyDataResponse>(await this.doRPCRequest("QueryDevicePropertyData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePropertyDataResponse({}));
  }

  async queryDevicePropertyData(request: QueryDevicePropertyDataRequest): Promise<QueryDevicePropertyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertyDataWithOptions(request, runtime);
  }

  async queryDevicePropertyStatusWithOptions(request: QueryDevicePropertyStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertyStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePropertyStatusResponse>(await this.doRPCRequest("QueryDevicePropertyStatus", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePropertyStatusResponse({}));
  }

  async queryDevicePropertyStatus(request: QueryDevicePropertyStatusRequest): Promise<QueryDevicePropertyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertyStatusWithOptions(request, runtime);
  }

  async queryDeviceServiceDataWithOptions(request: QueryDeviceServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceServiceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceServiceDataResponse>(await this.doRPCRequest("QueryDeviceServiceData", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceServiceDataResponse({}));
  }

  async queryDeviceServiceData(request: QueryDeviceServiceDataRequest): Promise<QueryDeviceServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceServiceDataWithOptions(request, runtime);
  }

  async queryDeviceStatisticsWithOptions(request: QueryDeviceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceStatisticsResponse>(await this.doRPCRequest("QueryDeviceStatistics", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceStatisticsResponse({}));
  }

  async queryDeviceStatistics(request: QueryDeviceStatisticsRequest): Promise<QueryDeviceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceStatisticsWithOptions(request, runtime);
  }

  async queryEdgeDriverWithOptions(request: QueryEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeDriverResponse>(await this.doRPCRequest("QueryEdgeDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeDriverResponse({}));
  }

  async queryEdgeDriver(request: QueryEdgeDriverRequest): Promise<QueryEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeDriverWithOptions(request, runtime);
  }

  async queryEdgeDriverVersionWithOptions(request: QueryEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeDriverVersionResponse>(await this.doRPCRequest("QueryEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeDriverVersionResponse({}));
  }

  async queryEdgeDriverVersion(request: QueryEdgeDriverVersionRequest): Promise<QueryEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeDriverVersionWithOptions(request, runtime);
  }

  async queryEdgeInstanceWithOptions(request: QueryEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceResponse>(await this.doRPCRequest("QueryEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceResponse({}));
  }

  async queryEdgeInstance(request: QueryEdgeInstanceRequest): Promise<QueryEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceWithOptions(request, runtime);
  }

  async queryEdgeInstanceChannelWithOptions(request: QueryEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceChannelResponse>(await this.doRPCRequest("QueryEdgeInstanceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceChannelResponse({}));
  }

  async queryEdgeInstanceChannel(request: QueryEdgeInstanceChannelRequest): Promise<QueryEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceChannelWithOptions(request, runtime);
  }

  async queryEdgeInstanceDeviceWithOptions(request: QueryEdgeInstanceDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceDeviceResponse>(await this.doRPCRequest("QueryEdgeInstanceDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceDeviceResponse({}));
  }

  async queryEdgeInstanceDevice(request: QueryEdgeInstanceDeviceRequest): Promise<QueryEdgeInstanceDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDeviceWithOptions(request, runtime);
  }

  async queryEdgeInstanceDeviceByDriverWithOptions(request: QueryEdgeInstanceDeviceByDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDeviceByDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceDeviceByDriverResponse>(await this.doRPCRequest("QueryEdgeInstanceDeviceByDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceDeviceByDriverResponse({}));
  }

  async queryEdgeInstanceDeviceByDriver(request: QueryEdgeInstanceDeviceByDriverRequest): Promise<QueryEdgeInstanceDeviceByDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDeviceByDriverWithOptions(request, runtime);
  }

  async queryEdgeInstanceDriverWithOptions(request: QueryEdgeInstanceDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDriverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceDriverResponse>(await this.doRPCRequest("QueryEdgeInstanceDriver", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceDriverResponse({}));
  }

  async queryEdgeInstanceDriver(request: QueryEdgeInstanceDriverRequest): Promise<QueryEdgeInstanceDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDriverWithOptions(request, runtime);
  }

  async queryEdgeInstanceGatewayWithOptions(request: QueryEdgeInstanceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceGatewayResponse>(await this.doRPCRequest("QueryEdgeInstanceGateway", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceGatewayResponse({}));
  }

  async queryEdgeInstanceGateway(request: QueryEdgeInstanceGatewayRequest): Promise<QueryEdgeInstanceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceGatewayWithOptions(request, runtime);
  }

  async queryEdgeInstanceHistoricDeploymentWithOptions(request: QueryEdgeInstanceHistoricDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceHistoricDeploymentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceHistoricDeploymentResponse>(await this.doRPCRequest("QueryEdgeInstanceHistoricDeployment", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceHistoricDeploymentResponse({}));
  }

  async queryEdgeInstanceHistoricDeployment(request: QueryEdgeInstanceHistoricDeploymentRequest): Promise<QueryEdgeInstanceHistoricDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceHistoricDeploymentWithOptions(request, runtime);
  }

  async queryEdgeInstanceSceneRuleWithOptions(request: QueryEdgeInstanceSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEdgeInstanceSceneRuleResponse>(await this.doRPCRequest("QueryEdgeInstanceSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEdgeInstanceSceneRuleResponse({}));
  }

  async queryEdgeInstanceSceneRule(request: QueryEdgeInstanceSceneRuleRequest): Promise<QueryEdgeInstanceSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceSceneRuleWithOptions(request, runtime);
  }

  async queryJobWithOptions(request: QueryJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryJobResponse>(await this.doRPCRequest("QueryJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryJobResponse({}));
  }

  async queryJob(request: QueryJobRequest): Promise<QueryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobWithOptions(request, runtime);
  }

  async queryJobStatisticsWithOptions(request: QueryJobStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobStatisticsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryJobStatisticsResponse>(await this.doRPCRequest("QueryJobStatistics", "2018-01-20", "HTTPS", "GET", "AK", "json", req, runtime), new QueryJobStatisticsResponse({}));
  }

  async queryJobStatistics(request: QueryJobStatisticsRequest): Promise<QueryJobStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobStatisticsWithOptions(request, runtime);
  }

  async queryLoRaJoinPermissionsWithOptions(request: QueryLoRaJoinPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryLoRaJoinPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryLoRaJoinPermissionsResponse>(await this.doRPCRequest("QueryLoRaJoinPermissions", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryLoRaJoinPermissionsResponse({}));
  }

  async queryLoRaJoinPermissions(request: QueryLoRaJoinPermissionsRequest): Promise<QueryLoRaJoinPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLoRaJoinPermissionsWithOptions(request, runtime);
  }

  async queryOTAFirmwareWithOptions(request: QueryOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<QueryOTAFirmwareResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOTAFirmwareResponse>(await this.doRPCRequest("QueryOTAFirmware", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOTAFirmwareResponse({}));
  }

  async queryOTAFirmware(request: QueryOTAFirmwareRequest): Promise<QueryOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOTAFirmwareWithOptions(request, runtime);
  }

  async queryOTAJobWithOptions(request: QueryOTAJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryOTAJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOTAJobResponse>(await this.doRPCRequest("QueryOTAJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOTAJobResponse({}));
  }

  async queryOTAJob(request: QueryOTAJobRequest): Promise<QueryOTAJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOTAJobWithOptions(request, runtime);
  }

  async queryPageByApplyIdWithOptions(request: QueryPageByApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryPageByApplyIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPageByApplyIdResponse>(await this.doRPCRequest("QueryPageByApplyId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPageByApplyIdResponse({}));
  }

  async queryPageByApplyId(request: QueryPageByApplyIdRequest): Promise<QueryPageByApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPageByApplyIdWithOptions(request, runtime);
  }

  async queryProductWithOptions(request: QueryProductRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryProductResponse>(await this.doRPCRequest("QueryProduct", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryProductResponse({}));
  }

  async queryProduct(request: QueryProductRequest): Promise<QueryProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductWithOptions(request, runtime);
  }

  async queryProductCertInfoWithOptions(request: QueryProductCertInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductCertInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryProductCertInfoResponse>(await this.doRPCRequest("QueryProductCertInfo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryProductCertInfoResponse({}));
  }

  async queryProductCertInfo(request: QueryProductCertInfoRequest): Promise<QueryProductCertInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductCertInfoWithOptions(request, runtime);
  }

  async queryProductListWithOptions(request: QueryProductListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryProductListResponse>(await this.doRPCRequest("QueryProductList", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryProductListResponse({}));
  }

  async queryProductList(request: QueryProductListRequest): Promise<QueryProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  async queryProductTopicWithOptions(request: QueryProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryProductTopicResponse>(await this.doRPCRequest("QueryProductTopic", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryProductTopicResponse({}));
  }

  async queryProductTopic(request: QueryProductTopicRequest): Promise<QueryProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductTopicWithOptions(request, runtime);
  }

  async querySceneRuleWithOptions(request: QuerySceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<QuerySceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySceneRuleResponse>(await this.doRPCRequest("QuerySceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySceneRuleResponse({}));
  }

  async querySceneRule(request: QuerySceneRuleRequest): Promise<QuerySceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySceneRuleWithOptions(request, runtime);
  }

  async querySubscribeRelationWithOptions(request: QuerySubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySubscribeRelationResponse>(await this.doRPCRequest("QuerySubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySubscribeRelationResponse({}));
  }

  async querySubscribeRelation(request: QuerySubscribeRelationRequest): Promise<QuerySubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubscribeRelationWithOptions(request, runtime);
  }

  async querySummarySceneRuleLogWithOptions(request: QuerySummarySceneRuleLogRequest, runtime: $Util.RuntimeOptions): Promise<QuerySummarySceneRuleLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySummarySceneRuleLogResponse>(await this.doRPCRequest("QuerySummarySceneRuleLog", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySummarySceneRuleLogResponse({}));
  }

  async querySummarySceneRuleLog(request: QuerySummarySceneRuleLogRequest): Promise<QuerySummarySceneRuleLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySummarySceneRuleLogWithOptions(request, runtime);
  }

  async querySuperDeviceGroupWithOptions(request: QuerySuperDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QuerySuperDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySuperDeviceGroupResponse>(await this.doRPCRequest("QuerySuperDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySuperDeviceGroupResponse({}));
  }

  async querySuperDeviceGroup(request: QuerySuperDeviceGroupRequest): Promise<QuerySuperDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySuperDeviceGroupWithOptions(request, runtime);
  }

  async queryTaskWithOptions(request: QueryTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTaskResponse>(await this.doRPCRequest("QueryTask", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTaskResponse({}));
  }

  async queryTask(request: QueryTaskRequest): Promise<QueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskWithOptions(request, runtime);
  }

  async queryThingModelWithOptions(request: QueryThingModelRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryThingModelResponse>(await this.doRPCRequest("QueryThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryThingModelResponse({}));
  }

  async queryThingModel(request: QueryThingModelRequest): Promise<QueryThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelWithOptions(request, runtime);
  }

  async queryThingModelExtendConfigWithOptions(request: QueryThingModelExtendConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelExtendConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryThingModelExtendConfigResponse>(await this.doRPCRequest("QueryThingModelExtendConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryThingModelExtendConfigResponse({}));
  }

  async queryThingModelExtendConfig(request: QueryThingModelExtendConfigRequest): Promise<QueryThingModelExtendConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelExtendConfigWithOptions(request, runtime);
  }

  async queryThingModelExtendConfigPublishedWithOptions(request: QueryThingModelExtendConfigPublishedRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelExtendConfigPublishedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryThingModelExtendConfigPublishedResponse>(await this.doRPCRequest("QueryThingModelExtendConfigPublished", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryThingModelExtendConfigPublishedResponse({}));
  }

  async queryThingModelExtendConfigPublished(request: QueryThingModelExtendConfigPublishedRequest): Promise<QueryThingModelExtendConfigPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelExtendConfigPublishedWithOptions(request, runtime);
  }

  async queryThingModelPublishedWithOptions(request: QueryThingModelPublishedRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelPublishedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryThingModelPublishedResponse>(await this.doRPCRequest("QueryThingModelPublished", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryThingModelPublishedResponse({}));
  }

  async queryThingModelPublished(request: QueryThingModelPublishedRequest): Promise<QueryThingModelPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelPublishedWithOptions(request, runtime);
  }

  async queryTopicReverseRouteTableWithOptions(request: QueryTopicReverseRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<QueryTopicReverseRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTopicReverseRouteTableResponse>(await this.doRPCRequest("QueryTopicReverseRouteTable", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTopicReverseRouteTableResponse({}));
  }

  async queryTopicReverseRouteTable(request: QueryTopicReverseRouteTableRequest): Promise<QueryTopicReverseRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTopicReverseRouteTableWithOptions(request, runtime);
  }

  async queryTopicRouteTableWithOptions(request: QueryTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<QueryTopicRouteTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTopicRouteTableResponse>(await this.doRPCRequest("QueryTopicRouteTable", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTopicRouteTableResponse({}));
  }

  async queryTopicRouteTable(request: QueryTopicRouteTableRequest): Promise<QueryTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTopicRouteTableWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterDeviceResponse>(await this.doRPCRequest("RegisterDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async releaseEdgeDriverVersionWithOptions(request: ReleaseEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseEdgeDriverVersionResponse>(await this.doRPCRequest("ReleaseEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseEdgeDriverVersionResponse({}));
  }

  async releaseEdgeDriverVersion(request: ReleaseEdgeDriverVersionRequest): Promise<ReleaseEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEdgeDriverVersionWithOptions(request, runtime);
  }

  async removeThingTopoWithOptions(request: RemoveThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<RemoveThingTopoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveThingTopoResponse>(await this.doRPCRequest("RemoveThingTopo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveThingTopoResponse({}));
  }

  async removeThingTopo(request: RemoveThingTopoRequest): Promise<RemoveThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeThingTopoWithOptions(request, runtime);
  }

  async replaceEdgeInstanceGatewayWithOptions(request: ReplaceEdgeInstanceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceEdgeInstanceGatewayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceEdgeInstanceGatewayResponse>(await this.doRPCRequest("ReplaceEdgeInstanceGateway", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceEdgeInstanceGatewayResponse({}));
  }

  async replaceEdgeInstanceGateway(request: ReplaceEdgeInstanceGatewayRequest): Promise<ReplaceEdgeInstanceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceEdgeInstanceGatewayWithOptions(request, runtime);
  }

  async resetConsumerGroupPositionWithOptions(request: ResetConsumerGroupPositionRequest, runtime: $Util.RuntimeOptions): Promise<ResetConsumerGroupPositionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetConsumerGroupPositionResponse>(await this.doRPCRequest("ResetConsumerGroupPosition", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ResetConsumerGroupPositionResponse({}));
  }

  async resetConsumerGroupPosition(request: ResetConsumerGroupPositionRequest): Promise<ResetConsumerGroupPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetConsumerGroupPositionWithOptions(request, runtime);
  }

  async resetThingWithOptions(request: ResetThingRequest, runtime: $Util.RuntimeOptions): Promise<ResetThingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetThingResponse>(await this.doRPCRequest("ResetThing", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ResetThingResponse({}));
  }

  async resetThing(request: ResetThingRequest): Promise<ResetThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetThingWithOptions(request, runtime);
  }

  async rRpcWithOptions(request: RRpcRequest, runtime: $Util.RuntimeOptions): Promise<RRpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RRpcResponse>(await this.doRPCRequest("RRpc", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RRpcResponse({}));
  }

  async rRpc(request: RRpcRequest): Promise<RRpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rRpcWithOptions(request, runtime);
  }

  async saveDevicePropWithOptions(request: SaveDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<SaveDevicePropResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveDevicePropResponse>(await this.doRPCRequest("SaveDeviceProp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SaveDevicePropResponse({}));
  }

  async saveDeviceProp(request: SaveDevicePropRequest): Promise<SaveDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDevicePropWithOptions(request, runtime);
  }

  async setDeviceDesiredPropertyWithOptions(request: SetDeviceDesiredPropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceDesiredPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDeviceDesiredPropertyResponse>(await this.doRPCRequest("SetDeviceDesiredProperty", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDeviceDesiredPropertyResponse({}));
  }

  async setDeviceDesiredProperty(request: SetDeviceDesiredPropertyRequest): Promise<SetDeviceDesiredPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceDesiredPropertyWithOptions(request, runtime);
  }

  async setDeviceGroupTagsWithOptions(request: SetDeviceGroupTagsRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceGroupTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDeviceGroupTagsResponse>(await this.doRPCRequest("SetDeviceGroupTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDeviceGroupTagsResponse({}));
  }

  async setDeviceGroupTags(request: SetDeviceGroupTagsRequest): Promise<SetDeviceGroupTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceGroupTagsWithOptions(request, runtime);
  }

  async setDevicePropertyWithOptions(request: SetDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicePropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDevicePropertyResponse>(await this.doRPCRequest("SetDeviceProperty", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDevicePropertyResponse({}));
  }

  async setDeviceProperty(request: SetDevicePropertyRequest): Promise<SetDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicePropertyWithOptions(request, runtime);
  }

  async setDevicesPropertyWithOptions(request: SetDevicesPropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicesPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDevicesPropertyResponse>(await this.doRPCRequest("SetDevicesProperty", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDevicesPropertyResponse({}));
  }

  async setDevicesProperty(request: SetDevicesPropertyRequest): Promise<SetDevicesPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicesPropertyWithOptions(request, runtime);
  }

  async setEdgeInstanceDriverConfigsWithOptions(request: SetEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<SetEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetEdgeInstanceDriverConfigsResponse>(await this.doRPCRequest("SetEdgeInstanceDriverConfigs", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetEdgeInstanceDriverConfigsResponse({}));
  }

  async setEdgeInstanceDriverConfigs(request: SetEdgeInstanceDriverConfigsRequest): Promise<SetEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async setProductCertInfoWithOptions(request: SetProductCertInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetProductCertInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetProductCertInfoResponse>(await this.doRPCRequest("SetProductCertInfo", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetProductCertInfoResponse({}));
  }

  async setProductCertInfo(request: SetProductCertInfoRequest): Promise<SetProductCertInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setProductCertInfoWithOptions(request, runtime);
  }

  async speechByCombinationWithOptions(request: SpeechByCombinationRequest, runtime: $Util.RuntimeOptions): Promise<SpeechByCombinationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SpeechByCombinationResponse>(await this.doRPCRequest("SpeechByCombination", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SpeechByCombinationResponse({}));
  }

  async speechByCombination(request: SpeechByCombinationRequest): Promise<SpeechByCombinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.speechByCombinationWithOptions(request, runtime);
  }

  async startCpuWithOptions(request: StartCpuRequest, runtime: $Util.RuntimeOptions): Promise<StartCpuResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartCpuResponse>(await this.doRPCRequest("StartCpu", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartCpuResponse({}));
  }

  async startCpu(request: StartCpuRequest): Promise<StartCpuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCpuWithOptions(request, runtime);
  }

  async startRuleWithOptions(request: StartRuleRequest, runtime: $Util.RuntimeOptions): Promise<StartRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRuleResponse>(await this.doRPCRequest("StartRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartRuleResponse({}));
  }

  async startRule(request: StartRuleRequest): Promise<StartRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRuleWithOptions(request, runtime);
  }

  async stopRuleWithOptions(request: StopRuleRequest, runtime: $Util.RuntimeOptions): Promise<StopRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopRuleResponse>(await this.doRPCRequest("StopRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopRuleResponse({}));
  }

  async stopRule(request: StopRuleRequest): Promise<StopRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRuleWithOptions(request, runtime);
  }

  async transformClientIdWithOptions(request: TransformClientIdRequest, runtime: $Util.RuntimeOptions): Promise<TransformClientIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransformClientIdResponse>(await this.doRPCRequest("TransformClientId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new TransformClientIdResponse({}));
  }

  async transformClientId(request: TransformClientIdRequest): Promise<TransformClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformClientIdWithOptions(request, runtime);
  }

  async triggerSceneRuleWithOptions(request: TriggerSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<TriggerSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TriggerSceneRuleResponse>(await this.doRPCRequest("TriggerSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new TriggerSceneRuleResponse({}));
  }

  async triggerSceneRule(request: TriggerSceneRuleRequest): Promise<TriggerSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerSceneRuleWithOptions(request, runtime);
  }

  async unbindApplicationFromEdgeInstanceWithOptions(request: UnbindApplicationFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindApplicationFromEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindApplicationFromEdgeInstanceResponse>(await this.doRPCRequest("UnbindApplicationFromEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindApplicationFromEdgeInstanceResponse({}));
  }

  async unbindApplicationFromEdgeInstance(request: UnbindApplicationFromEdgeInstanceRequest): Promise<UnbindApplicationFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindApplicationFromEdgeInstanceWithOptions(request, runtime);
  }

  async unbindDriverFromEdgeInstanceWithOptions(request: UnbindDriverFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDriverFromEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindDriverFromEdgeInstanceResponse>(await this.doRPCRequest("UnbindDriverFromEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindDriverFromEdgeInstanceResponse({}));
  }

  async unbindDriverFromEdgeInstance(request: UnbindDriverFromEdgeInstanceRequest): Promise<UnbindDriverFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDriverFromEdgeInstanceWithOptions(request, runtime);
  }

  async unbindRoleFromEdgeInstanceWithOptions(request: UnbindRoleFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindRoleFromEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindRoleFromEdgeInstanceResponse>(await this.doRPCRequest("UnbindRoleFromEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindRoleFromEdgeInstanceResponse({}));
  }

  async unbindRoleFromEdgeInstance(request: UnbindRoleFromEdgeInstanceRequest): Promise<UnbindRoleFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindRoleFromEdgeInstanceWithOptions(request, runtime);
  }

  async unbindSceneRuleFromEdgeInstanceWithOptions(request: UnbindSceneRuleFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSceneRuleFromEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindSceneRuleFromEdgeInstanceResponse>(await this.doRPCRequest("UnbindSceneRuleFromEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindSceneRuleFromEdgeInstanceResponse({}));
  }

  async unbindSceneRuleFromEdgeInstance(request: UnbindSceneRuleFromEdgeInstanceRequest): Promise<UnbindSceneRuleFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSceneRuleFromEdgeInstanceWithOptions(request, runtime);
  }

  async updateConsumerGroupWithOptions(request: UpdateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConsumerGroupResponse>(await this.doRPCRequest("UpdateConsumerGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConsumerGroupResponse({}));
  }

  async updateConsumerGroup(request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConsumerGroupWithOptions(request, runtime);
  }

  async updateDeviceGroupWithOptions(request: UpdateDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceGroupResponse>(await this.doRPCRequest("UpdateDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceGroupResponse({}));
  }

  async updateDeviceGroup(request: UpdateDeviceGroupRequest): Promise<UpdateDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceGroupWithOptions(request, runtime);
  }

  async updateDeviceShadowWithOptions(request: UpdateDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceShadowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceShadowResponse>(await this.doRPCRequest("UpdateDeviceShadow", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceShadowResponse({}));
  }

  async updateDeviceShadow(request: UpdateDeviceShadowRequest): Promise<UpdateDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceShadowWithOptions(request, runtime);
  }

  async updateEdgeDriverVersionWithOptions(request: UpdateEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeDriverVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEdgeDriverVersionResponse>(await this.doRPCRequest("UpdateEdgeDriverVersion", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEdgeDriverVersionResponse({}));
  }

  async updateEdgeDriverVersion(request: UpdateEdgeDriverVersionRequest): Promise<UpdateEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeDriverVersionWithOptions(request, runtime);
  }

  async updateEdgeInstanceWithOptions(request: UpdateEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEdgeInstanceResponse>(await this.doRPCRequest("UpdateEdgeInstance", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEdgeInstanceResponse({}));
  }

  async updateEdgeInstance(request: UpdateEdgeInstanceRequest): Promise<UpdateEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeInstanceWithOptions(request, runtime);
  }

  async updateEdgeInstanceChannelWithOptions(request: UpdateEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEdgeInstanceChannelResponse>(await this.doRPCRequest("UpdateEdgeInstanceChannel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEdgeInstanceChannelResponse({}));
  }

  async updateEdgeInstanceChannel(request: UpdateEdgeInstanceChannelRequest): Promise<UpdateEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeInstanceChannelWithOptions(request, runtime);
  }

  async updateJobWithOptions(request: UpdateJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateJobResponse>(await this.doRPCRequest("UpdateJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateJobResponse({}));
  }

  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  async updateOTAModuleWithOptions(request: UpdateOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOTAModuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOTAModuleResponse>(await this.doRPCRequest("UpdateOTAModule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOTAModuleResponse({}));
  }

  async updateOTAModule(request: UpdateOTAModuleRequest): Promise<UpdateOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOTAModuleWithOptions(request, runtime);
  }

  async updateProductWithOptions(request: UpdateProductRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProductResponse>(await this.doRPCRequest("UpdateProduct", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProductResponse({}));
  }

  async updateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

  async updateProductFilterConfigWithOptions(request: UpdateProductFilterConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductFilterConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProductFilterConfigResponse>(await this.doRPCRequest("UpdateProductFilterConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProductFilterConfigResponse({}));
  }

  async updateProductFilterConfig(request: UpdateProductFilterConfigRequest): Promise<UpdateProductFilterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductFilterConfigWithOptions(request, runtime);
  }

  async updateProductTagsWithOptions(request: UpdateProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProductTagsResponse>(await this.doRPCRequest("UpdateProductTags", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProductTagsResponse({}));
  }

  async updateProductTags(request: UpdateProductTagsRequest): Promise<UpdateProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductTagsWithOptions(request, runtime);
  }

  async updateProductTopicWithOptions(request: UpdateProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProductTopicResponse>(await this.doRPCRequest("UpdateProductTopic", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProductTopicResponse({}));
  }

  async updateProductTopic(request: UpdateProductTopicRequest): Promise<UpdateProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductTopicWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRuleResponse>(await this.doRPCRequest("UpdateRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateRuleActionWithOptions(request: UpdateRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRuleActionResponse>(await this.doRPCRequest("UpdateRuleAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRuleActionResponse({}));
  }

  async updateRuleAction(request: UpdateRuleActionRequest): Promise<UpdateRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleActionWithOptions(request, runtime);
  }

  async updateSceneRuleWithOptions(request: UpdateSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSceneRuleResponse>(await this.doRPCRequest("UpdateSceneRule", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSceneRuleResponse({}));
  }

  async updateSceneRule(request: UpdateSceneRuleRequest): Promise<UpdateSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneRuleWithOptions(request, runtime);
  }

  async updateSubscribeRelationWithOptions(request: UpdateSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubscribeRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSubscribeRelationResponse>(await this.doRPCRequest("UpdateSubscribeRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSubscribeRelationResponse({}));
  }

  async updateSubscribeRelation(request: UpdateSubscribeRelationRequest): Promise<UpdateSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubscribeRelationWithOptions(request, runtime);
  }

  async updateThingModelWithOptions(request: UpdateThingModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateThingModelResponse>(await this.doRPCRequest("UpdateThingModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateThingModelResponse({}));
  }

  async updateThingModel(request: UpdateThingModelRequest): Promise<UpdateThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingModelWithOptions(request, runtime);
  }

  async updateThingModelValidationConfigWithOptions(request: UpdateThingModelValidationConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingModelValidationConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateThingModelValidationConfigResponse>(await this.doRPCRequest("UpdateThingModelValidationConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateThingModelValidationConfigResponse({}));
  }

  async updateThingModelValidationConfig(request: UpdateThingModelValidationConfigRequest): Promise<UpdateThingModelValidationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingModelValidationConfigWithOptions(request, runtime);
  }

  async updateThingScriptWithOptions(request: UpdateThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateThingScriptResponse>(await this.doRPCRequest("UpdateThingScript", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateThingScriptResponse({}));
  }

  async updateThingScript(request: UpdateThingScriptRequest): Promise<UpdateThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingScriptWithOptions(request, runtime);
  }

}
