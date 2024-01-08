// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEventRecordPlanDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  planId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      planId: 'PlanId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      planId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEventRecordPlanDeviceResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEventRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEventRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEventRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupRequest extends $tea.Model {
  deviceGroupName?: string;
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupName: 'DeviceGroupName',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupName: 'string',
      isolationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponseBody extends $tea.Model {
  code?: string;
  data?: AddFaceDeviceGroupResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFaceDeviceGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceToDeviceGroupRequest extends $tea.Model {
  deviceGroupId?: string;
  deviceName?: string;
  iotInstanceId?: string;
  isolationId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceToDeviceGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceToDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceDeviceToDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceDeviceToDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserRequest extends $tea.Model {
  customUserId?: string;
  facePicUrl?: string;
  isolationId?: string;
  name?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicUrl: 'string',
      isolationId: 'string',
      name: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponseBody extends $tea.Model {
  code?: string;
  data?: AddFaceUserResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFaceUserResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupRequest extends $tea.Model {
  isolationId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupResponseBody extends $tea.Model {
  code?: string;
  data?: AddFaceUserGroupResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFaceUserGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  deviceGroupId?: string;
  iotInstanceId?: string;
  isolationId?: string;
  relation?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      relation: 'Relation',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      relation: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  code?: string;
  data?: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureRequest extends $tea.Model {
  facePicUrl?: string;
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicUrl: 'string',
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceUserPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceUserPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserToUserGroupRequest extends $tea.Model {
  isolationId?: string;
  userGroupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserToUserGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserToUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFaceUserToUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFaceUserToUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordPlanDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  planId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      planId: 'PlanId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      planId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordPlanDeviceResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoRequest extends $tea.Model {
  deviceNameList?: string[];
  iotIdList?: string[];
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameList: 'DeviceNameList',
      iotIdList: 'IotIdList',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameList: { 'type': 'array', 'itemType': 'string' },
      iotIdList: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBody extends $tea.Model {
  code?: string;
  data?: BatchQueryVisionDeviceInfoResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchQueryVisionDeviceInfoResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchQueryVisionDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchQueryVisionDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPictureSearchAppWithDevicesRequest extends $tea.Model {
  appInstanceId?: string;
  deviceIotIds?: string[];
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      deviceIotIds: 'DeviceIotIds',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      deviceIotIds: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPictureSearchAppWithDevicesResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPictureSearchAppWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindPictureSearchAppWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindPictureSearchAppWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotInstanceId?: string;
  isolationId?: string;
  productKey?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: CheckFaceUserDoExistOnDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CheckFaceUserDoExistOnDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckFaceUserDoExistOnDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckFaceUserDoExistOnDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBRequest extends $tea.Model {
  deviceName?: string;
  iotInstanceId?: string;
  isolationId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClearFaceDeviceDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearFaceDeviceDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRecordPlanRequest extends $tea.Model {
  eventTypes?: string;
  name?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      name: 'Name',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: 'string',
      name: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRecordPlanResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGbDeviceRequest extends $tea.Model {
  description?: string;
  deviceType?: number;
  gbId?: string;
  iotInstanceId?: string;
  mediaNetProtocol?: string;
  password?: string;
  productKey?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceType: 'DeviceType',
      gbId: 'GbId',
      iotInstanceId: 'IotInstanceId',
      mediaNetProtocol: 'MediaNetProtocol',
      password: 'Password',
      productKey: 'ProductKey',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceType: 'number',
      gbId: 'string',
      iotInstanceId: 'string',
      mediaNetProtocol: 'string',
      password: 'string',
      productKey: 'string',
      subProductKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGbDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateGbDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateGbDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGbDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGbDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGbDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobRequest extends $tea.Model {
  iotInstanceId?: string;
  timeSlot?: CreateLocalFileUploadJobRequestTimeSlot[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      timeSlot: 'TimeSlot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      timeSlot: { 'type': 'array', 'itemType': CreateLocalFileUploadJobRequestTimeSlot },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateLocalFileUploadJobResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateLocalFileUploadJobResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLocalFileUploadJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLocalFileUploadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalRecordDownloadByTimeJobRequest extends $tea.Model {
  beginTime?: number;
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  speed?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      speed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalRecordDownloadByTimeJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateLocalRecordDownloadByTimeJobResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateLocalRecordDownloadByTimeJobResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalRecordDownloadByTimeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLocalRecordDownloadByTimeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLocalRecordDownloadByTimeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchAppRequest extends $tea.Model {
  desc?: string;
  iotInstanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      iotInstanceId: 'IotInstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      iotInstanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchAppResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePictureSearchAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePictureSearchAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchJobRequest extends $tea.Model {
  appInstanceId?: string;
  bodyThreshold?: number;
  endTime?: number;
  pictureSearchType?: number;
  searchPicUrl?: string;
  startTime?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      bodyThreshold: 'BodyThreshold',
      endTime: 'EndTime',
      pictureSearchType: 'PictureSearchType',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      bodyThreshold: 'number',
      endTime: 'number',
      pictureSearchType: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchJobResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePictureSearchJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePictureSearchJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordDownloadByTimeJobRequest extends $tea.Model {
  beginTime?: number;
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  recordType?: number;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      recordType: 'RecordType',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      recordType: 'number',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordDownloadByTimeJobResponseBody extends $tea.Model {
  code?: string;
  data?: CreateRecordDownloadByTimeJobResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateRecordDownloadByTimeJobResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordDownloadByTimeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRecordDownloadByTimeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRecordDownloadByTimeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordPlanRequest extends $tea.Model {
  name?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordPlanResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRtmpDeviceRequest extends $tea.Model {
  description?: string;
  deviceName?: string;
  iotInstanceId?: string;
  productKey?: string;
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  subStreamName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      subStreamName: 'SubStreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      subStreamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRtmpDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateRtmpDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateRtmpDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRtmpDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRtmpDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRtmpDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateRequest extends $tea.Model {
  allDay?: number;
  name?: string;
  timeSections?: CreateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      name: 'Name',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      name: 'string',
      timeSections: { 'type': 'array', 'itemType': CreateTimeTemplateRequestTimeSections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanDeviceResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEventRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEventRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDeviceGroupRequest extends $tea.Model {
  deviceGroupId?: string;
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      isolationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDeviceGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFaceDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaceDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserRequest extends $tea.Model {
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupRequest extends $tea.Model {
  isolationId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  controlId?: string;
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserPictureRequest extends $tea.Model {
  facePicMd5?: string;
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      facePicMd5: 'FacePicMd5',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicMd5: 'string',
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserPictureResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFaceUserPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFaceUserPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLocalFileUploadJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLocalFileUploadJobResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLocalFileUploadJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLocalFileUploadJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLocalFileUploadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  pictureIdList?: string[];
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureIdList: 'PictureIdList',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureIdList: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponseBody extends $tea.Model {
  code?: string;
  data?: DeletePictureResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeletePictureResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordRequest extends $tea.Model {
  deviceName?: string;
  fileNameList?: string[];
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileNameList: 'FileNameList',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteRecordResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteRecordResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanDeviceResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpDeviceResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRtmpDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRtmpDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpKeyRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpKeyResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRtmpKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRtmpKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRtmpKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTimeTemplateRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTimeTemplateResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlRequest extends $tea.Model {
  facePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      facePicUrl: 'FacePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBody extends $tea.Model {
  code?: string;
  data?: DetectUserFaceByUrlResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DetectUserFaceByUrlResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectUserFaceByUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectUserFaceByUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchJobStatusRequest extends $tea.Model {
  appInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchJobStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetPictureSearchJobStatusResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPictureSearchJobStatusResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPictureSearchJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPictureSearchJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureRequest extends $tea.Model {
  appInstanceId?: string;
  containPicUrl?: boolean;
  currentPage?: number;
  endTime?: number;
  pageSize?: number;
  pictureSearchType?: number;
  searchPicUrl?: string;
  startTime?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      containPicUrl: 'ContainPicUrl',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pictureSearchType: 'PictureSearchType',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      containPicUrl: 'boolean',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      pictureSearchType: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponseBody extends $tea.Model {
  code?: string;
  data?: PictureSearchPictureResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PictureSearchPictureResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PictureSearchPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PictureSearchPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsRequest extends $tea.Model {
  actionType?: number;
  areaIndex?: number;
  beginTime?: number;
  currentPage?: number;
  endTime?: number;
  iotInstanceId?: string;
  pageSize?: number;
  plateNo?: string;
  subDeviceName?: string;
  subIotId?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      areaIndex: 'AreaIndex',
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      plateNo: 'PlateNo',
      subDeviceName: 'SubDeviceName',
      subIotId: 'SubIotId',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      areaIndex: 'number',
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      iotInstanceId: 'string',
      pageSize: 'number',
      plateNo: 'string',
      subDeviceName: 'string',
      subIotId: 'string',
      subProductKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryCarProcessEventsResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCarProcessEventsResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCarProcessEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCarProcessEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRequest extends $tea.Model {
  beginTime?: number;
  currentPage?: number;
  deviceName?: string;
  endTime?: number;
  eventType?: number;
  iotId?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      eventType: 'EventType',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      eventType: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDeviceEventResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDeviceEventResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureRequest extends $tea.Model {
  deviceName?: string;
  eventId?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      eventId: 'EventId',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      eventId: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceEventPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceEventPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordRequest extends $tea.Model {
  deviceName?: string;
  eventId?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      eventId: 'EventId',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      eventId: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponseBody extends $tea.Model {
  code?: number;
  data?: QueryDeviceEventRecordResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryDeviceEventRecordResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceEventRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceEventRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureByListRequest extends $tea.Model {
  deviceName?: string;
  expireTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  pictureIdList?: string[];
  pictureType?: number;
  productKey?: string;
  thumbWidth?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      expireTime: 'ExpireTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureIdList: 'PictureIdList',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
      thumbWidth: 'ThumbWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      expireTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureIdList: { 'type': 'array', 'itemType': 'string' },
      pictureType: 'number',
      productKey: 'string',
      thumbWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureByListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDevicePictureByListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDevicePictureByListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureByListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicePictureByListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDevicePictureByListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileRequest extends $tea.Model {
  captureId?: string;
  deviceName?: string;
  expireTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  pictureType?: number;
  productKey?: string;
  thumbWidth?: number;
  static names(): { [key: string]: string } {
    return {
      captureId: 'CaptureId',
      deviceName: 'DeviceName',
      expireTime: 'ExpireTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
      thumbWidth: 'ThumbWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureId: 'string',
      deviceName: 'string',
      expireTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pictureType: 'number',
      productKey: 'string',
      thumbWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDevicePictureFileResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDevicePictureFileResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicePictureFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDevicePictureFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleRequest extends $tea.Model {
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

export class QueryDevicePictureLifeCycleResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDevicePictureLifeCycleResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDevicePictureLifeCycleResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicePictureLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDevicePictureLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleRequest extends $tea.Model {
  deviceList?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleResponseBody extends $tea.Model {
  code?: number;
  data?: QueryDeviceRecordLifeCycleResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryDeviceRecordLifeCycleResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceRecordLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceRecordLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlRequest extends $tea.Model {
  deviceName?: string;
  enableStun?: boolean;
  encryptType?: number;
  fileName?: string;
  iotId?: string;
  iotInstanceId?: string;
  playUnLimited?: boolean;
  productKey?: string;
  scheme?: string;
  seekTime?: number;
  shouldEncrypt?: boolean;
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      enableStun: 'EnableStun',
      encryptType: 'EncryptType',
      fileName: 'FileName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      playUnLimited: 'PlayUnLimited',
      productKey: 'ProductKey',
      scheme: 'Scheme',
      seekTime: 'SeekTime',
      shouldEncrypt: 'ShouldEncrypt',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableStun: 'boolean',
      encryptType: 'number',
      fileName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      playUnLimited: 'boolean',
      productKey: 'string',
      scheme: 'string',
      seekTime: 'number',
      shouldEncrypt: 'boolean',
      urlValidDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDeviceVodUrlResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDeviceVodUrlResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceVodUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceVodUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlByTimeRequest extends $tea.Model {
  beginTime?: number;
  deviceName?: string;
  enableStun?: boolean;
  encryptType?: number;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  playUnLimited?: boolean;
  productKey?: string;
  scheme?: string;
  seekTime?: number;
  shouldEncrypt?: boolean;
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      enableStun: 'EnableStun',
      encryptType: 'EncryptType',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      playUnLimited: 'PlayUnLimited',
      productKey: 'ProductKey',
      scheme: 'Scheme',
      seekTime: 'SeekTime',
      shouldEncrypt: 'ShouldEncrypt',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      enableStun: 'boolean',
      encryptType: 'number',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      playUnLimited: 'boolean',
      productKey: 'string',
      scheme: 'string',
      seekTime: 'number',
      shouldEncrypt: 'boolean',
      urlValidDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlByTimeResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDeviceVodUrlByTimeResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDeviceVodUrlByTimeResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlByTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceVodUrlByTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDeviceVodUrlByTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBody extends $tea.Model {
  code?: string;
  data?: QueryEventRecordPlanDetailResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventRecordPlanDetailResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEventRecordPlanDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEventRecordPlanDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: QueryEventRecordPlanDeviceByDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventRecordPlanDeviceByDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEventRecordPlanDeviceByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEventRecordPlanDeviceByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBody extends $tea.Model {
  code?: string;
  data?: QueryEventRecordPlanDeviceByPlanResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventRecordPlanDeviceByPlanResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEventRecordPlanDeviceByPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEventRecordPlanDeviceByPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBody extends $tea.Model {
  code?: string;
  data?: QueryEventRecordPlansResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventRecordPlansResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEventRecordPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEventRecordPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceAllDeviceGroupResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllDeviceGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceAllDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceAllDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupRequest extends $tea.Model {
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceAllUserGroupResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceAllUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceAllUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdRequest extends $tea.Model {
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceAllUserIdsByGroupIdResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserIdsByGroupIdResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceAllUserIdsByGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceAllUserIdsByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceCustomUserIdByUserIdRequest extends $tea.Model {
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceCustomUserIdByUserIdResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceCustomUserIdByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceCustomUserIdByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceCustomUserIdByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotInstanceId?: string;
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceDeviceGroupsByDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceDeviceGroupsByDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceDeviceGroupsByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceDeviceGroupsByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserRequest extends $tea.Model {
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchRequest extends $tea.Model {
  isolationId?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserBatchResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameRequest extends $tea.Model {
  isolationId?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserByNameResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserByNameResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupRequest extends $tea.Model {
  isolationId?: string;
  pageNo?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserGroupResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  controlId?: string;
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdRequest extends $tea.Model {
  customUserId?: string;
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      isolationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryFaceUserIdByCustomUserIdResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserIdByCustomUserIdResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFaceUserIdByCustomUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFaceUserIdByCustomUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingRequest extends $tea.Model {
  cacheDuration?: number;
  deviceName?: string;
  enableStun?: boolean;
  encryptType?: number;
  forceIFrame?: boolean;
  iotId?: string;
  iotInstanceId?: string;
  playUnLimited?: boolean;
  productKey?: string;
  scheme?: string;
  shouldEncrypt?: boolean;
  streamType?: number;
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      cacheDuration: 'CacheDuration',
      deviceName: 'DeviceName',
      enableStun: 'EnableStun',
      encryptType: 'EncryptType',
      forceIFrame: 'ForceIFrame',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      playUnLimited: 'PlayUnLimited',
      productKey: 'ProductKey',
      scheme: 'Scheme',
      shouldEncrypt: 'ShouldEncrypt',
      streamType: 'StreamType',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheDuration: 'number',
      deviceName: 'string',
      enableStun: 'boolean',
      encryptType: 'number',
      forceIFrame: 'boolean',
      iotId: 'string',
      iotInstanceId: 'string',
      playUnLimited: 'boolean',
      productKey: 'string',
      scheme: 'string',
      shouldEncrypt: 'boolean',
      streamType: 'number',
      urlValidDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponseBody extends $tea.Model {
  code?: string;
  data?: QueryLiveStreamingResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryLiveStreamingResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryLiveStreamingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLiveStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBody extends $tea.Model {
  code?: string;
  data?: QueryLocalFileUploadJobResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryLocalFileUploadJobResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryLocalFileUploadJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLocalFileUploadJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthRecordRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  month?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      month: 'Month',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      month: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthRecordResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMonthRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMonthRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesRequest extends $tea.Model {
  beginTime?: number;
  currentPage?: number;
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  pageSize?: number;
  pictureSource?: number;
  pictureType?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pictureSource: 'PictureSource',
      pictureType: 'PictureType',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      pictureSource: 'number',
      pictureType: 'number',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureFilesResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureFilesResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesRequest extends $tea.Model {
  appInstanceId?: string;
  currentPage?: number;
  iotInstanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      iotInstanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureSearchAiboxesResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchAiboxesResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureSearchAiboxesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureSearchAiboxesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppsRequest extends $tea.Model {
  currentPage?: number;
  iotInstanceId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      iotInstanceId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureSearchAppsResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchAppsResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureSearchAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureSearchAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesRequest extends $tea.Model {
  appInstanceId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureSearchDevicesResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchDevicesResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureSearchDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureSearchDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobRequest extends $tea.Model {
  appInstanceId?: string;
  currentPage?: number;
  jobStatus?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      jobStatus: 'JobStatus',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      jobStatus: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureSearchJobResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchJobResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureSearchJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureSearchJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultRequest extends $tea.Model {
  appInstanceId?: string;
  currentPage?: number;
  jobId?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      jobId: 'JobId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      jobId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPictureSearchJobResultResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchJobResultResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPictureSearchJobResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryPictureSearchJobResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordRequest extends $tea.Model {
  beginTime?: number;
  currentPage?: number;
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  needSnapshot?: boolean;
  pageSize?: number;
  productKey?: string;
  recordType?: number;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      needSnapshot: 'NeedSnapshot',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      recordType: 'RecordType',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      needSnapshot: 'boolean',
      pageSize: 'number',
      productKey: 'string',
      recordType: 'number',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordByRecordIdResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryRecordByRecordIdResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordByRecordIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordByRecordIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobByIdRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobByIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordDownloadJobByIdResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordDownloadJobByIdResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordDownloadJobByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordDownloadJobByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListRequest extends $tea.Model {
  currentPage?: number;
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordDownloadJobListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordDownloadJobListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordDownloadJobListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordDownloadJobListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadUrlRequest extends $tea.Model {
  deviceName?: string;
  fileName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileName: 'FileName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordDownloadUrlResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordDownloadUrlResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordPlanDetailResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordPlanDetailResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordPlanDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordPlanDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordPlanDeviceByDeviceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordPlanDeviceByDeviceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordPlanDeviceByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordPlanDeviceByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordPlanDeviceByPlanResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordPlanDeviceByPlanResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordPlanDeviceByPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordPlanDeviceByPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRecordPlansResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordPlansResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlRequest extends $tea.Model {
  deviceName?: string;
  fileName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  seekTime?: number;
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      fileName: 'FileName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      seekTime: 'SeekTime',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      fileName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      seekTime: 'number',
      urlValidDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlByTimeRequest extends $tea.Model {
  beginTime?: number;
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  urlValidDuration?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
      urlValidDuration: 'UrlValidDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
      urlValidDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlByTimeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlByTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordUrlByTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRecordUrlByTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtmpKeyRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtmpKeyResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRtmpKeyResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRtmpKeyResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtmpKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRtmpKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRtmpKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTimeTemplateResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTimeTemplateResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTimeTemplateDetailResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTimeTemplateDetailResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTimeTemplateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTimeTemplateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBody extends $tea.Model {
  code?: string;
  data?: QueryVisionDeviceInfoResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryVisionDeviceInfoResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryVisionDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVisionDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  scheme?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scheme: 'Scheme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scheme: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponseBody extends $tea.Model {
  code?: string;
  data?: QueryVoiceIntercomResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryVoiceIntercomResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryVoiceIntercomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryVoiceIntercomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceDeviceFromDeviceGroupRequest extends $tea.Model {
  deviceGroupId?: string;
  deviceName?: string;
  iotInstanceId?: string;
  isolationId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      isolationId: 'IsolationId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
      isolationId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceDeviceFromDeviceGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceDeviceFromDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveFaceDeviceFromDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveFaceDeviceFromDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceUserFromUserGroupRequest extends $tea.Model {
  isolationId?: string;
  userGroupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceUserFromUserGroupResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceUserFromUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveFaceUserFromUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveFaceUserFromUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePictureLifeCycleRequest extends $tea.Model {
  day?: number;
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePictureLifeCycleResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePictureLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDevicePictureLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDevicePictureLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceRecordLifeCycleRequest extends $tea.Model {
  day?: number;
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceRecordLifeCycleResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceRecordLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeviceRecordLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeviceRecordLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveStreamingRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveStreamingResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveStreamingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopLiveStreamingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopLiveStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTriggeredRecordRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTriggeredRecordResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTriggeredRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopTriggeredRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTriggeredRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceRequest extends $tea.Model {
  deviceNameList?: string[];
  productKey?: string;
  sourceInstanceId?: string;
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameList: 'DeviceNameList',
      productKey: 'ProductKey',
      sourceInstanceId: 'SourceInstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameList: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      sourceInstanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: TransferDeviceInstanceResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TransferDeviceInstanceResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferDeviceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransferDeviceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCapturePictureRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCapturePictureResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCapturePictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerCapturePictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerCapturePictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRecordRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  preRecordDuration?: number;
  productKey?: string;
  recordDuration?: number;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      preRecordDuration: 'PreRecordDuration',
      productKey: 'ProductKey',
      recordDuration: 'RecordDuration',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      preRecordDuration: 'number',
      productKey: 'string',
      recordDuration: 'number',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRecordResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPictureSearchAppWithDevicesRequest extends $tea.Model {
  appInstanceId?: string;
  deviceIotIds?: string[];
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      deviceIotIds: 'DeviceIotIds',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      deviceIotIds: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPictureSearchAppWithDevicesResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPictureSearchAppWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindPictureSearchAppWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindPictureSearchAppWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventRecordPlanRequest extends $tea.Model {
  eventTypes?: string;
  name?: string;
  planId?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: 'string',
      name: 'string',
      planId: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventRecordPlanResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserRequest extends $tea.Model {
  customUserId?: string;
  facePicUrl?: string;
  isolationId?: string;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicUrl: 'string',
      isolationId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  controlId?: string;
  isolationId?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      isolationId: 'IsolationId',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      isolationId: 'string',
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInternetProtocolRequest extends $tea.Model {
  iotInstanceId?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ipVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInternetProtocolResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInternetProtocolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceInternetProtocolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceInternetProtocolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePictureSearchAppRequest extends $tea.Model {
  appInstanceId?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePictureSearchAppResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePictureSearchAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePictureSearchAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePictureSearchAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordPlanRequest extends $tea.Model {
  name?: string;
  planId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordPlanResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRtmpKeyRequest extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  iotInstanceId?: string;
  productKey?: string;
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRtmpKeyResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRtmpKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRtmpKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRtmpKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateRequest extends $tea.Model {
  allDay?: number;
  name?: string;
  templateId?: string;
  timeSections?: UpdateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      name: 'Name',
      templateId: 'TemplateId',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      name: 'string',
      templateId: 'string',
      timeSections: { 'type': 'array', 'itemType': UpdateTimeTemplateRequestTimeSections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateResponseBody extends $tea.Model {
  code?: string;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponseBodyData extends $tea.Model {
  deviceGroupId?: string;
  deviceGroupName?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponseBodyData extends $tea.Model {
  customUserId?: string;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupResponseBodyData extends $tea.Model {
  modifiedTime?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  controlId?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo extends $tea.Model {
  deviceProtocol?: number;
  gbId?: string;
  netProtocol?: number;
  nickName?: string;
  password?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceProtocol: 'DeviceProtocol',
      gbId: 'GbId',
      netProtocol: 'NetProtocol',
      nickName: 'NickName',
      password: 'Password',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProtocol: 'number',
      gbId: 'string',
      netProtocol: 'number',
      nickName: 'string',
      password: 'string',
      subProductKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo extends $tea.Model {
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  pushUrlSample?: string;
  streamName?: string;
  streamStatus?: number;
  static names(): { [key: string]: string } {
    return {
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      pushUrlSample: 'PushUrlSample',
      streamName: 'StreamName',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      pushUrlSample: 'string',
      streamName: 'string',
      streamStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList extends $tea.Model {
  description?: string;
  deviceType?: number;
  gbDeviceInfo?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo;
  iotId?: string;
  rtmpDeviceInfo?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceType: 'DeviceType',
      gbDeviceInfo: 'GbDeviceInfo',
      iotId: 'IotId',
      rtmpDeviceInfo: 'RtmpDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceType: 'number',
      gbDeviceInfo: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo,
      iotId: 'string',
      rtmpDeviceInfo: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBodyData extends $tea.Model {
  deviceInfoList?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList[];
  static names(): { [key: string]: string } {
    return {
      deviceInfoList: 'DeviceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoList: { 'type': 'array', 'itemType': BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponseBodyData extends $tea.Model {
  doExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      doExist: 'DoExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doExist: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGbDeviceResponseBodyData extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobRequestTimeSlot extends $tea.Model {
  deviceName?: string;
  endTime?: number;
  iotId?: string;
  productKey?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      endTime: 'EndTime',
      iotId: 'IotId',
      productKey: 'ProductKey',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      endTime: 'number',
      iotId: 'string',
      productKey: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalFileUploadJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocalRecordDownloadByTimeJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordDownloadByTimeJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRtmpDeviceResponseBodyData extends $tea.Model {
  deviceName?: string;
  iotId?: string;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateRequestTimeSections extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePictureResponseBodyData extends $tea.Model {
  deletedCount?: number;
  static names(): { [key: string]: string } {
    return {
      deletedCount: 'DeletedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordResponseBodyData extends $tea.Model {
  deletedCount?: number;
  static names(): { [key: string]: string } {
    return {
      deletedCount: 'DeletedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBodyDataDataFaceRects extends $tea.Model {
  faceRectsData?: string[];
  static names(): { [key: string]: string } {
    return {
      faceRectsData: 'FaceRectsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRectsData: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBodyDataDataLandmarks extends $tea.Model {
  landmarksData?: string[];
  static names(): { [key: string]: string } {
    return {
      landmarksData: 'LandmarksData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      landmarksData: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBodyDataData extends $tea.Model {
  age?: number;
  blurScore?: number;
  faceProbability?: number;
  faceRects?: DetectUserFaceByUrlResponseBodyDataDataFaceRects;
  gender?: number;
  goodForLibrary?: boolean;
  goodForRecognition?: boolean;
  landmarks?: DetectUserFaceByUrlResponseBodyDataDataLandmarks;
  occlusionScore?: number;
  poseScore?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      blurScore: 'BlurScore',
      faceProbability: 'FaceProbability',
      faceRects: 'FaceRects',
      gender: 'Gender',
      goodForLibrary: 'GoodForLibrary',
      goodForRecognition: 'GoodForRecognition',
      landmarks: 'Landmarks',
      occlusionScore: 'OcclusionScore',
      poseScore: 'PoseScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      blurScore: 'number',
      faceProbability: 'number',
      faceRects: DetectUserFaceByUrlResponseBodyDataDataFaceRects,
      gender: 'number',
      goodForLibrary: 'boolean',
      goodForRecognition: 'boolean',
      landmarks: DetectUserFaceByUrlResponseBodyDataDataLandmarks,
      occlusionScore: 'number',
      poseScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBodyData extends $tea.Model {
  data?: DetectUserFaceByUrlResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DetectUserFaceByUrlResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchJobStatusResponseBodyData extends $tea.Model {
  createTime?: number;
  endTime?: number;
  jobId?: string;
  jobStatus?: number;
  searchPicUrl?: string;
  startTime?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      jobId: 'string',
      jobStatus: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponseBodyDataPageData extends $tea.Model {
  eventTime?: number;
  gatewayIotId?: string;
  iotId?: string;
  picUrl?: string;
  threshold?: number;
  vectorId?: string;
  vectorType?: number;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      gatewayIotId: 'GatewayIotId',
      iotId: 'IotId',
      picUrl: 'PicUrl',
      threshold: 'Threshold',
      vectorId: 'VectorId',
      vectorType: 'VectorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'number',
      gatewayIotId: 'string',
      iotId: 'string',
      picUrl: 'string',
      threshold: 'number',
      vectorId: 'string',
      vectorType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: PictureSearchPictureResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': PictureSearchPictureResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponseBodyDataPageData extends $tea.Model {
  actionType?: number;
  areaIndex?: number;
  confidence?: number;
  eventId?: string;
  eventPicId?: string;
  eventPicUrl?: string;
  eventTime?: number;
  eventType?: number;
  iotId?: string;
  plateNo?: string;
  subDeviceName?: string;
  subDeviceNickName?: string;
  subIotId?: string;
  subProductKey?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      areaIndex: 'AreaIndex',
      confidence: 'Confidence',
      eventId: 'EventId',
      eventPicId: 'EventPicId',
      eventPicUrl: 'EventPicUrl',
      eventTime: 'EventTime',
      eventType: 'EventType',
      iotId: 'IotId',
      plateNo: 'PlateNo',
      subDeviceName: 'SubDeviceName',
      subDeviceNickName: 'SubDeviceNickName',
      subIotId: 'SubIotId',
      subProductKey: 'SubProductKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      areaIndex: 'number',
      confidence: 'number',
      eventId: 'string',
      eventPicId: 'string',
      eventPicUrl: 'string',
      eventTime: 'number',
      eventType: 'number',
      iotId: 'string',
      plateNo: 'string',
      subDeviceName: 'string',
      subDeviceNickName: 'string',
      subIotId: 'string',
      subProductKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarProcessEventsResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryCarProcessEventsResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryCarProcessEventsResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBodyDataList extends $tea.Model {
  eventData?: string;
  eventDesc?: string;
  eventId?: string;
  eventPicId?: string;
  eventTime?: string;
  eventType?: number;
  static names(): { [key: string]: string } {
    return {
      eventData: 'EventData',
      eventDesc: 'EventDesc',
      eventId: 'EventId',
      eventPicId: 'EventPicId',
      eventTime: 'EventTime',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventData: 'string',
      eventDesc: 'string',
      eventId: 'string',
      eventPicId: 'string',
      eventTime: 'string',
      eventType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBodyData extends $tea.Model {
  list?: QueryDeviceEventResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryDeviceEventResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponseBodyData extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  fileName?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      fileName: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureByListResponseBodyDataPicData extends $tea.Model {
  iotId?: string;
  picCreateTime?: number;
  picId?: string;
  picUrl?: string;
  thumbUrl?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      picCreateTime: 'PicCreateTime',
      picId: 'PicId',
      picUrl: 'PicUrl',
      thumbUrl: 'ThumbUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      picCreateTime: 'number',
      picId: 'string',
      picUrl: 'string',
      thumbUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureByListResponseBodyData extends $tea.Model {
  picData?: QueryDevicePictureByListResponseBodyDataPicData[];
  static names(): { [key: string]: string } {
    return {
      picData: 'picData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picData: { 'type': 'array', 'itemType': QueryDevicePictureByListResponseBodyDataPicData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponseBodyData extends $tea.Model {
  iotId?: string;
  picCreateTime?: number;
  picId?: string;
  picUrl?: string;
  thumbUrl?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      picCreateTime: 'PicCreateTime',
      picId: 'PicId',
      picUrl: 'PicUrl',
      thumbUrl: 'ThumbUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      picCreateTime: 'number',
      picId: 'string',
      picUrl: 'string',
      thumbUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleResponseBodyData extends $tea.Model {
  day?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleResponseBodyData extends $tea.Model {
  day?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponseBodyData extends $tea.Model {
  decryptKey?: string;
  stunInfo?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      decryptKey: 'DecryptKey',
      stunInfo: 'StunInfo',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decryptKey: 'string',
      stunInfo: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlByTimeResponseBodyData extends $tea.Model {
  decryptKey?: string;
  stunInfo?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      decryptKey: 'DecryptKey',
      stunInfo: 'StunInfo',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decryptKey: 'string',
      stunInfo: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfo extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyData extends $tea.Model {
  name?: string;
  planId?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  templateInfo?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
      templateInfo: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyData extends $tea.Model {
  name?: string;
  planId?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  templateInfo?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
      templateInfo: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBodyDataList extends $tea.Model {
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBodyData extends $tea.Model {
  list?: QueryEventRecordPlanDeviceByPlanResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryEventRecordPlanDeviceByPlanResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBodyDataList extends $tea.Model {
  eventType?: string;
  name?: string;
  planId?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      name: 'string',
      planId: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBodyData extends $tea.Model {
  list?: QueryEventRecordPlansResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryEventRecordPlansResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList extends $tea.Model {
  deviceGroupId?: string;
  deviceGroupName?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBodyData extends $tea.Model {
  deviceGroupList?: QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceGroupList: 'DeviceGroupList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupList: { 'type': 'array', 'itemType': QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBodyDataUserGroupList extends $tea.Model {
  modifiedTime?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  userGroupList?: QueryFaceAllUserGroupResponseBodyDataUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      userGroupList: { 'type': 'array', 'itemType': QueryFaceAllUserGroupResponseBodyDataUserGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList extends $tea.Model {
  controlId?: string;
  controlType?: string;
  deviceGroupId?: string;
  modifiedTime?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      controlType: 'ControlType',
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      controlType: 'string',
      deviceGroupId: 'string',
      modifiedTime: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  list?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBodyDataList extends $tea.Model {
  customUserId?: string;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBodyData extends $tea.Model {
  list?: QueryFaceAllUserIdsByGroupIdResponseBodyDataList[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserIdsByGroupIdResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList extends $tea.Model {
  deviceGroupId?: string;
  deviceGroupName?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      deviceGroupName: 'DeviceGroupName',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      deviceGroupName: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponseBodyData extends $tea.Model {
  deviceGroupList?: QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceGroupList: 'DeviceGroupList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupList: { 'type': 'array', 'itemType': QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyDataFacePicListFeatureDTOList extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmVersion?: string;
  errorCode?: string;
  errorMessage?: string;
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      faceMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyDataFacePicList extends $tea.Model {
  faceMd5?: string;
  faceUrl?: string;
  featureDTOList?: QueryFaceUserResponseBodyDataFacePicListFeatureDTOList[];
  static names(): { [key: string]: string } {
    return {
      faceMd5: 'FaceMd5',
      faceUrl: 'FaceUrl',
      featureDTOList: 'FeatureDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceMd5: 'string',
      faceUrl: 'string',
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicListFeatureDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyData extends $tea.Model {
  customUserId?: string;
  facePicList?: QueryFaceUserResponseBodyDataFacePicList[];
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicList: 'FacePicList',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicList },
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmVersion?: string;
  errorCode?: string;
  errorMessage?: string;
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      faceMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchResponseBodyDataFacePicList extends $tea.Model {
  faceMd5?: string;
  faceUrl?: string;
  featureDTOList?: QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList[];
  static names(): { [key: string]: string } {
    return {
      faceMd5: 'FaceMd5',
      faceUrl: 'FaceUrl',
      featureDTOList: 'FeatureDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceMd5: 'string',
      faceUrl: 'string',
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyDataFacePicListFeatureDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserBatchResponseBodyData extends $tea.Model {
  createTime?: number;
  customUserId?: string;
  facePicList?: QueryFaceUserBatchResponseBodyDataFacePicList[];
  modifyTime?: number;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customUserId: 'CustomUserId',
      facePicList: 'FacePicList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customUserId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserBatchResponseBodyDataFacePicList },
      modifyTime: 'number',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList extends $tea.Model {
  algorithmName?: string;
  algorithmProvider?: string;
  algorithmVersion?: string;
  errorCode?: string;
  errorMessage?: string;
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      faceMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBodyDataListFacePicList extends $tea.Model {
  faceMd5?: string;
  faceUrl?: string;
  featureDTOList?: QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList[];
  static names(): { [key: string]: string } {
    return {
      faceMd5: 'FaceMd5',
      faceUrl: 'FaceUrl',
      featureDTOList: 'FeatureDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceMd5: 'string',
      faceUrl: 'string',
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataListFacePicListFeatureDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBodyDataList extends $tea.Model {
  createTime?: number;
  customUserId?: string;
  facePicList?: QueryFaceUserByNameResponseBodyDataListFacePicList[];
  modifyTime?: number;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customUserId: 'CustomUserId',
      facePicList: 'FacePicList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customUserId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataListFacePicList },
      modifyTime: 'number',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserByNameResponseBodyData extends $tea.Model {
  list?: QueryFaceUserByNameResponseBodyDataList[];
  page?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceUserByNameResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponseBodyDataUserGroupList extends $tea.Model {
  modifiedTime?: string;
  userGroupId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  total?: number;
  userGroupList?: QueryFaceUserGroupResponseBodyDataUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      userGroupList: { 'type': 'array', 'itemType': QueryFaceUserGroupResponseBodyDataUserGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  controlId?: string;
  controlType?: string;
  deviceGroupId?: string;
  modifiedTime?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      controlType: 'ControlType',
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      controlType: 'string',
      deviceGroupId: 'string',
      modifiedTime: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponseBodyData extends $tea.Model {
  customUserId?: string;
  name?: string;
  params?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponseBodyData extends $tea.Model {
  path?: string;
  relayDecryptKey?: string;
  stunInfo?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      relayDecryptKey: 'RelayDecryptKey',
      stunInfo: 'StunInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      relayDecryptKey: 'string',
      stunInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBodyDataResultListFileList extends $tea.Model {
  fileEndTime?: number;
  fileName?: string;
  fileStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      fileEndTime: 'FileEndTime',
      fileName: 'FileName',
      fileStartTime: 'FileStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileEndTime: 'number',
      fileName: 'string',
      fileStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBodyDataResultList extends $tea.Model {
  code?: number;
  deviceName?: string;
  fileList?: QueryLocalFileUploadJobResponseBodyDataResultListFileList[];
  iotId?: string;
  productKey?: string;
  slotEndTime?: number;
  slotStartTime?: number;
  slotStatus?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceName: 'DeviceName',
      fileList: 'FileList',
      iotId: 'IotId',
      productKey: 'ProductKey',
      slotEndTime: 'SlotEndTime',
      slotStartTime: 'SlotStartTime',
      slotStatus: 'SlotStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      deviceName: 'string',
      fileList: { 'type': 'array', 'itemType': QueryLocalFileUploadJobResponseBodyDataResultListFileList },
      iotId: 'string',
      productKey: 'string',
      slotEndTime: 'number',
      slotStartTime: 'number',
      slotStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocalFileUploadJobResponseBodyData extends $tea.Model {
  resultList?: QueryLocalFileUploadJobResponseBodyDataResultList[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': QueryLocalFileUploadJobResponseBodyDataResultList },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBodyDataList extends $tea.Model {
  iotId?: string;
  picCreateTime?: number;
  picId?: string;
  picUrl?: string;
  thumbUrl?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      picCreateTime: 'PicCreateTime',
      picId: 'PicId',
      picUrl: 'PicUrl',
      thumbUrl: 'ThumbUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      picCreateTime: 'number',
      picId: 'string',
      picUrl: 'string',
      thumbUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBodyData extends $tea.Model {
  list?: QueryPictureFilesResponseBodyDataList[];
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPictureFilesResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBodyDataPageData extends $tea.Model {
  iotId?: string;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      nickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryPictureSearchAiboxesResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchAiboxesResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppsResponseBodyDataPageData extends $tea.Model {
  appInstanceId?: string;
  appTemplateId?: string;
  createTime?: number;
  description?: string;
  modifiedTime?: number;
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      appTemplateId: 'AppTemplateId',
      createTime: 'CreateTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      appTemplateId: 'string',
      createTime: 'number',
      description: 'string',
      modifiedTime: 'number',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppsResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryPictureSearchAppsResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchAppsResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBodyDataPageData extends $tea.Model {
  iotId?: string;
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      nickName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryPictureSearchDevicesResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchDevicesResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResponseBodyDataPageData extends $tea.Model {
  createTime?: number;
  endTime?: number;
  jobId?: string;
  jobStatus?: number;
  searchPicUrl?: string;
  startTime?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      jobId: 'string',
      jobStatus: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryPictureSearchJobResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchJobResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponseBodyDataPageData extends $tea.Model {
  deviceNickName?: string;
  eventTime?: number;
  gatewayIotId?: string;
  iotId?: string;
  picUrl?: string;
  threshold?: number;
  vectorId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNickName: 'DeviceNickName',
      eventTime: 'EventTime',
      gatewayIotId: 'GatewayIotId',
      iotId: 'IotId',
      picUrl: 'PicUrl',
      threshold: 'Threshold',
      vectorId: 'VectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNickName: 'string',
      eventTime: 'number',
      gatewayIotId: 'string',
      iotId: 'string',
      picUrl: 'string',
      threshold: 'number',
      vectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageCount?: number;
  pageData?: QueryPictureSearchJobResultResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchJobResultResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBodyDataList extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  eventType?: number;
  fileName?: string;
  fileSize?: number;
  recordType?: number;
  snapshotUrl?: string;
  streamType?: number;
  videoFrameNumber?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      eventType: 'EventType',
      fileName: 'FileName',
      fileSize: 'FileSize',
      recordType: 'RecordType',
      snapshotUrl: 'SnapshotUrl',
      streamType: 'StreamType',
      videoFrameNumber: 'VideoFrameNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      eventType: 'number',
      fileName: 'string',
      fileSize: 'number',
      recordType: 'number',
      snapshotUrl: 'string',
      streamType: 'number',
      videoFrameNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBodyData extends $tea.Model {
  list?: QueryRecordResponseBodyDataList[];
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponseBodyData extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  fileName?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      fileName: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobByIdResponseBodyData extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  fileName?: string;
  iotId?: string;
  jobErrorCode?: number;
  progress?: number;
  recordType?: number;
  status?: number;
  streamType?: number;
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      iotId: 'IotId',
      jobErrorCode: 'JobErrorCode',
      progress: 'Progress',
      recordType: 'RecordType',
      status: 'Status',
      streamType: 'StreamType',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      fileName: 'string',
      iotId: 'string',
      jobErrorCode: 'number',
      progress: 'number',
      recordType: 'number',
      status: 'number',
      streamType: 'number',
      type: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponseBodyDataJobList extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  fileName?: string;
  iotId?: string;
  jobErrorCode?: number;
  jobId?: string;
  progress?: number;
  recordType?: number;
  status?: number;
  streamType?: number;
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      iotId: 'IotId',
      jobErrorCode: 'JobErrorCode',
      jobId: 'JobId',
      progress: 'Progress',
      recordType: 'RecordType',
      status: 'Status',
      streamType: 'StreamType',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      fileName: 'string',
      iotId: 'string',
      jobErrorCode: 'number',
      jobId: 'string',
      progress: 'number',
      recordType: 'number',
      status: 'number',
      streamType: 'number',
      type: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponseBodyData extends $tea.Model {
  jobList?: QueryRecordDownloadJobListResponseBodyDataJobList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': QueryRecordDownloadJobListResponseBodyDataJobList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadUrlResponseBodyData extends $tea.Model {
  progress?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      status: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyDataTemplateInfo extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyData extends $tea.Model {
  name?: string;
  planId?: string;
  templateId?: string;
  templateInfo?: QueryRecordPlanDetailResponseBodyDataTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
      templateInfo: QueryRecordPlanDetailResponseBodyDataTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyData extends $tea.Model {
  name?: string;
  planId?: string;
  templateId?: string;
  templateInfo?: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
      templateInfo: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBodyDataList extends $tea.Model {
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBodyData extends $tea.Model {
  list?: QueryRecordPlanDeviceByPlanResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordPlanDeviceByPlanResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBodyDataList extends $tea.Model {
  name?: string;
  planId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBodyData extends $tea.Model {
  list?: QueryRecordPlansResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordPlansResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtmpKeyResponseBodyData extends $tea.Model {
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyDataListTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyDataList extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryTimeTemplateResponseBodyDataListTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryTimeTemplateResponseBodyDataListTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyData extends $tea.Model {
  list?: QueryTimeTemplateResponseBodyDataList[];
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      page: 'Page',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryTimeTemplateResponseBodyDataList },
      page: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBodyDataTimeSectionList extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBodyData extends $tea.Model {
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  timeSectionList?: QueryTimeTemplateDetailResponseBodyDataTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryTimeTemplateDetailResponseBodyDataTimeSectionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo extends $tea.Model {
  deviceProtocol?: number;
  gbId?: string;
  netProtocol?: number;
  nickName?: string;
  password?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceProtocol: 'DeviceProtocol',
      gbId: 'GbId',
      netProtocol: 'NetProtocol',
      nickName: 'NickName',
      password: 'Password',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProtocol: 'number',
      gbId: 'string',
      netProtocol: 'number',
      nickName: 'string',
      password: 'string',
      subProductKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo extends $tea.Model {
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  pushUrlSample?: string;
  streamName?: string;
  streamStatus?: number;
  static names(): { [key: string]: string } {
    return {
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      pushUrlSample: 'PushUrlSample',
      streamName: 'StreamName',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      pushUrlSample: 'string',
      streamName: 'string',
      streamStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBodyData extends $tea.Model {
  description?: string;
  deviceType?: number;
  gbDeviceInfo?: QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo;
  rtmpDeviceInfo?: QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceType: 'DeviceType',
      gbDeviceInfo: 'GbDeviceInfo',
      rtmpDeviceInfo: 'RtmpDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceType: 'number',
      gbDeviceInfo: QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo,
      rtmpDeviceInfo: QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponseBodyDataCryptoKey extends $tea.Model {
  iv?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      iv: 'Iv',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iv: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponseBodyData extends $tea.Model {
  cryptoKey?: QueryVoiceIntercomResponseBodyDataCryptoKey;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptoKey: 'CryptoKey',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptoKey: QueryVoiceIntercomResponseBodyDataCryptoKey,
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBodyDataFailedList extends $tea.Model {
  deviceName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBodyDataSuccessList extends $tea.Model {
  deviceName?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDeviceInstanceResponseBodyData extends $tea.Model {
  failedList?: TransferDeviceInstanceResponseBodyDataFailedList[];
  successList?: TransferDeviceInstanceResponseBodyDataSuccessList[];
  static names(): { [key: string]: string } {
    return {
      failedList: 'FailedList',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedList: { 'type': 'array', 'itemType': TransferDeviceInstanceResponseBodyDataFailedList },
      successList: { 'type': 'array', 'itemType': TransferDeviceInstanceResponseBodyDataSuccessList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  controlId?: string;
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      controlId: 'ControlId',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlId: 'string',
      modifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateRequestTimeSections extends $tea.Model {
  begin?: number;
  dayOfWeek?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
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
      'ap-northeast-1': "linkvisual.aliyuncs.com",
      'ap-northeast-2-pop': "linkvisual.aliyuncs.com",
      'ap-south-1': "linkvisual.aliyuncs.com",
      'ap-southeast-1': "linkvisual.aliyuncs.com",
      'ap-southeast-2': "linkvisual.aliyuncs.com",
      'ap-southeast-3': "linkvisual.aliyuncs.com",
      'ap-southeast-5': "linkvisual.aliyuncs.com",
      'cn-beijing': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-1': "linkvisual.aliyuncs.com",
      'cn-beijing-finance-pop': "linkvisual.aliyuncs.com",
      'cn-beijing-gov-1': "linkvisual.aliyuncs.com",
      'cn-beijing-nu16-b01': "linkvisual.aliyuncs.com",
      'cn-chengdu': "linkvisual.aliyuncs.com",
      'cn-edge-1': "linkvisual.aliyuncs.com",
      'cn-fujian': "linkvisual.aliyuncs.com",
      'cn-haidian-cm12-c01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-bj-b01': "linkvisual.aliyuncs.com",
      'cn-hangzhou-finance': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "linkvisual.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "linkvisual.aliyuncs.com",
      'cn-hangzhou-test-306': "linkvisual.aliyuncs.com",
      'cn-hongkong': "linkvisual.aliyuncs.com",
      'cn-hongkong-finance-pop': "linkvisual.aliyuncs.com",
      'cn-huhehaote': "linkvisual.aliyuncs.com",
      'cn-north-2-gov-1': "linkvisual.aliyuncs.com",
      'cn-qingdao': "linkvisual.aliyuncs.com",
      'cn-qingdao-nebula': "linkvisual.aliyuncs.com",
      'cn-shanghai-et15-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-et2-b01': "linkvisual.aliyuncs.com",
      'cn-shanghai-finance-1': "linkvisual.aliyuncs.com",
      'cn-shanghai-inner': "linkvisual.aliyuncs.com",
      'cn-shanghai-internal-test-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen': "linkvisual.aliyuncs.com",
      'cn-shenzhen-finance-1': "linkvisual.aliyuncs.com",
      'cn-shenzhen-inner': "linkvisual.aliyuncs.com",
      'cn-shenzhen-st4-d01': "linkvisual.aliyuncs.com",
      'cn-shenzhen-su18-b01': "linkvisual.aliyuncs.com",
      'cn-wuhan': "linkvisual.aliyuncs.com",
      'cn-yushanfang': "linkvisual.aliyuncs.com",
      'cn-zhangbei-na61-b01': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou': "linkvisual.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "linkvisual.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "linkvisual.aliyuncs.com",
      'eu-central-1': "linkvisual.aliyuncs.com",
      'eu-west-1': "linkvisual.aliyuncs.com",
      'eu-west-1-oxs': "linkvisual.aliyuncs.com",
      'me-east-1': "linkvisual.aliyuncs.com",
      'rus-west-1-pop': "linkvisual.aliyuncs.com",
      'us-east-1': "linkvisual.aliyuncs.com",
      'us-west-1': "linkvisual.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkvisual", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addEventRecordPlanDeviceWithOptions(request: AddEventRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddEventRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddEventRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddEventRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new AddEventRecordPlanDeviceResponse({}));
  }

  async addEventRecordPlanDevice(request: AddEventRecordPlanDeviceRequest): Promise<AddEventRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEventRecordPlanDeviceWithOptions(request, runtime);
  }

  async addFaceDeviceGroupWithOptions(request: AddFaceDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceGroupName)) {
      query["DeviceGroupName"] = request.deviceGroupName;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceDeviceGroupResponse>(await this.callApi(params, req, runtime), new AddFaceDeviceGroupResponse({}));
  }

  async addFaceDeviceGroup(request: AddFaceDeviceGroupRequest): Promise<AddFaceDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceDeviceGroupWithOptions(request, runtime);
  }

  async addFaceDeviceToDeviceGroupWithOptions(request: AddFaceDeviceToDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceDeviceToDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceDeviceToDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceDeviceToDeviceGroupResponse>(await this.callApi(params, req, runtime), new AddFaceDeviceToDeviceGroupResponse({}));
  }

  async addFaceDeviceToDeviceGroup(request: AddFaceDeviceToDeviceGroupRequest): Promise<AddFaceDeviceToDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceDeviceToDeviceGroupWithOptions(request, runtime);
  }

  async addFaceUserWithOptions(request: AddFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceUserResponse>(await this.callApi(params, req, runtime), new AddFaceUserResponse({}));
  }

  async addFaceUser(request: AddFaceUserRequest): Promise<AddFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserWithOptions(request, runtime);
  }

  async addFaceUserGroupWithOptions(request: AddFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userGroupName)) {
      query["UserGroupName"] = request.userGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceUserGroupResponse>(await this.callApi(params, req, runtime), new AddFaceUserGroupResponse({}));
  }

  async addFaceUserGroup(request: AddFaceUserGroupRequest): Promise<AddFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserGroupWithOptions(request, runtime);
  }

  async addFaceUserGroupAndDeviceGroupRelationWithOptions(request: AddFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.relation)) {
      query["Relation"] = request.relation;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new AddFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async addFaceUserGroupAndDeviceGroupRelation(request: AddFaceUserGroupAndDeviceGroupRelationRequest): Promise<AddFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async addFaceUserPictureWithOptions(request: AddFaceUserPictureRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserPictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceUserPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceUserPictureResponse>(await this.callApi(params, req, runtime), new AddFaceUserPictureResponse({}));
  }

  async addFaceUserPicture(request: AddFaceUserPictureRequest): Promise<AddFaceUserPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserPictureWithOptions(request, runtime);
  }

  async addFaceUserToUserGroupWithOptions(request: AddFaceUserToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserToUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaceUserToUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFaceUserToUserGroupResponse>(await this.callApi(params, req, runtime), new AddFaceUserToUserGroupResponse({}));
  }

  async addFaceUserToUserGroup(request: AddFaceUserToUserGroupRequest): Promise<AddFaceUserToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserToUserGroupWithOptions(request, runtime);
  }

  async addRecordPlanDeviceWithOptions(request: AddRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new AddRecordPlanDeviceResponse({}));
  }

  async addRecordPlanDevice(request: AddRecordPlanDeviceRequest): Promise<AddRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordPlanDeviceWithOptions(request, runtime);
  }

  async batchQueryVisionDeviceInfoWithOptions(request: BatchQueryVisionDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<BatchQueryVisionDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceNameList)) {
      query["DeviceNameList"] = request.deviceNameList;
    }

    if (!Util.isUnset(request.iotIdList)) {
      query["IotIdList"] = request.iotIdList;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchQueryVisionDeviceInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchQueryVisionDeviceInfoResponse>(await this.callApi(params, req, runtime), new BatchQueryVisionDeviceInfoResponse({}));
  }

  async batchQueryVisionDeviceInfo(request: BatchQueryVisionDeviceInfoRequest): Promise<BatchQueryVisionDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQueryVisionDeviceInfoWithOptions(request, runtime);
  }

  async bindPictureSearchAppWithDevicesWithOptions(request: BindPictureSearchAppWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BindPictureSearchAppWithDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.deviceIotIds)) {
      query["DeviceIotIds"] = request.deviceIotIds;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindPictureSearchAppWithDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindPictureSearchAppWithDevicesResponse>(await this.callApi(params, req, runtime), new BindPictureSearchAppWithDevicesResponse({}));
  }

  async bindPictureSearchAppWithDevices(request: BindPictureSearchAppWithDevicesRequest): Promise<BindPictureSearchAppWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  async checkFaceUserDoExistOnDeviceWithOptions(request: CheckFaceUserDoExistOnDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CheckFaceUserDoExistOnDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckFaceUserDoExistOnDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckFaceUserDoExistOnDeviceResponse>(await this.callApi(params, req, runtime), new CheckFaceUserDoExistOnDeviceResponse({}));
  }

  async checkFaceUserDoExistOnDevice(request: CheckFaceUserDoExistOnDeviceRequest): Promise<CheckFaceUserDoExistOnDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFaceUserDoExistOnDeviceWithOptions(request, runtime);
  }

  async clearFaceDeviceDBWithOptions(request: ClearFaceDeviceDBRequest, runtime: $Util.RuntimeOptions): Promise<ClearFaceDeviceDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearFaceDeviceDB",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearFaceDeviceDBResponse>(await this.callApi(params, req, runtime), new ClearFaceDeviceDBResponse({}));
  }

  async clearFaceDeviceDB(request: ClearFaceDeviceDBRequest): Promise<ClearFaceDeviceDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearFaceDeviceDBWithOptions(request, runtime);
  }

  async createEventRecordPlanWithOptions(request: CreateEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventRecordPlanResponse>(await this.callApi(params, req, runtime), new CreateEventRecordPlanResponse({}));
  }

  async createEventRecordPlan(request: CreateEventRecordPlanRequest): Promise<CreateEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventRecordPlanWithOptions(request, runtime);
  }

  async createGbDeviceWithOptions(request: CreateGbDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGbDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.gbId)) {
      query["GbId"] = request.gbId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.mediaNetProtocol)) {
      query["MediaNetProtocol"] = request.mediaNetProtocol;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.subProductKey)) {
      query["SubProductKey"] = request.subProductKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGbDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGbDeviceResponse>(await this.callApi(params, req, runtime), new CreateGbDeviceResponse({}));
  }

  async createGbDevice(request: CreateGbDeviceRequest): Promise<CreateGbDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGbDeviceWithOptions(request, runtime);
  }

  async createLocalFileUploadJobWithOptions(request: CreateLocalFileUploadJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateLocalFileUploadJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.timeSlot)) {
      query["TimeSlot"] = request.timeSlot;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new CreateLocalFileUploadJobResponse({}));
  }

  async createLocalFileUploadJob(request: CreateLocalFileUploadJobRequest): Promise<CreateLocalFileUploadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLocalFileUploadJobWithOptions(request, runtime);
  }

  async createLocalRecordDownloadByTimeJobWithOptions(request: CreateLocalRecordDownloadByTimeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateLocalRecordDownloadByTimeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLocalRecordDownloadByTimeJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLocalRecordDownloadByTimeJobResponse>(await this.callApi(params, req, runtime), new CreateLocalRecordDownloadByTimeJobResponse({}));
  }

  async createLocalRecordDownloadByTimeJob(request: CreateLocalRecordDownloadByTimeJobRequest): Promise<CreateLocalRecordDownloadByTimeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLocalRecordDownloadByTimeJobWithOptions(request, runtime);
  }

  async createPictureSearchAppWithOptions(request: CreatePictureSearchAppRequest, runtime: $Util.RuntimeOptions): Promise<CreatePictureSearchAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePictureSearchApp",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePictureSearchAppResponse>(await this.callApi(params, req, runtime), new CreatePictureSearchAppResponse({}));
  }

  async createPictureSearchApp(request: CreatePictureSearchAppRequest): Promise<CreatePictureSearchAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPictureSearchAppWithOptions(request, runtime);
  }

  async createPictureSearchJobWithOptions(request: CreatePictureSearchJobRequest, runtime: $Util.RuntimeOptions): Promise<CreatePictureSearchJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.bodyThreshold)) {
      query["BodyThreshold"] = request.bodyThreshold;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pictureSearchType)) {
      query["PictureSearchType"] = request.pictureSearchType;
    }

    if (!Util.isUnset(request.searchPicUrl)) {
      query["SearchPicUrl"] = request.searchPicUrl;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePictureSearchJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePictureSearchJobResponse>(await this.callApi(params, req, runtime), new CreatePictureSearchJobResponse({}));
  }

  async createPictureSearchJob(request: CreatePictureSearchJobRequest): Promise<CreatePictureSearchJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPictureSearchJobWithOptions(request, runtime);
  }

  async createRecordDownloadByTimeJobWithOptions(request: CreateRecordDownloadByTimeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecordDownloadByTimeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRecordDownloadByTimeJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRecordDownloadByTimeJobResponse>(await this.callApi(params, req, runtime), new CreateRecordDownloadByTimeJobResponse({}));
  }

  async createRecordDownloadByTimeJob(request: CreateRecordDownloadByTimeJobRequest): Promise<CreateRecordDownloadByTimeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecordDownloadByTimeJobWithOptions(request, runtime);
  }

  async createRecordPlanWithOptions(request: CreateRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRecordPlanResponse>(await this.callApi(params, req, runtime), new CreateRecordPlanResponse({}));
  }

  async createRecordPlan(request: CreateRecordPlanRequest): Promise<CreateRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecordPlanWithOptions(request, runtime);
  }

  async createRtmpDeviceWithOptions(request: CreateRtmpDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRtmpDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.pullAuthKey)) {
      query["PullAuthKey"] = request.pullAuthKey;
    }

    if (!Util.isUnset(request.pullKeyExpireTime)) {
      query["PullKeyExpireTime"] = request.pullKeyExpireTime;
    }

    if (!Util.isUnset(request.pushAuthKey)) {
      query["PushAuthKey"] = request.pushAuthKey;
    }

    if (!Util.isUnset(request.pushKeyExpireTime)) {
      query["PushKeyExpireTime"] = request.pushKeyExpireTime;
    }

    if (!Util.isUnset(request.subStreamName)) {
      query["SubStreamName"] = request.subStreamName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRtmpDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRtmpDeviceResponse>(await this.callApi(params, req, runtime), new CreateRtmpDeviceResponse({}));
  }

  async createRtmpDevice(request: CreateRtmpDeviceRequest): Promise<CreateRtmpDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRtmpDeviceWithOptions(request, runtime);
  }

  async createTimeTemplateWithOptions(request: CreateTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTimeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allDay)) {
      query["AllDay"] = request.allDay;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.timeSections)) {
      query["TimeSections"] = request.timeSections;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTimeTemplateResponse>(await this.callApi(params, req, runtime), new CreateTimeTemplateResponse({}));
  }

  async createTimeTemplate(request: CreateTimeTemplateRequest): Promise<CreateTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTimeTemplateWithOptions(request, runtime);
  }

  async deleteEventRecordPlanWithOptions(request: DeleteEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRecordPlanResponse>(await this.callApi(params, req, runtime), new DeleteEventRecordPlanResponse({}));
  }

  async deleteEventRecordPlan(request: DeleteEventRecordPlanRequest): Promise<DeleteEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRecordPlanWithOptions(request, runtime);
  }

  async deleteEventRecordPlanDeviceWithOptions(request: DeleteEventRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new DeleteEventRecordPlanDeviceResponse({}));
  }

  async deleteEventRecordPlanDevice(request: DeleteEventRecordPlanDeviceRequest): Promise<DeleteEventRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRecordPlanDeviceWithOptions(request, runtime);
  }

  async deleteFaceDeviceGroupWithOptions(request: DeleteFaceDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceDeviceGroupResponse>(await this.callApi(params, req, runtime), new DeleteFaceDeviceGroupResponse({}));
  }

  async deleteFaceDeviceGroup(request: DeleteFaceDeviceGroupRequest): Promise<DeleteFaceDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceDeviceGroupWithOptions(request, runtime);
  }

  async deleteFaceUserWithOptions(request: DeleteFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceUserResponse>(await this.callApi(params, req, runtime), new DeleteFaceUserResponse({}));
  }

  async deleteFaceUser(request: DeleteFaceUserRequest): Promise<DeleteFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserWithOptions(request, runtime);
  }

  async deleteFaceUserGroupWithOptions(request: DeleteFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteFaceUserGroupResponse({}));
  }

  async deleteFaceUserGroup(request: DeleteFaceUserGroupRequest): Promise<DeleteFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserGroupWithOptions(request, runtime);
  }

  async deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request: DeleteFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new DeleteFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async deleteFaceUserGroupAndDeviceGroupRelation(request: DeleteFaceUserGroupAndDeviceGroupRelationRequest): Promise<DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async deleteFaceUserPictureWithOptions(request: DeleteFaceUserPictureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserPictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.facePicMd5)) {
      query["FacePicMd5"] = request.facePicMd5;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaceUserPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFaceUserPictureResponse>(await this.callApi(params, req, runtime), new DeleteFaceUserPictureResponse({}));
  }

  async deleteFaceUserPicture(request: DeleteFaceUserPictureRequest): Promise<DeleteFaceUserPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserPictureWithOptions(request, runtime);
  }

  async deleteLocalFileUploadJobWithOptions(request: DeleteLocalFileUploadJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLocalFileUploadJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new DeleteLocalFileUploadJobResponse({}));
  }

  async deleteLocalFileUploadJob(request: DeleteLocalFileUploadJobRequest): Promise<DeleteLocalFileUploadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLocalFileUploadJobWithOptions(request, runtime);
  }

  async deletePictureWithOptions(request: DeletePictureRequest, runtime: $Util.RuntimeOptions): Promise<DeletePictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pictureIdList)) {
      query["PictureIdList"] = request.pictureIdList;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePictureResponse>(await this.callApi(params, req, runtime), new DeletePictureResponse({}));
  }

  async deletePicture(request: DeletePictureRequest): Promise<DeletePictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePictureWithOptions(request, runtime);
  }

  async deleteRecordWithOptions(request: DeleteRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.fileNameList)) {
      query["FileNameList"] = request.fileNameList;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordResponse>(await this.callApi(params, req, runtime), new DeleteRecordResponse({}));
  }

  async deleteRecord(request: DeleteRecordRequest): Promise<DeleteRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordWithOptions(request, runtime);
  }

  async deleteRecordPlanWithOptions(request: DeleteRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordPlanResponse>(await this.callApi(params, req, runtime), new DeleteRecordPlanResponse({}));
  }

  async deleteRecordPlan(request: DeleteRecordPlanRequest): Promise<DeleteRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordPlanWithOptions(request, runtime);
  }

  async deleteRecordPlanDeviceWithOptions(request: DeleteRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRecordPlanDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRecordPlanDeviceResponse>(await this.callApi(params, req, runtime), new DeleteRecordPlanDeviceResponse({}));
  }

  async deleteRecordPlanDevice(request: DeleteRecordPlanDeviceRequest): Promise<DeleteRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordPlanDeviceWithOptions(request, runtime);
  }

  async deleteRtmpDeviceWithOptions(request: DeleteRtmpDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRtmpDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRtmpDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRtmpDeviceResponse>(await this.callApi(params, req, runtime), new DeleteRtmpDeviceResponse({}));
  }

  async deleteRtmpDevice(request: DeleteRtmpDeviceRequest): Promise<DeleteRtmpDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRtmpDeviceWithOptions(request, runtime);
  }

  async deleteRtmpKeyWithOptions(request: DeleteRtmpKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRtmpKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRtmpKeyResponse>(await this.callApi(params, req, runtime), new DeleteRtmpKeyResponse({}));
  }

  async deleteRtmpKey(request: DeleteRtmpKeyRequest): Promise<DeleteRtmpKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRtmpKeyWithOptions(request, runtime);
  }

  async deleteTimeTemplateWithOptions(request: DeleteTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTimeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTimeTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTimeTemplateResponse({}));
  }

  async deleteTimeTemplate(request: DeleteTimeTemplateRequest): Promise<DeleteTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTimeTemplateWithOptions(request, runtime);
  }

  async detectUserFaceByUrlWithOptions(request: DetectUserFaceByUrlRequest, runtime: $Util.RuntimeOptions): Promise<DetectUserFaceByUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectUserFaceByUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectUserFaceByUrlResponse>(await this.callApi(params, req, runtime), new DetectUserFaceByUrlResponse({}));
  }

  async detectUserFaceByUrl(request: DetectUserFaceByUrlRequest): Promise<DetectUserFaceByUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectUserFaceByUrlWithOptions(request, runtime);
  }

  async getPictureSearchJobStatusWithOptions(request: GetPictureSearchJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPictureSearchJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPictureSearchJobStatus",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPictureSearchJobStatusResponse>(await this.callApi(params, req, runtime), new GetPictureSearchJobStatusResponse({}));
  }

  async getPictureSearchJobStatus(request: GetPictureSearchJobStatusRequest): Promise<GetPictureSearchJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPictureSearchJobStatusWithOptions(request, runtime);
  }

  async pictureSearchPictureWithOptions(request: PictureSearchPictureRequest, runtime: $Util.RuntimeOptions): Promise<PictureSearchPictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.containPicUrl)) {
      query["ContainPicUrl"] = request.containPicUrl;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pictureSearchType)) {
      query["PictureSearchType"] = request.pictureSearchType;
    }

    if (!Util.isUnset(request.searchPicUrl)) {
      query["SearchPicUrl"] = request.searchPicUrl;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PictureSearchPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PictureSearchPictureResponse>(await this.callApi(params, req, runtime), new PictureSearchPictureResponse({}));
  }

  async pictureSearchPicture(request: PictureSearchPictureRequest): Promise<PictureSearchPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pictureSearchPictureWithOptions(request, runtime);
  }

  async queryCarProcessEventsWithOptions(request: QueryCarProcessEventsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCarProcessEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.areaIndex)) {
      query["AreaIndex"] = request.areaIndex;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.plateNo)) {
      query["PlateNo"] = request.plateNo;
    }

    if (!Util.isUnset(request.subDeviceName)) {
      query["SubDeviceName"] = request.subDeviceName;
    }

    if (!Util.isUnset(request.subIotId)) {
      query["SubIotId"] = request.subIotId;
    }

    if (!Util.isUnset(request.subProductKey)) {
      query["SubProductKey"] = request.subProductKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCarProcessEvents",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCarProcessEventsResponse>(await this.callApi(params, req, runtime), new QueryCarProcessEventsResponse({}));
  }

  async queryCarProcessEvents(request: QueryCarProcessEventsRequest): Promise<QueryCarProcessEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCarProcessEventsWithOptions(request, runtime);
  }

  async queryDeviceEventWithOptions(request: QueryDeviceEventRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceEvent",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceEventResponse>(await this.callApi(params, req, runtime), new QueryDeviceEventResponse({}));
  }

  async queryDeviceEvent(request: QueryDeviceEventRequest): Promise<QueryDeviceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventWithOptions(request, runtime);
  }

  async queryDeviceEventPictureWithOptions(request: QueryDeviceEventPictureRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventPictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceEventPicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceEventPictureResponse>(await this.callApi(params, req, runtime), new QueryDeviceEventPictureResponse({}));
  }

  async queryDeviceEventPicture(request: QueryDeviceEventPictureRequest): Promise<QueryDeviceEventPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventPictureWithOptions(request, runtime);
  }

  async queryDeviceEventRecordWithOptions(request: QueryDeviceEventRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceEventRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceEventRecordResponse>(await this.callApi(params, req, runtime), new QueryDeviceEventRecordResponse({}));
  }

  async queryDeviceEventRecord(request: QueryDeviceEventRecordRequest): Promise<QueryDeviceEventRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventRecordWithOptions(request, runtime);
  }

  async queryDevicePictureByListWithOptions(request: QueryDevicePictureByListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePictureByListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pictureIdList)) {
      query["PictureIdList"] = request.pictureIdList;
    }

    if (!Util.isUnset(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.thumbWidth)) {
      query["ThumbWidth"] = request.thumbWidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicePictureByList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicePictureByListResponse>(await this.callApi(params, req, runtime), new QueryDevicePictureByListResponse({}));
  }

  async queryDevicePictureByList(request: QueryDevicePictureByListRequest): Promise<QueryDevicePictureByListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePictureByListWithOptions(request, runtime);
  }

  async queryDevicePictureFileWithOptions(request: QueryDevicePictureFileRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePictureFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.captureId)) {
      query["CaptureId"] = request.captureId;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.thumbWidth)) {
      query["ThumbWidth"] = request.thumbWidth;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicePictureFile",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicePictureFileResponse>(await this.callApi(params, req, runtime), new QueryDevicePictureFileResponse({}));
  }

  async queryDevicePictureFile(request: QueryDevicePictureFileRequest): Promise<QueryDevicePictureFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePictureFileWithOptions(request, runtime);
  }

  async queryDevicePictureLifeCycleWithOptions(request: QueryDevicePictureLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePictureLifeCycleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicePictureLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicePictureLifeCycleResponse>(await this.callApi(params, req, runtime), new QueryDevicePictureLifeCycleResponse({}));
  }

  async queryDevicePictureLifeCycle(request: QueryDevicePictureLifeCycleRequest): Promise<QueryDevicePictureLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePictureLifeCycleWithOptions(request, runtime);
  }

  async queryDeviceRecordLifeCycleWithOptions(request: QueryDeviceRecordLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceRecordLifeCycleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceList)) {
      query["DeviceList"] = request.deviceList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceRecordLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceRecordLifeCycleResponse>(await this.callApi(params, req, runtime), new QueryDeviceRecordLifeCycleResponse({}));
  }

  async queryDeviceRecordLifeCycle(request: QueryDeviceRecordLifeCycleRequest): Promise<QueryDeviceRecordLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  async queryDeviceVodUrlWithOptions(request: QueryDeviceVodUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceVodUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!Util.isUnset(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!Util.isUnset(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!Util.isUnset(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceVodUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceVodUrlResponse>(await this.callApi(params, req, runtime), new QueryDeviceVodUrlResponse({}));
  }

  async queryDeviceVodUrl(request: QueryDeviceVodUrlRequest): Promise<QueryDeviceVodUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceVodUrlWithOptions(request, runtime);
  }

  async queryDeviceVodUrlByTimeWithOptions(request: QueryDeviceVodUrlByTimeRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceVodUrlByTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!Util.isUnset(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!Util.isUnset(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!Util.isUnset(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceVodUrlByTime",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceVodUrlByTimeResponse>(await this.callApi(params, req, runtime), new QueryDeviceVodUrlByTimeResponse({}));
  }

  async queryDeviceVodUrlByTime(request: QueryDeviceVodUrlByTimeRequest): Promise<QueryDeviceVodUrlByTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceVodUrlByTimeWithOptions(request, runtime);
  }

  async queryEventRecordPlanDetailWithOptions(request: QueryEventRecordPlanDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEventRecordPlanDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventRecordPlanDetailResponse>(await this.callApi(params, req, runtime), new QueryEventRecordPlanDetailResponse({}));
  }

  async queryEventRecordPlanDetail(request: QueryEventRecordPlanDetailRequest): Promise<QueryEventRecordPlanDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDetailWithOptions(request, runtime);
  }

  async queryEventRecordPlanDeviceByDeviceWithOptions(request: QueryEventRecordPlanDeviceByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDeviceByDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEventRecordPlanDeviceByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventRecordPlanDeviceByDeviceResponse>(await this.callApi(params, req, runtime), new QueryEventRecordPlanDeviceByDeviceResponse({}));
  }

  async queryEventRecordPlanDeviceByDevice(request: QueryEventRecordPlanDeviceByDeviceRequest): Promise<QueryEventRecordPlanDeviceByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  async queryEventRecordPlanDeviceByPlanWithOptions(request: QueryEventRecordPlanDeviceByPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDeviceByPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEventRecordPlanDeviceByPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventRecordPlanDeviceByPlanResponse>(await this.callApi(params, req, runtime), new QueryEventRecordPlanDeviceByPlanResponse({}));
  }

  async queryEventRecordPlanDeviceByPlan(request: QueryEventRecordPlanDeviceByPlanRequest): Promise<QueryEventRecordPlanDeviceByPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  async queryEventRecordPlansWithOptions(request: QueryEventRecordPlansRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEventRecordPlans",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventRecordPlansResponse>(await this.callApi(params, req, runtime), new QueryEventRecordPlansResponse({}));
  }

  async queryEventRecordPlans(request: QueryEventRecordPlansRequest): Promise<QueryEventRecordPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlansWithOptions(request, runtime);
  }

  async queryFaceAllDeviceGroupWithOptions(request: QueryFaceAllDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceAllDeviceGroupResponse>(await this.callApi(params, req, runtime), new QueryFaceAllDeviceGroupResponse({}));
  }

  async queryFaceAllDeviceGroup(request: QueryFaceAllDeviceGroupRequest): Promise<QueryFaceAllDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllDeviceGroupWithOptions(request, runtime);
  }

  async queryFaceAllUserGroupWithOptions(request: QueryFaceAllUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceAllUserGroupResponse>(await this.callApi(params, req, runtime), new QueryFaceAllUserGroupResponse({}));
  }

  async queryFaceAllUserGroup(request: QueryFaceAllUserGroupRequest): Promise<QueryFaceAllUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupWithOptions(request, runtime);
  }

  async queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request: QueryFaceAllUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
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
      action: "QueryFaceAllUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceAllUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new QueryFaceAllUserGroupAndDeviceGroupRelationResponse({}));
  }

  async queryFaceAllUserGroupAndDeviceGroupRelation(request: QueryFaceAllUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async queryFaceAllUserIdsByGroupIdWithOptions(request: QueryFaceAllUserIdsByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserIdsByGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceAllUserIdsByGroupId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceAllUserIdsByGroupIdResponse>(await this.callApi(params, req, runtime), new QueryFaceAllUserIdsByGroupIdResponse({}));
  }

  async queryFaceAllUserIdsByGroupId(request: QueryFaceAllUserIdsByGroupIdRequest): Promise<QueryFaceAllUserIdsByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserIdsByGroupIdWithOptions(request, runtime);
  }

  async queryFaceCustomUserIdByUserIdWithOptions(request: QueryFaceCustomUserIdByUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceCustomUserIdByUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceCustomUserIdByUserId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceCustomUserIdByUserIdResponse>(await this.callApi(params, req, runtime), new QueryFaceCustomUserIdByUserIdResponse({}));
  }

  async queryFaceCustomUserIdByUserId(request: QueryFaceCustomUserIdByUserIdRequest): Promise<QueryFaceCustomUserIdByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceCustomUserIdByUserIdWithOptions(request, runtime);
  }

  async queryFaceDeviceGroupsByDeviceWithOptions(request: QueryFaceDeviceGroupsByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceDeviceGroupsByDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceDeviceGroupsByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceDeviceGroupsByDeviceResponse>(await this.callApi(params, req, runtime), new QueryFaceDeviceGroupsByDeviceResponse({}));
  }

  async queryFaceDeviceGroupsByDevice(request: QueryFaceDeviceGroupsByDeviceRequest): Promise<QueryFaceDeviceGroupsByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceDeviceGroupsByDeviceWithOptions(request, runtime);
  }

  async queryFaceUserWithOptions(request: QueryFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserResponse>(await this.callApi(params, req, runtime), new QueryFaceUserResponse({}));
  }

  async queryFaceUser(request: QueryFaceUserRequest): Promise<QueryFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserWithOptions(request, runtime);
  }

  async queryFaceUserBatchWithOptions(request: QueryFaceUserBatchRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUserBatch",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserBatchResponse>(await this.callApi(params, req, runtime), new QueryFaceUserBatchResponse({}));
  }

  async queryFaceUserBatch(request: QueryFaceUserBatchRequest): Promise<QueryFaceUserBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserBatchWithOptions(request, runtime);
  }

  async queryFaceUserByNameWithOptions(request: QueryFaceUserByNameRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserByNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUserByName",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserByNameResponse>(await this.callApi(params, req, runtime), new QueryFaceUserByNameResponse({}));
  }

  async queryFaceUserByName(request: QueryFaceUserByNameRequest): Promise<QueryFaceUserByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserByNameWithOptions(request, runtime);
  }

  async queryFaceUserGroupWithOptions(request: QueryFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserGroupResponse>(await this.callApi(params, req, runtime), new QueryFaceUserGroupResponse({}));
  }

  async queryFaceUserGroup(request: QueryFaceUserGroupRequest): Promise<QueryFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserGroupWithOptions(request, runtime);
  }

  async queryFaceUserGroupAndDeviceGroupRelationWithOptions(request: QueryFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new QueryFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async queryFaceUserGroupAndDeviceGroupRelation(request: QueryFaceUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async queryFaceUserIdByCustomUserIdWithOptions(request: QueryFaceUserIdByCustomUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserIdByCustomUserIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFaceUserIdByCustomUserId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFaceUserIdByCustomUserIdResponse>(await this.callApi(params, req, runtime), new QueryFaceUserIdByCustomUserIdResponse({}));
  }

  async queryFaceUserIdByCustomUserId(request: QueryFaceUserIdByCustomUserIdRequest): Promise<QueryFaceUserIdByCustomUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserIdByCustomUserIdWithOptions(request, runtime);
  }

  async queryLiveStreamingWithOptions(request: QueryLiveStreamingRequest, runtime: $Util.RuntimeOptions): Promise<QueryLiveStreamingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheDuration)) {
      query["CacheDuration"] = request.cacheDuration;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.enableStun)) {
      query["EnableStun"] = request.enableStun;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.forceIFrame)) {
      query["ForceIFrame"] = request.forceIFrame;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.playUnLimited)) {
      query["PlayUnLimited"] = request.playUnLimited;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    if (!Util.isUnset(request.shouldEncrypt)) {
      query["ShouldEncrypt"] = request.shouldEncrypt;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryLiveStreaming",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLiveStreamingResponse>(await this.callApi(params, req, runtime), new QueryLiveStreamingResponse({}));
  }

  async queryLiveStreaming(request: QueryLiveStreamingRequest): Promise<QueryLiveStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLiveStreamingWithOptions(request, runtime);
  }

  async queryLocalFileUploadJobWithOptions(request: QueryLocalFileUploadJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryLocalFileUploadJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryLocalFileUploadJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLocalFileUploadJobResponse>(await this.callApi(params, req, runtime), new QueryLocalFileUploadJobResponse({}));
  }

  async queryLocalFileUploadJob(request: QueryLocalFileUploadJobRequest): Promise<QueryLocalFileUploadJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocalFileUploadJobWithOptions(request, runtime);
  }

  async queryMonthRecordWithOptions(request: QueryMonthRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.month)) {
      query["Month"] = request.month;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMonthRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMonthRecordResponse>(await this.callApi(params, req, runtime), new QueryMonthRecordResponse({}));
  }

  async queryMonthRecord(request: QueryMonthRecordRequest): Promise<QueryMonthRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthRecordWithOptions(request, runtime);
  }

  async queryPictureFilesWithOptions(request: QueryPictureFilesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pictureSource)) {
      query["PictureSource"] = request.pictureSource;
    }

    if (!Util.isUnset(request.pictureType)) {
      query["PictureType"] = request.pictureType;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureFiles",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureFilesResponse>(await this.callApi(params, req, runtime), new QueryPictureFilesResponse({}));
  }

  async queryPictureFiles(request: QueryPictureFilesRequest): Promise<QueryPictureFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureFilesWithOptions(request, runtime);
  }

  async queryPictureSearchAiboxesWithOptions(request: QueryPictureSearchAiboxesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchAiboxesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureSearchAiboxes",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureSearchAiboxesResponse>(await this.callApi(params, req, runtime), new QueryPictureSearchAiboxesResponse({}));
  }

  async queryPictureSearchAiboxes(request: QueryPictureSearchAiboxesRequest): Promise<QueryPictureSearchAiboxesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchAiboxesWithOptions(request, runtime);
  }

  async queryPictureSearchAppsWithOptions(request: QueryPictureSearchAppsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureSearchApps",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureSearchAppsResponse>(await this.callApi(params, req, runtime), new QueryPictureSearchAppsResponse({}));
  }

  async queryPictureSearchApps(request: QueryPictureSearchAppsRequest): Promise<QueryPictureSearchAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchAppsWithOptions(request, runtime);
  }

  async queryPictureSearchDevicesWithOptions(request: QueryPictureSearchDevicesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureSearchDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureSearchDevicesResponse>(await this.callApi(params, req, runtime), new QueryPictureSearchDevicesResponse({}));
  }

  async queryPictureSearchDevices(request: QueryPictureSearchDevicesRequest): Promise<QueryPictureSearchDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchDevicesWithOptions(request, runtime);
  }

  async queryPictureSearchJobWithOptions(request: QueryPictureSearchJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.jobStatus)) {
      query["JobStatus"] = request.jobStatus;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureSearchJob",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureSearchJobResponse>(await this.callApi(params, req, runtime), new QueryPictureSearchJobResponse({}));
  }

  async queryPictureSearchJob(request: QueryPictureSearchJobRequest): Promise<QueryPictureSearchJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchJobWithOptions(request, runtime);
  }

  async queryPictureSearchJobResultWithOptions(request: QueryPictureSearchJobResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchJobResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPictureSearchJobResult",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPictureSearchJobResultResponse>(await this.callApi(params, req, runtime), new QueryPictureSearchJobResultResponse({}));
  }

  async queryPictureSearchJobResult(request: QueryPictureSearchJobResultRequest): Promise<QueryPictureSearchJobResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchJobResultWithOptions(request, runtime);
  }

  async queryRecordWithOptions(request: QueryRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.needSnapshot)) {
      query["NeedSnapshot"] = request.needSnapshot;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordResponse>(await this.callApi(params, req, runtime), new QueryRecordResponse({}));
  }

  async queryRecord(request: QueryRecordRequest): Promise<QueryRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordWithOptions(request, runtime);
  }

  async queryRecordByRecordIdWithOptions(request: QueryRecordByRecordIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordByRecordIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordByRecordId",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordByRecordIdResponse>(await this.callApi(params, req, runtime), new QueryRecordByRecordIdResponse({}));
  }

  async queryRecordByRecordId(request: QueryRecordByRecordIdRequest): Promise<QueryRecordByRecordIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordByRecordIdWithOptions(request, runtime);
  }

  async queryRecordDownloadJobByIdWithOptions(request: QueryRecordDownloadJobByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordDownloadJobByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordDownloadJobById",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordDownloadJobByIdResponse>(await this.callApi(params, req, runtime), new QueryRecordDownloadJobByIdResponse({}));
  }

  async queryRecordDownloadJobById(request: QueryRecordDownloadJobByIdRequest): Promise<QueryRecordDownloadJobByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordDownloadJobByIdWithOptions(request, runtime);
  }

  async queryRecordDownloadJobListWithOptions(request: QueryRecordDownloadJobListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordDownloadJobListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordDownloadJobList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordDownloadJobListResponse>(await this.callApi(params, req, runtime), new QueryRecordDownloadJobListResponse({}));
  }

  async queryRecordDownloadJobList(request: QueryRecordDownloadJobListRequest): Promise<QueryRecordDownloadJobListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordDownloadJobListWithOptions(request, runtime);
  }

  async queryRecordDownloadUrlWithOptions(request: QueryRecordDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordDownloadUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryRecordDownloadUrlResponse({}));
  }

  async queryRecordDownloadUrl(request: QueryRecordDownloadUrlRequest): Promise<QueryRecordDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordDownloadUrlWithOptions(request, runtime);
  }

  async queryRecordPlanDetailWithOptions(request: QueryRecordPlanDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordPlanDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordPlanDetailResponse>(await this.callApi(params, req, runtime), new QueryRecordPlanDetailResponse({}));
  }

  async queryRecordPlanDetail(request: QueryRecordPlanDetailRequest): Promise<QueryRecordPlanDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDetailWithOptions(request, runtime);
  }

  async queryRecordPlanDeviceByDeviceWithOptions(request: QueryRecordPlanDeviceByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDeviceByDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordPlanDeviceByDevice",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordPlanDeviceByDeviceResponse>(await this.callApi(params, req, runtime), new QueryRecordPlanDeviceByDeviceResponse({}));
  }

  async queryRecordPlanDeviceByDevice(request: QueryRecordPlanDeviceByDeviceRequest): Promise<QueryRecordPlanDeviceByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  async queryRecordPlanDeviceByPlanWithOptions(request: QueryRecordPlanDeviceByPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDeviceByPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordPlanDeviceByPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordPlanDeviceByPlanResponse>(await this.callApi(params, req, runtime), new QueryRecordPlanDeviceByPlanResponse({}));
  }

  async queryRecordPlanDeviceByPlan(request: QueryRecordPlanDeviceByPlanRequest): Promise<QueryRecordPlanDeviceByPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  async queryRecordPlansWithOptions(request: QueryRecordPlansRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordPlans",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordPlansResponse>(await this.callApi(params, req, runtime), new QueryRecordPlansResponse({}));
  }

  async queryRecordPlans(request: QueryRecordPlansRequest): Promise<QueryRecordPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlansWithOptions(request, runtime);
  }

  async queryRecordUrlWithOptions(request: QueryRecordUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.seekTime)) {
      query["SeekTime"] = request.seekTime;
    }

    if (!Util.isUnset(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordUrl",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordUrlResponse>(await this.callApi(params, req, runtime), new QueryRecordUrlResponse({}));
  }

  async queryRecordUrl(request: QueryRecordUrlRequest): Promise<QueryRecordUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordUrlWithOptions(request, runtime);
  }

  async queryRecordUrlByTimeWithOptions(request: QueryRecordUrlByTimeRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordUrlByTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    if (!Util.isUnset(request.urlValidDuration)) {
      query["UrlValidDuration"] = request.urlValidDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordUrlByTime",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordUrlByTimeResponse>(await this.callApi(params, req, runtime), new QueryRecordUrlByTimeResponse({}));
  }

  async queryRecordUrlByTime(request: QueryRecordUrlByTimeRequest): Promise<QueryRecordUrlByTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordUrlByTimeWithOptions(request, runtime);
  }

  async queryRtmpKeyWithOptions(request: QueryRtmpKeyRequest, runtime: $Util.RuntimeOptions): Promise<QueryRtmpKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRtmpKeyResponse>(await this.callApi(params, req, runtime), new QueryRtmpKeyResponse({}));
  }

  async queryRtmpKey(request: QueryRtmpKeyRequest): Promise<QueryRtmpKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRtmpKeyWithOptions(request, runtime);
  }

  async queryTimeTemplateWithOptions(request: QueryTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryTimeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTimeTemplateResponse>(await this.callApi(params, req, runtime), new QueryTimeTemplateResponse({}));
  }

  async queryTimeTemplate(request: QueryTimeTemplateRequest): Promise<QueryTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTimeTemplateWithOptions(request, runtime);
  }

  async queryTimeTemplateDetailWithOptions(request: QueryTimeTemplateDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTimeTemplateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTimeTemplateDetail",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTimeTemplateDetailResponse>(await this.callApi(params, req, runtime), new QueryTimeTemplateDetailResponse({}));
  }

  async queryTimeTemplateDetail(request: QueryTimeTemplateDetailRequest): Promise<QueryTimeTemplateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTimeTemplateDetailWithOptions(request, runtime);
  }

  async queryVisionDeviceInfoWithOptions(request: QueryVisionDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryVisionDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVisionDeviceInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVisionDeviceInfoResponse>(await this.callApi(params, req, runtime), new QueryVisionDeviceInfoResponse({}));
  }

  async queryVisionDeviceInfo(request: QueryVisionDeviceInfoRequest): Promise<QueryVisionDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVisionDeviceInfoWithOptions(request, runtime);
  }

  async queryVoiceIntercomWithOptions(request: QueryVoiceIntercomRequest, runtime: $Util.RuntimeOptions): Promise<QueryVoiceIntercomResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.scheme)) {
      query["Scheme"] = request.scheme;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVoiceIntercom",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVoiceIntercomResponse>(await this.callApi(params, req, runtime), new QueryVoiceIntercomResponse({}));
  }

  async queryVoiceIntercom(request: QueryVoiceIntercomRequest): Promise<QueryVoiceIntercomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVoiceIntercomWithOptions(request, runtime);
  }

  async removeFaceDeviceFromDeviceGroupWithOptions(request: RemoveFaceDeviceFromDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFaceDeviceFromDeviceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceGroupId)) {
      query["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveFaceDeviceFromDeviceGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveFaceDeviceFromDeviceGroupResponse>(await this.callApi(params, req, runtime), new RemoveFaceDeviceFromDeviceGroupResponse({}));
  }

  async removeFaceDeviceFromDeviceGroup(request: RemoveFaceDeviceFromDeviceGroupRequest): Promise<RemoveFaceDeviceFromDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFaceDeviceFromDeviceGroupWithOptions(request, runtime);
  }

  async removeFaceUserFromUserGroupWithOptions(request: RemoveFaceUserFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFaceUserFromUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveFaceUserFromUserGroup",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveFaceUserFromUserGroupResponse>(await this.callApi(params, req, runtime), new RemoveFaceUserFromUserGroupResponse({}));
  }

  async removeFaceUserFromUserGroup(request: RemoveFaceUserFromUserGroupRequest): Promise<RemoveFaceUserFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFaceUserFromUserGroupWithOptions(request, runtime);
  }

  async setDevicePictureLifeCycleWithOptions(request: SetDevicePictureLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicePictureLifeCycleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.day)) {
      query["Day"] = request.day;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDevicePictureLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDevicePictureLifeCycleResponse>(await this.callApi(params, req, runtime), new SetDevicePictureLifeCycleResponse({}));
  }

  async setDevicePictureLifeCycle(request: SetDevicePictureLifeCycleRequest): Promise<SetDevicePictureLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicePictureLifeCycleWithOptions(request, runtime);
  }

  async setDeviceRecordLifeCycleWithOptions(request: SetDeviceRecordLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceRecordLifeCycleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.day)) {
      query["Day"] = request.day;
    }

    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeviceRecordLifeCycle",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeviceRecordLifeCycleResponse>(await this.callApi(params, req, runtime), new SetDeviceRecordLifeCycleResponse({}));
  }

  async setDeviceRecordLifeCycle(request: SetDeviceRecordLifeCycleRequest): Promise<SetDeviceRecordLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  async stopLiveStreamingWithOptions(request: StopLiveStreamingRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveStreamingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopLiveStreaming",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopLiveStreamingResponse>(await this.callApi(params, req, runtime), new StopLiveStreamingResponse({}));
  }

  async stopLiveStreaming(request: StopLiveStreamingRequest): Promise<StopLiveStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveStreamingWithOptions(request, runtime);
  }

  async stopTriggeredRecordWithOptions(request: StopTriggeredRecordRequest, runtime: $Util.RuntimeOptions): Promise<StopTriggeredRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopTriggeredRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopTriggeredRecordResponse>(await this.callApi(params, req, runtime), new StopTriggeredRecordResponse({}));
  }

  async stopTriggeredRecord(request: StopTriggeredRecordRequest): Promise<StopTriggeredRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTriggeredRecordWithOptions(request, runtime);
  }

  async transferDeviceInstanceWithOptions(request: TransferDeviceInstanceRequest, runtime: $Util.RuntimeOptions): Promise<TransferDeviceInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceNameList)) {
      query["DeviceNameList"] = request.deviceNameList;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.sourceInstanceId)) {
      query["SourceInstanceId"] = request.sourceInstanceId;
    }

    if (!Util.isUnset(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferDeviceInstance",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferDeviceInstanceResponse>(await this.callApi(params, req, runtime), new TransferDeviceInstanceResponse({}));
  }

  async transferDeviceInstance(request: TransferDeviceInstanceRequest): Promise<TransferDeviceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferDeviceInstanceWithOptions(request, runtime);
  }

  async triggerCapturePictureWithOptions(request: TriggerCapturePictureRequest, runtime: $Util.RuntimeOptions): Promise<TriggerCapturePictureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerCapturePicture",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerCapturePictureResponse>(await this.callApi(params, req, runtime), new TriggerCapturePictureResponse({}));
  }

  async triggerCapturePicture(request: TriggerCapturePictureRequest): Promise<TriggerCapturePictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerCapturePictureWithOptions(request, runtime);
  }

  async triggerRecordWithOptions(request: TriggerRecordRequest, runtime: $Util.RuntimeOptions): Promise<TriggerRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!Util.isUnset(request.streamType)) {
      query["StreamType"] = request.streamType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerRecord",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerRecordResponse>(await this.callApi(params, req, runtime), new TriggerRecordResponse({}));
  }

  async triggerRecord(request: TriggerRecordRequest): Promise<TriggerRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerRecordWithOptions(request, runtime);
  }

  async unbindPictureSearchAppWithDevicesWithOptions(request: UnbindPictureSearchAppWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPictureSearchAppWithDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.deviceIotIds)) {
      query["DeviceIotIds"] = request.deviceIotIds;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindPictureSearchAppWithDevices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindPictureSearchAppWithDevicesResponse>(await this.callApi(params, req, runtime), new UnbindPictureSearchAppWithDevicesResponse({}));
  }

  async unbindPictureSearchAppWithDevices(request: UnbindPictureSearchAppWithDevicesRequest): Promise<UnbindPictureSearchAppWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  async updateEventRecordPlanWithOptions(request: UpdateEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.preRecordDuration)) {
      query["PreRecordDuration"] = request.preRecordDuration;
    }

    if (!Util.isUnset(request.recordDuration)) {
      query["RecordDuration"] = request.recordDuration;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventRecordPlanResponse>(await this.callApi(params, req, runtime), new UpdateEventRecordPlanResponse({}));
  }

  async updateEventRecordPlan(request: UpdateEventRecordPlanRequest): Promise<UpdateEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventRecordPlanWithOptions(request, runtime);
  }

  async updateFaceUserWithOptions(request: UpdateFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customUserId)) {
      query["CustomUserId"] = request.customUserId;
    }

    if (!Util.isUnset(request.facePicUrl)) {
      query["FacePicUrl"] = request.facePicUrl;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFaceUser",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFaceUserResponse>(await this.callApi(params, req, runtime), new UpdateFaceUserResponse({}));
  }

  async updateFaceUser(request: UpdateFaceUserRequest): Promise<UpdateFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceUserWithOptions(request, runtime);
  }

  async updateFaceUserGroupAndDeviceGroupRelationWithOptions(request: UpdateFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.controlId)) {
      query["ControlId"] = request.controlId;
    }

    if (!Util.isUnset(request.isolationId)) {
      query["IsolationId"] = request.isolationId;
    }

    if (!Util.isUnset(request.relation)) {
      query["Relation"] = request.relation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFaceUserGroupAndDeviceGroupRelation",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFaceUserGroupAndDeviceGroupRelationResponse>(await this.callApi(params, req, runtime), new UpdateFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async updateFaceUserGroupAndDeviceGroupRelation(request: UpdateFaceUserGroupAndDeviceGroupRelationRequest): Promise<UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async updateInstanceInternetProtocolWithOptions(request: UpdateInstanceInternetProtocolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceInternetProtocolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceInternetProtocol",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceInternetProtocolResponse>(await this.callApi(params, req, runtime), new UpdateInstanceInternetProtocolResponse({}));
  }

  async updateInstanceInternetProtocol(request: UpdateInstanceInternetProtocolRequest): Promise<UpdateInstanceInternetProtocolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceInternetProtocolWithOptions(request, runtime);
  }

  async updatePictureSearchAppWithOptions(request: UpdatePictureSearchAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePictureSearchAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePictureSearchApp",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePictureSearchAppResponse>(await this.callApi(params, req, runtime), new UpdatePictureSearchAppResponse({}));
  }

  async updatePictureSearchApp(request: UpdatePictureSearchAppRequest): Promise<UpdatePictureSearchAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePictureSearchAppWithOptions(request, runtime);
  }

  async updateRecordPlanWithOptions(request: UpdateRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRecordPlan",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRecordPlanResponse>(await this.callApi(params, req, runtime), new UpdateRecordPlanResponse({}));
  }

  async updateRecordPlan(request: UpdateRecordPlanRequest): Promise<UpdateRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordPlanWithOptions(request, runtime);
  }

  async updateRtmpKeyWithOptions(request: UpdateRtmpKeyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRtmpKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!Util.isUnset(request.iotId)) {
      query["IotId"] = request.iotId;
    }

    if (!Util.isUnset(request.iotInstanceId)) {
      query["IotInstanceId"] = request.iotInstanceId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.pullAuthKey)) {
      query["PullAuthKey"] = request.pullAuthKey;
    }

    if (!Util.isUnset(request.pullKeyExpireTime)) {
      query["PullKeyExpireTime"] = request.pullKeyExpireTime;
    }

    if (!Util.isUnset(request.pushAuthKey)) {
      query["PushAuthKey"] = request.pushAuthKey;
    }

    if (!Util.isUnset(request.pushKeyExpireTime)) {
      query["PushKeyExpireTime"] = request.pushKeyExpireTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRtmpKey",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRtmpKeyResponse>(await this.callApi(params, req, runtime), new UpdateRtmpKeyResponse({}));
  }

  async updateRtmpKey(request: UpdateRtmpKeyRequest): Promise<UpdateRtmpKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRtmpKeyWithOptions(request, runtime);
  }

  async updateTimeTemplateWithOptions(request: UpdateTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTimeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allDay)) {
      query["AllDay"] = request.allDay;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.timeSections)) {
      query["TimeSections"] = request.timeSections;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTimeTemplate",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTimeTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTimeTemplateResponse({}));
  }

  async updateTimeTemplate(request: UpdateTimeTemplateRequest): Promise<UpdateTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTimeTemplateWithOptions(request, runtime);
  }

}
