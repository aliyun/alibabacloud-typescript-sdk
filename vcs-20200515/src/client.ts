// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDataSourceRequest extends $tea.Model {
  corpId?: string;
  dataSourceName?: string;
  dataSourceType?: string;
  description?: string;
  fileRetentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      fileRetentionDays: 'FileRetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      description: 'string',
      fileRetentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseBody extends $tea.Model {
  message?: string;
  data?: AddDataSourceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: AddDataSourceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceRequest extends $tea.Model {
  gbId?: string;
  deviceName?: string;
  deviceType?: string;
  deviceAddress?: string;
  deviceSite?: string;
  deviceDirection?: string;
  deviceResolution?: string;
  bitRate?: string;
  corpId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      deviceAddress: 'DeviceAddress',
      deviceSite: 'DeviceSite',
      deviceDirection: 'DeviceDirection',
      deviceResolution: 'DeviceResolution',
      bitRate: 'BitRate',
      corpId: 'CorpId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      deviceAddress: 'string',
      deviceSite: 'string',
      deviceDirection: 'string',
      deviceResolution: 'string',
      bitRate: 'string',
      corpId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorRequest extends $tea.Model {
  corpId?: string;
  monitorType?: string;
  description?: string;
  batchIndicator?: number;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      monitorType: 'MonitorType',
      description: 'Description',
      batchIndicator: 'BatchIndicator',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      monitorType: 'string',
      description: 'string',
      batchIndicator: 'number',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddMonitorResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddMonitorResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddProfileResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddProfileResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  catalogName?: string;
  parentCatalogId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogName: 'CatalogName',
      parentCatalogId: 'ParentCatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogName: 'string',
      parentCatalogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddProfileCatalogResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddProfileCatalogResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddProfileCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddProfileCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindCorpGroupRequest extends $tea.Model {
  corpId?: string;
  corpGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpGroupId: 'CorpGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindCorpGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindCorpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindCorpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindCorpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPersonRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  personMatchingRate?: string;
  personId?: string;
  profileId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      personMatchingRate: 'PersonMatchingRate',
      personId: 'PersonId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      personMatchingRate: 'string',
      personId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPersonResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  matchingRate?: string;
  personId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      matchingRate: 'MatchingRate',
      personId: 'PersonId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      matchingRate: 'string',
      personId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpRequest extends $tea.Model {
  corpName?: string;
  appName?: string;
  parentCorpId?: string;
  description?: string;
  algorithmType?: string;
  isvSubId?: string;
  iconPath?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'CorpName',
      appName: 'AppName',
      parentCorpId: 'ParentCorpId',
      description: 'Description',
      algorithmType: 'AlgorithmType',
      isvSubId: 'IsvSubId',
      iconPath: 'IconPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      appName: 'string',
      parentCorpId: 'string',
      description: 'string',
      algorithmType: 'string',
      isvSubId: 'string',
      iconPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpResponseBody extends $tea.Model {
  corpId?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCorpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCorpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpGroupRequest extends $tea.Model {
  corpId?: string;
  groupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      groupId: 'GroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      groupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCorpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCorpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateUserResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateUserResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userGroupName?: string;
  parentUserGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupName: 'UserGroupName',
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupName: 'string',
      parentUserGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateUserGroupResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateUserGroupResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoComposeTaskRequest extends $tea.Model {
  corpId?: string;
  bucketName?: string;
  domainName?: string;
  imageFileNames?: string;
  audioFileName?: string;
  imageParameters?: string;
  videoFormat?: string;
  videoFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      bucketName: 'BucketName',
      domainName: 'DomainName',
      imageFileNames: 'ImageFileNames',
      audioFileName: 'AudioFileName',
      imageParameters: 'ImageParameters',
      videoFormat: 'VideoFormat',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      bucketName: 'string',
      domainName: 'string',
      imageFileNames: 'string',
      audioFileName: 'string',
      imageParameters: 'string',
      videoFormat: 'string',
      videoFrameRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoComposeTaskResponseBody extends $tea.Model {
  bucketName?: string;
  message?: string;
  requestId?: string;
  domainName?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      message: 'Message',
      requestId: 'RequestId',
      domainName: 'DomainName',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      message: 'string',
      requestId: 'string',
      domainName: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoComposeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoComposeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoComposeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummaryTaskRequest extends $tea.Model {
  corpId?: string;
  deviceId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  optionList?: string;
  liveVideoSummary?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceId: 'DeviceId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      optionList: 'OptionList',
      liveVideoSummary: 'LiveVideoSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      optionList: 'string',
      liveVideoSummary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummaryTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummaryTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVideoSummaryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVideoSummaryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelRequest extends $tea.Model {
  deviceCodes?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCodes: 'DeviceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorpGroupRequest extends $tea.Model {
  corpId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorpGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCorpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCorpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  message?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
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

export class DeleteDeviceForInstanceRequest extends $tea.Model {
  instanceId?: string;
  devices?: DeleteDeviceForInstanceRequestDevices[];
  projectId?: string;
  algorithmId?: string;
  deleteInstanceFlag?: boolean;
  deviceCount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      devices: 'Devices',
      projectId: 'ProjectId',
      algorithmId: 'AlgorithmId',
      deleteInstanceFlag: 'DeleteInstanceFlag',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      devices: { 'type': 'array', 'itemType': DeleteDeviceForInstanceRequestDevices },
      projectId: 'string',
      algorithmId: 'string',
      deleteInstanceFlag: 'boolean',
      deviceCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceForInstanceShrinkRequest extends $tea.Model {
  instanceId?: string;
  devicesShrink?: string;
  projectId?: string;
  algorithmId?: string;
  deleteInstanceFlag?: boolean;
  deviceCount?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      devicesShrink: 'Devices',
      projectId: 'ProjectId',
      algorithmId: 'AlgorithmId',
      deleteInstanceFlag: 'DeleteInstanceFlag',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      devicesShrink: 'string',
      projectId: 'string',
      algorithmId: 'string',
      deleteInstanceFlag: 'boolean',
      deviceCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceForInstanceResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceForInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceForInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceForInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPCDeviceRequest extends $tea.Model {
  deviceCodes?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCodes: 'DeviceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPCDeviceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIPCDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIPCDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIPCDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNVRDeviceRequest extends $tea.Model {
  deviceCodes?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCodes: 'DeviceCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNVRDeviceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNVRDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNVRDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNVRDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  profileId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  catalogId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogId: 'CatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileCatalogResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileCatalogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProfileCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProfileCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  projectIds?: string;
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsRequest extends $tea.Model {
  corpId?: string;
  algorithmType?: string;
  attributeName?: string;
  operatorType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      attributeName: 'AttributeName',
      operatorType: 'OperatorType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      attributeName: 'string',
      operatorType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoSummaryTaskRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoSummaryTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoSummaryTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVideoSummaryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVideoSummaryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  corpIdList?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      corpIdList: 'CorpIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      corpIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DescribeDevicesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DescribeDevicesResponseBodyData,
      code: 'string',
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

export class GetBodyOptionsRequest extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetBodyOptionsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetBodyOptionsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBodyOptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBodyOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetCatalogListResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetCatalogListResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCatalogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCatalogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCaptureStrategyRequest extends $tea.Model {
  deviceCode?: string;
  deviceType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceType: 'DeviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCaptureStrategyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: GetDeviceCaptureStrategyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: GetDeviceCaptureStrategyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCaptureStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceCaptureStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceCaptureStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigRequest extends $tea.Model {
  deviceSn?: string;
  deviceTimeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  retryInterval?: string;
  code?: string;
  audioEnable?: string;
  audioFormat?: string;
  bitRate?: string;
  deviceAddress?: string;
  deviceName?: string;
  encodeFormat?: string;
  frameRate?: string;
  govLength?: number;
  latitude?: string;
  longitude?: string;
  OSDList?: GetDeviceConfigResponseBodyOSDList[];
  OSDTimeEnable?: string;
  OSDTimeType?: string;
  OSDTimeX?: string;
  OSDTimeY?: string;
  resolution?: string;
  deviceId?: string;
  userName?: string;
  passWord?: string;
  protocol?: string;
  serverId?: string;
  serverPort?: string;
  serverIp?: string;
  channelList?: GetDeviceConfigResponseBodyChannelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      retryInterval: 'RetryInterval',
      code: 'Code',
      audioEnable: 'AudioEnable',
      audioFormat: 'AudioFormat',
      bitRate: 'BitRate',
      deviceAddress: 'DeviceAddress',
      deviceName: 'DeviceName',
      encodeFormat: 'EncodeFormat',
      frameRate: 'FrameRate',
      govLength: 'GovLength',
      latitude: 'Latitude',
      longitude: 'Longitude',
      OSDList: 'OSDList',
      OSDTimeEnable: 'OSDTimeEnable',
      OSDTimeType: 'OSDTimeType',
      OSDTimeX: 'OSDTimeX',
      OSDTimeY: 'OSDTimeY',
      resolution: 'Resolution',
      deviceId: 'DeviceId',
      userName: 'UserName',
      passWord: 'PassWord',
      protocol: 'Protocol',
      serverId: 'ServerId',
      serverPort: 'ServerPort',
      serverIp: 'ServerIp',
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      retryInterval: 'string',
      code: 'string',
      audioEnable: 'string',
      audioFormat: 'string',
      bitRate: 'string',
      deviceAddress: 'string',
      deviceName: 'string',
      encodeFormat: 'string',
      frameRate: 'string',
      govLength: 'number',
      latitude: 'string',
      longitude: 'string',
      OSDList: { 'type': 'array', 'itemType': GetDeviceConfigResponseBodyOSDList },
      OSDTimeEnable: 'string',
      OSDTimeType: 'string',
      OSDTimeX: 'string',
      OSDTimeY: 'string',
      resolution: 'string',
      deviceId: 'string',
      userName: 'string',
      passWord: 'string',
      protocol: 'string',
      serverId: 'string',
      serverPort: 'string',
      serverIp: 'string',
      channelList: { 'type': 'array', 'itemType': GetDeviceConfigResponseBodyChannelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceLiveUrlRequest extends $tea.Model {
  deviceId?: string;
  streamType?: number;
  outProtocol?: string;
  corpId?: string;
  gbId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      streamType: 'StreamType',
      outProtocol: 'OutProtocol',
      corpId: 'CorpId',
      gbId: 'GbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      streamType: 'number',
      outProtocol: 'string',
      corpId: 'string',
      gbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceLiveUrlResponseBody extends $tea.Model {
  streamType?: number;
  requestId?: string;
  message?: string;
  code?: string;
  outProtocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      streamType: 'StreamType',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      outProtocol: 'OutProtocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamType: 'number',
      requestId: 'string',
      message: 'string',
      code: 'string',
      outProtocol: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceLiveUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceLiveUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceLiveUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceVideoUrlRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  startTime?: number;
  endTime?: number;
  deviceId?: string;
  outProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      deviceId: 'DeviceId',
      outProtocol: 'OutProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTime: 'number',
      endTime: 'number',
      deviceId: 'string',
      outProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceVideoUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  outProtocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      outProtocol: 'OutProtocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      outProtocol: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceVideoUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceVideoUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceVideoUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultRequest extends $tea.Model {
  pictureId?: string;
  pictureContent?: string;
  pictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      pictureId: 'PictureId',
      pictureContent: 'PictureContent',
      pictureUrl: 'PictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pictureId: 'string',
      pictureContent: 'string',
      pictureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetFaceModelResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetFaceModelResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFaceModelResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFaceModelResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsRequest extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetFaceOptionsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetFaceOptionsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFaceOptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFaceOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryRequest extends $tea.Model {
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponseBody extends $tea.Model {
  data?: GetInventoryResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInventoryResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListRequest extends $tea.Model {
  corpId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMonitorListResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMonitorListResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  minRecordId?: string;
  startTime?: number;
  endTime?: number;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      minRecordId: 'string',
      startTime: 'number',
      endTime: 'number',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMonitorResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMonitorResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMonitorResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMonitorResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailRequest extends $tea.Model {
  corpId?: string;
  personID?: string;
  algorithmType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personID: 'PersonID',
      algorithmType: 'AlgorithmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personID: 'string',
      algorithmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetPersonDetailResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetPersonDetailResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPersonDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPersonDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  faceUrl?: string;
  corpIdList?: { [key: string]: any };
  faceMatchingRateThreshold?: string;
  corpId?: string;
  personIdList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      faceUrl: 'FaceUrl',
      corpIdList: 'CorpIdList',
      faceMatchingRateThreshold: 'FaceMatchingRateThreshold',
      corpId: 'CorpId',
      personIdList: 'PersonIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      faceUrl: 'string',
      corpIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      faceMatchingRateThreshold: 'string',
      corpId: 'string',
      personIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListShrinkRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  faceUrl?: string;
  corpIdListShrink?: string;
  faceMatchingRateThreshold?: string;
  corpId?: string;
  personIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      faceUrl: 'FaceUrl',
      corpIdListShrink: 'CorpIdList',
      faceMatchingRateThreshold: 'FaceMatchingRateThreshold',
      corpId: 'CorpId',
      personIdListShrink: 'PersonIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      faceUrl: 'string',
      corpIdListShrink: 'string',
      faceMatchingRateThreshold: 'string',
      corpId: 'string',
      personIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetPersonListResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetPersonListResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPersonListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPersonListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  profileId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetProfileDetailResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetProfileDetailResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProfileDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProfileDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  personIdList?: { [key: string]: any };
  profileIdList?: { [key: string]: any };
  matchingRateThreshold?: string;
  faceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personIdList: 'PersonIdList',
      profileIdList: 'ProfileIdList',
      matchingRateThreshold: 'MatchingRateThreshold',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      profileIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      matchingRateThreshold: 'string',
      faceImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListShrinkRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  personIdListShrink?: string;
  profileIdListShrink?: string;
  matchingRateThreshold?: string;
  faceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personIdListShrink: 'PersonIdList',
      profileIdListShrink: 'ProfileIdList',
      matchingRateThreshold: 'MatchingRateThreshold',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personIdListShrink: 'string',
      profileIdListShrink: 'string',
      matchingRateThreshold: 'string',
      faceImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetProfileListResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetProfileListResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProfileListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProfileListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userId?: number;
  needFaceDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
      needFaceDetail: 'NeedFaceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
      needFaceDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetUserDetailResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetUserDetailResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoComposeResultRequest extends $tea.Model {
  corpId?: string;
  taskRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskRequestId: 'TaskRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoComposeResultResponseBody extends $tea.Model {
  status?: string;
  message?: string;
  requestId?: string;
  code?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoComposeResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoComposeResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoComposeResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummaryTaskResultRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummaryTaskResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummaryTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoSummaryTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoSummaryTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelRequest extends $tea.Model {
  picId?: string;
  corpId?: string;
  picPath?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picId: 'PicId',
      corpId: 'CorpId',
      picPath: 'PicPath',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picId: 'string',
      corpId: 'string',
      picPath: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InvokeMotorModelResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InvokeMotorModelResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeMotorModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeMotorModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessNumberRequest extends $tea.Model {
  corpIdList?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdList: 'CorpIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessNumberResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: ListAccessNumberResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': ListAccessNumberResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccessNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccessNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsRequest extends $tea.Model {
  corpId?: string;
  algorithmType?: string;
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  capStyle?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      capStyle: 'CapStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      capStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListBodyAlgorithmResultsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListBodyAlgorithmResultsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBodyAlgorithmResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBodyAlgorithmResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsRequest extends $tea.Model {
  startTime?: string;
  tagCode?: string;
  endTime?: string;
  groupId?: string;
  pageNumber?: string;
  pageSize?: string;
  deviceId?: string;
  corpId?: string;
  userGroup?: string;
  deviceGroup?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      tagCode: 'TagCode',
      endTime: 'EndTime',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceId: 'DeviceId',
      corpId: 'CorpId',
      userGroup: 'UserGroup',
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      tagCode: 'string',
      endTime: 'string',
      groupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      deviceId: 'string',
      corpId: 'string',
      userGroup: 'string',
      deviceGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCorpGroupMetricsResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCorpGroupMetricsResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorpGroupMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorpGroupMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsRequest extends $tea.Model {
  corpId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListCorpGroupsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListCorpGroupsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorpGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  userGroupList?: string;
  deviceGroupList?: string;
  deviceIdList?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userGroupList: 'UserGroupList',
      deviceGroupList: 'DeviceGroupList',
      deviceIdList: 'DeviceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      userGroupList: 'string',
      deviceGroupList: 'string',
      deviceIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCorpMetricsResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCorpMetricsResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorpMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorpMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  corpName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      corpName: 'CorpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      corpName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListCorpsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListCorpsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsRequest extends $tea.Model {
  deviceCodeList?: string;
  corpIdList?: string;
  name?: string;
  isPage?: number;
  pageNum?: number;
  pageSize?: number;
  group?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCodeList: 'DeviceCodeList',
      corpIdList: 'CorpIdList',
      name: 'Name',
      isPage: 'IsPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      group: 'Group',
      dataSourceType: 'DataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCodeList: 'string',
      corpIdList: 'string',
      name: 'string',
      isPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      group: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDeviceGroupsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceGroupsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  deviceName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      deviceName: 'DeviceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      deviceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDevicesResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDevicesResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsRequest extends $tea.Model {
  corpId?: string;
  eventType?: string;
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceId?: string;
  recordId?: string;
  eventValue?: string;
  extendValue?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      eventType: 'EventType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceId: 'SourceId',
      recordId: 'RecordId',
      eventValue: 'EventValue',
      extendValue: 'ExtendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      eventType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceId: 'string',
      recordId: 'string',
      eventValue: 'string',
      extendValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListEventAlgorithmDetailsResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListEventAlgorithmDetailsResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventAlgorithmDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventAlgorithmDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsRequest extends $tea.Model {
  corpId?: string;
  eventType?: string;
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  extendValue?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      eventType: 'EventType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      extendValue: 'ExtendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      eventType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      extendValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponseBody extends $tea.Model {
  extendValue?: string;
  message?: string;
  requestId?: string;
  data?: ListEventAlgorithmResultsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      extendValue: 'ExtendValue',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendValue: 'string',
      message: 'string',
      requestId: 'string',
      data: ListEventAlgorithmResultsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventAlgorithmResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventAlgorithmResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsRequest extends $tea.Model {
  corpId?: string;
  algorithmType?: string;
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListFaceAlgorithmResultsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListFaceAlgorithmResultsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceAlgorithmResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceAlgorithmResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  aggregateType?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      aggregateType: 'AggregateType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      aggregateType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListMetricsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListMetricsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsRequest extends $tea.Model {
  corpId?: string;
  algorithmType?: string;
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  plateNumber?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plateNumber: 'PlateNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      plateNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListMotorAlgorithmResultsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListMotorAlgorithmResultsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMotorAlgorithmResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMotorAlgorithmResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRChannelDeviceRequest extends $tea.Model {
  deviceCode?: string;
  isPage?: string;
  pageNum?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      isPage: 'IsPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      isPage: 'string',
      pageNum: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRChannelDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  total?: string;
  data?: ListNVRChannelDeviceResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      total: 'string',
      data: { 'type': 'array', 'itemType': ListNVRChannelDeviceResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRChannelDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNVRChannelDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNVRChannelDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRDeviceRequest extends $tea.Model {
  deviceCode?: string;
  corpIdList?: string;
  isPage?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      corpIdList: 'CorpIdList',
      isPage: 'IsPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      corpIdList: 'string',
      isPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRDeviceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  total?: string;
  data?: ListNVRDeviceResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      total: 'string',
      data: { 'type': 'array', 'itemType': ListNVRDeviceResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNVRDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNVRDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsRequest extends $tea.Model {
  corpId?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  endTime?: string;
  algorithmType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmType: 'AlgorithmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
      endTime: 'string',
      algorithmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListPersonsResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListPersonsResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceRequest extends $tea.Model {
  startTime?: string;
  corpId?: string;
  pageNumber?: string;
  pageSize?: string;
  endTime?: string;
  dataSourceId?: string;
  personId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      endTime: 'EndTime',
      dataSourceId: 'DataSourceId',
      personId: 'PersonId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      corpId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      endTime: 'string',
      dataSourceId: 'string',
      personId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonTraceResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTraceResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceDetailsRequest extends $tea.Model {
  corpId?: string;
  pageNumber?: number;
  pageSize?: number;
  endTime?: string;
  personId?: string;
  startTime?: string;
  subId?: string;
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      endTime: 'EndTime',
      personId: 'PersonId',
      startTime: 'StartTime',
      subId: 'SubId',
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      endTime: 'string',
      personId: 'string',
      startTime: 'string',
      subId: 'string',
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceDetailsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonTraceDetailsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTraceDetailsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonTraceDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonTraceDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountRequest extends $tea.Model {
  corpId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  aggregateType?: string;
  tagCode?: string;
  timeAggregateType?: string;
  minVal?: number;
  maxVal?: number;
  countType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      aggregateType: 'AggregateType',
      tagCode: 'TagCode',
      timeAggregateType: 'TimeAggregateType',
      minVal: 'MinVal',
      maxVal: 'MaxVal',
      countType: 'CountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
      aggregateType: 'string',
      tagCode: 'string',
      timeAggregateType: 'string',
      minVal: 'number',
      maxVal: 'number',
      countType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountResponseBody extends $tea.Model {
  totalCount?: string;
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNo?: string;
  data?: ListPersonVisitCountResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNo: 'string',
      data: { 'type': 'array', 'itemType': ListPersonVisitCountResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonVisitCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonVisitCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeDeviceRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListSubscribeDeviceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListSubscribeDeviceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSubscribeDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSubscribeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListUserGroupsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  personList?: { [key: string]: any };
  userList?: { [key: string]: any };
  matchingRateThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personList: 'PersonList',
      userList: 'UserList',
      matchingRateThreshold: 'MatchingRateThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      matchingRateThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersShrinkRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  personListShrink?: string;
  userListShrink?: string;
  matchingRateThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personListShrink: 'PersonList',
      userListShrink: 'UserList',
      matchingRateThreshold: 'MatchingRateThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personListShrink: 'string',
      userListShrink: 'string',
      matchingRateThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListUsersResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListUsersResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityRequest extends $tea.Model {
  corpId?: string;
  picContent?: string;
  picFormat?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      picContent: 'PicContent',
      picFormat: 'PicFormat',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      picContent: 'string',
      picFormat: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecognizeFaceQualityResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecognizeFaceQualityResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFaceQualityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFaceQualityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageRequest extends $tea.Model {
  corpId?: string;
  picContent?: string;
  picFormat?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      picContent: 'PicContent',
      picFormat: 'PicFormat',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      picContent: 'string',
      picFormat: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecognizeImageResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecognizeImageResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  deviceSn?: string;
  deviceId?: string;
  serverId?: string;
  deviceTimeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceId: 'DeviceId',
      serverId: 'ServerId',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceId: 'string',
      serverId: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  retryInterval?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      retryInterval: 'string',
      code: 'string',
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

export class ReportDeviceCapacityRequest extends $tea.Model {
  longitude?: string;
  latitude?: string;
  audioFormat?: string;
  presetNum?: string;
  PTZCapacity?: string;
  deviceSn?: string;
  deviceTimeStamp?: string;
  streamCapacities?: ReportDeviceCapacityRequestStreamCapacities[];
  static names(): { [key: string]: string } {
    return {
      longitude: 'Longitude',
      latitude: 'Latitude',
      audioFormat: 'AudioFormat',
      presetNum: 'PresetNum',
      PTZCapacity: 'PTZCapacity',
      deviceSn: 'DeviceSn',
      deviceTimeStamp: 'DeviceTimeStamp',
      streamCapacities: 'StreamCapacities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longitude: 'string',
      latitude: 'string',
      audioFormat: 'string',
      presetNum: 'string',
      PTZCapacity: 'string',
      deviceSn: 'string',
      deviceTimeStamp: 'string',
      streamCapacities: { 'type': 'array', 'itemType': ReportDeviceCapacityRequestStreamCapacities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  retryInterval?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      retryInterval: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReportDeviceCapacityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReportDeviceCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVideoSummaryTaskVideoRequest extends $tea.Model {
  corpId?: string;
  taskId?: number;
  saveVideo?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      saveVideo: 'SaveVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'number',
      saveVideo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVideoSummaryTaskVideoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVideoSummaryTaskVideoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveVideoSummaryTaskVideoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveVideoSummaryTaskVideoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  pageNo?: number;
  pageSize?: number;
  optionList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyShrinkRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  pageNo?: number;
  pageSize?: number;
  optionListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionListShrink: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchBodyResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SearchBodyResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchBodyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchBodyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  pageNo?: number;
  pageSize?: number;
  optionList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceShrinkRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  pageNo?: number;
  pageSize?: number;
  optionListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionListShrink: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchFaceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SearchFaceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectRequest extends $tea.Model {
  corpId?: string;
  objectType?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  deviceList?: { [key: string]: any };
  picUrl?: string;
  conditions?: { [key: string]: any };
  algorithmType?: string;
  imagePath?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceList: 'DeviceList',
      picUrl: 'PicUrl',
      conditions: 'Conditions',
      algorithmType: 'AlgorithmType',
      imagePath: 'ImagePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      deviceList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      picUrl: 'string',
      conditions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      algorithmType: 'string',
      imagePath: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectShrinkRequest extends $tea.Model {
  corpId?: string;
  objectType?: string;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  deviceListShrink?: string;
  picUrl?: string;
  conditionsShrink?: string;
  algorithmType?: string;
  imagePathShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceListShrink: 'DeviceList',
      picUrl: 'PicUrl',
      conditionsShrink: 'Conditions',
      algorithmType: 'AlgorithmType',
      imagePathShrink: 'ImagePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      deviceListShrink: 'string',
      picUrl: 'string',
      conditionsShrink: 'string',
      algorithmType: 'string',
      imagePathShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchObjectResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SearchObjectResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorRequest extends $tea.Model {
  taskId?: string;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeDeviceEventRequest extends $tea.Model {
  deviceId?: string;
  pushConfig?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      pushConfig: 'PushConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      pushConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeDeviceEventResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeDeviceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubscribeDeviceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubscribeDeviceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeSpaceEventRequest extends $tea.Model {
  spaceId?: string;
  pushConfig?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
      pushConfig: 'PushConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
      pushConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeSpaceEventResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeSpaceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubscribeSpaceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubscribeSpaceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceTimeRequest extends $tea.Model {
  deviceSn?: string;
  deviceTimeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceTimeResponseBody extends $tea.Model {
  syncInterval?: string;
  requestId?: string;
  message?: string;
  retryInterval?: string;
  NTPServer?: string;
  code?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      syncInterval: 'SyncInterval',
      requestId: 'RequestId',
      message: 'Message',
      retryInterval: 'RetryInterval',
      NTPServer: 'NTPServer',
      code: 'Code',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      syncInterval: 'string',
      requestId: 'string',
      message: 'string',
      retryInterval: 'string',
      NTPServer: 'string',
      code: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncDeviceTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncDeviceTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindCorpGroupRequest extends $tea.Model {
  corpId?: string;
  corpGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpGroupId: 'CorpGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindCorpGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindCorpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindCorpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindCorpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPersonRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  profileId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPersonResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindPersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeDeviceEventRequest extends $tea.Model {
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeDeviceEventResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeDeviceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnsubscribeDeviceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnsubscribeDeviceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeSpaceEventRequest extends $tea.Model {
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeSpaceEventResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeSpaceEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnsubscribeSpaceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnsubscribeSpaceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCorpRequest extends $tea.Model {
  corpId?: string;
  corpName?: string;
  appName?: string;
  parentCorpId?: string;
  description?: string;
  isvSubId?: string;
  iconPath?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpName: 'CorpName',
      appName: 'AppName',
      parentCorpId: 'ParentCorpId',
      description: 'Description',
      isvSubId: 'IsvSubId',
      iconPath: 'IconPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
      appName: 'string',
      parentCorpId: 'string',
      description: 'string',
      isvSubId: 'string',
      iconPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCorpResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCorpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCorpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCorpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceRequest extends $tea.Model {
  gbId?: string;
  deviceName?: string;
  deviceType?: string;
  deviceAddress?: string;
  deviceSite?: string;
  deviceDirection?: string;
  deviceResolution?: string;
  bitRate?: string;
  corpId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      deviceAddress: 'DeviceAddress',
      deviceSite: 'DeviceSite',
      deviceDirection: 'DeviceDirection',
      deviceResolution: 'DeviceResolution',
      bitRate: 'BitRate',
      corpId: 'CorpId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      deviceAddress: 'string',
      deviceSite: 'string',
      deviceDirection: 'string',
      deviceResolution: 'string',
      bitRate: 'string',
      corpId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceCaptureStrategyRequest extends $tea.Model {
  deviceType?: string;
  deviceCode?: string;
  mondayCaptureStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      deviceCode: 'DeviceCode',
      mondayCaptureStrategy: 'MondayCaptureStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      deviceCode: 'string',
      mondayCaptureStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceCaptureStrategyResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceCaptureStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceCaptureStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceCaptureStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  ruleName?: string;
  deviceOperateType?: string;
  deviceList?: string;
  picOperateType?: string;
  picList?: string;
  attributeOperateType?: string;
  attributeName?: string;
  attributeValueList?: string;
  description?: string;
  ruleExpression?: string;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      ruleName: 'RuleName',
      deviceOperateType: 'DeviceOperateType',
      deviceList: 'DeviceList',
      picOperateType: 'PicOperateType',
      picList: 'PicList',
      attributeOperateType: 'AttributeOperateType',
      attributeName: 'AttributeName',
      attributeValueList: 'AttributeValueList',
      description: 'Description',
      ruleExpression: 'RuleExpression',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      ruleName: 'string',
      deviceOperateType: 'string',
      deviceList: 'string',
      picOperateType: 'string',
      picList: 'string',
      attributeOperateType: 'string',
      attributeName: 'string',
      attributeValueList: 'string',
      description: 'string',
      ruleExpression: 'string',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  profileId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  catalogId?: number;
  catalogName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogId: 'number',
      catalogName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateProfileCatalogResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateProfileCatalogResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProfileCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProfileCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  faceImageContent?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      faceImageContent: 'FaceImageContent',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      faceImageContent: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId?: string;
  userGroupId?: number;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateUserGroupResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateUserGroupResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileRequest extends $tea.Model {
  fileType?: string;
  MD5?: string;
  corpId?: string;
  fileContent?: string;
  fileName?: string;
  fileAliasName?: string;
  dataSourceId?: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      MD5: 'MD5',
      corpId: 'CorpId',
      fileContent: 'FileContent',
      fileName: 'FileName',
      fileAliasName: 'FileAliasName',
      dataSourceId: 'DataSourceId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      MD5: 'string',
      corpId: 'string',
      fileContent: 'string',
      fileName: 'string',
      fileAliasName: 'string',
      dataSourceId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UploadFileResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UploadFileResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageRequest extends $tea.Model {
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseBodyData extends $tea.Model {
  kafkaTopic?: string;
  dataSourceId?: string;
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      kafkaTopic: 'KafkaTopic',
      dataSourceId: 'DataSourceId',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaTopic: 'string',
      dataSourceId: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileResponseBodyData extends $tea.Model {
  catalogId?: number;
  profileId?: number;
  isvSubId?: string;
  gender?: string;
  bizId?: string;
  idNumber?: string;
  sceneType?: string;
  phoneNo?: string;
  faceUrl?: string;
  liveAddress?: string;
  name?: string;
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      isvSubId: 'IsvSubId',
      gender: 'Gender',
      bizId: 'BizId',
      idNumber: 'IdNumber',
      sceneType: 'SceneType',
      phoneNo: 'PhoneNo',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      name: 'Name',
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      profileId: 'number',
      isvSubId: 'string',
      gender: 'string',
      bizId: 'string',
      idNumber: 'string',
      sceneType: 'string',
      phoneNo: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      name: 'string',
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogResponseBodyData extends $tea.Model {
  catalogId?: number;
  catalogName?: string;
  isvSubId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      catalogName: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyData extends $tea.Model {
  gender?: string;
  faceImageUrl?: string;
  isvSubId?: string;
  userGroupId?: number;
  userId?: number;
  bizId?: string;
  attachment?: string;
  age?: string;
  idNumber?: string;
  phoneNo?: string;
  address?: string;
  userName?: string;
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceImageUrl: 'FaceImageUrl',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      bizId: 'BizId',
      attachment: 'Attachment',
      age: 'Age',
      idNumber: 'IdNumber',
      phoneNo: 'PhoneNo',
      address: 'Address',
      userName: 'UserName',
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      faceImageUrl: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      userId: 'number',
      bizId: 'string',
      attachment: 'string',
      age: 'string',
      idNumber: 'string',
      phoneNo: 'string',
      address: 'string',
      userName: 'string',
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBodyData extends $tea.Model {
  isvSubId?: string;
  userGroupId?: number;
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvSubId: 'string',
      userGroupId: 'number',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceForInstanceRequestDevices extends $tea.Model {
  deviceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDataRecords extends $tea.Model {
  status?: string;
  deviceName?: string;
  deviceType?: string;
  deviceId?: string;
  deviceAddress?: string;
  createTime?: string;
  corpId?: string;
  longitude?: string;
  inProtocol?: string;
  latitude?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      deviceId: 'DeviceId',
      deviceAddress: 'DeviceAddress',
      createTime: 'CreateTime',
      corpId: 'CorpId',
      longitude: 'Longitude',
      inProtocol: 'InProtocol',
      latitude: 'Latitude',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deviceName: 'string',
      deviceType: 'string',
      deviceId: 'string',
      deviceAddress: 'string',
      createTime: 'string',
      corpId: 'string',
      longitude: 'string',
      inProtocol: 'string',
      latitude: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyData extends $tea.Model {
  pageNum?: number;
  records?: DescribeDevicesResponseBodyDataRecords[];
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      records: 'Records',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      records: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDataRecords },
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponseBodyDataOptionList extends $tea.Model {
  key?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponseBodyData extends $tea.Model {
  key?: string;
  optionList?: GetBodyOptionsResponseBodyDataOptionList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      optionList: 'OptionList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      optionList: { 'type': 'array', 'itemType': GetBodyOptionsResponseBodyDataOptionList },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListResponseBodyData extends $tea.Model {
  catalogId?: number;
  catalogName?: string;
  isvSubId?: string;
  parentCatalogId?: number;
  profileCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
      isvSubId: 'IsvSubId',
      parentCatalogId: 'ParentCatalogId',
      profileCount: 'ProfileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      catalogName: 'string',
      isvSubId: 'string',
      parentCatalogId: 'number',
      profileCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCaptureStrategyResponseBodyData extends $tea.Model {
  deviceType?: string;
  deviceCode?: string;
  mondayCaptureStrategy?: string;
  tuesdayCaptureStrategy?: string;
  wednesdayCaptureStrategy?: string;
  thursdayCaptureStrategy?: string;
  fridayCaptureStrategy?: string;
  saturdayCaptureStrategy?: string;
  sundayCaptureStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      deviceCode: 'DeviceCode',
      mondayCaptureStrategy: 'MondayCaptureStrategy',
      tuesdayCaptureStrategy: 'TuesdayCaptureStrategy',
      wednesdayCaptureStrategy: 'WednesdayCaptureStrategy',
      thursdayCaptureStrategy: 'ThursdayCaptureStrategy',
      fridayCaptureStrategy: 'FridayCaptureStrategy',
      saturdayCaptureStrategy: 'SaturdayCaptureStrategy',
      sundayCaptureStrategy: 'SundayCaptureStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      deviceCode: 'string',
      mondayCaptureStrategy: 'string',
      tuesdayCaptureStrategy: 'string',
      wednesdayCaptureStrategy: 'string',
      thursdayCaptureStrategy: 'string',
      fridayCaptureStrategy: 'string',
      saturdayCaptureStrategy: 'string',
      sundayCaptureStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponseBodyOSDList extends $tea.Model {
  leftTopX?: string;
  leftTopY?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftTopX: 'string',
      leftTopY: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponseBodyChannelList extends $tea.Model {
  channelGbId?: string;
  mondayCaptureStrategy?: string;
  tuesdayCaptureStrategy?: string;
  wednesdayCaptureStrategy?: string;
  thursdayCaptureStrategy?: string;
  fridayCaptureStrategy?: string;
  saturdayCaptureStrategy?: string;
  sundayCaptureStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      channelGbId: 'ChannelGbId',
      mondayCaptureStrategy: 'MondayCaptureStrategy',
      tuesdayCaptureStrategy: 'TuesdayCaptureStrategy',
      wednesdayCaptureStrategy: 'WednesdayCaptureStrategy',
      thursdayCaptureStrategy: 'ThursdayCaptureStrategy',
      fridayCaptureStrategy: 'FridayCaptureStrategy',
      saturdayCaptureStrategy: 'SaturdayCaptureStrategy',
      sundayCaptureStrategy: 'SundayCaptureStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelGbId: 'string',
      mondayCaptureStrategy: 'string',
      tuesdayCaptureStrategy: 'string',
      wednesdayCaptureStrategy: 'string',
      thursdayCaptureStrategy: 'string',
      fridayCaptureStrategy: 'string',
      saturdayCaptureStrategy: 'string',
      sundayCaptureStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponseBodyDataRecords extends $tea.Model {
  rightBottomY?: number;
  hairColorReliability?: string;
  hairColor?: number;
  faceStyle?: string;
  glassStyleReliability?: string;
  mustacheStyleReliability?: string;
  respiratorColorReliability?: string;
  rightBottomX?: number;
  ageUpLimit?: number;
  ageUpLimitReliability?: string;
  hairStyle?: number;
  ageLowerLimit?: number;
  leftTopY?: number;
  featureData?: number[];
  skinColorReliability?: string;
  capColor?: number;
  faceStyleReliability?: string;
  capStyleReliability?: string;
  genderCodeReliability?: string;
  hairStyleReliability?: string;
  glassColorReliability?: string;
  ethicCode?: number;
  respiratorColor?: number;
  mustacheStyle?: string;
  glassColor?: number;
  glassStyle?: number;
  skinColor?: number;
  capColorReliability?: string;
  capStyle?: number;
  genderCode?: number;
  leftTopX?: number;
  ageLowerLimitReliability?: string;
  ethicCodeReliability?: string;
  static names(): { [key: string]: string } {
    return {
      rightBottomY: 'RightBottomY',
      hairColorReliability: 'HairColorReliability',
      hairColor: 'HairColor',
      faceStyle: 'FaceStyle',
      glassStyleReliability: 'GlassStyleReliability',
      mustacheStyleReliability: 'MustacheStyleReliability',
      respiratorColorReliability: 'RespiratorColorReliability',
      rightBottomX: 'RightBottomX',
      ageUpLimit: 'AgeUpLimit',
      ageUpLimitReliability: 'AgeUpLimitReliability',
      hairStyle: 'HairStyle',
      ageLowerLimit: 'AgeLowerLimit',
      leftTopY: 'LeftTopY',
      featureData: 'FeatureData',
      skinColorReliability: 'SkinColorReliability',
      capColor: 'CapColor',
      faceStyleReliability: 'FaceStyleReliability',
      capStyleReliability: 'CapStyleReliability',
      genderCodeReliability: 'GenderCodeReliability',
      hairStyleReliability: 'HairStyleReliability',
      glassColorReliability: 'GlassColorReliability',
      ethicCode: 'EthicCode',
      respiratorColor: 'RespiratorColor',
      mustacheStyle: 'MustacheStyle',
      glassColor: 'GlassColor',
      glassStyle: 'GlassStyle',
      skinColor: 'SkinColor',
      capColorReliability: 'CapColorReliability',
      capStyle: 'CapStyle',
      genderCode: 'GenderCode',
      leftTopX: 'LeftTopX',
      ageLowerLimitReliability: 'AgeLowerLimitReliability',
      ethicCodeReliability: 'EthicCodeReliability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightBottomY: 'number',
      hairColorReliability: 'string',
      hairColor: 'number',
      faceStyle: 'string',
      glassStyleReliability: 'string',
      mustacheStyleReliability: 'string',
      respiratorColorReliability: 'string',
      rightBottomX: 'number',
      ageUpLimit: 'number',
      ageUpLimitReliability: 'string',
      hairStyle: 'number',
      ageLowerLimit: 'number',
      leftTopY: 'number',
      featureData: { 'type': 'array', 'itemType': 'number' },
      skinColorReliability: 'string',
      capColor: 'number',
      faceStyleReliability: 'string',
      capStyleReliability: 'string',
      genderCodeReliability: 'string',
      hairStyleReliability: 'string',
      glassColorReliability: 'string',
      ethicCode: 'number',
      respiratorColor: 'number',
      mustacheStyle: 'string',
      glassColor: 'number',
      glassStyle: 'number',
      skinColor: 'number',
      capColorReliability: 'string',
      capStyle: 'number',
      genderCode: 'number',
      leftTopX: 'number',
      ageLowerLimitReliability: 'string',
      ethicCodeReliability: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponseBodyData extends $tea.Model {
  records?: GetFaceModelResultResponseBodyDataRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetFaceModelResultResponseBodyDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponseBodyDataOptionList extends $tea.Model {
  key?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponseBodyData extends $tea.Model {
  key?: string;
  optionList?: GetFaceOptionsResponseBodyDataOptionList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      optionList: 'OptionList',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      optionList: { 'type': 'array', 'itemType': GetFaceOptionsResponseBodyDataOptionList },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponseBodyDataResultObject extends $tea.Model {
  commodityCode?: string;
  currentInventory?: string;
  inventoryId?: string;
  instanceId?: string;
  buyerId?: string;
  validStartTime?: string;
  validEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currentInventory: 'CurrentInventory',
      inventoryId: 'InventoryId',
      instanceId: 'InstanceId',
      buyerId: 'BuyerId',
      validStartTime: 'ValidStartTime',
      validEndTime: 'ValidEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currentInventory: 'string',
      inventoryId: 'string',
      instanceId: 'string',
      buyerId: 'string',
      validStartTime: 'string',
      validEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponseBodyData extends $tea.Model {
  resultObject?: GetInventoryResponseBodyDataResultObject[];
  static names(): { [key: string]: string } {
    return {
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultObject: { 'type': 'array', 'itemType': GetInventoryResponseBodyDataResultObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBodyDataRecords extends $tea.Model {
  status?: string;
  ruleExpression?: string;
  imageMatch?: string;
  monitorType?: string;
  createDate?: string;
  ruleName?: string;
  notifierType?: string;
  description?: string;
  expression?: string;
  notifierExtra?: string;
  attributes?: string;
  deviceList?: string;
  taskId?: string;
  modifiedDate?: string;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ruleExpression: 'RuleExpression',
      imageMatch: 'ImageMatch',
      monitorType: 'MonitorType',
      createDate: 'CreateDate',
      ruleName: 'RuleName',
      notifierType: 'NotifierType',
      description: 'Description',
      expression: 'Expression',
      notifierExtra: 'NotifierExtra',
      attributes: 'Attributes',
      deviceList: 'DeviceList',
      taskId: 'TaskId',
      modifiedDate: 'ModifiedDate',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ruleExpression: 'string',
      imageMatch: 'string',
      monitorType: 'string',
      createDate: 'string',
      ruleName: 'string',
      notifierType: 'string',
      description: 'string',
      expression: 'string',
      notifierExtra: 'string',
      attributes: 'string',
      deviceList: 'string',
      taskId: 'string',
      modifiedDate: 'string',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBodyData extends $tea.Model {
  records?: GetMonitorListResponseBodyDataRecords[];
  pageNo?: number;
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNo: 'PageNo',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetMonitorListResponseBodyDataRecords },
      pageNo: 'number',
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyDataRecordsExtendInfo extends $tea.Model {
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyDataRecords extends $tea.Model {
  picUrl?: string;
  rightBottomY?: string;
  score?: string;
  monitorPicUrl?: string;
  rightBottomX?: string;
  extendInfo?: GetMonitorResultResponseBodyDataRecordsExtendInfo;
  gbId?: string;
  leftUpY?: string;
  leftUpX?: string;
  shotTime?: string;
  taskId?: string;
  targetPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      monitorPicUrl: 'MonitorPicUrl',
      rightBottomX: 'RightBottomX',
      extendInfo: 'ExtendInfo',
      gbId: 'GbId',
      leftUpY: 'LeftUpY',
      leftUpX: 'LeftUpX',
      shotTime: 'ShotTime',
      taskId: 'TaskId',
      targetPicUrl: 'TargetPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      rightBottomY: 'string',
      score: 'string',
      monitorPicUrl: 'string',
      rightBottomX: 'string',
      extendInfo: GetMonitorResultResponseBodyDataRecordsExtendInfo,
      gbId: 'string',
      leftUpY: 'string',
      leftUpX: 'string',
      shotTime: 'string',
      taskId: 'string',
      targetPicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyData extends $tea.Model {
  maxId?: string;
  records?: GetMonitorResultResponseBodyDataRecords[];
  static names(): { [key: string]: string } {
    return {
      maxId: 'MaxId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxId: 'string',
      records: { 'type': 'array', 'itemType': GetMonitorResultResponseBodyDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponseBodyDataTagList extends $tea.Model {
  tagValueId?: string;
  tagName?: string;
  tagCode?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValueId: 'TagValueId',
      tagName: 'TagName',
      tagCode: 'TagCode',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueId: 'string',
      tagName: 'string',
      tagCode: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponseBodyData extends $tea.Model {
  picUrl?: string;
  tagList?: GetPersonDetailResponseBodyDataTagList[];
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      tagList: 'TagList',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      tagList: { 'type': 'array', 'itemType': GetPersonDetailResponseBodyDataTagList },
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseBodyDataRecordsPropertyTagList extends $tea.Model {
  value?: string;
  tagName?: string;
  tagCodeName?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      tagName: 'TagName',
      tagCodeName: 'TagCodeName',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      tagName: 'string',
      tagCodeName: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseBodyDataRecords extends $tea.Model {
  propertyTagList?: GetPersonListResponseBodyDataRecordsPropertyTagList[];
  faceUrl?: string;
  searchMatchingRate?: string;
  personId?: string;
  lastShotTime?: number;
  firstShotTime?: number;
  static names(): { [key: string]: string } {
    return {
      propertyTagList: 'PropertyTagList',
      faceUrl: 'FaceUrl',
      searchMatchingRate: 'SearchMatchingRate',
      personId: 'PersonId',
      lastShotTime: 'LastShotTime',
      firstShotTime: 'FirstShotTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyTagList: { 'type': 'array', 'itemType': GetPersonListResponseBodyDataRecordsPropertyTagList },
      faceUrl: 'string',
      searchMatchingRate: 'string',
      personId: 'string',
      lastShotTime: 'number',
      firstShotTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseBodyData extends $tea.Model {
  records?: GetPersonListResponseBodyDataRecords[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetPersonListResponseBodyDataRecords },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailResponseBodyData extends $tea.Model {
  catalogId?: number;
  profileId?: number;
  isvSubId?: string;
  gender?: string;
  bizId?: string;
  idNumber?: string;
  sceneType?: string;
  phoneNo?: string;
  faceUrl?: string;
  liveAddress?: string;
  name?: string;
  personId?: string;
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      isvSubId: 'IsvSubId',
      gender: 'Gender',
      bizId: 'BizId',
      idNumber: 'IdNumber',
      sceneType: 'SceneType',
      phoneNo: 'PhoneNo',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      name: 'Name',
      personId: 'PersonId',
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      profileId: 'number',
      isvSubId: 'string',
      gender: 'string',
      bizId: 'string',
      idNumber: 'string',
      sceneType: 'string',
      phoneNo: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      name: 'string',
      personId: 'string',
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponseBodyDataRecords extends $tea.Model {
  catalogId?: number;
  profileId?: number;
  idNumber?: string;
  sceneType?: string;
  isvSubId?: string;
  gender?: string;
  faceUrl?: string;
  bizId?: string;
  searchMatchingRate?: string;
  name?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      idNumber: 'IdNumber',
      sceneType: 'SceneType',
      isvSubId: 'IsvSubId',
      gender: 'Gender',
      faceUrl: 'FaceUrl',
      bizId: 'BizId',
      searchMatchingRate: 'SearchMatchingRate',
      name: 'Name',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      profileId: 'number',
      idNumber: 'string',
      sceneType: 'string',
      isvSubId: 'string',
      gender: 'string',
      faceUrl: 'string',
      bizId: 'string',
      searchMatchingRate: 'string',
      name: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponseBodyData extends $tea.Model {
  success?: boolean;
  records?: GetProfileListResponseBodyDataRecords[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      records: 'Records',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      records: { 'type': 'array', 'itemType': GetProfileListResponseBodyDataRecords },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailResponseBodyData extends $tea.Model {
  gender?: string;
  faceImageUrl?: string;
  isvSubId?: string;
  userGroupId?: number;
  userId?: number;
  bizId?: string;
  attachment?: string;
  age?: string;
  idNumber?: string;
  phoneNo?: string;
  address?: string;
  userName?: string;
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      faceImageUrl: 'FaceImageUrl',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      bizId: 'BizId',
      attachment: 'Attachment',
      age: 'Age',
      idNumber: 'IdNumber',
      phoneNo: 'PhoneNo',
      address: 'Address',
      userName: 'UserName',
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      faceImageUrl: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      userId: 'number',
      bizId: 'string',
      attachment: 'string',
      age: 'string',
      idNumber: 'string',
      phoneNo: 'string',
      address: 'string',
      userName: 'string',
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelResponseBodyData extends $tea.Model {
  structList?: string;
  static names(): { [key: string]: string } {
    return {
      structList: 'StructList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessNumberResponseBodyData extends $tea.Model {
  item?: string;
  count?: string;
  percent?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      count: 'Count',
      percent: 'Percent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      count: 'string',
      percent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponseBodyDataRecords extends $tea.Model {
  rightBottomY?: number;
  dataSourceId?: string;
  picUrlPath?: string;
  trousersColor?: string;
  rightBottomX?: number;
  coatColor?: string;
  sourceId?: string;
  maxAge?: string;
  coatLength?: string;
  targetPicUrlPath?: string;
  hairStyle?: string;
  coatStyle?: string;
  leftTopY?: number;
  minAge?: string;
  corpId?: string;
  trousersLength?: string;
  trousersStyle?: string;
  shotTime?: string;
  leftTopX?: number;
  genderCode?: string;
  personId?: string;
  capStyle?: string;
  static names(): { [key: string]: string } {
    return {
      rightBottomY: 'RightBottomY',
      dataSourceId: 'DataSourceId',
      picUrlPath: 'PicUrlPath',
      trousersColor: 'TrousersColor',
      rightBottomX: 'RightBottomX',
      coatColor: 'CoatColor',
      sourceId: 'SourceId',
      maxAge: 'MaxAge',
      coatLength: 'CoatLength',
      targetPicUrlPath: 'TargetPicUrlPath',
      hairStyle: 'HairStyle',
      coatStyle: 'CoatStyle',
      leftTopY: 'LeftTopY',
      minAge: 'MinAge',
      corpId: 'CorpId',
      trousersLength: 'TrousersLength',
      trousersStyle: 'TrousersStyle',
      shotTime: 'ShotTime',
      leftTopX: 'LeftTopX',
      genderCode: 'GenderCode',
      personId: 'PersonId',
      capStyle: 'CapStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightBottomY: 'number',
      dataSourceId: 'string',
      picUrlPath: 'string',
      trousersColor: 'string',
      rightBottomX: 'number',
      coatColor: 'string',
      sourceId: 'string',
      maxAge: 'string',
      coatLength: 'string',
      targetPicUrlPath: 'string',
      hairStyle: 'string',
      coatStyle: 'string',
      leftTopY: 'number',
      minAge: 'string',
      corpId: 'string',
      trousersLength: 'string',
      trousersStyle: 'string',
      shotTime: 'string',
      leftTopX: 'number',
      genderCode: 'string',
      personId: 'string',
      capStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponseBodyData extends $tea.Model {
  records?: ListBodyAlgorithmResultsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListBodyAlgorithmResultsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsResponseBodyData extends $tea.Model {
  dateId?: string;
  deviceGroupId?: string;
  corpGroupId?: string;
  deviceId?: string;
  userGroupId?: string;
  tagCode?: string;
  corpId?: string;
  tagMetrics?: string;
  tagValue?: string;
  personID?: string;
  static names(): { [key: string]: string } {
    return {
      dateId: 'DateId',
      deviceGroupId: 'DeviceGroupId',
      corpGroupId: 'CorpGroupId',
      deviceId: 'DeviceId',
      userGroupId: 'UserGroupId',
      tagCode: 'TagCode',
      corpId: 'CorpId',
      tagMetrics: 'TagMetrics',
      tagValue: 'TagValue',
      personID: 'PersonID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateId: 'string',
      deviceGroupId: 'string',
      corpGroupId: 'string',
      deviceId: 'string',
      userGroupId: 'string',
      tagCode: 'string',
      corpId: 'string',
      tagMetrics: 'string',
      tagValue: 'string',
      personID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsResponseBodyData extends $tea.Model {
  records?: string[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': 'string' },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsResponseBodyData extends $tea.Model {
  dateId?: string;
  deviceGroupId?: string;
  deviceId?: string;
  userGroupId?: string;
  tagCode?: string;
  corpId?: string;
  tagMetrics?: string;
  tagValue?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      dateId: 'DateId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
      userGroupId: 'UserGroupId',
      tagCode: 'TagCode',
      corpId: 'CorpId',
      tagMetrics: 'TagMetrics',
      tagValue: 'TagValue',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
      userGroupId: 'string',
      tagCode: 'string',
      corpId: 'string',
      tagMetrics: 'string',
      tagValue: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponseBodyDataRecords extends $tea.Model {
  parentCorpId?: string;
  appName?: string;
  isvSubId?: string;
  description?: string;
  corpName?: string;
  corpId?: string;
  acuUsed?: number;
  createDate?: string;
  iconPath?: string;
  deviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      parentCorpId: 'ParentCorpId',
      appName: 'AppName',
      isvSubId: 'IsvSubId',
      description: 'Description',
      corpName: 'CorpName',
      corpId: 'CorpId',
      acuUsed: 'AcuUsed',
      createDate: 'CreateDate',
      iconPath: 'IconPath',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentCorpId: 'string',
      appName: 'string',
      isvSubId: 'string',
      description: 'string',
      corpName: 'string',
      corpId: 'string',
      acuUsed: 'number',
      createDate: 'string',
      iconPath: 'string',
      deviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponseBodyData extends $tea.Model {
  records?: ListCorpsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListCorpsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponseBodyDataList extends $tea.Model {
  deviceStreamStatus?: string;
  deviceName?: string;
  deviceStatus?: string;
  regionId?: string;
  deviceSn?: string;
  deviceComputeStatus?: string;
  installAddress?: string;
  deviceGroup?: string;
  regionName?: string;
  dataSourceType?: string;
  resolvingPower?: string;
  deviceCode?: string;
  bitRate?: string;
  codingFormat?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deviceStreamStatus: 'DeviceStreamStatus',
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      regionId: 'RegionId',
      deviceSn: 'DeviceSn',
      deviceComputeStatus: 'DeviceComputeStatus',
      installAddress: 'InstallAddress',
      deviceGroup: 'DeviceGroup',
      regionName: 'RegionName',
      dataSourceType: 'DataSourceType',
      resolvingPower: 'ResolvingPower',
      deviceCode: 'DeviceCode',
      bitRate: 'BitRate',
      codingFormat: 'CodingFormat',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStreamStatus: 'string',
      deviceName: 'string',
      deviceStatus: 'string',
      regionId: 'string',
      deviceSn: 'string',
      deviceComputeStatus: 'string',
      installAddress: 'string',
      deviceGroup: 'string',
      regionName: 'string',
      dataSourceType: 'string',
      resolvingPower: 'string',
      deviceCode: 'string',
      bitRate: 'string',
      codingFormat: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponseBodyData extends $tea.Model {
  list?: ListDeviceGroupsResponseBodyDataList[];
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDeviceGroupsResponseBodyDataList },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataRecords extends $tea.Model {
  status?: number;
  sipGBId?: string;
  deviceDirection?: string;
  deviceName?: string;
  deviceAddress?: string;
  deviceType?: string;
  createTime?: string;
  sipPassword?: string;
  sipServerPort?: string;
  vendor?: string;
  gbId?: string;
  coverImageUrl?: string;
  accessProtocolType?: string;
  deviceSite?: string;
  longitude?: string;
  latitude?: string;
  resolution?: string;
  sipServerIp?: string;
  bitRate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sipGBId: 'SipGBId',
      deviceDirection: 'DeviceDirection',
      deviceName: 'DeviceName',
      deviceAddress: 'DeviceAddress',
      deviceType: 'DeviceType',
      createTime: 'CreateTime',
      sipPassword: 'SipPassword',
      sipServerPort: 'SipServerPort',
      vendor: 'Vendor',
      gbId: 'GbId',
      coverImageUrl: 'CoverImageUrl',
      accessProtocolType: 'AccessProtocolType',
      deviceSite: 'DeviceSite',
      longitude: 'Longitude',
      latitude: 'Latitude',
      resolution: 'Resolution',
      sipServerIp: 'SipServerIp',
      bitRate: 'BitRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      sipGBId: 'string',
      deviceDirection: 'string',
      deviceName: 'string',
      deviceAddress: 'string',
      deviceType: 'string',
      createTime: 'string',
      sipPassword: 'string',
      sipServerPort: 'string',
      vendor: 'string',
      gbId: 'string',
      coverImageUrl: 'string',
      accessProtocolType: 'string',
      deviceSite: 'string',
      longitude: 'string',
      latitude: 'string',
      resolution: 'string',
      sipServerIp: 'string',
      bitRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $tea.Model {
  records?: ListDevicesResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsResponseBodyData extends $tea.Model {
  rightBottomY?: string;
  dataSourceId?: string;
  picUrlPath?: string;
  recordId?: string;
  extendValue?: string;
  faceCount?: string;
  rightBottomX?: string;
  sourceId?: string;
  extraExtendValue?: string;
  targetPicUrlPath?: string;
  eventType?: string;
  pointY?: string;
  leftTopY?: string;
  pointX?: string;
  corpId?: string;
  eventValue?: string;
  shotTime?: string;
  leftTopX?: string;
  tagCode?: string;
  tagCodeReliability?: string;
  uuidCode?: string;
  static names(): { [key: string]: string } {
    return {
      rightBottomY: 'RightBottomY',
      dataSourceId: 'DataSourceId',
      picUrlPath: 'PicUrlPath',
      recordId: 'RecordId',
      extendValue: 'ExtendValue',
      faceCount: 'FaceCount',
      rightBottomX: 'RightBottomX',
      sourceId: 'SourceId',
      extraExtendValue: 'ExtraExtendValue',
      targetPicUrlPath: 'TargetPicUrlPath',
      eventType: 'EventType',
      pointY: 'PointY',
      leftTopY: 'LeftTopY',
      pointX: 'PointX',
      corpId: 'CorpId',
      eventValue: 'EventValue',
      shotTime: 'ShotTime',
      leftTopX: 'LeftTopX',
      tagCode: 'TagCode',
      tagCodeReliability: 'TagCodeReliability',
      uuidCode: 'UuidCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightBottomY: 'string',
      dataSourceId: 'string',
      picUrlPath: 'string',
      recordId: 'string',
      extendValue: 'string',
      faceCount: 'string',
      rightBottomX: 'string',
      sourceId: 'string',
      extraExtendValue: 'string',
      targetPicUrlPath: 'string',
      eventType: 'string',
      pointY: 'string',
      leftTopY: 'string',
      pointX: 'string',
      corpId: 'string',
      eventValue: 'string',
      shotTime: 'string',
      leftTopX: 'string',
      tagCode: 'string',
      tagCodeReliability: 'string',
      uuidCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponseBodyDataRecords extends $tea.Model {
  extendValueTwo?: string;
  recordId?: string;
  picUrlPath?: string;
  dataSourceId?: string;
  extendValue?: string;
  extendValueThree?: string;
  faceCount?: string;
  targetPicUrlPath?: string;
  eventType?: string;
  corpId?: string;
  shotTime?: string;
  capStyle?: string;
  tagCode?: string;
  tagCodeReliability?: string;
  uuidCode?: string;
  static names(): { [key: string]: string } {
    return {
      extendValueTwo: 'ExtendValueTwo',
      recordId: 'RecordId',
      picUrlPath: 'PicUrlPath',
      dataSourceId: 'DataSourceId',
      extendValue: 'ExtendValue',
      extendValueThree: 'ExtendValueThree',
      faceCount: 'FaceCount',
      targetPicUrlPath: 'TargetPicUrlPath',
      eventType: 'EventType',
      corpId: 'CorpId',
      shotTime: 'ShotTime',
      capStyle: 'CapStyle',
      tagCode: 'TagCode',
      tagCodeReliability: 'TagCodeReliability',
      uuidCode: 'UuidCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendValueTwo: 'string',
      recordId: 'string',
      picUrlPath: 'string',
      dataSourceId: 'string',
      extendValue: 'string',
      extendValueThree: 'string',
      faceCount: 'string',
      targetPicUrlPath: 'string',
      eventType: 'string',
      corpId: 'string',
      shotTime: 'string',
      capStyle: 'string',
      tagCode: 'string',
      tagCodeReliability: 'string',
      uuidCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponseBodyData extends $tea.Model {
  records?: ListEventAlgorithmResultsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListEventAlgorithmResultsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponseBodyDataRecords extends $tea.Model {
  rightBottomY?: number;
  dataSourceId?: string;
  picUrlPath?: string;
  faceId?: string;
  rightBottomX?: number;
  sourceId?: string;
  maxAge?: string;
  targetPicUrlPath?: string;
  hairStyle?: string;
  leftTopY?: number;
  minAge?: string;
  corpId?: string;
  shotTime?: string;
  genderCode?: string;
  capStyle?: string;
  leftTopX?: number;
  static names(): { [key: string]: string } {
    return {
      rightBottomY: 'RightBottomY',
      dataSourceId: 'DataSourceId',
      picUrlPath: 'PicUrlPath',
      faceId: 'FaceId',
      rightBottomX: 'RightBottomX',
      sourceId: 'SourceId',
      maxAge: 'MaxAge',
      targetPicUrlPath: 'TargetPicUrlPath',
      hairStyle: 'HairStyle',
      leftTopY: 'LeftTopY',
      minAge: 'MinAge',
      corpId: 'CorpId',
      shotTime: 'ShotTime',
      genderCode: 'GenderCode',
      capStyle: 'CapStyle',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightBottomY: 'number',
      dataSourceId: 'string',
      picUrlPath: 'string',
      faceId: 'string',
      rightBottomX: 'number',
      sourceId: 'string',
      maxAge: 'string',
      targetPicUrlPath: 'string',
      hairStyle: 'string',
      leftTopY: 'number',
      minAge: 'string',
      corpId: 'string',
      shotTime: 'string',
      genderCode: 'string',
      capStyle: 'string',
      leftTopX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponseBodyData extends $tea.Model {
  records?: ListFaceAlgorithmResultsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListFaceAlgorithmResultsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseBodyDataRecords extends $tea.Model {
  tagMetric?: string;
  tagCode?: string;
  tagValue?: string;
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      tagMetric: 'TagMetric',
      tagCode: 'TagCode',
      tagValue: 'TagValue',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagMetric: 'string',
      tagCode: 'string',
      tagValue: 'string',
      dateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseBodyData extends $tea.Model {
  records?: ListMetricsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListMetricsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponseBodyDataRecords extends $tea.Model {
  motorClass?: string;
  rightBottomY?: number;
  dataSourceId?: string;
  picUrlPath?: string;
  plateClass?: string;
  plateColor?: string;
  rightBottomX?: number;
  sourceId?: string;
  safetyBelt?: string;
  motorStyle?: string;
  targetPicUrlPath?: string;
  leftTopY?: number;
  motorColor?: string;
  plateNumber?: string;
  corpId?: string;
  shotTime?: string;
  calling?: string;
  leftTopX?: number;
  motorBrand?: string;
  motorModel?: string;
  motorId?: string;
  static names(): { [key: string]: string } {
    return {
      motorClass: 'MotorClass',
      rightBottomY: 'RightBottomY',
      dataSourceId: 'DataSourceId',
      picUrlPath: 'PicUrlPath',
      plateClass: 'PlateClass',
      plateColor: 'PlateColor',
      rightBottomX: 'RightBottomX',
      sourceId: 'SourceId',
      safetyBelt: 'SafetyBelt',
      motorStyle: 'MotorStyle',
      targetPicUrlPath: 'TargetPicUrlPath',
      leftTopY: 'LeftTopY',
      motorColor: 'MotorColor',
      plateNumber: 'PlateNumber',
      corpId: 'CorpId',
      shotTime: 'ShotTime',
      calling: 'Calling',
      leftTopX: 'LeftTopX',
      motorBrand: 'MotorBrand',
      motorModel: 'MotorModel',
      motorId: 'MotorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      motorClass: 'string',
      rightBottomY: 'number',
      dataSourceId: 'string',
      picUrlPath: 'string',
      plateClass: 'string',
      plateColor: 'string',
      rightBottomX: 'number',
      sourceId: 'string',
      safetyBelt: 'string',
      motorStyle: 'string',
      targetPicUrlPath: 'string',
      leftTopY: 'number',
      motorColor: 'string',
      plateNumber: 'string',
      corpId: 'string',
      shotTime: 'string',
      calling: 'string',
      leftTopX: 'number',
      motorBrand: 'string',
      motorModel: 'string',
      motorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponseBodyData extends $tea.Model {
  records?: ListMotorAlgorithmResultsResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListMotorAlgorithmResultsResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRChannelDeviceResponseBodyData extends $tea.Model {
  deviceCode?: string;
  deviceName?: string;
  deviceType?: string;
  datasourceType?: string;
  deviceStatus?: string;
  streamStatus?: string;
  comptureStatus?: string;
  deviceSn?: string;
  sampleName?: string;
  regionName?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      datasourceType: 'DatasourceType',
      deviceStatus: 'DeviceStatus',
      streamStatus: 'StreamStatus',
      comptureStatus: 'ComptureStatus',
      deviceSn: 'DeviceSn',
      sampleName: 'SampleName',
      regionName: 'RegionName',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceName: 'string',
      deviceType: 'string',
      datasourceType: 'string',
      deviceStatus: 'string',
      streamStatus: 'string',
      comptureStatus: 'string',
      deviceSn: 'string',
      sampleName: 'string',
      regionName: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNVRDeviceResponseBodyData extends $tea.Model {
  deviceCode?: string;
  deviceName?: string;
  deviceType?: string;
  datasourceType?: string;
  deviceStatus?: string;
  streamStatus?: string;
  comptureStatus?: string;
  regionName?: string;
  projectName?: string;
  registrationTime?: string;
  accessQuota?: string;
  channel?: string;
  deviceSn?: string;
  type?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      datasourceType: 'DatasourceType',
      deviceStatus: 'DeviceStatus',
      streamStatus: 'StreamStatus',
      comptureStatus: 'ComptureStatus',
      regionName: 'RegionName',
      projectName: 'ProjectName',
      registrationTime: 'RegistrationTime',
      accessQuota: 'AccessQuota',
      channel: 'Channel',
      deviceSn: 'DeviceSn',
      type: 'Type',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceName: 'string',
      deviceType: 'string',
      datasourceType: 'string',
      deviceStatus: 'string',
      streamStatus: 'string',
      comptureStatus: 'string',
      regionName: 'string',
      projectName: 'string',
      registrationTime: 'string',
      accessQuota: 'string',
      channel: 'string',
      deviceSn: 'string',
      type: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseBodyDataRecordsTagList extends $tea.Model {
  tagValueId?: string;
  tagName?: string;
  tagCode?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValueId: 'TagValueId',
      tagName: 'TagName',
      tagCode: 'TagCode',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValueId: 'string',
      tagName: 'string',
      tagCode: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseBodyDataRecords extends $tea.Model {
  picUrl?: string;
  tagList?: ListPersonsResponseBodyDataRecordsTagList[];
  firstAppearTime?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      tagList: 'TagList',
      firstAppearTime: 'FirstAppearTime',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      tagList: { 'type': 'array', 'itemType': ListPersonsResponseBodyDataRecordsTagList },
      firstAppearTime: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseBodyData extends $tea.Model {
  records?: ListPersonsResponseBodyDataRecords[];
  pageNo?: string;
  totalPage?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNo: 'PageNo',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': ListPersonsResponseBodyDataRecords },
      pageNo: 'string',
      totalPage: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceResponseBodyData extends $tea.Model {
  endTargetImage?: string;
  lastTime?: string;
  startTime?: string;
  groupId?: string;
  deviceId?: string;
  endSourceImage?: string;
  corpId?: string;
  startSourceImage?: string;
  date?: string;
  personId?: string;
  startTargetImage?: string;
  static names(): { [key: string]: string } {
    return {
      endTargetImage: 'EndTargetImage',
      lastTime: 'LastTime',
      startTime: 'StartTime',
      groupId: 'GroupId',
      deviceId: 'DeviceId',
      endSourceImage: 'EndSourceImage',
      corpId: 'CorpId',
      startSourceImage: 'StartSourceImage',
      date: 'Date',
      personId: 'PersonId',
      startTargetImage: 'StartTargetImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTargetImage: 'string',
      lastTime: 'string',
      startTime: 'string',
      groupId: 'string',
      deviceId: 'string',
      endSourceImage: 'string',
      corpId: 'string',
      startSourceImage: 'string',
      date: 'string',
      personId: 'string',
      startTargetImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceDetailsResponseBodyData extends $tea.Model {
  targetPicUrlPath?: string;
  subId?: string;
  rightBottomY?: string;
  leftTopY?: string;
  picUrlPath?: string;
  dataSourceId?: string;
  corpId?: string;
  shotTime?: string;
  leftTopX?: string;
  rightBottomX?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      targetPicUrlPath: 'TargetPicUrlPath',
      subId: 'SubId',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      picUrlPath: 'PicUrlPath',
      dataSourceId: 'DataSourceId',
      corpId: 'CorpId',
      shotTime: 'ShotTime',
      leftTopX: 'LeftTopX',
      rightBottomX: 'RightBottomX',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetPicUrlPath: 'string',
      subId: 'string',
      rightBottomY: 'string',
      leftTopY: 'string',
      picUrlPath: 'string',
      dataSourceId: 'string',
      corpId: 'string',
      shotTime: 'string',
      leftTopX: 'string',
      rightBottomX: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountResponseBodyData extends $tea.Model {
  dayId?: string;
  groupId?: string;
  deviceId?: string;
  tagCode?: string;
  corpId?: string;
  tagMetrics?: string;
  hourId?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      dayId: 'DayId',
      groupId: 'GroupId',
      deviceId: 'DeviceId',
      tagCode: 'TagCode',
      corpId: 'CorpId',
      tagMetrics: 'TagMetrics',
      hourId: 'HourId',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayId: 'string',
      groupId: 'string',
      deviceId: 'string',
      tagCode: 'string',
      corpId: 'string',
      tagMetrics: 'string',
      hourId: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeDeviceResponseBodyDataSubscribeList extends $tea.Model {
  pushConfig?: string;
  updateTime?: string;
  deviceId?: string;
  createTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      pushConfig: 'PushConfig',
      updateTime: 'UpdateTime',
      deviceId: 'DeviceId',
      createTime: 'CreateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushConfig: 'string',
      updateTime: 'string',
      deviceId: 'string',
      createTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscribeDeviceResponseBodyData extends $tea.Model {
  subscribeList?: ListSubscribeDeviceResponseBodyDataSubscribeList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      subscribeList: 'SubscribeList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeList: { 'type': 'array', 'itemType': ListSubscribeDeviceResponseBodyDataSubscribeList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyData extends $tea.Model {
  updateTime?: string;
  isvSubId?: string;
  userGroupId?: number;
  createTime?: string;
  userGroupName?: string;
  userCount?: number;
  parentUserGroupId?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      createTime: 'CreateTime',
      userGroupName: 'UserGroupName',
      userCount: 'UserCount',
      parentUserGroupId: 'ParentUserGroupId',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      createTime: 'string',
      userGroupName: 'string',
      userCount: 'number',
      parentUserGroupId: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataRecords extends $tea.Model {
  isvSubId?: string;
  gender?: string;
  faceImageUrl?: string;
  userGroupId?: number;
  userId?: number;
  matchingRate?: string;
  bizId?: string;
  attachment?: string;
  age?: string;
  idNumber?: string;
  personId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      isvSubId: 'IsvSubId',
      gender: 'Gender',
      faceImageUrl: 'FaceImageUrl',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      matchingRate: 'MatchingRate',
      bizId: 'BizId',
      attachment: 'Attachment',
      age: 'Age',
      idNumber: 'IdNumber',
      personId: 'PersonId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvSubId: 'string',
      gender: 'string',
      faceImageUrl: 'string',
      userGroupId: 'number',
      userId: 'number',
      matchingRate: 'string',
      bizId: 'string',
      attachment: 'string',
      age: 'string',
      idNumber: 'string',
      personId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  success?: number;
  records?: ListUsersResponseBodyDataRecords[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      records: 'Records',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'number',
      records: { 'type': 'array', 'itemType': ListUsersResponseBodyDataRecords },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponseBodyDataAttributes extends $tea.Model {
  faceScore?: string;
  rightBottomY?: number;
  leftTopY?: number;
  faceStyle?: string;
  faceQuality?: string;
  leftTopX?: number;
  rightBottomX?: number;
  targetImageStoragePath?: string;
  static names(): { [key: string]: string } {
    return {
      faceScore: 'FaceScore',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      faceStyle: 'FaceStyle',
      faceQuality: 'FaceQuality',
      leftTopX: 'LeftTopX',
      rightBottomX: 'RightBottomX',
      targetImageStoragePath: 'TargetImageStoragePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceScore: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      faceStyle: 'string',
      faceQuality: 'string',
      leftTopX: 'number',
      rightBottomX: 'number',
      targetImageStoragePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponseBodyData extends $tea.Model {
  qualityScore?: string;
  description?: string;
  attributes?: RecognizeFaceQualityResponseBodyDataAttributes;
  static names(): { [key: string]: string } {
    return {
      qualityScore: 'QualityScore',
      description: 'Description',
      attributes: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScore: 'string',
      description: 'string',
      attributes: RecognizeFaceQualityResponseBodyDataAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataBodyList extends $tea.Model {
  respiratorColor?: string;
  rightBottomY?: string;
  feature?: string;
  leftTopY?: string;
  imageBaseSixFour?: string;
  fileName?: string;
  rightBottomX?: string;
  localFeature?: string;
  leftTopX?: string;
  static names(): { [key: string]: string } {
    return {
      respiratorColor: 'RespiratorColor',
      rightBottomY: 'RightBottomY',
      feature: 'Feature',
      leftTopY: 'LeftTopY',
      imageBaseSixFour: 'ImageBaseSixFour',
      fileName: 'FileName',
      rightBottomX: 'RightBottomX',
      localFeature: 'LocalFeature',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      respiratorColor: 'string',
      rightBottomY: 'string',
      feature: 'string',
      leftTopY: 'string',
      imageBaseSixFour: 'string',
      fileName: 'string',
      rightBottomX: 'string',
      localFeature: 'string',
      leftTopX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataFaceList extends $tea.Model {
  quality?: number;
  respiratorColor?: string;
  keyPointQuality?: number;
  rightBottomY?: string;
  feature?: string;
  leftTopY?: string;
  imageBaseSixFour?: string;
  fileName?: string;
  rightBottomX?: string;
  localFeature?: string;
  leftTopX?: string;
  static names(): { [key: string]: string } {
    return {
      quality: 'Quality',
      respiratorColor: 'RespiratorColor',
      keyPointQuality: 'KeyPointQuality',
      rightBottomY: 'RightBottomY',
      feature: 'Feature',
      leftTopY: 'LeftTopY',
      imageBaseSixFour: 'ImageBaseSixFour',
      fileName: 'FileName',
      rightBottomX: 'RightBottomX',
      localFeature: 'LocalFeature',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quality: 'number',
      respiratorColor: 'string',
      keyPointQuality: 'number',
      rightBottomY: 'string',
      feature: 'string',
      leftTopY: 'string',
      imageBaseSixFour: 'string',
      fileName: 'string',
      rightBottomX: 'string',
      localFeature: 'string',
      leftTopX: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyData extends $tea.Model {
  bodyList?: RecognizeImageResponseBodyDataBodyList[];
  faceList?: RecognizeImageResponseBodyDataFaceList[];
  static names(): { [key: string]: string } {
    return {
      bodyList: 'BodyList',
      faceList: 'FaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyList: { 'type': 'array', 'itemType': RecognizeImageResponseBodyDataBodyList },
      faceList: { 'type': 'array', 'itemType': RecognizeImageResponseBodyDataFaceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityRequestStreamCapacities extends $tea.Model {
  encodeFormat?: string;
  govLengthRange?: string;
  maxFrameRate?: string;
  bitrateRange?: string;
  maxStream?: string;
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'EncodeFormat',
      govLengthRange: 'GovLengthRange',
      maxFrameRate: 'MaxFrameRate',
      bitrateRange: 'BitrateRange',
      maxStream: 'MaxStream',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      govLengthRange: 'string',
      maxFrameRate: 'string',
      bitrateRange: 'string',
      maxStream: 'string',
      resolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponseBodyDataRecords extends $tea.Model {
  gbId?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  imageUrl?: string;
  leftTopY?: number;
  score?: number;
  leftTopX?: number;
  rightBottomX?: number;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      imageUrl: 'ImageUrl',
      leftTopY: 'LeftTopY',
      score: 'Score',
      leftTopX: 'LeftTopX',
      rightBottomX: 'RightBottomX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      imageUrl: 'string',
      leftTopY: 'number',
      score: 'number',
      leftTopX: 'number',
      rightBottomX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponseBodyData extends $tea.Model {
  records?: SearchBodyResponseBodyDataRecords[];
  pageNo?: number;
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNo: 'PageNo',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': SearchBodyResponseBodyDataRecords },
      pageNo: 'number',
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyDataRecords extends $tea.Model {
  gbId?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  imageUrl?: string;
  leftTopY?: number;
  score?: number;
  sourceId?: string;
  rightBottomX?: number;
  leftTopX?: number;
  matchSuggestion?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      imageUrl: 'ImageUrl',
      leftTopY: 'LeftTopY',
      score: 'Score',
      sourceId: 'SourceId',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
      matchSuggestion: 'MatchSuggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      imageUrl: 'string',
      leftTopY: 'number',
      score: 'number',
      sourceId: 'string',
      rightBottomX: 'number',
      leftTopX: 'number',
      matchSuggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseBodyData extends $tea.Model {
  records?: SearchFaceResponseBodyDataRecords[];
  pageNo?: number;
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNo: 'PageNo',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': SearchFaceResponseBodyDataRecords },
      pageNo: 'number',
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataRecords extends $tea.Model {
  deviceID?: string;
  compareResult?: string;
  rightBtmX?: number;
  score?: number;
  sourceImageUrl?: string;
  sourceID?: string;
  rightBtmY?: number;
  targetImageUrl?: string;
  leftTopY?: number;
  targetImagePath?: string;
  shotTime?: number;
  leftTopX?: number;
  sourceImagePath?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      compareResult: 'CompareResult',
      rightBtmX: 'RightBtmX',
      score: 'Score',
      sourceImageUrl: 'SourceImageUrl',
      sourceID: 'SourceID',
      rightBtmY: 'RightBtmY',
      targetImageUrl: 'TargetImageUrl',
      leftTopY: 'LeftTopY',
      targetImagePath: 'TargetImagePath',
      shotTime: 'ShotTime',
      leftTopX: 'LeftTopX',
      sourceImagePath: 'SourceImagePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      compareResult: 'string',
      rightBtmX: 'number',
      score: 'number',
      sourceImageUrl: 'string',
      sourceID: 'string',
      rightBtmY: 'number',
      targetImageUrl: 'string',
      leftTopY: 'number',
      targetImagePath: 'string',
      shotTime: 'number',
      leftTopX: 'number',
      sourceImagePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyData extends $tea.Model {
  records?: SearchObjectResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': SearchObjectResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogResponseBodyData extends $tea.Model {
  catalogId?: number;
  catalogName?: string;
  isvSubId?: string;
  parentCatalogId?: string;
  profileCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
      isvSubId: 'IsvSubId',
      parentCatalogId: 'ParentCatalogId',
      profileCount: 'ProfileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      catalogName: 'string',
      isvSubId: 'string',
      parentCatalogId: 'string',
      profileCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBodyData extends $tea.Model {
  isvSubId?: string;
  userGroupId?: number;
  userGroupName?: string;
  userCount?: number;
  parentUserGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
      userCount: 'UserCount',
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvSubId: 'string',
      userGroupId: 'number',
      userGroupName: 'string',
      userCount: 'number',
      parentUserGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBodyDataRecords extends $tea.Model {
  ossPath?: string;
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ossPath: 'OssPath',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPath: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseBodyData extends $tea.Model {
  records?: UploadFileResponseBodyDataRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': UploadFileResponseBodyDataRecords },
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
    this._endpoint = this.getEndpoint("vcs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addDataSourceWithOptions(request: AddDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<AddDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDataSourceResponse>(await this.doRPCRequest("AddDataSource", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddDataSourceResponse({}));
  }

  async addDataSource(request: AddDataSourceRequest): Promise<AddDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  async addDeviceWithOptions(request: AddDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDeviceResponse>(await this.doRPCRequest("AddDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddDeviceResponse({}));
  }

  async addDevice(request: AddDeviceRequest): Promise<AddDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeviceWithOptions(request, runtime);
  }

  async addMonitorWithOptions(request: AddMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddMonitorResponse>(await this.doRPCRequest("AddMonitor", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddMonitorResponse({}));
  }

  async addMonitor(request: AddMonitorRequest): Promise<AddMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMonitorWithOptions(request, runtime);
  }

  async addProfileWithOptions(request: AddProfileRequest, runtime: $Util.RuntimeOptions): Promise<AddProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddProfileResponse>(await this.doRPCRequest("AddProfile", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddProfileResponse({}));
  }

  async addProfile(request: AddProfileRequest): Promise<AddProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProfileWithOptions(request, runtime);
  }

  async addProfileCatalogWithOptions(request: AddProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<AddProfileCatalogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddProfileCatalogResponse>(await this.doRPCRequest("AddProfileCatalog", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddProfileCatalogResponse({}));
  }

  async addProfileCatalog(request: AddProfileCatalogRequest): Promise<AddProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProfileCatalogWithOptions(request, runtime);
  }

  async bindCorpGroupWithOptions(request: BindCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<BindCorpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindCorpGroupResponse>(await this.doRPCRequest("BindCorpGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindCorpGroupResponse({}));
  }

  async bindCorpGroup(request: BindCorpGroupRequest): Promise<BindCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindCorpGroupWithOptions(request, runtime);
  }

  async bindPersonWithOptions(request: BindPersonRequest, runtime: $Util.RuntimeOptions): Promise<BindPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindPersonResponse>(await this.doRPCRequest("BindPerson", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindPersonResponse({}));
  }

  async bindPerson(request: BindPersonRequest): Promise<BindPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPersonWithOptions(request, runtime);
  }

  async bindUserWithOptions(request: BindUserRequest, runtime: $Util.RuntimeOptions): Promise<BindUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindUserResponse>(await this.doRPCRequest("BindUser", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindUserResponse({}));
  }

  async bindUser(request: BindUserRequest): Promise<BindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindUserWithOptions(request, runtime);
  }

  async createCorpWithOptions(request: CreateCorpRequest, runtime: $Util.RuntimeOptions): Promise<CreateCorpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCorpResponse>(await this.doRPCRequest("CreateCorp", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCorpResponse({}));
  }

  async createCorp(request: CreateCorpRequest): Promise<CreateCorpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCorpWithOptions(request, runtime);
  }

  async createCorpGroupWithOptions(request: CreateCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateCorpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCorpGroupResponse>(await this.doRPCRequest("CreateCorpGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCorpGroupResponse({}));
  }

  async createCorpGroup(request: CreateCorpGroupRequest): Promise<CreateCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCorpGroupWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserGroupResponse>(await this.doRPCRequest("CreateUserGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserGroupResponse({}));
  }

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  async createVideoComposeTaskWithOptions(request: CreateVideoComposeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoComposeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoComposeTaskResponse>(await this.doRPCRequest("CreateVideoComposeTask", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoComposeTaskResponse({}));
  }

  async createVideoComposeTask(request: CreateVideoComposeTaskRequest): Promise<CreateVideoComposeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoComposeTaskWithOptions(request, runtime);
  }

  async createVideoSummaryTaskWithOptions(request: CreateVideoSummaryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoSummaryTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVideoSummaryTaskResponse>(await this.doRPCRequest("CreateVideoSummaryTask", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVideoSummaryTaskResponse({}));
  }

  async createVideoSummaryTask(request: CreateVideoSummaryTaskRequest): Promise<CreateVideoSummaryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoSummaryTaskWithOptions(request, runtime);
  }

  async deleteChannelWithOptions(request: DeleteChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChannelResponse>(await this.doRPCRequest("DeleteChannel", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChannelResponse({}));
  }

  async deleteChannel(request: DeleteChannelRequest): Promise<DeleteChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  async deleteCorpGroupWithOptions(request: DeleteCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCorpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCorpGroupResponse>(await this.doRPCRequest("DeleteCorpGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCorpGroupResponse({}));
  }

  async deleteCorpGroup(request: DeleteCorpGroupRequest): Promise<DeleteCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCorpGroupWithOptions(request, runtime);
  }

  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.doRPCRequest("DeleteDataSource", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataSourceResponse({}));
  }

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async deleteDeviceForInstanceWithOptions(tmpReq: DeleteDeviceForInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceForInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteDeviceForInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.devices)) {
      request.devicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.devices, "Devices", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceForInstanceResponse>(await this.doRPCRequest("DeleteDeviceForInstance", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceForInstanceResponse({}));
  }

  async deleteDeviceForInstance(request: DeleteDeviceForInstanceRequest): Promise<DeleteDeviceForInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceForInstanceWithOptions(request, runtime);
  }

  async deleteIPCDeviceWithOptions(request: DeleteIPCDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIPCDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteIPCDeviceResponse>(await this.doRPCRequest("DeleteIPCDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteIPCDeviceResponse({}));
  }

  async deleteIPCDevice(request: DeleteIPCDeviceRequest): Promise<DeleteIPCDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIPCDeviceWithOptions(request, runtime);
  }

  async deleteNVRDeviceWithOptions(request: DeleteNVRDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNVRDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNVRDeviceResponse>(await this.doRPCRequest("DeleteNVRDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNVRDeviceResponse({}));
  }

  async deleteNVRDevice(request: DeleteNVRDeviceRequest): Promise<DeleteNVRDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNVRDeviceWithOptions(request, runtime);
  }

  async deleteProfileWithOptions(request: DeleteProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProfileResponse>(await this.doRPCRequest("DeleteProfile", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProfileResponse({}));
  }

  async deleteProfile(request: DeleteProfileRequest): Promise<DeleteProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProfileWithOptions(request, runtime);
  }

  async deleteProfileCatalogWithOptions(request: DeleteProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProfileCatalogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProfileCatalogResponse>(await this.doRPCRequest("DeleteProfileCatalog", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProfileCatalogResponse({}));
  }

  async deleteProfileCatalog(request: DeleteProfileCatalogRequest): Promise<DeleteProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProfileCatalogWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async deleteRecordsWithOptions(request: DeleteRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRecordsResponse>(await this.doRPCRequest("DeleteRecords", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRecordsResponse({}));
  }

  async deleteRecords(request: DeleteRecordsRequest): Promise<DeleteRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordsWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserGroupResponse>(await this.doRPCRequest("DeleteUserGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  async deleteVideoSummaryTaskWithOptions(request: DeleteVideoSummaryTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoSummaryTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVideoSummaryTaskResponse>(await this.doRPCRequest("DeleteVideoSummaryTask", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVideoSummaryTaskResponse({}));
  }

  async deleteVideoSummaryTask(request: DeleteVideoSummaryTaskRequest): Promise<DeleteVideoSummaryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoSummaryTaskWithOptions(request, runtime);
  }

  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDevicesResponse>(await this.doRPCRequest("DescribeDevices", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDevicesResponse({}));
  }

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  async getBodyOptionsWithOptions(request: GetBodyOptionsRequest, runtime: $Util.RuntimeOptions): Promise<GetBodyOptionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBodyOptionsResponse>(await this.doRPCRequest("GetBodyOptions", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetBodyOptionsResponse({}));
  }

  async getBodyOptions(request: GetBodyOptionsRequest): Promise<GetBodyOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBodyOptionsWithOptions(request, runtime);
  }

  async getCatalogListWithOptions(request: GetCatalogListRequest, runtime: $Util.RuntimeOptions): Promise<GetCatalogListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCatalogListResponse>(await this.doRPCRequest("GetCatalogList", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetCatalogListResponse({}));
  }

  async getCatalogList(request: GetCatalogListRequest): Promise<GetCatalogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCatalogListWithOptions(request, runtime);
  }

  async getDeviceCaptureStrategyWithOptions(request: GetDeviceCaptureStrategyRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceCaptureStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceCaptureStrategyResponse>(await this.doRPCRequest("GetDeviceCaptureStrategy", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceCaptureStrategyResponse({}));
  }

  async getDeviceCaptureStrategy(request: GetDeviceCaptureStrategyRequest): Promise<GetDeviceCaptureStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceCaptureStrategyWithOptions(request, runtime);
  }

  async getDeviceConfigWithOptions(request: GetDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceConfigResponse>(await this.doRPCRequest("GetDeviceConfig", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceConfigResponse({}));
  }

  async getDeviceConfig(request: GetDeviceConfigRequest): Promise<GetDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigWithOptions(request, runtime);
  }

  async getDeviceLiveUrlWithOptions(request: GetDeviceLiveUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceLiveUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceLiveUrlResponse>(await this.doRPCRequest("GetDeviceLiveUrl", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceLiveUrlResponse({}));
  }

  async getDeviceLiveUrl(request: GetDeviceLiveUrlRequest): Promise<GetDeviceLiveUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceLiveUrlWithOptions(request, runtime);
  }

  async getDeviceVideoUrlWithOptions(request: GetDeviceVideoUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceVideoUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceVideoUrlResponse>(await this.doRPCRequest("GetDeviceVideoUrl", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceVideoUrlResponse({}));
  }

  async getDeviceVideoUrl(request: GetDeviceVideoUrlRequest): Promise<GetDeviceVideoUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceVideoUrlWithOptions(request, runtime);
  }

  async getFaceModelResultWithOptions(request: GetFaceModelResultRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceModelResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFaceModelResultResponse>(await this.doRPCRequest("GetFaceModelResult", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetFaceModelResultResponse({}));
  }

  async getFaceModelResult(request: GetFaceModelResultRequest): Promise<GetFaceModelResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceModelResultWithOptions(request, runtime);
  }

  async getFaceOptionsWithOptions(request: GetFaceOptionsRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceOptionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFaceOptionsResponse>(await this.doRPCRequest("GetFaceOptions", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetFaceOptionsResponse({}));
  }

  async getFaceOptions(request: GetFaceOptionsRequest): Promise<GetFaceOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceOptionsWithOptions(request, runtime);
  }

  async getInventoryWithOptions(request: GetInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GetInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInventoryResponse>(await this.doRPCRequest("GetInventory", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetInventoryResponse({}));
  }

  async getInventory(request: GetInventoryRequest): Promise<GetInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInventoryWithOptions(request, runtime);
  }

  async getMonitorListWithOptions(request: GetMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMonitorListResponse>(await this.doRPCRequest("GetMonitorList", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetMonitorListResponse({}));
  }

  async getMonitorList(request: GetMonitorListRequest): Promise<GetMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorListWithOptions(request, runtime);
  }

  async getMonitorResultWithOptions(request: GetMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMonitorResultResponse>(await this.doRPCRequest("GetMonitorResult", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetMonitorResultResponse({}));
  }

  async getMonitorResult(request: GetMonitorResultRequest): Promise<GetMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorResultWithOptions(request, runtime);
  }

  async getPersonDetailWithOptions(request: GetPersonDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPersonDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPersonDetailResponse>(await this.doRPCRequest("GetPersonDetail", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetPersonDetailResponse({}));
  }

  async getPersonDetail(request: GetPersonDetailRequest): Promise<GetPersonDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPersonDetailWithOptions(request, runtime);
  }

  async getPersonListWithOptions(tmpReq: GetPersonListRequest, runtime: $Util.RuntimeOptions): Promise<GetPersonListResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPersonListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.corpIdList)) {
      request.corpIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.corpIdList, "CorpIdList", "json");
    }

    if (!Util.isUnset(tmpReq.personIdList)) {
      request.personIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personIdList, "PersonIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPersonListResponse>(await this.doRPCRequest("GetPersonList", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetPersonListResponse({}));
  }

  async getPersonList(request: GetPersonListRequest): Promise<GetPersonListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPersonListWithOptions(request, runtime);
  }

  async getProfileDetailWithOptions(request: GetProfileDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetProfileDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProfileDetailResponse>(await this.doRPCRequest("GetProfileDetail", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetProfileDetailResponse({}));
  }

  async getProfileDetail(request: GetProfileDetailRequest): Promise<GetProfileDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProfileDetailWithOptions(request, runtime);
  }

  async getProfileListWithOptions(tmpReq: GetProfileListRequest, runtime: $Util.RuntimeOptions): Promise<GetProfileListResponse> {
    Util.validateModel(tmpReq);
    let request = new GetProfileListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.personIdList)) {
      request.personIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personIdList, "PersonIdList", "json");
    }

    if (!Util.isUnset(tmpReq.profileIdList)) {
      request.profileIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.profileIdList, "ProfileIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProfileListResponse>(await this.doRPCRequest("GetProfileList", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetProfileListResponse({}));
  }

  async getProfileList(request: GetProfileListRequest): Promise<GetProfileListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProfileListWithOptions(request, runtime);
  }

  async getUserDetailWithOptions(request: GetUserDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetUserDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserDetailResponse>(await this.doRPCRequest("GetUserDetail", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserDetailResponse({}));
  }

  async getUserDetail(request: GetUserDetailRequest): Promise<GetUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDetailWithOptions(request, runtime);
  }

  async getVideoComposeResultWithOptions(request: GetVideoComposeResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoComposeResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoComposeResultResponse>(await this.doRPCRequest("GetVideoComposeResult", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoComposeResultResponse({}));
  }

  async getVideoComposeResult(request: GetVideoComposeResultRequest): Promise<GetVideoComposeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoComposeResultWithOptions(request, runtime);
  }

  async getVideoSummaryTaskResultWithOptions(request: GetVideoSummaryTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoSummaryTaskResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoSummaryTaskResultResponse>(await this.doRPCRequest("GetVideoSummaryTaskResult", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoSummaryTaskResultResponse({}));
  }

  async getVideoSummaryTaskResult(request: GetVideoSummaryTaskResultRequest): Promise<GetVideoSummaryTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoSummaryTaskResultWithOptions(request, runtime);
  }

  async invokeMotorModelWithOptions(request: InvokeMotorModelRequest, runtime: $Util.RuntimeOptions): Promise<InvokeMotorModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeMotorModelResponse>(await this.doRPCRequest("InvokeMotorModel", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeMotorModelResponse({}));
  }

  async invokeMotorModel(request: InvokeMotorModelRequest): Promise<InvokeMotorModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeMotorModelWithOptions(request, runtime);
  }

  async listAccessNumberWithOptions(request: ListAccessNumberRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccessNumberResponse>(await this.doRPCRequest("ListAccessNumber", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccessNumberResponse({}));
  }

  async listAccessNumber(request: ListAccessNumberRequest): Promise<ListAccessNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessNumberWithOptions(request, runtime);
  }

  async listBodyAlgorithmResultsWithOptions(request: ListBodyAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyAlgorithmResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBodyAlgorithmResultsResponse>(await this.doRPCRequest("ListBodyAlgorithmResults", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListBodyAlgorithmResultsResponse({}));
  }

  async listBodyAlgorithmResults(request: ListBodyAlgorithmResultsRequest): Promise<ListBodyAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyAlgorithmResultsWithOptions(request, runtime);
  }

  async listCorpGroupMetricsWithOptions(request: ListCorpGroupMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpGroupMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorpGroupMetricsResponse>(await this.doRPCRequest("ListCorpGroupMetrics", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorpGroupMetricsResponse({}));
  }

  async listCorpGroupMetrics(request: ListCorpGroupMetricsRequest): Promise<ListCorpGroupMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpGroupMetricsWithOptions(request, runtime);
  }

  async listCorpGroupsWithOptions(request: ListCorpGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorpGroupsResponse>(await this.doRPCRequest("ListCorpGroups", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorpGroupsResponse({}));
  }

  async listCorpGroups(request: ListCorpGroupsRequest): Promise<ListCorpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpGroupsWithOptions(request, runtime);
  }

  async listCorpMetricsWithOptions(request: ListCorpMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorpMetricsResponse>(await this.doRPCRequest("ListCorpMetrics", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorpMetricsResponse({}));
  }

  async listCorpMetrics(request: ListCorpMetricsRequest): Promise<ListCorpMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpMetricsWithOptions(request, runtime);
  }

  async listCorpsWithOptions(request: ListCorpsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorpsResponse>(await this.doRPCRequest("ListCorps", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorpsResponse({}));
  }

  async listCorps(request: ListCorpsRequest): Promise<ListCorpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpsWithOptions(request, runtime);
  }

  async listDeviceGroupsWithOptions(request: ListDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeviceGroupsResponse>(await this.doRPCRequest("ListDeviceGroups", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeviceGroupsResponse({}));
  }

  async listDeviceGroups(request: ListDeviceGroupsRequest): Promise<ListDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceGroupsWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevicesResponse>(await this.doRPCRequest("ListDevices", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async listEventAlgorithmDetailsWithOptions(request: ListEventAlgorithmDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventAlgorithmDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEventAlgorithmDetailsResponse>(await this.doRPCRequest("ListEventAlgorithmDetails", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListEventAlgorithmDetailsResponse({}));
  }

  async listEventAlgorithmDetails(request: ListEventAlgorithmDetailsRequest): Promise<ListEventAlgorithmDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventAlgorithmDetailsWithOptions(request, runtime);
  }

  async listEventAlgorithmResultsWithOptions(request: ListEventAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventAlgorithmResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEventAlgorithmResultsResponse>(await this.doRPCRequest("ListEventAlgorithmResults", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListEventAlgorithmResultsResponse({}));
  }

  async listEventAlgorithmResults(request: ListEventAlgorithmResultsRequest): Promise<ListEventAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventAlgorithmResultsWithOptions(request, runtime);
  }

  async listFaceAlgorithmResultsWithOptions(request: ListFaceAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceAlgorithmResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceAlgorithmResultsResponse>(await this.doRPCRequest("ListFaceAlgorithmResults", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceAlgorithmResultsResponse({}));
  }

  async listFaceAlgorithmResults(request: ListFaceAlgorithmResultsRequest): Promise<ListFaceAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceAlgorithmResultsWithOptions(request, runtime);
  }

  async listMetricsWithOptions(request: ListMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMetricsResponse>(await this.doRPCRequest("ListMetrics", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListMetricsResponse({}));
  }

  async listMetrics(request: ListMetricsRequest): Promise<ListMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetricsWithOptions(request, runtime);
  }

  async listMotorAlgorithmResultsWithOptions(request: ListMotorAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListMotorAlgorithmResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMotorAlgorithmResultsResponse>(await this.doRPCRequest("ListMotorAlgorithmResults", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListMotorAlgorithmResultsResponse({}));
  }

  async listMotorAlgorithmResults(request: ListMotorAlgorithmResultsRequest): Promise<ListMotorAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMotorAlgorithmResultsWithOptions(request, runtime);
  }

  async listNVRChannelDeviceWithOptions(request: ListNVRChannelDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListNVRChannelDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNVRChannelDeviceResponse>(await this.doRPCRequest("ListNVRChannelDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListNVRChannelDeviceResponse({}));
  }

  async listNVRChannelDevice(request: ListNVRChannelDeviceRequest): Promise<ListNVRChannelDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNVRChannelDeviceWithOptions(request, runtime);
  }

  async listNVRDeviceWithOptions(request: ListNVRDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListNVRDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNVRDeviceResponse>(await this.doRPCRequest("ListNVRDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListNVRDeviceResponse({}));
  }

  async listNVRDevice(request: ListNVRDeviceRequest): Promise<ListNVRDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNVRDeviceWithOptions(request, runtime);
  }

  async listPersonsWithOptions(request: ListPersonsRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonsResponse>(await this.doRPCRequest("ListPersons", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonsResponse({}));
  }

  async listPersons(request: ListPersonsRequest): Promise<ListPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonsWithOptions(request, runtime);
  }

  async listPersonTraceWithOptions(request: ListPersonTraceRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTraceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonTraceResponse>(await this.doRPCRequest("ListPersonTrace", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonTraceResponse({}));
  }

  async listPersonTrace(request: ListPersonTraceRequest): Promise<ListPersonTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTraceWithOptions(request, runtime);
  }

  async listPersonTraceDetailsWithOptions(request: ListPersonTraceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTraceDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonTraceDetailsResponse>(await this.doRPCRequest("ListPersonTraceDetails", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonTraceDetailsResponse({}));
  }

  async listPersonTraceDetails(request: ListPersonTraceDetailsRequest): Promise<ListPersonTraceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTraceDetailsWithOptions(request, runtime);
  }

  async listPersonVisitCountWithOptions(request: ListPersonVisitCountRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonVisitCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonVisitCountResponse>(await this.doRPCRequest("ListPersonVisitCount", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonVisitCountResponse({}));
  }

  async listPersonVisitCount(request: ListPersonVisitCountRequest): Promise<ListPersonVisitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonVisitCountWithOptions(request, runtime);
  }

  async listSubscribeDeviceWithOptions(request: ListSubscribeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListSubscribeDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSubscribeDeviceResponse>(await this.doRPCRequest("ListSubscribeDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSubscribeDeviceResponse({}));
  }

  async listSubscribeDevice(request: ListSubscribeDeviceRequest): Promise<ListSubscribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubscribeDeviceWithOptions(request, runtime);
  }

  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserGroupsResponse>(await this.doRPCRequest("ListUserGroups", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserGroupsResponse({}));
  }

  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  async listUsersWithOptions(tmpReq: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.personList)) {
      request.personListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personList, "PersonList", "json");
    }

    if (!Util.isUnset(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "UserList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async recognizeFaceQualityWithOptions(request: RecognizeFaceQualityRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceQualityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFaceQualityResponse>(await this.doRPCRequest("RecognizeFaceQuality", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFaceQualityResponse({}));
  }

  async recognizeFaceQuality(request: RecognizeFaceQualityRequest): Promise<RecognizeFaceQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFaceQualityWithOptions(request, runtime);
  }

  async recognizeImageWithOptions(request: RecognizeImageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageResponse>(await this.doRPCRequest("RecognizeImage", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageResponse({}));
  }

  async recognizeImage(request: RecognizeImageRequest): Promise<RecognizeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterDeviceResponse>(await this.doRPCRequest("RegisterDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async reportDeviceCapacityWithOptions(request: ReportDeviceCapacityRequest, runtime: $Util.RuntimeOptions): Promise<ReportDeviceCapacityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReportDeviceCapacityResponse>(await this.doRPCRequest("ReportDeviceCapacity", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReportDeviceCapacityResponse({}));
  }

  async reportDeviceCapacity(request: ReportDeviceCapacityRequest): Promise<ReportDeviceCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportDeviceCapacityWithOptions(request, runtime);
  }

  async saveVideoSummaryTaskVideoWithOptions(request: SaveVideoSummaryTaskVideoRequest, runtime: $Util.RuntimeOptions): Promise<SaveVideoSummaryTaskVideoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveVideoSummaryTaskVideoResponse>(await this.doRPCRequest("SaveVideoSummaryTaskVideo", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveVideoSummaryTaskVideoResponse({}));
  }

  async saveVideoSummaryTaskVideo(request: SaveVideoSummaryTaskVideoRequest): Promise<SaveVideoSummaryTaskVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveVideoSummaryTaskVideoWithOptions(request, runtime);
  }

  async searchBodyWithOptions(tmpReq: SearchBodyRequest, runtime: $Util.RuntimeOptions): Promise<SearchBodyResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchBodyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optionList)) {
      request.optionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optionList, "OptionList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchBodyResponse>(await this.doRPCRequest("SearchBody", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SearchBodyResponse({}));
  }

  async searchBody(request: SearchBodyRequest): Promise<SearchBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchBodyWithOptions(request, runtime);
  }

  async searchFaceWithOptions(tmpReq: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchFaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optionList)) {
      request.optionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optionList, "OptionList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchFaceResponse>(await this.doRPCRequest("SearchFace", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SearchFaceResponse({}));
  }

  async searchFace(request: SearchFaceRequest): Promise<SearchFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFaceWithOptions(request, runtime);
  }

  async searchObjectWithOptions(tmpReq: SearchObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchObjectResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchObjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceList)) {
      request.deviceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceList, "DeviceList", "json");
    }

    if (!Util.isUnset(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    if (!Util.isUnset(tmpReq.imagePath)) {
      request.imagePathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imagePath, "ImagePath", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchObjectResponse>(await this.doRPCRequest("SearchObject", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SearchObjectResponse({}));
  }

  async searchObject(request: SearchObjectRequest): Promise<SearchObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchObjectWithOptions(request, runtime);
  }

  async stopMonitorWithOptions(request: StopMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMonitorResponse>(await this.doRPCRequest("StopMonitor", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopMonitorResponse({}));
  }

  async stopMonitor(request: StopMonitorRequest): Promise<StopMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMonitorWithOptions(request, runtime);
  }

  async subscribeDeviceEventWithOptions(request: SubscribeDeviceEventRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeDeviceEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubscribeDeviceEventResponse>(await this.doRPCRequest("SubscribeDeviceEvent", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubscribeDeviceEventResponse({}));
  }

  async subscribeDeviceEvent(request: SubscribeDeviceEventRequest): Promise<SubscribeDeviceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeDeviceEventWithOptions(request, runtime);
  }

  async subscribeSpaceEventWithOptions(request: SubscribeSpaceEventRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeSpaceEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubscribeSpaceEventResponse>(await this.doRPCRequest("SubscribeSpaceEvent", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubscribeSpaceEventResponse({}));
  }

  async subscribeSpaceEvent(request: SubscribeSpaceEventRequest): Promise<SubscribeSpaceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeSpaceEventWithOptions(request, runtime);
  }

  async syncDeviceTimeWithOptions(request: SyncDeviceTimeRequest, runtime: $Util.RuntimeOptions): Promise<SyncDeviceTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncDeviceTimeResponse>(await this.doRPCRequest("SyncDeviceTime", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new SyncDeviceTimeResponse({}));
  }

  async syncDeviceTime(request: SyncDeviceTimeRequest): Promise<SyncDeviceTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncDeviceTimeWithOptions(request, runtime);
  }

  async unbindCorpGroupWithOptions(request: UnbindCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<UnbindCorpGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindCorpGroupResponse>(await this.doRPCRequest("UnbindCorpGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindCorpGroupResponse({}));
  }

  async unbindCorpGroup(request: UnbindCorpGroupRequest): Promise<UnbindCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindCorpGroupWithOptions(request, runtime);
  }

  async unbindPersonWithOptions(request: UnbindPersonRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindPersonResponse>(await this.doRPCRequest("UnbindPerson", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindPersonResponse({}));
  }

  async unbindPerson(request: UnbindPersonRequest): Promise<UnbindPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPersonWithOptions(request, runtime);
  }

  async unbindUserWithOptions(request: UnbindUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindUserResponse>(await this.doRPCRequest("UnbindUser", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindUserResponse({}));
  }

  async unbindUser(request: UnbindUserRequest): Promise<UnbindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindUserWithOptions(request, runtime);
  }

  async unsubscribeDeviceEventWithOptions(request: UnsubscribeDeviceEventRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeDeviceEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnsubscribeDeviceEventResponse>(await this.doRPCRequest("UnsubscribeDeviceEvent", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnsubscribeDeviceEventResponse({}));
  }

  async unsubscribeDeviceEvent(request: UnsubscribeDeviceEventRequest): Promise<UnsubscribeDeviceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeDeviceEventWithOptions(request, runtime);
  }

  async unsubscribeSpaceEventWithOptions(request: UnsubscribeSpaceEventRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeSpaceEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnsubscribeSpaceEventResponse>(await this.doRPCRequest("UnsubscribeSpaceEvent", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnsubscribeSpaceEventResponse({}));
  }

  async unsubscribeSpaceEvent(request: UnsubscribeSpaceEventRequest): Promise<UnsubscribeSpaceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeSpaceEventWithOptions(request, runtime);
  }

  async updateCorpWithOptions(request: UpdateCorpRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCorpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCorpResponse>(await this.doRPCRequest("UpdateCorp", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCorpResponse({}));
  }

  async updateCorp(request: UpdateCorpRequest): Promise<UpdateCorpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCorpWithOptions(request, runtime);
  }

  async updateDeviceWithOptions(request: UpdateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceResponse>(await this.doRPCRequest("UpdateDevice", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceResponse({}));
  }

  async updateDevice(request: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceWithOptions(request, runtime);
  }

  async updateDeviceCaptureStrategyWithOptions(request: UpdateDeviceCaptureStrategyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceCaptureStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceCaptureStrategyResponse>(await this.doRPCRequest("UpdateDeviceCaptureStrategy", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceCaptureStrategyResponse({}));
  }

  async updateDeviceCaptureStrategy(request: UpdateDeviceCaptureStrategyRequest): Promise<UpdateDeviceCaptureStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceCaptureStrategyWithOptions(request, runtime);
  }

  async updateMonitorWithOptions(request: UpdateMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMonitorResponse>(await this.doRPCRequest("UpdateMonitor", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMonitorResponse({}));
  }

  async updateMonitor(request: UpdateMonitorRequest): Promise<UpdateMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMonitorWithOptions(request, runtime);
  }

  async updateProfileWithOptions(request: UpdateProfileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProfileResponse>(await this.doRPCRequest("UpdateProfile", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProfileResponse({}));
  }

  async updateProfile(request: UpdateProfileRequest): Promise<UpdateProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProfileWithOptions(request, runtime);
  }

  async updateProfileCatalogWithOptions(request: UpdateProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProfileCatalogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProfileCatalogResponse>(await this.doRPCRequest("UpdateProfileCatalog", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProfileCatalogResponse({}));
  }

  async updateProfileCatalog(request: UpdateProfileCatalogRequest): Promise<UpdateProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProfileCatalogWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserGroupResponse>(await this.doRPCRequest("UpdateUserGroup", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserGroupResponse({}));
  }

  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  async uploadFileWithOptions(request: UploadFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadFileResponse>(await this.doRPCRequest("UploadFile", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadFileResponse({}));
  }

  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  async uploadImageWithOptions(request: UploadImageRequest, runtime: $Util.RuntimeOptions): Promise<UploadImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadImageResponse>(await this.doRPCRequest("UploadImage", "2020-05-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadImageResponse({}));
  }

  async uploadImage(request: UploadImageRequest): Promise<UploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadImageWithOptions(request, runtime);
  }

}
