// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActiveCaCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveCaCertificateResponseBody extends $tea.Model {
  requestId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateRequest extends $tea.Model {
  caSn?: string;
  deviceSn?: string;
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateResponseBody extends $tea.Model {
  deviceSn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveDeviceCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveDeviceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenRequest extends $tea.Model {
  actions?: string;
  expireTime?: number;
  instanceId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      expireTime: 'number',
      instanceId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsRequest extends $tea.Model {
  clientIdList?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBody extends $tea.Model {
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatusList: 'OnlineStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatusList: { 'type': 'array', 'itemType': BatchQuerySessionByClientIdsResponseBodyOnlineStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchQuerySessionByClientIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchQuerySessionByClientIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdResponseBody extends $tea.Model {
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

export class CreateGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateResponseBody extends $tea.Model {
  requestId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateRequest extends $tea.Model {
  caSn?: string;
  deviceSn?: string;
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateResponseBody extends $tea.Model {
  deviceSn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeviceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupIdResponseBody extends $tea.Model {
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

export class DeleteGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponseBody extends $tea.Model {
  data?: GetCaCertificateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCaCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateRequest extends $tea.Model {
  caSn?: string;
  deviceSn?: string;
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponseBody extends $tea.Model {
  data?: GetDeviceCertificateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDeviceCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBody extends $tea.Model {
  deviceCredential?: GetDeviceCredentialResponseBodyDeviceCredential;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: GetDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeRequest extends $tea.Model {
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeResponseBody extends $tea.Model {
  registerCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registerCode: 'RegisterCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registerCode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegisterCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegisterCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegisterCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateResponseBody extends $tea.Model {
  requestId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InactivateCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InactivateCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateRequest extends $tea.Model {
  caSn?: string;
  deviceSn?: string;
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
      mqttInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateResponseBody extends $tea.Model {
  deviceSn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivateDeviceCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InactivateDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InactivateDeviceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  pageNo?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBody extends $tea.Model {
  data?: ListCaCertificateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCaCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateRequest extends $tea.Model {
  mqttInstanceId?: string;
  pageNo?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBody extends $tea.Model {
  data?: ListDeviceCertificateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeviceCertificateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnRequest extends $tea.Model {
  caSn?: string;
  mqttInstanceId?: string;
  pageNo?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBody extends $tea.Model {
  data?: ListDeviceCertificateByCaSnResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeviceCertificateByCaSnResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCertificateByCaSnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCertificateByCaSnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  nextToken?: string;
  pageNo?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponseBody extends $tea.Model {
  deviceCredentialClientIdList?: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredentialClientIdList: 'DeviceCredentialClientIdList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredentialClientIdList: ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeviceCredentialClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeviceCredentialClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdRequest extends $tea.Model {
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

export class ListGroupIdResponseBody extends $tea.Model {
  data?: ListGroupIdResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGroupIdResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceRequest extends $tea.Model {
  beginTime?: number;
  clientId?: string;
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  mqttRegionId?: string;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBody extends $tea.Model {
  currentPage?: number;
  deviceInfoList?: QueryMqttTraceDeviceResponseBodyDeviceInfoList[];
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceInfoList: 'DeviceInfoList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceInfoList: { 'type': 'array', 'itemType': QueryMqttTraceDeviceResponseBodyDeviceInfoList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientRequest extends $tea.Model {
  beginTime?: number;
  clientId?: string;
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  mqttRegionId?: string;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBody extends $tea.Model {
  currentPage?: number;
  messageOfClientList?: QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList[];
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageOfClientList: 'MessageOfClientList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageOfClientList: { 'type': 'array', 'itemType': QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessageOfClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessageOfClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  instanceId?: string;
  mqttRegionId?: string;
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBody extends $tea.Model {
  messageTraceLists?: QueryMqttTraceMessagePublishResponseBodyMessageTraceLists[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageTraceLists: 'MessageTraceLists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessagePublishResponseBodyMessageTraceLists },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessagePublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessagePublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeRequest extends $tea.Model {
  beginTime?: number;
  clientId?: string;
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  mqttRegionId?: string;
  msgId?: string;
  pageSize?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      msgId: 'MsgId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      msgId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBody extends $tea.Model {
  currentPage?: number;
  messageTraceLists?: QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists[];
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      messageTraceLists: 'MessageTraceLists',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      messageTraceLists: { 'type': 'array', 'itemType': QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists },
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMqttTraceMessageSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMqttTraceMessageSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdResponseBody extends $tea.Model {
  onlineStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatus: 'OnlineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByClientIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySessionByClientIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySessionByClientIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenRequest extends $tea.Model {
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponseBody extends $tea.Model {
  requestId?: string;
  tokenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenStatus: 'TokenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponseBody extends $tea.Model {
  deviceCredential?: RefreshDeviceCredentialResponseBodyDeviceCredential;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: RefreshDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateRequest extends $tea.Model {
  caContent?: string;
  caName?: string;
  mqttInstanceId?: string;
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      mqttInstanceId: 'MqttInstanceId',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      mqttInstanceId: 'string',
      verificationContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateResponseBody extends $tea.Model {
  requestId?: string;
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterCaCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterCaCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterCaCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponseBody extends $tea.Model {
  deviceCredential?: RegisterDeviceCredentialResponseBodyDeviceCredential;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCredential: 'DeviceCredential',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCredential: RegisterDeviceCredentialResponseBodyDeviceCredential,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenRequest extends $tea.Model {
  instanceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenResponseBody extends $tea.Model {
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

export class RevokeTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  instanceId?: string;
  mqttTopic?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mqttTopic: 'MqttTopic',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mqttTopic: 'string',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  msgId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialRequest extends $tea.Model {
  clientId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnRegisterDeviceCredentialResponseBody extends $tea.Model {
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

export class UnRegisterDeviceCredentialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnRegisterDeviceCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnRegisterDeviceCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $tea.Model {
  clientId?: string;
  onlineStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      onlineStatus: 'OnlineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      onlineStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCaCertificateResponseBodyData extends $tea.Model {
  caContent?: string;
  caName?: string;
  registrationCode?: string;
  sn?: string;
  status?: string;
  validBegin?: string;
  validEnd?: string;
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      registrationCode: 'RegistrationCode',
      sn: 'Sn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      registrationCode: 'string',
      sn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
      verificationContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponseBodyData extends $tea.Model {
  caSn?: string;
  deviceContent?: string;
  deviceName?: string;
  deviceSn?: string;
  status?: string;
  validBegin?: string;
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  clientId?: string;
  createTime?: number;
  deviceAccessKeyId?: string;
  deviceAccessKeySecret?: string;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBodyDataCaCertificateVOS extends $tea.Model {
  caContent?: string;
  caName?: string;
  registrationCode?: string;
  sn?: string;
  status?: string;
  validBegin?: string;
  validEnd?: string;
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      registrationCode: 'RegistrationCode',
      sn: 'Sn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      registrationCode: 'string',
      sn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
      verificationContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCaCertificateResponseBodyData extends $tea.Model {
  caCertificateVOS?: ListCaCertificateResponseBodyDataCaCertificateVOS[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      caCertificateVOS: 'CaCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertificateVOS: { 'type': 'array', 'itemType': ListCaCertificateResponseBodyDataCaCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBodyDataDeviceCertificateVOS extends $tea.Model {
  caSn?: string;
  deviceContent?: string;
  deviceName?: string;
  deviceSn?: string;
  status?: string;
  validBegin?: string;
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateResponseBodyData extends $tea.Model {
  deviceCertificateVOS?: ListDeviceCertificateResponseBodyDataDeviceCertificateVOS[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCertificateVOS: 'DeviceCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCertificateVOS: { 'type': 'array', 'itemType': ListDeviceCertificateResponseBodyDataDeviceCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS extends $tea.Model {
  caSn?: string;
  deviceContent?: string;
  deviceName?: string;
  deviceSn?: string;
  status?: string;
  validBegin?: string;
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCertificateByCaSnResponseBodyData extends $tea.Model {
  deviceCertificateVOS?: ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCertificateVOS: 'DeviceCertificateVOS',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCertificateVOS: { 'type': 'array', 'itemType': ListDeviceCertificateByCaSnResponseBodyDataDeviceCertificateVOS },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceCredentialClientIdResponseBodyDeviceCredentialClientIdList extends $tea.Model {
  clientIdList?: string[];
  nextToken?: string;
  pageNo?: string;
  pageSize?: string;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdList: 'ClientIdList',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupIdResponseBodyData extends $tea.Model {
  createTime?: number;
  groupId?: string;
  independentNaming?: boolean;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBodyDeviceInfoList extends $tea.Model {
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  channelId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      channelId: 'ChannelId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      channelId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList extends $tea.Model {
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  clientId?: string;
  msgId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessagePublishResponseBodyMessageTraceLists extends $tea.Model {
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  clientId?: string;
  msgId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists extends $tea.Model {
  action?: string;
  actionCode?: string;
  actionInfo?: string;
  clientId?: string;
  msgId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionCode: 'ActionCode',
      actionInfo: 'ActionInfo',
      clientId: 'ClientId',
      msgId: 'MsgId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionCode: 'string',
      actionInfo: 'string',
      clientId: 'string',
      msgId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  clientId?: string;
  createTime?: number;
  deviceAccessKeyId?: string;
  deviceAccessKeySecret?: string;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceCredentialResponseBodyDeviceCredential extends $tea.Model {
  clientId?: string;
  createTime?: number;
  deviceAccessKeyId?: string;
  deviceAccessKeySecret?: string;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      createTime: 'CreateTime',
      deviceAccessKeyId: 'DeviceAccessKeyId',
      deviceAccessKeySecret: 'DeviceAccessKeySecret',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      createTime: 'number',
      deviceAccessKeyId: 'string',
      deviceAccessKeySecret: 'string',
      instanceId: 'string',
      updateTime: 'number',
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
    this._endpoint = this.getEndpoint("onsmqtt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activeCaCertificateWithOptions(request: ActiveCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ActiveCaCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveCaCertificateResponse>(await this.callApi(params, req, runtime), new ActiveCaCertificateResponse({}));
  }

  async activeCaCertificate(request: ActiveCaCertificateRequest): Promise<ActiveCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeCaCertificateWithOptions(request, runtime);
  }

  async activeDeviceCertificateWithOptions(request: ActiveDeviceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ActiveDeviceCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!Util.isUnset(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveDeviceCertificateResponse>(await this.callApi(params, req, runtime), new ActiveDeviceCertificateResponse({}));
  }

  async activeDeviceCertificate(request: ActiveDeviceCertificateRequest): Promise<ActiveDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeDeviceCertificateWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request ApplyTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApplyTokenResponse
   */
  async applyTokenWithOptions(request: ApplyTokenRequest, runtime: $Util.RuntimeOptions): Promise<ApplyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyTokenResponse>(await this.callApi(params, req, runtime), new ApplyTokenResponse({}));
  }

  /**
    * *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request ApplyTokenRequest
    * @return ApplyTokenResponse
   */
  async applyToken(request: ApplyTokenRequest): Promise<ApplyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  /**
    * *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](~~163047~~).
    * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
    * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request BatchQuerySessionByClientIdsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIdsWithOptions(request: BatchQuerySessionByClientIdsRequest, runtime: $Util.RuntimeOptions): Promise<BatchQuerySessionByClientIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchQuerySessionByClientIds",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchQuerySessionByClientIdsResponse>(await this.callApi(params, req, runtime), new BatchQuerySessionByClientIdsResponse({}));
  }

  /**
    * *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](~~163047~~).
    * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
    * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request BatchQuerySessionByClientIdsRequest
    * @return BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIds(request: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  /**
    * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request CreateGroupIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateGroupIdResponse
   */
  async createGroupIdWithOptions(request: CreateGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupIdResponse>(await this.callApi(params, req, runtime), new CreateGroupIdResponse({}));
  }

  /**
    * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request CreateGroupIdRequest
    * @return CreateGroupIdResponse
   */
  async createGroupId(request: CreateGroupIdRequest): Promise<CreateGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  async deleteCaCertificateWithOptions(request: DeleteCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCaCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCaCertificateResponse>(await this.callApi(params, req, runtime), new DeleteCaCertificateResponse({}));
  }

  async deleteCaCertificate(request: DeleteCaCertificateRequest): Promise<DeleteCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCaCertificateWithOptions(request, runtime);
  }

  async deleteDeviceCertificateWithOptions(request: DeleteDeviceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!Util.isUnset(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeviceCertificateResponse>(await this.callApi(params, req, runtime), new DeleteDeviceCertificateResponse({}));
  }

  async deleteDeviceCertificate(request: DeleteDeviceCertificateRequest): Promise<DeleteDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceCertificateWithOptions(request, runtime);
  }

  /**
    * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request DeleteGroupIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteGroupIdResponse
   */
  async deleteGroupIdWithOptions(request: DeleteGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupIdResponse>(await this.callApi(params, req, runtime), new DeleteGroupIdResponse({}));
  }

  /**
    * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request DeleteGroupIdRequest
    * @return DeleteGroupIdResponse
   */
  async deleteGroupId(request: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  async getCaCertificateWithOptions(request: GetCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetCaCertificateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCaCertificateResponse>(await this.callApi(params, req, runtime), new GetCaCertificateResponse({}));
  }

  async getCaCertificate(request: GetCaCertificateRequest): Promise<GetCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCaCertificateWithOptions(request, runtime);
  }

  async getDeviceCertificateWithOptions(request: GetDeviceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceCertificateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceCertificateResponse>(await this.callApi(params, req, runtime), new GetDeviceCertificateResponse({}));
  }

  async getDeviceCertificate(request: GetDeviceCertificateRequest): Promise<GetDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCertificateWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request GetDeviceCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDeviceCredentialResponse
   */
  async getDeviceCredentialWithOptions(request: GetDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceCredentialResponse>(await this.callApi(params, req, runtime), new GetDeviceCredentialResponse({}));
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request GetDeviceCredentialRequest
    * @return GetDeviceCredentialResponse
   */
  async getDeviceCredential(request: GetDeviceCredentialRequest): Promise<GetDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCredentialWithOptions(request, runtime);
  }

  async getRegisterCodeWithOptions(request: GetRegisterCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetRegisterCodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRegisterCode",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegisterCodeResponse>(await this.callApi(params, req, runtime), new GetRegisterCodeResponse({}));
  }

  async getRegisterCode(request: GetRegisterCodeRequest): Promise<GetRegisterCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisterCodeWithOptions(request, runtime);
  }

  async inactivateCaCertificateWithOptions(request: InactivateCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<InactivateCaCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!Util.isUnset(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InactivateCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InactivateCaCertificateResponse>(await this.callApi(params, req, runtime), new InactivateCaCertificateResponse({}));
  }

  async inactivateCaCertificate(request: InactivateCaCertificateRequest): Promise<InactivateCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inactivateCaCertificateWithOptions(request, runtime);
  }

  async inactivateDeviceCertificateWithOptions(request: InactivateDeviceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<InactivateDeviceCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!Util.isUnset(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InactivateDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InactivateDeviceCertificateResponse>(await this.callApi(params, req, runtime), new InactivateDeviceCertificateResponse({}));
  }

  async inactivateDeviceCertificate(request: InactivateDeviceCertificateRequest): Promise<InactivateDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inactivateDeviceCertificateWithOptions(request, runtime);
  }

  async listCaCertificateWithOptions(request: ListCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListCaCertificateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCaCertificateResponse>(await this.callApi(params, req, runtime), new ListCaCertificateResponse({}));
  }

  async listCaCertificate(request: ListCaCertificateRequest): Promise<ListCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCaCertificateWithOptions(request, runtime);
  }

  async listDeviceCertificateWithOptions(request: ListDeviceCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceCertificateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceCertificateResponse>(await this.callApi(params, req, runtime), new ListDeviceCertificateResponse({}));
  }

  async listDeviceCertificate(request: ListDeviceCertificateRequest): Promise<ListDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCertificateWithOptions(request, runtime);
  }

  async listDeviceCertificateByCaSnWithOptions(request: ListDeviceCertificateByCaSnRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceCertificateByCaSnResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceCertificateByCaSn",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceCertificateByCaSnResponse>(await this.callApi(params, req, runtime), new ListDeviceCertificateByCaSnResponse({}));
  }

  async listDeviceCertificateByCaSn(request: ListDeviceCertificateByCaSnRequest): Promise<ListDeviceCertificateByCaSnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCertificateByCaSnWithOptions(request, runtime);
  }

  async listDeviceCredentialClientIdWithOptions(request: ListDeviceCredentialClientIdRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceCredentialClientIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListDeviceCredentialClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceCredentialClientIdResponse>(await this.callApi(params, req, runtime), new ListDeviceCredentialClientIdResponse({}));
  }

  async listDeviceCredentialClientId(request: ListDeviceCredentialClientIdRequest): Promise<ListDeviceCredentialClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCredentialClientIdWithOptions(request, runtime);
  }

  /**
    * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request ListGroupIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGroupIdResponse
   */
  async listGroupIdWithOptions(request: ListGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupIdResponse>(await this.callApi(params, req, runtime), new ListGroupIdResponse({}));
  }

  /**
    * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request ListGroupIdRequest
    * @return ListGroupIdResponse
   */
  async listGroupId(request: ListGroupIdRequest): Promise<ListGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  /**
    * *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceDeviceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDeviceWithOptions(request: QueryMqttTraceDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMqttTraceDevice",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMqttTraceDeviceResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceDeviceResponse({}));
  }

  /**
    * *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceDeviceRequest
    * @return QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDevice(request: QueryMqttTraceDeviceRequest): Promise<QueryMqttTraceDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceDeviceWithOptions(request, runtime);
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessageOfClientRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClientWithOptions(request: QueryMqttTraceMessageOfClientRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessageOfClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMqttTraceMessageOfClient",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMqttTraceMessageOfClientResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessageOfClientResponse({}));
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessageOfClientRequest
    * @return QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClient(request: QueryMqttTraceMessageOfClientRequest): Promise<QueryMqttTraceMessageOfClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageOfClientWithOptions(request, runtime);
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessagePublishRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublishWithOptions(request: QueryMqttTraceMessagePublishRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessagePublishResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMqttTraceMessagePublish",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMqttTraceMessagePublishResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessagePublishResponse({}));
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessagePublishRequest
    * @return QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublish(request: QueryMqttTraceMessagePublishRequest): Promise<QueryMqttTraceMessagePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessagePublishWithOptions(request, runtime);
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessageSubscribeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribeWithOptions(request: QueryMqttTraceMessageSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<QueryMqttTraceMessageSubscribeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMqttTraceMessageSubscribe",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMqttTraceMessageSubscribeResponse>(await this.callApi(params, req, runtime), new QueryMqttTraceMessageSubscribeResponse({}));
  }

  /**
    * *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    *
    * @param request QueryMqttTraceMessageSubscribeRequest
    * @return QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribe(request: QueryMqttTraceMessageSubscribeRequest): Promise<QueryMqttTraceMessageSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageSubscribeWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request QuerySessionByClientIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QuerySessionByClientIdResponse
   */
  async querySessionByClientIdWithOptions(request: QuerySessionByClientIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySessionByClientIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySessionByClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySessionByClientIdResponse>(await this.callApi(params, req, runtime), new QuerySessionByClientIdResponse({}));
  }

  /**
    * *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request QuerySessionByClientIdRequest
    * @return QuerySessionByClientIdResponse
   */
  async querySessionByClientId(request: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request QueryTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryTokenResponse
   */
  async queryTokenWithOptions(request: QueryTokenRequest, runtime: $Util.RuntimeOptions): Promise<QueryTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTokenResponse>(await this.callApi(params, req, runtime), new QueryTokenResponse({}));
  }

  /**
    * *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request QueryTokenRequest
    * @return QueryTokenResponse
   */
  async queryToken(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  /**
    * ## [](#)Limits
    * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RefreshDeviceCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredentialWithOptions(request: RefreshDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDeviceCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDeviceCredentialResponse>(await this.callApi(params, req, runtime), new RefreshDeviceCredentialResponse({}));
  }

  /**
    * ## [](#)Limits
    * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RefreshDeviceCredentialRequest
    * @return RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredential(request: RefreshDeviceCredentialRequest): Promise<RefreshDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDeviceCredentialWithOptions(request, runtime);
  }

  async registerCaCertificateWithOptions(request: RegisterCaCertificateRequest, runtime: $Util.RuntimeOptions): Promise<RegisterCaCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caContent)) {
      query["CaContent"] = request.caContent;
    }

    if (!Util.isUnset(request.caName)) {
      query["CaName"] = request.caName;
    }

    if (!Util.isUnset(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!Util.isUnset(request.verificationContent)) {
      query["VerificationContent"] = request.verificationContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterCaCertificateResponse>(await this.callApi(params, req, runtime), new RegisterCaCertificateResponse({}));
  }

  async registerCaCertificate(request: RegisterCaCertificateRequest): Promise<RegisterCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerCaCertificateWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RegisterDeviceCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RegisterDeviceCredentialResponse
   */
  async registerDeviceCredentialWithOptions(request: RegisterDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new RegisterDeviceCredentialResponse({}));
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RegisterDeviceCredentialRequest
    * @return RegisterDeviceCredentialResponse
   */
  async registerDeviceCredential(request: RegisterDeviceCredentialRequest): Promise<RegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceCredentialWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RevokeTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RevokeTokenResponse
   */
  async revokeTokenWithOptions(request: RevokeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RevokeTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeTokenResponse>(await this.callApi(params, req, runtime), new RevokeTokenResponse({}));
  }

  /**
    * *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
    * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request RevokeTokenRequest
    * @return RevokeTokenResponse
   */
  async revokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  /**
    * *   The **SendMessage** operation is called by applications on cloud servers. It is complementary to the operation that is called by ApsaraMQ for MQTT clients to send messages. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](~~179160~~).
    * *   Before you call the **SendMessage** operation, make sure that the kernel version of your ApsaraMQ for MQTT instance is 3.3.0 or later. You can obtain the information about the kernel version on the [Instance Details](https://mqtt.console.aliyun.com) page that corresponds to the instance in the **ApsaraMQ for MQTT console**.
    * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT to forward messages to ApsaraMQ for RocketMQ, send the messages by using an SDK. For more information, see [Export data from ApsaraMQ for MQTT to other Alibaba Cloud services](~~174527~~). You can call the **SendMessage** operation up to 1,000 times per second. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **SendMessage** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For information about the billing details, see [Billing rules](~~52819~~).
    *
    * @param request SendMessageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SendMessageResponse
   */
  async sendMessageWithOptions(request: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mqttTopic)) {
      query["MqttTopic"] = request.mqttTopic;
    }

    if (!Util.isUnset(request.payload)) {
      query["Payload"] = request.payload;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  /**
    * *   The **SendMessage** operation is called by applications on cloud servers. It is complementary to the operation that is called by ApsaraMQ for MQTT clients to send messages. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](~~179160~~).
    * *   Before you call the **SendMessage** operation, make sure that the kernel version of your ApsaraMQ for MQTT instance is 3.3.0 or later. You can obtain the information about the kernel version on the [Instance Details](https://mqtt.console.aliyun.com) page that corresponds to the instance in the **ApsaraMQ for MQTT console**.
    * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT to forward messages to ApsaraMQ for RocketMQ, send the messages by using an SDK. For more information, see [Export data from ApsaraMQ for MQTT to other Alibaba Cloud services](~~174527~~). You can call the **SendMessage** operation up to 1,000 times per second. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **SendMessage** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For information about the billing details, see [Billing rules](~~52819~~).
    *
    * @param request SendMessageRequest
    * @return SendMessageResponse
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request UnRegisterDeviceCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredentialWithOptions(request: UnRegisterDeviceCredentialRequest, runtime: $Util.RuntimeOptions): Promise<UnRegisterDeviceCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnRegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnRegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new UnRegisterDeviceCredentialResponse({}));
  }

  /**
    * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](~~163047~~).
    * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](~~52819~~).
    *
    * @param request UnRegisterDeviceCredentialRequest
    * @return UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredential(request: UnRegisterDeviceCredentialRequest): Promise<UnRegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unRegisterDeviceCredentialWithOptions(request, runtime);
  }

}
