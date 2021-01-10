// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEventRecordPlanDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  planId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      planId: 'PlanId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      planId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEventRecordPlanDeviceResponseBody extends $tea.Model {
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

export class AddEventRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEventRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEventRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  deviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      deviceGroupName: 'DeviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      deviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceDeviceGroupResponseBodyData;
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
      data: AddFaceDeviceGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceToDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceToDeviceGroupResponseBody extends $tea.Model {
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

export class AddFaceDeviceToDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceDeviceToDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceDeviceToDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  facePicUrl?: string;
  customUserId?: string;
  name?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      facePicUrl: 'FacePicUrl',
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      facePicUrl: 'string',
      customUserId: 'string',
      name: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceUserResponseBodyData;
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
      data: AddFaceUserResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceUserGroupResponseBodyData;
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
      data: AddFaceUserGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  userGroupId?: string;
  deviceGroupId?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      userGroupId: 'UserGroupId',
      deviceGroupId: 'DeviceGroupId',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      userGroupId: 'string',
      deviceGroupId: 'string',
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  requestId?: string;
  data?: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData;
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
      data: AddFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  facePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      facePicUrl: 'FacePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      facePicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceUserPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceUserPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserToUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserToUserGroupResponseBody extends $tea.Model {
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

export class AddFaceUserToUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceUserToUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceUserToUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordPlanDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  planId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      planId: 'PlanId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      planId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRecordPlanDeviceResponseBody extends $tea.Model {
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

export class AddRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAIPlanWithDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  iotIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      iotIdList: 'IotIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      iotIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAIPlanWithDevicesResponseBody extends $tea.Model {
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

export class BindAIPlanWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindAIPlanWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindAIPlanWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPictureSearchAppWithDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appInstanceId?: string;
  deviceIotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appInstanceId: 'AppInstanceId',
      deviceIotIds: 'DeviceIotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appInstanceId: 'string',
      deviceIotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPictureSearchAppWithDevicesResponseBody extends $tea.Model {
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

export class BindPictureSearchAppWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindPictureSearchAppWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindPictureSearchAppWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  userId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      userId: 'UserId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      userId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: CheckFaceUserDoExistOnDeviceResponseBodyData;
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
      data: CheckFaceUserDoExistOnDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckFaceUserDoExistOnDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckFaceUserDoExistOnDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckFaceUserDoExistOnDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearFaceDeviceDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearFaceDeviceDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearFaceDeviceDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAIActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  actionId?: string;
  dataTypeConfigList?: ConfigAIActionRequestDataTypeConfigList[];
  algoConfig?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      actionId: 'ActionId',
      dataTypeConfigList: 'DataTypeConfigList',
      algoConfig: 'AlgoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      actionId: 'string',
      dataTypeConfigList: { 'type': 'array', 'itemType': ConfigAIActionRequestDataTypeConfigList },
      algoConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAIActionResponseBody extends $tea.Model {
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

export class ConfigAIActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigAIActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigAIActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appTemplateId?: string;
  appTemplateVersion?: string;
  level?: number;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appTemplateId: 'AppTemplateId',
      appTemplateVersion: 'AppTemplateVersion',
      level: 'Level',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appTemplateId: 'string',
      appTemplateVersion: 'string',
      level: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIAppResponseBody extends $tea.Model {
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

export class CreateAIAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAIAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAIAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appId?: string;
  planTemplateId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appId: 'AppId',
      planTemplateId: 'PlanTemplateId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appId: 'string',
      planTemplateId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAIPlanResponseBody extends $tea.Model {
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

export class CreateAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponseBody extends $tea.Model {
  requestId?: string;
  data?: number;
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
      data: 'number',
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyJobResponseBody extends $tea.Model {
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

export class CreateDevicePurifyJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevicePurifyJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevicePurifyJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyJobByPlanIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  utc?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      utc: 'Utc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      utc: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyJobByPlanIdResponseBody extends $tea.Model {
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

export class CreateDevicePurifyJobByPlanIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevicePurifyJobByPlanIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevicePurifyJobByPlanIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDevicePurifyPlanResponseBody extends $tea.Model {
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

export class CreateDevicePurifyPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDevicePurifyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDevicePurifyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  eventTypes?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
      eventTypes: 'EventTypes',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
      eventTypes: 'string',
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

export class CreateEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  name?: string;
  modelPackageStandard?: string;
  hardware?: string;
  uploadModelPath?: string;
  needEncrypt?: boolean;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
      name: 'Name',
      modelPackageStandard: 'ModelPackageStandard',
      hardware: 'Hardware',
      uploadModelPath: 'UploadModelPath',
      needEncrypt: 'NeedEncrypt',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
      name: 'string',
      modelPackageStandard: 'string',
      hardware: 'string',
      uploadModelPath: 'string',
      needEncrypt: 'boolean',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePictureSearchAppResponseBody extends $tea.Model {
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

export class CreatePictureSearchAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePictureSearchAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePictureSearchAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecordPlanResponseBody extends $tea.Model {
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

export class CreateRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  allDay?: number;
  timeSections?: CreateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
      allDay: 'AllDay',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
      allDay: 'number',
      timeSections: { 'type': 'array', 'itemType': CreateTimeTemplateRequestTimeSections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateResponseBody extends $tea.Model {
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

export class CreateTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmResponseBody extends $tea.Model {
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

export class DeleteAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanResponseBody extends $tea.Model {
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

export class DeleteEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRecordPlanDeviceResponseBody extends $tea.Model {
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

export class DeleteEventRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceDeviceGroupResponseBody extends $tea.Model {
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

export class DeleteFaceDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserResponseBody extends $tea.Model {
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

export class DeleteFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupResponseBody extends $tea.Model {
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

export class DeleteFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      controlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
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

export class DeleteFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserPictureRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  facePicMd5?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      facePicMd5: 'FacePicMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      facePicMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceUserPictureResponseBody extends $tea.Model {
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

export class DeleteFaceUserPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceUserPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceUserPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  modelId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      modelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $tea.Model {
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

export class DeleteModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanResponseBody extends $tea.Model {
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

export class DeleteRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordPlanDeviceResponseBody extends $tea.Model {
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

export class DeleteRecordPlanDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRecordPlanDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRecordPlanDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTimeTemplateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTimeTemplateResponseBody extends $tea.Model {
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

export class DeleteTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelBatchRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  modelId?: number;
  deviceList?: DeployModelBatchRequestDeviceList[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      modelId: 'ModelId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      modelId: 'number',
      deviceList: { 'type': 'array', 'itemType': DeployModelBatchRequestDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelBatchResponseBody extends $tea.Model {
  requestId?: string;
  data?: DeployModelBatchResponseBodyData;
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
      data: DeployModelBatchResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployModelBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployModelBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  facePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      facePicUrl: 'FacePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      facePicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponseBody extends $tea.Model {
  requestId?: string;
  data?: DetectUserFaceByUrlResponseBodyData;
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
      data: DetectUserFaceByUrlResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectUserFaceByUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectUserFaceByUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectUserFaceByUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  actionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      actionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: GetAIActionResponseBodyData;
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
      data: GetAIActionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algo?: string;
  algoAction?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algo: 'Algo',
      algoAction: 'AlgoAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algo: 'string',
      algoAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: GetAIActionConfigResponseBodyData;
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
      data: GetAIActionConfigResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIActionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIActionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIAppResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: GetAIAppResponseBodyData;
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
      data: GetAIAppResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: GetAIJobResponseBodyData;
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
      data: GetAIJobResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIPlanResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: GetAIPlanResponseBodyData;
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
      data: GetAIPlanResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByNameRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByNameResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailByNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmDetailByNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmDetailByNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePurifyJobByJobIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePurifyJobByJobIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetDevicePurifyJobByJobIdResponseBodyData;
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
      data: GetDevicePurifyJobByJobIdResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePurifyJobByJobIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDevicePurifyJobByJobIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDevicePurifyJobByJobIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailByIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  modelId?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      modelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelDetailByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelDetailByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelDetailByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOssPolicyRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  hardware?: string;
  modelPackageStandard?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
      hardware: 'Hardware',
      modelPackageStandard: 'ModelPackageStandard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
      hardware: 'string',
      modelPackageStandard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOssPolicyResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelOssPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetModelOssPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetModelOssPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureInfoWithVectorIdsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  vectorIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      vectorIdList: 'VectorIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      vectorIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureInfoWithVectorIdsResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetPictureInfoWithVectorIdsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetPictureInfoWithVectorIdsResponseBodyData },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureInfoWithVectorIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPictureInfoWithVectorIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPictureInfoWithVectorIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureWithVectorIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  vectorId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      vectorId: 'VectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      vectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureWithVectorIdResponseBody extends $tea.Model {
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

export class GetPictureWithVectorIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPictureWithVectorIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPictureWithVectorIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsByPageRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  namePattern?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      namePattern: 'NamePattern',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      namePattern: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsByPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlgorithmsByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlgorithmsByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByModelIdAndDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  modelId?: number;
  deviceList?: ListDeployTaskByModelIdAndDevicesRequestDeviceList[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      modelId: 'ModelId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      modelId: 'number',
      deviceList: { 'type': 'array', 'itemType': ListDeployTaskByModelIdAndDevicesRequestDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByModelIdAndDevicesResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByModelIdAndDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployTaskByModelIdAndDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployTaskByModelIdAndDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByPageRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployTaskByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployTaskByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmId?: number;
  sizeType?: string;
  modelPackageStandard?: string;
  hardware?: string;
  namePattern?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmId: 'AlgorithmId',
      sizeType: 'SizeType',
      modelPackageStandard: 'ModelPackageStandard',
      hardware: 'Hardware',
      namePattern: 'NamePattern',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmId: 'number',
      sizeType: 'string',
      modelPackageStandard: 'string',
      hardware: 'string',
      namePattern: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListModelsByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListModelsByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsByPageRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  algorithmName?: string;
  sizeType?: string;
  modelPackageStandard?: string;
  hardware?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      algorithmName: 'AlgorithmName',
      sizeType: 'SizeType',
      modelPackageStandard: 'ModelPackageStandard',
      hardware: 'Hardware',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      algorithmName: 'string',
      sizeType: 'string',
      modelPackageStandard: 'string',
      hardware: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsByPageResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsByPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListModelVersionsByPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListModelVersionsByPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  searchPicUrl?: string;
  startTime?: number;
  endTime?: number;
  threshold?: number;
  containPicUrl?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appInstanceId: 'AppInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      searchPicUrl: 'SearchPicUrl',
      startTime: 'StartTime',
      endTime: 'EndTime',
      threshold: 'Threshold',
      containPicUrl: 'ContainPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      searchPicUrl: 'string',
      startTime: 'number',
      endTime: 'number',
      threshold: 'number',
      containPicUrl: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponseBody extends $tea.Model {
  requestId?: string;
  data?: PictureSearchPictureResponseBodyData;
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
      data: PictureSearchPictureResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PictureSearchPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PictureSearchPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIActionRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIActionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryAIActionResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryAIActionResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAIActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAIActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIAppResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryAIAppResponseBodyData;
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
      data: QueryAIAppResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAIAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAIAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIJobsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  actionId?: string;
  iotId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      actionId: 'ActionId',
      iotId: 'IotId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      actionId: 'string',
      iotId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIJobsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryAIJobsResponseBodyData;
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
      data: QueryAIJobsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAIJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAIJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appId: 'AppId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryAIPlanResponseBodyData;
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
      data: QueryAIPlanResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanTemplatesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appTemplateId?: string;
  appVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appTemplateId: 'AppTemplateId',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appTemplateId: 'string',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryAIPlanTemplatesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryAIPlanTemplatesResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAIPlanTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAIPlanTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  eventType?: number;
  beginTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      eventType: 'EventType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      eventType: 'number',
      beginTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDeviceEventResponseBodyData;
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
      data: QueryDeviceEventResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  eventId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      eventId: 'EventId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      eventId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  errorMessage?: string;
  code?: number;
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
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventPictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceEventPictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceEventPictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  eventId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      eventId: 'EventId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      eventId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDeviceEventRecordResponseBodyData[];
  errorMessage?: string;
  code?: number;
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
      data: { 'type': 'array', 'itemType': QueryDeviceEventRecordResponseBodyData },
      errorMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceEventRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceEventRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileVodRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  fileName?: string;
  shouldEncrypt?: boolean;
  encryptType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      fileName: 'FileName',
      shouldEncrypt: 'ShouldEncrypt',
      encryptType: 'EncryptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      fileName: 'string',
      shouldEncrypt: 'boolean',
      encryptType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileVodResponseBody extends $tea.Model {
  requestId?: string;
  decryptKey?: string;
  data?: QueryDeviceFileVodResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      decryptKey: 'DecryptKey',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      decryptKey: 'string',
      data: QueryDeviceFileVodResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileVodResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceFileVodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceFileVodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  captureId?: string;
  pictureType?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      captureId: 'CaptureId',
      pictureType: 'PictureType',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      captureId: 'string',
      pictureType: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDevicePictureFileResponseBodyData;
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
      data: QueryDevicePictureFileResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePictureFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePictureFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDevicePictureLifeCycleResponseBodyData;
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
      data: QueryDevicePictureLifeCycleResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePictureLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePictureLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyJobsRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyJobsResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDevicePurifyJobsResponseBodyData;
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
      data: QueryDevicePurifyJobsResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePurifyJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePurifyJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlanByPlanIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlanByPlanIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDevicePurifyPlanByPlanIdResponseBodyData;
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
      data: QueryDevicePurifyPlanByPlanIdResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlanByPlanIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePurifyPlanByPlanIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePurifyPlanByPlanIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlansRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlansResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDevicePurifyPlansResponseBodyData;
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
      data: QueryDevicePurifyPlansResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDevicePurifyPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicePurifyPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  deviceList?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      deviceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryDeviceRecordLifeCycleResponseBodyData[];
  errorMessage?: string;
  code?: number;
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
      data: { 'type': 'array', 'itemType': QueryDeviceRecordLifeCycleResponseBodyData },
      errorMessage: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRecordLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceRecordLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceRecordLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  fileName?: string;
  shouldEncrypt?: boolean;
  encryptType?: number;
  scheme?: string;
  seekTime?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      fileName: 'FileName',
      shouldEncrypt: 'ShouldEncrypt',
      encryptType: 'EncryptType',
      scheme: 'Scheme',
      seekTime: 'SeekTime',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      fileName: 'string',
      shouldEncrypt: 'boolean',
      encryptType: 'number',
      scheme: 'string',
      seekTime: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponseBody extends $tea.Model {
  requestId?: string;
  decryptKey?: string;
  data?: QueryDeviceVodUrlResponseBodyData;
  errorMessage?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      decryptKey: 'DecryptKey',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      decryptKey: 'string',
      data: QueryDeviceVodUrlResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceVodUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceVodUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceVodUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryEventRecordPlanDetailResponseBodyData;
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
      data: QueryEventRecordPlanDetailResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEventRecordPlanDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEventRecordPlanDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryEventRecordPlanDeviceByDeviceResponseBodyData;
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
      data: QueryEventRecordPlanDeviceByDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEventRecordPlanDeviceByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEventRecordPlanDeviceByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryEventRecordPlanDeviceByPlanResponseBodyData;
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
      data: QueryEventRecordPlanDeviceByPlanResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEventRecordPlanDeviceByPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEventRecordPlanDeviceByPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryEventRecordPlansResponseBodyData;
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
      data: QueryEventRecordPlansResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEventRecordPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEventRecordPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceAllDeviceGroupResponseBodyData;
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
      data: QueryFaceAllDeviceGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceAllDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceAllDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceAllUserGroupResponseBodyData;
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
      data: QueryFaceAllUserGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceAllUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceAllUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData;
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
      data: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userGroupId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userGroupId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceAllUserIdsByGroupIdResponseBodyData;
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
      data: QueryFaceAllUserIdsByGroupIdResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceAllUserIdsByGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceAllUserIdsByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceCustomUserIdByUserIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceCustomUserIdByUserIdResponseBody extends $tea.Model {
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

export class QueryFaceCustomUserIdByUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceCustomUserIdByUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceCustomUserIdByUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceDeviceGroupsByDeviceResponseBodyData;
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
      data: QueryFaceDeviceGroupsByDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceDeviceGroupsByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceDeviceGroupsByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceUserResponseBodyData;
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
      data: QueryFaceUserResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceUserGroupResponseBodyData;
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
      data: QueryFaceUserGroupResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      controlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData;
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
      data: QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  customUserId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      customUserId: 'CustomUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      customUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryFaceUserIdByCustomUserIdResponseBodyData;
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
      data: QueryFaceUserIdByCustomUserIdResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFaceUserIdByCustomUserIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFaceUserIdByCustomUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotIdsByAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotIdsByAIPlanResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryIotIdsByAIPlanResponseBodyData;
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
      data: QueryIotIdsByAIPlanResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotIdsByAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryIotIdsByAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryIotIdsByAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  shouldEncrypt?: boolean;
  encryptType?: number;
  scheme?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
      shouldEncrypt: 'ShouldEncrypt',
      encryptType: 'EncryptType',
      scheme: 'Scheme',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
      shouldEncrypt: 'boolean',
      encryptType: 'number',
      scheme: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryLiveStreamingResponseBodyData;
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
      data: QueryLiveStreamingResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryLiveStreamingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryLiveStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthRecordRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  month?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      month: 'Month',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      month: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthRecordResponseBody extends $tea.Model {
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

export class QueryMonthRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonthRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonthRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  beginTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  pictureType?: number;
  pictureSource?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pictureType: 'PictureType',
      pictureSource: 'PictureSource',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      beginTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      pictureType: 'number',
      pictureSource: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryPictureFilesResponseBodyData;
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
      data: QueryPictureFilesResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPictureFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPictureFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appInstanceId: 'AppInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryPictureSearchAiboxesResponseBodyData;
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
      data: QueryPictureSearchAiboxesResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPictureSearchAiboxesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPictureSearchAiboxesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryPictureSearchAppResponseBodyData;
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
      data: QueryPictureSearchAppResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPictureSearchAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPictureSearchAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appInstanceId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appInstanceId: 'AppInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryPictureSearchDevicesResponseBodyData;
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
      data: QueryPictureSearchDevicesResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPictureSearchDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPictureSearchDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  beginTime?: number;
  endTime?: number;
  recordType?: number;
  currentPage?: number;
  pageSize?: number;
  needSnapshot?: boolean;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      recordType: 'RecordType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      needSnapshot: 'NeedSnapshot',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
      beginTime: 'number',
      endTime: 'number',
      recordType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      needSnapshot: 'boolean',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordResponseBodyData;
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
      data: QueryRecordResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  recordId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      recordId: 'RecordId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      recordId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordByRecordIdResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryRecordByRecordIdResponseBodyData },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordByRecordIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordByRecordIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordPlanDetailResponseBodyData;
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
      data: QueryRecordPlanDetailResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordPlanDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordPlanDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordPlanDeviceByDeviceResponseBodyData;
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
      data: QueryRecordPlanDeviceByDeviceResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordPlanDeviceByDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordPlanDeviceByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordPlanDeviceByPlanResponseBodyData;
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
      data: QueryRecordPlanDeviceByPlanResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordPlanDeviceByPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordPlanDeviceByPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryRecordPlansResponseBodyData;
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
      data: QueryRecordPlansResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  fileName?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      fileName: 'FileName',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      fileName: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordUrlResponseBody extends $tea.Model {
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

export class QueryRecordUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRecordUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRecordUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStandardAIAppTemplatesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStandardAIAppTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  errorMessage?: string;
  code?: string;
  data?: QueryStandardAIAppTemplatesResponseBodyData;
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
      data: QueryStandardAIAppTemplatesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStandardAIAppTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryStandardAIAppTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryStandardAIAppTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryTimeTemplateResponseBodyData;
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
      data: QueryTimeTemplateResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryTimeTemplateDetailResponseBodyData;
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
      data: QueryTimeTemplateDetailResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTimeTemplateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTimeTemplateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponseBody extends $tea.Model {
  requestId?: string;
  data?: QueryVoiceIntercomResponseBodyData;
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
      data: QueryVoiceIntercomResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryVoiceIntercomResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryVoiceIntercomResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAIAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAIAppResponseBody extends $tea.Model {
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

export class RemoveAIAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAIAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAIAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAIPlanResponseBody extends $tea.Model {
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

export class RemoveAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDevicePurifyPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDevicePurifyPlanResponseBody extends $tea.Model {
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

export class RemoveDevicePurifyPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDevicePurifyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDevicePurifyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceDeviceFromDeviceGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceDeviceFromDeviceGroupResponseBody extends $tea.Model {
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

export class RemoveFaceDeviceFromDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveFaceDeviceFromDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveFaceDeviceFromDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceUserFromUserGroupRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFaceUserFromUserGroupResponseBody extends $tea.Model {
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

export class RemoveFaceUserFromUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveFaceUserFromUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveFaceUserFromUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePictureLifeCycleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  day?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      day: 'Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      day: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePictureLifeCycleResponseBody extends $tea.Model {
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

export class SetDevicePictureLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDevicePictureLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDevicePictureLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceRecordLifeCycleRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  day?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      day: 'Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      day: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceRecordLifeCycleResponseBody extends $tea.Model {
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

export class SetDeviceRecordLifeCycleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDeviceRecordLifeCycleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDeviceRecordLifeCycleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveStreamingRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLiveStreamingResponseBody extends $tea.Model {
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

export class StopLiveStreamingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLiveStreamingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLiveStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTriggeredRecordRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTriggeredRecordResponseBody extends $tea.Model {
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

export class StopTriggeredRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopTriggeredRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopTriggeredRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCapturePictureRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerCapturePictureResponseBody extends $tea.Model {
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

export class TriggerCapturePictureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TriggerCapturePictureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TriggerCapturePictureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRecordRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  iotId?: string;
  streamType?: number;
  preRecordDuration?: number;
  recordDuration?: number;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      iotId: 'IotId',
      streamType: 'StreamType',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      iotId: 'string',
      streamType: 'number',
      preRecordDuration: 'number',
      recordDuration: 'number',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRecordResponseBody extends $tea.Model {
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

export class TriggerRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TriggerRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TriggerRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAIPlanWithDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  iotIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      iotIdList: 'IotIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      iotIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAIPlanWithDevicesResponseBody extends $tea.Model {
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

export class UnbindAIPlanWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindAIPlanWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindAIPlanWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPictureSearchAppWithDevicesRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appInstanceId?: string;
  deviceIotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appInstanceId: 'AppInstanceId',
      deviceIotIds: 'DeviceIotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appInstanceId: 'string',
      deviceIotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPictureSearchAppWithDevicesResponseBody extends $tea.Model {
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

export class UnbindPictureSearchAppWithDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindPictureSearchAppWithDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindPictureSearchAppWithDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAIAppRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  appId?: string;
  level?: number;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      appId: 'AppId',
      level: 'Level',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      appId: 'string',
      level: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAIAppResponseBody extends $tea.Model {
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

export class UpdateAIAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAIAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAIAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAIPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAIPlanResponseBody extends $tea.Model {
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

export class UpdateAIPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAIPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAIPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicePurifyPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevicePurifyPlanResponseBody extends $tea.Model {
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

export class UpdateDevicePurifyPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDevicePurifyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDevicePurifyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  name?: string;
  eventTypes?: string;
  preRecordDuration?: number;
  recordDuration?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      name: 'Name',
      eventTypes: 'EventTypes',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      name: 'string',
      eventTypes: 'string',
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

export class UpdateEventRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateEventRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateEventRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  userId?: string;
  name?: string;
  params?: string;
  facePicUrl?: string;
  customUserId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      userId: 'UserId',
      name: 'Name',
      params: 'Params',
      facePicUrl: 'FacePicUrl',
      customUserId: 'CustomUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      userId: 'string',
      name: 'string',
      params: 'string',
      facePicUrl: 'string',
      customUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserResponseBody extends $tea.Model {
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

export class UpdateFaceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFaceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFaceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  isolationId?: string;
  controlId?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      isolationId: 'IsolationId',
      controlId: 'ControlId',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      isolationId: 'string',
      controlId: 'string',
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationResponseBody extends $tea.Model {
  requestId?: string;
  data?: UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData;
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
      data: UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData,
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceUserGroupAndDeviceGroupRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFaceUserGroupAndDeviceGroupRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFaceUserGroupAndDeviceGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  modelId?: number;
  name?: string;
  hardware?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      modelId: 'ModelId',
      name: 'Name',
      hardware: 'Hardware',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      modelId: 'number',
      name: 'string',
      hardware: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponseBody extends $tea.Model {
  requestId?: string;
  data?: { [key: string]: any };
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMessage: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordPlanRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  planId?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      planId: 'PlanId',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      planId: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecordPlanResponseBody extends $tea.Model {
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

export class UpdateRecordPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRecordPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRecordPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  templateId?: string;
  name?: string;
  allDay?: number;
  timeSections?: UpdateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      templateId: 'TemplateId',
      name: 'Name',
      allDay: 'AllDay',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      templateId: 'string',
      name: 'string',
      allDay: 'number',
      timeSections: { 'type': 'array', 'itemType': UpdateTimeTemplateRequestTimeSections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateResponseBody extends $tea.Model {
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

export class UpdateTimeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTimeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTimeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceDeviceGroupResponseBodyData extends $tea.Model {
  deviceGroupId?: string;
  modifiedTime?: string;
  deviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      deviceGroupName: 'DeviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      modifiedTime: 'string',
      deviceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceUserResponseBodyData extends $tea.Model {
  params?: string;
  customUserId?: string;
  userId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      customUserId: 'CustomUserId',
      userId: 'UserId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      customUserId: 'string',
      userId: 'string',
      name: 'string',
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
  modifiedTime?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      controlId: 'string',
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

export class ConfigAIActionRequestDataTypeConfigList extends $tea.Model {
  configs?: string;
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
      dataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTimeTemplateRequestTimeSections extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelBatchRequestDeviceList extends $tea.Model {
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

export class DeployModelBatchResponseBodyData extends $tea.Model {
  deployTaskResultVOList?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      deployTaskResultVOList: 'DeployTaskResultVOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployTaskResultVOList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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
  gender?: number;
  faceRects?: DetectUserFaceByUrlResponseBodyDataDataFaceRects;
  age?: number;
  landmarks?: DetectUserFaceByUrlResponseBodyDataDataLandmarks;
  faceProbability?: number;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceRects: 'FaceRects',
      age: 'Age',
      landmarks: 'Landmarks',
      faceProbability: 'FaceProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'number',
      faceRects: DetectUserFaceByUrlResponseBodyDataDataFaceRects,
      age: 'number',
      landmarks: DetectUserFaceByUrlResponseBodyDataDataLandmarks,
      faceProbability: 'number',
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

export class GetAIActionResponseBodyData extends $tea.Model {
  actionId?: string;
  planId?: string;
  action?: string;
  actionTemplateId?: string;
  actionIndex?: number;
  alog?: string;
  algoConfig?: string;
  actionConfig?: string;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      planId: 'PlanId',
      action: 'Action',
      actionTemplateId: 'ActionTemplateId',
      actionIndex: 'ActionIndex',
      alog: 'Alog',
      algoConfig: 'AlgoConfig',
      actionConfig: 'ActionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      planId: 'string',
      action: 'string',
      actionTemplateId: 'string',
      actionIndex: 'number',
      alog: 'string',
      algoConfig: 'string',
      actionConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigResponseBodyDataInParamList extends $tea.Model {
  dataType?: string;
  needConfig?: boolean;
  configItems?: string[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      needConfig: 'NeedConfig',
      configItems: 'ConfigItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      needConfig: 'boolean',
      configItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigResponseBodyDataOutParamList extends $tea.Model {
  dataType?: string;
  needConfig?: boolean;
  configItems?: string[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      needConfig: 'NeedConfig',
      configItems: 'ConfigItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      needConfig: 'boolean',
      configItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIActionConfigResponseBodyData extends $tea.Model {
  algoAction?: string;
  des?: string;
  needDevice?: boolean;
  sync?: string;
  algoConfigItems?: string;
  inParamList?: GetAIActionConfigResponseBodyDataInParamList[];
  outParamList?: GetAIActionConfigResponseBodyDataOutParamList[];
  static names(): { [key: string]: string } {
    return {
      algoAction: 'AlgoAction',
      des: 'Des',
      needDevice: 'NeedDevice',
      sync: 'Sync',
      algoConfigItems: 'AlgoConfigItems',
      inParamList: 'InParamList',
      outParamList: 'OutParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoAction: 'string',
      des: 'string',
      needDevice: 'boolean',
      sync: 'string',
      algoConfigItems: 'string',
      inParamList: { 'type': 'array', 'itemType': GetAIActionConfigResponseBodyDataInParamList },
      outParamList: { 'type': 'array', 'itemType': GetAIActionConfigResponseBodyDataOutParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIAppResponseBodyData extends $tea.Model {
  appId?: string;
  appTemplateId?: string;
  version?: string;
  level?: number;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appTemplateId: 'AppTemplateId',
      version: 'Version',
      level: 'Level',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appTemplateId: 'string',
      version: 'string',
      level: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobResponseBodyDataDataDTOList extends $tea.Model {
  dataId?: string;
  dataType?: string;
  dataSource?: string;
  algoData?: string;
  jobId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      dataType: 'DataType',
      dataSource: 'DataSource',
      algoData: 'AlgoData',
      jobId: 'JobId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'string',
      dataSource: 'string',
      algoData: 'string',
      jobId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobResponseBodyDataActionJobDTO extends $tea.Model {
  jobId?: string;
  actionId?: string;
  status?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      actionId: 'ActionId',
      status: 'Status',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      actionId: 'string',
      status: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIJobResponseBodyData extends $tea.Model {
  dataDTOList?: GetAIJobResponseBodyDataDataDTOList[];
  actionJobDTO?: GetAIJobResponseBodyDataActionJobDTO;
  static names(): { [key: string]: string } {
    return {
      dataDTOList: 'DataDTOList',
      actionJobDTO: 'ActionJobDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDTOList: { 'type': 'array', 'itemType': GetAIJobResponseBodyDataDataDTOList },
      actionJobDTO: GetAIJobResponseBodyDataActionJobDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIPlanResponseBodyData extends $tea.Model {
  planId?: string;
  appId?: string;
  planTemplateId?: string;
  triggerEnum?: number;
  intervalTiming?: number;
  preTiming?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      appId: 'AppId',
      planTemplateId: 'PlanTemplateId',
      triggerEnum: 'TriggerEnum',
      intervalTiming: 'IntervalTiming',
      preTiming: 'PreTiming',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      appId: 'string',
      planTemplateId: 'string',
      triggerEnum: 'number',
      intervalTiming: 'number',
      preTiming: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevicePurifyJobByJobIdResponseBodyData extends $tea.Model {
  status?: number;
  deviceName?: string;
  userId?: string;
  planId?: string;
  endTime?: number;
  startTime?: number;
  purifyRecordIndexUrl?: string;
  productKey?: string;
  purifyRecordNameUrl?: string;
  jobId?: string;
  iotId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceName: 'DeviceName',
      userId: 'UserId',
      planId: 'PlanId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      purifyRecordIndexUrl: 'PurifyRecordIndexUrl',
      productKey: 'ProductKey',
      purifyRecordNameUrl: 'PurifyRecordNameUrl',
      jobId: 'JobId',
      iotId: 'IotId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      deviceName: 'string',
      userId: 'string',
      planId: 'string',
      endTime: 'number',
      startTime: 'number',
      purifyRecordIndexUrl: 'string',
      productKey: 'string',
      purifyRecordNameUrl: 'string',
      jobId: 'string',
      iotId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureInfoWithVectorIdsResponseBodyData extends $tea.Model {
  picUrl?: string;
  gatewayIotId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      gatewayIotId: 'GatewayIotId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      gatewayIotId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployTaskByModelIdAndDevicesRequestDeviceList extends $tea.Model {
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

export class PictureSearchPictureResponseBodyDataPageData extends $tea.Model {
  picUrl?: string;
  eventTime?: number;
  gatewayIotId?: string;
  vectorId?: string;
  threshold?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      eventTime: 'EventTime',
      gatewayIotId: 'GatewayIotId',
      vectorId: 'VectorId',
      threshold: 'Threshold',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      eventTime: 'number',
      gatewayIotId: 'string',
      vectorId: 'string',
      threshold: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PictureSearchPictureResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageData?: PictureSearchPictureResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageData: { 'type': 'array', 'itemType': PictureSearchPictureResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIActionResponseBodyData extends $tea.Model {
  actionId?: string;
  planId?: string;
  actionTemplateId?: string;
  actionIndex?: number;
  algo?: string;
  action?: string;
  algoConfig?: string;
  actionConfig?: string;
  static names(): { [key: string]: string } {
    return {
      actionId: 'ActionId',
      planId: 'PlanId',
      actionTemplateId: 'ActionTemplateId',
      actionIndex: 'ActionIndex',
      algo: 'Algo',
      action: 'Action',
      algoConfig: 'AlgoConfig',
      actionConfig: 'ActionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionId: 'string',
      planId: 'string',
      actionTemplateId: 'string',
      actionIndex: 'number',
      algo: 'string',
      action: 'string',
      algoConfig: 'string',
      actionConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIAppResponseBodyDataList extends $tea.Model {
  appId?: string;
  appTemplateId?: string;
  version?: string;
  level?: number;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appTemplateId: 'AppTemplateId',
      version: 'Version',
      level: 'Level',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appTemplateId: 'string',
      version: 'string',
      level: 'number',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIAppResponseBodyData extends $tea.Model {
  total?: number;
  pageCount?: number;
  currentPage?: number;
  pageSize?: number;
  list?: QueryAIAppResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': QueryAIAppResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIJobsResponseBodyDataList extends $tea.Model {
  jobId?: string;
  actionId?: string;
  status?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      actionId: 'ActionId',
      status: 'Status',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      actionId: 'string',
      status: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIJobsResponseBodyData extends $tea.Model {
  total?: number;
  pageCount?: number;
  currentPage?: number;
  pageSize?: number;
  list?: QueryAIJobsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': QueryAIJobsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanResponseBodyDataList extends $tea.Model {
  planId?: string;
  appId?: string;
  planTemplateId?: string;
  triggerEnum?: number;
  intervalTiming?: number;
  preTiming?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      appId: 'AppId',
      planTemplateId: 'PlanTemplateId',
      triggerEnum: 'TriggerEnum',
      intervalTiming: 'IntervalTiming',
      preTiming: 'PreTiming',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      appId: 'string',
      planTemplateId: 'string',
      triggerEnum: 'number',
      intervalTiming: 'number',
      preTiming: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanResponseBodyData extends $tea.Model {
  total?: number;
  pageCount?: number;
  currentPage?: number;
  pageSize?: number;
  list?: QueryAIPlanResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': QueryAIPlanResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAIPlanTemplatesResponseBodyData extends $tea.Model {
  planTemplateId?: string;
  appTemplateId?: string;
  appVersion?: string;
  triggerEnum?: number;
  description?: string;
  intervalTiming?: number;
  static names(): { [key: string]: string } {
    return {
      planTemplateId: 'PlanTemplateId',
      appTemplateId: 'AppTemplateId',
      appVersion: 'AppVersion',
      triggerEnum: 'TriggerEnum',
      description: 'Description',
      intervalTiming: 'IntervalTiming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planTemplateId: 'string',
      appTemplateId: 'string',
      appVersion: 'string',
      triggerEnum: 'number',
      description: 'string',
      intervalTiming: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBodyDataList extends $tea.Model {
  eventId?: string;
  eventTime?: string;
  eventType?: number;
  eventPicId?: string;
  eventDesc?: string;
  eventData?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      eventPicId: 'EventPicId',
      eventDesc: 'EventDesc',
      eventData: 'EventData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventTime: 'string',
      eventType: 'number',
      eventPicId: 'string',
      eventDesc: 'string',
      eventData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventResponseBodyData extends $tea.Model {
  list?: QueryDeviceEventResponseBodyDataList[];
  pageSize?: number;
  pageCount?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryDeviceEventResponseBodyDataList },
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventRecordResponseBodyData extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  fileName?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      fileName: 'FileName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
      fileName: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileVodResponseBodyData extends $tea.Model {
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePictureFileResponseBodyData extends $tea.Model {
  picUrl?: string;
  picCreateTime?: number;
  picId?: string;
  thumbUrl?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      picCreateTime: 'PicCreateTime',
      picId: 'PicId',
      thumbUrl: 'ThumbUrl',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      picCreateTime: 'number',
      picId: 'string',
      thumbUrl: 'string',
      iotId: 'string',
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

export class QueryDevicePurifyJobsResponseBodyDataList extends $tea.Model {
  status?: number;
  deviceName?: string;
  userId?: string;
  planId?: string;
  endTime?: number;
  startTime?: number;
  purifyRecordIndexUrl?: string;
  productKey?: string;
  purifyRecordNameUrl?: string;
  jobId?: string;
  iotId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceName: 'DeviceName',
      userId: 'UserId',
      planId: 'PlanId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      purifyRecordIndexUrl: 'PurifyRecordIndexUrl',
      productKey: 'ProductKey',
      purifyRecordNameUrl: 'PurifyRecordNameUrl',
      jobId: 'JobId',
      iotId: 'IotId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      deviceName: 'string',
      userId: 'string',
      planId: 'string',
      endTime: 'number',
      startTime: 'number',
      purifyRecordIndexUrl: 'string',
      productKey: 'string',
      purifyRecordNameUrl: 'string',
      jobId: 'string',
      iotId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyJobsResponseBodyData extends $tea.Model {
  currentPage?: number;
  list?: QueryDevicePurifyJobsResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': QueryDevicePurifyJobsResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlanByPlanIdResponseBodyData extends $tea.Model {
  endTime?: number;
  startTime?: number;
  productKey?: string;
  deviceName?: string;
  userId?: string;
  planId?: string;
  tenantId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      userId: 'UserId',
      planId: 'PlanId',
      tenantId: 'TenantId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      productKey: 'string',
      deviceName: 'string',
      userId: 'string',
      planId: 'string',
      tenantId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlansResponseBodyDataList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  productKey?: string;
  deviceName?: string;
  userId?: string;
  planId?: string;
  tenantId?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      userId: 'UserId',
      planId: 'PlanId',
      tenantId: 'TenantId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      productKey: 'string',
      deviceName: 'string',
      userId: 'string',
      planId: 'string',
      tenantId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePurifyPlansResponseBodyData extends $tea.Model {
  currentPage?: number;
  list?: QueryDevicePurifyPlansResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': QueryDevicePurifyPlansResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
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
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfo extends $tea.Model {
  timeSectionList?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyData extends $tea.Model {
  recordDuration?: number;
  preRecordDuration?: number;
  name?: string;
  planId?: string;
  templateInfo?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      recordDuration: 'RecordDuration',
      preRecordDuration: 'PreRecordDuration',
      name: 'Name',
      planId: 'PlanId',
      templateInfo: 'TemplateInfo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDuration: 'number',
      preRecordDuration: 'number',
      name: 'string',
      planId: 'string',
      templateInfo: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo extends $tea.Model {
  timeSectionList?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByDeviceResponseBodyData extends $tea.Model {
  recordDuration?: number;
  preRecordDuration?: number;
  name?: string;
  planId?: string;
  templateInfo?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      recordDuration: 'RecordDuration',
      preRecordDuration: 'PreRecordDuration',
      name: 'Name',
      planId: 'PlanId',
      templateInfo: 'TemplateInfo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDuration: 'number',
      preRecordDuration: 'number',
      name: 'string',
      planId: 'string',
      templateInfo: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBodyDataList extends $tea.Model {
  streamType?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      streamType: 'StreamType',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamType: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDeviceByPlanResponseBodyData extends $tea.Model {
  list?: QueryEventRecordPlanDeviceByPlanResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryEventRecordPlanDeviceByPlanResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBodyDataList extends $tea.Model {
  eventType?: string;
  recordDuration?: number;
  preRecordDuration?: number;
  planId?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      recordDuration: 'RecordDuration',
      preRecordDuration: 'PreRecordDuration',
      planId: 'PlanId',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      recordDuration: 'number',
      preRecordDuration: 'number',
      planId: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlansResponseBodyData extends $tea.Model {
  list?: QueryEventRecordPlansResponseBodyDataList[];
  pageSize?: number;
  pageCount?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryEventRecordPlansResponseBodyDataList },
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllDeviceGroupResponseBodyDataDeviceGroupList extends $tea.Model {
  deviceGroupId?: string;
  modifiedTime?: string;
  deviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      deviceGroupName: 'DeviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      modifiedTime: 'string',
      deviceGroupName: 'string',
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
  userGroupList?: QueryFaceAllUserGroupResponseBodyDataUserGroupList[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      userGroupList: 'UserGroupList',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      userGroupList: { 'type': 'array', 'itemType': QueryFaceAllUserGroupResponseBodyDataUserGroupList },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList extends $tea.Model {
  deviceGroupId?: string;
  modifiedTime?: string;
  controlType?: string;
  userGroupId?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      controlType: 'ControlType',
      userGroupId: 'UserGroupId',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      modifiedTime: 'string',
      controlType: 'string',
      userGroupId: 'string',
      controlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  list?: QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserGroupAndDeviceGroupRelationResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBodyDataList extends $tea.Model {
  params?: string;
  customUserId?: string;
  userId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      customUserId: 'CustomUserId',
      userId: 'UserId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      customUserId: 'string',
      userId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserIdsByGroupIdResponseBodyData extends $tea.Model {
  list?: QueryFaceAllUserIdsByGroupIdResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryFaceAllUserIdsByGroupIdResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceDeviceGroupsByDeviceResponseBodyDataDeviceGroupList extends $tea.Model {
  deviceGroupId?: string;
  modifiedTime?: string;
  deviceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      deviceGroupName: 'DeviceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      modifiedTime: 'string',
      deviceGroupName: 'string',
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
  algorithmVersion?: string;
  algorithmProvider?: string;
  errorMessage?: string;
  errorCode?: string;
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmVersion: 'AlgorithmVersion',
      algorithmProvider: 'AlgorithmProvider',
      errorMessage: 'ErrorMessage',
      errorCode: 'ErrorCode',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmVersion: 'string',
      algorithmProvider: 'string',
      errorMessage: 'string',
      errorCode: 'string',
      faceMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyDataFacePicList extends $tea.Model {
  faceUrl?: string;
  featureDTOList?: QueryFaceUserResponseBodyDataFacePicListFeatureDTOList[];
  faceMd5?: string;
  static names(): { [key: string]: string } {
    return {
      faceUrl: 'FaceUrl',
      featureDTOList: 'FeatureDTOList',
      faceMd5: 'FaceMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUrl: 'string',
      featureDTOList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicListFeatureDTOList },
      faceMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserResponseBodyData extends $tea.Model {
  params?: string;
  customUserId?: string;
  userId?: string;
  facePicList?: QueryFaceUserResponseBodyDataFacePicList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      customUserId: 'CustomUserId',
      userId: 'UserId',
      facePicList: 'FacePicList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      customUserId: 'string',
      userId: 'string',
      facePicList: { 'type': 'array', 'itemType': QueryFaceUserResponseBodyDataFacePicList },
      name: 'string',
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
  userGroupList?: QueryFaceUserGroupResponseBodyDataUserGroupList[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      userGroupList: 'UserGroupList',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      userGroupList: { 'type': 'array', 'itemType': QueryFaceUserGroupResponseBodyDataUserGroupList },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  deviceGroupId?: string;
  modifiedTime?: string;
  controlType?: string;
  userGroupId?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      modifiedTime: 'ModifiedTime',
      controlType: 'ControlType',
      userGroupId: 'UserGroupId',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      modifiedTime: 'string',
      controlType: 'string',
      userGroupId: 'string',
      controlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponseBodyData extends $tea.Model {
  params?: string;
  customUserId?: string;
  userId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      customUserId: 'CustomUserId',
      userId: 'UserId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      customUserId: 'string',
      userId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryIotIdsByAIPlanResponseBodyData extends $tea.Model {
  total?: number;
  pageCount?: number;
  currentPage?: number;
  pageSize?: number;
  list?: string[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLiveStreamingResponseBodyData extends $tea.Model {
  path?: string;
  decryptKey?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      decryptKey: 'DecryptKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      decryptKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBodyDataList extends $tea.Model {
  picUrl?: string;
  picCreateTime?: number;
  picId?: string;
  thumbUrl?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      picCreateTime: 'PicCreateTime',
      picId: 'PicId',
      thumbUrl: 'ThumbUrl',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      picCreateTime: 'number',
      picId: 'string',
      thumbUrl: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureFilesResponseBodyData extends $tea.Model {
  list?: QueryPictureFilesResponseBodyDataList[];
  pageSize?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPictureFilesResponseBodyDataList },
      pageSize: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBodyDataPageData extends $tea.Model {
  nickName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAiboxesResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageData?: QueryPictureSearchAiboxesResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchAiboxesResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppResponseBodyDataData extends $tea.Model {
  appInstanceId?: string;
  modifiedTime?: number;
  version?: string;
  createTime?: number;
  appTemplateId?: string;
  name?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      modifiedTime: 'ModifiedTime',
      version: 'Version',
      createTime: 'CreateTime',
      appTemplateId: 'AppTemplateId',
      name: 'Name',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      modifiedTime: 'number',
      version: 'string',
      createTime: 'number',
      appTemplateId: 'string',
      name: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchAppResponseBodyData extends $tea.Model {
  data?: QueryPictureSearchAppResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryPictureSearchAppResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBodyDataPageData extends $tea.Model {
  nickName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchDevicesResponseBodyData extends $tea.Model {
  currentPage?: number;
  pageData?: QueryPictureSearchDevicesResponseBodyDataPageData[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchDevicesResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBodyDataList extends $tea.Model {
  snapshotUrl?: string;
  endTime?: string;
  recordType?: number;
  streamType?: number;
  beginTime?: string;
  fileName?: string;
  videoFrameNumber?: number;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      snapshotUrl: 'SnapshotUrl',
      endTime: 'EndTime',
      recordType: 'RecordType',
      streamType: 'StreamType',
      beginTime: 'BeginTime',
      fileName: 'FileName',
      videoFrameNumber: 'VideoFrameNumber',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotUrl: 'string',
      endTime: 'string',
      recordType: 'number',
      streamType: 'number',
      beginTime: 'string',
      fileName: 'string',
      videoFrameNumber: 'number',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordResponseBodyData extends $tea.Model {
  list?: QueryRecordResponseBodyDataList[];
  pageSize?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordResponseBodyDataList },
      pageSize: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordByRecordIdResponseBodyData extends $tea.Model {
  endTime?: string;
  beginTime?: string;
  fileName?: string;
  vodUrl?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      beginTime: 'BeginTime',
      fileName: 'FileName',
      vodUrl: 'VodUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      beginTime: 'string',
      fileName: 'string',
      vodUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyDataTemplateInfo extends $tea.Model {
  timeSectionList?: QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDetailResponseBodyData extends $tea.Model {
  planId?: string;
  name?: string;
  templateInfo?: QueryRecordPlanDetailResponseBodyDataTemplateInfo;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      name: 'Name',
      templateInfo: 'TemplateInfo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      name: 'string',
      templateInfo: QueryRecordPlanDetailResponseBodyDataTemplateInfo,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo extends $tea.Model {
  timeSectionList?: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByDeviceResponseBodyData extends $tea.Model {
  planId?: string;
  name?: string;
  templateInfo?: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      name: 'Name',
      templateInfo: 'TemplateInfo',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      name: 'string',
      templateInfo: QueryRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo,
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBodyDataList extends $tea.Model {
  streamType?: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      streamType: 'StreamType',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamType: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlanDeviceByPlanResponseBodyData extends $tea.Model {
  list?: QueryRecordPlanDeviceByPlanResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordPlanDeviceByPlanResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBodyDataList extends $tea.Model {
  planId?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordPlansResponseBodyData extends $tea.Model {
  list?: QueryRecordPlansResponseBodyDataList[];
  pageSize?: number;
  pageCount?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryRecordPlansResponseBodyDataList },
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStandardAIAppTemplatesResponseBodyDataList extends $tea.Model {
  appTemplateId?: string;
  version?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appTemplateId: 'AppTemplateId',
      version: 'Version',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTemplateId: 'string',
      version: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStandardAIAppTemplatesResponseBodyData extends $tea.Model {
  total?: number;
  pageCount?: number;
  currentPage?: number;
  pageSize?: number;
  list?: QueryStandardAIAppTemplatesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': QueryStandardAIAppTemplatesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyDataListTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyDataList extends $tea.Model {
  timeSectionList?: QueryTimeTemplateResponseBodyDataListTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryTimeTemplateResponseBodyDataListTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateResponseBodyData extends $tea.Model {
  list?: QueryTimeTemplateResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  pageCount?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
      pageCount: 'PageCount',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryTimeTemplateResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
      pageCount: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBodyDataTimeSectionList extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTimeTemplateDetailResponseBodyData extends $tea.Model {
  timeSectionList?: QueryTimeTemplateDetailResponseBodyDataTimeSectionList[];
  allDay?: number;
  default?: number;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      timeSectionList: 'TimeSectionList',
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSectionList: { 'type': 'array', 'itemType': QueryTimeTemplateDetailResponseBodyDataTimeSectionList },
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVoiceIntercomResponseBodyDataCryptoKey extends $tea.Model {
  key?: string;
  iv?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      iv: 'Iv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      iv: 'string',
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

export class UpdateFaceUserGroupAndDeviceGroupRelationResponseBodyData extends $tea.Model {
  modifiedTime?: string;
  controlId?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      controlId: 'ControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      controlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTimeTemplateRequestTimeSections extends $tea.Model {
  dayOfWeek?: number;
  begin?: number;
  end?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      begin: 'number',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEventRecordPlanDeviceResponse>(await this.doRPCRequest("AddEventRecordPlanDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddEventRecordPlanDeviceResponse({}));
  }

  async addEventRecordPlanDevice(request: AddEventRecordPlanDeviceRequest): Promise<AddEventRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEventRecordPlanDeviceWithOptions(request, runtime);
  }

  async addFaceDeviceGroupWithOptions(request: AddFaceDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceDeviceGroupResponse>(await this.doRPCRequest("AddFaceDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceDeviceGroupResponse({}));
  }

  async addFaceDeviceGroup(request: AddFaceDeviceGroupRequest): Promise<AddFaceDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceDeviceGroupWithOptions(request, runtime);
  }

  async addFaceDeviceToDeviceGroupWithOptions(request: AddFaceDeviceToDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceDeviceToDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceDeviceToDeviceGroupResponse>(await this.doRPCRequest("AddFaceDeviceToDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceDeviceToDeviceGroupResponse({}));
  }

  async addFaceDeviceToDeviceGroup(request: AddFaceDeviceToDeviceGroupRequest): Promise<AddFaceDeviceToDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceDeviceToDeviceGroupWithOptions(request, runtime);
  }

  async addFaceUserWithOptions(request: AddFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceUserResponse>(await this.doRPCRequest("AddFaceUser", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceUserResponse({}));
  }

  async addFaceUser(request: AddFaceUserRequest): Promise<AddFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserWithOptions(request, runtime);
  }

  async addFaceUserGroupWithOptions(request: AddFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceUserGroupResponse>(await this.doRPCRequest("AddFaceUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceUserGroupResponse({}));
  }

  async addFaceUserGroup(request: AddFaceUserGroupRequest): Promise<AddFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserGroupWithOptions(request, runtime);
  }

  async addFaceUserGroupAndDeviceGroupRelationWithOptions(request: AddFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceUserGroupAndDeviceGroupRelationResponse>(await this.doRPCRequest("AddFaceUserGroupAndDeviceGroupRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async addFaceUserGroupAndDeviceGroupRelation(request: AddFaceUserGroupAndDeviceGroupRelationRequest): Promise<AddFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async addFaceUserPictureWithOptions(request: AddFaceUserPictureRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserPictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceUserPictureResponse>(await this.doRPCRequest("AddFaceUserPicture", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceUserPictureResponse({}));
  }

  async addFaceUserPicture(request: AddFaceUserPictureRequest): Promise<AddFaceUserPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserPictureWithOptions(request, runtime);
  }

  async addFaceUserToUserGroupWithOptions(request: AddFaceUserToUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceUserToUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceUserToUserGroupResponse>(await this.doRPCRequest("AddFaceUserToUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceUserToUserGroupResponse({}));
  }

  async addFaceUserToUserGroup(request: AddFaceUserToUserGroupRequest): Promise<AddFaceUserToUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceUserToUserGroupWithOptions(request, runtime);
  }

  async addRecordPlanDeviceWithOptions(request: AddRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRecordPlanDeviceResponse>(await this.doRPCRequest("AddRecordPlanDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddRecordPlanDeviceResponse({}));
  }

  async addRecordPlanDevice(request: AddRecordPlanDeviceRequest): Promise<AddRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRecordPlanDeviceWithOptions(request, runtime);
  }

  async bindAIPlanWithDevicesWithOptions(request: BindAIPlanWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BindAIPlanWithDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAIPlanWithDevicesResponse>(await this.doRPCRequest("BindAIPlanWithDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindAIPlanWithDevicesResponse({}));
  }

  async bindAIPlanWithDevices(request: BindAIPlanWithDevicesRequest): Promise<BindAIPlanWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAIPlanWithDevicesWithOptions(request, runtime);
  }

  async bindPictureSearchAppWithDevicesWithOptions(request: BindPictureSearchAppWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BindPictureSearchAppWithDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindPictureSearchAppWithDevicesResponse>(await this.doRPCRequest("BindPictureSearchAppWithDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new BindPictureSearchAppWithDevicesResponse({}));
  }

  async bindPictureSearchAppWithDevices(request: BindPictureSearchAppWithDevicesRequest): Promise<BindPictureSearchAppWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  async checkFaceUserDoExistOnDeviceWithOptions(request: CheckFaceUserDoExistOnDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CheckFaceUserDoExistOnDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckFaceUserDoExistOnDeviceResponse>(await this.doRPCRequest("CheckFaceUserDoExistOnDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CheckFaceUserDoExistOnDeviceResponse({}));
  }

  async checkFaceUserDoExistOnDevice(request: CheckFaceUserDoExistOnDeviceRequest): Promise<CheckFaceUserDoExistOnDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkFaceUserDoExistOnDeviceWithOptions(request, runtime);
  }

  async clearFaceDeviceDBWithOptions(request: ClearFaceDeviceDBRequest, runtime: $Util.RuntimeOptions): Promise<ClearFaceDeviceDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearFaceDeviceDBResponse>(await this.doRPCRequest("ClearFaceDeviceDB", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ClearFaceDeviceDBResponse({}));
  }

  async clearFaceDeviceDB(request: ClearFaceDeviceDBRequest): Promise<ClearFaceDeviceDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearFaceDeviceDBWithOptions(request, runtime);
  }

  async configAIActionWithOptions(request: ConfigAIActionRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAIActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigAIActionResponse>(await this.doRPCRequest("ConfigAIAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigAIActionResponse({}));
  }

  async configAIAction(request: ConfigAIActionRequest): Promise<ConfigAIActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAIActionWithOptions(request, runtime);
  }

  async createAIAppWithOptions(request: CreateAIAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAIAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAIAppResponse>(await this.doRPCRequest("CreateAIApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAIAppResponse({}));
  }

  async createAIApp(request: CreateAIAppRequest): Promise<CreateAIAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAIAppWithOptions(request, runtime);
  }

  async createAIPlanWithOptions(request: CreateAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAIPlanResponse>(await this.doRPCRequest("CreateAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAIPlanResponse({}));
  }

  async createAIPlan(request: CreateAIPlanRequest): Promise<CreateAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAIPlanWithOptions(request, runtime);
  }

  async createAlgorithmWithOptions(request: CreateAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlgorithmResponse>(await this.doRPCRequest("CreateAlgorithm", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlgorithmResponse({}));
  }

  async createAlgorithm(request: CreateAlgorithmRequest): Promise<CreateAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlgorithmWithOptions(request, runtime);
  }

  async createDevicePurifyJobWithOptions(request: CreateDevicePurifyJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicePurifyJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevicePurifyJobResponse>(await this.doRPCRequest("CreateDevicePurifyJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevicePurifyJobResponse({}));
  }

  async createDevicePurifyJob(request: CreateDevicePurifyJobRequest): Promise<CreateDevicePurifyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicePurifyJobWithOptions(request, runtime);
  }

  async createDevicePurifyJobByPlanIdWithOptions(request: CreateDevicePurifyJobByPlanIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicePurifyJobByPlanIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevicePurifyJobByPlanIdResponse>(await this.doRPCRequest("CreateDevicePurifyJobByPlanId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevicePurifyJobByPlanIdResponse({}));
  }

  async createDevicePurifyJobByPlanId(request: CreateDevicePurifyJobByPlanIdRequest): Promise<CreateDevicePurifyJobByPlanIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicePurifyJobByPlanIdWithOptions(request, runtime);
  }

  async createDevicePurifyPlanWithOptions(request: CreateDevicePurifyPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateDevicePurifyPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDevicePurifyPlanResponse>(await this.doRPCRequest("CreateDevicePurifyPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDevicePurifyPlanResponse({}));
  }

  async createDevicePurifyPlan(request: CreateDevicePurifyPlanRequest): Promise<CreateDevicePurifyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDevicePurifyPlanWithOptions(request, runtime);
  }

  async createEventRecordPlanWithOptions(request: CreateEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEventRecordPlanResponse>(await this.doRPCRequest("CreateEventRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEventRecordPlanResponse({}));
  }

  async createEventRecordPlan(request: CreateEventRecordPlanRequest): Promise<CreateEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventRecordPlanWithOptions(request, runtime);
  }

  async createModelWithOptions(request: CreateModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateModelResponse>(await this.doRPCRequest("CreateModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateModelResponse({}));
  }

  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createModelWithOptions(request, runtime);
  }

  async createPictureSearchAppWithOptions(request: CreatePictureSearchAppRequest, runtime: $Util.RuntimeOptions): Promise<CreatePictureSearchAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePictureSearchAppResponse>(await this.doRPCRequest("CreatePictureSearchApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePictureSearchAppResponse({}));
  }

  async createPictureSearchApp(request: CreatePictureSearchAppRequest): Promise<CreatePictureSearchAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPictureSearchAppWithOptions(request, runtime);
  }

  async createRecordPlanWithOptions(request: CreateRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRecordPlanResponse>(await this.doRPCRequest("CreateRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRecordPlanResponse({}));
  }

  async createRecordPlan(request: CreateRecordPlanRequest): Promise<CreateRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecordPlanWithOptions(request, runtime);
  }

  async createTimeTemplateWithOptions(request: CreateTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTimeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTimeTemplateResponse>(await this.doRPCRequest("CreateTimeTemplate", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTimeTemplateResponse({}));
  }

  async createTimeTemplate(request: CreateTimeTemplateRequest): Promise<CreateTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTimeTemplateWithOptions(request, runtime);
  }

  async deleteAlgorithmWithOptions(request: DeleteAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlgorithmResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlgorithmResponse>(await this.doRPCRequest("DeleteAlgorithm", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlgorithmResponse({}));
  }

  async deleteAlgorithm(request: DeleteAlgorithmRequest): Promise<DeleteAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlgorithmWithOptions(request, runtime);
  }

  async deleteEventRecordPlanWithOptions(request: DeleteEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventRecordPlanResponse>(await this.doRPCRequest("DeleteEventRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventRecordPlanResponse({}));
  }

  async deleteEventRecordPlan(request: DeleteEventRecordPlanRequest): Promise<DeleteEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRecordPlanWithOptions(request, runtime);
  }

  async deleteEventRecordPlanDeviceWithOptions(request: DeleteEventRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventRecordPlanDeviceResponse>(await this.doRPCRequest("DeleteEventRecordPlanDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventRecordPlanDeviceResponse({}));
  }

  async deleteEventRecordPlanDevice(request: DeleteEventRecordPlanDeviceRequest): Promise<DeleteEventRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRecordPlanDeviceWithOptions(request, runtime);
  }

  async deleteFaceDeviceGroupWithOptions(request: DeleteFaceDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceDeviceGroupResponse>(await this.doRPCRequest("DeleteFaceDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceDeviceGroupResponse({}));
  }

  async deleteFaceDeviceGroup(request: DeleteFaceDeviceGroupRequest): Promise<DeleteFaceDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceDeviceGroupWithOptions(request, runtime);
  }

  async deleteFaceUserWithOptions(request: DeleteFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceUserResponse>(await this.doRPCRequest("DeleteFaceUser", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceUserResponse({}));
  }

  async deleteFaceUser(request: DeleteFaceUserRequest): Promise<DeleteFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserWithOptions(request, runtime);
  }

  async deleteFaceUserGroupWithOptions(request: DeleteFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceUserGroupResponse>(await this.doRPCRequest("DeleteFaceUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceUserGroupResponse({}));
  }

  async deleteFaceUserGroup(request: DeleteFaceUserGroupRequest): Promise<DeleteFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserGroupWithOptions(request, runtime);
  }

  async deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request: DeleteFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceUserGroupAndDeviceGroupRelationResponse>(await this.doRPCRequest("DeleteFaceUserGroupAndDeviceGroupRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async deleteFaceUserGroupAndDeviceGroupRelation(request: DeleteFaceUserGroupAndDeviceGroupRelationRequest): Promise<DeleteFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async deleteFaceUserPictureWithOptions(request: DeleteFaceUserPictureRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceUserPictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceUserPictureResponse>(await this.doRPCRequest("DeleteFaceUserPicture", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceUserPictureResponse({}));
  }

  async deleteFaceUserPicture(request: DeleteFaceUserPictureRequest): Promise<DeleteFaceUserPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceUserPictureWithOptions(request, runtime);
  }

  async deleteModelWithOptions(request: DeleteModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteModelResponse>(await this.doRPCRequest("DeleteModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteModelResponse({}));
  }

  async deleteModel(request: DeleteModelRequest): Promise<DeleteModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  async deleteRecordPlanWithOptions(request: DeleteRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRecordPlanResponse>(await this.doRPCRequest("DeleteRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRecordPlanResponse({}));
  }

  async deleteRecordPlan(request: DeleteRecordPlanRequest): Promise<DeleteRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordPlanWithOptions(request, runtime);
  }

  async deleteRecordPlanDeviceWithOptions(request: DeleteRecordPlanDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordPlanDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRecordPlanDeviceResponse>(await this.doRPCRequest("DeleteRecordPlanDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRecordPlanDeviceResponse({}));
  }

  async deleteRecordPlanDevice(request: DeleteRecordPlanDeviceRequest): Promise<DeleteRecordPlanDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordPlanDeviceWithOptions(request, runtime);
  }

  async deleteTimeTemplateWithOptions(request: DeleteTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTimeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTimeTemplateResponse>(await this.doRPCRequest("DeleteTimeTemplate", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTimeTemplateResponse({}));
  }

  async deleteTimeTemplate(request: DeleteTimeTemplateRequest): Promise<DeleteTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTimeTemplateWithOptions(request, runtime);
  }

  async deployModelBatchWithOptions(request: DeployModelBatchRequest, runtime: $Util.RuntimeOptions): Promise<DeployModelBatchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployModelBatchResponse>(await this.doRPCRequest("DeployModelBatch", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeployModelBatchResponse({}));
  }

  async deployModelBatch(request: DeployModelBatchRequest): Promise<DeployModelBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployModelBatchWithOptions(request, runtime);
  }

  async detectUserFaceByUrlWithOptions(request: DetectUserFaceByUrlRequest, runtime: $Util.RuntimeOptions): Promise<DetectUserFaceByUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectUserFaceByUrlResponse>(await this.doRPCRequest("DetectUserFaceByUrl", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DetectUserFaceByUrlResponse({}));
  }

  async detectUserFaceByUrl(request: DetectUserFaceByUrlRequest): Promise<DetectUserFaceByUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectUserFaceByUrlWithOptions(request, runtime);
  }

  async getAIActionWithOptions(request: GetAIActionRequest, runtime: $Util.RuntimeOptions): Promise<GetAIActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIActionResponse>(await this.doRPCRequest("GetAIAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIActionResponse({}));
  }

  async getAIAction(request: GetAIActionRequest): Promise<GetAIActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIActionWithOptions(request, runtime);
  }

  async getAIActionConfigWithOptions(request: GetAIActionConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAIActionConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIActionConfigResponse>(await this.doRPCRequest("GetAIActionConfig", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIActionConfigResponse({}));
  }

  async getAIActionConfig(request: GetAIActionConfigRequest): Promise<GetAIActionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIActionConfigWithOptions(request, runtime);
  }

  async getAIAppWithOptions(request: GetAIAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAIAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIAppResponse>(await this.doRPCRequest("GetAIApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIAppResponse({}));
  }

  async getAIApp(request: GetAIAppRequest): Promise<GetAIAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIAppWithOptions(request, runtime);
  }

  async getAIJobWithOptions(request: GetAIJobRequest, runtime: $Util.RuntimeOptions): Promise<GetAIJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIJobResponse>(await this.doRPCRequest("GetAIJob", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIJobResponse({}));
  }

  async getAIJob(request: GetAIJobRequest): Promise<GetAIJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIJobWithOptions(request, runtime);
  }

  async getAIPlanWithOptions(request: GetAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<GetAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAIPlanResponse>(await this.doRPCRequest("GetAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAIPlanResponse({}));
  }

  async getAIPlan(request: GetAIPlanRequest): Promise<GetAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAIPlanWithOptions(request, runtime);
  }

  async getAlgorithmDetailByIdWithOptions(request: GetAlgorithmDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDetailByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAlgorithmDetailByIdResponse>(await this.doRPCRequest("GetAlgorithmDetailById", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAlgorithmDetailByIdResponse({}));
  }

  async getAlgorithmDetailById(request: GetAlgorithmDetailByIdRequest): Promise<GetAlgorithmDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmDetailByIdWithOptions(request, runtime);
  }

  async getAlgorithmDetailByNameWithOptions(request: GetAlgorithmDetailByNameRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDetailByNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAlgorithmDetailByNameResponse>(await this.doRPCRequest("GetAlgorithmDetailByName", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAlgorithmDetailByNameResponse({}));
  }

  async getAlgorithmDetailByName(request: GetAlgorithmDetailByNameRequest): Promise<GetAlgorithmDetailByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmDetailByNameWithOptions(request, runtime);
  }

  async getDevicePurifyJobByJobIdWithOptions(request: GetDevicePurifyJobByJobIdRequest, runtime: $Util.RuntimeOptions): Promise<GetDevicePurifyJobByJobIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDevicePurifyJobByJobIdResponse>(await this.doRPCRequest("GetDevicePurifyJobByJobId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDevicePurifyJobByJobIdResponse({}));
  }

  async getDevicePurifyJobByJobId(request: GetDevicePurifyJobByJobIdRequest): Promise<GetDevicePurifyJobByJobIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevicePurifyJobByJobIdWithOptions(request, runtime);
  }

  async getModelDetailWithOptions(request: GetModelDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetModelDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetModelDetailResponse>(await this.doRPCRequest("GetModelDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetModelDetailResponse({}));
  }

  async getModelDetail(request: GetModelDetailRequest): Promise<GetModelDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelDetailWithOptions(request, runtime);
  }

  async getModelDetailByIdWithOptions(request: GetModelDetailByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetModelDetailByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetModelDetailByIdResponse>(await this.doRPCRequest("GetModelDetailById", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetModelDetailByIdResponse({}));
  }

  async getModelDetailById(request: GetModelDetailByIdRequest): Promise<GetModelDetailByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelDetailByIdWithOptions(request, runtime);
  }

  async getModelOssPolicyWithOptions(request: GetModelOssPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetModelOssPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetModelOssPolicyResponse>(await this.doRPCRequest("GetModelOssPolicy", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetModelOssPolicyResponse({}));
  }

  async getModelOssPolicy(request: GetModelOssPolicyRequest): Promise<GetModelOssPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getModelOssPolicyWithOptions(request, runtime);
  }

  async getPictureInfoWithVectorIdsWithOptions(request: GetPictureInfoWithVectorIdsRequest, runtime: $Util.RuntimeOptions): Promise<GetPictureInfoWithVectorIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPictureInfoWithVectorIdsResponse>(await this.doRPCRequest("GetPictureInfoWithVectorIds", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPictureInfoWithVectorIdsResponse({}));
  }

  async getPictureInfoWithVectorIds(request: GetPictureInfoWithVectorIdsRequest): Promise<GetPictureInfoWithVectorIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPictureInfoWithVectorIdsWithOptions(request, runtime);
  }

  async getPictureWithVectorIdWithOptions(request: GetPictureWithVectorIdRequest, runtime: $Util.RuntimeOptions): Promise<GetPictureWithVectorIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPictureWithVectorIdResponse>(await this.doRPCRequest("GetPictureWithVectorId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPictureWithVectorIdResponse({}));
  }

  async getPictureWithVectorId(request: GetPictureWithVectorIdRequest): Promise<GetPictureWithVectorIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPictureWithVectorIdWithOptions(request, runtime);
  }

  async listAlgorithmsByPageWithOptions(request: ListAlgorithmsByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListAlgorithmsByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAlgorithmsByPageResponse>(await this.doRPCRequest("ListAlgorithmsByPage", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAlgorithmsByPageResponse({}));
  }

  async listAlgorithmsByPage(request: ListAlgorithmsByPageRequest): Promise<ListAlgorithmsByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlgorithmsByPageWithOptions(request, runtime);
  }

  async listDeployTaskByModelIdAndDevicesWithOptions(request: ListDeployTaskByModelIdAndDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployTaskByModelIdAndDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeployTaskByModelIdAndDevicesResponse>(await this.doRPCRequest("ListDeployTaskByModelIdAndDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeployTaskByModelIdAndDevicesResponse({}));
  }

  async listDeployTaskByModelIdAndDevices(request: ListDeployTaskByModelIdAndDevicesRequest): Promise<ListDeployTaskByModelIdAndDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployTaskByModelIdAndDevicesWithOptions(request, runtime);
  }

  async listDeployTaskByPageWithOptions(request: ListDeployTaskByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployTaskByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeployTaskByPageResponse>(await this.doRPCRequest("ListDeployTaskByPage", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeployTaskByPageResponse({}));
  }

  async listDeployTaskByPage(request: ListDeployTaskByPageRequest): Promise<ListDeployTaskByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployTaskByPageWithOptions(request, runtime);
  }

  async listModelsByPageWithOptions(request: ListModelsByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListModelsByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListModelsByPageResponse>(await this.doRPCRequest("ListModelsByPage", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListModelsByPageResponse({}));
  }

  async listModelsByPage(request: ListModelsByPageRequest): Promise<ListModelsByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModelsByPageWithOptions(request, runtime);
  }

  async listModelVersionsByPageWithOptions(request: ListModelVersionsByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListModelVersionsByPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListModelVersionsByPageResponse>(await this.doRPCRequest("ListModelVersionsByPage", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListModelVersionsByPageResponse({}));
  }

  async listModelVersionsByPage(request: ListModelVersionsByPageRequest): Promise<ListModelVersionsByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listModelVersionsByPageWithOptions(request, runtime);
  }

  async pictureSearchPictureWithOptions(request: PictureSearchPictureRequest, runtime: $Util.RuntimeOptions): Promise<PictureSearchPictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PictureSearchPictureResponse>(await this.doRPCRequest("PictureSearchPicture", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new PictureSearchPictureResponse({}));
  }

  async pictureSearchPicture(request: PictureSearchPictureRequest): Promise<PictureSearchPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pictureSearchPictureWithOptions(request, runtime);
  }

  async queryAIActionWithOptions(request: QueryAIActionRequest, runtime: $Util.RuntimeOptions): Promise<QueryAIActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAIActionResponse>(await this.doRPCRequest("QueryAIAction", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAIActionResponse({}));
  }

  async queryAIAction(request: QueryAIActionRequest): Promise<QueryAIActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAIActionWithOptions(request, runtime);
  }

  async queryAIAppWithOptions(request: QueryAIAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryAIAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAIAppResponse>(await this.doRPCRequest("QueryAIApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAIAppResponse({}));
  }

  async queryAIApp(request: QueryAIAppRequest): Promise<QueryAIAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAIAppWithOptions(request, runtime);
  }

  async queryAIJobsWithOptions(request: QueryAIJobsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAIJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAIJobsResponse>(await this.doRPCRequest("QueryAIJobs", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAIJobsResponse({}));
  }

  async queryAIJobs(request: QueryAIJobsRequest): Promise<QueryAIJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAIJobsWithOptions(request, runtime);
  }

  async queryAIPlanWithOptions(request: QueryAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAIPlanResponse>(await this.doRPCRequest("QueryAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAIPlanResponse({}));
  }

  async queryAIPlan(request: QueryAIPlanRequest): Promise<QueryAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAIPlanWithOptions(request, runtime);
  }

  async queryAIPlanTemplatesWithOptions(request: QueryAIPlanTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAIPlanTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAIPlanTemplatesResponse>(await this.doRPCRequest("QueryAIPlanTemplates", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAIPlanTemplatesResponse({}));
  }

  async queryAIPlanTemplates(request: QueryAIPlanTemplatesRequest): Promise<QueryAIPlanTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAIPlanTemplatesWithOptions(request, runtime);
  }

  async queryDeviceEventWithOptions(request: QueryDeviceEventRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceEventResponse>(await this.doRPCRequest("QueryDeviceEvent", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceEventResponse({}));
  }

  async queryDeviceEvent(request: QueryDeviceEventRequest): Promise<QueryDeviceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventWithOptions(request, runtime);
  }

  async queryDeviceEventPictureWithOptions(request: QueryDeviceEventPictureRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventPictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceEventPictureResponse>(await this.doRPCRequest("QueryDeviceEventPicture", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceEventPictureResponse({}));
  }

  async queryDeviceEventPicture(request: QueryDeviceEventPictureRequest): Promise<QueryDeviceEventPictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventPictureWithOptions(request, runtime);
  }

  async queryDeviceEventRecordWithOptions(request: QueryDeviceEventRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceEventRecordResponse>(await this.doRPCRequest("QueryDeviceEventRecord", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceEventRecordResponse({}));
  }

  async queryDeviceEventRecord(request: QueryDeviceEventRecordRequest): Promise<QueryDeviceEventRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventRecordWithOptions(request, runtime);
  }

  async queryDeviceFileVodWithOptions(request: QueryDeviceFileVodRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceFileVodResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceFileVodResponse>(await this.doRPCRequest("QueryDeviceFileVod", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceFileVodResponse({}));
  }

  async queryDeviceFileVod(request: QueryDeviceFileVodRequest): Promise<QueryDeviceFileVodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceFileVodWithOptions(request, runtime);
  }

  async queryDevicePictureFileWithOptions(request: QueryDevicePictureFileRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePictureFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePictureFileResponse>(await this.doRPCRequest("QueryDevicePictureFile", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePictureFileResponse({}));
  }

  async queryDevicePictureFile(request: QueryDevicePictureFileRequest): Promise<QueryDevicePictureFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePictureFileWithOptions(request, runtime);
  }

  async queryDevicePictureLifeCycleWithOptions(request: QueryDevicePictureLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePictureLifeCycleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePictureLifeCycleResponse>(await this.doRPCRequest("QueryDevicePictureLifeCycle", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePictureLifeCycleResponse({}));
  }

  async queryDevicePictureLifeCycle(request: QueryDevicePictureLifeCycleRequest): Promise<QueryDevicePictureLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePictureLifeCycleWithOptions(request, runtime);
  }

  async queryDevicePurifyJobsWithOptions(request: QueryDevicePurifyJobsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePurifyJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePurifyJobsResponse>(await this.doRPCRequest("QueryDevicePurifyJobs", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePurifyJobsResponse({}));
  }

  async queryDevicePurifyJobs(request: QueryDevicePurifyJobsRequest): Promise<QueryDevicePurifyJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePurifyJobsWithOptions(request, runtime);
  }

  async queryDevicePurifyPlanByPlanIdWithOptions(request: QueryDevicePurifyPlanByPlanIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePurifyPlanByPlanIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePurifyPlanByPlanIdResponse>(await this.doRPCRequest("QueryDevicePurifyPlanByPlanId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePurifyPlanByPlanIdResponse({}));
  }

  async queryDevicePurifyPlanByPlanId(request: QueryDevicePurifyPlanByPlanIdRequest): Promise<QueryDevicePurifyPlanByPlanIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePurifyPlanByPlanIdWithOptions(request, runtime);
  }

  async queryDevicePurifyPlansWithOptions(request: QueryDevicePurifyPlansRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePurifyPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicePurifyPlansResponse>(await this.doRPCRequest("QueryDevicePurifyPlans", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicePurifyPlansResponse({}));
  }

  async queryDevicePurifyPlans(request: QueryDevicePurifyPlansRequest): Promise<QueryDevicePurifyPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePurifyPlansWithOptions(request, runtime);
  }

  async queryDeviceRecordLifeCycleWithOptions(request: QueryDeviceRecordLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceRecordLifeCycleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceRecordLifeCycleResponse>(await this.doRPCRequest("QueryDeviceRecordLifeCycle", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceRecordLifeCycleResponse({}));
  }

  async queryDeviceRecordLifeCycle(request: QueryDeviceRecordLifeCycleRequest): Promise<QueryDeviceRecordLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  async queryDeviceVodUrlWithOptions(request: QueryDeviceVodUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceVodUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceVodUrlResponse>(await this.doRPCRequest("QueryDeviceVodUrl", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceVodUrlResponse({}));
  }

  async queryDeviceVodUrl(request: QueryDeviceVodUrlRequest): Promise<QueryDeviceVodUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceVodUrlWithOptions(request, runtime);
  }

  async queryEventRecordPlanDetailWithOptions(request: QueryEventRecordPlanDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEventRecordPlanDetailResponse>(await this.doRPCRequest("QueryEventRecordPlanDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEventRecordPlanDetailResponse({}));
  }

  async queryEventRecordPlanDetail(request: QueryEventRecordPlanDetailRequest): Promise<QueryEventRecordPlanDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDetailWithOptions(request, runtime);
  }

  async queryEventRecordPlanDeviceByDeviceWithOptions(request: QueryEventRecordPlanDeviceByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDeviceByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEventRecordPlanDeviceByDeviceResponse>(await this.doRPCRequest("QueryEventRecordPlanDeviceByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEventRecordPlanDeviceByDeviceResponse({}));
  }

  async queryEventRecordPlanDeviceByDevice(request: QueryEventRecordPlanDeviceByDeviceRequest): Promise<QueryEventRecordPlanDeviceByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  async queryEventRecordPlanDeviceByPlanWithOptions(request: QueryEventRecordPlanDeviceByPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlanDeviceByPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEventRecordPlanDeviceByPlanResponse>(await this.doRPCRequest("QueryEventRecordPlanDeviceByPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEventRecordPlanDeviceByPlanResponse({}));
  }

  async queryEventRecordPlanDeviceByPlan(request: QueryEventRecordPlanDeviceByPlanRequest): Promise<QueryEventRecordPlanDeviceByPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  async queryEventRecordPlansWithOptions(request: QueryEventRecordPlansRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventRecordPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEventRecordPlansResponse>(await this.doRPCRequest("QueryEventRecordPlans", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEventRecordPlansResponse({}));
  }

  async queryEventRecordPlans(request: QueryEventRecordPlansRequest): Promise<QueryEventRecordPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventRecordPlansWithOptions(request, runtime);
  }

  async queryFaceAllDeviceGroupWithOptions(request: QueryFaceAllDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceAllDeviceGroupResponse>(await this.doRPCRequest("QueryFaceAllDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceAllDeviceGroupResponse({}));
  }

  async queryFaceAllDeviceGroup(request: QueryFaceAllDeviceGroupRequest): Promise<QueryFaceAllDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllDeviceGroupWithOptions(request, runtime);
  }

  async queryFaceAllUserGroupWithOptions(request: QueryFaceAllUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceAllUserGroupResponse>(await this.doRPCRequest("QueryFaceAllUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceAllUserGroupResponse({}));
  }

  async queryFaceAllUserGroup(request: QueryFaceAllUserGroupRequest): Promise<QueryFaceAllUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupWithOptions(request, runtime);
  }

  async queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request: QueryFaceAllUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceAllUserGroupAndDeviceGroupRelationResponse>(await this.doRPCRequest("QueryFaceAllUserGroupAndDeviceGroupRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceAllUserGroupAndDeviceGroupRelationResponse({}));
  }

  async queryFaceAllUserGroupAndDeviceGroupRelation(request: QueryFaceAllUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceAllUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async queryFaceAllUserIdsByGroupIdWithOptions(request: QueryFaceAllUserIdsByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceAllUserIdsByGroupIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceAllUserIdsByGroupIdResponse>(await this.doRPCRequest("QueryFaceAllUserIdsByGroupId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceAllUserIdsByGroupIdResponse({}));
  }

  async queryFaceAllUserIdsByGroupId(request: QueryFaceAllUserIdsByGroupIdRequest): Promise<QueryFaceAllUserIdsByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceAllUserIdsByGroupIdWithOptions(request, runtime);
  }

  async queryFaceCustomUserIdByUserIdWithOptions(request: QueryFaceCustomUserIdByUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceCustomUserIdByUserIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceCustomUserIdByUserIdResponse>(await this.doRPCRequest("QueryFaceCustomUserIdByUserId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceCustomUserIdByUserIdResponse({}));
  }

  async queryFaceCustomUserIdByUserId(request: QueryFaceCustomUserIdByUserIdRequest): Promise<QueryFaceCustomUserIdByUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceCustomUserIdByUserIdWithOptions(request, runtime);
  }

  async queryFaceDeviceGroupsByDeviceWithOptions(request: QueryFaceDeviceGroupsByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceDeviceGroupsByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceDeviceGroupsByDeviceResponse>(await this.doRPCRequest("QueryFaceDeviceGroupsByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceDeviceGroupsByDeviceResponse({}));
  }

  async queryFaceDeviceGroupsByDevice(request: QueryFaceDeviceGroupsByDeviceRequest): Promise<QueryFaceDeviceGroupsByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceDeviceGroupsByDeviceWithOptions(request, runtime);
  }

  async queryFaceUserWithOptions(request: QueryFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceUserResponse>(await this.doRPCRequest("QueryFaceUser", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceUserResponse({}));
  }

  async queryFaceUser(request: QueryFaceUserRequest): Promise<QueryFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserWithOptions(request, runtime);
  }

  async queryFaceUserGroupWithOptions(request: QueryFaceUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceUserGroupResponse>(await this.doRPCRequest("QueryFaceUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceUserGroupResponse({}));
  }

  async queryFaceUserGroup(request: QueryFaceUserGroupRequest): Promise<QueryFaceUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserGroupWithOptions(request, runtime);
  }

  async queryFaceUserGroupAndDeviceGroupRelationWithOptions(request: QueryFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceUserGroupAndDeviceGroupRelationResponse>(await this.doRPCRequest("QueryFaceUserGroupAndDeviceGroupRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async queryFaceUserGroupAndDeviceGroupRelation(request: QueryFaceUserGroupAndDeviceGroupRelationRequest): Promise<QueryFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async queryFaceUserIdByCustomUserIdWithOptions(request: QueryFaceUserIdByCustomUserIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryFaceUserIdByCustomUserIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFaceUserIdByCustomUserIdResponse>(await this.doRPCRequest("QueryFaceUserIdByCustomUserId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFaceUserIdByCustomUserIdResponse({}));
  }

  async queryFaceUserIdByCustomUserId(request: QueryFaceUserIdByCustomUserIdRequest): Promise<QueryFaceUserIdByCustomUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFaceUserIdByCustomUserIdWithOptions(request, runtime);
  }

  async queryIotIdsByAIPlanWithOptions(request: QueryIotIdsByAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryIotIdsByAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryIotIdsByAIPlanResponse>(await this.doRPCRequest("QueryIotIdsByAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryIotIdsByAIPlanResponse({}));
  }

  async queryIotIdsByAIPlan(request: QueryIotIdsByAIPlanRequest): Promise<QueryIotIdsByAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryIotIdsByAIPlanWithOptions(request, runtime);
  }

  async queryLiveStreamingWithOptions(request: QueryLiveStreamingRequest, runtime: $Util.RuntimeOptions): Promise<QueryLiveStreamingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryLiveStreamingResponse>(await this.doRPCRequest("QueryLiveStreaming", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryLiveStreamingResponse({}));
  }

  async queryLiveStreaming(request: QueryLiveStreamingRequest): Promise<QueryLiveStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLiveStreamingWithOptions(request, runtime);
  }

  async queryMonthRecordWithOptions(request: QueryMonthRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMonthRecordResponse>(await this.doRPCRequest("QueryMonthRecord", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMonthRecordResponse({}));
  }

  async queryMonthRecord(request: QueryMonthRecordRequest): Promise<QueryMonthRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthRecordWithOptions(request, runtime);
  }

  async queryPictureFilesWithOptions(request: QueryPictureFilesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPictureFilesResponse>(await this.doRPCRequest("QueryPictureFiles", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPictureFilesResponse({}));
  }

  async queryPictureFiles(request: QueryPictureFilesRequest): Promise<QueryPictureFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureFilesWithOptions(request, runtime);
  }

  async queryPictureSearchAiboxesWithOptions(request: QueryPictureSearchAiboxesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchAiboxesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPictureSearchAiboxesResponse>(await this.doRPCRequest("QueryPictureSearchAiboxes", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPictureSearchAiboxesResponse({}));
  }

  async queryPictureSearchAiboxes(request: QueryPictureSearchAiboxesRequest): Promise<QueryPictureSearchAiboxesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchAiboxesWithOptions(request, runtime);
  }

  async queryPictureSearchAppWithOptions(request: QueryPictureSearchAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPictureSearchAppResponse>(await this.doRPCRequest("QueryPictureSearchApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPictureSearchAppResponse({}));
  }

  async queryPictureSearchApp(request: QueryPictureSearchAppRequest): Promise<QueryPictureSearchAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchAppWithOptions(request, runtime);
  }

  async queryPictureSearchDevicesWithOptions(request: QueryPictureSearchDevicesRequest, runtime: $Util.RuntimeOptions): Promise<QueryPictureSearchDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPictureSearchDevicesResponse>(await this.doRPCRequest("QueryPictureSearchDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPictureSearchDevicesResponse({}));
  }

  async queryPictureSearchDevices(request: QueryPictureSearchDevicesRequest): Promise<QueryPictureSearchDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPictureSearchDevicesWithOptions(request, runtime);
  }

  async queryRecordWithOptions(request: QueryRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordResponse>(await this.doRPCRequest("QueryRecord", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordResponse({}));
  }

  async queryRecord(request: QueryRecordRequest): Promise<QueryRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordWithOptions(request, runtime);
  }

  async queryRecordByRecordIdWithOptions(request: QueryRecordByRecordIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordByRecordIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordByRecordIdResponse>(await this.doRPCRequest("QueryRecordByRecordId", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordByRecordIdResponse({}));
  }

  async queryRecordByRecordId(request: QueryRecordByRecordIdRequest): Promise<QueryRecordByRecordIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordByRecordIdWithOptions(request, runtime);
  }

  async queryRecordPlanDetailWithOptions(request: QueryRecordPlanDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordPlanDetailResponse>(await this.doRPCRequest("QueryRecordPlanDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordPlanDetailResponse({}));
  }

  async queryRecordPlanDetail(request: QueryRecordPlanDetailRequest): Promise<QueryRecordPlanDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDetailWithOptions(request, runtime);
  }

  async queryRecordPlanDeviceByDeviceWithOptions(request: QueryRecordPlanDeviceByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDeviceByDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordPlanDeviceByDeviceResponse>(await this.doRPCRequest("QueryRecordPlanDeviceByDevice", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordPlanDeviceByDeviceResponse({}));
  }

  async queryRecordPlanDeviceByDevice(request: QueryRecordPlanDeviceByDeviceRequest): Promise<QueryRecordPlanDeviceByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByDeviceWithOptions(request, runtime);
  }

  async queryRecordPlanDeviceByPlanWithOptions(request: QueryRecordPlanDeviceByPlanRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlanDeviceByPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordPlanDeviceByPlanResponse>(await this.doRPCRequest("QueryRecordPlanDeviceByPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordPlanDeviceByPlanResponse({}));
  }

  async queryRecordPlanDeviceByPlan(request: QueryRecordPlanDeviceByPlanRequest): Promise<QueryRecordPlanDeviceByPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlanDeviceByPlanWithOptions(request, runtime);
  }

  async queryRecordPlansWithOptions(request: QueryRecordPlansRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordPlansResponse>(await this.doRPCRequest("QueryRecordPlans", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordPlansResponse({}));
  }

  async queryRecordPlans(request: QueryRecordPlansRequest): Promise<QueryRecordPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordPlansWithOptions(request, runtime);
  }

  async queryRecordUrlWithOptions(request: QueryRecordUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRecordUrlResponse>(await this.doRPCRequest("QueryRecordUrl", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRecordUrlResponse({}));
  }

  async queryRecordUrl(request: QueryRecordUrlRequest): Promise<QueryRecordUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordUrlWithOptions(request, runtime);
  }

  async queryStandardAIAppTemplatesWithOptions(request: QueryStandardAIAppTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<QueryStandardAIAppTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryStandardAIAppTemplatesResponse>(await this.doRPCRequest("QueryStandardAIAppTemplates", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryStandardAIAppTemplatesResponse({}));
  }

  async queryStandardAIAppTemplates(request: QueryStandardAIAppTemplatesRequest): Promise<QueryStandardAIAppTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStandardAIAppTemplatesWithOptions(request, runtime);
  }

  async queryTimeTemplateWithOptions(request: QueryTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<QueryTimeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTimeTemplateResponse>(await this.doRPCRequest("QueryTimeTemplate", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTimeTemplateResponse({}));
  }

  async queryTimeTemplate(request: QueryTimeTemplateRequest): Promise<QueryTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTimeTemplateWithOptions(request, runtime);
  }

  async queryTimeTemplateDetailWithOptions(request: QueryTimeTemplateDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryTimeTemplateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTimeTemplateDetailResponse>(await this.doRPCRequest("QueryTimeTemplateDetail", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTimeTemplateDetailResponse({}));
  }

  async queryTimeTemplateDetail(request: QueryTimeTemplateDetailRequest): Promise<QueryTimeTemplateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTimeTemplateDetailWithOptions(request, runtime);
  }

  async queryVoiceIntercomWithOptions(request: QueryVoiceIntercomRequest, runtime: $Util.RuntimeOptions): Promise<QueryVoiceIntercomResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryVoiceIntercomResponse>(await this.doRPCRequest("QueryVoiceIntercom", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new QueryVoiceIntercomResponse({}));
  }

  async queryVoiceIntercom(request: QueryVoiceIntercomRequest): Promise<QueryVoiceIntercomResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVoiceIntercomWithOptions(request, runtime);
  }

  async removeAIAppWithOptions(request: RemoveAIAppRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAIAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAIAppResponse>(await this.doRPCRequest("RemoveAIApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAIAppResponse({}));
  }

  async removeAIApp(request: RemoveAIAppRequest): Promise<RemoveAIAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAIAppWithOptions(request, runtime);
  }

  async removeAIPlanWithOptions(request: RemoveAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAIPlanResponse>(await this.doRPCRequest("RemoveAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAIPlanResponse({}));
  }

  async removeAIPlan(request: RemoveAIPlanRequest): Promise<RemoveAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAIPlanWithOptions(request, runtime);
  }

  async removeDevicePurifyPlanWithOptions(request: RemoveDevicePurifyPlanRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDevicePurifyPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDevicePurifyPlanResponse>(await this.doRPCRequest("RemoveDevicePurifyPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDevicePurifyPlanResponse({}));
  }

  async removeDevicePurifyPlan(request: RemoveDevicePurifyPlanRequest): Promise<RemoveDevicePurifyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDevicePurifyPlanWithOptions(request, runtime);
  }

  async removeFaceDeviceFromDeviceGroupWithOptions(request: RemoveFaceDeviceFromDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFaceDeviceFromDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveFaceDeviceFromDeviceGroupResponse>(await this.doRPCRequest("RemoveFaceDeviceFromDeviceGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveFaceDeviceFromDeviceGroupResponse({}));
  }

  async removeFaceDeviceFromDeviceGroup(request: RemoveFaceDeviceFromDeviceGroupRequest): Promise<RemoveFaceDeviceFromDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFaceDeviceFromDeviceGroupWithOptions(request, runtime);
  }

  async removeFaceUserFromUserGroupWithOptions(request: RemoveFaceUserFromUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFaceUserFromUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveFaceUserFromUserGroupResponse>(await this.doRPCRequest("RemoveFaceUserFromUserGroup", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveFaceUserFromUserGroupResponse({}));
  }

  async removeFaceUserFromUserGroup(request: RemoveFaceUserFromUserGroupRequest): Promise<RemoveFaceUserFromUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFaceUserFromUserGroupWithOptions(request, runtime);
  }

  async setDevicePictureLifeCycleWithOptions(request: SetDevicePictureLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicePictureLifeCycleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDevicePictureLifeCycleResponse>(await this.doRPCRequest("SetDevicePictureLifeCycle", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDevicePictureLifeCycleResponse({}));
  }

  async setDevicePictureLifeCycle(request: SetDevicePictureLifeCycleRequest): Promise<SetDevicePictureLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicePictureLifeCycleWithOptions(request, runtime);
  }

  async setDeviceRecordLifeCycleWithOptions(request: SetDeviceRecordLifeCycleRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceRecordLifeCycleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDeviceRecordLifeCycleResponse>(await this.doRPCRequest("SetDeviceRecordLifeCycle", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new SetDeviceRecordLifeCycleResponse({}));
  }

  async setDeviceRecordLifeCycle(request: SetDeviceRecordLifeCycleRequest): Promise<SetDeviceRecordLifeCycleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceRecordLifeCycleWithOptions(request, runtime);
  }

  async stopLiveStreamingWithOptions(request: StopLiveStreamingRequest, runtime: $Util.RuntimeOptions): Promise<StopLiveStreamingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopLiveStreamingResponse>(await this.doRPCRequest("StopLiveStreaming", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopLiveStreamingResponse({}));
  }

  async stopLiveStreaming(request: StopLiveStreamingRequest): Promise<StopLiveStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLiveStreamingWithOptions(request, runtime);
  }

  async stopTriggeredRecordWithOptions(request: StopTriggeredRecordRequest, runtime: $Util.RuntimeOptions): Promise<StopTriggeredRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopTriggeredRecordResponse>(await this.doRPCRequest("StopTriggeredRecord", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopTriggeredRecordResponse({}));
  }

  async stopTriggeredRecord(request: StopTriggeredRecordRequest): Promise<StopTriggeredRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopTriggeredRecordWithOptions(request, runtime);
  }

  async triggerCapturePictureWithOptions(request: TriggerCapturePictureRequest, runtime: $Util.RuntimeOptions): Promise<TriggerCapturePictureResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TriggerCapturePictureResponse>(await this.doRPCRequest("TriggerCapturePicture", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new TriggerCapturePictureResponse({}));
  }

  async triggerCapturePicture(request: TriggerCapturePictureRequest): Promise<TriggerCapturePictureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerCapturePictureWithOptions(request, runtime);
  }

  async triggerRecordWithOptions(request: TriggerRecordRequest, runtime: $Util.RuntimeOptions): Promise<TriggerRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TriggerRecordResponse>(await this.doRPCRequest("TriggerRecord", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new TriggerRecordResponse({}));
  }

  async triggerRecord(request: TriggerRecordRequest): Promise<TriggerRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerRecordWithOptions(request, runtime);
  }

  async unbindAIPlanWithDevicesWithOptions(request: UnbindAIPlanWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAIPlanWithDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindAIPlanWithDevicesResponse>(await this.doRPCRequest("UnbindAIPlanWithDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindAIPlanWithDevicesResponse({}));
  }

  async unbindAIPlanWithDevices(request: UnbindAIPlanWithDevicesRequest): Promise<UnbindAIPlanWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAIPlanWithDevicesWithOptions(request, runtime);
  }

  async unbindPictureSearchAppWithDevicesWithOptions(request: UnbindPictureSearchAppWithDevicesRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPictureSearchAppWithDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindPictureSearchAppWithDevicesResponse>(await this.doRPCRequest("UnbindPictureSearchAppWithDevices", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindPictureSearchAppWithDevicesResponse({}));
  }

  async unbindPictureSearchAppWithDevices(request: UnbindPictureSearchAppWithDevicesRequest): Promise<UnbindPictureSearchAppWithDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPictureSearchAppWithDevicesWithOptions(request, runtime);
  }

  async updateAIAppWithOptions(request: UpdateAIAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAIAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAIAppResponse>(await this.doRPCRequest("UpdateAIApp", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAIAppResponse({}));
  }

  async updateAIApp(request: UpdateAIAppRequest): Promise<UpdateAIAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAIAppWithOptions(request, runtime);
  }

  async updateAIPlanWithOptions(request: UpdateAIPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAIPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAIPlanResponse>(await this.doRPCRequest("UpdateAIPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAIPlanResponse({}));
  }

  async updateAIPlan(request: UpdateAIPlanRequest): Promise<UpdateAIPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAIPlanWithOptions(request, runtime);
  }

  async updateDevicePurifyPlanWithOptions(request: UpdateDevicePurifyPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDevicePurifyPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDevicePurifyPlanResponse>(await this.doRPCRequest("UpdateDevicePurifyPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDevicePurifyPlanResponse({}));
  }

  async updateDevicePurifyPlan(request: UpdateDevicePurifyPlanRequest): Promise<UpdateDevicePurifyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDevicePurifyPlanWithOptions(request, runtime);
  }

  async updateEventRecordPlanWithOptions(request: UpdateEventRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateEventRecordPlanResponse>(await this.doRPCRequest("UpdateEventRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateEventRecordPlanResponse({}));
  }

  async updateEventRecordPlan(request: UpdateEventRecordPlanRequest): Promise<UpdateEventRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventRecordPlanWithOptions(request, runtime);
  }

  async updateFaceUserWithOptions(request: UpdateFaceUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFaceUserResponse>(await this.doRPCRequest("UpdateFaceUser", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFaceUserResponse({}));
  }

  async updateFaceUser(request: UpdateFaceUserRequest): Promise<UpdateFaceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceUserWithOptions(request, runtime);
  }

  async updateFaceUserGroupAndDeviceGroupRelationWithOptions(request: UpdateFaceUserGroupAndDeviceGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFaceUserGroupAndDeviceGroupRelationResponse>(await this.doRPCRequest("UpdateFaceUserGroupAndDeviceGroupRelation", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFaceUserGroupAndDeviceGroupRelationResponse({}));
  }

  async updateFaceUserGroupAndDeviceGroupRelation(request: UpdateFaceUserGroupAndDeviceGroupRelationRequest): Promise<UpdateFaceUserGroupAndDeviceGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceUserGroupAndDeviceGroupRelationWithOptions(request, runtime);
  }

  async updateModelWithOptions(request: UpdateModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateModelResponse>(await this.doRPCRequest("UpdateModel", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateModelResponse({}));
  }

  async updateModel(request: UpdateModelRequest): Promise<UpdateModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateModelWithOptions(request, runtime);
  }

  async updateRecordPlanWithOptions(request: UpdateRecordPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRecordPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRecordPlanResponse>(await this.doRPCRequest("UpdateRecordPlan", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRecordPlanResponse({}));
  }

  async updateRecordPlan(request: UpdateRecordPlanRequest): Promise<UpdateRecordPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRecordPlanWithOptions(request, runtime);
  }

  async updateTimeTemplateWithOptions(request: UpdateTimeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTimeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTimeTemplateResponse>(await this.doRPCRequest("UpdateTimeTemplate", "2018-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTimeTemplateResponse({}));
  }

  async updateTimeTemplate(request: UpdateTimeTemplateRequest): Promise<UpdateTimeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTimeTemplateWithOptions(request, runtime);
  }

}
