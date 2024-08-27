// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActiveCaCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @example
   * 007269004887******
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
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
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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

export class AddCustomAuthConnectBlackRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID of the device whose connections you want to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
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

export class AddCustomAuthConnectBlackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthConnectBlackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthConnectBlackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values: USER and CLIENT.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the Message Queue for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and the AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthIdentityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * Specify whether to allow or deny the permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The username or client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values: USER and CLIENT.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The permissions that you want to add.
   * 
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * The topic on which you want to add the permissions. Multi-level topics and wildcard characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAuthPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomAuthPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTokenRequest extends $tea.Model {
  /**
   * @remarks
   * The permission type of the token. Valid values:
   * 
   * *   **R**: read-only. You can only subscribe to the specified topics.
   * *   **W**: write-only. You can only send messages to the specified topics.
   * *   **R,W**: read and write. You can send messages to and subscribe to the specified topics. Separate **R** and **W** with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * R
   */
  actions?: string;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the token expires. Unit: milliseconds. The minimum validity period of a token is 60 seconds, and the maximum validity period of a token is 30 days. If you specify a validity period of more than 30 days for a token, no errors are returned. However, the token is valid only for 30 days.
   * 
   * For example, you want to specify a validity period of 60 seconds for a token. If the current system timestamp is 1609434061000, you must set this parameter to **1609434121000**. The value is calculated by using the following formula: 1609434061000 + 60 x 1000 = 1609434121000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609434121000
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topics on the ApsaraMQ for MQTT instance. Separate multiple topics with commas (,). Each token can be used to access up to 100 topics. Multiple topics are sorted in alphabetic order. MQTT wildcards, including single-level wildcards represented by plus signs (+) and multi-level wildcards represented by number signs (#), can be used for the Resources parameter that you register to apply for a token.
   * 
   * For example, if you set the **Resources** parameter to Topic1/+ when you apply for a token, the ApsaraMQ for MQTT client can manage the topics in Topic1/xxx. If you set the **Resources** parameter to Topic1/# when you apply for a token, the ApsaraMQ for MQTT client can manage topics of any level in Topic1/xxx/xxx/xxx.
   * 
   * >  ApsaraMQ for MQTT supports subtopics. You can specify subtopics in the code for messaging instead of configuring them in the ApsaraMQ for MQTT console. Forward slashes (/) are used to separate topics of different levels. For more information, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA/+
   */
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
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 31782AAF-D0CC-44C3-ABFD-1B500276****
   */
  requestId?: string;
  /**
   * @remarks
   * The token that is returned by the ApsaraMQ for MQTT broker.
   * 
   * >  Do not assume the length, format, or rule of the token to return. The actual returned token shall prevail.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
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
  /**
   * @remarks
   * The ApsaraMQ for MQTT clients.
   * 
   * This parameter is required.
   * 
   * @example
   * ClientIdList.1
   */
  clientIdList?: string[];
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * The status list of all queried ApsaraMQ for MQTT clients.
   */
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
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

export class CloseConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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

export class CloseConnectionResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the group that you want to create. The group ID must meet the following conventions:
   * 
   * *   The ID must be 7 to 64 characters in length. It must start with GID_ or GID- and can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The ID cannot be changed after the group is created. For more information, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
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
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 2C7D722D-0F3D-4415-A9CD-A464D82C****
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @example
   * 007269004887******
   */
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

export class DeleteCustomAuthConnectBlackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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

export class DeleteCustomAuthConnectBlackResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 317076B7-F946-46BC-A98F-4CF9777C****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthConnectBlackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthConnectBlackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11568B5B-13A8-4E72-9DBA-3A14F7D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthIdentityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic on which you want to grant permissions. Multi-level topics and Wildcard characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34063BCA-0946-49C1-B824-2ED2C905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomAuthPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomAuthPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356217374433****
   */
  deviceSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
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
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * The ID of the group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance from which you want to delete a group.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
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
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 0621DDD7-F0E9-4D35-8900-518116D6****
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * The client ID of the device whose access credential you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * The information about the access credential of the device.
   */
  deviceCredential?: GetDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DQDC0E****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
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
  /**
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registerCode?: string;
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @example
   * 007269004887******
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
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
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GID_xxx
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt-xxxxxxxx
   */
  instanceId?: string;
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance whose groups you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
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
  /**
   * @remarks
   * The details of a queried group.
   */
  data?: ListGroupIdResponseBodyData[];
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 95996EEB-D894-44FA-A87C-940F5CD9****
   */
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

export class QueryCustomAuthConnectBlackRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the client to be queried.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * xOfRU60sGEwN1OlFBIL8Ew==
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of clients to be queried. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthConnectBlackResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthConnectBlackResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthConnectBlackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthConnectBlackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTM4MTcxODk3NDQzMjQ1OSIsImV2ZW50SWQiOiJGMkUxOUE3QS1FM0Q0LTVCOEYtQkU4OS1CNkMyM0RBM0UyRjIiLCJsb2dJZCI6IjY2LTEzODE3MTg5NzQ0MzI0NTkiLCJydyI6IlciLCJ0aW1lIjoxNjc4MzI2MTI1MDAwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of identities to be queried. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthIdentityResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11568B5B-13A8-4E72-9DBA-3A14F7D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthIdentityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAThmKW2HkRgzo4G7IRRTK2fC6zZmAk6y0bwoNPFOOcSP
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of queries to be returned. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The topic whose authorization information you want to query. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      size: 'Size',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      nextToken: 'string',
      size: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCustomAuthPermissionResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryCustomAuthPermissionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCustomAuthPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621580400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose trace you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621584000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse time order of actions on the device. This means that the information about the latest action on the device is displayed as the first entry and the information about the earliest action on the device is displayed as the last entry.
   * *   **false**: The returned results are displayed in time order of actions on the device. This means that the information about the earliest action on the device is displayed as the first entry and the information about the latest action on the device is displayed as the last entry.
   * 
   * If you do not specify this parameter, the returned results are displayed in time order of actions on the device by default.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the action on the device.
   */
  deviceInfoList?: QueryMqttTraceDeviceResponseBodyDeviceInfoList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 317076B7-F946-46BC-A98F-4CF9777C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned actions on the device.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621591200000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section of the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse order of the time when messages are sent or received. This means that the latest sent or received message is displayed as the first entry and the earliest sent or received message is displayed as the last entry.
   * *   **false**: The returned results are displayed in order of the time when messages are sent or received. This means that the earliest sent or received message is displayed as the first entry and the latest sent or received message is displayed as the last entry.
   * 
   * If this parameter is not specified, the returned results are displayed in order of the time when messages are sent or received.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned messages.
   */
  messageOfClientList?: QueryMqttTraceMessageOfClientResponseBodyMessageOfClientList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * B096B9D6-62F3-4567-BB59-58D1362E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of messages returned.
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621591200000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773****
   */
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
  /**
   * @remarks
   * The message traces.
   */
  messageTraceLists?: QueryMqttTraceMessagePublishResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 69AD5550-BF22-438A-9202-A6E89185****
   */
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
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621936800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the client that subscribes to the message. If you do not specify this parameter, the IDs of all clients that subscribe to the message are returned.
   * 
   * @example
   * GID_test@@@consumer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section of the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AC1EC1B33D5978308DB17F3245E4****
   */
  msgId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse order of the time when messages are delivered. This means that the latest consumed message is displayed as the first entry and the earliest consumed message is displayed as the last entry.
   * *   **false**: The returned results are displayed in order of the time when messages are delivered. This means that the earliest consumed message is displayed as the first entry and the latest consumed message is displayed as the last entry.
   * 
   * If you do not specify this parameter, the returned results are displayed in order of time when messages are delivered.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The delivery trace of the queried message.
   */
  messageTraceLists?: QueryMqttTraceMessageSubscribeResponseBodyMessageTraceLists[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID that the system generates for the request. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * 4E685844-ADAF-4D85-9EAC-F9471E8C****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned delivery traces.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * Indicates whether the ApsaraMQ for MQTT client is connected to the ApsaraMQ for MQTT broker. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  onlineStatus?: boolean;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBBC0E****
   */
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
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
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
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 5C8AADD0-6A95-436D-AFA0-3405CCE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the queried token. Valid values:
   * 
   * *   **true**: indicates the token is valid.
   * *   **false**: indicates the token is invalid.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The client ID of the device whose access credential you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * The access credential of the device.
   */
  deviceCredential?: RefreshDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBDC0F****
   */
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
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
  /**
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @example
   * 007269004887******
   */
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
  /**
   * @remarks
   * The client ID of the device for which you want to create an access credential.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * The access credential of the device.
   */
  deviceCredential?: RegisterDeviceCredentialResponseBodyDeviceCredential;
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * E4581CCF-62AF-44D9-B5B4-D1DBDC0E****
   */
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
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com/).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that you want to revoke.
   * 
   * This parameter is required.
   * 
   * @example
   * LzMT+XLFl5s/YWJ/MlDz4t/Lq5HC1iGU1P28HAMaxYxn8aQbALNtml7QZKl9L9kPe6LqUb95tEVo+zUqOogs9+jZwDUSzsd4X4qaD3n2TrBEuMOqKkk1Xdrvu9VBQQvIYbz7MJWZDYC3DlW7gLEr33Cuj54iIhagtBi3epStJitsssWs7otY9zhKOSZxhr49G3d0bh35mwyP18EMvDas8UlzeSozsSrujNUqZXOGK0PEBSd+rWMGDJlCt6GFmJgm2JFY7PJwf/7OOSmUYIYFs5o/PuPpoTMF+hcVXMs+0yDukIMTOzG9m3t8k36PVrghFmnK6pC3Rt3mibjW****ng==
   */
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
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 833EDFCB-C447-4CE3-B21F-3A4C2D1B****
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
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic to which you want to send a message on the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  mqttTopic?: string;
  /**
   * @remarks
   * The message content, which is the payload of the message. We recommend that you encode the content in Base64 to prevent non-printable characters from being transmitted.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The unique message ID that is returned by the ApsaraMQ for MQTT broker after the message is sent.
   * 
   * @example
   * 0B736D997B7F45FF54E61C1C1B58****
   */
  msgId?: string;
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
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
  /**
   * @remarks
   * The client ID of the device whose access credential you want to deregister.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can obtain the instance ID on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
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
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * E4581CCD-62AF-44D9-B5B4-D1DBDC0E****
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

export class UpdateCustomAuthIdentityRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID if you set IdentityType to CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * This parameter is required.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthIdentityResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F00084A-7F07-4B15-BADA-8903A4FB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthIdentityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomAuthIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomAuthIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test/t1
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      instanceId: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8CC04203-679B-4DED-89D9-E7C2E979****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAuthPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomAuthPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCustomAuthPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT client. For more information about client IDs, see [Terms](https://help.aliyun.com/document_detail/42420.html).
   * 
   * @example
   * GID_test@0001
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether the ApsaraMQ for MQTT client is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registrationCode?: string;
  /**
   * @example
   * 00f26900ba87******
   */
  sn?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @example
   * 1969497303000
   */
  validEnd?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
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
  /**
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @example
   * 1969497303000
   */
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
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
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
  /**
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @example
   * 13274673-8f90-4630-bea1-9cccb25756ad2089******
   */
  registrationCode?: string;
  /**
   * @example
   * 007269004887******
   */
  sn?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @example
   * 1969497303000
   */
  validEnd?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
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
   * 1
   */
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
  /**
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @example
   * 1969497303000
   */
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
   * 1
   */
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
  /**
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @example
   * 1969497303000
   */
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
   * 1
   */
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
  /**
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 1564577317000
   */
  createTime?: number;
  /**
   * @remarks
   * The queried group that belongs to the ApsaraMQ for MQTT instance.
   * 
   * @example
   * GID_test1
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether a separate namespace is configured for the ApsaraMQ for MQTT instance. Valid values:
   * 
   * *   **true**: A separate namespace is configured for the ApsaraMQ for MQTT instance. Resource names must be unique within an ApsaraMQ for MQTT instance but can be the same across ApsaraMQ for MQTT instances.
   * *   **false**: No separate namespace is configured for the ApsaraMQ for MQTT instance. Resource names must be globally unique within an ApsaraMQ for MQTT instance and across ApsaraMQ for MQTT instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the group belongs.
   * 
   * @example
   * post-cn-45910tj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the group was last updated.
   * 
   * @example
   * 1564577317000
   */
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

export class QueryCustomAuthConnectBlackResponseBodyDataResults extends $tea.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * GID_TEST@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * CONNECT
   */
  permitAction?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      effect: 'Effect',
      permitAction: 'PermitAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      effect: 'string',
      permitAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthConnectBlackResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAZ0cM0HTqLXvgm7oMHWXcvc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned results.
   */
  results?: QueryCustomAuthConnectBlackResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthConnectBlackResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBodyDataResults extends $tea.Model {
  /**
   * @remarks
   * The client ID if IdentityType is set to CLIENT.
   * 
   * @example
   * GID_ICP@@@4d378084
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * 62a5916d71767185b48907d85c2efae2
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification mode. ORIGIN: compares the password and the AccessKey secret. SIGNED: uses the HMAC_SHA1 algorithm to sign the client ID to obtain a password and then compares the password.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      secret: 'string',
      signMode: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthIdentityResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * AAAAAXA+GzVqTutYpgkFjBrchKzuvSbpuTqtt6OF9tsC9QnJ
   */
  nextToken?: string;
  /**
   * @remarks
   * The returned results.
   */
  results?: QueryCustomAuthIdentityResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthIdentityResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBodyDataResults extends $tea.Model {
  /**
   * @remarks
   * Indicates whether to allow or deny access.
   * 
   * @example
   * ALLOW
   */
  effect?: string;
  /**
   * @remarks
   * The username or client ID.
   * 
   * @example
   * test
   */
  identity?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * 
   * *   USER
   * *   CLIENT
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The authorized permissions.
   * 
   * @example
   * PUB_SUB
   */
  permitAction?: string;
  /**
   * @remarks
   * The topic name. Multi-level topics and wildcard characters are supported.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      identity: 'Identity',
      identityType: 'IdentityType',
      permitAction: 'PermitAction',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      identity: 'string',
      identityType: 'string',
      permitAction: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomAuthPermissionResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
   * 
   * @example
   * AAAAAV/vsqTyeMlX1MIk7/b6NrZLIlsSVf49O04ac7HAmlBoaYspakK7ZZkR3vRDp5Y9Nz0EmuWYrtF+1qkUwuJzPk/qEto/FGxl5Kd+qdwNt3t8
   */
  nextToken?: string;
  /**
   * @remarks
   * The response results.
   */
  results?: QueryCustomAuthPermissionResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      results: { 'type': 'array', 'itemType': QueryCustomAuthPermissionResponseBodyDataResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMqttTraceDeviceResponseBodyDeviceInfoList extends $tea.Model {
  /**
   * @remarks
   * The action on the device. Valid values:
   * 
   * *   **connect**: The ApsaraMQ for MQTT client requests a connection to the ApsaraMQ for MQTT broker.
   * *   **close**: The TCP connection is closed.
   * *   **disconnect**: The ApsaraMQ for MQTT client requests a disconnection from the ApsaraMQ for MQTT broker.
   * 
   * @example
   * connect
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the device. Valid values:
   * 
   * *   **mqtt.trace.action.connect**: This value is returned if the value of Action is **connect**.
   * *   **mqtt.trace.action.close**: This value is returned if the value of Action is **close**.
   * *   **mqtt.trace.action.disconnect**: This value is returned if the value of Action is **disconnect**.
   * 
   * @example
   * mqtt.trace.action.connect
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the device. Valid values:
   * 
   * *   **accepted**: The ApsaraMQ for MQTT broker accepts the connection request from the ApsaraMQ for MQTT client.
   * *   **not authorized**: The TCP connection is closed because the permission verification of the client to access the instance fails.
   * *   **clientId conflict**: The TCP connection is closed due to a conflict in the ID of the ApsaraMQ for MQTT client.
   * *   **resource auth failed**: The TCP connection is closed because the permission verification for the ApsaraMQ for MQTT client to access the topic or group fails.
   * *   **no heart**: The TCP connection is closed because no heartbeat is detected on the client.
   * *   **closed by client**: The TCP connection is closed because an exception occurs on the client.
   * *   **disconnected by client**: The client requests a disconnection.
   * *   **invalid param**: The TCP connection is closed due to invalid request parameters.
   * *   **Socket IOException**: The TCP connection is closed due to network jitter or packet loss.
   * 
   * @example
   * accept
   */
  actionInfo?: string;
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * c69fe839209547fa9d073781b9cd****
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the action occurred on the device.
   * 
   * @example
   * 2021-05-21 15:51:54.867
   */
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
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: The ApsaraMQ for MQTT client sends the message.
   * *   **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * *   **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
   * 
   * @example
   * pub_mqtt
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.pub.mqtt**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **mqtt.trace.action.msg.sub**: This value is returned if the value of Action is **sub**.
   * *   **mqtt.trace.action.msg.push.offline**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The information returned for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Push To Mqtt Client**: This value is returned if the value of Action is **sub**.
   * *   **Push Offline Msg To Mqtt Client**: This value is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent or received.
   * 
   * @example
   * 2021-05-21 15:08:19.234
   */
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
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **pub_mqtt**: indicates that the message was sent by an ApsaraMQ for MQTT client.
   * *   **pub_mq**: indicates that the message was sent by an ApsaraMQ for RocketMQ client.
   * 
   * @example
   * pub_mqtt
   */
  action?: string;
  /**
   * @remarks
   * The returned code for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.pub.mqtt**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **mqtt.trace.action.msg.pub.mq**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * mqtt.trace.action.msg.pub.mqtt
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * *   **Pub From Mqtt Client**: This value is returned if the value of Action is **pub_mqtt**.
   * *   **Pub From MQ**: This value is returned if the value of Action is **pub_mq**.
   * 
   * @example
   * Pub From Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that sends the message.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773BD95
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was sent.
   * 
   * @example
   * 2021-05-21 15:08:19.210
   */
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
  /**
   * @remarks
   * The action on the message. Valid values:
   * 
   * *   **sub**: The ApsaraMQ for MQTT client subscribes to the message.
   * *   **push_offline**: The ApsaraMQ for MQTT broker pushes the offline message to the ApsaraMQ for MQTT client.
   * 
   * @example
   * sub
   */
  action?: string;
  /**
   * @remarks
   * The code returned for the action on the message. Valid values:
   * 
   * *   **mqtt.trace.action.msg.sub**: The value that is returned if the value of Action is **sub**.
   * *   **mqtt.trace.action.msg.push.offline**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * mqtt.trace.action.msg.sub
   */
  actionCode?: string;
  /**
   * @remarks
   * The returned information for the action on the message. Valid values:
   * 
   * *   **Push To Mqtt Client**: The value that is returned if the value of Action is **sub**.
   * *   **Push Offline Msg To Mqtt Client**: The value that is returned if the value of Action is **push_offline**.
   * 
   * @example
   * Push To Mqtt Client
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the client that subscribes to the message.
   * 
   * @example
   * GID_test@@@consumer
   */
  clientId?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AC1EC1B33D5978308DB17F3245E4****
   */
  msgId?: string;
  /**
   * @remarks
   * The time when the message was delivered.
   * 
   * @example
   * 2021-05-25 16:46:41.274
   */
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
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1605541382000
   */
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
  /**
   * @remarks
   * The client ID of the device.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was created. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
  createTime?: number;
  /**
   * @remarks
   * The AccessKey ID of the device.
   * 
   * @example
   * DC.Z5fXh9sRRVufyLi6wo****
   */
  deviceAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the device.
   * 
   * @example
   * DC.BJMkn4eMQJK2vaApTS****
   */
  deviceAccessKeySecret?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the access credential of the device was last updated. Unit: milliseconds.
   * 
   * @example
   * 1605541382000
   */
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

  /**
   * 激活CA证书
   * 
   * @param request - ActiveCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveCaCertificateResponse
   */
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

  /**
   * 激活CA证书
   * 
   * @param request - ActiveCaCertificateRequest
   * @returns ActiveCaCertificateResponse
   */
  async activeCaCertificate(request: ActiveCaCertificateRequest): Promise<ActiveCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeCaCertificateWithOptions(request, runtime);
  }

  /**
   * 激活设备证书
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveDeviceCertificateResponse
   */
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

  /**
   * 激活设备证书
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @returns ActiveDeviceCertificateResponse
   */
  async activeDeviceCertificate(request: ActiveDeviceCertificateRequest): Promise<ActiveDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Adds a device to the connection blacklist to disable connections from the device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlackWithOptions(request: AddCustomAuthConnectBlackRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomAuthConnectBlackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new AddCustomAuthConnectBlackResponse({}));
  }

  /**
   * Adds a device to the connection blacklist to disable connections from the device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlack(request: AddCustomAuthConnectBlackRequest): Promise<AddCustomAuthConnectBlackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Adds the information about identity authentication. The identity can be accurate to a client.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentityWithOptions(request: AddCustomAuthIdentityRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomAuthIdentityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new AddCustomAuthIdentityResponse({}));
  }

  /**
   * Adds the information about identity authentication. The identity can be accurate to a client.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentity(request: AddCustomAuthIdentityRequest): Promise<AddCustomAuthIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Adds permissions on topics. You must create a level-1 topic in the ApsaraMQ for MQTT console before you call this operation.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermissionWithOptions(request: AddCustomAuthPermissionRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomAuthPermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!Util.isUnset(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new AddCustomAuthPermissionResponse({}));
  }

  /**
   * Adds permissions on topics. You must create a level-1 topic in the ApsaraMQ for MQTT console before you call this operation.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermission(request: AddCustomAuthPermissionRequest): Promise<AddCustomAuthPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Applies for a token from ApsaraMQ for MQTT. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTokenResponse
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
   * Applies for a token from ApsaraMQ for MQTT. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **ApplyToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @returns ApplyTokenResponse
   */
  async applyToken(request: ApplyTokenRequest): Promise<ApplyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  /**
   * Queries the status of multiple ApsaraMQ for MQTT clients by client ID.
   * 
   * @remarks
   *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
   * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQuerySessionByClientIdsResponse
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
   * Queries the status of multiple ApsaraMQ for MQTT clients by client ID.
   * 
   * @remarks
   *   You can call the **BatchQuerySessionByClientIds** operation up to 100 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   You can call the **BatchQuerySessionByClientIds** operation to query the status of up to 10 ApsaraMQ for MQTT clients in a single query.
   * *   Each successful call to the **BatchQuerySessionByClientIds** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @returns BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIds(request: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  /**
   * 关闭设备连接
   * 
   * @param request - CloseConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseConnectionResponse
   */
  async closeConnectionWithOptions(request: CloseConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CloseConnectionResponse> {
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
      action: "CloseConnection",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseConnectionResponse>(await this.callApi(params, req, runtime), new CloseConnectionResponse({}));
  }

  /**
   * 关闭设备连接
   * 
   * @param request - CloseConnectionRequest
   * @returns CloseConnectionResponse
   */
  async closeConnection(request: CloseConnectionRequest): Promise<CloseConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeConnectionWithOptions(request, runtime);
  }

  /**
   * Creates a group ID. Before you connect producers and consumers to an ApsaraMQ for MQTT broker to send and receive messages, you must specify a unique ID for each client for identification. A client ID is in the format of \\<GroupID>@@@\\<DeviceID>. In the preceding format, DeviceID is the custom ID that you specify for the client, and GroupID is the ID of the group that you create on the ApsaraMQ for MQTT broker in advance.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupIdResponse
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
   * Creates a group ID. Before you connect producers and consumers to an ApsaraMQ for MQTT broker to send and receive messages, you must specify a unique ID for each client for identification. A client ID is in the format of \\<GroupID>@@@\\<DeviceID>. In the preceding format, DeviceID is the custom ID that you specify for the client, and GroupID is the ID of the group that you create on the ApsaraMQ for MQTT broker in advance.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @returns CreateGroupIdResponse
   */
  async createGroupId(request: CreateGroupIdRequest): Promise<CreateGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  /**
   * 删除CA证书
   * 
   * @param request - DeleteCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCaCertificateResponse
   */
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

  /**
   * 删除CA证书
   * 
   * @param request - DeleteCaCertificateRequest
   * @returns DeleteCaCertificateResponse
   */
  async deleteCaCertificate(request: DeleteCaCertificateRequest): Promise<DeleteCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCaCertificateWithOptions(request, runtime);
  }

  /**
   * 删除自定义权限连接黑名单
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlackWithOptions(request: DeleteCustomAuthConnectBlackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomAuthConnectBlackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthConnectBlackResponse({}));
  }

  /**
   * 删除自定义权限连接黑名单
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlack(request: DeleteCustomAuthConnectBlackRequest): Promise<DeleteCustomAuthConnectBlackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Deletes an identity for custom authorization.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentityWithOptions(request: DeleteCustomAuthIdentityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomAuthIdentityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthIdentityResponse({}));
  }

  /**
   * Deletes an identity for custom authorization.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentity(request: DeleteCustomAuthIdentityRequest): Promise<DeleteCustomAuthIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Deletes permissions on a topic.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermissionWithOptions(request: DeleteCustomAuthPermissionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomAuthPermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new DeleteCustomAuthPermissionResponse({}));
  }

  /**
   * Deletes permissions on a topic.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermission(request: DeleteCustomAuthPermissionRequest): Promise<DeleteCustomAuthPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * 删除设备证书
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeviceCertificateResponse
   */
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

  /**
   * 删除设备证书
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @returns DeleteDeviceCertificateResponse
   */
  async deleteDeviceCertificate(request: DeleteDeviceCertificateRequest): Promise<DeleteDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a group from an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupIdResponse
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
   * Deletes a group from an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @returns DeleteGroupIdResponse
   */
  async deleteGroupId(request: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  /**
   * 根据SN返回CA证书
   * 
   * @param request - GetCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaCertificateResponse
   */
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

  /**
   * 根据SN返回CA证书
   * 
   * @param request - GetCaCertificateRequest
   * @returns GetCaCertificateResponse
   */
  async getCaCertificate(request: GetCaCertificateRequest): Promise<GetCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCaCertificateWithOptions(request, runtime);
  }

  /**
   * 获取设备证书
   * 
   * @param request - GetDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCertificateResponse
   */
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

  /**
   * 获取设备证书
   * 
   * @param request - GetDeviceCertificateRequest
   * @returns GetDeviceCertificateResponse
   */
  async getDeviceCertificate(request: GetDeviceCertificateRequest): Promise<GetDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCredentialResponse
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
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @returns GetDeviceCredentialResponse
   */
  async getDeviceCredential(request: GetDeviceCredentialRequest): Promise<GetDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * 获取添加CA证书的注册码
   * 
   * @param request - GetRegisterCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegisterCodeResponse
   */
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

  /**
   * 获取添加CA证书的注册码
   * 
   * @param request - GetRegisterCodeRequest
   * @returns GetRegisterCodeResponse
   */
  async getRegisterCode(request: GetRegisterCodeRequest): Promise<GetRegisterCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegisterCodeWithOptions(request, runtime);
  }

  /**
   * 注销CA证书
   * 
   * @param request - InactivateCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateCaCertificateResponse
   */
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

  /**
   * 注销CA证书
   * 
   * @param request - InactivateCaCertificateRequest
   * @returns InactivateCaCertificateResponse
   */
  async inactivateCaCertificate(request: InactivateCaCertificateRequest): Promise<InactivateCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inactivateCaCertificateWithOptions(request, runtime);
  }

  /**
   * 注销设备证书
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateDeviceCertificateResponse
   */
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

  /**
   * 注销设备证书
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @returns InactivateDeviceCertificateResponse
   */
  async inactivateDeviceCertificate(request: InactivateDeviceCertificateRequest): Promise<InactivateDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inactivateDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * 根据实例ID 分页获取CA证书
   * 
   * @param request - ListCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCaCertificateResponse
   */
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

  /**
   * 根据实例ID 分页获取CA证书
   * 
   * @param request - ListCaCertificateRequest
   * @returns ListCaCertificateResponse
   */
  async listCaCertificate(request: ListCaCertificateRequest): Promise<ListCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCaCertificateWithOptions(request, runtime);
  }

  /**
   * 获取设备证书列表
   * 
   * @param request - ListDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateResponse
   */
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

  /**
   * 获取设备证书列表
   * 
   * @param request - ListDeviceCertificateRequest
   * @returns ListDeviceCertificateResponse
   */
  async listDeviceCertificate(request: ListDeviceCertificateRequest): Promise<ListDeviceCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * 获取设备证书列表
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateByCaSnResponse
   */
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

  /**
   * 获取设备证书列表
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @returns ListDeviceCertificateByCaSnResponse
   */
  async listDeviceCertificateByCaSn(request: ListDeviceCertificateByCaSnRequest): Promise<ListDeviceCertificateByCaSnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCertificateByCaSnWithOptions(request, runtime);
  }

  /**
   * 列出注册的一机一密的设备ID
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCredentialClientIdResponse
   */
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

  /**
   * 列出注册的一机一密的设备ID
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @returns ListDeviceCredentialClientIdResponse
   */
  async listDeviceCredentialClientId(request: ListDeviceCredentialClientIdRequest): Promise<ListDeviceCredentialClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceCredentialClientIdWithOptions(request, runtime);
  }

  /**
   * Queries all groups on an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupIdResponse
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
   * Queries all groups on an ApsaraMQ for MQTT instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @returns ListGroupIdResponse
   */
  async listGroupId(request: ListGroupIdRequest): Promise<ListGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlackWithOptions(request: QueryCustomAuthConnectBlackRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomAuthConnectBlackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthConnectBlackResponse({}));
  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlack(request: QueryCustomAuthConnectBlackRequest): Promise<QueryCustomAuthConnectBlackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Queries the information about custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentityWithOptions(request: QueryCustomAuthIdentityRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomAuthIdentityResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthIdentityResponse({}));
  }

  /**
   * Queries the information about custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentity(request: QueryCustomAuthIdentityRequest): Promise<QueryCustomAuthIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermissionWithOptions(request: QueryCustomAuthPermissionRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomAuthPermissionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new QueryCustomAuthPermissionResponse({}));
  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermission(request: QueryCustomAuthPermissionRequest): Promise<QueryCustomAuthPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the trace of a device that corresponds to an ApsaraMQ for MQTT client by page. When the status of a device is abnormal, you can call this operation to query the connection history of the device. This helps you efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceDeviceResponse
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
   * Queries the trace of a device that corresponds to an ApsaraMQ for MQTT client by page. When the status of a device is abnormal, you can call this operation to query the connection history of the device. This helps you efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceDevice** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @returns QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDevice(request: QueryMqttTraceDeviceRequest): Promise<QueryMqttTraceDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceDeviceWithOptions(request, runtime);
  }

  /**
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageOfClientResponse
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
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @returns QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClient(request: QueryMqttTraceMessageOfClientRequest): Promise<QueryMqttTraceMessageOfClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageOfClientWithOptions(request, runtime);
  }

  /**
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessagePublishResponse
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
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @returns QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublish(request: QueryMqttTraceMessagePublishRequest): Promise<QueryMqttTraceMessagePublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessagePublishWithOptions(request, runtime);
  }

  /**
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageSubscribeResponse
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
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @returns QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribe(request: QueryMqttTraceMessageSubscribeRequest): Promise<QueryMqttTraceMessageSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMqttTraceMessageSubscribeWithOptions(request, runtime);
  }

  /**
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionByClientIdResponse
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
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second.**** For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @returns QuerySessionByClientIdResponse
   */
  async querySessionByClientId(request: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  /**
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTokenResponse
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
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @returns QueryTokenResponse
   */
  async queryToken(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  /**
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDeviceCredentialResponse
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
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * >  Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @returns RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredential(request: RefreshDeviceCredentialRequest): Promise<RefreshDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * 注册CA证书
   * 
   * @param request - RegisterCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCaCertificateResponse
   */
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

  /**
   * 注册CA证书
   * 
   * @param request - RegisterCaCertificateRequest
   * @returns RegisterCaCertificateResponse
   */
  async registerCaCertificate(request: RegisterCaCertificateRequest): Promise<RegisterCaCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerCaCertificateWithOptions(request, runtime);
  }

  /**
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceCredentialResponse
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
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @returns RegisterDeviceCredentialResponse
   */
  async registerDeviceCredential(request: RegisterDeviceCredentialRequest): Promise<RegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTokenResponse
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
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @returns RevokeTokenResponse
   */
  async revokeToken(request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  /**
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by applications on cloud servers. It is complementary to the operation that is called by ApsaraMQ for MQTT clients to send messages. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Before you call the **SendMessage** operation, make sure that the kernel version of your ApsaraMQ for MQTT instance is 3.3.0 or later. You can obtain the information about the kernel version on the [Instance Details](https://mqtt.console.aliyun.com) page that corresponds to the instance in the **ApsaraMQ for MQTT console**.
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT to forward messages to ApsaraMQ for RocketMQ, send the messages by using an SDK. For more information, see [Export data from ApsaraMQ for MQTT to other Alibaba Cloud services](https://help.aliyun.com/document_detail/174527.html). You can call the **SendMessage** operation up to 1,000 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For information about the billing details, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
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
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by applications on cloud servers. It is complementary to the operation that is called by ApsaraMQ for MQTT clients to send messages. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Before you call the **SendMessage** operation, make sure that the kernel version of your ApsaraMQ for MQTT instance is 3.3.0 or later. You can obtain the information about the kernel version on the [Instance Details](https://mqtt.console.aliyun.com) page that corresponds to the instance in the **ApsaraMQ for MQTT console**.
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT to forward messages to ApsaraMQ for RocketMQ, send the messages by using an SDK. For more information, see [Export data from ApsaraMQ for MQTT to other Alibaba Cloud services](https://help.aliyun.com/document_detail/174527.html). You can call the **SendMessage** operation up to 1,000 times per second. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For information about the billing details, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  /**
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnRegisterDeviceCredentialResponse
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
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @returns UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredential(request: UnRegisterDeviceCredentialRequest): Promise<UnRegisterDeviceCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unRegisterDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Updates the information about custom identity authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentityWithOptions(request: UpdateCustomAuthIdentityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomAuthIdentityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!Util.isUnset(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new UpdateCustomAuthIdentityResponse({}));
  }

  /**
   * Updates the information about custom identity authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentity(request: UpdateCustomAuthIdentityRequest): Promise<UpdateCustomAuthIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * 更新自定义权限授权
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermissionWithOptions(request: UpdateCustomAuthPermissionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomAuthPermissionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!Util.isUnset(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!Util.isUnset(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!Util.isUnset(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new UpdateCustomAuthPermissionResponse({}));
  }

  /**
   * 更新自定义权限授权
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermission(request: UpdateCustomAuthPermissionRequest): Promise<UpdateCustomAuthPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomAuthPermissionWithOptions(request, runtime);
  }

}
